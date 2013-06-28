package com.metacube.senchacon.demoapp.view.model;

import java.util.Date;

public class DatabaseTableFieldsView
{
	private Long id;
	private Date dateCreated;
	private Date dateModified;
	private DatabaseTableView databaseTable;
	private DataSourcesView dataSource;
	private Long dataSourceRowColumnNumber;
	private String fieldName;
	private String fieldLabel;
	private String fieldType;
	private String fieldSelection;
	private String fieldCalculation;
	private String fieldDescription;

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

	public DatabaseTableView getDatabaseTable()
	{
		return databaseTable;
	}

	public DataSourcesView getDataSource()
	{
		return dataSource;
	}

	public Long getDataSourceRowColumnNumber()
	{
		return dataSourceRowColumnNumber;
	}

	public String getFieldName()
	{
		return fieldName;
	}

	public String getFieldLabel()
	{
		return fieldLabel;
	}

	public String getFieldType()
	{
		return fieldType;
	}

	public String getFieldSelection()
	{
		return fieldSelection;
	}

	public String getFieldCalculation()
	{
		return fieldCalculation;
	}

	public String getFieldDescription()
	{
		return fieldDescription;
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

	public void setDatabaseTable(DatabaseTableView databaseTable)
	{
		this.databaseTable = databaseTable;
	}

	public void setDataSource(DataSourcesView dataSource)
	{
		this.dataSource = dataSource;
	}

	public void setDataSourceRowColumnNumber(Long dataSourceRowColumnNumber)
	{
		this.dataSourceRowColumnNumber = dataSourceRowColumnNumber;
	}

	public void setFieldName(String fieldName)
	{
		this.fieldName = fieldName;
	}

	public void setFieldLabel(String fieldLabel)
	{
		this.fieldLabel = fieldLabel;
	}

	public void setFieldType(String fieldType)
	{
		this.fieldType = fieldType;
	}

	public void setFieldSelection(String fieldSelection)
	{
		this.fieldSelection = fieldSelection;
	}

	public void setFieldCalculation(String fieldCalculation)
	{
		this.fieldCalculation = fieldCalculation;
	}

	public void setFieldDescription(String fieldDescription)
	{
		this.fieldDescription = fieldDescription;
	}
}