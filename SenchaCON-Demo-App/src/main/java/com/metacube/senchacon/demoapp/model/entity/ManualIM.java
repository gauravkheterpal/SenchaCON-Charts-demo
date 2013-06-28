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
@Table(name = "manual_ims")
public class ManualIM extends BaseEntity
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 7622325162449457701L;

	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long id;

	@ManyToOne( fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "dashboard_setting")
	private DashboardSettings dashboardSetting = null;
	
	@ManyToOne( fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user = null;
	
	@Column(name = "im_index")
	private Integer imIndex;
	
	@Column(name = "im_message")
	private String imMessage;
	
	@Column(name = "date_created")
	private Date dateCreated;
	
	@Column(name = "date_modified")
	private Date dateModified;
	
	@Column(name = "is_archived")
	private Boolean isArchived;

	public Long getId()
	{
		return id;
	}

	public DashboardSettings getDashboardSetting()
	{
		return dashboardSetting;
	}

	public User getUser()
	{
		return user;
	}

	public Integer getImIndex()
	{
		return imIndex;
	}

	public String getImMessage()
	{
		return imMessage;
	}

	public Date getDateCreated()
	{
		return dateCreated;
	}

	public Date getDateModified()
	{
		return dateModified;
	}

	public Boolean getIsArchived()
	{
		return isArchived;
	}

	public void setId(Long id)
	{
		this.id = id;
	}

	public void setDashboardSetting(DashboardSettings dashboardSetting)
	{
		this.dashboardSetting = dashboardSetting;
	}

	public void setUser(User user)
	{
		this.user = user;
	}

	public void setImIndex(Integer imIndex)
	{
		this.imIndex = imIndex;
	}

	public void setImMessage(String imMessage)
	{
		this.imMessage = imMessage;
	}

	public void setDateCreated(Date dateCreated)
	{
		this.dateCreated = dateCreated;
	}

	public void setDateModified(Date dateModified)
	{
		this.dateModified = dateModified;
	}

	public void setIsArchived(Boolean isArchived)
	{
		this.isArchived = isArchived;
	}
}