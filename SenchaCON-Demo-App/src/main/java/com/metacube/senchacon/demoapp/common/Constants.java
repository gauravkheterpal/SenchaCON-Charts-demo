package com.metacube.senchacon.demoapp.common;


public class Constants 
{	
	public static final Integer MAX_GROUP_BY_NONE = 50;
	public static final Integer MAX_GROUP_BY = 4;
	public static final String OTHERS = "others";
	
	public static final String UPLOADED_FILE_PATH = "/home/ec2-user/replay-analytics/uploaded-data-sources/";
	//public static final String UPLOADED_FILE_PATH = "/Users/nikhil/replay/";
	
	/* Time Field Tables */
	public static String DAY_OF_WEEK_TABLE = "day_of_week_table";
	public static String HOUR_TABLE = "hour_table";
	public static String MONTH_TABLE = "month_table";
	public static String WEEK_TABLE = "week_table";
	
	/*IQS */
	public static final String IQS_SUBGROUP_TABLE = "sub_group_table";
	public static final String INFINITY_PERCENT_OUT_OF_SPEC_TABLE = "percent_out_of_spec_table";
	
	public static final Integer USER_SESSION_VALIDITY = 10;
	public static final Integer SQL_STATEMENT_BATCH_SIZE = 250;
	
	public static final String DEFAULT_DATE_FORMAT = "yyyy-MM-dd";
	public static final String DEFAULT_DATE_FORMAT_HOURLY = "yyyy-MM-dd HH:mm:ss";
	public static final String READABLE_DATE_FORMAT = "EEE dd MMM yyyy";
	public static final String READABLE_DATE_FORMAT_HOURLY = "EEE dd MMM yyyy HH:mm:ss";
	public static final String SHORT_DATE_FORMAT = "dd-MMM-yyyy";
	public static final String SHORT_TIME_FORMAT = "HH:mm:ss";
	public static final String HOURLY_START_TIME = "00:00:00";
	
	/* IM Constant Strings */
	public static final String INDEX_IDENTIFIER = "Index";
	public static final String TYPE_IDENTIFIER = "Type";
	public static final String MESSAGE_IDENTIFIER = "Message";
	public static final String DETAILS_IDENTIFIER = "Details";
	public static final String START_DATE_IDENTIFIER = "StartDate";
	public static final String END_DATE_IDENTIFIER = "EndDate";
	public static final String IM_TREND_DATA_IDENTIFIER = "IMTrendData";
	
	public static final String TYPE_1 = "Type-1";
	public static final String TYPE_2 = "Type-2";
	public static final String TYPE_3 = "Type-3";
	public static final String TYPE_4 = "Type-4";
	public static Long TYPE_1_IM_SETTING = new Long(-1);
	public static Double TYPE_2_IM_SETTING = new Double(-1);
	public static Integer TYPE_3_IM_SETTING = -1;
	public static Integer TYPE_4_IM_SETTING = -1;
	public static final String TYPE_3_DATA_DOWN = "Data is trending downward";
	public static final String TYPE_3_DATA_UP = "Data is trending upward";
	public static final String TYPE_1_DATA_DOWN = "Data is Unusually low";
	public static final String TYPE_1_DATA_UP = "Data is Unusually high";
	public static final String TYPE_2_DATA_DOWN = "Data is Outside the low norm";
	public static final String TYPE_2_DATA_UP = "Data is Outside the high norm";
	public static final String TYPE_4_DATA_DOWN = "Data is Drifting Downward";
	public static final String TYPE_4_DATA_UP = "Data is Drifting Upward";
	
	public static final String X_AXIS_IDENTIFIER = "xAxis";
	public static final String Y_AXIS_IDENTIFIER = "yAxis";
	public static final String Y_MAX_IDENTIFIER = "yMax";
	public static final String X_MAX_IDENTIFIER = "xMax";
	
	public static final String TREND_START_INDEX_IDENTIFIER = "trendStartIndex";
	public static final String TREND_END_INDEX_IDENTIFIER = "trendEndIndex";
	public static final String DATA_IDENTIFIER = "data";
	public static final String DATE_ARRAY_INDENTIFIER = "dateArray";
	public static final String DATA_FIELD_IDENTIFIER = "dataField";
	public static final String CATEGORY_FIELD_IDENTIFIER = "categoryField";
	public static final String INTERESTING_MOMENTS_IDENTIFIER = "interestingMoments";
	public static final String DATE_IDENTIFIER = "Date";	
	public static final String RATIO_IDENTIFIER = "Ratio";
}