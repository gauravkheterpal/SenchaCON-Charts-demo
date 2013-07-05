package com.metacube.senchacon.demoapp.common.util;

import com.metacube.senchacon.demoapp.common.Constants;
import com.metacube.senchacon.demoapp.common.enums.CategoryField;
import com.metacube.senchacon.demoapp.common.enums.DatabaseFieldTypes;
import com.metacube.senchacon.demoapp.common.enums.Granularity;
import com.metacube.senchacon.demoapp.common.enums.TempTableType;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;

public class DAOUtils
{

	public static String getTimeWhereClause(DatabaseTableFieldsView timeField, String granularity, String startDate, String endDate,
			String filterString)
	{
		String whereClause = null;
		String timeAppend = Constants.HOURLY_START_TIME;
		if (granularity != null)
		{
			String timeFieldName = timeField.getFieldName();
			if (granularity.equalsIgnoreCase(Granularity.HOURLY.toString()))
			{
				whereClause = timeFieldName + " >= '" + startDate + "' and " + timeFieldName + " <= '" + endDate + "'";
			}
			else
			{
				whereClause = timeFieldName + " >= '" + startDate + " " + timeAppend + "' and " + timeFieldName + " <= '" + endDate + " "
						+ timeAppend + "'";
			}

		}
		if (Utilities.verifyString(filterString))
		{
			whereClause = whereClause + " AND " + filterString;
		}
		return whereClause;
	}

	public static String getOuterSelectClauseForField(DatabaseTableFieldsView dataField, DatabaseTableFieldsView categoryField,
			DatabaseTableFieldsView groupByField, DatabaseTableFieldsView timeField)
	{
		String outerSelectClause = null;
		String outerSelectDataField = "sum(value)";
		String datePart = "";
		if (categoryField.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.TIME_CATEGORY_FIELD.toString())
				&& categoryField.getFieldName().equalsIgnoreCase(CategoryField.DATE.toString()))
		{
			datePart = ", " + timeField.getFieldSelection();
		}
		if (groupByField == null)
		{
			outerSelectClause = "`" + categoryField.getFieldName() + "`" + datePart + ", " + outerSelectDataField + " as `"
					+ dataField.getFieldName() + "`";
		}
		else
		{
			outerSelectClause = "`" + categoryField.getFieldName() + "`" + datePart + ", " + outerSelectDataField + " as length";
		}
		return outerSelectClause;
	}

	public static String getInnerSelectClauseForField(DatabaseTableFieldsView dataField, DatabaseTableFieldsView categoryField,
			DatabaseTableFieldsView timeField)
	{
		String innerSelectClause = null;
		String innerSelectClauseDatePart = "";
		String categoryAppend = "";
		if (categoryField.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.TIME_CATEGORY_FIELD.toString())
				&& categoryField.getFieldName().equalsIgnoreCase(CategoryField.DATE.toString()))
		{
			innerSelectClauseDatePart = ", " + categoryField.getFieldCalculation() + " as '" + timeField.getFieldName() + "'";
		}
		/* Hard-coded Code */
		if (dataField.getFieldName().equalsIgnoreCase("data_4"))
		{
			dataField.setFieldSelection("count(`" + categoryField.getFieldName() + "`)");
			if (categoryField.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.TIME_CATEGORY_FIELD.toString()))
			{
				dataField.setFieldSelection("count(`" + timeField.getFieldSelection() + "`)");
			}
		}

		if (categoryField.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.CATEGORY_FIELD.toString()))
		{
			categoryAppend = "`";
		}

		innerSelectClause = categoryAppend + categoryField.getFieldSelection() + categoryAppend + " as '" + categoryField.getFieldName()
				+ "'" + innerSelectClauseDatePart + ", " + dataField.getFieldSelection();

		return innerSelectClause;
	}

	public static String getWhereClauseForField(DatabaseTableFieldsView dataField, String innerWhereClause,
			DatabaseTableFieldsView groupByField, String groupByBarValue)
	{
		String whereClause = null, calculationPart = "";
		if (Utilities.verifyString(dataField.getFieldCalculation()))
		{
			calculationPart =  " and " + dataField.getFieldCalculation();
		}
		whereClause = innerWhereClause + " and `" + groupByField.getFieldName() + "` = '" + groupByBarValue + "'" + calculationPart;
		return whereClause;
	}

	public static String getWhereClauseForField(DatabaseTableFieldsView dataField, String innerWhereClause)
	{
		String whereClause = null, calculationPart = "";
		if (Utilities.verifyString(dataField.getFieldCalculation()))
		{
			calculationPart =  " and " + dataField.getFieldCalculation();
		}
		whereClause = innerWhereClause + calculationPart;
		return whereClause;
	}

	public static String getWhereClauseForField(DatabaseTableFieldsView dataField, String innerWhereClause, String groupByBarOtherString)
	{
		String whereClause = null, calculationPart = "";
		if (Utilities.verifyString(dataField.getFieldCalculation()))
		{
			calculationPart =  " and " + dataField.getFieldCalculation();
		}
		whereClause = innerWhereClause + groupByBarOtherString + calculationPart;
		return whereClause;
	}

	public static String getGroupClause(DatabaseTableFieldsView dataField, DatabaseTableFieldsView categoryField,
			DatabaseTableFieldsView timeField)
	{
		String groupClause = null;
		String groupClauseDatePart = "";
		if (categoryField.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.TIME_CATEGORY_FIELD.toString())
				&& categoryField.getFieldName().equalsIgnoreCase(CategoryField.DATE.toString()))
		{
			groupClauseDatePart = ", " + timeField.getFieldSelection();
		}
		groupClause = " `" + categoryField.getFieldName() + "`" + groupClauseDatePart;
		return groupClause;
	}

	public static String getQueryStringForGroupBy(DatabaseTableView database, DatabaseTableFieldsView timeField, String startDate,
			String endDate, DatabaseTableFieldsView dataField, DatabaseTableFieldsView categoryField, DatabaseTableFieldsView groupByField,
			String[] groupByBarValues, String fixOrderString, String granularity, String absStartDate, String absEndDate,
			String filterString, TempTableType tableType, String groupByBarOtherString, Integer groupByBarValueIndex)
	{
		String tempTableName = null, queryString = null, outerSelectClause = null, innerSelectClause = null, whereClause = null, groupClause = null;
		String tableName = database.getTableName();
		String unionSelectInnerQuery = "select * from item union";
		if (Utilities.verifyString(filterString))
		{
			unionSelectInnerQuery = "";
		}
		if (tableType.equals(TempTableType.TEMP))
		{
			tempTableName = TempTableType.TEMP.toString().toLowerCase();
		}
		else if (tableType.equals(TempTableType.TEST))
		{
			tempTableName = TempTableType.TEST.toString().toLowerCase();
		}
		outerSelectClause = getOuterSelectClauseForField(dataField, categoryField, groupByField, timeField);
		innerSelectClause = getInnerSelectClauseForField(dataField, categoryField, timeField);
		if (groupByBarOtherString == null && groupByBarValueIndex == null)
		{
			whereClause = getWhereClauseForField(dataField, getTimeWhereClause(timeField, granularity, startDate, endDate, filterString));
		}
		else if (groupByBarOtherString == null && groupByBarValueIndex != null)
		{
			whereClause = getWhereClauseForField(dataField, getTimeWhereClause(timeField, granularity, startDate, endDate, filterString),
					groupByField, groupByBarValues[groupByBarValueIndex]);
		}
		else if (groupByBarOtherString != null && groupByBarValueIndex == null)
		{
			whereClause = getWhereClauseForField(dataField, getTimeWhereClause(timeField, granularity, startDate, endDate, filterString),
					groupByBarOtherString);
		}
		groupClause = getGroupClause(dataField, categoryField, timeField);
		queryString = "CREATE TEMPORARY TABLE " + tempTableName + " select " + outerSelectClause + " from (" + unionSelectInnerQuery
				+ " select " + innerSelectClause + " as value from " + tableName + " where " + whereClause + " group by " + groupClause
				+ ") as t group by " + groupClause + " " + fixOrderString;
		return queryString;
	}

	public static String getQueryStringForGroupByNone(DatabaseTableView database, DatabaseTableFieldsView timeField, String startDate,
			String endDate, DatabaseTableFieldsView dataField, DatabaseTableFieldsView categoryField, String fixOrderString,
			String granularity, String absStartDate, String absEndDate, String filterString)
	{
		String tableName = database.getTableName();
		String queryString = null;
		String unionSelectInnerQuery = "select * from item union";
		if (Utilities.verifyString(filterString))
		{
			unionSelectInnerQuery = "";
		}
		String outerSelectClause = getOuterSelectClauseForField(dataField, categoryField, null, timeField);
		String innerSelectClause = getInnerSelectClauseForField(dataField, categoryField, timeField);
		String whereClause = getWhereClauseForField(dataField,
				DAOUtils.getTimeWhereClause(timeField, granularity, startDate, endDate, filterString));
		String groupClause = getGroupClause(dataField, categoryField, timeField);
		queryString = "select " + outerSelectClause + " from (" + unionSelectInnerQuery + " select " + innerSelectClause
				+ " as value from " + tableName + " where " + whereClause + " group by " + groupClause + ") as t group by " + groupClause
				+ " " + fixOrderString;
		return queryString;
	}
}