package com.metacube.senchacon.demoapp.view.manager;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.metacube.senchacon.demoapp.common.enums.ErrorReason;
import com.metacube.senchacon.demoapp.common.enums.JSONMessages;
import com.metacube.senchacon.demoapp.common.util.EntityToViewUtils;
import com.metacube.senchacon.demoapp.common.util.JSONUtils;
import com.metacube.senchacon.demoapp.common.util.ModelUtils;
import com.metacube.senchacon.demoapp.model.entity.DataSources;
import com.metacube.senchacon.demoapp.model.entity.DatabaseTable;
import com.metacube.senchacon.demoapp.model.entity.DatabaseTableFields;
import com.metacube.senchacon.demoapp.service.DataSourceParserService;
import com.metacube.senchacon.demoapp.service.DatabaseTableService;
import com.metacube.senchacon.demoapp.service.UserService;
import com.metacube.senchacon.demoapp.view.model.DataSourcesView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;

@Component
public class DatabaseTableManager
{
	final static Logger logger = LoggerFactory.getLogger(DashboardManager.class);

	@Autowired
	private DatabaseTableService databaseTableService;

	@Autowired
	private DataSourceParserService dataSourceParserService;

	@Autowired
	private UserService userService;

	public String getAllDatabaseTables()
	{
		ArrayList<DatabaseTableView> databaseTables = databaseTableService.getAllDatabaseTables();
		return JSONUtils.getDatabaseTableJSON(databaseTables);
	}
	
	public String getAllConfiguredDataSources()
	{
		ArrayList<DataSourcesView> dataSources = databaseTableService.getAllConfiguredDataSources();
		return JSONUtils.getDataSourceJSON(dataSources);
	}

	public String getAllDatabasesTablesDataForCaching(String[] databasesToCache)
	{
		ArrayList<DatabaseTableView> databaseTables = new ArrayList<DatabaseTableView>();
		databaseTables = databaseTableService.getAllDatabaseTables();
		for (int index = 0; index < databaseTables.size(); index++)
		{
			Boolean cacheFields = false;
			for (int innerIndex = 0; innerIndex < databasesToCache.length; innerIndex++)
			{
				if (databasesToCache[innerIndex].equalsIgnoreCase(databaseTables.get(index).getTableName()))
				{
					cacheFields = true;
				}
			}
			if (cacheFields)
			{
				ArrayList<DatabaseTableFieldsView> fields = databaseTableService.getAllDatabaseTableFieldsForDatabaseTable(databaseTables
						.get(index).getId());
				databaseTables.get(index).setTableFields(fields);
			}
		}
		return JSONUtils.getDatabaseTableJSON(databaseTables);
	}

	public DatabaseTableView findDatabaseTableViewForDatabaseName(String databaseName)
	{
		return databaseTableService.getDatabaseTableView(databaseName);
	}

	public String getAllDatabaseTableFieldsForTable(Long databaseTableId)
	{
		ArrayList<DatabaseTableFieldsView> databaseTableFields = databaseTableService
				.getAllDatabaseTableFieldsForDatabaseTable(databaseTableId);
		return JSONUtils.getDatabaseTableFieldsJSON(databaseTableFields);
	}

	public DatabaseTableFieldsView findDatabaseTableFieldsViewForFieldName(DatabaseTableView database, String fieldName)
	{
		return databaseTableService.getDatabaseTableFieldView(database, fieldName);
	}

	public DatabaseTableFieldsView findTimeDatabaseTableFieldsViewForDatabase(DatabaseTableView database)
	{
		return databaseTableService.getTimeDatabaseTableFieldView(database);
	}

	public String saveUploadedFileEntity(File uploadedFile)
	{
		DataSources dataSource = new DataSources();
		if (uploadedFile != null)
		{
			dataSource = ModelUtils.entityForDataSource(dataSource, null, null, uploadedFile.getPath(), Boolean.TRUE, Boolean.FALSE, null);
		}
		if (databaseTableService.saveDataSource(dataSource))
		{
			ArrayList<DatabaseTableFields> tableFields = dataSourceParserService.processDataSourceExcelFile(uploadedFile, dataSource);
			if (tableFields != null && tableFields.size() > 0)
			{
				databaseTableService.saveDatabaseTableFields(tableFields);
			}
			DataSourcesView view = EntityToViewUtils.dataSourcesEntityToView(dataSource);
			view.setTableFields(databaseTableService.getAllDatabaseTableFieldsForDataSource(view.getId()));
			return JSONUtils.getMessageJSON(JSONMessages.SUCCESS_SAVING_UPLOADED_DATA_SOURCE_FILE, view);
		}
		return JSONUtils.getErrorJSON(ErrorReason.FAILED_SAVING_UPLOADED_FILE);
	}

	public String saveDataSourceConfiguration(Long userId, Long dataSourceId, String dataSourceName, String tableFieldsJSON)
	{
		DataSources dataSource = databaseTableService.findDataSourceById(dataSourceId);
		dataSource.setDataSourceName(dataSourceName);
		databaseTableService.saveDataSource(dataSource);
		ArrayList<DatabaseTableFields> tableFields = dataSourceParserService.getTableFieldsFromJSONString(tableFieldsJSON);
		if (tableFields != null && tableFields.size() > 0)
		{
			databaseTableService.saveDatabaseTableFields(tableFields);
		}
		DatabaseTable databaseTable = dataSourceParserService.createDatabaseTableForDataSource(dataSource, tableFields);
		if (databaseTable != null)
		{
			databaseTable.setUser(userService.getUser(userId));
			databaseTable.setDateCreated(new Date());
			databaseTable.setDateModified(new Date());
			databaseTable.setIsActive(Boolean.TRUE);
			if (databaseTableService.saveDatabaseTable(databaseTable))
			{
				for (int index = 0; index < tableFields.size(); index++)
				{
					if (tableFields.get(index).getId() == null)
					{
						tableFields.get(index).setDateCreated(new Date());
					}
					tableFields.get(index).setDatabaseTable(databaseTable);
					tableFields.get(index).setDataSource(dataSource);					
					tableFields.get(index).setDateModified(new Date());
				}
				if (databaseTableService.saveDatabaseTableFields(tableFields))
				{
					dataSource.setUser(userService.getUser(userId));
					dataSource.setDatabaseTable(databaseTable);
					dataSource.setIsProcessed(Boolean.TRUE);
					databaseTableService.saveDataSource(dataSource);
					return JSONUtils.getMessageJSON(JSONMessages.SUCCESS_CONFIGURING_DATA_SOURCE, null);
				}
			}
		}
		return JSONUtils.getErrorJSON(ErrorReason.FAILED_CONFIGURING_DATA_SOURCE);
	}

	public String cancelDataSourceConfiguration(Long dataSourceId)
	{
		if (databaseTableService.cancelDataSourceConfiguration(dataSourceId))
		{
			return JSONUtils.getMessageJSON(JSONMessages.SUCCESS_CANCELLING_DATA_SOURCE_CONFIGURATION, null);
		}
		return JSONUtils.getErrorJSON(ErrorReason.DATA_SOURCE_CONFIGURATION_CANT_BE_CANCELLED);
	}
	
	public String deleteDataSources(Long[] dataSourceIds)
	{
		if (dataSourceIds != null && dataSourceIds.length > 0)
		{
			for (int index = 0; index < dataSourceIds.length; index++)
			{
				DataSources dataSource = databaseTableService.findDataSourceById(dataSourceIds[index]);
				dataSource.setIsActive(Boolean.FALSE);
				databaseTableService.saveDataSource(dataSource);
				DatabaseTable databaseTable = dataSource.getDatabaseTable();
				databaseTable.setIsActive(Boolean.FALSE);
				databaseTableService.saveDatabaseTable(databaseTable);
			}
			return JSONUtils.getMessageJSON(JSONMessages.SUCCESS_DELETING_DATA_SOURCES, null);
		}		
		return JSONUtils.getErrorJSON(ErrorReason.FAILED_DELETING_DATA_SOURCES);
	}
}
