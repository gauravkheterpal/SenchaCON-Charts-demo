package com.metacube.senchacon.demoapp.view.model;

import java.util.ArrayList;
import java.util.Date;

public class DatabaseTableView
{
	private long id;
	private Date dateCreated;
	private Date dateModified;
	private Boolean isActive;
	private String tableName;
	private String name;
	private String description;
	private ArrayList<DatabaseTableFieldsView> tableFields;

	public long getId()
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

	public Boolean getIsActive()
	{
		return isActive;
	}

	public String getTableName()
	{
		return tableName;
	}

	public String getName()
	{
		return name;
	}

	public String getDescription()
	{
		return description;
	}

	public ArrayList<DatabaseTableFieldsView> getTableFields()
	{
		return tableFields;
	}

	public void setId(long id)
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

	public void setIsActive(Boolean isActive)
	{
		this.isActive = isActive;
	}

	public void setTableName(String tableName)
	{
		this.tableName = tableName;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public void setTableFields(ArrayList<DatabaseTableFieldsView> tableFields)
	{
		this.tableFields = tableFields;
	}
}