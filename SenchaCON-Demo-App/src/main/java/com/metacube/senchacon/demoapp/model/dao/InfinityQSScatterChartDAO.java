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

@SuppressWarnings("unchecked")
public class InfinityQSScatterChartDAO
{
	@Autowired
	private SessionFactory sessionFactory;

	private final static Logger logger = LoggerFactory.getLogger(InfinityQSScatterChartDAO.class);

	public List<Object> getScatterChartData(String startDate, String endDate, String startTime, String endTime, String xfield,
			String yfield, String granularity)
	{
		Session session = sessionFactory.getCurrentSession();
		try
		{
			Query query = null;
			String queryString = null;
			String whereClause;
			String selectClause = "select sum(`Process Events`), round(avg(`Percent Out Of Spec`),0)";
			whereClause = "where `Event Time` >= '" + startDate + "' and `Event Time` <= '" + endDate + "'";
			queryString = selectClause + " from " + Constants.INFINITY_PERCENT_OUT_OF_SPEC_TABLE + " " + whereClause;
			// logger.debug("Final Query in InfinityQSScatterChartDAO is==" +queryString);
			query = session.createSQLQuery(queryString);
			return query.list();
		}
		catch (HibernateException e)
		{
			logger.debug("Hibernate exception in InfinityQSScatterChartDAO" + e);
		}
		return null;
	}
}