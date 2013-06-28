package com.metacube.senchacon.demoapp.view.model;

import java.util.Date;

public class FilterSettingsView
{
	private Long id;
	private Date dateCreated;
	private Date dateModified;
	private String filterSettings;
	private String filterType;
	private DashboardSettingsView dashboard;
	
	public Long getId()
	{
		return id;
	}
	public Date getDateCreated()
	{
		return dateCreated;
	}
	public Date getDateModified()
	{
		return dateModified;
	}
	public String getFilterSettings()
	{
		return filterSettings;
	}
	public String getFilterType()
	{
		return filterType;
	}
	public DashboardSettingsView getDashboard()
	{
		return dashboard;
	}
	public void setId(Long id)
	{
		this.id = id;
	}
	public void setDateCreated(Date dateCreated)
	{
		this.dateCreated = dateCreated;
	}
	public void setDateModified(Date dateModified)
	{
		this.dateModified = dateModified;
	}
	public void setFilterSettings(String filterSettings)
	{
		this.filterSettings = filterSettings;
	}
	public void setFilterType(String filterType)
	{
		this.filterType = filterType;
	}
	public void setDashboard(DashboardSettingsView dashboard)
	{
		this.dashboard = dashboard;
	}
}