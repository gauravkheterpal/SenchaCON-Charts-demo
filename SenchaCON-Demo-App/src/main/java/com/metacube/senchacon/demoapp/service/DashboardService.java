package com.metacube.senchacon.demoapp.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.metacube.senchacon.demoapp.common.util.EntityToViewUtils;
import com.metacube.senchacon.demoapp.model.dao.DashboardDAO;
import com.metacube.senchacon.demoapp.model.entity.DashboardSettings;
import com.metacube.senchacon.demoapp.model.entity.FilterSettings;
import com.metacube.senchacon.demoapp.model.entity.ManualIM;
import com.metacube.senchacon.demoapp.model.entity.SharedDashboards;
import com.metacube.senchacon.demoapp.model.entity.UserDashboard;
import com.metacube.senchacon.demoapp.view.model.SharedDashboardsView;
import com.metacube.senchacon.demoapp.view.model.UserDashboardView;

@Service
public class DashboardService
{
	@Autowired
	private DashboardDAO dashboardDAO;

	final static Logger logger = LoggerFactory.getLogger(DashboardService.class);

	public Boolean saveUserDashboard(UserDashboard dashboard)
	{
		return dashboardDAO.saveDashboard(dashboard);
	}
	
	public UserDashboard searchUserDashboard(Long dashboardId)
	{
		return dashboardDAO.getUserDashboard(dashboardId);
	}

	public UserDashboardView findUserDashboard(String uniqueID)
	{
		UserDashboardView dashboard = EntityToViewUtils.userDashboardEntityToView(dashboardDAO.getUserDashboardByUUID(uniqueID));
		dashboard = getExtrasForUserDashboardView(dashboard);
		return dashboard;
	}

	public UserDashboardView findUserDashboard(Long dashboardId)
	{
		UserDashboardView dashboard = EntityToViewUtils.userDashboardEntityToView(dashboardDAO.getUserDashboard(dashboardId));
		dashboard = getExtrasForUserDashboardView(dashboard);
		dashboard.setIsSharedWithOthers(isDashboardSharedWithOthers(dashboardId));
		return dashboard;
	}

	public ArrayList<UserDashboardView> getAllDashboardsForUser(Long userId)
	{
		ArrayList<UserDashboardView> dashboards = EntityToViewUtils.userDashboardEntityToView(dashboardDAO.getAllDashboardsForUser(userId));
		
		for (int i = 0; i < dashboards.size(); i++)
		{
			dashboards.set(i, getExtrasForUserDashboardView(dashboards.get(i)));
			dashboards.get(i).setIsSharedWithOthers(isDashboardSharedWithOthers(dashboards.get(i).getId()));
		}
		return dashboards;
	}

	public ArrayList<UserDashboardView> getAllBookmarkedDashboardsForUser(Long userId)
	{
		List<SharedDashboardsView> dashboards = EntityToViewUtils.sharedDashboardsEntityToView(dashboardDAO.getAllBookmarkedDashboardsForUser(userId));
		ArrayList<UserDashboardView> bookmarkedDashboards = new ArrayList<UserDashboardView>();
		for (int i = 0; i < dashboards.size(); i++)
		{
			UserDashboardView dashboard = dashboards.get(i).getDashboard();
			dashboard.setIsBookmarkedDashboard(Boolean.TRUE);
			dashboard = getExtrasForUserDashboardView(dashboard);
			bookmarkedDashboards.add(dashboard);
		}
		return bookmarkedDashboards;
	}
	
	public ArrayList<SharedDashboards> getAllSharedDashboardsForDashboardId(Long dashboardId)
	{
		ArrayList<SharedDashboards> sharedDashboards = dashboardDAO.getAllSharedDashboardsForDashboardId(dashboardId);
		return sharedDashboards;
	}

	public Boolean deleteUserDashboard(Long dashboardId)
	{
		UserDashboard dashboard = dashboardDAO.getUserDashboard(dashboardId);
		dashboard.setIsActive(Boolean.FALSE);
		return saveUserDashboard(dashboard);
		// return dashboardDAO.deleteDashboard(dashboard);
	}

	public ManualIM findManualIM(Long manualIMId)
	{
		return dashboardDAO.getManualIM(manualIMId);
	}

	public ArrayList<ManualIM> getAllManualIMsForDashboardAndUser(Long dashboardId, Long userId)
	{
		return dashboardDAO.getAllManualIMsForDashboardSettingAndUser(dashboardId, userId);
	}

	public ArrayList<ManualIM> getAllManualIMsForDashboard(Long dashboardId)
	{
		return dashboardDAO.getAllManualIMsForDashboardSetting(dashboardId);
	}

	public Boolean saveManualIM(ManualIM entity)
	{
		entity = dashboardDAO.saveManualIM(entity);
		if (entity.getId() != null)
		{
			return true;
		}
		return false;
	}

	public DashboardSettings getDashboardSettings(Long dashboardSettingId)
	{
		return dashboardDAO.getUserDashboardSettings(dashboardSettingId);
	}

	public Boolean saveUserBookmark(SharedDashboards entity)
	{
		entity = dashboardDAO.saveSharedDashboardsEntity(entity);
		if (entity.getId() != null)
		{
			return true;
		}
		return false;
	}
	
	public Boolean isDashboardBookmarkedForUser(Long dashboardId, Long userId)
	{
		return dashboardDAO.isDashboardBookmarkedForUser(dashboardId , userId);
	}

	public Boolean isDashboardSharedWithOthers(Long dashboardId)
	{
		return dashboardDAO.checkDashboardSharedStatus(dashboardId);
	}

	public SharedDashboards getBookmarkedDashboardForUser(Long userId, Long dashboardId)
	{
		return dashboardDAO.getBookmarkedDashboardForUser(userId, dashboardId);
	}

	public Boolean deleteUserDashboardBookmark(Long userId, Long dashboardId)
	{
		SharedDashboards dashboard = getBookmarkedDashboardForUser(userId, dashboardId);
		return dashboardDAO.deleteUserDashboardBookmark(dashboard);
	}

	public Boolean deleteManualIM(ManualIM manualIM)
	{
		manualIM.setIsArchived(Boolean.TRUE);
		return dashboardDAO.saveManualIM(manualIM).getIsArchived();
		//return dashboardDAO.deleteManualIM(manualIM);
	}
	
	public UserDashboardView getExtrasForUserDashboardView(UserDashboardView dashboard)
	{
		if (dashboard.getPanel1Settings() != null)
		{
			dashboard.getPanel1Settings().setManualIMs(
					EntityToViewUtils.manualIMEntityToView(dashboardDAO.getAllManualIMsForDashboardSetting(dashboard.getPanel1Settings()
							.getId())));
			dashboard.getPanel1Settings().setFilterSettings(
					EntityToViewUtils.filterSettingsEntityToView(dashboardDAO.getAllFilterSettingsForDashboardSetting(dashboard.getPanel1Settings()
							.getId())));
		}
		if (dashboard.getPanel2Settings() != null)
		{
			dashboard.getPanel2Settings().setManualIMs(
					EntityToViewUtils.manualIMEntityToView(dashboardDAO.getAllManualIMsForDashboardSetting(dashboard.getPanel2Settings()
							.getId())));
			dashboard.getPanel2Settings().setFilterSettings(
					EntityToViewUtils.filterSettingsEntityToView(dashboardDAO.getAllFilterSettingsForDashboardSetting(dashboard.getPanel2Settings()
							.getId())));
		}
		if (dashboard.getPanel3Settings() != null)
		{
			dashboard.getPanel3Settings().setManualIMs(
					EntityToViewUtils.manualIMEntityToView(dashboardDAO.getAllManualIMsForDashboardSetting(dashboard.getPanel3Settings()
							.getId())));
			dashboard.getPanel3Settings().setFilterSettings(
					EntityToViewUtils.filterSettingsEntityToView(dashboardDAO.getAllFilterSettingsForDashboardSetting(dashboard.getPanel3Settings()
							.getId())));
		}
		if (dashboard.getPanel4Settings() != null)
		{
			dashboard.getPanel4Settings().setManualIMs(
					EntityToViewUtils.manualIMEntityToView(dashboardDAO.getAllManualIMsForDashboardSetting(dashboard.getPanel4Settings()
							.getId())));
			dashboard.getPanel4Settings().setFilterSettings(
					EntityToViewUtils.filterSettingsEntityToView(dashboardDAO.getAllFilterSettingsForDashboardSetting(dashboard.getPanel4Settings()
							.getId())));
		}
		return dashboard;
	}
	
	public FilterSettings getFilterSettingsForId(Long filterSettingsId)
	{
		return dashboardDAO.getFilterSettings(filterSettingsId);
	}
	
	public FilterSettings saveFilterSettings(FilterSettings filterSettings)
	{
		return dashboardDAO.saveFilterSettings(filterSettings);
	}
}