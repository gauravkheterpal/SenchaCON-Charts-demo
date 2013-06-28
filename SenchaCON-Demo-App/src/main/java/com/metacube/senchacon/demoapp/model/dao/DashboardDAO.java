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

import com.metacube.senchacon.demoapp.model.entity.DashboardSettings;
import com.metacube.senchacon.demoapp.model.entity.FilterSettings;
import com.metacube.senchacon.demoapp.model.entity.ManualIM;
import com.metacube.senchacon.demoapp.model.entity.SharedDashboards;
import com.metacube.senchacon.demoapp.model.entity.UserDashboard;

@SuppressWarnings("unchecked")
public class DashboardDAO
{

	@Autowired
	private SessionFactory sessionFactory;

	private final static Logger logger = LoggerFactory.getLogger(DashboardDAO.class);

	public ArrayList<UserDashboard> getAllDashboardsForUser(Long userId)
	{
		ArrayList<UserDashboard> userDashboards = new ArrayList<UserDashboard>();
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(UserDashboard.class);
			criteria.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
			criteria.add(Restrictions.eq("user.id", userId));
			criteria.add(Restrictions.eq("isActive", true));
			userDashboards = (ArrayList<UserDashboard>) criteria.list();
			for (UserDashboard entity : userDashboards)
			{
				session.evict(entity);
			}
		}
		catch (HibernateException he)
		{
			logger.debug("Hibernate Exception in dashboardDAO for getAllDashboardsForUser-" + he);
		}
		return userDashboards;
	}

	public ArrayList<SharedDashboards> getAllBookmarkedDashboardsForUser(Long userId)
	{
		ArrayList<SharedDashboards> sharedDashboards = new ArrayList<SharedDashboards>();
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(SharedDashboards.class);
			criteria.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
			criteria.add(Restrictions.eq("user.id", userId));
			sharedDashboards = (ArrayList<SharedDashboards>) criteria.list();
			for (SharedDashboards entity : sharedDashboards)
			{
				session.evict(entity);
			}
		}
		catch (HibernateException he)
		{
			logger.debug("Hibernate Exception in dashboardDAO for getAllBookmarkedDashboardsForUser-" + he);
		}
		return sharedDashboards;
	}
	
	public ArrayList<SharedDashboards> getAllSharedDashboardsForDashboardId(Long dashboardId)
	{
		ArrayList<SharedDashboards> sharedDashboards = new ArrayList<SharedDashboards>();
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(SharedDashboards.class);
			criteria.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
			criteria.add(Restrictions.eq("dashboard.id", dashboardId));
			sharedDashboards = (ArrayList<SharedDashboards>) criteria.list();
			for (SharedDashboards entity : sharedDashboards)
			{
				session.evict(entity);
			}
		}
		catch (HibernateException he)
		{
			logger.debug("Hibernate Exception in dashboardDAO for getAllSharedDashboardsForDashboardId-" + he);
		}
		return sharedDashboards;
	}

	public DashboardSettings saveDashboardSetting(DashboardSettings entity)
	{
		try
		{
			Session session = sessionFactory.getCurrentSession();
			session.saveOrUpdate(entity);
		}
		catch (HibernateException he)
		{
			logger.error("Failed to save dashboardSettings for entity." + entity, he);
		}
		return entity;
	}

	public Boolean saveDashboard(UserDashboard entity)
	{
		try
		{
			Session session = sessionFactory.getCurrentSession();
			session.saveOrUpdate(entity);
		}
		catch (HibernateException he)
		{
			logger.error("Failed to save UserDashboard for entity." + entity, he);
			return false;
		}
		return true;
	}

	public Boolean deleteDashboard(UserDashboard entity)
	{
		try
		{
			Session session = sessionFactory.getCurrentSession();
			session.delete(entity);
		}
		catch (HibernateException he)
		{
			logger.error("Failed to delete UserDashboard for entity." + entity, he);
			return false;
		}
		return true;
	}

	public UserDashboard getUserDashboard(Long dashboardId)
	{
		UserDashboard dashboard = null;
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(UserDashboard.class);
			criteria.add(Restrictions.eq("id", dashboardId));
			List<UserDashboard> dashboards = criteria.list();
			if (dashboards != null && !dashboards.isEmpty())
			{
				dashboard = dashboards.get(0);
			}
		}
		catch (HibernateException he)
		{
			logger.error("Failed to find dashboard for id " + dashboardId, he);
		}
		return dashboard;
	}

	public UserDashboard getUserDashboardByUUID(String uniqueID)
	{
		UserDashboard dashboard = null;
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(UserDashboard.class);
			criteria.add(Restrictions.eq("uniqueID", uniqueID));
			criteria.add(Restrictions.eq("isShared", true));
			List<UserDashboard> dashboards = criteria.list();
			if (dashboards != null && !dashboards.isEmpty())
			{
				dashboard = dashboards.get(0);
			}
		}
		catch (HibernateException he)
		{
			logger.error("Failed to find dashboard for uuid " + uniqueID, he);
		}
		return dashboard;
	}

	public ManualIM getManualIM(Long manualIMId)
	{
		ManualIM manualIM = null;
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(ManualIM.class);
			criteria.add(Restrictions.eq("id", manualIMId));
			List<ManualIM> manualIMs = criteria.list();
			if (manualIMs != null && !manualIMs.isEmpty())
			{
				manualIM = manualIMs.get(0);
			}
		}
		catch (HibernateException he)
		{
			logger.error("Failed to find manualIM for id " + manualIMId, he);
		}
		return manualIM;
	}

	public ArrayList<ManualIM> getAllManualIMsForDashboardSettingAndUser(Long dashboardSettingId, Long userId)
	{
		ArrayList<ManualIM> manualIMs = new ArrayList<ManualIM>();
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(ManualIM.class);
			criteria.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
			criteria.add(Restrictions.eq("user.id", userId));
			criteria.add(Restrictions.eq("dashboardSetting.id", dashboardSettingId));
			manualIMs = (ArrayList<ManualIM>) criteria.list();
			for (ManualIM entity : manualIMs)
			{
				session.evict(entity);
			}
		}
		catch (HibernateException he)
		{
			logger.debug("Hibernate Exception in dashboardDAO for getAllManualIMsForDashboardSettingAndUser-" + he);
		}
		return manualIMs;
	}

	public ArrayList<ManualIM> getAllManualIMsForDashboardSetting(Long dashboardSettingId)
	{
		ArrayList<ManualIM> manualIMs = new ArrayList<ManualIM>();
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(ManualIM.class);
			criteria.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
			criteria.add(Restrictions.eq("dashboardSetting.id", dashboardSettingId));
			criteria.add(Restrictions.eq("isArchived", Boolean.FALSE));
			manualIMs = (ArrayList<ManualIM>) criteria.list();
			for (ManualIM entity : manualIMs)
			{
				session.evict(entity);
			}
		}
		catch (HibernateException he)
		{
			logger.debug("Hibernate Exception in dashboardDAO for getAllManualIMsForDashboardSettingAndUser-" + he);
		}
		return manualIMs;
	}

	public ManualIM saveManualIM(ManualIM entity)
	{
		try
		{
			Session session = sessionFactory.getCurrentSession();
			session.saveOrUpdate(entity);
		}
		catch (HibernateException he)
		{
			logger.error("Failed to save manualIM for entity." + entity, he);
		}
		return entity;
	}

	public SharedDashboards saveSharedDashboardsEntity(SharedDashboards entity)
	{
		try
		{
			Session session = sessionFactory.getCurrentSession();
			session.saveOrUpdate(entity);
		}
		catch (HibernateException he)
		{
			logger.error("Failed to save sharedDashboards for entity." + entity, he);
		}
		return entity;
	}

	public DashboardSettings getUserDashboardSettings(Long dashboardSettingId)
	{
		DashboardSettings dashboardSetting = null;
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(DashboardSettings.class);
			criteria.add(Restrictions.eq("id", dashboardSettingId));
			List<DashboardSettings> dashboardSettings = criteria.list();
			if (dashboardSettings != null && !dashboardSettings.isEmpty())
			{
				dashboardSetting = dashboardSettings.get(0);
			}
		}
		catch (HibernateException he)
		{
			logger.error("Failed to find dashboardSettings for id " + dashboardSettingId, he);
		}
		return dashboardSetting;
	}

	public Boolean deleteUserDashboardBookmark(SharedDashboards entity)
	{
		try
		{
			Session session = sessionFactory.getCurrentSession();
			session.delete(entity);
		}
		catch (HibernateException he)
		{
			logger.error("Failed to delete SharedDashboards for entity." + entity, he);
			return false;
		}
		return true;
	}

	public Boolean deleteManualIM(ManualIM entity)
	{
		try
		{
			Session session = sessionFactory.getCurrentSession();
			session.delete(entity);
		}
		catch (HibernateException he)
		{
			logger.error("Failed to delete ManualIM for entity." + entity, he);
			return false;
		}
		return true;
	}

	public Boolean checkDashboardSharedStatus(Long dashboardId)
	{
		Boolean isSharedWithOthers = Boolean.FALSE;
		ArrayList<SharedDashboards> dashboards = new ArrayList<SharedDashboards>();
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(SharedDashboards.class);
			criteria.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
			criteria.add(Restrictions.eq("dashboard.id", dashboardId));
			dashboards = (ArrayList<SharedDashboards>) criteria.list();
			if (dashboards.size() > 0)
			{
				isSharedWithOthers = Boolean.TRUE;
			}
		}
		catch (HibernateException he)
		{
			logger.debug("Hibernate Exception in dashboardDAO for checkDashboardSharedStatus-" + he);
		}
		return isSharedWithOthers;
	}

	public Boolean isDashboardBookmarkedForUser(Long dashboardId, Long userId)
	{
		Boolean isDashboardBookmarkedForUser = Boolean.FALSE;
		ArrayList<SharedDashboards> dashboards = new ArrayList<SharedDashboards>();
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(SharedDashboards.class);
			criteria.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
			criteria.add(Restrictions.eq("dashboard.id", dashboardId));
			criteria.add(Restrictions.eq("user.id", userId));
			dashboards = (ArrayList<SharedDashboards>) criteria.list();
			if (dashboards.size() > 0)
			{
				isDashboardBookmarkedForUser = Boolean.TRUE;
			}
		}
		catch (HibernateException he)
		{
			logger.debug("Hibernate Exception in dashboardDAO for isDashboardBookmarkedForUser-" + he);
		}
		return isDashboardBookmarkedForUser;
	}

	public SharedDashboards getBookmarkedDashboardForUser(Long userId, Long dashboardId)
	{
		SharedDashboards sharedDashboard = new SharedDashboards();
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(SharedDashboards.class);
			criteria.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
			criteria.add(Restrictions.eq("user.id", userId));
			criteria.add(Restrictions.eq("dashboard.id", dashboardId));
			List<SharedDashboards> data = criteria.list();
			if (data != null && data.size() > 0)
			{
				sharedDashboard = data.get(0);
			}
		}
		catch (HibernateException he)
		{
			logger.debug("Hibernate Exception in dashboardDAO for getBookmarkedDashboardForUser-" + he);
		}
		return sharedDashboard;
	}
	
	public FilterSettings saveFilterSettings(FilterSettings entity)
	{
		try
		{
			Session session = sessionFactory.getCurrentSession();
			session.saveOrUpdate(entity);
		}
		catch (HibernateException he)
		{
			logger.error("Failed to save filterSettings for entity." + entity, he);
		}
		return entity;
	}
	
	public FilterSettings getFilterSettings(Long filterSettingsId)
	{
		FilterSettings filter = null;
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(FilterSettings.class);
			criteria.add(Restrictions.eq("id", filterSettingsId));
			List<FilterSettings> filterSettings = criteria.list();
			if (filterSettings != null && !filterSettings.isEmpty())
			{
				filter = filterSettings.get(0);
			}
		}
		catch (HibernateException he)
		{
			logger.error("Failed to find FilterSettings for id " + filterSettingsId, he);
		}
		return filter;
	}
	
	public ArrayList<FilterSettings> getAllFilterSettingsForDashboardSetting(Long dashboardSettingId)
	{
		ArrayList<FilterSettings> filterSettingsList = new ArrayList<FilterSettings>();
		try
		{
			Session session = sessionFactory.getCurrentSession();
			Criteria criteria = session.createCriteria(FilterSettings.class);
			criteria.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
			criteria.add(Restrictions.eq("dashboardSetting.id", dashboardSettingId));
			filterSettingsList = (ArrayList<FilterSettings>) criteria.list();
			for (FilterSettings entity : filterSettingsList)
			{
				session.evict(entity);
			}
		}
		catch (HibernateException he)
		{
			logger.debug("Hibernate Exception in dashboardDAO for getAllFilterSettingsForDashboardSetting-" + he);
		}
		return filterSettingsList;
	}
}