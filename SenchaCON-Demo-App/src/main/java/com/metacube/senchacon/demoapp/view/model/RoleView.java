package com.metacube.senchacon.demoapp.view.model;


public class RoleView
{
	private long id;
	private String roleName;
	private String roleDescription;
	
	public long getId()
	{
		return id;
	}
	public String getRoleName()
	{
		return roleName;
	}
	public String getRoleDescription()
	{
		return roleDescription;
	}
	public void setId(long id)
	{
		this.id = id;
	}
	public void setRoleName(String roleName)
	{
		this.roleName = roleName;
	}
	public void setRoleDescription(String roleDescription)
	{
		this.roleDescription = roleDescription;
	}	
}
