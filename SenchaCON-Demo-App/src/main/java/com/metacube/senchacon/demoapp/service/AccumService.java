package com.metacube.senchacon.demoapp.service;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AccumService
{
	private final static Logger logger = LoggerFactory.getLogger(AccumService.class);

	public JSONArray getAccumDataForUnified(JSONArray data, String axis, String yAxis, String chartType)
	{
		String returnJSON = "";
		JSONArray accumData = new JSONArray();
		// JSONObject finalAccumData = new JSONObject();
		try
		{
			int size = data.getJSONObject(0).getJSONArray("data").size();
			JSONArray jsonObject = JSONArray.fromObject(data);
			// int size =jsonObject.getJSONObject(0).size();
			Long yAxisValue[] = new Long[size], xAxisValue[] = new Long[size];
			for (int i = 0; i < data.size(); i++)
			{
				JSONArray item = jsonObject.getJSONObject(i).getJSONArray("data");
				JSONArray returnData = new JSONArray();
				for (int j = 0; j < size; j++)
				{
					if (i == 0)
					{
						if (chartType.equalsIgnoreCase("scatter"))
						{
							yAxisValue[j] = item.getJSONObject(j).getLong(yAxis);
							xAxisValue[j] = item.getJSONObject(j).getLong(axis);
						}
						else
						{
							yAxisValue[j] = item.getJSONObject(j).getLong(yAxis);
						}
					}
					else
					{
						if (chartType.equalsIgnoreCase("scatter"))
						{
							xAxisValue[j] = xAxisValue[j] + item.getJSONObject(j).getLong(axis);
							yAxisValue[j] = item.getJSONObject(j).getLong(yAxis) + yAxisValue[j];
						}
						else
						{
							yAxisValue[j] = item.getJSONObject(j).getLong(yAxis) + yAxisValue[j];
						}
					}
					JSONObject itemData = new JSONObject();
					itemData.put(yAxis, yAxisValue[j]);					
					if (chartType.equalsIgnoreCase("scatter"))
					{
						itemData.put(axis, xAxisValue[j]);
					}
					else if (chartType.equalsIgnoreCase("line") || chartType.equalsIgnoreCase("verticalbar")
							|| chartType.equalsIgnoreCase("horizontalbar"))
					{
						itemData.put(axis, item.getJSONObject(j).getString(axis));
					}
					returnData.add(itemData);
				}
				JSONObject dataAccumData = new JSONObject();
				dataAccumData.put("data", returnData);
				accumData.add(dataAccumData);
			}
			// finalAccumData.put("data", accumData);
		}
		catch (Exception e)
		{
			logger.debug("Exception in AccumService " + e);
			return null;
		}
		returnJSON = accumData.toString();
		logger.debug("returning Accum Service JSON as-" + returnJSON);
		return accumData;
	}

	public JSONArray getAccumGroupByDataForUnified(JSONArray data, String axis, String yAxis, String chartType, String[] groupByBar)
	{
		// String returnJSON = "";
		//String[] groupValue = new String[groupByBar.length];
		JSONArray accumData = new JSONArray();
		// JSONObject finalAccumData = new JSONObject();
		try
		{
			int size = data.getJSONObject(0).getJSONArray("data").size();
			JSONArray jsonObject = JSONArray.fromObject(data);
			// int size =jsonObject.getJSONObject(0).size();
			Long previousValue[] = new Long[size], lengthValue[] = new Long[size], groupbar1Value[] = new Long[size], 
					groupbar2Value[] = new Long[size], groupbar3Value[] = new Long[size], groupbar4Value[] = new Long[size];
			if (!(axis.equalsIgnoreCase("date")))
			{
				yAxis = "length";
			}
			for (int i = 0; i < data.size(); i++)
			{
				JSONArray item = jsonObject.getJSONObject(i).getJSONArray("data");
				JSONArray returnData = new JSONArray();
				for (int j = 0; j < size; j++)
				{
					if (i == 0)
					{
						lengthValue[j] = item.getJSONObject(j).getLong(yAxis);
						/*
						 * for( int k =0; k<groupByBar.length;k++) { groupValue
						 * }
						 */
						groupbar1Value[j] = item.getJSONObject(j).getLong(groupByBar[0]);
						groupbar2Value[j] = item.getJSONObject(j).getLong(groupByBar[1]);
						groupbar3Value[j] = item.getJSONObject(j).getLong(groupByBar[2]);
						groupbar4Value[j] = item.getJSONObject(j).getLong(groupByBar[3]);
						previousValue[j] = item.getJSONObject(j).getLong("others");
					}
					else
					{
						previousValue[j] = item.getJSONObject(j).getLong("others") + previousValue[j];
						lengthValue[j] = item.getJSONObject(j).getLong(yAxis) + lengthValue[j];
						groupbar1Value[j] = item.getJSONObject(j).getLong(groupByBar[0]) + groupbar1Value[j];
						groupbar2Value[j] = item.getJSONObject(j).getLong(groupByBar[1]) + groupbar2Value[j];
						groupbar3Value[j] = item.getJSONObject(j).getLong(groupByBar[2]) + groupbar3Value[j];
						groupbar4Value[j] = item.getJSONObject(j).getLong(groupByBar[3]) + groupbar4Value[j];
					}
					JSONObject itemData = new JSONObject();
					itemData.put("others", previousValue[j]);
					if (chartType.equalsIgnoreCase("scatter"))
					{
						itemData.put(axis, item.getJSONObject(j).getLong(axis));
					}
					else if (chartType.equalsIgnoreCase("line") || chartType.equalsIgnoreCase("verticalbar")
							|| chartType.equalsIgnoreCase("horizontalbar"))
					{
						itemData.put(axis, item.getJSONObject(j).getString(axis));
					}
					itemData.put(yAxis, lengthValue[j]);
					itemData.put(groupByBar[0], groupbar1Value[j]);
					itemData.put(groupByBar[1], groupbar2Value[j]);
					itemData.put(groupByBar[2], groupbar3Value[j]);
					itemData.put(groupByBar[3], groupbar4Value[j]);
					returnData.add(itemData);
				}
				JSONObject dataAccumData = new JSONObject();
				dataAccumData.put("data", returnData);
				accumData.add(dataAccumData);
			}
			// finalAccumData.put("data", accumData);
		}
		catch (Exception e)
		{
			logger.debug("Exception in AccumService " + e);
			return null;
		}
		// returnJSON = accumData.toString();
		// logger.debug("returning Accum Service JSON as-" + returnJSON);
		return accumData;
	}
}