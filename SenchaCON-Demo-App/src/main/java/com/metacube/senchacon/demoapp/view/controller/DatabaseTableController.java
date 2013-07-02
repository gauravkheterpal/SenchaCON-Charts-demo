package com.metacube.senchacon.demoapp.view.controller;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.metacube.senchacon.demoapp.view.manager.DatabaseTableManager;

@Controller
public class DatabaseTableController
{
	@Autowired
	private DatabaseTableManager databaseTableManager;

	final static Logger logger = LoggerFactory.getLogger(DatabaseTableController.class);

	@RequestMapping(value = "/getAllDatabaseTables.do", method = RequestMethod.GET, produces = "text/plain")
	@ResponseBody
	public String getAllDatabaseTables(HttpServletRequest request)
	{
		return databaseTableManager.getAllDatabaseTables();
	}
	
	@RequestMapping(value = "/getAllDatabaseTableFieldsForTable.do", method = RequestMethod.POST, produces = "text/plain")
	@ResponseBody
	public String getAllDatabaseTableFieldsForTable(HttpServletRequest request)
	{
		Long databaseTableId = Long.parseLong(request.getParameter("databaseTableId"));
		return databaseTableManager.getAllDatabaseTableFieldsForTable(databaseTableId);
	}

	@RequestMapping(value = "/getAllDatabaseTablesDataForCaching.do", method = RequestMethod.POST, produces = "text/plain")
	@ResponseBody
	public String getAllDatabaseTablesDataForCaching(HttpServletRequest request)
	{
		String[] databasesToCache = request.getParameter("databasesToCache").split(",");
		return databaseTableManager.getAllDatabasesTablesDataForCaching(databasesToCache);
	}
}