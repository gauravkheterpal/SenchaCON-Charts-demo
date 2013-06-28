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
@Table(name = "dashboard_settings")
public class DashboardSettings extends BaseEntity
{

	/**
	 * 
	 */
	private static final long serialVersionUID = -1127517181955281053L;

	@Id
	@GeneratedValue
	@Column(name = "id")
	private long id;

	@Column(name = "settings_string")
	private String settingsString;

	@Column(name = "data_string")
	private String dataString;

	@Column(name = "graph_title")
	private String graphTitle;

	@Column(name = "chart_type")
	private String chartType;

	@Column(name = "x_axis")
	private String xAxis;

	@Column(name = "y_axis")
	private String yAxis;

	@Column(name = "group_by")
	private String groupBy;

	@Column(name = "granularity")
	private String granularity;

	@Column(name = "start_date")
	private String startDate;

	@Column(name = "end_date")
	private String endDate;

	@Column(name = "accumulate")
	private String accumulate;

	@Column(name = "date_created")
	private Date dateCreated;

	@Column(name = "date_modified")
	private Date dateModified;

	@Column(name = "database_name")
	private String databaseName;
	
	@Column(name = "filter_toggle")
	private String filterToggle;
	
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "database_table_id")
	private DatabaseTable databaseTable;

	public long getId()
	{
		return id;
	}

	public void setId(long id)
	{
		this.id = id;
	}

	public String getSettingsString()
	{
		return settingsString;
	}

	public void setSettingsString(String settingsString)
	{
		this.settingsString = settingsString;
	}

	public String getDataString()
	{
		return dataString;
	}

	public void setDataString(String dataString)
	{
		this.dataString = dataString;
	}

	public String getGraphTitle()
	{
		return graphTitle;
	}

	public void setGraphTitle(String graphTitle)
	{
		this.graphTitle = graphTitle;
	}

	public String getChartType()
	{
		return chartType;
	}

	public void setChartType(String chartType)
	{
		this.chartType = chartType;
	}

	public String getxAxis()
	{
		return xAxis;
	}

	public void setxAxis(String xAxis)
	{
		this.xAxis = xAxis;
	}

	public String getyAxis()
	{
		return yAxis;
	}

	public void setyAxis(String yAxis)
	{
		this.yAxis = yAxis;
	}

	public String getGroupBy()
	{
		return groupBy;
	}

	public void setGroupBy(String groupBy)
	{
		this.groupBy = groupBy;
	}

	public String getGranularity()
	{
		return granularity;
	}

	public void setGranularity(String granularity)
	{
		this.granularity = granularity;
	}

	public String getStartDate()
	{
		return startDate;
	}

	public void setStartDate(String startDate)
	{
		this.startDate = startDate;
	}

	public String getEndDate()
	{
		return endDate;
	}

	public void setEndDate(String endDate)
	{
		this.endDate = endDate;
	}

	public String getAccumulate()
	{
		return accumulate;
	}

	public void setAccumulate(String accumulate)
	{
		this.accumulate = accumulate;
	}

	public Date getDateCreated()
	{
		return dateCreated;
	}

	public void setDateCreated(Date dateCreated)
	{
		this.dateCreated = dateCreated;
	}

	public Date getDateModified()
	{
		return dateModified;
	}

	public void setDateModified(Date dateModified)
	{
		this.dateModified = dateModified;
	}

	public String getDatabaseName()
	{
		return databaseName;
	}

	public void setDatabaseName(String databaseName)
	{
		this.databaseName = databaseName;
	}

	public String getFilterToggle()
	{
		return filterToggle;
	}

	public void setFilterToggle(String filterToggle)
	{
		this.filterToggle = filterToggle;
	}

	public DatabaseTable getDatabaseTable()
	{
		return databaseTable;
	}

	public void setDatabaseTable(DatabaseTable databaseTable)
	{
		this.databaseTable = databaseTable;
	}
}