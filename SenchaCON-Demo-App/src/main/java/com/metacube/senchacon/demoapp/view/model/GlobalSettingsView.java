package com.metacube.senchacon.demoapp.view.model;

import java.util.Date;

public class GlobalSettingsView
{
	private Long id;
	private Date dateCreated;
	private Date dateModified;
	private Integer activePanels;
	private String interestingMomentsSetting;
	private String replayCommentsSetting;
	private Integer replaySpeedSetting;
	private Integer type1IMSetting;
	private Integer type2IMSetting;
	private Integer type3IMSetting;
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