package com.metacube.senchacon.demoapp.model.dao;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.metacube.senchacon.demoapp.common.Constants;
import com.metacube.senchacon.demoapp.common.enums.TempTableType;
import com.metacube.senchacon.demoapp.common.util.DAOUtils;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;

@SuppressWarnings("unchecked")
public class BarChartDAO
{
	@Autowired
	private SessionFactory sessionFactory;

	private final static Logger logger = LoggerFactory.getLogger(BarChartDAO.class);

	public List<Object> getBarChart(DatabaseTableView database, DatabaseTableFieldsView timeField, String startDate, String endDate,
			DatabaseTableFieldsView dataField, DatabaseTableFieldsView categoryField, DatabaseTableFieldsView groupByField,
			String[] groupByBarValues, String fixOrderString, String granularity, String absStartDate, String absEndDate,
			String filterString)
	{
		Session session = sessionFactory.getCurrentSession();
		try
		{
			String queryString = null;
			if (groupByField == null)
			{
				queryString = getQueryString(database, timeField, startDate, endDate, dataField, categoryField, fixOrderString,
						granularity, absStartDate, absEndDate, filterString);
			}
			else
			{
				queryString = this.getQueryStringForGroupBy(session, database, timeField, startDate, endDate, dataField, categoryField,
						groupByField, groupByBarValues, fixOrderString, granularity, absStartDate, absEndDate, filterString);
			}
			Query query = session.createSQLQuery(queryString);
			return query.list();
		}
		catch (HibernateException e)
		{
			logger.debug("Hibernate exception in BarChartDAO" + e);
		}
		return null;
	}

	public String getQueryString(DatabaseTableView database, DatabaseTableFieldsView timeField, String startDate, String endDate,
			DatabaseTableFieldsView dataField, DatabaseTableFieldsView categoryField, String fixOrderString, String granularity,
			String absStartDate, String absEndDate, String filterString)
	{
		String sql = null;
		sql = DAOUtils.getQueryStringForGroupByNone(database, timeField, startDate, endDate, dataField, categoryField, fixOrderString,
				granularity, absStartDate, absEndDate, filterString);
		logger.debug("Query is ==" + sql);
		return sql;
	}

	public String getQueryStringForGroupBy(Session session, DatabaseTableView database, DatabaseTableFieldsView timeField,
			String startDate, String endDate, DatabaseTableFieldsView dataField, DatabaseTableFieldsView categoryField,
			DatabaseTableFieldsView groupByField, String[] groupByBarValues, String fixOrderString, String granularity,
			String absStartDate, String absEndDate, String filterString)
	{
		String sql = "", groupBarString = "";
		try
		{
			sql = "DROP TEMPORARY TABLE IF EXISTS temp";
			session.createSQLQuery(sql).executeUpdate();
			sql = "DROP TEMPORARY TABLE IF EXISTS test";
			session.createSQLQuery(sql).executeUpdate();
			sql = DAOUtils.getQueryStringForGroupBy(database, timeField, startDate, endDate, dataField, categoryField, groupByField,
					groupByBarValues, fixOrderString, granularity, absStartDate, absEndDate, filterString, TempTableType.TEST, null, null);
			// logger.debug("Query is ==" + sql);
			session.createSQLQuery(sql).executeUpdate();
		}
		catch (HibernateException e)
		{
			logger.debug("Hibernate exception in BarChartDAO" + e);
		}
		for (int i = 0; i < groupByBarValues.length; i++)
		{
			try
			{
				sql = DAOUtils.getQueryStringForGroupBy(database, timeField, startDate, endDate, dataField, categoryField, groupByField,
						groupByBarValues, fixOrderString, granularity, absStartDate, absEndDate, filterString, TempTableType.TEMP, null, i);
				// logger.debug("Query from Daoutils is ==" + sql);
				session.createSQLQuery(sql).executeUpdate();
				sql = "alter table test add column `" + groupByBarValues[i] + "` INTEGER";
				// logger.debug("Query is ==" + sql);
				session.createSQLQuery(sql).executeUpdate();
				sql = "update test, temp set `" + groupByBarValues[i] + "` = temp.length where test.`" + categoryField.getFieldName()
						+ "` = temp.`" + categoryField.getFieldName() + "`";
				// logger.debug("Query is ==" + sql);
				session.createSQLQuery(sql).executeUpdate();
				sql = "DROP TEMPORARY TABLE IF EXISTS temp";
				session.createSQLQuery(sql).executeUpdate();
				groupBarString = groupBarString + " and `" + groupByField.getFieldName() + "` <> '" + groupByBarValues[i] + "'";
			}
			catch (HibernateException e)
			{
				logger.debug("Hibernate exception in BarChartDAO" + e);
			}
		}
		try
		{
			sql = DAOUtils.getQueryStringForGroupBy(database, timeField, startDate, endDate, dataField, categoryField, groupByField,
					groupByBarValues, fixOrderString, granularity, absStartDate, absEndDate, filterString, TempTableType.TEMP,
					groupBarString, null);
			session.createSQLQuery(sql).executeUpdate();
			sql = "alter table test add column `" + Constants.OTHERS + "` INTEGER ";
			// logger.debug("Query is ==" + sql);
			session.createSQLQuery(sql).executeUpdate();
			sql = "update test,temp set `" + Constants.OTHERS + "` = temp.length where test.`" + categoryField.getFieldName()
					+ "` = temp.`" + categoryField.getFieldName() + "`";
			// logger.debug("Query is ==" + sql);
			session.createSQLQuery(sql).executeUpdate();
			sql = "select * from test " + fixOrderString;
			// logger.debug("Query is ==" + sql);
		}
		catch (HibernateException e)
		{
			logger.debug("Hibernate exception in BarChartDAO" + e);
		}
		return sql;
	}
}