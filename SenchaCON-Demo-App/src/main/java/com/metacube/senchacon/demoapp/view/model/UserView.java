package com.metacube.senchacon.demoapp.view.model;

import java.util.Date;

public class UserView
{
	private long id;
	private String userName;
	private String password;
	private RoleView userRole;
	private String firstName;
	private String lastName;
	private Date dateCreated;
	private Date dateModified;
	private Boolean isActive;
	
	public long getId()
	{
		return id;
	}
	public String getUserName()
	{
		return userName;
	}
	public String getPassword()
	{
		return password;
	}
	public RoleView getUserRole()
	{
		return userRole;
	}
	public String getFirstName()
	{
		return firstName;
	}
	public String getLastName()
	{
		return lastName;
	}
	public Date getDateCreated()
	{
		return dateCreated;
	}
	public Date getDateModified()
	{
		return dateModified;
	}
	public Boolean getIsActive()
	{
		return isActive;
	}
	public void setId(long id)
	{
		this.id = id;
	}
	public void setUserName(String userName)
	{
		this.userName = userName;
	}
	public void setPassword(String password)
	{
		this.password = password;
	}
	public void setUserRole(RoleView userRole)
	{
		this.userRole = userRole;
	}
	public void setFirstName(String firstName)
	{
		this.firstName = firstName;
	}
	public void setLastName(String lastName)
	{
		this.lastName = lastName;
	}
	public void setDateCreated(Date dateCreated)
	{
		this.dateCreated = dateCreated;
	}
	public void setDateModified(Date dateModified)
	{
		this.dateModified = dateModified;
	}
	public void setIsActive(Boolean isActive)
	{
		this.isActive = isActive;
	}	
}