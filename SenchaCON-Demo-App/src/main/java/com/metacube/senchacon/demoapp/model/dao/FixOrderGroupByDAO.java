package com.metacube.senchacon.demoapp.model.dao;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.metacube.senchacon.demoapp.common.Constants;
import com.metacube.senchacon.demoapp.common.enums.CategoryField;
import com.metacube.senchacon.demoapp.common.enums.DatabaseFieldTypes;
import com.metacube.senchacon.demoapp.common.enums.Granularity;
import com.metacube.senchacon.demoapp.common.util.DAOUtils;
import com.metacube.senchacon.demoapp.common.util.DateUtils;
import com.metacube.senchacon.demoapp.common.util.TableUtils;
import com.metacube.senchacon.demoapp.common.util.Utilities;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;

public class FixOrderGroupByDAO
{
	@Autowired
	private SessionFactory sessionFactory;

	private final static Logger logger = LoggerFactory.getLogger(FixOrderGroupByDAO.class);

	@SuppressWarnings("unchecked")
	public List<Object> getFixOrderGroupByBarValues(DatabaseTableView database, DatabaseTableFieldsView timeField, String startDate,
			String endDate, DatabaseTableFieldsView dataField, DatabaseTableFieldsView categoryField, String filterString, Boolean isGroupBy)
	{
		Session session = sessionFactory.getCurrentSession();
		try
		{
			Query query = null;
			String whereClause = null;
			String selectClause = null;
			String limitQuery = " limit 5";
			List<Object> data = null;
			String categoryAppend = "";
			String tableName = database.getTableName();
			String outerSelectClause = "sum(value)";

			if (startDate.equalsIgnoreCase(endDate))
			{
				endDate = DateUtils.DateIncrement(startDate, 1);
			}

			whereClause = "where " + DAOUtils.getTimeWhereClause(timeField, Granularity.DAILY.toString(), startDate, endDate, "");
			selectClause = dataField.getFieldSelection();
			if (Utilities.verifyString(dataField.getFieldCalculation()))
			{
				whereClause = whereClause + " and " + dataField.getFieldCalculation();
			}
			String itemWhereClause = "";

			/* Hard-coded Fix */
			if (dataField.getFieldName().equalsIgnoreCase("data_4"))
			{
				selectClause = "count(`" + categoryField.getFieldName() + "`)";
				if (categoryField.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.TIME_CATEGORY_FIELD.toString()))
				{
					selectClause = "count(`" + timeField.getFieldSelection() + "`)";
				}
			}

			if (Utilities.verifyString(filterString))
			{
				whereClause = whereClause + " AND " + filterString;
				itemWhereClause = "where " + filterString;
			}

			if (categoryField.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.CATEGORY_FIELD.toString()))
			{
				categoryAppend = "`";
			}
			String queryString = null;
			queryString = "SELECT `" + categoryField.getFieldName() + "`, " + outerSelectClause + " as " + dataField.getFieldName()
					+ " FROM (select " + categoryAppend + categoryField.getFieldSelection() + categoryAppend + " as '"
					+ categoryField.getFieldName() + "', " + selectClause + " as value from " + tableName + " " + whereClause
					+ " group by `" + categoryField.getFieldName() + "`) as t group by `" + categoryField.getFieldName() + "` order by "
					+ dataField.getFieldName() + " desc limit " + Constants.MAX_GROUP_BY;
			logger.debug("Query in FixOrderGroupByDAO is==" + queryString);
			query = session.createSQLQuery(queryString);
			data = query.list();
			if (data != null && !categoryField.getFieldName().equalsIgnoreCase(CategoryField.DATE.toString()) && !isGroupBy)
			{
				String itemFixOrder = "";
				if (data != null)
				{
					itemFixOrder = Utilities.getFixOrderStringForItemTable(data, dataField, categoryField);
				}
				String sql = "DROP TEMPORARY TABLE IF EXISTS item";
				session.createSQLQuery(sql).executeUpdate();
				if (categoryField.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.TIME_CATEGORY_FIELD.toString()))
				{
					String categoryTable = TableUtils.getTableNameForCategoryField(categoryField.getFieldName());
					sql = "CREATE TEMPORARY TABLE item SELECT " + categoryField.getFieldName() + " as `" + categoryField.getFieldName()
							+ "`, value FROM " + categoryTable + " " + itemWhereClause + " " + itemFixOrder;
				}
				else
				{
					sql = "CREATE TEMPORARY TABLE item SELECT distinct `" + categoryField.getFieldName() + "` as `"
							+ categoryField.getFieldName() + "`, '0' as value FROM " + database.getTableName() + " " + itemWhereClause
							+ " " + itemFixOrder + limitQuery;
				}
				logger.debug("Item table Query is ==" + sql);
				session.createSQLQuery(sql).executeUpdate();
			}
			if (categoryField.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.TIME_CATEGORY_FIELD.toString())
					&& categoryField.getFieldName().equalsIgnoreCase(CategoryField.DATE.toString()))
			{
				this.generateDatePlaceholderTable(startDate, endDate, timeField);
			}
			return data;
		}
		catch (HibernateException e)
		{
			logger.debug("Hibernate exception in FixOrderGroupByBarDAO" + e);
		}
		return null;
	}

	public void generateDatePlaceholderTable(String absStartDate, String absEndDate, DatabaseTableFieldsView timeField)
	{
		Session session = sessionFactory.getCurrentSession();
		String sql = "";
		sql = "DROP TEMPORARY TABLE IF EXISTS item";
		session.createSQLQuery(sql).executeUpdate();
		sql = "CREATE TEMPORARY TABLE `item` (`date` varchar(11) DEFAULT '', `" + timeField.getFieldName()
				+ "` date DEFAULT NULL, `value` int(10) DEFAULT '0')";
		session.createSQLQuery(sql).executeUpdate();
		try
		{
			SimpleDateFormat sdf = new SimpleDateFormat(Constants.DEFAULT_DATE_FORMAT);
			Date startDate = sdf.parse(absStartDate);
			Date endDate = sdf.parse(absEndDate);
			Calendar c = Calendar.getInstance();
			while (startDate.before(endDate) || startDate.equals(endDate))
			{
				c.setTime(startDate);
				String dateField = (c.get(Calendar.MONTH) + 1) + "/" + c.get(Calendar.DAY_OF_MONTH);
				sql = "INSERT INTO item (date, " + timeField.getFieldName() + ") VALUES ('" + dateField + "', '" + sdf.format(startDate)
						+ "')";
				session.createSQLQuery(sql).executeUpdate();
				// logger.debug(sql);
				c.add(Calendar.DAY_OF_MONTH, 1);
				startDate = c.getTime();
			}
		}
		catch (ParseException e)
		{
			e.printStackTrace();
		}
		return;
	}
}
