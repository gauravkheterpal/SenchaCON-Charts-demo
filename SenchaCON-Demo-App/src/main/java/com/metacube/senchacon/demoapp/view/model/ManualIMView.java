package com.metacube.senchacon.demoapp.view.model;

import java.util.Date;

public class ManualIMView
{	
	private Long id;
	private DashboardSettingsView dashboardSetting = null;
	private UserView user = null;
	private Integer imIndex;
	private String imMessage;
	private Date dateCreated;
	private Date dateModified;
	
	public Long getId()
	{
		return id;
	}
	public DashboardSettingsView getDashboardSetting()
	{
		return dashboardSetting;
	}
	public UserView getUser()
	{
		return user;
	}
	public Integer getImIndex()
	{
		return imIndex;
	}
	public String getImMessage()
	{
		return imMessage;
	}
	public Date getDateCreated()
	{
		return dateCreated;
	}
	public Date getDateModified()
	{
		return dateModified;
	}
	public void setId(Long id)
	{
		this.id = id;
	}
	public void setDashboardSetting(DashboardSettingsView dashboardSetting)
	{
		this.dashboardSetting = dashboardSetting;
	}
	public void setUser(UserView user)
	{
		this.user = user;
	}
	public void setImIndex(Integer imIndex)
	{
		this.imIndex = imIndex;
	}
	public void setImMessage(String imMessage)
	{
		this.imMessage = imMessage;
	}
	public void setDateCreated(Date dateCreated)
	{
		this.dateCreated = dateCreated;
	}
	public void setDateModified(Date dateModified)
	{
		this.dateModified = dateModified;
	}
}