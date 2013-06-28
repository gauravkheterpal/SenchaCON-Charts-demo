package com.metacube.senchacon.demoapp.service;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.metacube.senchacon.demoapp.common.enums.ChartType;
import com.metacube.senchacon.demoapp.common.enums.DatabaseFieldTypes;
import com.metacube.senchacon.demoapp.common.enums.Granularity;
import com.metacube.senchacon.demoapp.common.util.ChartDataUtils;
import com.metacube.senchacon.demoapp.common.util.DateUtils;
import com.metacube.senchacon.demoapp.common.util.Utilities;
import com.metacube.senchacon.demoapp.model.dao.BarChartDAO;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;

@Service
public class BarChartService
{
	@Autowired
	private BarChartDAO barChartDAO;

	@Autowired
	private GetMaxService getMaxService;

	@Autowired
	private AccumService accumService;

	@Autowired
	private InterestingMomentsService interestingMomentsService;

	final static Logger logger = LoggerFactory.getLogger(BarChartService.class);

	private String getGroupBarChart(DatabaseTableView database, DatabaseTableFieldsView timeField, String startDate, String endDate,
			DatabaseTableFieldsView dataField, DatabaseTableFieldsView categoryField, DatabaseTableFieldsView groupByField,
			String[] groupByBarValues, String fixOrderString, String granularity, String absStartDate, String absEndDate,
			String filterString)
	{
		String json = null;
		List<Object> data = null;

		data = barChartDAO.getBarChart(database, timeField, startDate, endDate, dataField, categoryField, groupByField, groupByBarValues,
				fixOrderString, granularity, absStartDate, absEndDate, filterString);

		if (groupByField == null)
		{
			if (categoryField.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.CATEGORY_FIELD.toString()))
			{
				json = ChartDataUtils.getJSONStringForBarChartData(data, categoryField, dataField, 4);
			}
			else
			{
				json = ChartDataUtils.getJSONStringForBarChartData(data, categoryField, dataField, 50);
			}
		}
		else
		{
			if (categoryField.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.CATEGORY_FIELD.toString()))
			{
				json = ChartDataUtils.getJSONStringForBarChartDataGroupBy(data, categoryField, dataField, 5, groupByBarValues);
			}
			else
			{
				json = ChartDataUtils.getJSONStringForBarChartDataGroupBy(data, categoryField, dataField, 50, groupByBarValues);
			}
		}
		return json;
	}

	public String getUnifiedBarChartData(String chartType, DatabaseTableView database, DatabaseTableFieldsView timeField,
			String absStartDate, String absEndDate, String granularity, DatabaseTableFieldsView dataField,
			DatabaseTableFieldsView categoryField, DatabaseTableFieldsView groupByField, String[] groupByBarValues, String fixOrderString,
			String dayDifferential, String accum, String filterString)
	{
		JSONArray dateArray = new JSONArray();
		JSONArray returnArray = new JSONArray();
		String startDate = absStartDate;
		String endDate = absEndDate;
		String json;
		if (granularity.equalsIgnoreCase(Granularity.DAILY.toString()))
		{
			for (int i = 0; i <= Integer.parseInt(dayDifferential); i++)
			{
				dateArray.add(startDate);
				endDate = DateUtils.DateIncrement(startDate, i);
				json = getGroupBarChart(database, timeField, startDate, endDate, dataField, categoryField, groupByField, groupByBarValues,
						fixOrderString, granularity, absStartDate, absEndDate, filterString);
				JSONObject item = new JSONObject();
				item.put("data", json);
				returnArray.add(item);
				startDate = endDate;
			}
		}
		else if (granularity.equalsIgnoreCase(Granularity.HOURLY.toString()))
		{

			startDate = startDate + " " + "00:00:00";
			endDate = DateUtils.getNextHourForHourlyFunction(startDate);
			for (int i = 0; i <= Integer.parseInt(dayDifferential); i++)
			{
				dateArray.add(DateUtils.convertDateForInterestingMomentForHourly(startDate));
				json = getGroupBarChart(database, timeField, startDate, endDate, dataField, categoryField, groupByField, groupByBarValues,
						fixOrderString, granularity, absStartDate, absEndDate, filterString);
				JSONObject item = new JSONObject();
				item.put("data", json);
				returnArray.add(item);
				startDate = endDate;
				endDate = DateUtils.HourIncrease(endDate);
			}
		}
		else if (granularity.equalsIgnoreCase(Granularity.WEEKLY.toString()))
		{
			for (int i = 0; i <= Integer.parseInt(dayDifferential); i++)
			{
				dateArray.add(startDate);
				if (i == Integer.parseInt(dayDifferential))
				{
					endDate = DateUtils.WeekIncrement(startDate, Integer.parseInt(dayDifferential) % 7);
				}
				else
				{
					endDate = DateUtils.WeekIncrement(startDate, 0);
				}
				json = getGroupBarChart(database, timeField, startDate, endDate, dataField, categoryField, groupByField, groupByBarValues,
						fixOrderString, granularity, absStartDate, absEndDate, filterString);
				JSONObject item = new JSONObject();
				item.put("data", json);
				returnArray.add(item);
				startDate = endDate;
			}
		}
		else if (granularity.equalsIgnoreCase(Granularity.MONTHLY.toString()))
		{
			for (int i = 0; i <= Integer.parseInt(dayDifferential); i++)
			{
				dateArray.add(startDate);
				if (i == Integer.parseInt(dayDifferential))
				{
					endDate = absEndDate;
				}
				else
				{
					endDate = DateUtils.MonthIncrease(startDate);
				}
				json = getGroupBarChart(database, timeField, startDate, endDate, dataField, categoryField, groupByField, groupByBarValues,
						fixOrderString, granularity, absStartDate, absEndDate, filterString);
				JSONObject item = new JSONObject();
				item.put("data", json);
				returnArray.add(item);
				startDate = endDate;
			}
		}
		JSONObject response = new JSONObject();
		if (accum.equalsIgnoreCase("on") && groupByField == null)
		{
			returnArray = accumService.getAccumDataForUnified(returnArray, dataField.getFieldLabel(), categoryField.getFieldLabel(),
					ChartType.LINE.toString());
		}
		else if (accum.equalsIgnoreCase("on") && (groupByField != null))
		{
			returnArray = accumService.getAccumGroupByDataForUnified(returnArray, dataField.getFieldLabel(), categoryField.getFieldLabel(),
					ChartType.LINE.toString(), groupByBarValues);
		}
		response.put("data", returnArray);
		response.put("dateArray", dateArray);
		response.put("dataField", dataField.getFieldLabel());
		response.put("categoryField", categoryField.getFieldLabel());
		if (groupByField == null)
		{
			response.put("interestingMoments", interestingMomentsService.getInterestingMomentForUnifiedData(chartType, returnArray,
					dataField.getFieldLabel(), categoryField.getFieldLabel(), dateArray, granularity, absEndDate));
			if (chartType.equalsIgnoreCase(ChartType.HORIZONTALBAR.toString()))
			{
				response.put("xMax", getMaxService.getMaxFromUnifiedJSON(returnArray, dataField.getFieldLabel()));
				response.put("yMax", "0");
			}
			else
			{
				response.put("xMax", "0");
				response.put("yMax", getMaxService.getMaxFromUnifiedJSON(returnArray, dataField.getFieldLabel()));
			}
		}
		else
		{
			if (chartType.equalsIgnoreCase(ChartType.HORIZONTALBAR.toString()))
			{
				response.put("xMax", getMaxService.getMaxGroupByFromUnifiedJSONBarChart(returnArray, dataField,
						groupByBarValues, categoryField));
				response.put("yMax", "0");
			}
			else
			{
				response.put("xMax", "0");
				response.put("yMax", getMaxService.getMaxGroupByFromUnifiedJSONBarChart(returnArray, dataField,
						groupByBarValues, categoryField));
			}
			response.put("groupByBarArray", Utilities.escapeHTMLGroupByBarStrings(groupByBarValues));
			String[] groupByBars = { "groupByBar1", "groupByBar2", "groupByBar3", "groupByBar4", "Others" };
			response.put("interestingMoments", interestingMomentsService.getInterestingMomentForUnifiedData(chartType, returnArray,
					dataField.getFieldLabel(), categoryField.getFieldLabel(), dateArray, granularity, groupByBars, absEndDate));
		}
		return response.toString();
	}
}