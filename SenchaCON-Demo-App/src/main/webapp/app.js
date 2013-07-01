Ext.Loader.setConfig({enabled:true});
Ext.Loader.setPath({
    'Ext.ux': 'lib'
});
Ext.application({
	name : 'ReplayAnalytics',
	stores : ['GlobalSettingsStore','UserSettings1','UserSettings2','UserSettings3','UserSettings4','TempStore'],
	controllers: ['Admin', 'DatabaseTable', 'Pie','LineBar','Scatter','VerticalBar','HorizontalBar', 'Main', 'Login', 'GlobalSync', 'Help', 'Filter', 'InterestingMoment', 'Playback', 'Settings'],
	views: ['Main', 'AdminPanel', 'DataSourceUploadPanel', 'DataSourceDeletePanel', 'DataSourceManagePanel', 'DataSourceConfigurationPanel', 'DataSourceTypeSelectionPanel', 'LoginScreen', 'SaveDashboardDialog', 'ShareDashboardDialog', 'ManualIMDialog', 'ManualIMCallout', 'FilterFieldsPanel', 'FilterListPanel', 'DashboardGridRow', 'AddDashboardThumbnail', 'DashboardThumbnail', 'DashboardScreen', 'InterestingMomentGraphPanel', 'InterestingMomentFoundDialog', 'SettingsPanel','GlobalSettingsPanel','AddChartPanel1','AddChartPanel2','AddChartPanel3','AddChartPanel4','HelpPanel','SettingsHelpPanel','PlaybackHelpPanel','GlobalSyncHelpPanel','ChartHelpPanel','GestureHelpPanel','SliderHelpPanel', 'Slider5'],
    launch : function() {
    	this.publicMode = false;
    	this.uniqueDashboardId = undefined;
    	this.isHelpPanelShowing = false;
    	this.creatingGraphs = false;
    	
    	this.sessionCookie = 'ReplayAnalyticsUserSession'; 
    	this.panelSettings = new Array();
    	for (i = 0; i < 5; i++){
    		this.panelSettings[i] = '';
		}
    	this.panelData = new Array();
    	for (i = 0; i < 5; i++){
    		this.panelData[i] = '';
		}
    	this.currentUploadingDataSource = undefined;
    	this.currentDashboard = undefined;
    	this.currentUserSession = undefined;
    	this.userDashboards = new Array();
    	this.userDashboardDetails = new Array();
    	this.isDashboardEditMode = false;
    	this.isDashboardShareMode = false;
    	this.currentManualIMs = new Array();
    	this.currentChartManualIMs = new Array();
    	this.globalManualIMs = new Array();
    	
    	this.CachedDatabaseTables = new Array();
    	
    	this.GranularityFieldStore = undefined;
    	this.DatabaseTableFieldStore = undefined;
    	
    	this.EmptyFieldStore = [{text: 'None Defined', value: 'none'}];
    	this.PanelDataFieldStore = new Array();
    	this.PanelCategoryFieldStore = new Array();
    	this.PanelCategoryFieldStoreWithTime = new Array();
    	
    	this.InformanceDataFieldStore = undefined;
    	this.InformanceCategoryFieldStore = undefined;
    	this.InformanceCategoryFieldStoreWithTime = undefined;
    	this.InformanceGroupByFieldStore = undefined;
    	this.InformanceFilterFieldsStore = undefined;
    	this.InfinityQSDataFieldStore = undefined;
    	this.InfinityQSCategoryFieldStore = undefined;
    	this.InfinityQSCategoryFieldStoreWithTime = undefined;
    	this.InfinityQSGroupByFieldStore = undefined;
    	this.InfinityQSFilterFieldsStore = undefined;
    	
    	this.InformanceUserFilter = new Array();
    	this.InformanceReasonFilter = new Array();
    	this.InformanceSetFilter = new Array();
    	this.InformanceSKUFilter = new Array();
    	this.InfinityQSUserFilter = new Array();
    	this.InfinityQSProcessFilter = new Array();
    	this.InfinityQSQPMFilter = new Array();
    	this.InfinityQSSKUFilter = new Array();
    	this.InfinityQSTestFilter = new Array();
    	this.currentSelectedFilterCategory = '';
    	this.filterListSelectUnselectFlag = true;
    	
    	this.databaseSetting = new Array();
    	this.filterToggle = new Array();
		this.Panels = new Array();
		this.charts = new Array();
		this.fullStores = new Array();
		this.instanceStores = new Array();
		this.sliders = new Array();
		this.loadIndex = 1;		
		this.isChartConfigured = new Array();
		for (i = 0; i < 5; i++){
			this.isChartConfigured[i] = false;
		}		
		this.groupByBarLabels =  new Array();

		//Slider fine granularity
		this.differentialMultiplier = new Array();
		for(i = 0; i < 6; i++) {
			this.differentialMultiplier[i] = 1;
		}
		
		this.redirect = false;
		this.redirectUrl = undefined;
		
		this.startDate = new Array(); //Static start date, stays consistent as start date of range
		this.currentDate = new Array(); //Dynamic date that increments through each time step in ajax requests
		this.currentStartDate = new Array(); //Dynamic start date for global sync, changes as global synchronization arrays are generated.
		this.currentEndDate = new Array(); //Static end date, stays consistent as end date of range
		this.dateSet = new Array(); //Boolean for if date has been set for specific panel.
		this.globalDateArray = new Array(); //Array for storing date data type of chart date range
		//Initialize dateSet:
		for(i = 0; i < 6; i++) {
			this.dateSet[i] = false;
		}
		//Initialize size by data array (NOT IMPLEMENTED YET):
		this.sizeByDataRecieved = new Array();
		for(i = 0; i < 6; i++) {
			this.sizeByDataRecieved[i] = false;
		}
		this.responseCount = 0; //Keeps track of number of responses received from size by requests (not implemented yet)
		this.sizeByStoreGlobal = new Array();
		this.sizeByStore = new Array();

		this.chartCreated = new Array(); //Boolean array for if chart has been created.
		this.newChart = new Array(); //Array for actual charts
		this.lastPlaybackAction = undefined;

		//User Selected Setting Arrays (Used for managing settings panel values and for storing selected settings)
		this.granularities = new Array();
		this.valueGranularities = new Array(); //Numeric value for granularities: Hourly = 1, Daily = 2, Weekly = 3, Monthly = 4
		this.chartTypes = new Array();
		this.xs = new Array(); //X axis
		this.ys = new Array(); //Y axis
		this.groupBys = new Array();
		this.sizeBys = new Array();
		this.interestingMoments = 'Off';
		this.replayCommentsSetting = 'Off';
		this.graphTitle = new Array();
		this.accumulate = new Array();
		this.numberActivePanels = '4'; // SEtting for how many panels are currently displayed on the app
		
		this.dataFieldValues = new Array();
		this.categoryFieldValues = new Array();

		//InterestingMoments Variables
		this.interestingMomentsPoints = new Array();
		this.previousActivePanelIndex = '1';
		this.interestingMomentType3Setting = '-1';
		this.interestingMomentType4Setting = '-1';
		this.interestingMomentType1Setting = '-1';
		this.interestingMomentType2Setting = '-1';
		this.isIMGraphRunning = false;
		this.interestingMomentGraphIndex = 5;
		this.activeIMPointIndex = 0;
		this.allIMPointsAtCurrentIndex = new Array();

		this.playbackTasks = new Array();
		//Other internal working variables(Slider positions)
		this.waitvariables = new Array();
		this.currentPositions = new Array();
		this.minimumPositions = new Array();
		this.maximumPositions = new Array();

		// Single Global Setting Non Array Variables
		this.currentActivePanelIndex = 1; //Keeps track of which panel is currently selected/tapped
		this.replaySpeed = 2000; //Value for speed of playing charts
		this.graphMaxValueMargin = .10;
		this.animateSpeed = this.replaySpeed - 100;

		// Global Sync arrays and settings:
		this.globalStartDate; //Start date for global sync
		this.globalEndDate; //End date for global sync
		this.firstGlobalDate; //Boolean, keeps track of if global sync iteration is for the first chart
		this.chartIsRunning = new Array(); //Boolean for if chart is running
		this.chartIsPaused = new Array(); //Boolean for if chart is paused
		this.globalSyncPressed = false; //Boolean for global sync mode
		this.nullSearchReturnedTrue = false; //boolean for if search through next date returned a chart
		this.globalSliderValue; // Value for global slider position
		this.finishCall; //Boolean for if search was called from a chart that just finished its date range
		this.chartSection = new Array(); //parallel array to chart lengths array, stores the chart numbers associated to its length of time steps
		this.chartLengths = new Array(); //parallel array to chart section array, stores the length of time steps associated with the running chart numbers
		//initialize chart lengths:
		for(i = 0; i < 20; i++) {
			this.chartLengths[i] = 0;
		}
		this.globalindex = 0; //Keeps track of the index of the chartsection and chartlengths current index
		this.chartsFinished = 0; //Keeps track of the number of finished charts during synchronization
		this.numberActiveCharts = 0; //Keeps track of the number of charts on the screen (always 4)
		this.chartValue = new Array(); //Keeps track of value read by jsonstore
		this.chartFinished = new Array(); //Boolean for if chart is finished during synchronization
		for(i = 0; i < 6; i++) {
			this.chartFinished[i] = false;
		}	
		this.initialPosition = new Array(); //Boolean if chart is in initial position during synchronization
		//Initialize initialposition array:
		for(i = 0; i < 6; i++) {
			this.initialPosition[i] = true; //Initialized as true
		}
		//Initialize chartisRunning array:
		for(i = 1; i < 6; i++) {
			this.chartIsRunning[i] = false;
		};
		this.globalSyncChartPositions = new Array();
		for(i = 1; i < 6; i++) {
			this.globalSyncChartPositions[i] = new Array();
		};
		//arrays for fixing order:

		//this.groupByValueBar = new Array();
		this.groupByValueBar = ["groupByBar1", "groupByBar2", "groupByBar3", "groupByBar4", "Other"];
		this.fixOrder = new Array(); //String that is passed to servlet, fixes order of 1st dimension category field

		//max axes arrays:
		this.Xmax = new Array(); //Max value for x axis
		this.Ymax = new Array(); //Max value for y axis
		this.XmaxReceived = new Array(); //Boolean for if x max data is received
		this.YmaxReceived = new Array(); //Boolean for if y max data is received
		
		this.setDefaultValues = function(){
			for(i = 0; i < 6; i++) {
				this.databaseSetting[i] = 'none';
				this.filterToggle[i] = 'Off';
				this.granularities[i] = 'Daily';
				this.valueGranularities[i] = 2;
				this.chartTypes[i] = 'none';
				this.xs[i] = 'none';
				this.ys[i] = 'none';
				this.chartCreated[i] = false;
				this.startDate[i] = new Date();
				this.startDate[i].setHours(0,0,0,0);
				this.startDate[i].setFullYear(this.startDate[i].getFullYear() - 2);
				this.startDate[i].setDate(this.startDate[i].getDate() - 3);
				this.currentEndDate[i] = new Date();
				this.currentEndDate[i].setHours(0,0,0,0);
				this.currentEndDate[i].setFullYear(this.currentEndDate[i].getFullYear() - 2);
				this.accumulate[i] = 'Off';
				this.graphTitle[i] = 'Title';
				this.sizeBys[i] = 'none';
				this.groupBys[i] = 'none';
				this.XmaxReceived[i] = false;
				this.YmaxReceived[i] = false;
				this.InformanceUserFilter[i] = '';
		    	this.InformanceReasonFilter[i] = '';
		    	this.InformanceSetFilter[i] = '';
		    	this.InformanceSKUFilter[i] = '';
		    	this.InfinityQSUserFilter[i] = '';
		    	this.InfinityQSProcessFilter[i] = '';
		    	this.InfinityQSQPMFilter[i] = '';
		    	this.InfinityQSSKUFilter[i] = '';
		    	this.InfinityQSTestFilter[i] = '';
		    	this.filterListSelectUnselectFlag = true;
			}
			this.interestingMoments = 'Off';
			this.replayCommentsSetting = 'Off';
			this.jsonstore = new Array(); 
			this.interestingMomentType3Setting = '-1';
			this.interestingMomentType4Setting = '-1';
			this.interestingMomentType1Setting = '-1';
			this.interestingMomentType2Setting = '-1';
			this.numberActivePanels = '4';
			this.currentActivePanelIndex = 1;
			this.replaySpeed = 3200;
			this.interestingMomentsPoints = new Array();
			this.allIMPointsAtCurrentIndex = new Array();
			this.currentManualIMs = new Array();
	    	this.currentChartManualIMs = new Array();
	    	this.panelData = new Array();
	    	this.panelSettings = new Array();
	    	this.dataFieldValues = new Array();
			this.categoryFieldValues = new Array();
	    	this.currentSelectedFilterCategory = '';
		};
		this.setDefaultValues();
		
		//Load views:
		Ext.get('loading').setVisible(false);
		
		Ext.Viewport.add({
    	   	xtype: 'loginscreen'
    	});
		
		Ext.Viewport.add({
    	   	xtype: 'dashboardscreen'
    	});
		
		Ext.Viewport.add({
    	   	xtype: 'replayanalyticsmain'
    	});
		
		Ext.Viewport.add({
			xtype: 'interestingmomentgraphpanel'
		});
    	
		Ext.Viewport.add({
			xtype: 'imfounddialog'
		});
		
		Ext.Viewport.add({
			xtype: 'manualimcallout'
		});
		
		Ext.Viewport.add({
			xtype: 'savedashboarddialog'
		});
		
		Ext.Viewport.add({
			xtype: 'sharedashboarddialog'
		});
		
		Ext.Viewport.add({
			xtype: 'manualimdialog'
		});		
		
		Ext.Viewport.add({
			xtype: 'settingspanel'
		});
		Ext.Viewport.add({
			xtype: 'globalsettingspanel'
		});
		Ext.Viewport.add({
    	   	xtype: 'helppanel'
    	});
		Ext.Viewport.add({
    	   	xtype: 'settingshelppanel'
    	});
		Ext.Viewport.add({
    	   	xtype: 'playbackhelppanel'
    	});
		Ext.Viewport.add({
    	   	xtype: 'globalsynchelppanel'
    	});
		Ext.Viewport.add({
    	   	xtype: 'charthelppanel'
    	});
		Ext.Viewport.add({
    	   	xtype: 'sliderhelppanel'
    	});
    	Ext.Viewport.add({
    	   	xtype: 'gesturehelppanel'
    	});
    	Ext.Viewport.add({
    	   	xtype: 'filterfieldspanel'
    	});
    	Ext.Viewport.add({
    	   	xtype: 'filterlistpanel'
    	});
    	Ext.Viewport.add({
    	   	xtype: 'adminpanel'
    	});
    	Ext.Viewport.add({
    	   	xtype: 'datasourceuploadpanel'
    	});
    	Ext.Viewport.add({
    	   	xtype: 'datasourceconfigurationpanel'
    	});
    	Ext.Viewport.add({
    	   	xtype: 'datasourcetypeselectionpanel'
    	});
    	Ext.Viewport.add({
    	   	xtype: 'datasourcemanagepanel'
    	});
    	Ext.Viewport.add({
    	   	xtype: 'datasourcedeletepanel'
    	});
    	
    	for (i = 0; i < 6; i++){
			this.sliders[i] = Ext.ComponentQuery.query('slider'+i)[0];
		}
		
		for(i = 0; i < 6; i++) {
			this.maximumPositions[i] = Ext.ComponentQuery.query('slider'+i)[0].getMaxValue();
			this.minimumPositions[i] = Ext.ComponentQuery.query('slider'+i)[0].getMinValue();
			this.currentPositions[i] = this.minimumPositions[i];
		}
	}
});