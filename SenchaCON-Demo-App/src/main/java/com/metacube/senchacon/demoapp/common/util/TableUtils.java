package com.metacube.senchacon.demoapp.common.util;

import com.metacube.senchacon.demoapp.common.Constants;
import com.metacube.senchacon.demoapp.common.enums.CategoryField;

public class TableUtils
{
	public static String getTableNameForCategoryField(String categoryField)
	{
		String categoryTable = "";

		if (categoryField.equalsIgnoreCase(CategoryField.DAY_OF_WEEK.toString()))
		{
			categoryTable = Constants.DAY_OF_WEEK_TABLE;
		}
		else if (categoryField.equalsIgnoreCase(CategoryField.HOUR.toString()))
		{
			categoryTable = Constants.HOUR_TABLE;
		}
		else if (categoryField.equalsIgnoreCase(CategoryField.MONTH.toString()))
		{
			categoryTable = Constants.MONTH_TABLE;
		}
		else if (categoryField.equalsIgnoreCase(CategoryField.WEEK.toString()))
		{
			categoryTable = Constants.WEEK_TABLE;
		}
		return categoryTable;
	}

	public static String getCategoryAliasForCategoryField(String categoryField, String databaseName)
	{
		String categoryAlias = "";
		if (categoryField.equalsIgnoreCase("Date"))
		{
			categoryAlias = "CONCAT(MONTH(`Event Time`), '/',DAYOFMONTH(`Event Time`))";
		}
		else if (categoryField.equalsIgnoreCase("Week"))
		{
			categoryAlias = "CONCAT('Week ', WEEK(`Event Time`, 5) - WEEK(DATE_SUB(`Event Time`, INTERVAL DAYOFMONTH(`Event Time`) - 1 DAY), 5) + 1)";
		}
		else if (categoryField.equalsIgnoreCase("Month"))
		{
			categoryAlias = "monthname(`Event Time`)";
		}
		else if (categoryField.equalsIgnoreCase("DayOfWeek"))
		{
			categoryAlias = "dayname(`Event Time`)";
		}
		else if (categoryField.equalsIgnoreCase("Hour"))
		{
			categoryAlias = "LOWER(TIME_FORMAT(`Event Time`,'%l%p'))";
		}
		else
		{
			categoryAlias = "`" + categoryField + "`";
		}
		return categoryAlias;
	}
}