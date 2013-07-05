package com.metacube.senchacon.demoapp.model.dao;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.metacube.senchacon.demoapp.common.util.DAOUtils;
import com.metacube.senchacon.demoapp.common.util.Utilities;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;

@SuppressWarnings("unchecked")
public class PieChartDAO
{

	@Autowired
	private SessionFactory sessionFactory;

	private final static Logger logger = LoggerFactory.getLogger(PieChartDAO.class);

	public List<Object> getPieChartData(DatabaseTableView database, DatabaseTableFieldsView timeField, String startDate, String endDate,
			String granularity, DatabaseTableFieldsView dataField, DatabaseTableFieldsView categoryField, String fixOrderString,
			String filterString)
	{
		Session session = sessionFactory.getCurrentSession();
		try
		{
			Query query = null;
			String whereClause = null;
			String selectClause = null;
			String outerSelectClause = "sum(value)";
			String tableName = database.getTableName();
			if (fixOrderString == null)
			{
				fixOrderString = "order by " + dataField + " desc";
			}

			whereClause = "where " + DAOUtils.getTimeWhereClause(timeField, granularity, startDate, endDate, "");
			selectClause = dataField.getFieldSelection();
			if (Utilities.verifyString(dataField.getFieldCalculation()))
			{
				whereClause = whereClause + " and " + dataField.getFieldCalculation();
			}

			/* Hard-coded Fix */
			if (dataField.getFieldName().equalsIgnoreCase("data_4"))
			{
				selectClause = "count(`" + categoryField.getFieldName() + "`)";
			}
			/* Hard-coded Fix End */

			if (Utilities.verifyString(filterString))
			{
				whereClause = whereClause + " AND " + filterString;
			}

			String queryString = null;
			queryString = "SELECT `" + categoryField.getFieldName() + "` as '" + categoryField.getFieldName() + "', " + outerSelectClause
					+ " as '" + dataField.getFieldName() + "' FROM (SELECT * FROM  item union select `" + categoryField.getFieldName()
					+ "`, " + selectClause + " as value from " + tableName + " " + whereClause + " group by `"
					+ categoryField.getFieldName() + "`) as t group by `" + categoryField.getFieldName() + "` " + fixOrderString;
			logger.debug("Final Query in PieChartDAO is==" + queryString);
			query = session.createSQLQuery(queryString);
			return query.list();
		}
		catch (HibernateException e)
		{
			logger.debug("Hibernate exception in PieChartDAO" + e);
		}
		return null;
	}
}