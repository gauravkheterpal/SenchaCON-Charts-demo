package com.metacube.senchacon.demoapp.service;

import java.util.List;

import net.sf.json.JSONArray;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.metacube.senchacon.demoapp.common.util.ChartDataUtils;
import com.metacube.senchacon.demoapp.model.dao.FixOrderGroupByDAO;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;

public class UnifiedGroupByBarService
{
	@Autowired
	private FixOrderGroupByDAO fixOrderGroupByDAO;

	final static Logger logger = LoggerFactory.getLogger(UnifiedGroupByBarService.class);

	public String[] getUnifiedGroupByBarValues(DatabaseTableView database, DatabaseTableFieldsView timeField, String startDate,
			String endDate, DatabaseTableFieldsView dataField, DatabaseTableFieldsView categoryField, String filterString)
	{
		String json = null;
		List<Object> data = null;
		data = fixOrderGroupByDAO.getFixOrderGroupByBarValues(database, timeField, startDate, endDate, dataField, categoryField,
				filterString, true);

		json = ChartDataUtils.getJSONStringForPieChartData(data, dataField.getFieldName(), categoryField.getFieldName(), Boolean.FALSE);

		String response = json;
		JSONArray jsonObject = JSONArray.fromObject(response);
		String groupBar[] = new String[jsonObject.size()];
		for (int i = 0; i < jsonObject.size(); i++)
		{
			groupBar[i] = jsonObject.getJSONObject(i).getString(categoryField.getFieldName());
		}
		return groupBar;
	}
}
