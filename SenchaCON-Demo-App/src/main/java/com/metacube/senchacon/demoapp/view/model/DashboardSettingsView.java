package com.metacube.senchacon.demoapp.view.model;

import java.util.ArrayList;
import java.util.Date;

public class DashboardSettingsView
{
	private long id;
	private String settingsString;
	private String dataString;
	private String graphTitle;
	private String chartType;
	private String xAxis;
	private String yAxis;
	private String groupBy;
	private String granularity;
	private String startDate;
	private String endDate;
	private String accumulate;
	private Date dateCreated;
	private Date dateModified;
	private String databaseName;
	private String filterToggle;
	private ArrayList<ManualIMView> manualIMs;
	private ArrayList<FilterSettingsView> filterSettings;

	public long getId()
	{
		return id;
	}

	public String getSettingsString()
	{
		return settingsString;
	}

	public String getDataString()
	{
		return dataString;
	}

	public String getGraphTitle()
	{
		return graphTitle;
	}

	public String getChartType()
	{
		return chartType;
	}

	public String getxAxis()
	{
		return xAxis;
	}

	public String getyAxis()
	{
		return yAxis;
	}

	public String getGroupBy()
	{
		return groupBy;
	}

	public String getGranularity()
	{
		return granularity;
	}

	public String getStartDate()
	{
		return startDate;
	}

	public String getEndDate()
	{
		return endDate;
	}

	public String getAccumulate()
	{
		return accumulate;
	}

	public Date getDateCreated()
	{
		return dateCreated;
	}

	public Date getDateModified()
	{
		return dateModified;
	}

	public String getDatabaseName()
	{
		return databaseName;
	}

	public ArrayList<ManualIMView> getManualIMs()
	{
		return manualIMs;
	}

	public ArrayList<FilterSettingsView> getFilterSettings()
	{
		return filterSettings;
	}

	public void setId(long id)
	{
		this.id = id;
	}

	public void setSettingsString(String settingsString)
	{
		this.settingsString = settingsString;
	}

	public void setDataString(String dataString)
	{
		this.dataString = dataString;
	}

	public void setGraphTitle(String graphTitle)
	{
		this.graphTitle = graphTitle;
	}

	public void setChartType(String chartType)
	{
		this.chartType = chartType;
	}

	public void setxAxis(String xAxis)
	{
		this.xAxis = xAxis;
	}

	public void setyAxis(String yAxis)
	{
		this.yAxis = yAxis;
	}

	public void setGroupBy(String groupBy)
	{
		this.groupBy = groupBy;
	}

	public void setGranularity(String granularity)
	{
		this.granularity = granularity;
	}

	public void setStartDate(String startDate)
	{
		this.startDate = startDate;
	}

	public void setEndDate(String endDate)
	{
		this.endDate = endDate;
	}

	public void setAccumulate(String accumulate)
	{
		this.accumulate = accumulate;
	}

	public void setDateCreated(Date dateCreated)
	{
		this.dateCreated = dateCreated;
	}

	public void setDateModified(Date dateModified)
	{
		this.dateModified = dateModified;
	}

	public void setDatabaseName(String databaseName)
	{
		this.databaseName = databaseName;
	}

	public void setManualIMs(ArrayList<ManualIMView> manualIMs)
	{
		this.manualIMs = manualIMs;
	}

	public void setFilterSettings(ArrayList<FilterSettingsView> filterSettings)
	{
		this.filterSettings = filterSettings;
	}

	public String getFilterToggle()
	{
		return filterToggle;
	}

	public void setFilterToggle(String filterToggle)
	{
		this.filterToggle = filterToggle;
	}
}