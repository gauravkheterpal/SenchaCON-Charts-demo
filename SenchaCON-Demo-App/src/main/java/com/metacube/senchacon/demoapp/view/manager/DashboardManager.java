package com.metacube.senchacon.demoapp.view.manager;

import java.util.ArrayList;

import net.sf.json.JSONArray;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.metacube.senchacon.demoapp.common.enums.ErrorReason;
import com.metacube.senchacon.demoapp.common.enums.JSONMessages;
import com.metacube.senchacon.demoapp.common.util.JSONUtils;
import com.metacube.senchacon.demoapp.common.util.ModelUtils;
import com.metacube.senchacon.demoapp.model.entity.DashboardSettings;
import com.metacube.senchacon.demoapp.model.entity.ManualIM;
import com.metacube.senchacon.demoapp.model.entity.SharedDashboards;
import com.metacube.senchacon.demoapp.model.entity.User;
import com.metacube.senchacon.demoapp.model.entity.UserDashboard;
import com.metacube.senchacon.demoapp.service.DashboardService;
import com.metacube.senchacon.demoapp.service.UserService;
import com.metacube.senchacon.demoapp.view.model.UserDashboardView;

@Component
public class DashboardManager
{
	final static Logger logger = LoggerFactory.getLogger(DashboardManager.class);

	@Autowired
	private DashboardService dashboardService;

	@Autowired
	private UserService userService;

	@Autowired
	private FilterManager filterManager;

	public String saveUserDashboard(Long dashboardId, String dashboardTitle, Boolean isShared, Long userId, String[] panelSettings,
			String[] panelData, String[] isChartConfigured, String[] chartTypes, String[] graphTitles, String[] xAxis, String[] yAxis,
			String[] groupBys, String[] granularities, String[] accumulate, String[] startDates, String[] endDates, String[] databaseName,
			String[] filterToggle, Integer activePanels, Integer replaySpeed, String interestingMomentSetting,
			String replayCommentsSetting, Integer type1Setting, Integer type2Setting, Integer type3Setting, Integer type4Setting,
			String[] informanceUserFilter, String[] informanceReasonFilter, String[] informanceSetFilter, String[] informancePartFilter,
			String[] infinityQSUserFilter, String[] infinityQSTestFilter, String[] infinityQSPartFilter, String[] infinityQSQPMFilter,
			String[] infinityQSProcessFilter)
	{
		UserDashboard dashboard = new UserDashboard();
		if (dashboardId != null)
		{
			dashboard = dashboardService.searchUserDashboard(dashboardId);
		}
		User user = userService.getUser(userId);
		dashboard = ModelUtils.entityForUserDashboard(dashboard, dashboardTitle, isShared, user, panelSettings, panelData,
				isChartConfigured, chartTypes, graphTitles, xAxis, yAxis, groupBys, granularities, accumulate, startDates, endDates,
				databaseName, filterToggle, activePanels, replaySpeed, interestingMomentSetting, replayCommentsSetting, type1Setting,
				type2Setting, type3Setting, type4Setting);
		if (dashboardService.saveUserDashboard(dashboard))
		{
			if (dashboardId != null)
			{
				this.setDashboardAsUpdated(userId, dashboardId);
			}
			filterManager.saveDashboardFilters(dashboard.getId(), informanceUserFilter, informanceReasonFilter, informanceSetFilter,
					informancePartFilter, infinityQSUserFilter, infinityQSTestFilter, infinityQSPartFilter, infinityQSQPMFilter,
					infinityQSProcessFilter);
			return JSONUtils.getMessageJSON(JSONMessages.SUCCESS_SAVING_DASHBOARD, dashboardService.findUserDashboard(dashboard.getId()));
		}
		return JSONUtils.getErrorJSON(ErrorReason.FAILED_SAVING_DASHBOARD);
	}

	public String getUserDashboards(Long userId)
	{
		ArrayList<UserDashboardView> userDashboards = dashboardService.getAllDashboardsForUser(userId);
		ArrayList<UserDashboardView> bookmarkedDashboards = dashboardService.getAllBookmarkedDashboardsForUser(userId);
		if ((userDashboards != null && userDashboards.size() > 0) || (bookmarkedDashboards != null && bookmarkedDashboards.size() > 0))
		{
			JSONArray dashboardsJSON = new JSONArray();
			for (int i = 0; i < userDashboards.size(); i++)
			{
				dashboardsJSON.add(JSONUtils.getJSONForUserDashboardEntity(userDashboards.get(i)));
			}
			for (int i = 0; i < bookmarkedDashboards.size(); i++)
			{
				dashboardsJSON.add(JSONUtils.getJSONForUserDashboardEntity(bookmarkedDashboards.get(i)));
			}
			return dashboardsJSON.toString();
		}
		else
		{
			return JSONUtils.getErrorJSON(ErrorReason.NO_SAVED_DASHBOARDS);
		}
	}

	public String getUserDashboardData(Long dashboardId, Long userId)
	{
		UserDashboardView userDashboard = dashboardService.findUserDashboard(dashboardId);
		if (userDashboard != null)
		{
			if (userId != null)
			{
				this.setDashboardAsSeen(userId, dashboardId);
			}
			return JSONUtils.getFullJSONForUserDashboardEntity(userDashboard);
		}
		else
		{
			return JSONUtils.getErrorJSON(ErrorReason.DASHBOARD_DATA_NOT_FOUND);
		}
	}

	public String getUserDashboardData(String uniqueId, Long userId)
	{
		UserDashboardView userDashboard = dashboardService.findUserDashboard(uniqueId);
		if (userDashboard != null)
		{
			if (userId != null)
			{
				userDashboard.setIsBookmarkedDashboard(dashboardService.isDashboardBookmarkedForUser(userDashboard.getId(), userId));
			}
			return JSONUtils.getFullJSONForUserDashboardEntity(userDashboard);
		}
		else
		{
			return JSONUtils.getErrorJSON(ErrorReason.INVALID_UNIQUE_ID);
		}
	}

	public String deleteUserDashboard(Long userId, Long dashboardId, Boolean isBookmarkedDashboard)
	{
		UserDashboard dashboard = dashboardService.searchUserDashboard(dashboardId);
		if (isBookmarkedDashboard && dashboard.getUser().getId() != userId)
		{
			if (dashboardService.deleteUserDashboardBookmark(userId, dashboardId))
			{
				return JSONUtils.getMessageJSON(JSONMessages.SUCCESS_DELETE_BOOKMARK, null);
			}
		}
		else if (!isBookmarkedDashboard && dashboard.getUser().getId() == userId)
		{
			if (dashboardService.deleteUserDashboard(dashboardId))
			{
				return JSONUtils.getMessageJSON(JSONMessages.SUCCESS_DELETE_DASHBOARD, dashboardService.findUserDashboard(dashboardId));
			}
		}
		return JSONUtils.getErrorJSON(ErrorReason.FAILED_DELETE_DASHBOARD);
	}

	public String saveManualIM(Long userId, Long dashboardSettingId, Long dashboardId, Long manualIMId, Integer imIndex, String imMessage)
	{
		ManualIM manualIM = new ManualIM();
		if (manualIMId != null)
		{
			dashboardService.findManualIM(manualIMId);
		}
		User user = userService.getUser(userId);
		DashboardSettings dashboardSetting = dashboardService.getDashboardSettings(dashboardSettingId);
		manualIM = ModelUtils.entityForManualIM(manualIM, user, dashboardSetting, imIndex, imMessage);
		try
		{
			dashboardService.saveManualIM(manualIM);
		}
		catch (Exception e)
		{
			logger.debug("Error saving manual IM.");
			return JSONUtils.getErrorJSON(ErrorReason.FAILED_SAVING_MANUAL_IM);
		}
		if (manualIM.getId() != null)
		{
			this.setDashboardAsUpdated(userId, dashboardId);
			UserDashboardView userDashboard = dashboardService.findUserDashboard(dashboardId);
			return JSONUtils.getMessageJSON(JSONMessages.SUCCESS_SAVING_MANUAL_IM, userDashboard);
		}
		return JSONUtils.getErrorJSON(ErrorReason.FAILED_SAVING_MANUAL_IM);
	}

	public String bookmarkDashboardForUser(Long userId, Long dashboardId)
	{
		ArrayList<UserDashboardView> bookmarks = dashboardService.getAllBookmarkedDashboardsForUser(userId);
		for (int i = 0; i < bookmarks.size(); i++)
		{
			if (bookmarks.get(i).getId() == dashboardId)
			{
				return JSONUtils.getErrorJSON(ErrorReason.DASHBOARD_ALREADY_BOOKMARKED);
			}
		}
		SharedDashboards bookmark = new SharedDashboards();
		bookmark.setUser(userService.getUser(userId));
		bookmark.setDashboard(dashboardService.searchUserDashboard(dashboardId));
		bookmark.setIsUpdated(Boolean.FALSE);
		if (dashboardService.saveUserBookmark(bookmark))
		{
			return JSONUtils.getMessageJSON(JSONMessages.SUCCESS_BOOKMARKING_DASHBOARD, null);
		}
		return JSONUtils.getErrorJSON(ErrorReason.FAILED_BOOKMARKING_DASHBOARD);
	}

	public String deleteManualIM(Long userId, Long dashboardId, Long manualIMId)
	{
		ManualIM manualIM = dashboardService.findManualIM(manualIMId);
		if (manualIM != null && manualIM.getUser().getId() == userId)
		{
			if (dashboardService.deleteManualIM(manualIM))
			{
				return JSONUtils.getMessageJSON(JSONMessages.SUCCESS_DELETING_MANUAL_IM, dashboardService.findUserDashboard(dashboardId));
			}
			else
			{
				return JSONUtils.getErrorJSON(ErrorReason.FAILED_DELETING_MANUAL_IM);
			}
		}
		else if (manualIM != null && manualIM.getUser().getId() != userId)
		{
			return JSONUtils.getErrorJSON(ErrorReason.CANT_DELETE_OTHER_USERS_MANUAL_IM);
		}
		else
		{
			return JSONUtils.getErrorJSON(ErrorReason.FAILED_DELETING_MANUAL_IM);
		}
	}

	public void setDashboardAsUpdated(Long userId, Long dashboardId)
	{
		ArrayList<SharedDashboards> sharedDashboards = dashboardService.getAllSharedDashboardsForDashboardId(dashboardId);
		for (int i = 0; i < sharedDashboards.size(); i++)
		{
			SharedDashboards temp = sharedDashboards.get(i);
			if (temp.getUser().getId() != userId)
			{
				temp.setIsUpdated(Boolean.TRUE);
				dashboardService.saveUserBookmark(temp);
			}
		}
		UserDashboard dashboard = dashboardService.searchUserDashboard(dashboardId);
		if (dashboard != null && dashboard.getUser().getId() != userId)
		{
			dashboard.setIsUpdated(Boolean.TRUE);
			dashboardService.saveUserDashboard(dashboard);
		}
	}

	public void setDashboardAsSeen(Long userId, Long dashboardId)
	{
		UserDashboard dashboard = dashboardService.searchUserDashboard(dashboardId);
		if (dashboard.getUser().getId() == userId)
		{
			dashboard.setIsUpdated(Boolean.FALSE);
			dashboardService.saveUserDashboard(dashboard);
		}
		else
		{
			SharedDashboards sharedDashboard = dashboardService.getBookmarkedDashboardForUser(userId, dashboardId);
			if (sharedDashboard != null)
			{
				sharedDashboard.setIsUpdated(Boolean.FALSE);
				dashboardService.saveUserBookmark(sharedDashboard);
			}
		}
	}
}