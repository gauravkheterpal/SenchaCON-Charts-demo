package com.metacube.senchacon.demoapp.view.manager;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.metacube.senchacon.demoapp.common.enums.FilterType;
import com.metacube.senchacon.demoapp.model.entity.DashboardSettings;
import com.metacube.senchacon.demoapp.model.entity.FilterSettings;
import com.metacube.senchacon.demoapp.service.DashboardService;
import com.metacube.senchacon.demoapp.view.model.DashboardSettingsView;
import com.metacube.senchacon.demoapp.view.model.UserDashboardView;

@Component
public class FilterManager
{
	final static Logger logger = LoggerFactory.getLogger(FilterManager.class);

	@Autowired
	private DashboardService dashboardService;
	
	public void saveDashboardFilters(Long dashboardId, String[] informanceUserFilter, String[] informanceReasonFilter, String[] informanceSetFilter, 
			String[] informancePartFilter, String[] infinityQSUserFilter, String[] infinityQSTestFilter, String[] infinityQSPartFilter, 
			String[] infinityQSQPMFilter, String[] infinityQSProcessFilter)
	{
		UserDashboardView dashboard = dashboardService.findUserDashboard(dashboardId);
		if (dashboard != null)
		{
			try
			{
				if (dashboard.getPanel1Settings() != null)
				{
					saveFilterForPanelSettings(dashboard.getPanel1Settings(), informanceUserFilter[1], informanceReasonFilter[1], 
							informanceSetFilter[1], informancePartFilter[1], infinityQSUserFilter[1], infinityQSTestFilter[1], 
							infinityQSPartFilter[1], infinityQSQPMFilter[1], infinityQSProcessFilter[1]);
				}
			}
			catch(Exception e)
			{	
				e.printStackTrace();
			}
			try
			{
				if (dashboard.getPanel2Settings() != null)
				{
					saveFilterForPanelSettings(dashboard.getPanel2Settings(), informanceUserFilter[2], informanceReasonFilter[2], 
							informanceSetFilter[2], informancePartFilter[2], infinityQSUserFilter[2], infinityQSTestFilter[2], 
							infinityQSPartFilter[2], infinityQSQPMFilter[2], infinityQSProcessFilter[2]);
				}
			}
			catch(Exception e)
			{	
				e.printStackTrace();
			}
			try
			{
				if (dashboard.getPanel3Settings() != null)
				{
					saveFilterForPanelSettings(dashboard.getPanel3Settings(), informanceUserFilter[3], informanceReasonFilter[3], 
							informanceSetFilter[3], informancePartFilter[3], infinityQSUserFilter[3], infinityQSTestFilter[3], 
							infinityQSPartFilter[3], infinityQSQPMFilter[3], infinityQSProcessFilter[3]);
				}
			}
			catch(Exception e)
			{	
				e.printStackTrace();
			}
			try
			{
				if (dashboard.getPanel4Settings() != null)
				{
					saveFilterForPanelSettings(dashboard.getPanel4Settings(), informanceUserFilter[4], informanceReasonFilter[4], 
							informanceSetFilter[4], informancePartFilter[4], infinityQSUserFilter[4], infinityQSTestFilter[4], 
							infinityQSPartFilter[4], infinityQSQPMFilter[4], infinityQSProcessFilter[4]);
				}
			}
			catch(Exception e)
			{
				e.printStackTrace();
			}
		}
	}
	
	public void saveFilterForPanelSettings(DashboardSettingsView panelSettings, String informanceUserFilter, String informanceReasonFilter, 
			String informanceSetFilter, String informancePartFilter, String infinityQSUserFilter, String infinityQSTestFilter, 
			String infinityQSPartFilter, String infinityQSQPMFilter, String infinityQSProcessFilter)
	{
		DashboardSettings dashboardSetting = dashboardService.getDashboardSettings(panelSettings.getId());
		try
		{
			informanceUserFilter = URLDecoder.decode(informanceUserFilter, "UTF-8");
			informanceReasonFilter = URLDecoder.decode(informanceReasonFilter, "UTF-8");
			informanceSetFilter = URLDecoder.decode(informanceSetFilter, "UTF-8");
			informancePartFilter = URLDecoder.decode(informancePartFilter, "UTF-8");
			
			infinityQSUserFilter = URLDecoder.decode(infinityQSUserFilter, "UTF-8");
			infinityQSTestFilter = URLDecoder.decode(infinityQSTestFilter, "UTF-8");
			infinityQSPartFilter = URLDecoder.decode(infinityQSPartFilter, "UTF-8");
			infinityQSQPMFilter = URLDecoder.decode(infinityQSQPMFilter, "UTF-8");
			infinityQSProcessFilter = URLDecoder.decode(infinityQSProcessFilter, "UTF-8");
		}
		catch (UnsupportedEncodingException e)
		{
			e.printStackTrace();
		}
		if (panelSettings.getFilterSettings().size() > 0)
		{
			for (int i = 0; i < panelSettings.getFilterSettings().size(); i++)
			{
				FilterSettings filter = dashboardService.getFilterSettingsForId(panelSettings.getFilterSettings().get(i).getId());
				if (filter != null)
				{
					if (filter.getFilterType().equalsIgnoreCase(FilterType.INFORMANCE_USER_FILTER.toString()) && verifyString(informanceUserFilter))
					{
						updateFilterSettingsEntity(informanceUserFilter, filter);
						informanceUserFilter = "";
					}
					if (filter.getFilterType().equalsIgnoreCase(FilterType.INFORMANCE_PART_FILTER.toString()) && verifyString(informancePartFilter))
					{
						updateFilterSettingsEntity(informancePartFilter, filter);
						informancePartFilter = "";
					}
					if (filter.getFilterType().equalsIgnoreCase(FilterType.INFORMANCE_REASON_FILTER.toString()) && verifyString(informanceReasonFilter))
					{
						updateFilterSettingsEntity(informanceReasonFilter, filter);
						informanceReasonFilter = "";
					}
					if (filter.getFilterType().equalsIgnoreCase(FilterType.INFORMANCE_SET_FILTER.toString()) && verifyString(informanceSetFilter))
					{
						updateFilterSettingsEntity(informanceSetFilter, filter);
						informanceSetFilter = "";
					}
					
					if (filter.getFilterType().equalsIgnoreCase(FilterType.INFINITY_QS_USER_FILTER.toString()) && verifyString(infinityQSUserFilter))
					{
						updateFilterSettingsEntity(infinityQSUserFilter, filter);
						infinityQSUserFilter = "";
					}
					if (filter.getFilterType().equalsIgnoreCase(FilterType.INFINITY_QS_PART_FILTER.toString()) && verifyString(infinityQSPartFilter))
					{
						updateFilterSettingsEntity(infinityQSPartFilter, filter);
						infinityQSPartFilter = "";
					}
					if (filter.getFilterType().equalsIgnoreCase(FilterType.INFINITY_QS_PROCESS_FILTER.toString()) && verifyString(infinityQSProcessFilter))
					{
						updateFilterSettingsEntity(infinityQSProcessFilter, filter);
						infinityQSProcessFilter = "";
					}
					if (filter.getFilterType().equalsIgnoreCase(FilterType.INFINITY_QS_QPM_FILTER.toString()) && verifyString(infinityQSQPMFilter))
					{
						updateFilterSettingsEntity(infinityQSQPMFilter, filter);
						infinityQSQPMFilter = "";
					}
					if (filter.getFilterType().equalsIgnoreCase(FilterType.INFINITY_QS_TEST_FILTER.toString()) && verifyString(infinityQSTestFilter))
					{
						updateFilterSettingsEntity(infinityQSTestFilter, filter);
						infinityQSTestFilter = "";
					}
				}
			}
		}		
		
		if (verifyString(informanceUserFilter))
		{
			saveFilterSettingsEntity(dashboardSetting, informanceUserFilter, FilterType.INFORMANCE_USER_FILTER);
		}
		if (verifyString(informancePartFilter))
		{
			saveFilterSettingsEntity(dashboardSetting, informancePartFilter, FilterType.INFORMANCE_PART_FILTER);
		}
		if (verifyString(informanceReasonFilter))
		{
			saveFilterSettingsEntity(dashboardSetting, informanceReasonFilter, FilterType.INFORMANCE_REASON_FILTER);
		}
		if (verifyString(informanceSetFilter))
		{
			saveFilterSettingsEntity(dashboardSetting, informanceSetFilter, FilterType.INFORMANCE_SET_FILTER);
		}
		
		if (verifyString(infinityQSUserFilter))
		{
			saveFilterSettingsEntity(dashboardSetting, infinityQSUserFilter, FilterType.INFINITY_QS_USER_FILTER);
		}
		if (verifyString(infinityQSPartFilter))
		{
			saveFilterSettingsEntity(dashboardSetting, infinityQSPartFilter, FilterType.INFINITY_QS_PART_FILTER);
		}
		if (verifyString(infinityQSProcessFilter))
		{
			saveFilterSettingsEntity(dashboardSetting, infinityQSProcessFilter, FilterType.INFINITY_QS_PROCESS_FILTER);
		}
		if (verifyString(infinityQSQPMFilter))
		{
			saveFilterSettingsEntity(dashboardSetting, infinityQSQPMFilter, FilterType.INFINITY_QS_QPM_FILTER);
		}
		if (verifyString(infinityQSTestFilter))
		{
			saveFilterSettingsEntity(dashboardSetting, infinityQSTestFilter, FilterType.INFINITY_QS_TEST_FILTER);
		}		
	}
	
	public void saveFilterSettingsEntity(DashboardSettings settings, String filterSettings, FilterType filterType)
	{
		FilterSettings filter = new FilterSettings();
		filter.setFilterType(filterType.toString());
		try
		{
			filter.setFilterSettings(URLDecoder.decode(filterSettings, "UTF-8"));
		}
		catch (UnsupportedEncodingException e)
		{
			e.printStackTrace();
			filter.setFilterSettings(filterSettings);
		}
		filter.setDateCreated(new Date());
		filter.setDateModified(new Date());
		filter.setDashboardSetting(settings);
		dashboardService.saveFilterSettings(filter);
	}
	
	public void updateFilterSettingsEntity(String filterSettingString, FilterSettings filter)
	{
		filter.setFilterSettings(filterSettingString);
		filter.setDateModified(new Date());
		dashboardService.saveFilterSettings(filter);
	}
	
	public Boolean verifyString(String string)
	{
		if (string != null && !string.equalsIgnoreCase("") && !string.equalsIgnoreCase("\"\""))
		{
			return Boolean.TRUE;
		}
		return Boolean.FALSE;
	}
}
