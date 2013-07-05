package com.metacube.senchacon.demoapp.view.controller;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.metacube.senchacon.demoapp.view.manager.UnifiedManager;

@Controller
public class UnifiedController
{

	@Autowired
	UnifiedManager unifiedManager;

	private final static Logger logger = LoggerFactory.getLogger(UnifiedController.class);

	@RequestMapping(value = "/getUnifiedData.do", method = RequestMethod.GET, produces = "text/plain")
	@ResponseBody
	public String getUnifiedChartData(HttpServletRequest request,
			@RequestParam(value = "databaseName", required = false) String databaseName,
			@RequestParam(value = "x_axis", required = false) String xAxis, @RequestParam(value = "y_axis", required = false) String yAxis,
			@RequestParam(value = "groupBy", required = false) String groupBy,
			@RequestParam(value = "chartType", required = false) String chartType,
			@RequestParam(value = "absStartDate", required = false) String absStartDate,
			@RequestParam(value = "absEndDate", required = false) String absEndDate,
			@RequestParam(value = "granularity", required = false) String granularity,
			@RequestParam(value = "differential", required = false) String differential,
			@RequestParam(value = "accum", required = false) String accum,
			@RequestParam(value = "filterString", required = false) String filterString,
			@RequestParam(value = "imType3Setting", required = false) Integer imType3Setting,
			@RequestParam(value = "imType1Setting", required = false) Long imType1Setting,
			@RequestParam(value = "imType2Setting", required = false) Double imType2Setting,
			@RequestParam(value = "imType4Setting", required = false) Integer imType4Setting)
	{
		String responseString = "";
		responseString = unifiedManager.getUnifiedData(databaseName, xAxis, yAxis, groupBy, chartType, absStartDate, absEndDate,
				granularity, differential, accum, filterString, imType1Setting, imType2Setting, imType3Setting, imType4Setting);
		logger.debug("\nINCOMING REQUEST for UnifiedController at date/time " + new Date(System.currentTimeMillis()) + " ->  "
				+ request.getQueryString() + "\n& RESPONSE=  " + responseString + "\n\n");
		return responseString;
	}
}