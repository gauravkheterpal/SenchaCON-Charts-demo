package com.metacube.senchacon.demoapp.common.util;

import static org.apache.commons.lang.StringEscapeUtils.escapeHtml;

import java.util.List;

import net.sf.json.JSONArray;

import com.metacube.senchacon.demoapp.common.Constants;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;

public class Utilities
{

	public static String[] escapeHTMLGroupByBarStrings(String[] groupByBar)
	{
		for (int i = 0; i < groupByBar.length; i++)
		{
			groupByBar[i] = escapeHtml(groupByBar[i]);
		}
		return groupByBar;
	}

	public static void handleInterestingMomentSettingsConstants(Long imType1Setting, Double imType2Setting, Integer imType3Setting,
			Integer imType4Setting)
	{
		if (imType3Setting != null)
		{
			Constants.TYPE_3_IM_SETTING = imType3Setting;
		}
		else
		{
			Constants.TYPE_3_IM_SETTING = -1;
		}
		if (imType4Setting != null)
		{
			Constants.TYPE_4_IM_SETTING = imType4Setting;
		}
		else
		{
			Constants.TYPE_4_IM_SETTING = -1;
		}
		if (imType1Setting != null)
		{
			Constants.TYPE_1_IM_SETTING = imType1Setting;
		}
		else
		{
			Constants.TYPE_1_IM_SETTING = new Long(-1);
		}
		if (imType2Setting != null)
		{
			Constants.TYPE_2_IM_SETTING = imType2Setting;
		}
		else
		{
			Constants.TYPE_2_IM_SETTING = new Double(-1);
		}
	}

	public static String[] groupByBarArray(int length)
	{
		if (length == 0)
		{
			return null;
		}

		else if (length == 1)
		{
			String[] groupByBars = { "groupByBar1", "Others" };
			return groupByBars;
		}
		else if (length == 2)
		{
			String[] groupByBars = { "groupByBar1", "groupByBar2", "Others" };
			return groupByBars;
		}
		else if (length == 3)
		{
			String[] groupByBars = { "groupByBar1", "groupByBar2", "groupByBar3", "Others" };
			return groupByBars;
		}
		else if (length == 4)
		{
			String[] groupByBars = { "groupByBar1", "groupByBar2", "groupByBar3", "groupByBar4", "Others" };
			return groupByBars;
		}
		return null;
	}

	public static Boolean verifyString(String string)
	{
		if (string != null && !string.equalsIgnoreCase("") && !string.equalsIgnoreCase("\"\"") && !string.equalsIgnoreCase("none")
				&& !string.equalsIgnoreCase("undefined") && !string.equalsIgnoreCase("null"))
		{
			return Boolean.TRUE;
		}
		return Boolean.FALSE;
	}

	public static String getFixOrderStringForItemTable(List<Object> data, DatabaseTableFieldsView dataField,
			DatabaseTableFieldsView categoryField)
	{
		String nameField = "";
		String fixOrderString = "";
		String response = ChartDataUtils.getJSONStringForPieChartData(data, dataField.getFieldName(), categoryField.getFieldName(), false);
		JSONArray jsonObject = JSONArray.fromObject(response);
		nameField = "`" + categoryField.getFieldName() + "`";
		try
		{
			fixOrderString = "order by case " + nameField;
			for (int i = 0; i < jsonObject.size(); i++)
			{
				int index = i + 1;
				String temp = null;
				try
				{
					temp = jsonObject.getJSONObject(i).getString(categoryField.getFieldName());
				}
				catch (Exception e)
				{

				}
				if (verifyString(temp))
				{
					fixOrderString = fixOrderString + " when '" + jsonObject.getJSONObject(i).getString(categoryField.getFieldName())
							+ "' then " + index;
				}
			}
			fixOrderString = fixOrderString + " else 99 end";
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		return fixOrderString;
	}
}