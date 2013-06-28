package com.metacube.senchacon.demoapp.service;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.metacube.senchacon.demoapp.common.enums.DatabaseFieldTypes;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;

@Service
public class GetMaxService
{
	private final static Logger logger = LoggerFactory.getLogger(GetMaxService.class);

	public String getMaxFromUnifiedJSON(JSONArray data, String axis)
	{
		long max = 0, temp;
		try
		{
			for (int i = 0; i < data.size(); i++)
			{
				try
				{
					JSONArray item = data.getJSONObject(i).getJSONArray("data");
					for (int j = 0; j < item.size(); j++)
					{
						temp = item.getJSONObject(j).getLong(axis);
						if (temp > max)
						{
							max = temp;
						}
					}
				}
				catch (Exception e)
				{
					logger.debug("Exception in getMax method" + e.getMessage());
				}
			}
		}
		catch (Exception e)
		{
			logger.debug("Exception in getMax method" + e);
			return "0";
		}
		return Long.toString(max);
	}

	public String getMaxGroupByFromUnifiedJSON(JSONArray data, String axis, String[] groupByBar)
	{
		long max = 0, temp = 0;
		String dataIdentifiers[] = { "groupByBar1", "groupByBar2", "groupByBar3", "groupByBar4", "Others" };
		try
		{
			for (int i = 0; i < data.size(); i++)
			{
				try
				{
					JSONArray item = data.getJSONObject(i).getJSONArray("data");
					for (int j = 0; j < item.size(); j++)
					{
						for (int k = 0; k < groupByBar.length; k++)
						{
							try
							{
								temp = item.getJSONObject(j).getLong(dataIdentifiers[k]);
							}
							catch (Exception e)
							{
								logger.debug("Exception in getMaxGroupBy method--" + e.getMessage());
							}
							if (temp > max)
							{
								max = temp;
							}
						}
					}
				}
				catch (Exception e)
				{
					logger.debug("Exception in getMaxGroupBy method" + e.getMessage());
				}
			}
		}
		catch (Exception e)
		{
			logger.debug("Exception in getMaxGroupBy method" + e.getMessage());
			return "0";
		}
		return Long.toString(max);
	}

	public String getMaxGroupByFromUnifiedJSONBarChart(JSONArray data, DatabaseTableFieldsView dataField, String[] groupByBar,
			DatabaseTableFieldsView categoryField)
	{
		String identifier = "length";
		if (categoryField.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.TIME_CATEGORY_FIELD.toString()))
		{
			identifier = dataField.getFieldLabel();
		}
		long max = 0, temp = 0;
		try
		{
			for (int i = 0; i < data.size(); i++)
			{
				try
				{
					JSONArray item = data.getJSONObject(i).getJSONArray("data");
					for (int j = 0; j < item.size(); j++)
					{
						JSONObject object = item.getJSONObject(j);
						try
						{
							temp = object.getLong(identifier);
						}
						catch (Exception e)
						{
							logger.debug("Exception in getMaxGroupByBarChart method--" + e.getMessage());
						}
						if (temp > max)
						{
							max = temp;
						}
					}
				}
				catch (Exception e)
				{
					logger.debug("Exception in getMaxGroupByBarChart method" + e.getMessage());
				}
			}
		}
		catch (Exception e)
		{
			logger.debug("Exception in getMaxGroupByBarChart method" + e.getMessage());
			return "0";
		}
		return Long.toString(max);
	}

	public Long getMaxForTrendingDataJSON(JSONArray data, String axis)
	{
		long max = 0, temp;
		try
		{
			for (int i = 0; i < data.size(); i++)
			{
				JSONObject item = data.getJSONObject(i);
				temp = item.getLong(axis);
				if (temp > max)
				{
					max = temp;
				}
			}
		}
		catch (Exception e)
		{
			logger.debug("Exception in getMax method" + e);
			return new Long(0);
		}
		return max;
	}
}