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

import com.metacube.senchacon.demoapp.model.entity.User;
import com.metacube.senchacon.demoapp.model.entity.UserSession;

@SuppressWarnings("unchecked")
public class UserDAO {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	private final static Logger logger = LoggerFactory.getLogger(UserDAO.class);
		
	public ArrayList<User> getAllUsers()
	{
		ArrayList<User> users= new ArrayList<User>();
		try 
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(User.class);
			criteria.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
			users = (ArrayList<User>) criteria.list();
			for(User entity:users)
			{
				session.evict(entity);
			}
		} 
		catch (HibernateException he) 
		{
			logger.debug("Hibernate Exception in UserDAO-" + he);
		}
		return users;
	}
	
	public User saveUser(User entity)
	{
		try 
		{
			Session session = sessionFactory.getCurrentSession();
			session.saveOrUpdate(entity);
		} 
		catch (HibernateException he) 
		{
			logger.error("Failed to save user for entity." + entity, he);
		}
		return entity;
	}

	public boolean checkUserExists(String userName)
	{
		try 
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(User.class);
			criteria.add(Restrictions.eq("userName", userName).ignoreCase());			
			List<User> users = criteria.list();
			if (users != null && !users.isEmpty()) 
			{
				return Boolean.TRUE;
			}
		} 
		catch (HibernateException he) 
		{
			logger.error("Failed to check user for name." + userName, he);
		}
		return Boolean.FALSE;
	}
	
	public User getUser(String userName)
	{
		User user = null;
		try 
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(User.class);
			criteria.add(Restrictions.eq("userName", userName).ignoreCase());
			List<User> users = criteria.list();
			if (users != null && !users.isEmpty()) 
			{
				user = users.get(0);
			}
		} 
		catch (HibernateException he) 
		{
			logger.error("Failed to find user for name " + userName, he);
		}
		return user;
	}
	
	public User getUser(Long userId)
	{
		User user = null;
		try 
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(User.class);
			criteria.add(Restrictions.eq("id", userId));
			List<User> users = criteria.list();
			if (users != null && !users.isEmpty()) 
			{
				user = users.get(0);
			}
		} 
		catch (HibernateException he) 
		{
			logger.error("Failed to find user for id " + userId, he);
		}
		return user;
	}
	
	public void saveUserSession(UserSession userSession)
	{
		try 
		{
			Session session = sessionFactory.getCurrentSession();
			session.saveOrUpdate(userSession);
		} 
		catch (HibernateException he) 
		{
			logger.error("Failed to save userSession for entity." + userSession, he);
		}
	}
	
	public UserSession getUserSession(String accessKey)
	{
		UserSession userSession = null;
		try 
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(UserSession.class);
			criteria.add(Restrictions.eq("accessKey", accessKey));
			List<UserSession> sessions = criteria.list();
			if (sessions != null && !sessions.isEmpty()) 
			{
				userSession = sessions.get(0);
			}
		} 
		catch (HibernateException he) 
		{
			logger.error("Failed to find userSession for accessKey " + accessKey, he);
		}
		return userSession;
	}
	
	public UserSession getUserSession(Long sessionId)
	{
		UserSession userSession = null;
		try 
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(UserSession.class);
			criteria.add(Restrictions.eq("id", sessionId));
			List<UserSession> sessions = criteria.list();
			if (sessions != null && !sessions.isEmpty()) 
			{
				userSession = sessions.get(0);
			}
		} 
		catch (HibernateException he) 
		{
			logger.error("Failed to find userSession for sessionId " + sessionId, he);
		}
		return userSession;
	}
}