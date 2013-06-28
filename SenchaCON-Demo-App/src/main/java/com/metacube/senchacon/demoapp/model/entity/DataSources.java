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
@Table(name = "data_sources")
public class DataSources extends BaseEntity
{

	/**
	 * 
	 */
	private static final long serialVersionUID = -3366187219657775910L;

	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long id;

	@Column(name = "date_created")
	private Date dateCreated;

	@Column(name = "date_modified")
	private Date dateModified;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "user_id")
	private User user;

	@Column(name = "data_source_name")
	private String dataSourceName;

	@Column(name = "data_source_file_path")
	private String dataSourceFilePath;

	@Column(name = "is_header_horizontal")
	private Boolean isHeaderHorizontal;

	@Column(name = "is_processed")
	private Boolean isProcessed;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "database_table_id")
	private DatabaseTable databaseTable;

	@Column(name = "is_active")
	private Boolean isActive;

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

	public User getUser()
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

	public DatabaseTable getDatabaseTable()
	{
		return databaseTable;
	}

	public Boolean getIsActive()
	{
		return isActive;
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

	public void setUser(User user)
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

	public void setDatabaseTable(DatabaseTable databaseTable)
	{
		this.databaseTable = databaseTable;
	}

	public void setIsActive(Boolean isActive)
	{
		this.isActive = isActive;
	}
}