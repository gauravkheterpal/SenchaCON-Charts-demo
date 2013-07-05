package com.metacube.senchacon.demoapp.service;

import java.util.List;

import net.sf.json.JSONArray;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.metacube.senchacon.demoapp.common.enums.CategoryField;
import com.metacube.senchacon.demoapp.common.util.ChartDataUtils;
import com.metacube.senchacon.demoapp.model.dao.FixOrderGroupByDAO;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;

public class UnifiedFixOrderService
{
	@Autowired
	private FixOrderGroupByDAO fixOrderGroupByDAO;

	final static Logger logger = LoggerFactory.getLogger(UnifiedFixOrderService.class);

	public String getFixOrderString(DatabaseTableView database, DatabaseTableFieldsView timeField, String startDate, String endDate,
			String granularity, String chartType, DatabaseTableFieldsView dataField, DatabaseTableFieldsView categoryField,
			String filterString)
	{
		String fixOrderString = "";
		try
		{
			List<Object> data = null;
			data = fixOrderGroupByDAO.getFixOrderGroupByBarValues(database, timeField, startDate, endDate, dataField, categoryField,
					filterString, false);
			if (data != null)
			{				
				String response = ChartDataUtils.getJSONStringForPieChartData(data, dataField.getFieldName(), categoryField.getFieldName(),
						false);

				JSONArray jsonObject = JSONArray.fromObject(response);

				if (categoryField.getFieldName().equalsIgnoreCase(CategoryField.DATE.toString()))
				{
					fixOrderString = "order by `" + timeField.getFieldSelection() + "` asc";
				}
				else if (categoryField.getFieldName().equalsIgnoreCase(CategoryField.DAY_OF_WEEK.toString()))
				{
					fixOrderString = "order by case day_of_week when 'Monday' then 1 when 'Tuesday' then 2 when 'Wednesday' then 3 when 'Thursday' then 4 when 'Friday' then 5 when 'Saturday' then 6 when 'Sunday' then 7 else 99 end";
				}
				else if (categoryField.getFieldName().equalsIgnoreCase(CategoryField.HOUR.toString()))
				{
					fixOrderString = "order by case Hour when '12am' then 1 when '1am' then 2 when '2am' then 3 when '3am' then 4 when '4am' then 5 when '5am' then 6 when '6am' then 7 when '7am' then 8 when '8am' then 9 when '9am' then 10 when '10am' then 11 when '11am' then 12 when '12pm' then 13 when '1pm' then 14 when '2pm' then 15 when '3pm' then 16 when '4pm' then 17 when '5pm' then 18 when '6pm' then 19 when '7pm' then 20 when '8pm' then 21 when '9pm' then 22 when '10pm' then 23 when '11pm' then 24 else 99 end";
				}
				else if (categoryField.getFieldName().equalsIgnoreCase(CategoryField.WEEK.toString()))
				{
					fixOrderString = "order by case Week when 'Week 1' then 1 when 'Week 2' then 2 when 'Week 3' then 3 when 'Week 4' then 4 when 'Week 5' then 5 else 99 end";
				}
				else if (categoryField.getFieldName().equalsIgnoreCase(CategoryField.MONTH.toString()))
				{
					fixOrderString = "order by case Month when 'January' then 1 when 'February' then 2 when 'March' then 3 when 'April' then 4 when 'May' then 5 when 'June' then 6 when 'July' then 7 when 'August' then 8 when 'September' then 9 when 'October' then 10 when 'November' then 11 when 'December' then 12 else 99 end";
				}
				else
				{
					fixOrderString = "order by case `" + categoryField.getFieldName() + "`";
					for (int i = 0; i < jsonObject.size(); i++)
					{
						int index = i + 1;
						fixOrderString = fixOrderString + " when  '" + jsonObject.getJSONObject(i).getString(categoryField.getFieldName())
								+ "' then " + index;
					}
					fixOrderString = fixOrderString + " else 99 end";
				}
			}			
		}
		catch (Exception e)
		{
			logger.debug("Exception in UnifiedFixOrderService" + e);
		}
		return fixOrderString;
	}
}