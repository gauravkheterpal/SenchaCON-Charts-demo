package com.metacube.senchacon.demoapp.common.util;

import java.util.ArrayList;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;


public class JSONUtils 
{
	final static Logger logger = LoggerFactory.getLogger(JSONUtils.class);
	
	public static String getDatabaseTableJSON(DatabaseTableView databaseTable)
	{
		JSONObject databaseTableJSON = new JSONObject();
		if (databaseTable != null)
		{			
			databaseTableJSON.put("id", databaseTable.getId());
			databaseTableJSON.put("name", databaseTable.getName());
			databaseTableJSON.put("tableName", databaseTable.getTableName());
			databaseTableJSON.put("dateCreated", DateUtils.convertDateToReadableFormat(databaseTable.getDateCreated()));
			databaseTableJSON.put("dateModified", DateUtils.convertDateToReadableFormat(databaseTable.getDateModified()));
			String tableFields = "";
			if (databaseTable.getTableFields() != null && databaseTable.getTableFields().size() > 0)
			{
				tableFields = JSONUtils.getDatabaseTableFieldsJSON(databaseTable.getTableFields());
			}
			databaseTableJSON.put("tableFields", tableFields);			
		}
		return databaseTableJSON.toString();
	}
	
	public static String getDatabaseTableJSON(ArrayList<DatabaseTableView> databaseTables)
	{
		JSONArray databaseTablesJSON = new JSONArray();
		if (databaseTables != null)
		{
			for (int i = 0; i < databaseTables.size(); i++)
			{				
				databaseTablesJSON.add(getDatabaseTableJSON(databaseTables.get(i)));
			}
		}		
		return databaseTablesJSON.toString();
	}
	
	public static String getDatabaseTableFieldsJSON(DatabaseTableFieldsView databaseTableFields)
	{
		JSONObject databaseTableFieldsJSON = new JSONObject();
		if (databaseTableFields != null)
		{			
			databaseTableFieldsJSON.put("id", databaseTableFields.getId());
			databaseTableFieldsJSON.put("fieldName", databaseTableFields.getFieldName());
			databaseTableFieldsJSON.put("fieldLabel", databaseTableFields.getFieldLabel());
			databaseTableFieldsJSON.put("fieldType", databaseTableFields.getFieldType());
			databaseTableFieldsJSON.put("fieldSelection", databaseTableFields.getFieldSelection());
			databaseTableFieldsJSON.put("fieldCalculation", databaseTableFields.getFieldCalculation());
		}
		return databaseTableFieldsJSON.toString();
	}
	
	public static String getDatabaseTableFieldsJSON(ArrayList<DatabaseTableFieldsView> databaseTableFields)
	{
		JSONArray databaseTablesFieldsJSON = new JSONArray();
		if (databaseTableFields != null)
		{
			for (int i = 0; i < databaseTableFields.size(); i++)
			{				
				databaseTablesFieldsJSON.add(getDatabaseTableFieldsJSON(databaseTableFields.get(i)));
			}
		}		
		return databaseTablesFieldsJSON.toString();
	}
}