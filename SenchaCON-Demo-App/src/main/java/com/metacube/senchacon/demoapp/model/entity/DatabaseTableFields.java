package com.metacube.senchacon.demoapp.model.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "database_table_fields")
public class DatabaseTableFields extends BaseEntity
{
	/**
	 * 
	 */
	private static final long serialVersionUID = -6815844229735980612L;

	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long id;

	@Column(name = "date_created")
	private Date dateCreated;

	@Column(name = "date_modified")
	private Date dateModified;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "database_table_id")
	private DatabaseTable databaseTable;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "data_source_id")
	private DataSources dataSource;
	
	@Column(name = "data_source_row_column_number")
	private Long dataSourceRowColumnNumber;

	@Column(name = "field_name")
	private String fieldName;

	@Column(name = "field_label")
	private String fieldLabel;

	@Column(name = "field_type")
	private String fieldType;

	@Column(name = "field_selection")
	private String fieldSelection;

	@Column(name = "field_calculation")
	private String fieldCalculation;

	@Column(name = "field_description")
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

	public DatabaseTable getDatabaseTable()
	{
		return databaseTable;
	}

	public DataSources getDataSource()
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

	public void setDatabaseTable(DatabaseTable databaseTable)
	{
		this.databaseTable = databaseTable;
	}

	public void setDataSource(DataSources dataSource)
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