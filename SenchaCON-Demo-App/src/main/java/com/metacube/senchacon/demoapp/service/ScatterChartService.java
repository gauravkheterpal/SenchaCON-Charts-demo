package com.metacube.senchacon.demoapp.service;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.metacube.senchacon.demoapp.common.Constants;
import com.metacube.senchacon.demoapp.common.enums.Granularity;
import com.metacube.senchacon.demoapp.common.util.ChartDataUtils;
import com.metacube.senchacon.demoapp.common.util.DateUtils;
import com.metacube.senchacon.demoapp.model.dao.ScatterChartDAO;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;

@Service
public class ScatterChartService
{
	@Autowired
	private ScatterChartDAO scatterChartDao;

	@Autowired
	private GetMaxService getMaxService;

	final static Logger logger = LoggerFactory.getLogger(ScatterChartService.class);

	public String getScatterChartDataFromDAO(DatabaseTableView database, DatabaseTableFieldsView timeField, String startDate,
			String endDate, String granularity, DatabaseTableFieldsView dataField1, DatabaseTableFieldsView dataField2)
	{
		String json = null;
		List<Object> data = null;
		data = scatterChartDao.getScatterChartData(database, timeField, startDate, endDate, granularity, dataField1, dataField2);
		json = ChartDataUtils.getJSONStringForScatterChartData(data, dataField1, dataField2);
		return json;
	}

	public String getUnifiedScatterChartData(DatabaseTableView database, DatabaseTableFieldsView timeField, String absStartDate,
			String absEndDate, String granularity, DatabaseTableFieldsView dataField1, DatabaseTableFieldsView dataField2,
			DatabaseTableFieldsView groupByField, String differential)
	{
		JSONArray returnArray = new JSONArray();
		JSONArray dateArray = new JSONArray();
		String json;
		String startDate = absStartDate, endDate = "";
		if (granularity.equalsIgnoreCase(Granularity.DAILY.toString()))
		{
			for (int i = 0; i <= Integer.parseInt(differential); i++)
			{
				dateArray.add(startDate);
				endDate = DateUtils.DateIncrement(startDate, i);
				json = getScatterChartDataFromDAO(database, timeField, startDate, endDate, granularity, dataField1, dataField2);
				JSONObject item = new JSONObject();
				item.put(Constants.DATA_IDENTIFIER, json);
				returnArray.add(item);
				startDate = endDate;
			}
		}
		else if (granularity.equalsIgnoreCase(Granularity.HOURLY.toString()))
		{
			startDate = startDate + " " + Constants.HOURLY_START_TIME;
			endDate = DateUtils.getNextHourForHourlyFunction(startDate);
			for (int i = 0; i <= Integer.parseInt(differential); i++)
			{
				dateArray.add(DateUtils.convertDateForInterestingMomentForHourly(startDate));
				json = getScatterChartDataFromDAO(database, timeField, startDate, endDate, granularity, dataField1, dataField2);
				JSONObject item = new JSONObject();
				item.put(Constants.DATA_IDENTIFIER, json);
				returnArray.add(item);
				startDate = endDate;
				endDate = DateUtils.HourIncrease(endDate);
			}
		}
		else if (granularity.equalsIgnoreCase(Granularity.WEEKLY.toString()))
		{
			for (int i = 0; i <= Integer.parseInt(differential); i++)
			{
				dateArray.add(startDate);
				if (i == Integer.parseInt(differential))
				{
					endDate = DateUtils.WeekIncrement(startDate, Integer.parseInt(differential) % 7);
				}
				else
				{
					endDate = DateUtils.WeekIncrement(startDate, 0);
				}
				json = getScatterChartDataFromDAO(database, timeField, startDate, endDate, granularity, dataField1, dataField2);
				JSONObject item = new JSONObject();
				item.put(Constants.DATA_IDENTIFIER, json);
				returnArray.add(item);
				startDate = endDate;
			}
		}
		else if (granularity.equalsIgnoreCase(Granularity.MONTHLY.toString()))
		{
			for (int i = 0; i <= Integer.parseInt(differential); i++)
			{
				dateArray.add(startDate);
				if (i == Integer.parseInt(differential))
				{
					endDate = absEndDate;
				}
				else
				{
					endDate = DateUtils.MonthIncrease(startDate);
				}
				json = getScatterChartDataFromDAO(database, timeField, startDate, endDate, granularity, dataField1, dataField2);
				JSONObject item = new JSONObject();
				item.put(Constants.DATA_IDENTIFIER, json);
				returnArray.add(item);
				startDate = endDate;
			}
		}
		JSONObject response = new JSONObject();
		response.put(Constants.DATA_IDENTIFIER, returnArray);
		response.put(Constants.DATE_ARRAY_INDENTIFIER, dateArray);
		if (groupByField == null)
		{
			response.put(Constants.DATA_FIELD_IDENTIFIER, dataField1.getFieldLabel());
			response.put(Constants.CATEGORY_FIELD_IDENTIFIER, dataField2.getFieldLabel());
			response.put(Constants.X_MAX_IDENTIFIER, getMaxService.getMaxFromUnifiedJSON(returnArray, dataField1.getFieldLabel()));
			response.put(Constants.Y_MAX_IDENTIFIER, getMaxService.getMaxFromUnifiedJSON(returnArray, dataField2.getFieldLabel()));
		}
		return response.toString();
	}
}