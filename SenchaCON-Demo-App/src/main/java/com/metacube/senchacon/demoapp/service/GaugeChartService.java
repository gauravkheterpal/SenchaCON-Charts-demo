package com.metacube.senchacon.demoapp.service;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.metacube.senchacon.demoapp.common.Constants;
import com.metacube.senchacon.demoapp.common.enums.ChartType;
import com.metacube.senchacon.demoapp.common.enums.Granularity;
import com.metacube.senchacon.demoapp.common.util.ChartDataUtils;
import com.metacube.senchacon.demoapp.common.util.DateUtils;
import com.metacube.senchacon.demoapp.model.dao.GaugeChartDAO;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;

@Service
public class GaugeChartService
{
	@Autowired
	private GaugeChartDAO gaugeChartDao;

	@Autowired
	private AccumService accumService;

	@Autowired
	private InterestingMomentsService interestingMomentsService;

	final static Logger logger = LoggerFactory.getLogger(GaugeChartService.class);

	public String getGaugeChartData(DatabaseTableView database, DatabaseTableFieldsView timeField, String startDate, String endDate,
			String granularity, DatabaseTableFieldsView dataField, String fixOrderString,
			String filterString)
	{
		String json = null;
		List<Object> data = null;
		data = gaugeChartDao.getGaugeChartData(database, timeField, startDate, endDate, granularity, dataField, fixOrderString,
				filterString);
		json = ChartDataUtils.getJSONStringForGaugeChartData(data, dataField.getFieldLabel(),true);
		return json;
	}

	public String getUnifiedGaugeChartData(DatabaseTableView database, DatabaseTableFieldsView timeField, String absStartDate,
			String absEndDate, String granularity, DatabaseTableFieldsView dataField, 
			String fixOrderString, String dayDifferential, String accum, String filterString)
	{
		JSONArray returnArray = new JSONArray();
		JSONArray dateArray = new JSONArray();
		String json;
		String startDate = absStartDate, endDate = absEndDate;
		if (granularity.equalsIgnoreCase(Granularity.DAILY.toString()))
		{
			for (int i = 0; i <= Integer.parseInt(dayDifferential); i++)
			{
				endDate = DateUtils.DateIncrement(startDate, i);
				json = getGaugeChartData(database, timeField, startDate, endDate, granularity, dataField,  fixOrderString,
						filterString);
				JSONObject item = new JSONObject();
				item.put(Constants.DATA_IDENTIFIER, json);
				dateArray.add(startDate);
				returnArray.add(item);
				startDate = endDate;
			}
		}
		else if (granularity.equalsIgnoreCase(Granularity.HOURLY.toString()))
		{
			startDate = startDate + " " + Constants.HOURLY_START_TIME;
			endDate = DateUtils.getNextHourForHourlyFunction(startDate);
			for (int i = 0; i <= Integer.parseInt(dayDifferential); i++)
			{
				dateArray.add(DateUtils.convertDateForInterestingMomentForHourly(startDate));
				json = getGaugeChartData(database, timeField, startDate, endDate, granularity, dataField,  fixOrderString,
						filterString);
				JSONObject item = new JSONObject();
				item.put(Constants.DATA_IDENTIFIER, json);
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
				json = getGaugeChartData(database, timeField, startDate, endDate, granularity, dataField, fixOrderString,
						filterString);
				JSONObject item = new JSONObject();
				item.put(Constants.DATA_IDENTIFIER, json);
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
				json = getGaugeChartData(database, timeField, startDate, endDate, granularity, dataField, fixOrderString,
						filterString);
				JSONObject item = new JSONObject();
				item.put(Constants.DATA_IDENTIFIER, json);
				returnArray.add(item);
				startDate = endDate;
			}
		}
		JSONObject response = new JSONObject();
		if (accum.equalsIgnoreCase("on"))
		{
			returnArray = accumService.getAccumDataForUnified(returnArray, dataField.getFieldName(), null, ChartType.GAUGE.toString());
		}
		response.put(Constants.DATA_IDENTIFIER, returnArray);
		response.put(Constants.DATA_FIELD_IDENTIFIER, dataField.getFieldLabel());
		//response.put(Constants.CATEGORY_FIELD_IDENTIFIER, categoryField.getFieldLabel());
		response.put(Constants.DATE_ARRAY_INDENTIFIER, dateArray);
		return response.toString();
	}
}
