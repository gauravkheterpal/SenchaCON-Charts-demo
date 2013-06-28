package com.metacube.senchacon.demoapp.model.dao;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;

@SuppressWarnings("unchecked")
public class FilterFieldsDAO
{
	@Autowired
	private SessionFactory sessionFactory;

	Logger logger = LoggerFactory.getLogger(FilterFieldsDAO.class);

	public List<Object> getFields(DatabaseTableView database, String filterCategory)
	{
		Session session = sessionFactory.getCurrentSession();
		try
		{	
			String tableName = database.getTableName();			
			Query query = null;
			String queryString = "SELECT distinct `" + filterCategory + "` from " + tableName;
			query = session.createSQLQuery(queryString);
			List<Object> data = query.list();			
			//logger.debug("Final Query in FilterFieldsDAO is==" + queryString);
			return data;
		}
		catch (HibernateException e)
		{
			logger.debug("Hibernate exception in FilterFieldsDAO" + e);
		}
		return null;
	}
}