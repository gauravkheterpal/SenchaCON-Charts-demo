package com.metacube.senchacon.demoapp.model.entity;

import java.util.Calendar;
import java.util.Date;
import java.util.UUID;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.metacube.senchacon.demoapp.common.Constants;

@Entity
@Table(name = "user_session")
public class UserSession extends BaseEntity
{
	/**
	 * 
	 */
	private static final long serialVersionUID = -7625308376489226219L;

	@Id
	@GeneratedValue
	@Column(name = "id")
	private long id;
	
	@ManyToOne(fetch = FetchType.EAGER, cascade=CascadeType.ALL )
	@JoinColumn(name = "user_id")
	private User user;
	
	@Column(name = "access_key")
	private String accessKey;
	
	@Column(name = "expiry_date")
	private Date expiryDate;
	
	public static UserSession createNewSession(User user)
	{
		UserSession session = new UserSession();
		Date currentDate = new Date();
		Calendar calendar = Calendar.getInstance();
        calendar.setTime(currentDate);
        calendar.add(Calendar.DAY_OF_MONTH, Constants.USER_SESSION_VALIDITY);
        session.setExpiryDate(calendar.getTime());		
        session.setAccessKey(UUID.randomUUID().toString());		
        session.setUser(user);        
        return session;
	}
	
	public long getId() 
	{
		return id;
	}

	public User getUser() 
	{
		return user;
	}

	private void setUser(User user) 
	{
		this.user = user;
	}

	public String getAccessKey() 
	{
		return accessKey;
	}

	private void setAccessKey(String accessKey) 
	{
		this.accessKey = accessKey;
	}

	public Date getExpiryDate() 
	{
		return expiryDate;
	}

	private void setExpiryDate(Date expiryDate) 
	{
		this.expiryDate = expiryDate;
	}
}