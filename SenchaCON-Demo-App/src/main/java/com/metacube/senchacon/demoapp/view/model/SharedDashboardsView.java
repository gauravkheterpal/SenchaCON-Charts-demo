package com.metacube.senchacon.demoapp.view.model;

public class SharedDashboardsView
{
	private Long id;
	private UserView user;
	private UserDashboardView dashboard;
	private Boolean isUpdated = Boolean.FALSE;

	public Long getId()
	{
		return id;
	}

	public UserView getUser()
	{
		return user;
	}

	public UserDashboardView getDashboard()
	{
		return dashboard;
	}

	public void setId(Long id)
	{
		this.id = id;
	}

	public void setUser(UserView user)
	{
		this.user = user;
	}

	public void setDashboard(UserDashboardView dashboard)
	{
		this.dashboard = dashboard;
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