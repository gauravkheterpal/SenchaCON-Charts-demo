package com.metacube.senchacon.demoapp.common.util;

import java.util.ArrayList;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.metacube.senchacon.demoapp.common.enums.ErrorReason;
import com.metacube.senchacon.demoapp.common.enums.JSONMessages;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;


public class JSONUtils 
{
	final static Logger logger = LoggerFactory.getLogger(JSONUtils.class);
	
	public static String getErrorJSON(ErrorReason error)
	{
		JSONObject errorJSON = new JSONObject();
		if (error.equals(ErrorReason.WRONG_PASSWORD))
		{
			errorJSON.put("error", 501);
			errorJSON.put("description", "Username/password does not match. Please try again.");
		}
		else if (error.equals(ErrorReason.USER_NOT_EXISTS))
		{
			errorJSON.put("error", 500);
			errorJSON.put("description", "User does not exist. Please try again with a valid username.");
		}
		else if (error.equals(ErrorReason.SESSION_EXPIRED))
		{
			errorJSON.put("error", 502);
			errorJSON.put("description", "Your session has expired. Please login again.");
		}
		else if (error.equals(ErrorReason.SESSION_INVALID))
		{
			errorJSON.put("error", 503);
			errorJSON.put("description", "Invalid user session. Please login again.");
		}
		else if (error.equals(ErrorReason.FAILED_SAVING_DASHBOARD))
		{
			errorJSON.put("error", 504);
			errorJSON.put("description", "Falied saving user dashboard.");
		}
		else if (error.equals(ErrorReason.NO_SAVED_DASHBOARDS))
		{
			errorJSON.put("error", 505);
			errorJSON.put("description", "No saved dashboards found.");
		} 
		else if (error.equals(ErrorReason.FAILED_DELETE_DASHBOARD))
		{
			errorJSON.put("error", 506);
			errorJSON.put("description", "Failed deleting the selected dashboard.");
		}
		else if (error.equals(ErrorReason.DASHBOARD_DATA_NOT_FOUND))
		{
			errorJSON.put("error", 507);
			errorJSON.put("description", "No data found for selected dashboard.");
		}
		else if (error.equals(ErrorReason.INVALID_UNIQUE_ID))
		{
			errorJSON.put("error", 508);
			errorJSON.put("description", "The URL you are trying is not valid. Please try a valid URL. You are now being re-directed to homepage.");
		}
		else if (error.equals(ErrorReason.FAILED_SAVING_MANUAL_IM))
		{
			errorJSON.put("error", 509);
			errorJSON.put("description", "Failed saving replay comment.");
		}
		else if (error.equals(ErrorReason.FAILED_BOOKMARKING_DASHBOARD))
		{
			errorJSON.put("error", 510);
			errorJSON.put("description", "Failed saving the dashboard to your library.");
		}
		else if (error.equals(ErrorReason.FAILED_DELETING_MANUAL_IM))
		{
			errorJSON.put("error", 511);
			errorJSON.put("description", "Your replay comment couldn't be deleted.");
		}
		else if (error.equals(ErrorReason.FAILED_BOOKMARKING_DASHBOARD))
		{
			errorJSON.put("error", 512);
			errorJSON.put("description", "You can't delete other user's comments.");
		}
		else if (error.equals(ErrorReason.FAILED_UPLOADING_FILE))
		{
			errorJSON.put("error", 513);
			errorJSON.put("description", "Data source file uploading failed. Please try later.");
		}
		else if (error.equals(ErrorReason.FAILED_UPLOADING_FILE))
		{
			errorJSON.put("error", 514);
			errorJSON.put("description", "Uploaded data source file couldn't be saved. Please try again.");
		}
		else if (error.equals(ErrorReason.NOT_MULTIPART_REQUEST))
		{
			errorJSON.put("error", 515);
			errorJSON.put("description", "Please select a data source file to upload.");
		}
		else if (error.equals(ErrorReason.FAILED_CONFIGURING_DATA_SOURCE))
		{
			errorJSON.put("error", 516);
			errorJSON.put("description", "Failed saving data source configuration. Please contact administrator.");
		}
		else if (error.equals(ErrorReason.DATA_SOURCE_CONFIGURATION_CANT_BE_CANCELLED))
		{
			errorJSON.put("error", 517);
			errorJSON.put("description", "Failed cancelling data source configuration. Please contact administrator.");
		}
		else if (error.equals(ErrorReason.FAILED_DELETING_DATA_SOURCES))
		{
			errorJSON.put("error", 518);
			errorJSON.put("description", "Failed deleting selected data source(s). Please contact administrator.");
		}
		return errorJSON.toString();
	}
	
	public static String getMessageJSON(JSONMessages jsonMessage, Object data)
	{
		JSONObject messageJSON = new JSONObject();
		messageJSON.put("success", 200);
		
		return messageJSON.toString();
	}

	
	
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
			//databaseTableFieldsJSON.put("dateCreated", DateUtils.convertDateToReadableFormat(databaseTableFields.getDateCreated()));
			//databaseTableFieldsJSON.put("dateModified", DateUtils.convertDateToReadableFormat(databaseTableFields.getDateModified()));
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