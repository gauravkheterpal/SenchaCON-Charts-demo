package com.metacube.senchacon.demoapp.common.util;

import com.metacube.senchacon.demoapp.common.enums.FilterType;

public class FilterUtils
{
	public static String INFORMANCE_USER_FILTER_STRING = "InformanceUser";
	public static String INFORMANCE_REASON_FILTER_STRING = "reason";
	public static String INFORMANCE_SKU_FILTER_STRING = "InformancePart";
	public static String INFORMANCE_SET_FILTER_STRING = "set";
	
	public static String INFINITY_QS_USER_FILTER_STRING = "InfinityQSUser";
	public static String INFINITY_QS_PART_FILTER_STRING = "InfinityQSPart";
	public static String INFINITY_QS_TEST_FILTER_STRING = "Test";
	public static String INFINITY_QS_PROCESS_FILTER_STRING = "Process";
	public static String INFINITY_QS_QPM_FILTER_STRING = "Name";
	
	public static String getFilterIdentifierForJSON(String filterType)
	{
		if (filterType.equalsIgnoreCase(FilterType.INFORMANCE_USER_FILTER.toString()))
		{
			return INFORMANCE_USER_FILTER_STRING;
		}
		else if (filterType.equalsIgnoreCase(FilterType.INFORMANCE_REASON_FILTER.toString()))
		{
			return INFORMANCE_REASON_FILTER_STRING;
		}
		else if (filterType.equalsIgnoreCase(FilterType.INFORMANCE_SET_FILTER.toString()))
		{
			return INFORMANCE_SET_FILTER_STRING;
		}
		else if (filterType.equalsIgnoreCase(FilterType.INFORMANCE_PART_FILTER.toString()))
		{
			return INFORMANCE_SKU_FILTER_STRING;
		}	
		else if (filterType.equalsIgnoreCase(FilterType.INFINITY_QS_USER_FILTER.toString()))
		{
			return INFINITY_QS_USER_FILTER_STRING;
		}
		else if (filterType.equalsIgnoreCase(FilterType.INFINITY_QS_PART_FILTER.toString()))
		{
			return INFINITY_QS_PART_FILTER_STRING;
		}
		else if (filterType.equalsIgnoreCase(FilterType.INFINITY_QS_TEST_FILTER.toString()))
		{
			return INFINITY_QS_TEST_FILTER_STRING;
		}
		else if (filterType.equalsIgnoreCase(FilterType.INFINITY_QS_PROCESS_FILTER.toString()))
		{
			return INFINITY_QS_PROCESS_FILTER_STRING;
		}
		else if (filterType.equalsIgnoreCase(FilterType.INFINITY_QS_QPM_FILTER.toString()))
		{
			return INFINITY_QS_QPM_FILTER_STRING;
		}
		return "";
	}
	
	public static String getFilterTypeForIdentifier(String filterIdentifier)
	{
		return "";
	}
}
