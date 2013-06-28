package com.metacube.senchacon.demoapp.common.util;

import java.util.Date;
import java.util.UUID;

import com.metacube.senchacon.demoapp.model.entity.DashboardSettings;
import com.metacube.senchacon.demoapp.model.entity.DataSources;
import com.metacube.senchacon.demoapp.model.entity.DatabaseTable;
import com.metacube.senchacon.demoapp.model.entity.DatabaseTableFields;
import com.metacube.senchacon.demoapp.model.entity.GlobalSettings;
import com.metacube.senchacon.demoapp.model.entity.ManualIM;
import com.metacube.senchacon.demoapp.model.entity.User;
import com.metacube.senchacon.demoapp.model.entity.UserDashboard;

public class ModelUtils
{
	public static DashboardSettings entityForDashboardSettings(DashboardSettings dashboardSettings, String settings, String data,
			String chartType, String graphTitle, String xAxis, String yAxis, String groupBy, String granularity, String accumulate,
			String startDate, String endDate, String databaseName, String filterToggle)
	{
		if (dashboardSettings == null)
		{
			dashboardSettings = new DashboardSettings();
			dashboardSettings.setDateCreated(new Date());
		}
		dashboardSettings.setDataString(data);
		dashboardSettings.setSettingsString(settings);
		dashboardSettings.setChartType(chartType);
		dashboardSettings.setGraphTitle(graphTitle);
		dashboardSettings.setxAxis(xAxis);
		dashboardSettings.setyAxis(yAxis);
		dashboardSettings.setGroupBy(groupBy);
		dashboardSettings.setGranularity(granularity);
		dashboardSettings.setAccumulate(accumulate);
		dashboardSettings.setStartDate(startDate);
		dashboardSettings.setEndDate(endDate);
		dashboardSettings.setDatabaseName(databaseName);
		dashboardSettings.setFilterToggle(filterToggle);
		dashboardSettings.setDateModified(new Date());
		return dashboardSettings;
	}

	public static GlobalSettings entityForGlobalSettings(GlobalSettings globalSettings, Integer activePanels, Integer replaySpeed,
			String interestingMomentSetting, String replayCommentsSetting, Integer type1Setting, Integer type2Setting,
			Integer type3Setting, Integer type4Setting)
	{
		if (globalSettings == null)
		{
			globalSettings = new GlobalSettings();
			globalSettings.setDateCreated(new Date());
		}
		globalSettings.setActivePanels(activePanels);
		globalSettings.setInterestingMomentsSetting(interestingMomentSetting);
		globalSettings.setReplayCommentsSetting(replayCommentsSetting);
		globalSettings.setReplaySpeedSetting(replaySpeed);
		globalSettings.setType1IMSetting(type1Setting);
		globalSettings.setType2IMSetting(type2Setting);
		globalSettings.setType3IMSetting(type3Setting);
		globalSettings.setType4IMSetting(type4Setting);
		globalSettings.setDateModified(new Date());
		return globalSettings;
	}

	public static UserDashboard entityForUserDashboard(UserDashboard userDashboard, String dashboardTitle, Boolean isShared, User user,
			String[] panelSettings, String[] panelData, String[] isChartConfigured, String[] chartTypes, String[] graphTitles,
			String[] xAxis, String[] yAxis, String[] groupBys, String[] granularities, String[] accumulate, String[] startDates,
			String[] endDates, String[] databaseName, String[] filterToggle, Integer activePanels, Integer replaySpeed,
			String interestingMomentSetting, String replayCommentsSetting, Integer type1Setting, Integer type2Setting,
			Integer type3Setting, Integer type4Setting)
	{
		if (userDashboard.getId() == null)
		{
			userDashboard.setDateCreated(new Date());
		}
		userDashboard.setUser(user);
		userDashboard.setDashboardTitle(dashboardTitle);
		try
		{
			if (isChartConfigured[1] != null && Boolean.parseBoolean(isChartConfigured[1]))
			{
				userDashboard.setPanel1Settings(entityForDashboardSettings(userDashboard.getPanel1Settings(), panelSettings[1],
						panelData[1], chartTypes[1], graphTitles[1], xAxis[1], yAxis[1], groupBys[1], granularities[1], accumulate[1],
						startDates[1], endDates[1], databaseName[1], filterToggle[1]));
			}
		}
		catch (Exception e)
		{

		}
		try
		{
			if (isChartConfigured[2] != null && Boolean.parseBoolean(isChartConfigured[2]))
			{
				userDashboard.setPanel2Settings(entityForDashboardSettings(userDashboard.getPanel2Settings(), panelSettings[2],
						panelData[2], chartTypes[2], graphTitles[2], xAxis[2], yAxis[2], groupBys[2], granularities[2], accumulate[2],
						startDates[2], endDates[2], databaseName[2], filterToggle[2]));
			}
		}
		catch (Exception e)
		{

		}
		try
		{
			if (isChartConfigured[3] != null && Boolean.parseBoolean(isChartConfigured[3]))
			{
				userDashboard.setPanel3Settings(entityForDashboardSettings(userDashboard.getPanel3Settings(), panelSettings[3],
						panelData[3], chartTypes[3], graphTitles[3], xAxis[3], yAxis[3], groupBys[3], granularities[3], accumulate[3],
						startDates[3], endDates[3], databaseName[3], filterToggle[3]));
			}
		}
		catch (Exception e)
		{

		}
		try
		{
			if (isChartConfigured[4] != null && Boolean.parseBoolean(isChartConfigured[4]))
			{
				userDashboard.setPanel4Settings(entityForDashboardSettings(userDashboard.getPanel4Settings(), panelSettings[4],
						panelData[4], chartTypes[4], graphTitles[4], xAxis[4], yAxis[4], groupBys[4], granularities[4], accumulate[4],
						startDates[4], endDates[4], databaseName[4], filterToggle[4]));
			}
		}
		catch (Exception e)
		{

		}
		userDashboard.setGlobalSettings(entityForGlobalSettings(userDashboard.getGlobalSettings(), activePanels, replaySpeed,
				interestingMomentSetting, replayCommentsSetting, type1Setting, type2Setting, type3Setting, type4Setting));
		userDashboard.setDateModified(new Date());
		userDashboard.setIsShared(isShared);
		userDashboard.setIsActive(Boolean.TRUE);
		userDashboard.setIsUpdated(Boolean.FALSE);
		if (userDashboard.getUniqueID() == null)
		{
			userDashboard.setUniqueID(UUID.randomUUID().toString());
		}
		return userDashboard;
	}

	public static ManualIM entityForManualIM(ManualIM manualIM, User user, DashboardSettings dashboardSetting, Integer imIndex,
			String imMessage)
	{
		if (manualIM.getId() == null)
		{
			manualIM.setDateCreated(new Date());
		}
		// manualIM.setUserId(userId);
		// manualIM.setDashboardSettingId(dashboardSettingId);
		manualIM.setUser(user);
		manualIM.setDashboardSetting(dashboardSetting);
		manualIM.setImIndex(imIndex);
		manualIM.setImMessage(imMessage);
		manualIM.setDateModified(new Date());
		manualIM.setIsArchived(Boolean.FALSE);
		return manualIM;
	}

	public static DataSources entityForDataSource(DataSources dataSource, User user, String dataSourceName, String dataSourceFilePath,
			Boolean isHeaderHorizontal, Boolean isProcessed, DatabaseTable databaseTable)
	{
		if (dataSource.getId() == null)
		{
			dataSource.setDateCreated(new Date());
			dataSource.setIsActive(Boolean.TRUE);
		}
		dataSource.setUser(user);
		dataSource.setDateModified(new Date());
		dataSource.setDataSourceName(dataSourceName);
		dataSource.setDataSourceFilePath(dataSourceFilePath);
		dataSource.setIsProcessed(isProcessed);
		dataSource.setDatabaseTable(databaseTable);
		return dataSource;
	}

	public static DatabaseTableFields entityForDatabaseTableFields(DatabaseTableFields tableField, String fieldName, String fieldLabel,
			String fieldType, String fieldSelection, String fieldCalculation, DatabaseTable databaseTable, DataSources dataSource,
			Long dataSourceRowColumnNumber)
	{
		if (tableField.getId() == null)
		{
			tableField.setDateCreated(new Date());
		}
		tableField.setDateModified(new Date());
		tableField.setFieldName(fieldName);
		tableField.setFieldLabel(fieldLabel);
		tableField.setFieldType(fieldType);
		tableField.setFieldSelection(fieldSelection);
		tableField.setFieldCalculation(fieldCalculation);
		tableField.setDatabaseTable(databaseTable);
		tableField.setDataSource(dataSource);
		tableField.setDataSourceRowColumnNumber(dataSourceRowColumnNumber);
		return tableField;
	}
}