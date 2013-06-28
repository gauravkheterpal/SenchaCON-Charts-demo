package com.metacube.senchacon.demoapp.service;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.commons.math3.stat.descriptive.DescriptiveStatistics;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.metacube.senchacon.demoapp.common.Constants;
import com.metacube.senchacon.demoapp.common.enums.ChartType;
import com.metacube.senchacon.demoapp.common.enums.Granularity;
import com.metacube.senchacon.demoapp.common.util.DateUtils;

@Service
public class InterestingMomentsService 
{
	@Autowired
	private GetMaxService getMaxService;
	
	private final static Logger logger = LoggerFactory.getLogger(InterestingMomentsService.class);
	private Long type1UpperLimit[] = null, type1LowerLimit[] = null, type2UpperLimit[] = null, type2LowerLimit[] = null;
	private Long type1UpperLimitGroupBy[][] = null, type1LowerLimitGroupBy[][] = null, type2UpperLimitGroupBy[][] = null, type2LowerLimitGroupBy[][] = null;
	
	public String getInterestingMomentForUnifiedData(String chartType, JSONArray data, String axis, String field, JSONArray dateArray, String granularity, String endDate)
	{
		JSONArray allIMPoints = new JSONArray(), type1IMs = new JSONArray(), type2IMs = new JSONArray(), type3IMs = new JSONArray(), type4IMs = new JSONArray();
		if (Constants.TYPE_1_IM_SETTING != -1 || Constants.TYPE_2_IM_SETTING != -1)
		{
			getType1AndType2LimitsForUnifiedData(data, axis, field, Constants.TYPE_1_IM_SETTING, Constants.TYPE_2_IM_SETTING);
		}		
		/*for ( int i = 0; i < type1LowerLimit.length; i++)
		{
			logger.debug("Type1["+i+"] is==" + type1LowerLimit[i] + "--" + type1UpperLimit[i]);
			logger.debug("Type2["+i+"] is==" + type2LowerLimit[i] + "--" + type2UpperLimit[i]);
		}*/
		if (Constants.TYPE_1_IM_SETTING != -1)
		{
			type1IMs = getType1InterestingMomentForUnifiedData(data, axis, field, dateArray, granularity);
		}
		if (Constants.TYPE_2_IM_SETTING != -1)
		{
			type2IMs = getType2InterestingMomentForUnifiedData(data, axis, field, dateArray, granularity);
		}
		if (Constants.TYPE_3_IM_SETTING != -1 && !chartType.equalsIgnoreCase(ChartType.SCATTER.toString()))
		{
			type3IMs = getType3InterestingMomentForUnifiedData(data, axis, field, Constants.TYPE_3_IM_SETTING, dateArray, granularity, endDate);
		}
		if (Constants.TYPE_4_IM_SETTING != -1 && chartType.equalsIgnoreCase(ChartType.SCATTER.toString()))
		{
			type4IMs = getType4InterestingMomentForUnifiedData(data, axis, field, Constants.TYPE_4_IM_SETTING, dateArray, granularity);
		}
		for (int i = 0; i < type1IMs.size(); i++)
		{
			allIMPoints.add(type1IMs.get(i));
		}
		for (int i = 0; i < type2IMs.size(); i++)
		{
			allIMPoints.add(type2IMs.get(i));
		}
		for (int i = 0; i < type3IMs.size(); i++)
		{
			allIMPoints.add(type3IMs.get(i));
		}
		for (int i = 0; i < type4IMs.size(); i++)
		{
			allIMPoints.add(type4IMs.get(i));
		}
		return allIMPoints.toString();
	}
	
	public String getInterestingMomentForUnifiedData(String chartType, JSONArray data, String axis, String field, JSONArray dateArray, String granularity, String[] groupByBars, String endDate)
	{
		JSONArray allIMPoints = new JSONArray(), type1IMs = new JSONArray(), type2IMs = new JSONArray(), type3IMs = new JSONArray();
		if (Constants.TYPE_1_IM_SETTING != -1 && Constants.TYPE_2_IM_SETTING != -1)
		{
			getType1AndType2LimitsForUnifiedGroupByData(data, axis, field, Constants.TYPE_1_IM_SETTING, Constants.TYPE_2_IM_SETTING, groupByBars);
		}
		/*for ( int i = 0; i < type1LowerLimitGroupBy.length; i++)
		{
			logger.debug("Type1["+i+"] is==" + type1LowerLimitGroupBy[i] + "--" + type1UpperLimitGroupBy[i]);
			logger.debug("Type2["+i+"] is==" + type2LowerLimitGroupBy[i] + "--" + type2UpperLimitGroupBy[i]);
		}*/
		if (Constants.TYPE_1_IM_SETTING != -1)
		{
			type1IMs = getType1InterestingMomentForUnifiedGroupByData(data, axis, field, dateArray, granularity, groupByBars);
		}
		if (Constants.TYPE_2_IM_SETTING != -1)
		{
			type2IMs = getType2InterestingMomentForUnifiedGroupByData(data, axis, field, dateArray, granularity, groupByBars);
		}
		if (Constants.TYPE_3_IM_SETTING != -1)
		{
			type3IMs = getType3InterestingMomentForUnifiedGroupByData(data, axis, field, Constants.TYPE_3_IM_SETTING, dateArray, granularity, groupByBars, endDate);
		}
		for (int i = 0; i < type1IMs.size(); i++)
		{
			allIMPoints.add(type1IMs.get(i));
		}
		for (int i = 0; i < type2IMs.size(); i++)
		{
			allIMPoints.add(type2IMs.get(i));
		}
		for (int i = 0; i < type3IMs.size(); i++)
		{
			allIMPoints.add(type3IMs.get(i));
		}		
		return allIMPoints.toString();
	}
	
	public JSONArray getType1InterestingMomentForUnifiedData(JSONArray data, String axis, String field, JSONArray dateArray, String granularity)
	{
		JSONArray type1IMPoints = new JSONArray();
		try
		{
			int size = data.getJSONObject(0).getJSONArray(Constants.DATA_IDENTIFIER).size();
			Long temp = null;
			for (int i = 0; i < data.size(); i++)
			{
				JSONArray item = data.getJSONObject(i).getJSONArray(Constants.DATA_IDENTIFIER);				
				for (int j = 0; j < size; j++)
				{
					temp = item.getJSONObject(j).getLong(axis);	
					if (temp != 0)
					{
						if (temp < type1LowerLimit[j])
						{
							JSONObject imPoint = new JSONObject();
							imPoint.put(Constants.INDEX_IDENTIFIER, i);
							imPoint.put(Constants.TYPE_IDENTIFIER, Constants.TYPE_1);
							String categoryField = item.getJSONObject(j).getString(field);							
							imPoint.put(Constants.MESSAGE_IDENTIFIER, Constants.TYPE_1_DATA_DOWN);
							imPoint.put(Constants.DETAILS_IDENTIFIER, axis + " of " + categoryField + " is " + temp + ", which is less than Type-1 Mean deviation lower limit " + type1LowerLimit[j] );
							if (granularity != null && granularity.equalsIgnoreCase(Granularity.HOURLY.toString()))
							{
								imPoint.put(Constants.START_DATE_IDENTIFIER, (String) dateArray.get(i));
								imPoint.put(Constants.END_DATE_IDENTIFIER, (String) dateArray.get(i + 1));
							}
							else
							{
								imPoint.put(Constants.START_DATE_IDENTIFIER, DateUtils.convertDateForInterestingMoment((String) dateArray.get(i)));
								imPoint.put(Constants.END_DATE_IDENTIFIER, DateUtils.getEndDateForInterestingMoment((String) dateArray.get(i + 1)));
							}
							imPoint.put(Constants.IM_TREND_DATA_IDENTIFIER, getTrendingGraphDataForUnifiedData(data, dateArray, axis, field, granularity, categoryField, i, i));
							type1IMPoints.add(imPoint);
						}
						else if (temp > type1UpperLimit[j])
						{
							JSONObject imPoint = new JSONObject();
							imPoint.put(Constants.INDEX_IDENTIFIER, i);
							imPoint.put(Constants.TYPE_IDENTIFIER, Constants.TYPE_1);
							String categoryField = item.getJSONObject(j).getString(field);							
							imPoint.put(Constants.MESSAGE_IDENTIFIER, Constants.TYPE_1_DATA_UP);
							imPoint.put(Constants.DETAILS_IDENTIFIER, axis + " of " + categoryField + " is " + temp + ", which is greater than Type-1 Mean deviation upper limit " + type1UpperLimit[j] );
							if (granularity != null && granularity.equalsIgnoreCase(Granularity.HOURLY.toString()))
							{
								imPoint.put(Constants.START_DATE_IDENTIFIER, (String) dateArray.get(i));
								imPoint.put(Constants.END_DATE_IDENTIFIER, (String) dateArray.get(i + 1));
							}
							else
							{
								imPoint.put(Constants.START_DATE_IDENTIFIER, DateUtils.convertDateForInterestingMoment((String) dateArray.get(i)));
								imPoint.put(Constants.END_DATE_IDENTIFIER, DateUtils.getEndDateForInterestingMoment((String) dateArray.get(i + 1)));
							}
							imPoint.put(Constants.IM_TREND_DATA_IDENTIFIER, getTrendingGraphDataForUnifiedData(data, dateArray, axis, field, granularity, categoryField, i, i));
							type1IMPoints.add(imPoint);
						}
					}
				}				
			}			
		} 
		catch(Exception e)
		{
			logger.debug("Exception in interestingMomentsService - getType1IMs" + e);
		}
		return type1IMPoints; 
	}
	
	public JSONArray getType2InterestingMomentForUnifiedData(JSONArray data, String axis, String field, JSONArray dateArray, String granularity)
	{
		JSONArray type2IMPoints = new JSONArray();
		try
		{
			int size = data.getJSONObject(0).getJSONArray(Constants.DATA_IDENTIFIER).size();
			Long temp = null;
			for (int i = 0; i < data.size(); i++)
			{
				JSONArray item = data.getJSONObject(i).getJSONArray(Constants.DATA_IDENTIFIER);				
				for (int j = 0; j < size; j++)
				{
					temp = item.getJSONObject(j).getLong(axis);	
					if (temp != 0)
					{
						if (temp < type2LowerLimit[j])
						{
							JSONObject imPoint = new JSONObject();
							imPoint.put(Constants.INDEX_IDENTIFIER, i);
							imPoint.put(Constants.TYPE_IDENTIFIER, Constants.TYPE_2);
							String categoryField = item.getJSONObject(j).getString(field);							
							imPoint.put(Constants.MESSAGE_IDENTIFIER, Constants.TYPE_2_DATA_DOWN);
							imPoint.put(Constants.DETAILS_IDENTIFIER, axis + " of " + categoryField + " is " + temp + ", which is less than Type-2 Standard deviation lower limit " + type2LowerLimit[j] );
							if (granularity != null && granularity.equalsIgnoreCase(Granularity.HOURLY.toString()))
							{
								imPoint.put(Constants.START_DATE_IDENTIFIER, (String) dateArray.get(i));
								imPoint.put(Constants.END_DATE_IDENTIFIER, (String) dateArray.get(i + 1));
							}
							else
							{
								imPoint.put(Constants.START_DATE_IDENTIFIER, DateUtils.convertDateForInterestingMoment((String) dateArray.get(i)));
								imPoint.put(Constants.END_DATE_IDENTIFIER, DateUtils.getEndDateForInterestingMoment((String) dateArray.get(i + 1)));
							}
							imPoint.put(Constants.IM_TREND_DATA_IDENTIFIER, getTrendingGraphDataForUnifiedData(data, dateArray, axis, field, granularity, categoryField, i, i));
							type2IMPoints.add(imPoint);
						}
						else if (temp > type2UpperLimit[j])
						{
							JSONObject imPoint = new JSONObject();
							imPoint.put(Constants.INDEX_IDENTIFIER, i);
							imPoint.put(Constants.TYPE_IDENTIFIER, Constants.TYPE_2);
							String categoryField = item.getJSONObject(j).getString(field);							
							imPoint.put(Constants.MESSAGE_IDENTIFIER, Constants.TYPE_2_DATA_UP);
							imPoint.put(Constants.DETAILS_IDENTIFIER, axis + " of " + categoryField + " is " + temp + ", which is greater than Type-2 Standard deviation upper limit " + type2UpperLimit[j] );
							if (granularity != null && granularity.equalsIgnoreCase(Granularity.HOURLY.toString()))
							{
								imPoint.put(Constants.START_DATE_IDENTIFIER, (String) dateArray.get(i));
								imPoint.put(Constants.END_DATE_IDENTIFIER, (String) dateArray.get(i + 1));
							}
							else
							{
								imPoint.put(Constants.START_DATE_IDENTIFIER, DateUtils.convertDateForInterestingMoment((String) dateArray.get(i)));
								imPoint.put(Constants.END_DATE_IDENTIFIER, DateUtils.getEndDateForInterestingMoment((String) dateArray.get(i + 1)));
							}
							imPoint.put(Constants.IM_TREND_DATA_IDENTIFIER, getTrendingGraphDataForUnifiedData(data, dateArray, axis, field, granularity, categoryField, i, i));
							type2IMPoints.add(imPoint);
						}
					}
				}				
			}			
		} 
		catch(Exception e)
		{
			logger.debug("Exception in interestingMomentsService - getType2IMs" + e);
		}
		return type2IMPoints; 
	}
	
	public void getType1AndType2LimitsForUnifiedData(JSONArray data, String axis, String field, Long type1Setting, Double type2Setting)
	{
		try
		{
			int size = data.getJSONObject(0).getJSONArray(Constants.DATA_IDENTIFIER).size();
			Object stats[] = new Object[size];
			Double[] dataAvg = new Double[size];
			Double[] dataStdDev = new Double[size];
			Long temp = null;
			for (int i = 0; i < data.size(); i++)
			{
				JSONArray item = data.getJSONObject(i).getJSONArray(Constants.DATA_IDENTIFIER);				
				for (int j = 0; j < item.size(); j++)
				{
					if (i == 0)
					{
						stats[j] = new DescriptiveStatistics();
					}
					temp = item.getJSONObject(j).getLong(axis);	
					if (temp > 0)
					{
						((DescriptiveStatistics)stats[j]).addValue(temp);
					}
				}				
			}
			for (int j = 0; j < size; j++)
			{
				dataAvg[j] = ((DescriptiveStatistics)stats[j]).getMean();
				dataStdDev[j] = ((DescriptiveStatistics)stats[j]).getStandardDeviation();
			}
			type1UpperLimit = new Long[size];
			type1LowerLimit = new Long[size];
			type2UpperLimit = new Long[size];
			type2LowerLimit = new Long[size];
			for (int j = 0; j < size; j++)
			{
				type1LowerLimit[j] = (long) (dataAvg[j] - ((dataAvg[j] * type1Setting)/100));
				type1UpperLimit[j] = (long) (dataAvg[j] + ((dataAvg[j] * type1Setting)/100));
				type2LowerLimit[j] = (long) (dataAvg[j] - (dataStdDev[j] * type2Setting));
				type2UpperLimit[j] = (long) (dataAvg[j] + (dataStdDev[j] * type2Setting));
			}
		} 
		catch(Exception e)
		{
			logger.debug("Exception in interestingMomentsService - getType1AndType2Limits from stats" + e);
		}
	}
	
	public void getType1AndType2LimitsForUnifiedGroupByData(JSONArray data, String axis, String field, Long type1Setting, Double type2Setting, String[] groupByBars)
	{
		try
		{
			int size = data.getJSONObject(0).getJSONArray(Constants.DATA_IDENTIFIER).size();
			int elementSize = groupByBars.length - 1;
			Object stats[][] = new Object[size][elementSize];
			Double[][] dataAvg = new Double[size][elementSize];
			Double[][] dataStdDev = new Double[size][elementSize];
			Long temp = null;
			for (int i = 0; i < data.size(); i++)
			{
				JSONArray item = data.getJSONObject(i).getJSONArray(Constants.DATA_IDENTIFIER);				
				for (int j = 0; j < item.size(); j++)
				{
					for (int k = 0; k < elementSize; k++)
					{
						if (i == 0)
						{
							stats[j][k] = new DescriptiveStatistics();
						}
						temp = item.getJSONObject(j).getLong(groupByBars[k]);	
						if (temp > 0)
						{
							((DescriptiveStatistics)stats[j][k]).addValue(temp);
						}
					}					
				}				
			}
			for (int j = 0; j < size; j++)
			{
				for (int k = 0; k < elementSize; k++)
				{
					dataAvg[j][k] = ((DescriptiveStatistics)stats[j][k]).getMean();
					dataStdDev[j][k] = ((DescriptiveStatistics)stats[j][k]).getStandardDeviation();
				}
				
			}
			type1UpperLimitGroupBy = new Long[size][elementSize];
			type1LowerLimitGroupBy = new Long[size][elementSize];
			type2UpperLimitGroupBy = new Long[size][elementSize];
			type2LowerLimitGroupBy = new Long[size][elementSize];
			for (int j = 0; j < size; j++)
			{
				for (int k = 0; k < elementSize; k++)
				{
					type1LowerLimitGroupBy[j][k] = (long) (dataAvg[j][k] - ((dataAvg[j][k] * type1Setting)/100));
					type1UpperLimitGroupBy[j][k] = (long) (dataAvg[j][k] + ((dataAvg[j][k] * type1Setting)/100));
					type2LowerLimitGroupBy[j][k] = (long) (dataAvg[j][k] - (dataStdDev[j][k] * type2Setting));
					type2UpperLimitGroupBy[j][k] = (long) (dataAvg[j][k] + (dataStdDev[j][k] * type2Setting));
				}				
			}
		} 
		catch(Exception e)
		{
			logger.debug("Exception in interestingMomentsService - getType1AndType2LimitsGroupBy from stats" + e);
		}
	}

	public JSONArray getType3InterestingMomentForUnifiedData(JSONArray data, String axis, String field, int dataTrendCount, JSONArray dateArray, String granularity, String endDate)
	{
		JSONArray interestingMomentPoints = new JSONArray();		
		try
		{	
			int size = data.getJSONObject(0).getJSONArray(Constants.DATA_IDENTIFIER).size();
			int dataPointIncreaseCount[] = new int[size], dataPointDecreaseCount[] = new int[size], trendStartIndex[] = new int[size], previousNonZeroIndex[] = new int[size];
			Long previousNonZeroValue[] = new Long[size], trendingStartData[] = new Long[size], temp = null;
			//int previousImIndex = -1;
			for (int k = 0; k < size; k++)
			{
				dataPointDecreaseCount[k] = 0;
				dataPointDecreaseCount[k] = 0;
				previousNonZeroValue[k] = new Long(0);
			}
			for (int i = 0; i < data.size(); i++)
			{
				JSONArray item = data.getJSONObject(i).getJSONArray(Constants.DATA_IDENTIFIER);				
				for (int j = 0; j < item.size(); j++)
				{
					temp = item.getJSONObject(j).getLong(axis);	
					if (i == 0)
					{											
						previousNonZeroValue[j] = temp;	
						previousNonZeroIndex[j] = i;
						trendStartIndex[j] = i;
					}
					else
					{
						if (temp == 0 || temp == previousNonZeroValue[j])
						{
							//dataPointIncreaseCount[j] = 0;
							//dataPointDecreaseCount[j] = 0;
							//previousNonZeroValue[j] = temp;
							continue;
						}
						if (temp > previousNonZeroValue[j])
						{
							if (dataPointIncreaseCount[j] == 0)
							{
								trendingStartData[j] = previousNonZeroValue[j];
								trendStartIndex[j] = previousNonZeroIndex[j];
							}
							dataPointIncreaseCount[j] += 1;
							dataPointDecreaseCount[j] = 0;
						}
						else if (temp < previousNonZeroValue[j])
						{
							if (dataPointDecreaseCount[j] == 0)
							{
								trendingStartData[j] = previousNonZeroValue[j];
								trendStartIndex[j] = previousNonZeroIndex[j];
							}
							dataPointIncreaseCount[j] = 0;
							dataPointDecreaseCount[j] += 1;
						}
						previousNonZeroValue[j] = temp;
						if (dataPointIncreaseCount[j] == dataTrendCount || dataPointDecreaseCount[j] == dataTrendCount)
						{
							JSONObject imPoint = new JSONObject();
							imPoint.put(Constants.INDEX_IDENTIFIER, i);
							imPoint.put(Constants.TYPE_IDENTIFIER, Constants.TYPE_3);
							String categoryField = item.getJSONObject(j).getString(field);
							if (dataPointIncreaseCount[j] == dataTrendCount)
							{
								imPoint.put(Constants.MESSAGE_IDENTIFIER, Constants.TYPE_3_DATA_UP);
								imPoint.put(Constants.DETAILS_IDENTIFIER, axis + " increased from " + trendingStartData[j] + " to " + temp + " of " + categoryField);
							}
							else if (dataPointDecreaseCount[j] == dataTrendCount)
							{
								imPoint.put(Constants.MESSAGE_IDENTIFIER, Constants.TYPE_3_DATA_DOWN);	
								imPoint.put(Constants.DETAILS_IDENTIFIER, axis + " decreased from " + trendingStartData[j] + " to " + temp + " of " + categoryField);
							}
							if (granularity != null && granularity.equalsIgnoreCase(Granularity.HOURLY.toString()))
							{
								imPoint.put(Constants.START_DATE_IDENTIFIER, (String) dateArray.get(trendStartIndex[j]));
								if (i + 1 >= data.size())
								{
									imPoint.put(Constants.END_DATE_IDENTIFIER, DateUtils.convertDateForInterestingMomentForHourly(endDate));
								} 
								else
								{
									imPoint.put(Constants.END_DATE_IDENTIFIER, (String) dateArray.get(i + 1));
								}								
							}
							else
							{
								imPoint.put(Constants.START_DATE_IDENTIFIER, DateUtils.convertDateForInterestingMoment((String) dateArray.get(trendStartIndex[j])));
								if (i + 1 >= data.size())
								{
									imPoint.put(Constants.END_DATE_IDENTIFIER, DateUtils.convertDateForInterestingMoment(endDate));
								} 
								else
								{
									imPoint.put(Constants.END_DATE_IDENTIFIER, DateUtils.getEndDateForInterestingMoment((String) dateArray.get(i + 1)));
								}								
							}
							imPoint.put(Constants.IM_TREND_DATA_IDENTIFIER, getTrendingGraphDataForUnifiedData(data, dateArray, axis, field, granularity, categoryField, trendStartIndex[j], i));
							dataPointIncreaseCount[j] = 0;
							dataPointDecreaseCount[j] = 0;
							interestingMomentPoints.add(imPoint);
						}
						previousNonZeroIndex[j] = i;
					}					
				}				
			}
		} 
		catch(Exception e)
		{
			logger.debug("Exception in interestingMomentsService " + e);
			return new JSONArray();
		}
		return interestingMomentPoints;
	}
	
	public JSONArray getType3InterestingMomentForUnifiedGroupByData(JSONArray data, String axis, String field, int dataTrendCount, JSONArray dateArray, String granularity, String[] groupByBars, String endDate)
	{
		JSONArray interestingMomentPoints = new JSONArray();		
		try
		{	
			int size = data.getJSONObject(0).getJSONArray(Constants.DATA_IDENTIFIER).size();
			int elementSize = groupByBars.length - 1;
			int dataPointIncreaseCount[][] = new int[size][elementSize], dataPointDecreaseCount[][] = new int[size][elementSize], trendStartIndex[][] = new int[size][elementSize], previousNonZeroIndex[][] = new int[size][elementSize];
			Long previousNonZeroValue[][] = new Long[size][elementSize], trendingStartData[][] = new Long[size][elementSize], temp = null;
			for (int k = 0; k < size; k++)
			{
				for (int l = 0; l < elementSize; l++)
				{
					dataPointDecreaseCount[k][l] = 0;
					dataPointDecreaseCount[k][l] = 0;
					previousNonZeroValue[k][l] = new Long(0);
				}				
			}
			for(int i = 0; i < data.size(); i++)
			{
				JSONArray item = data.getJSONObject(i).getJSONArray(Constants.DATA_IDENTIFIER);				
				for (int j = 0; j < item.size(); j++)
				{
					JSONObject dataRow = item.getJSONObject(j);	
					for (int k = 0; k < elementSize; k++)
					{
						temp = dataRow.getLong(groupByBars[k]);
						if (i == 0)
						{											
							previousNonZeroValue[j][k] = temp;	
							trendingStartData[j][k] = temp;
						}
						else
						{
							if (temp == 0 || temp == previousNonZeroValue[j][k])
							{
								//dataPointIncreaseCount[j][k] = 0;
								//dataPointDecreaseCount[j][k] = 0;
								continue;
							}
							if (temp > previousNonZeroValue[j][k])
							{
								if (dataPointIncreaseCount[j][k] == 0)
								{
									trendingStartData[j][k] = previousNonZeroValue[j][k];
									trendStartIndex[j][k] = previousNonZeroIndex[j][k];
								}
								dataPointIncreaseCount[j][k] += 1;
								dataPointDecreaseCount[j][k] = 0;
							}
							else if (temp < previousNonZeroValue[j][k])
							{
								if (dataPointDecreaseCount[j][k] == 0)
								{
									trendingStartData[j][k] = previousNonZeroValue[j][k];
									trendStartIndex[j][k] = previousNonZeroIndex[j][k];
								}
								dataPointIncreaseCount[j][k] = 0;
								dataPointDecreaseCount[j][k] += 1;
							}
							previousNonZeroValue[j][k] = temp;
							if (dataPointIncreaseCount[j][k] == dataTrendCount || dataPointDecreaseCount[j][k] == dataTrendCount)
							{
								JSONObject imPoint = new JSONObject();
								imPoint.put(Constants.INDEX_IDENTIFIER, i);
								imPoint.put(Constants.TYPE_IDENTIFIER, Constants.TYPE_3);
								String categoryField = item.getJSONObject(j).getString(field);
								if (dataPointIncreaseCount[j][k] == dataTrendCount)
								{
									imPoint.put(Constants.MESSAGE_IDENTIFIER, Constants.TYPE_3_DATA_UP);
									imPoint.put(Constants.DETAILS_IDENTIFIER, axis + " increased from " + trendingStartData[j][k] + " to " + temp + " of " + categoryField + " for " + groupByBars[k]);
								}
								else if (dataPointDecreaseCount[j][k] == dataTrendCount)
								{
									imPoint.put(Constants.MESSAGE_IDENTIFIER, Constants.TYPE_3_DATA_DOWN);	
									imPoint.put(Constants.DETAILS_IDENTIFIER, axis + " decreased from " + trendingStartData[j][k] + " to " + temp + " of " + categoryField + " for " + groupByBars[k]);
								}	
								if (granularity != null && granularity.equalsIgnoreCase(Granularity.HOURLY.toString()))
								{
									imPoint.put(Constants.START_DATE_IDENTIFIER, (String) dateArray.get(trendStartIndex[j][k]));
									if (i + 1 >= data.size())
									{
										imPoint.put(Constants.END_DATE_IDENTIFIER, DateUtils.convertDateForInterestingMomentForHourly(endDate));
									} 
									else
									{
										imPoint.put(Constants.END_DATE_IDENTIFIER, (String) dateArray.get(i + 1));
									}
								}
								else
								{
									imPoint.put(Constants.START_DATE_IDENTIFIER, DateUtils.convertDateForInterestingMoment((String) dateArray.get(trendStartIndex[j][k])));
									if (i + 1 >= data.size())
									{
										imPoint.put(Constants.END_DATE_IDENTIFIER, DateUtils.convertDateForInterestingMoment(endDate));
									} 
									else
									{
										imPoint.put(Constants.END_DATE_IDENTIFIER, DateUtils.getEndDateForInterestingMoment((String) dateArray.get(i + 1)));
									}
								}							
								imPoint.put(Constants.IM_TREND_DATA_IDENTIFIER, getTrendingGraphDataForUnifiedGroupByData(data, dateArray, axis, field, granularity, categoryField, trendStartIndex[j][k], i, groupByBars[k]));
								dataPointIncreaseCount[j][k] = 0;
								dataPointDecreaseCount[j][k] = 0;
								interestingMomentPoints.add(imPoint);
							}
							previousNonZeroIndex[j][k] = i;
						}
					}										
				}				
			}
		} 
		catch(Exception e)
		{
			logger.debug("Exception in interestingMomentsService " + e);
			return new JSONArray();
		}
		return interestingMomentPoints;
	}
	
	public JSONArray getType1InterestingMomentForUnifiedGroupByData(JSONArray data, String axis, String field, JSONArray dateArray, String granularity, String[] groupByBars)
	{
		JSONArray type1IMPoints = new JSONArray();
		int size = data.getJSONObject(0).getJSONArray(Constants.DATA_IDENTIFIER).size();
		int elementSize = groupByBars.length - 1;
		try
		{
			Long temp = null;
			for (int i = 0; i < data.size(); i++)
			{
				JSONArray item = data.getJSONObject(i).getJSONArray(Constants.DATA_IDENTIFIER);				
				for (int j = 0; j < size; j++)
				{
					for (int k = 0; k < elementSize; k++)
					{
						temp = item.getJSONObject(j).getLong(groupByBars[k]);	
						if (temp != 0)
						{
							if (temp < type1LowerLimitGroupBy[j][k])
							{
								JSONObject imPoint = new JSONObject();
								imPoint.put(Constants.INDEX_IDENTIFIER, i);
								imPoint.put(Constants.TYPE_IDENTIFIER, Constants.TYPE_1);
								String categoryField = item.getJSONObject(j).getString(field);							
								imPoint.put(Constants.MESSAGE_IDENTIFIER, Constants.TYPE_3_DATA_DOWN);
								imPoint.put(Constants.DETAILS_IDENTIFIER, axis + " of " + categoryField + " is " + temp + ", which is less than Type-1 Mean deviation lower limit " + type1LowerLimitGroupBy[j][k] + " in " + groupByBars[k]);
								if (granularity != null && granularity.equalsIgnoreCase(Granularity.HOURLY.toString()))
								{
									imPoint.put(Constants.START_DATE_IDENTIFIER, (String) dateArray.get(i));
								}
								else
								{
									imPoint.put(Constants.START_DATE_IDENTIFIER, DateUtils.convertDateForInterestingMoment((String) dateArray.get(i)));
								}
								imPoint.put(Constants.IM_TREND_DATA_IDENTIFIER, getTrendingGraphDataForUnifiedGroupByData(data, dateArray, axis, field, granularity, categoryField, i, i, groupByBars[k]));
								type1IMPoints.add(imPoint);
							}
							else if (temp > type1UpperLimitGroupBy[j][k])
							{
								JSONObject imPoint = new JSONObject();
								imPoint.put(Constants.INDEX_IDENTIFIER, i);
								imPoint.put(Constants.TYPE_IDENTIFIER, Constants.TYPE_1);
								String categoryField = item.getJSONObject(j).getString(field);							
								imPoint.put(Constants.MESSAGE_IDENTIFIER, Constants.TYPE_3_DATA_UP);
								imPoint.put(Constants.DETAILS_IDENTIFIER, axis + " of " + categoryField + " is " + temp + ", which is greater than Type-1 Mean deviation upper limit " + type1UpperLimitGroupBy[j][k] + " in " + groupByBars[k]);
								if (granularity != null && granularity.equalsIgnoreCase(Granularity.HOURLY.toString()))
								{
									imPoint.put(Constants.START_DATE_IDENTIFIER, (String) dateArray.get(i));
								}
								else
								{
									imPoint.put(Constants.START_DATE_IDENTIFIER, DateUtils.convertDateForInterestingMoment((String) dateArray.get(i)));
								}
								imPoint.put(Constants.IM_TREND_DATA_IDENTIFIER, getTrendingGraphDataForUnifiedGroupByData(data, dateArray, axis, field, granularity, categoryField, i, i, groupByBars[k]));
								type1IMPoints.add(imPoint);
							}
						}
					}					
				}				
			}			
		} 
		catch(Exception e)
		{
			logger.debug("Exception in interestingMomentsService - getType1IMsGroupBy" + e);
		}
		return type1IMPoints; 
	}
	
	public JSONArray getType2InterestingMomentForUnifiedGroupByData(JSONArray data, String axis, String field, JSONArray dateArray, String granularity, String[] groupByBars)
	{
		JSONArray type2IMPoints = new JSONArray();
		int size = data.getJSONObject(0).getJSONArray(Constants.DATA_IDENTIFIER).size();
		int elementSize = groupByBars.length - 1;
		try
		{
			Long temp = null;
			for (int i = 0; i < data.size(); i++)
			{
				JSONArray item = data.getJSONObject(i).getJSONArray(Constants.DATA_IDENTIFIER);				
				for (int j = 0; j < size; j++)
				{
					for (int k = 0; k < elementSize; k++)
					{
						temp = item.getJSONObject(j).getLong(groupByBars[k]);
						if (temp != 0)
						{
							if (temp < type2LowerLimitGroupBy[j][k])
							{
								JSONObject imPoint = new JSONObject();
								imPoint.put(Constants.INDEX_IDENTIFIER, i);
								imPoint.put(Constants.TYPE_IDENTIFIER, Constants.TYPE_2);
								String categoryField = item.getJSONObject(j).getString(field);							
								imPoint.put(Constants.MESSAGE_IDENTIFIER, Constants.TYPE_3_DATA_DOWN);
								imPoint.put(Constants.DETAILS_IDENTIFIER, axis + " of " + categoryField + " is " + temp + ", which is less than Type-2 Standard deviation lower limit " + type2LowerLimitGroupBy[j][k] + " in " + groupByBars[k]);
								if (granularity != null && granularity.equalsIgnoreCase(Granularity.HOURLY.toString()))
								{
									imPoint.put(Constants.START_DATE_IDENTIFIER, (String) dateArray.get(i));
								}
								else
								{
									imPoint.put(Constants.START_DATE_IDENTIFIER, DateUtils.convertDateForInterestingMoment((String) dateArray.get(i)));
								}
								imPoint.put(Constants.IM_TREND_DATA_IDENTIFIER, getTrendingGraphDataForUnifiedGroupByData(data, dateArray, axis, field, granularity, categoryField, i, i, groupByBars[k]));
								type2IMPoints.add(imPoint);
							}
							else if (temp > type2UpperLimitGroupBy[j][k])
							{
								JSONObject imPoint = new JSONObject();
								imPoint.put(Constants.INDEX_IDENTIFIER, i);
								imPoint.put(Constants.TYPE_IDENTIFIER, Constants.TYPE_2);
								String categoryField = item.getJSONObject(j).getString(field);							
								imPoint.put(Constants.MESSAGE_IDENTIFIER, Constants.TYPE_3_DATA_UP);
								imPoint.put(Constants.DETAILS_IDENTIFIER, axis + " of " + categoryField + " is " + temp + ", which is greater than Type-2 Standard deviation upper limit " + type2UpperLimitGroupBy[j][k] + " in " + groupByBars[k]);
								if (granularity != null && granularity.equalsIgnoreCase(Granularity.HOURLY.toString()))
								{
									imPoint.put(Constants.START_DATE_IDENTIFIER, (String) dateArray.get(i));
								}
								else
								{
									imPoint.put(Constants.START_DATE_IDENTIFIER, DateUtils.convertDateForInterestingMoment((String) dateArray.get(i)));
								}
								imPoint.put(Constants.IM_TREND_DATA_IDENTIFIER, getTrendingGraphDataForUnifiedGroupByData(data, dateArray, axis, field, granularity, categoryField, i, i, groupByBars[k]));
								type2IMPoints.add(imPoint);
							}
						}
					}
				}				
			}			
		} 
		catch(Exception e)
		{
			logger.debug("Exception in interestingMomentsService - getType2IMsGroupBy" + e);
		}
		return type2IMPoints; 
	}
	
	public String getTrendingGraphDataForUnifiedData(JSONArray data, JSONArray dateArray, String axis, String field, String granularity, String categoryField, int trendStartIndex, int trendEndIndex)
	{
		JSONArray imTrendData = new JSONArray();
		try 
		{
			int length = dateArray.size();
			for (int i = 0; i < length; i++)
			{
				JSONArray item = data.getJSONObject(i).getJSONArray(Constants.DATA_IDENTIFIER);				
				for (int j = 0; j < item.size(); j++)
				{
					String temp = item.getJSONObject(j).getString(field);
					if (temp.equalsIgnoreCase(categoryField))
					{
						JSONObject obj = new JSONObject();
						String date = (String) dateArray.get(i);
						if (granularity.equalsIgnoreCase(Granularity.HOURLY.toString()))
						{
							date = DateUtils.convertDateForInterestingTrendForHourly(date);
						}
						else 
						{
							date = DateUtils.convertDateForInterestingTrend(date);
						}
						obj.put(Constants.DATE_IDENTIFIER, date);
						obj.put(axis, item.getJSONObject(j).getLong(axis));
						imTrendData.add(obj);
						continue;
					}
				}
			}
		} 
		catch (Exception e) 
		{
			logger.debug("Exception in interestingMomentsService - getTrendingGraphDataForType3Type4ForUnifiedData" + e);
		}		
		JSONObject imTrend = new JSONObject();
		imTrend.put(Constants.X_AXIS_IDENTIFIER, Constants.DATE_IDENTIFIER);
		imTrend.put(Constants.Y_AXIS_IDENTIFIER, axis);
		imTrend.put(Constants.TREND_START_INDEX_IDENTIFIER, trendStartIndex);
		imTrend.put(Constants.TREND_END_INDEX_IDENTIFIER, trendEndIndex);
		imTrend.put(Constants.Y_MAX_IDENTIFIER, getMaxService.getMaxForTrendingDataJSON(imTrendData, axis));
		imTrend.put(Constants.DATA_IDENTIFIER, imTrendData);
		return imTrend.toString();
	}
	
	public String getTrendingGraphDataForUnifiedGroupByData(JSONArray data, JSONArray dateArray, String axis, String field, String granularity, String categoryField, int trendStartIndex, int trendEndIndex, String groupByBar)
	{
		JSONArray imTrendData = new JSONArray();
		try 
		{
			int length = dateArray.size();
			for (int i = 0; i < length; i++)
			{
				JSONArray item = data.getJSONObject(i).getJSONArray(Constants.DATA_IDENTIFIER);				
				for (int j = 0; j < item.size(); j++)
				{
					String temp = item.getJSONObject(j).getString(field);
					if (temp.equalsIgnoreCase(categoryField))
					{
						JSONObject obj = new JSONObject();
						String date = (String) dateArray.get(i);
						if (granularity.equalsIgnoreCase(Granularity.HOURLY.toString()))
						{
							date = DateUtils.convertDateForInterestingTrendForHourly(date);
						}
						else 
						{
							date = DateUtils.convertDateForInterestingTrend(date);
						}
						obj.put(Constants.DATE_IDENTIFIER, date);
						obj.put(axis, item.getJSONObject(j).getLong(groupByBar));
						imTrendData.add(obj);
						continue;
					}
				}
			}
		} 
		catch (Exception e) 
		{
			logger.debug("Exception in interestingMomentsService - getTrendingGraphDataForType3Type4ForUnifiedGroupByData" + e);
		}		
		JSONObject imTrend = new JSONObject();
		imTrend.put(Constants.X_AXIS_IDENTIFIER, Constants.DATE_IDENTIFIER);
		imTrend.put(Constants.Y_AXIS_IDENTIFIER, axis);
		imTrend.put(Constants.TREND_START_INDEX_IDENTIFIER, trendStartIndex);
		imTrend.put(Constants.TREND_END_INDEX_IDENTIFIER, trendEndIndex);
		imTrend.put(Constants.Y_MAX_IDENTIFIER, getMaxService.getMaxForTrendingDataJSON(imTrendData, axis));
		imTrend.put(Constants.DATA_IDENTIFIER, imTrendData);
		return imTrend.toString();
	}
	
	public JSONArray getType4InterestingMomentForUnifiedData(JSONArray data, String xAxis, String yAxis, int dataTrendCount, JSONArray dateArray, String granularity)
	{
		JSONArray interestingMomentPoints = new JSONArray();		
		try
		{	
			int size = data.getJSONObject(0).getJSONArray(Constants.DATA_IDENTIFIER).size();
			int dataPointIncreaseCount[] = new int[size], dataPointDecreaseCount[] = new int[size], trendStartIndex[] = new int[size];
			Long x = null, y = null;
			Double ratio = null, previousNonZeroValue[] = new Double[size], trendingStartData[] = new Double[size];
			for (int k = 0; k < size; k++)
			{
				dataPointDecreaseCount[k] = 0;
				dataPointDecreaseCount[k] = 0;
				previousNonZeroValue[k] = new Double(0);
			}
			for (int i = 0; i < data.size(); i++)
			{
				JSONArray item = data.getJSONObject(i).getJSONArray(Constants.DATA_IDENTIFIER);				
				for (int j = 0; j < item.size(); j++)
				{
					ratio = new Double(0);
					x = item.getJSONObject(j).getLong(xAxis);	
					y = item.getJSONObject(j).getLong(yAxis);
					if (x != 0 && y != 0)
					{
						//ratio = (double) (x/y);
						ratio = (double) (y/x);
					}					
					if (i == 0)
					{											
						previousNonZeroValue[j] = ratio;	
						trendStartIndex[j] = i;
					}
					else
					{
						if (ratio == 0 || ratio == previousNonZeroValue[j])
						{
							dataPointIncreaseCount[j] = 0;
							dataPointDecreaseCount[j] = 0;
							continue;
						}
						if (ratio > previousNonZeroValue[j])
						{
							if (dataPointIncreaseCount[j] == 0)
							{
								trendingStartData[j] = previousNonZeroValue[j];
								trendStartIndex[j] = i;
							}
							dataPointIncreaseCount[j] += 1;
							dataPointDecreaseCount[j] = 0;
						}
						else if (ratio < previousNonZeroValue[j])
						{
							if (dataPointDecreaseCount[j] == 0)
							{
								trendingStartData[j] = ratio;
								trendStartIndex[j] = i;
							}
							dataPointIncreaseCount[j] = 0;
							dataPointDecreaseCount[j] += 1;
						}
						previousNonZeroValue[j] = ratio;
						if (dataPointIncreaseCount[j] == dataTrendCount || dataPointDecreaseCount[j] == dataTrendCount)
						{
							JSONObject imPoint = new JSONObject();
							imPoint.put(Constants.INDEX_IDENTIFIER, i);
							imPoint.put(Constants.TYPE_IDENTIFIER, Constants.TYPE_4);
							if (dataPointIncreaseCount[j] == dataTrendCount)
							{
								imPoint.put(Constants.MESSAGE_IDENTIFIER, Constants.TYPE_4_DATA_UP);
								imPoint.put(Constants.DETAILS_IDENTIFIER, xAxis + "/" + yAxis + " ratio increased from " + trendingStartData[j] + " to " + ratio);
							}
							else if (dataPointDecreaseCount[j] == dataTrendCount)
							{
								imPoint.put(Constants.MESSAGE_IDENTIFIER, Constants.TYPE_4_DATA_DOWN);	
								imPoint.put(Constants.DETAILS_IDENTIFIER, xAxis + "/" + yAxis + " ratio decreased from " + trendingStartData[j] + " to " + ratio);
							}	
							if (granularity != null && granularity.equalsIgnoreCase(Granularity.HOURLY.toString()))
							{
								imPoint.put(Constants.START_DATE_IDENTIFIER, (String) dateArray.get(i - dataTrendCount));
								if ((i + 1) != data.size())
								{
									imPoint.put(Constants.END_DATE_IDENTIFIER, (String) dateArray.get(i + 1));
								}	
							}
							else
							{
								imPoint.put(Constants.START_DATE_IDENTIFIER, DateUtils.convertDateForInterestingMoment((String) dateArray.get(i - dataTrendCount)));
								if ((i + 1) != data.size())
								{
									imPoint.put(Constants.END_DATE_IDENTIFIER, DateUtils.getEndDateForInterestingMoment((String) dateArray.get(i + 1)));
								}
							}
							imPoint.put(Constants.IM_TREND_DATA_IDENTIFIER, getTrendingGraphDataForType4ForUnifiedData(data, dateArray, xAxis, yAxis, granularity, yAxis, trendStartIndex[j] - 1, i));
							dataPointIncreaseCount[j] = 0;
							dataPointDecreaseCount[j] = 0;
							interestingMomentPoints.add(imPoint);
						}
					}					
				}				
			}
		} 
		catch(Exception e)
		{
			logger.debug("Exception in interestingMomentsService getType4IMs " + e);
			return new JSONArray();
		}
		return interestingMomentPoints;
	}
	
	public String getTrendingGraphDataForType4ForUnifiedData(JSONArray data, JSONArray dateArray, String axis, String field, String granularity, String categoryField, int trendStartIndex, int trendEndIndex)
	{
		JSONArray imTrendData = new JSONArray();
		try 
		{
			int length = dateArray.size();
			for (int i = 0; i < length; i++)
			{
				JSONArray item = data.getJSONObject(i).getJSONArray(Constants.DATA_IDENTIFIER);				
				for (int j = 0; j < item.size(); j++)
				{
					Long x = item.getJSONObject(j).getLong(axis);
					Long y = item.getJSONObject(j).getLong(field);
					JSONObject obj = new JSONObject();
					String date = (String) dateArray.get(i);
					if (granularity.equalsIgnoreCase(Granularity.HOURLY.toString()))
					{
						date = DateUtils.convertDateForInterestingTrendForHourly(date);
					}
					else 
					{
						date = DateUtils.convertDateForInterestingTrend(date);
					}
					obj.put(Constants.DATE_IDENTIFIER, date);
					obj.put(Constants.RATIO_IDENTIFIER, y/x);
					imTrendData.add(obj);
					continue;
				}
			}
		} 
		catch (Exception e) 
		{
			logger.debug("Exception in interestingMomentsService - getTrendingGraphDataForType3Type4ForUnifiedData" + e);
		}		
		JSONObject imTrend = new JSONObject();
		imTrend.put(Constants.X_AXIS_IDENTIFIER, Constants.DATE_IDENTIFIER);
		imTrend.put(Constants.Y_AXIS_IDENTIFIER, Constants.RATIO_IDENTIFIER);
		imTrend.put(Constants.TREND_START_INDEX_IDENTIFIER, trendStartIndex);
		imTrend.put(Constants.TREND_END_INDEX_IDENTIFIER, trendEndIndex);
		imTrend.put(Constants.Y_MAX_IDENTIFIER, getMaxService.getMaxForTrendingDataJSON(imTrendData, Constants.RATIO_IDENTIFIER));
		imTrend.put(Constants.DATA_IDENTIFIER, imTrendData);
		return imTrend.toString();
	}
}