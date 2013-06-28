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
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "user_dashboards")
public class UserDashboard extends BaseEntity
{

	/**
	 * 
	 */
	private static final long serialVersionUID = 3473749874817738066L;

	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long id;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "user_id")
	private User user;

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "settings_1")
	private DashboardSettings panel1Settings;

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "settings_2")
	private DashboardSettings panel2Settings;

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "settings_3")
	private DashboardSettings panel3Settings;

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "settings_4")
	private DashboardSettings panel4Settings;

	@Column(name = "dashboard_title")
	private String dashboardTitle;

	@Column(name = "date_created")
	private Date dateCreated;

	@Column(name = "date_modified")
	private Date dateModified;

	@Column(name = "is_shared")
	private Boolean isShared;

	@Column(name = "uuid")
	private String uniqueID;

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "global_settings_id")
	private GlobalSettings globalSettings;

	@Column(name = "is_active")
	private Boolean isActive;

	@Column(name = "is_updated")
	private Boolean isUpdated;

	public Long getId()
	{
		return id;
	}

	public User getUser()
	{
		return user;
	}

	public DashboardSettings getPanel1Settings()
	{
		return panel1Settings;
	}

	public DashboardSettings getPanel2Settings()
	{
		return panel2Settings;
	}

	public DashboardSettings getPanel3Settings()
	{
		return panel3Settings;
	}

	public DashboardSettings getPanel4Settings()
	{
		return panel4Settings;
	}

	public String getDashboardTitle()
	{
		return dashboardTitle;
	}

	public Date getDateCreated()
	{
		return dateCreated;
	}

	public Date getDateModified()
	{
		return dateModified;
	}

	public Boolean getIsShared()
	{
		return isShared;
	}

	public String getUniqueID()
	{
		return uniqueID;
	}

	public GlobalSettings getGlobalSettings()
	{
		return globalSettings;
	}

	public Boolean getIsActive()
	{
		return isActive;
	}

	public void setId(Long id)
	{
		this.id = id;
	}

	public void setUser(User user)
	{
		this.user = user;
	}

	public void setPanel1Settings(DashboardSettings panel1Settings)
	{
		this.panel1Settings = panel1Settings;
	}

	public void setPanel2Settings(DashboardSettings panel2Settings)
	{
		this.panel2Settings = panel2Settings;
	}

	public void setPanel3Settings(DashboardSettings panel3Settings)
	{
		this.panel3Settings = panel3Settings;
	}

	public void setPanel4Settings(DashboardSettings panel4Settings)
	{
		this.panel4Settings = panel4Settings;
	}

	public void setDashboardTitle(String dashboardTitle)
	{
		this.dashboardTitle = dashboardTitle;
	}

	public void setDateCreated(Date dateCreated)
	{
		this.dateCreated = dateCreated;
	}

	public void setDateModified(Date dateModified)
	{
		this.dateModified = dateModified;
	}

	public void setIsShared(Boolean isShared)
	{
		this.isShared = isShared;
	}

	public void setUniqueID(String uniqueID)
	{
		this.uniqueID = uniqueID;
	}

	public void setGlobalSettings(GlobalSettings globalSettings)
	{
		this.globalSettings = globalSettings;
	}

	public void setIsActive(Boolean isActive)
	{
		this.isActive = isActive;
	}

	public Boolean getIsUpdated()
	{
		return isUpdated;
	}

	public void setIsUpdated(Boolean isUpdated)
	{
		this.isUpdated = isUpdated;
	}
}