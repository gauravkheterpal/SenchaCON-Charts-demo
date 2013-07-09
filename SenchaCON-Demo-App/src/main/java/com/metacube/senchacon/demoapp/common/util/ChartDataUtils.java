package com.metacube.senchacon.demoapp.common.util;

import static org.apache.commons.lang.StringEscapeUtils.escapeHtml;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.metacube.senchacon.demoapp.common.Constants;
import com.metacube.senchacon.demoapp.common.enums.CategoryField;
import com.metacube.senchacon.demoapp.common.enums.DataField;
import com.metacube.senchacon.demoapp.common.enums.DatabaseFieldTypes;
import com.metacube.senchacon.demoapp.common.enums.Granularity;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;

public class ChartDataUtils
{
	public static String getJSONStringForPieChartData(List<Object> data, String dataField, String categoryField, Boolean limitData)
	{
		String json = null;
		if (data != null)
		{
			JSONArray returnArray = new JSONArray();
			if (data.size() != 0)
			{
				if (limitData)
				{
					int i = 0;
					for (; i < Constants.MAX_GROUP_BY && i < data.size(); i++)
					{
						Object[] row = (Object[]) data.get(i);
						JSONObject item = new JSONObject();
						item.put(categoryField, escapeHtml(String.valueOf(row[0])));
						item.put(dataField, row[1]);
						returnArray.add(item);
					}
					int sum = 0;
					int count = 0;
					for (; i < data.size(); i++)
					{
						Object[] row = (Object[]) data.get(i);
						sum = (int) (sum + ((Double.parseDouble(row[1].toString()))));
						if (Double.parseDouble(row[1].toString()) != 0)
						{
							count = count + 1;
						}
					}
					if (dataField.equalsIgnoreCase("Percent Out Of Spec"))
					{
						if (count != 0)
						{
							sum = sum / count;
						}
						else
						{
							sum = 0;
						}
					}
					JSONObject item = new JSONObject();
					item.put(categoryField, CategoryField.OTHER.toString().toLowerCase());
					item.put(dataField, sum);
					returnArray.add(item);
				}
				else
				{
					for (int i = 0; i < data.size(); i++)
					{
						Object[] row = (Object[]) data.get(i);
						JSONObject item = new JSONObject();
						item.put(categoryField, row[0]);
						item.put(dataField, row[1]);
						returnArray.add(item);
					}
				}
			}
			else
			{
				JSONObject item = new JSONObject();
				item.put(categoryField, "No Data Found");
				item.put(dataField, 0);
				returnArray.add(item);
			}
			json = returnArray.toString();
		}
		return json;
	}
	//Gauge Charts
	public static String getJSONStringForGaugeChartData(List<Object> data, String dataField, Boolean limitData)
	{
		String json = null;
		if (data != null)
		{
			JSONArray returnArray = new JSONArray();
			if (data.size() != 0)
			{
				if (limitData)
				{
					int i = 0;
					for (; i < Constants.MAX_GROUP_BY && i < data.size(); i++)
					{
						Object[] row = (Object[]) data.get(i);
						JSONObject item = new JSONObject();
						//item.put(categoryField, escapeHtml(String.valueOf(row[0])));
						item.put(dataField, row[1]);
						returnArray.add(item);
					}
					int sum = 0;
					int count = 0;
					for (; i < data.size(); i++)
					{
						Object[] row = (Object[]) data.get(i);
						sum = (int) (sum + ((Double.parseDouble(row[1].toString()))));
						if (Double.parseDouble(row[1].toString()) != 0)
						{
							count = count + 1;
						}
					}
					if (dataField.equalsIgnoreCase("Percent Out Of Spec"))
					{
						if (count != 0)
						{
							sum = sum / count;
						}
						else
						{
							sum = 0;
						}
					}
					JSONObject item = new JSONObject();
					//item.put(categoryField, CategoryField.OTHER.toString().toLowerCase());
					item.put(dataField, sum);
					returnArray.add(item);
				}
				else
				{
					for (int i = 0; i < data.size(); i++)
					{
						Object[] row = (Object[]) data.get(i);
						JSONObject item = new JSONObject();
						//item.put(categoryField, row[0]);
						item.put(dataField, row[1]);
						returnArray.add(item);
					}
				}
			}
			else
			{
				JSONObject item = new JSONObject();
				//item.put(categoryField, "No Data Found");
				item.put(dataField, 0);
				returnArray.add(item);
			}
			json = returnArray.toString();
		}
		return json;
	}
//End
	public static String getJSONStringForScatterChartData(List<Object> data, DatabaseTableFieldsView dataField1,
			DatabaseTableFieldsView dataField2)
	{
		String json = null;
		if (data != null)
		{
			JSONArray returnArray = new JSONArray();
			if (data.size() != 0)
			{
				int i = 0;
				for (; i < data.size(); i++)
				{
					Object[] row = (Object[]) data.get(i);
					JSONObject item = new JSONObject();
					item.put(dataField1.getFieldLabel(), row[0]);
					item.put(dataField2.getFieldLabel(), row[1]);
					returnArray.add(item);
				}
			}
			else
			{
				JSONObject item = new JSONObject();
				item.put(dataField1.getFieldLabel(), 0);
				item.put(dataField2.getFieldLabel(), 0);
				returnArray.add(item);
			}
			json = returnArray.toString();
		}
		return json;
	}

	public static String getJSONStringForBarChartData(List<Object> data, DatabaseTableFieldsView categoryField,
			DatabaseTableFieldsView dataField, int elements)
	{
		String json = null;
		if (data != null)
		{
			JSONArray returnArray = new JSONArray();
			if (data.size() != 0)
			{
				if (categoryField.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.TIME_CATEGORY_FIELD.toString())
						&& categoryField.getFieldName().equalsIgnoreCase(CategoryField.DATE.toString()))
				{
					int i = 0;
					for (; i < elements && i < data.size(); i++)
					{
						Object[] row = (Object[]) data.get(i);
						JSONObject item = new JSONObject();
						item.put(categoryField.getFieldLabel(), row[0]);
						item.put(dataField.getFieldLabel(), row[2]);
						returnArray.add(item);
					}
				}
				else if (categoryField.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.TIME_CATEGORY_FIELD.toString())
						&& !categoryField.getFieldName().equalsIgnoreCase(CategoryField.DATE.toString()))
				{
					int i = 0;
					for (; i < elements && i < data.size(); i++)
					{
						Object[] row = (Object[]) data.get(i);
						JSONObject item = new JSONObject();
						item.put(categoryField.getFieldLabel(), row[0]);
						item.put(dataField.getFieldLabel(), row[1]);
						returnArray.add(item);
					}
				}
				else
				{
					int i = 0;
					for (; i < elements && i < data.size(); i++)
					{
						Object[] row = (Object[]) data.get(i);
						JSONObject item = new JSONObject();
						item.put(categoryField.getFieldLabel(), row[0]);
						item.put(dataField.getFieldLabel(), row[1]);
						returnArray.add(item);
					}
					int sum = 0;
					int count = 0;
					for (; i < data.size(); i++)
					{
						Object[] row = (Object[]) data.get(i);
						sum = (int) (sum + (Double.parseDouble(row[1].toString())));
						if (Double.parseDouble(row[1].toString()) != 0)
						{
							count = count + 1;
						}
					}
					if (dataField.getFieldName().equalsIgnoreCase(DataField.PERCENT_OUT_OF_SPEC.toString()))
					{
						if (count != 0)
						{
							sum = sum / count;
						}
						else
						{
							sum = 0;
						}
					}
					JSONObject item = new JSONObject();
					item.put(categoryField.getFieldLabel(), CategoryField.OTHER.toString().toLowerCase());
					item.put(dataField.getFieldLabel(), sum);
					returnArray.add(item);
				}
			}
			else
			{
				JSONObject item = new JSONObject();
				item.put(categoryField.getFieldLabel(), "No Data Found");
				item.put(dataField.getFieldLabel(), 0);
				returnArray.add(item);
			}
			json = returnArray.toString();
		}
		return json;
	}

	public static String getJSONStringForBarChartDataGroupBy(List<Object> data, DatabaseTableFieldsView categoryField,
			DatabaseTableFieldsView dataField, int elements, String[] columns)
	{
		String json = null;
		String[] columnIds = Utilities.groupByBarArray(columns.length);
		if (data != null)
		{
			JSONArray returnArray = new JSONArray();
			if (data.size() != 0)
			{
				if (categoryField.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.TIME_CATEGORY_FIELD.toString())
						&& categoryField.getFieldName().equalsIgnoreCase(CategoryField.DATE.toString()))
				{
					int i = 0;
					for (; i < elements && i < data.size(); i++)
					{
						Object[] row = (Object[]) data.get(i);
						JSONObject item = new JSONObject();
						item.put(categoryField.getFieldLabel(), row[0]);
						item.put(dataField.getFieldLabel(), row[2]);
						for (int m = 0; m < columnIds.length - 1; m++)
						{
							item.put(columnIds[m], row[m + 3]);
						}
						returnArray.add(item);
					}
				}
				else if (categoryField.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.TIME_CATEGORY_FIELD.toString())
						&& !categoryField.getFieldName().equalsIgnoreCase(CategoryField.DATE.toString()))
				{
					int i = 0;
					for (; i < elements && i < data.size(); i++)
					{
						Object[] row = (Object[]) data.get(i);
						JSONObject item = new JSONObject();
						item.put(categoryField.getFieldLabel(), row[0]);
						item.put(dataField.getFieldLabel(), row[1]);
						for (int m = 0; m < columnIds.length - 1; m++)
						{
							item.put(columnIds[m], row[m + 2]);
						}
						returnArray.add(item);
					}
				}
				else
				{
					int i = 0;
					for (; i < elements && i < data.size(); i++)
					{
						Object[] row = (Object[]) data.get(i);
						JSONObject item = new JSONObject();
						// item.put(xAxis, escapeHtml(String.valueOf(row[0])));
						item.put(categoryField.getFieldLabel(), row[0]);
						item.put("length", row[1]);
						for (int m = 0; m < columnIds.length - 1; m++)
						{
							if (row[m + 2] != null)
							{
								item.put(columnIds[m], row[m + 2]);
							}
							else
							{
								item.put(columnIds[m], 0);
							}
						}
						returnArray.add(item);
					}
				}
			}
			else
			{
				JSONObject item = new JSONObject();
				item.put(categoryField.getFieldLabel(), "No Data Found");
				item.put(dataField.getFieldLabel(), 0);
				returnArray.add(item);
			}
			json = returnArray.toString();
		}
		return json;
	}

	public static String getJSONStringForScatterChartData(List<Object> data, String xAxis, String yAxis, String granularity)
	{
		String json = null;
		int Json_First_Parameter = 0;
		long Json_Second_Parameter = 0;
		if (data != null && data.size() != 0)
		{
			JSONArray returnArray = new JSONArray();
			int i = 0;
			if ((yAxis.equalsIgnoreCase("Process Events") && xAxis.equalsIgnoreCase("Percent Out Of Spec"))
					|| (xAxis.equalsIgnoreCase("Process Events") && yAxis.equalsIgnoreCase("Percent Out Of Spec")))
			{
				for (; i < data.size(); i++)
				{
					Object[] row = (Object[]) data.get(i);
					JSONObject item = new JSONObject();
					item.put("Process Events", row[0]);
					item.put("Percent Out Of Spec", row[1]);
					returnArray.add(item);
				}
				json = returnArray.toString();
			}
			else if ((yAxis.equalsIgnoreCase("DowntimeEvents") && xAxis.equalsIgnoreCase("DowntimeHours"))
					|| (yAxis.equalsIgnoreCase("DowntimeHours") && xAxis.equalsIgnoreCase("DowntimeEvents")))
			{
				if (granularity.equalsIgnoreCase(Granularity.HOURLY.toString()))
				{
					for (; i < data.size(); i++)
					{
						Json_First_Parameter = Json_First_Parameter + 1;
						Integer row = (Integer) data.get(i);
						Json_Second_Parameter = Json_Second_Parameter + row;
					}
				}
				else
				{
					for (; i < data.size(); i++)
					{
						Json_First_Parameter = Json_First_Parameter + 1;
						Integer row = (Integer) data.get(i);
						Json_Second_Parameter = Json_Second_Parameter + row;
					}
				}
				JSONObject item = new JSONObject();
				if (yAxis.equalsIgnoreCase("DowntimeEvents"))
				{
					item.put(yAxis, Json_First_Parameter);
					item.put(xAxis, Json_Second_Parameter);
				}
				else
				{
					item.put(xAxis, Json_First_Parameter);
					item.put(yAxis, Json_Second_Parameter);
				}
				returnArray.add(item);
				json = returnArray.toString();
			}

			else if ((yAxis.equalsIgnoreCase("ProductionCounts") && xAxis.equalsIgnoreCase("DowntimeHours"))
					|| (yAxis.equalsIgnoreCase("DowntimeHours") && xAxis.equalsIgnoreCase("ProductionCounts")))
			{
				for (; i < data.size(); i++)
				{
					Object[] row = (Object[]) data.get(i);
					if (row[0].toString().equalsIgnoreCase("uptime"))
					{
						Json_First_Parameter = Json_First_Parameter + (Integer.parseInt(row[1].toString()));
					}
					else
					{
						Json_Second_Parameter = Json_Second_Parameter + (Integer.parseInt(row[1].toString()));
					}
				}
				JSONObject item = new JSONObject();
				if (yAxis.equalsIgnoreCase("ProductionCounts"))
				{
					item.put(xAxis, Json_First_Parameter);
					item.put(yAxis, Json_Second_Parameter);
				}
				else
				{
					item.put(yAxis, Json_First_Parameter);
					item.put(xAxis, Json_Second_Parameter);
				}
				returnArray.add(item);
				json = returnArray.toString();
			}
			else if ((yAxis.equalsIgnoreCase("UptimeHours") && xAxis.equalsIgnoreCase("DowntimeHours"))
					|| (yAxis.equalsIgnoreCase("DowntimeHours") && xAxis.equalsIgnoreCase("UptimeHours")))
			{
				for (; i < data.size(); i++)
				{
					Object[] row = (Object[]) data.get(i);
					if (row[0].toString().equalsIgnoreCase("uptime"))
					{
						Json_First_Parameter = Json_First_Parameter + (Integer.parseInt(row[1].toString()));
					}
					else
					{
						Json_Second_Parameter = Json_Second_Parameter + (Integer.parseInt(row[1].toString()));
					}
				}
				JSONObject item = new JSONObject();
				if (yAxis.equalsIgnoreCase("UptimeHours"))
				{
					item.put(yAxis, Json_First_Parameter);
					item.put(xAxis, Json_Second_Parameter);
				}
				else
				{
					item.put(xAxis, Json_First_Parameter);
					item.put(yAxis, Json_Second_Parameter);
				}
				returnArray.add(item);
				json = returnArray.toString();
			}
			else if ((yAxis.equalsIgnoreCase("DowntimeEvents") && xAxis.equalsIgnoreCase("ProductionCounts"))
					|| (yAxis.equalsIgnoreCase("ProductionCounts") && xAxis.equalsIgnoreCase("DowntimeEvents")))
			{
				for (; i < data.size(); i++)
				{
					Object[] row = (Object[]) data.get(i);
					if (row[0].toString().equalsIgnoreCase("uptime"))
					{
						Json_First_Parameter = Json_First_Parameter + (Integer.parseInt(row[1].toString()));
					}
					else
					{
						Json_Second_Parameter = Json_Second_Parameter + 1;
					}
				}
				JSONObject item = new JSONObject();
				if (yAxis.equalsIgnoreCase("DowntimeEvents"))
				{
					item.put(xAxis, Json_First_Parameter);
					item.put(yAxis, Json_Second_Parameter);
				}
				else
				{
					item.put(yAxis, Json_First_Parameter);
					item.put(xAxis, Json_Second_Parameter);
				}
				returnArray.add(item);
				json = returnArray.toString();
			}
			else if ((yAxis.equalsIgnoreCase("DowntimeEvents") && xAxis.equalsIgnoreCase("UptimeHours"))
					|| (yAxis.equalsIgnoreCase("UptimeHours") && xAxis.equalsIgnoreCase("DowntimeEvents")))
			{
				for (; i < data.size(); i++)
				{
					Object[] row = (Object[]) data.get(i);
					if (row[0].toString().equalsIgnoreCase("uptime"))
					{
						Json_First_Parameter = Json_First_Parameter + (Integer.parseInt(row[1].toString()));
					}
					else
					{
						Json_Second_Parameter = Json_Second_Parameter + 1;
					}
				}
				JSONObject item = new JSONObject();
				if (yAxis.equalsIgnoreCase("DowntimeEvents"))
				{
					item.put(xAxis, Json_First_Parameter);
					item.put(yAxis, Json_Second_Parameter);
				}
				else
				{
					item.put(yAxis, Json_First_Parameter);
					item.put(xAxis, Json_Second_Parameter);
				}
				returnArray.add(item);
				json = returnArray.toString();
			}
			else if ((yAxis.equalsIgnoreCase("ProductionCounts") && xAxis.equalsIgnoreCase("UptimeHours"))
					|| (yAxis.equalsIgnoreCase("UptimeHours") && xAxis.equalsIgnoreCase("ProductionCounts")))
			{
				for (; i < data.size(); i++)
				{
					Object[] row = (Object[]) data.get(i);
					Json_First_Parameter = Json_First_Parameter + (Integer.parseInt(row[0].toString()));
					Json_Second_Parameter = Json_Second_Parameter + (Integer.parseInt(row[1].toString()));
				}
				JSONObject item = new JSONObject();
				if (yAxis.equalsIgnoreCase("UptimeHours"))
				{
					item.put(yAxis, Json_First_Parameter);
					item.put(xAxis, Json_Second_Parameter);
				}
				else
				{
					item.put(xAxis, Json_First_Parameter);
					item.put(yAxis, Json_Second_Parameter);
				}
				returnArray.add(item);
				json = returnArray.toString();
			}
			else
			{
				for (; i < data.size(); i++)
				{
					Json_First_Parameter = Json_First_Parameter + 1;
					Integer row = (Integer) data.get(i);
					Json_Second_Parameter = Json_Second_Parameter + (row);
				}
				JSONObject item = new JSONObject();
				item.put(yAxis, Json_First_Parameter);
				item.put(xAxis, Json_Second_Parameter);
				returnArray.add(item);
				json = returnArray.toString();
			}
		}
		return json;
	}
}