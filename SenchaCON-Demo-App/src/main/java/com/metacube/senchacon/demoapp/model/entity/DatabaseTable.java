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
@Table(name = "database_table")
public class DatabaseTable extends BaseEntity
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 6906144866967671527L;

	@Id
	@GeneratedValue
	@Column(name = "id")
	private long id;

	@Column(name = "date_created")
	private Date dateCreated;

	@Column(name = "date_modified")
	private Date dateModified;

	@Column(name = "is_active")
	private Boolean isActive;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "user_id")
	private User user;

	@Column(name = "table_name")
	private String tableName;

	@Column(name = "name")
	private String name;

	@Column(name = "description")
	private String description;

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

	public User getUser()
	{
		return user;
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

	public void setUser(User user)
	{
		this.user = user;
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
}
