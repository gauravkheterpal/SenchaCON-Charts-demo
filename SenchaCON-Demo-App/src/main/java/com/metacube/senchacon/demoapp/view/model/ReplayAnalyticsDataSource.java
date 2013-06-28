package com.metacube.senchacon.demoapp.view.model;

import org.springframework.web.multipart.MultipartFile;

public class ReplayAnalyticsDataSource
{
	MultipartFile dataSourceFile;
	String dataSourceName;
	String dataSourceDescription;

	public MultipartFile getDataSourceFile()
	{
		return dataSourceFile;
	}

	public String getDataSourceName()
	{
		return dataSourceName;
	}

	public String getDataSourceDescription()
	{
		return dataSourceDescription;
	}

	public void setDataSourceFile(MultipartFile dataSourceFile)
	{
		this.dataSourceFile = dataSourceFile;
	}

	public void setDataSourceName(String dataSourceName)
	{
		this.dataSourceName = dataSourceName;
	}

	public void setDataSourceDescription(String dataSourceDescription)
	{
		this.dataSourceDescription = dataSourceDescription;
	}
}