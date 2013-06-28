package com.metacube.senchacon.demoapp.view.model;

import java.util.ArrayList;
import java.util.Date;

public class DataSourcesView
{
	private Long id;
	private Date dateCreated;
	private Date dateModified;
	private UserView user;
	private String dataSourceName;
	private String dataSourceFilePath;
	private Boolean isHeaderHorizontal;
	private Boolean isProcessed;
	private DatabaseTableView databaseTable;
	private ArrayList<DatabaseTableFieldsView> tableFields;

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

	public UserView getUser()
	{
		return user;
	}

	public String getDataSourceName()
	{
		return dataSourceName;
	}

	public String getDataSourceFilePath()
	{
		return dataSourceFilePath;
	}

	public Boolean getIsHeaderHorizontal()
	{
		return isHeaderHorizontal;
	}

	public Boolean getIsProcessed()
	{
		return isProcessed;
	}

	public DatabaseTableView getDatabaseTable()
	{
		return databaseTable;
	}

	public ArrayList<DatabaseTableFieldsView> getTableFields()
	{
		return tableFields;
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

	public void setUser(UserView user)
	{
		this.user = user;
	}

	public void setDataSourceName(String dataSourceName)
	{
		this.dataSourceName = dataSourceName;
	}

	public void setDataSourceFilePath(String dataSourceFilePath)
	{
		this.dataSourceFilePath = dataSourceFilePath;
	}

	public void setIsHeaderHorizontal(Boolean isHeaderHorizontal)
	{
		this.isHeaderHorizontal = isHeaderHorizontal;
	}

	public void setIsProcessed(Boolean isProcessed)
	{
		this.isProcessed = isProcessed;
	}

	public void setDatabaseTable(DatabaseTableView databaseTable)
	{
		this.databaseTable = databaseTable;
	}

	public void setTableFields(ArrayList<DatabaseTableFieldsView> tableFields)
	{
		this.tableFields = tableFields;
	}
}