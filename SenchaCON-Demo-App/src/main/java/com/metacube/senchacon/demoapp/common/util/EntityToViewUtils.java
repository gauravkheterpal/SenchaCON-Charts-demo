package com.metacube.senchacon.demoapp.common.util;

import java.util.ArrayList;

import com.metacube.senchacon.demoapp.model.entity.DashboardSettings;
import com.metacube.senchacon.demoapp.model.entity.DataSources;
import com.metacube.senchacon.demoapp.model.entity.DatabaseTable;
import com.metacube.senchacon.demoapp.model.entity.DatabaseTableFields;
import com.metacube.senchacon.demoapp.model.entity.FilterSettings;
import com.metacube.senchacon.demoapp.model.entity.GlobalSettings;
import com.metacube.senchacon.demoapp.model.entity.ManualIM;
import com.metacube.senchacon.demoapp.model.entity.Role;
import com.metacube.senchacon.demoapp.model.entity.SharedDashboards;
import com.metacube.senchacon.demoapp.model.entity.User;
import com.metacube.senchacon.demoapp.model.entity.UserDashboard;
import com.metacube.senchacon.demoapp.model.entity.UserSession;
import com.metacube.senchacon.demoapp.view.model.DashboardSettingsView;
import com.metacube.senchacon.demoapp.view.model.DataSourcesView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;
import com.metacube.senchacon.demoapp.view.model.FilterSettingsView;
import com.metacube.senchacon.demoapp.view.model.GlobalSettingsView;
import com.metacube.senchacon.demoapp.view.model.ManualIMView;
import com.metacube.senchacon.demoapp.view.model.RoleView;
import com.metacube.senchacon.demoapp.view.model.SharedDashboardsView;
import com.metacube.senchacon.demoapp.view.model.UserDashboardView;
import com.metacube.senchacon.demoapp.view.model.UserSessionView;
import com.metacube.senchacon.demoapp.view.model.UserView;

public class EntityToViewUtils
{
	public static FilterSettingsView filterSettingsEntityToView(FilterSettings entity)
	{
		if (entity != null)
		{
			FilterSettingsView view = new FilterSettingsView();
			view.setId(entity.getId());
			view.setDateCreated(entity.getDateCreated());
			view.setDateModified(entity.getDateModified());
			view.setFilterSettings(entity.getFilterSettings());
			view.setFilterType(entity.getFilterType());
			view.setDashboard(dashboardSettingsEntityToView(entity.getDashboardSetting()));
			return view;
		}
		return null;
	}
	
	public static DashboardSettingsView dashboardSettingsEntityToView(DashboardSettings entity)
	{
		if (entity != null)
		{
			DashboardSettingsView view = new DashboardSettingsView();
			view.setId(entity.getId());
			view.setChartType(entity.getChartType());
			view.setAccumulate(entity.getAccumulate());
			view.setDatabaseName(entity.getDatabaseName());
			view.setFilterToggle(entity.getFilterToggle());
			view.setDataString(entity.getDataString());
			view.setDateCreated(entity.getDateCreated());
			view.setDateModified(entity.getDateModified());
			view.setEndDate(entity.getEndDate());
			view.setGranularity(entity.getGranularity());
			view.setGraphTitle(entity.getGraphTitle());
			view.setGroupBy(entity.getGroupBy());
			view.setSettingsString(entity.getSettingsString());
			view.setStartDate(entity.getStartDate());
			view.setxAxis(entity.getxAxis());
			view.setyAxis(entity.getyAxis());
			return view;
		}
		return null;
	}
	
	public static UserSessionView userSessionEntityToView(UserSession entity)
	{
		if (entity != null)
		{
			UserSessionView view = new UserSessionView();
			view.setId(entity.getId());
			view.setUser(userEntityToView(entity.getUser()));
			view.setAccessKey(entity.getAccessKey());
			view.setExpiryDate(entity.getExpiryDate());
			return view;
		}
		return null;
	}
	
	public static ArrayList<ManualIMView> manualIMEntityToView(ArrayList<ManualIM> entityList)
	{
		ArrayList<ManualIMView> viewList = new ArrayList<ManualIMView>();
		if (entityList != null && entityList.size() > 0)
		{			
			for (int i = 0; i < entityList.size(); i++)
			{
				viewList.add(manualIMEntityToView(entityList.get(i)));
			}			
		}
		return viewList;
	}
	
	public static ArrayList<FilterSettingsView> filterSettingsEntityToView(ArrayList<FilterSettings> entityList)
	{
		ArrayList<FilterSettingsView> viewList = new ArrayList<FilterSettingsView>();
		if (entityList != null && entityList.size() > 0)
		{			
			for (int i = 0; i < entityList.size(); i++)
			{
				viewList.add(filterSettingsEntityToView((entityList.get(i))));
			}			
		}
		return viewList;
	}
	
	public static ArrayList<SharedDashboardsView> sharedDashboardsEntityToView(ArrayList<SharedDashboards> entityList)
	{
		ArrayList<SharedDashboardsView> viewList = new ArrayList<SharedDashboardsView>();
		if (entityList != null && entityList.size() > 0)
		{			
			for (int i = 0; i < entityList.size(); i++)
			{
				viewList.add(sharedDashboardsEntityToView(entityList.get(i)));
			}
		}
		return viewList;
	}
	
	public static ArrayList<UserDashboardView> userDashboardEntityToView(ArrayList<UserDashboard> entityList)
	{
		ArrayList<UserDashboardView> viewList = new ArrayList<UserDashboardView>();
		if (entityList != null && entityList.size() > 0)
		{			
			for (int i = 0; i < entityList.size(); i++)
			{
				viewList.add(userDashboardEntityToView(entityList.get(i)));
			}			
		}
		return viewList;
	}
	
	public static ArrayList<DatabaseTableFieldsView> databaseTableFieldsEntityToView(ArrayList<DatabaseTableFields> entityList)
	{
		ArrayList<DatabaseTableFieldsView> viewList = new ArrayList<DatabaseTableFieldsView>();
		if (entityList != null && entityList.size() > 0)
		{			
			for (int i = 0; i < entityList.size(); i++)
			{
				viewList.add(databaseTableFieldsEntityToView(entityList.get(i)));
			}			
		}
		return viewList;
	}
	
	public static ArrayList<DatabaseTableView> databaseTableEntityToView(ArrayList<DatabaseTable> entityList)
	{
		ArrayList<DatabaseTableView> viewList = new ArrayList<DatabaseTableView>();
		if (entityList != null && entityList.size() > 0)
		{			
			for (int i = 0; i < entityList.size(); i++)
			{
				viewList.add(databaseTableEntityToView(entityList.get(i)));
			}			
		}
		return viewList;
	}
	
	public static ArrayList<DataSourcesView> dataSourcesEntityToView(ArrayList<DataSources> entityList)
	{
		ArrayList<DataSourcesView> viewList = new ArrayList<DataSourcesView>();
		if (entityList != null && entityList.size() > 0)
		{			
			for (int i = 0; i < entityList.size(); i++)
			{
				viewList.add(dataSourcesEntityToView(entityList.get(i)));
			}			
		}
		return viewList;
	}
	
	public static SharedDashboardsView sharedDashboardsEntityToView(SharedDashboards entity)
	{
		if (entity != null)
		{
			SharedDashboardsView view = new SharedDashboardsView();
			view.setId(entity.getId());
			view.setUser(userEntityToView(entity.getUser()));
			entity.getDashboard().setIsUpdated(entity.getIsUpdated());
			view.setDashboard(userDashboardEntityToView(entity.getDashboard()));
			view.setIsUpdated(entity.getIsUpdated());
			return view;
		}
		return null;
	}
	
	public static ManualIMView manualIMEntityToView(ManualIM entity)
	{
		if (entity != null)
		{
			ManualIMView view = new ManualIMView();
			view.setId(entity.getId());
			view.setDateCreated(entity.getDateCreated());
			view.setDateModified(entity.getDateModified());
			view.setDashboardSetting(dashboardSettingsEntityToView(entity.getDashboardSetting()));
			view.setUser(userEntityToView(entity.getUser()));
			view.setImIndex(entity.getImIndex());
			view.setImMessage(entity.getImMessage());
			return view;
		}
		return null;
	}
	
	public static UserDashboardView userDashboardEntityToView(UserDashboard entity)
	{
		if (entity != null)
		{
			UserDashboardView view = new UserDashboardView();
			view.setId(entity.getId());
			view.setDateCreated(entity.getDateCreated());
			view.setDateModified(entity.getDateModified());
			view.setDashboardTitle(entity.getDashboardTitle());
			view.setGlobalSettings(globalSettingsEntityToView(entity.getGlobalSettings()));
			view.setIsActive(entity.getIsActive());
			view.setIsShared(entity.getIsShared());
			view.setPanel1Settings(dashboardSettingsEntityToView(entity.getPanel1Settings()));
			view.setPanel2Settings(dashboardSettingsEntityToView(entity.getPanel2Settings()));
			view.setPanel3Settings(dashboardSettingsEntityToView(entity.getPanel3Settings()));
			view.setPanel4Settings(dashboardSettingsEntityToView(entity.getPanel4Settings()));
			view.setUniqueID(entity.getUniqueID());
			view.setUser(userEntityToView(entity.getUser()));
			view.setIsUpdated(entity.getIsUpdated());
			return view;
		}
		return null;
	}	
	
	public static GlobalSettingsView globalSettingsEntityToView(GlobalSettings entity)
	{
		if (entity != null)
		{
			GlobalSettingsView view = new GlobalSettingsView();
			view.setId(entity.getId());
			view.setDateCreated(entity.getDateCreated());
			view.setDateModified(entity.getDateModified());
			view.setActivePanels(entity.getActivePanels());
			view.setInterestingMomentsSetting(entity.getInterestingMomentsSetting());
			view.setReplayCommentsSetting(entity.getReplayCommentsSetting());
			view.setReplaySpeedSetting(entity.getReplaySpeedSetting());
			view.setType1IMSetting(entity.getType1IMSetting());
			view.setType2IMSetting(entity.getType2IMSetting());
			view.setType3IMSetting(entity.getType3IMSetting());
			view.setType4IMSetting(entity.getType4IMSetting());
			return view;
		}
		return null;
	}
	
	public static UserView userEntityToView(User entity)
	{
		if (entity != null)
		{
			UserView view = new UserView();
			view.setId(entity.getId());
			view.setDateCreated(entity.getDateCreated());
			view.setDateModified(entity.getDateModified());
			view.setFirstName(entity.getFirstName());
			view.setLastName(entity.getLastName());
			view.setUserName(entity.getUserName());
			view.setPassword(entity.getPassword());
			view.setIsActive(entity.getIsActive());
			view.setUserRole(roleEntityToView(entity.getUserRole()));
			return view;
		}
		return null;
	}
	
	public static RoleView roleEntityToView(Role entity)
	{
		if (entity != null)
		{
			RoleView view = new RoleView();
			view.setId(entity.getId());
			view.setRoleDescription(entity.getRoleDescription());
			view.setRoleName(entity.getRoleName());
			return view;
		}
		return null;
	}
	
	public static DatabaseTableView databaseTableEntityToView(DatabaseTable entity)
	{
		if (entity != null)
		{
			DatabaseTableView view = new DatabaseTableView();
			view.setId(entity.getId());
			view.setDateCreated(entity.getDateCreated());
			view.setDateModified(entity.getDateModified());
			view.setTableName(entity.getTableName());
			view.setName(entity.getName());
			view.setDescription(entity.getDescription());
			view.setIsActive(entity.getIsActive());
			view.setUser(userEntityToView(entity.getUser()));
			return view;
		}
		return null;
	}
	
	public static DatabaseTableFieldsView databaseTableFieldsEntityToView(DatabaseTableFields entity)
	{
		if (entity != null)
		{
			DatabaseTableFieldsView view = new DatabaseTableFieldsView();
			view.setId(entity.getId());
			view.setDateCreated(entity.getDateCreated());
			view.setDateModified(entity.getDateModified());
			view.setDatabaseTable(databaseTableEntityToView(entity.getDatabaseTable()));
			view.setDataSource(dataSourcesEntityToView(entity.getDataSource()));
			view.setDataSourceRowColumnNumber(entity.getDataSourceRowColumnNumber());
			view.setFieldName(entity.getFieldName());
			view.setFieldLabel(entity.getFieldLabel());
			view.setFieldType(entity.getFieldType());
			view.setFieldSelection(entity.getFieldSelection());
			view.setFieldCalculation(entity.getFieldCalculation());
			view.setFieldDescription(entity.getFieldDescription());
			return view;
		}
		return null;
	}
	
	public static DataSourcesView dataSourcesEntityToView(DataSources entity)
	{
		if (entity != null)
		{
			DataSourcesView view = new DataSourcesView();
			view.setId(entity.getId());
			view.setDateCreated(entity.getDateCreated());
			view.setDateModified(entity.getDateModified());
			view.setUser(userEntityToView(entity.getUser()));
			view.setDatabaseTable(databaseTableEntityToView(entity.getDatabaseTable()));
			view.setDataSourceName(entity.getDataSourceName());
			view.setDataSourceFilePath(entity.getDataSourceFilePath());
			view.setIsHeaderHorizontal(entity.getIsHeaderHorizontal());
			view.setIsProcessed(entity.getIsProcessed());
			return view;
		}
		return null;
	}
}