package com.metacube.senchacon.demoapp.service;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.metacube.senchacon.demoapp.common.enums.DatabaseFieldTypes;
import com.metacube.senchacon.demoapp.common.util.EntityToViewUtils;
import com.metacube.senchacon.demoapp.model.dao.DatabaseTableDAO;
import com.metacube.senchacon.demoapp.model.entity.DataSources;
import com.metacube.senchacon.demoapp.model.entity.DatabaseTable;
import com.metacube.senchacon.demoapp.model.entity.DatabaseTableFields;
import com.metacube.senchacon.demoapp.view.model.DataSourcesView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;

@Service
public class DatabaseTableService
{
	@Autowired
	private DatabaseTableDAO databaseTableDao;

	final static Logger logger = LoggerFactory.getLogger(DatabaseTableService.class);

	public DatabaseTableView getDatabaseTableView(Long databaseTableId)
	{
		return EntityToViewUtils.databaseTableEntityToView(databaseTableDao.getDatabaseTable(databaseTableId));
	}

	public DatabaseTableView getDatabaseTableView(String databaseTableName)
	{
		return EntityToViewUtils.databaseTableEntityToView(databaseTableDao.getDatabaseTableByName(databaseTableName));
	}

	public DatabaseTableFieldsView getDatabaseTableFieldView(DatabaseTableView database, String fieldName)
	{
		return EntityToViewUtils.databaseTableFieldsEntityToView(databaseTableDao.getDatabaseTableFieldByName(database.getId(), fieldName));
	}

	public DatabaseTableFieldsView getTimeDatabaseTableFieldView(DatabaseTableView database)
	{
		return EntityToViewUtils.databaseTableFieldsEntityToView(databaseTableDao.getTimeFieldForDatabaseTable((database.getId())));
	}

	public ArrayList<DatabaseTableView> getAllDatabaseTables()
	{
		return EntityToViewUtils.databaseTableEntityToView(databaseTableDao.getAllDatabaseTables());
	}
	
	public ArrayList<DataSourcesView> getAllConfiguredDataSources()
	{
		return EntityToViewUtils.dataSourcesEntityToView(databaseTableDao.getAllConfiguredDataSources());
	}

	public ArrayList<DatabaseTableFieldsView> getAllDatabaseTableFieldsForDatabaseTable(Long databaseTableId)
	{
		return EntityToViewUtils.databaseTableFieldsEntityToView(databaseTableDao
				.getAllDatabaseTableFieldsForDatabaseTable(databaseTableId));
	}
	
	public ArrayList<DatabaseTableFieldsView> getAllDatabaseTableFieldsForDataSource(Long dataSourceId)
	{
		return EntityToViewUtils.databaseTableFieldsEntityToView(databaseTableDao
				.getAllDatabaseTableFieldsForDataSource(dataSourceId));
	}
	
	public ArrayList<DatabaseTableFields> findAllDatabaseTableFieldsForDataSource(Long dataSourceId)
	{
		return databaseTableDao.getAllDatabaseTableFieldsForDataSource(dataSourceId);
	}

	public DataSources findDataSourceById(Long dataSourceId)
	{
		return databaseTableDao.getDataSourceById(dataSourceId);
	}
	
	public DataSourcesView getDataSourceById(Long dataSourceId)
	{
		return EntityToViewUtils.dataSourcesEntityToView(databaseTableDao.getDataSourceById(dataSourceId));
	}

	public Boolean saveDataSource(DataSources dataSource)
	{
		return databaseTableDao.saveDataSource(dataSource);
	}
	
	public Boolean saveDatabaseTable(DatabaseTable entity)
	{
		return databaseTableDao.saveDatabaseTable(entity);
	}
	
	public Boolean saveDatabaseTableFields(DatabaseTableFields entity)
	{
		return databaseTableDao.saveDatabaseTableFields(entity);
	}
	
	public Boolean deleteDatabaseTableFields(DatabaseTableFields entity)
	{
		return databaseTableDao.deleteDatabaseTableFields(entity);
	}
	
	public Boolean saveDatabaseTableFields(ArrayList<DatabaseTableFields> tableFields)
	{
		Boolean status = Boolean.TRUE;
		for (int index = 0; index < tableFields.size(); index++)
		{
			if (tableFields.get(index).getFieldType() != null && tableFields.get(index).getFieldType().equalsIgnoreCase(DatabaseFieldTypes.IGNORE.toString()))
			{
				if (tableFields.get(index).getId() != null)
				{
					this.deleteDatabaseTableFields(tableFields.get(index));
				}				
				continue;
			}
			status = saveDatabaseTableFields(tableFields.get(index));
		}
		return status;
	}
	
	public DatabaseTableFields findDatabaseTableFieldById(Long databaseTableFieldId)
	{
		return databaseTableDao.getDatabaseTableFieldById(databaseTableFieldId);
	}
	
	public Boolean executePreparedSQL(String sql)
	{
		return databaseTableDao.executePreparedSQL(sql);
	}
	
	public Boolean executePreparedSQL(ArrayList<String> sqlStatements)
	{
		Boolean status = true;
		for (int index = 0; index < sqlStatements.size(); index++)
		{
			if (!databaseTableDao.executePreparedSQL(sqlStatements.get(index)))
			{
				status = false;
				break;
			}
		}
		return status;
	}
	
	public Boolean deleteDataSource(DataSources entity)
	{
		return databaseTableDao.deleteDataSource(entity);
	}
	
	public Boolean cancelDataSourceConfiguration(Long dataSourceId)
	{
		DataSources dataSource = this.findDataSourceById(dataSourceId);
		ArrayList<DatabaseTableFields> tableFields = this.findAllDatabaseTableFieldsForDataSource(dataSourceId);
		for (int index = 0; index < tableFields.size(); index++)
		{
			if (tableFields.get(index).getId() != null)
			{
				this.deleteDatabaseTableFields(tableFields.get(index));
			}				
		}
		return this.deleteDataSource(dataSource);
	}
}
