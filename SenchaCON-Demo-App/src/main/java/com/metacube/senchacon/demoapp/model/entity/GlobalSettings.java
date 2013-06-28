package com.metacube.senchacon.demoapp.model.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "global_settings")
public class GlobalSettings extends BaseEntity
{

	/**
	 * 
	 */
	private static final long serialVersionUID = -7687350074948667441L;

	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long id;

	@Column(name = "date_created")
	private Date dateCreated;

	@Column(name = "date_modified")
	private Date dateModified;

	@Column(name = "active_panels")
	private Integer activePanels;

	@Column(name = "interesting_moments")
	private String interestingMomentsSetting;

	@Column(name = "replay_comments")
	private String replayCommentsSetting;

	@Column(name = "replay_speed")
	private Integer replaySpeedSetting;

	@Column(name = "type_1_setting")
	private Integer type1IMSetting;

	@Column(name = "type_2_setting")
	private Integer type2IMSetting;

	@Column(name = "type_3_setting")
	private Integer type3IMSetting;

	@Column(name = "type_4_setting")
	private Integer type4IMSetting;

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

	public Integer getActivePanels()
	{
		return activePanels;
	}

	public String getInterestingMomentsSetting()
	{
		return interestingMomentsSetting;
	}

	public String getReplayCommentsSetting()
	{
		return replayCommentsSetting;
	}

	public Integer getReplaySpeedSetting()
	{
		return replaySpeedSetting;
	}

	public Integer getType1IMSetting()
	{
		return type1IMSetting;
	}

	public Integer getType2IMSetting()
	{
		return type2IMSetting;
	}

	public Integer getType3IMSetting()
	{
		return type3IMSetting;
	}

	public Integer getType4IMSetting()
	{
		return type4IMSetting;
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

	public void setActivePanels(Integer activePanels)
	{
		this.activePanels = activePanels;
	}

	public void setInterestingMomentsSetting(String interestingMomentsSetting)
	{
		this.interestingMomentsSetting = interestingMomentsSetting;
	}

	public void setReplayCommentsSetting(String replayCommentsSetting)
	{
		this.replayCommentsSetting = replayCommentsSetting;
	}

	public void setReplaySpeedSetting(Integer replaySpeedSetting)
	{
		this.replaySpeedSetting = replaySpeedSetting;
	}

	public void setType1IMSetting(Integer type1imSetting)
	{
		type1IMSetting = type1imSetting;
	}

	public void setType2IMSetting(Integer type2imSetting)
	{
		type2IMSetting = type2imSetting;
	}

	public void setType3IMSetting(Integer type3imSetting)
	{
		type3IMSetting = type3imSetting;
	}

	public void setType4IMSetting(Integer type4imSetting)
	{
		type4IMSetting = type4imSetting;
	}
}