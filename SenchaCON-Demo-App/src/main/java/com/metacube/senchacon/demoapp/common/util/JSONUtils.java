package com.metacube.senchacon.demoapp.common.util;

import java.util.ArrayList;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.metacube.senchacon.demoapp.common.enums.ErrorReason;
import com.metacube.senchacon.demoapp.common.enums.JSONMessages;
import com.metacube.senchacon.demoapp.view.model.DashboardSettingsView;
import com.metacube.senchacon.demoapp.view.model.DataSourcesView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;
import com.metacube.senchacon.demoapp.view.model.FilterSettingsView;
import com.metacube.senchacon.demoapp.view.model.GlobalSettingsView;
import com.metacube.senchacon.demoapp.view.model.ManualIMView;
import com.metacube.senchacon.demoapp.view.model.UserDashboardView;
import com.metacube.senchacon.demoapp.view.model.UserSessionView;


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
		if (jsonMessage.equals(JSONMessages.SUCCESS_LOGIN))
		{
			UserSessionView userSession = (UserSessionView) data;
			messageJSON.put("userName", userSession.getUser().getUserName());
			messageJSON.put("userId", userSession.getUser().getId());
			messageJSON.put("role", userSession.getUser().getUserRole().getRoleName());
			messageJSON.put("accessKey", userSession.getAccessKey());
			messageJSON.put("expiryDate", userSession.getExpiryDate().toString());
			messageJSON.put("firstName", userSession.getUser().getFirstName());
			messageJSON.put("lastName", userSession.getUser().getLastName());
		}
		else if (jsonMessage.equals(JSONMessages.SUCCESS_SAVING_DASHBOARD))
		{			
			messageJSON.put("description", "Your dashboard was successfully saved!");
			UserDashboardView dashboard = (UserDashboardView) data;
			messageJSON.put("dashboard", getFullJSONForUserDashboardEntity(dashboard));
		}
		else if (jsonMessage.equals(JSONMessages.SUCCESS_DELETE_DASHBOARD))
		{
			messageJSON.put("description", "Selected dashboard was successfully deleted.");
			UserDashboardView dashboard = (UserDashboardView) data;
			messageJSON.put("dashboardId", dashboard.getId());
		}
		else if (jsonMessage.equals(JSONMessages.SUCCESS_SAVING_MANUAL_IM))
		{
			messageJSON.put("description", "You replay comment was successfully saved.");
			UserDashboardView dashboard = (UserDashboardView) data;
			messageJSON.put("dashboard", getFullJSONForUserDashboardEntity(dashboard));
		}
		else if (jsonMessage.equals(JSONMessages.SUCCESS_BOOKMARKING_DASHBOARD))
		{
			messageJSON.put("description", "Dashboard was successfully saved to your Replay Library.");
		}
		else if (jsonMessage.equals(JSONMessages.SUCCESS_DELETE_BOOKMARK))
		{
			messageJSON.put("description", "Dashboard bookmark was successfully deleted was successfully removed from your Replay Library.");
		}
		else if (jsonMessage.equals(JSONMessages.SUCCESS_DELETING_MANUAL_IM))
		{
			messageJSON.put("description", "Your replay comment was successfully deleted.");
			UserDashboardView dashboard = (UserDashboardView) data;
			messageJSON.put("dashboard", getFullJSONForUserDashboardEntity(dashboard));
		}
		else if (jsonMessage.equals(JSONMessages.SUCCESS_SAVING_UPLOADED_DATA_SOURCE_FILE))
		{
			messageJSON.put("description", "Data source file was uploaded and saved successfully.");
			DataSourcesView dataSource = (DataSourcesView) data;
			messageJSON.put("dataSource", getFullJSONForDataSourceEntity(dataSource));
		}
		else if (jsonMessage.equals(JSONMessages.SUCCESS_CONFIGURING_DATA_SOURCE))
		{
			messageJSON.put("description", "Data source configuration was saved successfully.");
		}
		else if (jsonMessage.equals(JSONMessages.SUCCESS_CANCELLING_DATA_SOURCE_CONFIGURATION))
		{
			messageJSON.put("description", "Data source configuration was cancelled successfully.");
		}
		else if (jsonMessage.equals(JSONMessages.SUCCESS_DELETING_DATA_SOURCES))
		{
			messageJSON.put("description", "Your selected data source(s) were deleted successfully.");
		}
		return messageJSON.toString();
	}

	public static String getJSONForUserSessionEntity(UserSessionView userSession)
	{
		return null;
	}
	
	public static String getJSONForUserDashboardEntity(UserDashboardView dashboard)
	{
		JSONObject dashboardJSON = new JSONObject();
		if (dashboard != null)
		{
			dashboardJSON.put("dashboardId", dashboard.getId());
			dashboardJSON.put("dashboardTitle", dashboard.getDashboardTitle());
			dashboardJSON.put("userId", dashboard.getUser().getId());
			dashboardJSON.put("isShared", dashboard.getIsShared());
			dashboardJSON.put("isBookmarkedDashboard", dashboard.getIsBookmarkedDashboard());
			dashboardJSON.put("isSharedWithOthers", dashboard.getIsSharedWithOthers());
			dashboardJSON.put("isUpdated", dashboard.getIsUpdated());
			dashboardJSON.put("uuid", dashboard.getUniqueID());
			dashboardJSON.put("dateCreated", DateUtils.convertDateToReadableFormat(dashboard.getDateCreated()));
			dashboardJSON.put("dateModified", DateUtils.convertDateToReadableFormat(dashboard.getDateModified()));	
		}			
		return dashboardJSON.toString();
	}
	
	public static String getFullJSONForUserDashboardEntity(UserDashboardView dashboard)
	{
		JSONObject dashboardJSON = new JSONObject();
		if (dashboard != null)
		{
			dashboardJSON.put("dashboardId", dashboard.getId());
			dashboardJSON.put("dashboardTitle", dashboard.getDashboardTitle());
			dashboardJSON.put("userId", dashboard.getUser().getId());
			dashboardJSON.put("panel1Settings", getJSONForDashboardSettingEntity(dashboard.getPanel1Settings()));
			dashboardJSON.put("panel2Settings", getJSONForDashboardSettingEntity(dashboard.getPanel2Settings()));
			dashboardJSON.put("panel3Settings", getJSONForDashboardSettingEntity(dashboard.getPanel3Settings()));
			dashboardJSON.put("panel4Settings", getJSONForDashboardSettingEntity(dashboard.getPanel4Settings()));
			dashboardJSON.put("globalSettings", getJSONForGlobalSettingsEntity(dashboard.getGlobalSettings()));
			dashboardJSON.put("isShared", dashboard.getIsShared());
			dashboardJSON.put("isBookmarkedDashboard", dashboard.getIsBookmarkedDashboard());
			dashboardJSON.put("isSharedWithOthers", dashboard.getIsSharedWithOthers());
			dashboardJSON.put("uuid", dashboard.getUniqueID());
			dashboardJSON.put("dateCreated", DateUtils.convertDateToReadableFormat(dashboard.getDateCreated()));
			dashboardJSON.put("dateModified", DateUtils.convertDateToReadableFormat(dashboard.getDateModified()));	
		}			
		return dashboardJSON.toString();
	}
	
	public static String getJSONForDashboardSettingEntity(DashboardSettingsView settings)
	{
		JSONObject settingsJSON = new JSONObject();
		if (settings != null)
		{
			settingsJSON.put("id", settings.getId());
			settingsJSON.put("panelData", settings.getDataString());
			settingsJSON.put("panelURL", settings.getSettingsString());
			settingsJSON.put("chartType", settings.getChartType());
			settingsJSON.put("graphTitle", settings.getGraphTitle());
			settingsJSON.put("xAxis", settings.getxAxis());
			settingsJSON.put("yAxis", settings.getyAxis());
			settingsJSON.put("groupBy", settings.getGroupBy());
			settingsJSON.put("granularity", settings.getGranularity());
			settingsJSON.put("startDate", settings.getStartDate());
			settingsJSON.put("endDate", settings.getEndDate());
			settingsJSON.put("accumulate", settings.getAccumulate());
			settingsJSON.put("manualIMs", getManualIMJSON(settings.getManualIMs()));
			settingsJSON.put("filters", getFilterSettingsJSON(settings.getFilterSettings()));
			settingsJSON.put("databaseName", settings.getDatabaseName());
			settingsJSON.put("filterToggle", settings.getFilterToggle());
			settingsJSON.put("dateCreated", DateUtils.convertDateToReadableFormat(settings.getDateCreated()));
			settingsJSON.put("dateModified", DateUtils.convertDateToReadableFormat(settings.getDateModified()));	
		}		
		return settingsJSON.toString();
	}
	
	public static String getJSONForGlobalSettingsEntity(GlobalSettingsView settings)
	{
		JSONObject settingsJSON = new JSONObject();
		if (settings != null)
		{
			settingsJSON.put("id", settings.getId());
			settingsJSON.put("activePanels", settings.getActivePanels());
			settingsJSON.put("replaySpeed", settings.getReplaySpeedSetting());
			settingsJSON.put("interestingMoment", settings.getInterestingMomentsSetting());
			settingsJSON.put("replayCommentsSetting", settings.getReplayCommentsSetting());
			settingsJSON.put("type1Setting", settings.getType1IMSetting());
			settingsJSON.put("type2Setting", settings.getType2IMSetting());
			settingsJSON.put("type3Setting", settings.getType3IMSetting());
			settingsJSON.put("type4Setting", settings.getType4IMSetting());
			settingsJSON.put("dateCreated", DateUtils.convertDateToReadableFormat(settings.getDateCreated()));
			settingsJSON.put("dateModified", DateUtils.convertDateToReadableFormat(settings.getDateModified()));	
		}		
		return settingsJSON.toString();
	}
	
	public static String getManualIMJSON(ArrayList<ManualIMView> manualIMs)
	{
		JSONArray manualIMsJSON = new JSONArray();
		if (manualIMs != null)
		{
			for (int i = 0; i < manualIMs.size(); i++)
			{
				JSONObject im = new JSONObject();
				im.put("id", manualIMs.get(i).getId());
				im.put("imIndex", manualIMs.get(i).getImIndex());
				im.put("imMessage", manualIMs.get(i).getImMessage());
				im.put("authorName", manualIMs.get(i).getUser().getFirstName() + " " + manualIMs.get(i).getUser().getLastName());
				im.put("authorId", manualIMs.get(i).getUser().getId());
				im.put("dateCreated", DateUtils.convertDateToReadableFormat(manualIMs.get(i).getDateCreated()));
				im.put("dateModified", DateUtils.convertDateToReadableFormat(manualIMs.get(i).getDateModified()));
				manualIMsJSON.add(im);
			}
		}		
		return manualIMsJSON.toString();
	}
	
	public static String getFilterSettingsJSON(ArrayList<FilterSettingsView> filterSettings)
	{
		JSONArray filterSettingsJSON = new JSONArray();
		if (filterSettings != null)
		{
			for (int i = 0; i < filterSettings.size(); i++)
			{
				JSONObject filter = new JSONObject();
				filter.put("settingsString", filterSettings.get(i).getFilterSettings());
				filter.put("dashboardId", filterSettings.get(i).getDashboard().getId());
				filter.put("dateCreated", DateUtils.convertDateToReadableFormat(filterSettings.get(i).getDateCreated()));
				filter.put("dateModified", DateUtils.convertDateToReadableFormat(filterSettings.get(i).getDateModified()));
				filter.put("filterCategory", FilterUtils.getFilterIdentifierForJSON(filterSettings.get(i).getFilterType()));
				//filterSettingsJSON.put(FilterUtils.getFilterIdentifierForJSON(filterSettings.get(i).getFilterType()), filter);
				filterSettingsJSON.add(filter);
			}
		}		
		return filterSettingsJSON.toString();
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
	
	public static String getDataSourceJSON(ArrayList<DataSourcesView> dataSources)
	{
		JSONArray dataSourcesJSON = new JSONArray();
		if (dataSources != null)
		{
			for (int i = 0; i < dataSources.size(); i++)
			{				
				dataSourcesJSON.add(getDataSourceJSON(dataSources.get(i)));
			}
		}		
		return dataSourcesJSON.toString();
	}
	
	private static String getDataSourceJSON(DataSourcesView dataSource)
	{
		JSONObject dataSourcesJSON = new JSONObject();
		if (dataSource != null)
		{			
			dataSourcesJSON.put("id", dataSource.getId());
			dataSourcesJSON.put("dataSourceName", dataSource.getDataSourceName());
			dataSourcesJSON.put("isProcessed", dataSource.getIsProcessed());
			dataSourcesJSON.put("isChecked", Boolean.FALSE);
			if (dataSource.getUser() != null)
			{
				dataSourcesJSON.put("userId", dataSource.getUser().getId());
			}
			if (dataSource.getDatabaseTable() != null)
			{
				dataSourcesJSON.put("databaseTable", getDatabaseTableJSON(dataSource.getDatabaseTable()));
			}
		}
		return dataSourcesJSON.toString();
	}
	
	private static String getFullJSONForDataSourceEntity(DataSourcesView dataSource)
	{
		JSONObject dataSourcesJSON = new JSONObject();
		if (dataSource != null)
		{			
			dataSourcesJSON.put("id", dataSource.getId());
			dataSourcesJSON.put("dataSourceName", dataSource.getDataSourceName());
			dataSourcesJSON.put("dataSourceFilePath", dataSource.getDataSourceFilePath());
			dataSourcesJSON.put("isProcessed", dataSource.getIsProcessed());
			if (dataSource.getUser() != null)
			{
				dataSourcesJSON.put("userId", dataSource.getUser().getId());
			}
			if (dataSource.getDatabaseTable() != null)
			{
				dataSourcesJSON.put("databaseTable", getDatabaseTableJSON(dataSource.getDatabaseTable()));
			}
			dataSourcesJSON.put("dateCreated", DateUtils.convertDateToReadableFormat(dataSource.getDateCreated()));
			dataSourcesJSON.put("dateModified", DateUtils.convertDateToReadableFormat(dataSource.getDateModified()));
			if (dataSource.getTableFields() != null && dataSource.getTableFields().size() > 0)
			{
				dataSourcesJSON.put("databaseTableFields", getDatabaseTableFieldsJSON(dataSource.getTableFields()));
			}
		}
		return dataSourcesJSON.toString();
	}
}