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
import com.metacube.senchacon.demoapp.common.enums.DataField;
import com.metacube.senchacon.demoapp.common.enums.Database;
import com.metacube.senchacon.demoapp.common.util.DAOUtils;
import com.metacube.senchacon.demoapp.common.util.Utilities;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;

@SuppressWarnings("unchecked")
public class ScatterChartDAO
{
	@Autowired
	private SessionFactory sessionFactory;

	private final static Logger logger = LoggerFactory.getLogger(ScatterChartDAO.class);

	public List<Object> getScatterChartData(DatabaseTableView database, DatabaseTableFieldsView timeField, String startDate,
			String endDate, String granularity, DatabaseTableFieldsView dataField1, DatabaseTableFieldsView dataField2)
	{
		Session session = sessionFactory.getCurrentSession();
		try
		{
			String sql = "", dataField1Calculation = "", dataField2Calculation = "";
			if (Utilities.verifyString(dataField1.getFieldCalculation()))
			{
				dataField1Calculation = " and " + dataField1.getFieldCalculation();
			}
			if (Utilities.verifyString(dataField2.getFieldCalculation()))
			{
				dataField2Calculation = " and " + dataField2.getFieldCalculation();
			}
			String whereClause = DAOUtils.getTimeWhereClause(timeField, granularity, startDate, endDate, "");
			if (database.getName().equalsIgnoreCase(Database.INFINITYQS.toString()))
			{
				String selectClause = "";
				if (dataField1.getFieldName().equalsIgnoreCase(DataField.PROCESS_EVENTS.toString()))
				{
					selectClause = "sum(`" + dataField1.getFieldName() + "`) as " + dataField1.getFieldName() + ", round(avg(`"
							+ dataField2.getFieldName() + "`),0) as " + dataField2.getFieldName();
				}
				else
				{
					selectClause = "round(avg(`" + dataField1.getFieldName() + "`),0) as " + dataField1.getFieldName() + ", sum(`"
							+ dataField2.getFieldName() + "`) as " + dataField2.getFieldName();
				}
				sql = "select " + selectClause + " from " + Constants.INFINITY_PERCENT_OUT_OF_SPEC_TABLE + " where " + whereClause;
			}
			else
			{
				sql = "select sum(" + dataField1.getFieldName() + ") as '" + dataField1.getFieldName() + "', sum("
						+ dataField2.getFieldName() + ") as '" + dataField2.getFieldName() + "' from (select "
						+ dataField1.getFieldSelection() + " as '" + dataField1.getFieldName() + "', '0' as '" + dataField2.getFieldName()
						+ "' from " + database.getTableName() + " where " + whereClause + dataField1Calculation + " union select '0' as '"
						+ dataField1.getFieldName() + "', " + dataField2.getFieldSelection() + " as '" + dataField2.getFieldName()
						+ "' from " + database.getTableName() + " where " + whereClause + dataField2Calculation + ") as t";
			}
			logger.debug("Query is ==" + sql);
			Query query = session.createSQLQuery(sql);
			List<Object> data = query.list();
			return data;
		}
		catch (HibernateException e)
		{
			logger.debug("Hibernate exception in ScatterChartDAO" + e);
		}
		return null;
	}
}