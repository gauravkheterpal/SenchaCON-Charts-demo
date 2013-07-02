package com.metacube.senchacon.demoapp.model.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.CriteriaSpecification;
import org.hibernate.criterion.Restrictions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.metacube.senchacon.demoapp.common.enums.DatabaseFieldTypes;
import com.metacube.senchacon.demoapp.model.entity.DatabaseTable;
import com.metacube.senchacon.demoapp.model.entity.DatabaseTableFields;

@SuppressWarnings("unchecked")
public class DatabaseTableDAO
{
	
	@Autowired
	private SessionFactory sessionFactory;

	private final static Logger logger = LoggerFactory.getLogger(DatabaseTableDAO.class);
	
	public Boolean saveDatabaseTable(DatabaseTable entity)
	{
		try
		{
			Session session = sessionFactory.getCurrentSession();
			session.saveOrUpdate(entity);
		}
		catch (HibernateException he)
		{
			logger.error("Failed to save DatabaseTable for entity." + entity, he);
			return false;
		}
		return true;
	}
	
	public Boolean saveDatabaseTableFields(DatabaseTableFields entity)
	{
		try
		{
			Session session = sessionFactory.getCurrentSession();
			session.saveOrUpdate(entity);
		}
		catch (HibernateException he)
		{
			logger.error("Failed to save DatabaseTableFields for entity." + entity, he);
			return false;
		}
		return true;
	}
	
	public Boolean deleteDatabaseTableFields(DatabaseTableFields entity)
	{
		try
		{
			Session session = sessionFactory.getCurrentSession();
			session.delete(entity);
		}
		catch (HibernateException he)
		{
			logger.error("Failed to delete DatabaseTableFields for entity." + entity.getFieldName(), he);
			return false;
		}
		return true;
	}	
	
	public ArrayList<DatabaseTable> getAllDatabaseTables()
	{
		ArrayList<DatabaseTable> databaseTables = new ArrayList<DatabaseTable>();
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(DatabaseTable.class);
			criteria.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
			criteria.add(Restrictions.eq("isActive", true));
			databaseTables = (ArrayList<DatabaseTable>) criteria.list();
			for (DatabaseTable entity : databaseTables)
			{
				session.evict(entity);
			}
		}
		catch (HibernateException he)
		{
			logger.debug("Hibernate Exception in DatabaseTableDAO for getAllDatabaseTables-" + he);
		}
		return databaseTables;
	}
	
	public ArrayList<DatabaseTableFields> getAllDatabaseTableFieldsForDatabaseTable(Long databaseTableId)
	{
		ArrayList<DatabaseTableFields> databaseTableFields = new ArrayList<DatabaseTableFields>();
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(DatabaseTableFields.class);
			criteria.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
			criteria.add(Restrictions.eq("databaseTable.id", databaseTableId));
			databaseTableFields = (ArrayList<DatabaseTableFields>) criteria.list();
			for (DatabaseTableFields entity : databaseTableFields)
			{
				session.evict(entity);
			}
		}
		catch (HibernateException he)
		{
			logger.debug("Hibernate Exception in DatabaseTableDAO for getAllDatabaseTableFieldsForDatabaseTable-" + he);
		}
		return databaseTableFields;
	}
	
	public ArrayList<DatabaseTableFields> getAllDatabaseTableFieldsForDataSource(Long dataSourceId)
	{
		ArrayList<DatabaseTableFields> databaseTableFields = new ArrayList<DatabaseTableFields>();
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(DatabaseTableFields.class);
			criteria.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
			criteria.add(Restrictions.eq("dataSource.id", dataSourceId));
			databaseTableFields = (ArrayList<DatabaseTableFields>) criteria.list();
			for (DatabaseTableFields entity : databaseTableFields)
			{
				session.evict(entity);
			}
		}
		catch (HibernateException he)
		{
			logger.debug("Hibernate Exception in DatabaseTableDAO for getAllDatabaseTableFieldsForDataSource-" + he);
		}
		return databaseTableFields;
	}
	
	public DatabaseTable getDatabaseTable(Long databaseTableId)
	{
		DatabaseTable databaseTable = null;
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(DatabaseTable.class);
			criteria.add(Restrictions.eq("id", databaseTableId));
			List<DatabaseTable> databaseTables = criteria.list();
			if (databaseTables != null && !databaseTables.isEmpty())
			{
				databaseTable = databaseTables.get(0);
			}
		}
		catch (HibernateException he)
		{
			logger.error("Failed to find DatabaseTable for id " + databaseTableId, he);
		}
		return databaseTable;
	}
	
	public DatabaseTable getDatabaseTableByName(String databaseTableName)
	{
		DatabaseTable databaseTable = null;
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(DatabaseTable.class);
			criteria.add(Restrictions.eq("tableName", databaseTableName));
			List<DatabaseTable> databaseTables = criteria.list();
			if (databaseTables != null && !databaseTables.isEmpty())
			{
				databaseTable = databaseTables.get(0);
			}
		}
		catch (HibernateException he)
		{
			logger.error("Failed to find DatabaseTable for name " + databaseTableName, he);
		}
		return databaseTable;
	}
	
	public DatabaseTableFields getDatabaseTableFieldByName(Long databaseId, String databaseTableFieldName)
	{
		DatabaseTableFields databaseTableField = null;
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(DatabaseTableFields.class);
			criteria.add(Restrictions.eq("databaseTable.id", databaseId));
			criteria.add(Restrictions.eq("fieldName", databaseTableFieldName));
			List<DatabaseTableFields> databaseTableFields = criteria.list();
			if (databaseTableFields != null && !databaseTableFields.isEmpty())
			{
				databaseTableField = databaseTableFields.get(0);
			}
		}
		catch (HibernateException he)
		{
			logger.error("Failed to find DatabaseTableField for name " + databaseTableFieldName, he);
		}
		return databaseTableField;
	}
	
	public DatabaseTableFields getDatabaseTableFieldById(Long databaseTableFieldId)
	{
		DatabaseTableFields databaseTableField = null;
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(DatabaseTableFields.class);
			criteria.add(Restrictions.eq("id", databaseTableFieldId));
			List<DatabaseTableFields> databaseTableFields = criteria.list();
			if (databaseTableFields != null && !databaseTableFields.isEmpty())
			{
				databaseTableField = databaseTableFields.get(0);
			}
		}
		catch (HibernateException he)
		{
			logger.error("Failed to find DatabaseTableField for id " + databaseTableFieldId, he);
		}
		return databaseTableField;
	}
	
	public DatabaseTableFields getTimeFieldForDatabaseTable(Long databaseId)
	{
		DatabaseTableFields databaseTableField = null;
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(DatabaseTableFields.class);
			criteria.add(Restrictions.eq("databaseTable.id", databaseId));
			criteria.add(Restrictions.eq("fieldType", DatabaseFieldTypes.TIME_FIELD.toString()));
			List<DatabaseTableFields> databaseTableFields = criteria.list();
			if (databaseTableFields != null && !databaseTableFields.isEmpty())
			{
				databaseTableField = databaseTableFields.get(0);
			}
		}
		catch (HibernateException he)
		{
			logger.error("Failed to find TimeDatabaseTableField for id " + databaseId, he);
		}
		return databaseTableField;
	}
}