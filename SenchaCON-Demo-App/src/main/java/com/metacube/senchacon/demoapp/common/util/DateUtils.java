package com.metacube.senchacon.demoapp.common.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.joda.time.Days;
import org.joda.time.Instant;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.metacube.senchacon.demoapp.common.Constants;

public class DateUtils
{
	private final static Logger logger = LoggerFactory.getLogger(DateUtils.class);
	
	public static String getDateTimeStringForAppending()
	{
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddhhmmss");
		return sdf.format(date);
	}
	
	public static String DateIncrement(String startDate, int i)
	{
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Calendar c = Calendar.getInstance();
		try
		{
			c.setTime(sdf.parse(startDate));
		}
		catch (ParseException e)
		{
			e.printStackTrace();
		}
		c.add(Calendar.DATE, 1); // number of days to add
		return (sdf.format(c.getTime()));
	}

	public static String WeekIncrement(String startDate, int mod)
	{

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Calendar c = Calendar.getInstance();
		try
		{
			c.setTime(sdf.parse(startDate));
		}
		catch (ParseException e)
		{
			e.printStackTrace();
		}

		if (mod == 0)
			c.add(Calendar.DATE, 7);
		else
			c.add(Calendar.DATE, mod);
		return (sdf.format(c.getTime()));

	}

	public static String HourIncrease(String startDate)
	{
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Calendar c = Calendar.getInstance();
		try
		{
			c.setTime(sdf.parse(startDate));

		}
		catch (ParseException e)
		{
			e.printStackTrace();
		}
		c.add(Calendar.HOUR, 1);
		sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		return (sdf.format(c.getTime()));

	}

	public static String MonthIncrease(String startDate)
	{
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Calendar c = Calendar.getInstance();
		try
		{
			c.setTime(sdf.parse(startDate));

		}
		catch (ParseException e)
		{
			e.printStackTrace();
		}
		c.add(Calendar.MONTH, 1);
		c.set(Calendar.DAY_OF_MONTH, 1);// number of month to add
		return (sdf.format(c.getTime()));

	}

	public static String DateinTimeFormat(String date)
	{
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdf1 = new SimpleDateFormat("HH:MM:ss");
		try
		{
			String dateInFormat = sdf1.format(sdf.parse(date));
			return dateInFormat;
		}
		catch (ParseException e)
		{
			e.printStackTrace();
		}
		return null;
	}

	public static String convertDateToReadableFormat(Date date)
	{
		return new SimpleDateFormat(Constants.READABLE_DATE_FORMAT_HOURLY).format(date);
	}

	private static String convertDateToFormat(String date, String oldFormat, String newFormat)
	{
		String newDate = null;
		try
		{
			Date dateObj = new SimpleDateFormat(oldFormat).parse(date);
			newDate = new SimpleDateFormat(newFormat).format(dateObj);
		}
		catch (ParseException e)
		{
			logger.debug("Exception in parsing date");
		}
		return newDate;
	}

	private static String getPreviousDate(String date, String format)
	{
		String newDate = null;
		try
		{
			Date dateObj = new SimpleDateFormat(format).parse(date);
			Calendar calendar = Calendar.getInstance();
			calendar.setTime(dateObj);
			calendar.add(Calendar.DAY_OF_YEAR, -1);
			dateObj = calendar.getTime();
			newDate = new SimpleDateFormat(format).format(dateObj);
		}
		catch (ParseException e)
		{
			logger.debug("Exception in getting previous date");
		}
		return newDate;
	}

	public static String getNextDateForDateArray(String date, String format, Integer difference)
	{
		String newDate = null;
		try
		{
			Date dateObj = new SimpleDateFormat(format).parse(date);
			Calendar calendar = Calendar.getInstance();
			calendar.setTime(dateObj);
			calendar.add(Calendar.DATE, difference);
			dateObj = calendar.getTime();
			newDate = new SimpleDateFormat(format).format(dateObj);
		}
		catch (ParseException e)
		{
			logger.debug("Exception in getting previous date");
		}
		return newDate;
	}

	private static String getNextHour(String date, String format)
	{
		String newDate = null;
		try
		{
			Date dateObj = new SimpleDateFormat(format).parse(date);
			Calendar calendar = Calendar.getInstance();
			calendar.setTime(dateObj);
			calendar.add(Calendar.HOUR_OF_DAY, 1);
			dateObj = calendar.getTime();
			newDate = new SimpleDateFormat(format).format(dateObj);
		}
		catch (ParseException e)
		{
			logger.debug("Exception in getting next hour date");
		}
		return newDate;
	}

	public Integer getDifferenceBetweenTwoDates(String firstDate, String secondDate, String format)
	{
		try
		{
			Date firstDateObj = new SimpleDateFormat(format).parse(firstDate);
			Date secondDateObj = new SimpleDateFormat(format).parse(secondDate);
			Days d = Days.daysBetween(new Instant(firstDateObj), new Instant(secondDateObj));
			int days = d.getDays();
			return days;
		}
		catch (ParseException e)
		{
			logger.debug("Exception in getting date difference");
		}
		return 0;
	}

	public static String getHourOnlyPartFromDate(String date)
	{
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Calendar c = Calendar.getInstance();
		try
		{
			c.setTime(sdf.parse(date));
		}
		catch (ParseException e)
		{
			e.printStackTrace();
		}
		sdf = new SimpleDateFormat("HH:mm:ss");
		return (sdf.format(c.getTime()));
	}

	public static String getNextHourForHourlyStartDate(String date)
	{
		return getNextHour(date, Constants.READABLE_DATE_FORMAT_HOURLY);
	}

	public static String getNextHourForHourlyFunction(String date)
	{
		return getNextHour(date, Constants.DEFAULT_DATE_FORMAT_HOURLY);
	}

	public static String getEndDateForInterestingMoment(String date)
	{
		date = convertDateForInterestingMoment(date);
		return getPreviousDate(date, Constants.READABLE_DATE_FORMAT);
	}

	public static String getEndDateForInterestingMoment(String date, String previousDate)
	{
		date = convertDateForInterestingMoment(date);
		previousDate = convertDateForInterestingMoment(previousDate);

		return getPreviousDate(date, Constants.READABLE_DATE_FORMAT);
	}

	public static String getEndDateForInterestingMomentHourly(String date)
	{
		date = convertDateForInterestingMoment(date);
		return getPreviousDate(date, Constants.READABLE_DATE_FORMAT_HOURLY);
	}

	public static String convertDateForInterestingMoment(String date)
	{
		return convertDateToFormat(date, Constants.DEFAULT_DATE_FORMAT, Constants.READABLE_DATE_FORMAT);
	}

	public static String convertDateForInterestingTrend(String date)
	{
		return convertDateToFormat(date, Constants.DEFAULT_DATE_FORMAT, Constants.SHORT_DATE_FORMAT);
	}

	public static String convertNonHourlyDateToHourly(String date)
	{
		return convertDateToFormat(date, Constants.DEFAULT_DATE_FORMAT, Constants.READABLE_DATE_FORMAT_HOURLY);
	}

	public static String convertNonHourlyDateToHourlyFormat(String date)
	{
		return convertDateToFormat(date, Constants.DEFAULT_DATE_FORMAT, Constants.SHORT_TIME_FORMAT);
	}

	public static String convertDateForInterestingMomentForHourly(String date)
	{
		return convertDateToFormat(date, Constants.DEFAULT_DATE_FORMAT_HOURLY, Constants.READABLE_DATE_FORMAT_HOURLY);
	}

	public static String convertDateForInterestingTrendForHourly(String date)
	{
		return convertDateToFormat(date, Constants.DEFAULT_DATE_FORMAT_HOURLY, Constants.SHORT_TIME_FORMAT);
	}
}