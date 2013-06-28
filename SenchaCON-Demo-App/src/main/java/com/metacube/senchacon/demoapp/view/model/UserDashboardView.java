package com.metacube.senchacon.demoapp.view.model;

import java.util.Date;

public class UserDashboardView
{
	private Long id;
	private UserView user;
	private DashboardSettingsView panel1Settings;
	private DashboardSettingsView panel2Settings;
	private DashboardSettingsView panel3Settings;
	private DashboardSettingsView panel4Settings;
	private String dashboardTitle;
	private Date dateCreated;
	private Date dateModified;
	private Boolean isShared;
	private String uniqueID;
	private GlobalSettingsView globalSettings;
	private Boolean isActive;
	private Boolean isBookmarkedDashboard = Boolean.FALSE;
	private Boolean isSharedWithOthers = Boolean.FALSE;
	private Boolean isUpdated = Boolean.FALSE;

	public Long getId()
	{
		return id;
	}

	public UserView getUser()
	{
		return user;
	}

	public DashboardSettingsView getPanel1Settings()
	{
		return panel1Settings;
	}

	public DashboardSettingsView getPanel2Settings()
	{
		return panel2Settings;
	}

	public DashboardSettingsView getPanel3Settings()
	{
		return panel3Settings;
	}

	public DashboardSettingsView getPanel4Settings()
	{
		return panel4Settings;
	}

	public String getDashboardTitle()
	{
		return dashboardTitle;
	}

	public Date getDateCreated()
	{
		return dateCreated;
	}

	public Date getDateModified()
	{
		return dateModified;
	}

	public Boolean getIsShared()
	{
		return isShared;
	}

	public String getUniqueID()
	{
		return uniqueID;
	}

	public GlobalSettingsView getGlobalSettings()
	{
		return globalSettings;
	}

	public Boolean getIsActive()
	{
		return isActive;
	}

	public Boolean getIsBookmarkedDashboard()
	{
		return isBookmarkedDashboard;
	}

	public Boolean getIsSharedWithOthers()
	{
		return isSharedWithOthers;
	}

	public void setId(Long id)
	{
		this.id = id;
	}

	public void setUser(UserView user)
	{
		this.user = user;
	}

	public void setPanel1Settings(DashboardSettingsView panel1Settings)
	{
		this.panel1Settings = panel1Settings;
	}

	public void setPanel2Settings(DashboardSettingsView panel2Settings)
	{
		this.panel2Settings = panel2Settings;
	}

	public void setPanel3Settings(DashboardSettingsView panel3Settings)
	{
		this.panel3Settings = panel3Settings;
	}

	public void setPanel4Settings(DashboardSettingsView panel4Settings)
	{
		this.panel4Settings = panel4Settings;
	}

	public void setDashboardTitle(String dashboardTitle)
	{
		this.dashboardTitle = dashboardTitle;
	}

	public void setDateCreated(Date dateCreated)
	{
		this.dateCreated = dateCreated;
	}

	public void setDateModified(Date dateModified)
	{
		this.dateModified = dateModified;
	}

	public void setIsShared(Boolean isShared)
	{
		this.isShared = isShared;
	}

	public void setUniqueID(String uniqueID)
	{
		this.uniqueID = uniqueID;
	}

	public void setGlobalSettings(GlobalSettingsView globalSettings)
	{
		this.globalSettings = globalSettings;
	}

	public void setIsActive(Boolean isActive)
	{
		this.isActive = isActive;
	}

	public void setIsBookmarkedDashboard(Boolean isBookmarkedDashboard)
	{
		this.isBookmarkedDashboard = isBookmarkedDashboard;
	}

	public void setIsSharedWithOthers(Boolean isSharedWithOthers)
	{
		this.isSharedWithOthers = isSharedWithOthers;
	}

	public Boolean getIsUpdated()
	{
		return isUpdated;
	}

	public void setIsUpdated(Boolean isUpdated)
	{
		this.isUpdated = isUpdated;
	}
}