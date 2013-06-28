package com.metacube.senchacon.demoapp.model.entity;

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
@Table(name = "shared_dashboards")
public class SharedDashboards extends BaseEntity
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 6650299854215924997L;

	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long id;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "user_id")
	private User user;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "dashboard_id")
	private UserDashboard dashboard;

	@Column(name = "is_updated")
	private Boolean isUpdated;

	public Long getId()
	{
		return id;
	}

	public void setId(Long id)
	{
		this.id = id;
	}

	public User getUser()
	{
		return user;
	}

	public void setUser(User user)
	{
		this.user = user;
	}

	public UserDashboard getDashboard()
	{
		return dashboard;
	}

	public void setDashboard(UserDashboard dashboard)
	{
		this.dashboard = dashboard;
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