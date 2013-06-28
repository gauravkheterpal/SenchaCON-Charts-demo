package com.metacube.senchacon.demoapp.service;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import static org.apache.commons.lang.StringEscapeUtils.escapeHtml;


import com.metacube.senchacon.demoapp.model.dao.FilterFieldsDAO;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;

@Service
public class FilterFieldsService
{
	@Autowired
	FilterFieldsDAO filterFieldsDAO;

	Logger logger = LoggerFactory.getLogger(FilterFieldsService.class);

	public String getFilterFieldListForCategory(DatabaseTableView database, String filterCategory)
	{
		List<Object> data = filterFieldsDAO.getFields(database, filterCategory);
		String response = null;
		JSONArray returnArray = new JSONArray();
		JSONObject item = new JSONObject();
		//item.put("Field", "Select/Unselect All");
		//item.put("Checked", true);
		//returnArray.add(item);
		int i = 0;
		for (; i < data.size(); i++)
		{
			String fieldName = String.valueOf(data.get(i));
			item = new JSONObject();
			item.put("Field", fieldName);
			item.put("FieldLabel", escapeHtml(fieldName));
			item.put("Checked", true);
			returnArray.add(item);
		}
		response = returnArray.toString();
		//logger.debug("Return string in filterService is==" + response);
		return response;
	}
}
