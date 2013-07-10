package com.metacube.senchacon.demoapp.view.manager;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.metacube.senchacon.demoapp.common.enums.CategoryField;
import com.metacube.senchacon.demoapp.common.enums.ChartType;
import com.metacube.senchacon.demoapp.common.util.Utilities;
import com.metacube.senchacon.demoapp.service.BarChartService;
import com.metacube.senchacon.demoapp.service.GaugeChartService;
import com.metacube.senchacon.demoapp.service.GetMaxService;
import com.metacube.senchacon.demoapp.service.PieChartService;
import com.metacube.senchacon.demoapp.service.ScatterChartService;
import com.metacube.senchacon.demoapp.service.UnifiedFixOrderService;
import com.metacube.senchacon.demoapp.service.UnifiedGroupByBarService;
import com.metacube.senchacon.demoapp.service.UnifiedService;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;

@Component
public class UnifiedManager
{
	final static Logger logger = LoggerFactory.getLogger(UnifiedManager.class);

	@Autowired
	PieChartService pieChartService;

	@Autowired
	GaugeChartService gaugeChartService;

	@Autowired
	ScatterChartService scatterChartService;

	@Autowired
	GetMaxService getMaxService;

	@Autowired
	BarChartService barChartService;

	@Autowired
	private UnifiedService unifiedService;

	@Autowired
	private UnifiedFixOrderService unifiedFixOrderService;

	@Autowired
	private UnifiedGroupByBarService unifiedGroupByBarService;

	@Autowired
	private DatabaseTableManager databaseTableManager;

	public String getUnifiedData(String databaseName, String xAxis, String yAxis, String groupBy, String chartType, String absStartDate,
			String absEndDate, String granularity, String differential)
	{
		String responseString = "";
		String groupByBarValues[] = new String[4];
		String fixOrderString = null;
		DatabaseTableView database = databaseTableManager.findDatabaseTableViewForDatabaseName(databaseName);
		DatabaseTableFieldsView xAxisField = null, yAxisField = null, groupByField = null, timeField = null;
		if (Utilities.verifyString(xAxis))
		{
			xAxisField = databaseTableManager.findDatabaseTableFieldsViewForFieldName(database, xAxis);
		}
		if (Utilities.verifyString(yAxis))
		{
			yAxisField = databaseTableManager.findDatabaseTableFieldsViewForFieldName(database, yAxis);
		}
		if (Utilities.verifyString(groupBy))
		{
			groupByField = databaseTableManager.findDatabaseTableFieldsViewForFieldName(database, groupBy);
		}
		timeField = databaseTableManager.findTimeDatabaseTableFieldsViewForDatabase(database);

		DatabaseTableFieldsView dataField, categoryField;
		if (chartType.equalsIgnoreCase(ChartType.HORIZONTALBAR.toString()) || chartType.equalsIgnoreCase(ChartType.SCATTER.toString()))
		{
			dataField = xAxisField;
			categoryField = yAxisField;
		}
		else if (chartType.equalsIgnoreCase(ChartType.VERTICALBAR.toString()) || chartType.equalsIgnoreCase(ChartType.LINE.toString())
				|| chartType.equalsIgnoreCase(ChartType.AREA.toString()))
		{
			dataField = yAxisField;
			categoryField = xAxisField;
		}
		else
		{
			dataField = xAxisField;
			categoryField = groupByField;
		}

		if (!chartType.equalsIgnoreCase(ChartType.SCATTER.toString()) && !chartType.equalsIgnoreCase(ChartType.GAUGE.toString()))
		{
			fixOrderString = unifiedFixOrderService.getFixOrderString(database, timeField, absStartDate, absEndDate, granularity,
					chartType, dataField, categoryField, "");
		}

		if ((!(groupBy.equalsIgnoreCase(CategoryField.NONE.toString())))
				&& (chartType.equalsIgnoreCase(ChartType.LINE.toString()) || chartType.equalsIgnoreCase(ChartType.VERTICALBAR.toString()) || chartType
						.equalsIgnoreCase(ChartType.HORIZONTALBAR.toString()) || chartType.equalsIgnoreCase(ChartType.AREA.toString())))
		{
			groupByBarValues = unifiedGroupByBarService.getUnifiedGroupByBarValues(database, timeField, absStartDate, absEndDate,
					dataField, groupByField, "");
		}

		if (chartType.equalsIgnoreCase(ChartType.PIE.toString()) || chartType.equalsIgnoreCase(ChartType.RADAR.toString()))
		{
			responseString = pieChartService.getUnifiedPieChartData(database, timeField, absStartDate, absEndDate, granularity, dataField,
					categoryField, fixOrderString, differential, "", "");
		}
		else if (chartType.equalsIgnoreCase(ChartType.GAUGE.toString()))
		{
			responseString = gaugeChartService.getUnifiedGaugeChartData(database, timeField, absStartDate, absEndDate, granularity,
					dataField, fixOrderString, differential, "", "");
		}
		else if (chartType.equalsIgnoreCase(ChartType.HORIZONTALBAR.toString())
				|| chartType.equalsIgnoreCase(ChartType.VERTICALBAR.toString()) || chartType.equalsIgnoreCase(ChartType.LINE.toString())
				|| chartType.equalsIgnoreCase(ChartType.AREA.toString()))
		{
			responseString = barChartService.getUnifiedBarChartData(chartType, database, timeField, absStartDate, absEndDate, granularity,
					dataField, categoryField, groupByField, groupByBarValues, fixOrderString, differential, "", "");
		}
		else if (chartType.equalsIgnoreCase(ChartType.SCATTER.toString()))
		{
			responseString = scatterChartService.getUnifiedScatterChartData(database, timeField, absStartDate, absEndDate, granularity,
					dataField, categoryField, groupByField, differential);
		}
		return responseString;
	}
}