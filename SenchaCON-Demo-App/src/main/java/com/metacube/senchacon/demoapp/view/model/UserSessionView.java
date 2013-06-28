package com.metacube.senchacon.demoapp.view.model;

import java.util.Date;

public class UserSessionView
{
	private long id;
	private UserView user;
	private String accessKey;
	private Date expiryDate;
	
	public long getId()
	{
		return id;
	}
	public UserView getUser()
	{
		return user;
	}
	public String getAccessKey()
	{
		return accessKey;
	}
	public Date getExpiryDate()
	{
		return expiryDate;
	}
	public void setId(long id)
	{
		this.id = id;
	}
	public void setUser(UserView user)
	{
		this.user = user;
	}
	public void setAccessKey(String accessKey)
	{
		this.accessKey = accessKey;
	}
	public void setExpiryDate(Date expiryDate)
	{
		this.expiryDate = expiryDate;
	}	
}