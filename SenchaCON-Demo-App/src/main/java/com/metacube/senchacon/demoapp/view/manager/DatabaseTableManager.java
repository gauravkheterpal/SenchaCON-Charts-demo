package com.metacube.senchacon.demoapp.view.manager;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.metacube.senchacon.demoapp.common.util.JSONUtils;
import com.metacube.senchacon.demoapp.service.DatabaseTableService;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;

@Component
public class DatabaseTableManager
{
	final static Logger logger = LoggerFactory.getLogger(DatabaseTableManager.class);

	@Autowired
	private DatabaseTableService databaseTableService;

	public String getAllDatabaseTables()
	{
		ArrayList<DatabaseTableView> databaseTables = databaseTableService.getAllDatabaseTables();
		return JSONUtils.getDatabaseTableJSON(databaseTables);
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
}
