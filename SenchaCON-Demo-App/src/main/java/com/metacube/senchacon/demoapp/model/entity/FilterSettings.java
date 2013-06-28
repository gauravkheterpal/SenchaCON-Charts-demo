package com.metacube.senchacon.demoapp.model.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "filter_settings")
public class FilterSettings extends BaseEntity 
{
	/**
	 * 
	 */
	private static final long serialVersionUID = -895126363737965047L;

	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long id;
	
	@Column(name = "date_created")
	private Date dateCreated;
	
	@Column(name = "date_modified")
	private Date dateModified;
	
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "dashboard_settings_id")
	private DashboardSettings dashboardSetting;
	
	@Column(name = "filter_settings_string")
	private String filterSettings;
	
	@Column(name = "filter_type")
	private String filterType;

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

	public DashboardSettings getDashboardSetting()
	{
		return dashboardSetting;
	}

	public String getFilterSettings()
	{
		return filterSettings;
	}

	public String getFilterType()
	{
		return filterType;
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

	public void setDashboardSetting(DashboardSettings dashboardSetting)
	{
		this.dashboardSetting = dashboardSetting;
	}

	public void setFilterSettings(String filterSettings)
	{
		this.filterSettings = filterSettings;
	}

	public void setFilterType(String filterType)
	{
		this.filterType = filterType;
	}
}