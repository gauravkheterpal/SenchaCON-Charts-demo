var settingsController;
Ext.define('SenchaCon2013Demo.controller.Settings', {
	extend : 'Ext.app.Controller',
	xtype: 'settingscontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
			'fourPanelLayout': 'fourpanellayout',
			'settingsPanel': 'settingspanel',
			'globalSettingsPanel': 'globalsettingspanel',
			'settingsButton': 'button[id=settingsbutton]',
			'globalSettingsButton': 'button[id=globalsettingsbutton]',
			'databaseSetting': 'selectfield[id=databaseselectfield]',
			'graphTitleSetting': 'textfield[label=Graph Title:]',
			'xAxisSetting': 'selectfield[label=X-Axis:]',
			'yAxisSetting': 'selectfield[label=Y-Axis:]',
			'groupBySetting': 'selectfield[label=Group By:]',
			'granularitySetting': 'selectfield[label=Granularity:]',
			'accumulateSetting': 'selectfield[label=Accumulate:]',
			'numberActivePanelsSetting': 'selectfield[id=activepanelsfield]',
			'chartTypeSetting': 'selectfield[label=Chart Type:]',
			'startDateSetting': 'datepickerfield[label=Start Date:]',
			'endDateSetting': 'datepickerfield[label=End Date:]',
			'interestingMomentsSetting': 'selectfield[label=Interesting Moments:]',
			'replaySpeedSettings': 'selectfield[id=replayspeedsetting]',
			'imType3Setting': 'selectfield[id=imtype3setting]',
			'imType4Setting': 'selectfield[id=imtype4setting]',
			'imType1Setting': 'selectfield[id=imtype1setting]',
			'imType2Setting': 'selectfield[id=imtype2setting]',
			'doneButtonSettings': 'button[id=settingsdonebutton]',
			'cancelButtonSettings': 'button[id=settingscancelbutton]',
			'clearPanelSettings': 'button[id=clearpanelbutton]',
			'doneButtonGlobalSettings': 'button[id=globalsettingsdonebutton]',
			'cancelButtonGlobalSettings': 'button[id=globalsettingscancelbutton]',
			'clearCacheButtonGlobalSettings': 'button[id=clearcachebuttonglobalsettings]',
			'addChart1Settings': 'button[id=chart1Button]',
			'addChart2Settings': 'button[id=chart2Button]',
			'addChart3Settings': 'button[id=chart3Button]',
			'addChart4Settings': 'button[id=chart4Button]',	
			'filterSetting': 'selectfield[id=filtersettingtoggle]',
			'replayCommentsSetting': 'selectfield[id=replaycommentstogglefield]',
		},
		control: {
			'settingsButton' : {
				tap : 'showSettingsPanel'				
			},
			'globalSettingsButton' : {
				tap : 'showGlobalSettingsPanel'				
			},			
			'addChart1Settings' : {
				tap : 'showSettingsPanel1'
			},			
			'addChart2Settings' : {
				tap : 'showSettingsPanel2'
			},			
			'addChart3Settings' : {
				tap : 'showSettingsPanel3'
			},			
			'addChart4Settings' : {
				tap : 'showSettingsPanel4'
			},			
			'doneButtonGlobalSettings': {
				tap: 'doneGlobalSettingsPanel'
			},
			'cancelButtonGlobalSettings': {
				tap: 'cancelGlobalSettingsPanel'
			},			
			'doneButtonSettings': {
				tap: 'hideSettingsPanel'
			},
			'cancelButtonSettings': {
				tap: 'cancelSettingsPanel'
			},
			'clearCacheButtonGlobalSettings': {
				tap: 'clearLocalCache'
			},
			'clearPanelSettings': {
				tap: 'clearPanelSettingsStore'
			},
			'chartTypeSetting': {
				change: 'manageDimensions'
			},
			'yAxisSetting': {
				change: 'manageFieldValueChangeForyAxisField'
			},
			'xAxisSetting': {
				change: 'manageFieldValueChangeForxAxisField'
			},
		},
	},
	
	launch: function() {	
		settingsController = this;
		SenchaCon2013Demo.app.GranularityFieldStore = [
		                     					 	{text: 'None Defined', value: 'none'},
		                    						{text: 'Hourly', value: 'Hourly'},
		                    						{text: 'Daily', value: 'Daily'},
		                    						{text: 'Weekly', value: 'Weekly'},
		                    						{text: 'Monthly', value: 'Monthly'}
		                    					];	
	},
	
	showSettingsPanel1: function() {
		this.getApplication().getController('Main').setFocusOnPanel1();
		this.showSettingsPanel();
		//this.manageDimensions();
	},
	
	showSettingsPanel2: function() {
		this.getApplication().getController('Main').setFocusOnPanel2();
		this.showSettingsPanel();
		//this.manageDimensions();
	},
	
	showSettingsPanel3: function() {
		this.getApplication().getController('Main').setFocusOnPanel3();
		this.showSettingsPanel();
		//this.manageDimensions();
	},
	
	showSettingsPanel4: function() {
		this.getApplication().getController('Main').setFocusOnPanel4();
		this.showSettingsPanel();
		//this.manageDimensions();
	},
	
	manageDimensions: function() {	
		var selectedPanel = SenchaCon2013Demo.app.currentActivePanelIndex;
		var dataFieldValues = SenchaCon2013Demo.app.EmptyFieldStore;
		var categoryFieldValues = SenchaCon2013Demo.app.EmptyFieldStore;
		var categoryFieldValuesWithTime = SenchaCon2013Demo.app.EmptyFieldStore;
		var granularityFieldValues = SenchaCon2013Demo.app.GranularityFieldStore;
		if (SenchaCon2013Demo.app.PanelDataFieldStore[selectedPanel] != undefined){
			dataFieldValues = SenchaCon2013Demo.app.PanelDataFieldStore[selectedPanel];
		}
		if (SenchaCon2013Demo.app.PanelCategoryFieldStore[selectedPanel] != undefined){
			categoryFieldValues = SenchaCon2013Demo.app.PanelCategoryFieldStore[selectedPanel]
		}
		if (SenchaCon2013Demo.app.PanelCategoryFieldStoreWithTime[selectedPanel] != undefined){
			categoryFieldValuesWithTime = SenchaCon2013Demo.app.PanelCategoryFieldStoreWithTime[selectedPanel];
		}		
		this.getGranularitySetting().setOptions(granularityFieldValues);
		//this.getGranularitySetting().setValue('None');
		switch(this.getChartTypeSetting().getValue()) {
		case 'scatter':
			this.getGroupBySetting().show('fadeIn');
			//this.getAccumulateSetting().show('fadeIn');
			this.getXAxisSetting().setLabel('X-Axis:');
			this.getYAxisSetting().show('fadeIn');
			this.getGroupBySetting().hide();
			this.getGroupBySetting().setValue('none');
			this.getXAxisSetting().setOptions(dataFieldValues);
			this.getYAxisSetting().setOptions(dataFieldValues);
			break;
		case 'horizontalbar':
			this.getGroupBySetting().show('fadeIn');
			//this.getAccumulateSetting().show('fadeIn');
			this.getYAxisSetting().show('fadeIn');
			this.getXAxisSetting().setLabel('X-Axis:');
			this.getXAxisSetting().setOptions(dataFieldValues);
			this.getYAxisSetting().setOptions(categoryFieldValuesWithTime);
			this.getGroupBySetting().setOptions(categoryFieldValues);
			break;
		case 'verticalbar':
			this.getGroupBySetting().show('fadeIn');
			//this.getAccumulateSetting().show('fadeIn');
			this.getXAxisSetting().setLabel('X-Axis:');
			this.getYAxisSetting().show('fadeIn');
			this.getYAxisSetting().setOptions(dataFieldValues);
			this.getXAxisSetting().setOptions(categoryFieldValuesWithTime);
			this.getGroupBySetting().setOptions(categoryFieldValues);
			break;
		case 'line':
			this.getGroupBySetting().show('fadeIn');
			//this.getAccumulateSetting().show('fadeIn');
			this.getXAxisSetting().setLabel('X-Axis:');
			this.getYAxisSetting().show('fadeIn');
			this.getYAxisSetting().setOptions(dataFieldValues);
			this.getXAxisSetting().setOptions(categoryFieldValuesWithTime);
			this.getGroupBySetting().setOptions(categoryFieldValues);
			break;
		case 'area':
			this.getGroupBySetting().show('fadeIn');
			//this.getAccumulateSetting().show('fadeIn');
			this.getXAxisSetting().setLabel('X-Axis:');
			this.getYAxisSetting().show('fadeIn');
			this.getYAxisSetting().setOptions(dataFieldValues);
			this.getXAxisSetting().setOptions(categoryFieldValuesWithTime);
			this.getGroupBySetting().setOptions(categoryFieldValues);
			break;
		case 'pie':
			this.getGroupBySetting().show('fadeIn');
			//this.getAccumulateSetting().hide('fadeOut');
			this.getXAxisSetting().setLabel('Data Value:');
			this.getYAxisSetting().hide('fadeOut');
			this.getGroupBySetting().setOptions(categoryFieldValues);
			this.getXAxisSetting().setOptions(dataFieldValues);				
			break;
		case 'gauge':
			this.getGroupBySetting().hide('fadeOut');
			this.getAccumulateSetting().hide('fadeOut');
			this.getXAxisSetting().setLabel('Data Value:');
			this.getYAxisSetting().hide('fadeOut');
			//this.getGroupBySetting().setOptions(categoryFieldValues);
			this.getXAxisSetting().setOptions(dataFieldValues);				
			break;
		case 'radar':
			this.getGroupBySetting().show('fadeIn');
			//this.getAccumulateSetting().hide('fadeOut');
			this.getXAxisSetting().setLabel('Data Value:');
			this.getYAxisSetting().hide('fadeOut');
			this.getGroupBySetting().setOptions(categoryFieldValues);
			this.getXAxisSetting().setOptions(dataFieldValues);
			break;
		case 'none':
			this.getGroupBySetting().show('fadeIn');
			//this.getAccumulateSetting().hide('fadeOut');
			this.getXAxisSetting().setLabel('Data Value:');
			this.getYAxisSetting().hide('fadeOut');
			this.getGroupBySetting().setOptions(SenchaCon2013Demo.app.EmptyFieldStore);
			this.getXAxisSetting().setOptions(SenchaCon2013Demo.app.EmptyFieldStore);	
			this.getYAxisSetting().setOptions(SenchaCon2013Demo.app.EmptyFieldStore);
		}
		//this.getGroupBySetting().setValue('none');
		//this.getXAxisSetting().setValue('none');
		//this.getYAxisSetting().setValue('none');
	},
	
	manageFieldValueChangeForyAxisField: function(){
		/*if (this.getDatabaseSetting().getValue() == 'informance'){
			if (this.getChartTypeSetting().getValue() == 'scatter'){
				if(this.getXAxisSetting().getValue() == 'none' || this.getXAxisSetting().getValue == this.getYAxisSetting().getValue){
					if(this.getYAxisSetting().getValue() == 'UptimeHours') {
						this.getXAxisSetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Downtime Hours', value: 'DowntimeHours'}, {text: 'Downtime Events', value: 'DowntimeEvents'}, {text: 'Production Counts', value: 'ProductionCounts'}]);
					} else if (this.getYAxisSetting().getValue() == 'DowntimeHours') {
						this.getXAxisSetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Uptime Hours', value: 'UptimeHours'}, {text: 'Downtime Events', value: 'DowntimeEvents'}, {text: 'Production Counts', value: 'ProductionCounts'}]);
					} else if (this.getYAxisSetting().getValue() == 'DowntimeEvents') {
						this.getXAxisSetting().setOptions([{text: 'None Defined', value: 'none'},{text: 'Uptime Hours', value: 'UptimeHours'}, {text: 'Downtime Hours', value: 'DowntimeHours'}, {text: 'Production Counts', value: 'ProductionCounts'}]);
					} else if (this.getYAxisSetting().getValue() == 'ProductionCounts') {
						this.getXAxisSetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Uptime Hours', value: 'UptimeHours'}, {text: 'Downtime Hours', value: 'DowntimeHours'}, {text: 'Downtime Events', value: 'DowntimeEvents'},]);
					}
				} 
			} else if (this.getChartTypeSetting().getValue() == 'horizontalbar') {
				if(this.getYAxisSetting().getValue() == 'reason') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'User', value: 'User'}, {text: 'SKU', value: 'Part'}, {text: 'Set', value: 'set'}]);
				} else if(this.getYAxisSetting().getValue() == 'User') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Reason', value: 'reason'}, {text: 'SKU', value: 'Part'}, {text: 'Set', value: 'set'}]);
				} else if (this.getYAxisSetting().getValue() == 'Part') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'User', value: 'User'}, {text: 'Reason', value: 'reason'}, {text: 'Set', value: 'set'}]);
				} else if(this.getYAxisSetting().getValue() == 'set') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'User', value: 'User'}, {text: 'SKU', value: 'Part'}, {text: 'Reason', value: 'reason'}]);
				}
			}
		} else if (this.getDatabaseSetting().getValue() == 'infinity_qs'){
			if (this.getChartTypeSetting().getValue() == 'scatter'){
				if(this.getXAxisSetting().getValue() == 'none' || this.getXAxisSetting().getValue == this.getYAxisSetting().getValue){
					//Need to Discuss.
				} 
			} else if (this.getChartTypeSetting().getValue() == 'horizontalbar') {
				if(this.getYAxisSetting().getValue() == 'Process') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'User', value: 'User'}, {text: 'SKU', value: 'Part'}, {text: 'Test', value: 'Test'}, {text: 'Quality Performance Metrics', value: 'Quality Performance Metrics'}]);
				} else if(this.getYAxisSetting().getValue() == 'User') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Process', value: 'Process'}, {text: 'SKU', value: 'Part'}, {text: 'Test', value: 'Test'}, {text: 'Quality Performance Metrics', value: 'Quality Performance Metrics'}]);
				} else if (this.getYAxisSetting().getValue() == 'Part') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Process', value: 'Process'}, {text: 'User', value: 'User'}, {text: 'Test', value: 'Test'}, {text: 'Quality Performance Metrics', value: 'Quality Performance Metrics'}]);
				} else if(this.getYAxisSetting().getValue() == 'Test') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Process', value: 'Process'}, {text: 'User', value: 'User'}, {text: 'SKU', value: 'Part'}, {text: 'Quality Performance Metrics', value: 'Quality Performance Metrics'}]);
				} else if(this.getYAxisSetting().getValue() == 'Quality Performance Metrics') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Process', value: 'Process'}, {text: 'User', value: 'User'}, {text: 'SKU', value: 'Part'}, {text: 'Test', value: 'Test'}]);
				}
			} else if (this.getChartTypeSetting().getValue() == 'line' || this.getChartTypeSetting().getValue() == 'verticalbar') {
				if(this.getYAxisSetting().getValue() == 'Percent Out Of Spec'){
					this.getXAxisSetting().setOptions(SenchaCon2013Demo.app.InfinityQSCategoryFieldStoreWithTimeWithoutQPM);
					this.getAccumulateSetting().hide('fadeOut');
					this.getAccumulateSetting().setValue('Off');
				} else if(this.getYAxisSetting().getValue() == 'Process Events'){
					this.getXAxisSetting().setOptions(SenchaCon2013Demo.app.InfinityQSCategoryFieldStoreWithTime);
					this.getAccumulateSetting().show('fadeIn');
				}
			}
		}*/
		this.manageGranularitySettings();
	},
	
	manageFieldValueChangeForxAxisField: function(){
		/*if (this.getDatabaseSetting().getValue() == 'informance'){
			if(this.getChartTypeSetting().getValue() == 'scatter') {
				if(this.getYAxisSetting().getValue() == 'none' || this.getXAxisSetting().getValue() == this.getYAxisSetting().getValue()) {
					if(this.getXAxisSetting().getValue() == 'UptimeHours') {
						this.getYAxisSetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Downtime Hours', value: 'DowntimeHours'}, {text: 'Downtime Events', value: 'DowntimeEvents'}, {text: 'Production Counts', value: 'ProductionCounts'}]);
					} else if (this.getXAxisSetting().getValue() == 'DowntimeHours') {
						this.getYAxisSetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Uptime Hours', value: 'UptimeHours'}, {text: 'Downtime Events', value: 'DowntimeEvents'}, {text: 'Production Counts', value: 'ProductionCounts'}]);
					} else if (this.getXAxisSetting().getValue() == 'DowntimeEvents') {
						this.getYAxisSetting().setOptions([{text: 'None Defined', value: 'none'},{text: 'Uptime Hours', value: 'UptimeHours'}, {text: 'Downtime Hours', value: 'DowntimeHours'}, {text: 'Production Counts', value: 'ProductionCounts'}]);
					} else if (this.getXAxisSetting().getValue() == 'ProductionCounts') {
						this.getYAxisSetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Uptime Hours', value: 'UptimeHours'}, {text: 'Downtime Hours', value: 'DowntimeHours'}, {text: 'Downtime Events', value: 'DowntimeEvents'},]);
					}
				}
			} else if (this.getChartTypeSetting().getValue() == 'line' || this.getChartTypeSetting().getValue() == 'verticalbar') {
				if(this.getXAxisSetting().getValue() == 'reason') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'User', value: 'User'}, {text: 'SKU', value: 'Part'}, {text: 'Set', value: 'set'}]);
				} else if(this.getXAxisSetting().getValue() == 'User') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Reason', value: 'reason'}, {text: 'SKU', value: 'Part'}, {text: 'Set', value: 'set'}]);
				} else if (this.getXAxisSetting().getValue() == 'Part') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'User', value: 'User'}, {text: 'Reason', value: 'reason'}, {text: 'Set', value: 'set'}]);
				} else if(this.getXAxisSetting().getValue() == 'set') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'User', value: 'User'}, {text: 'SKU', value: 'Part'}, {text: 'Reason', value: 'reason'}]);
				}
			}
		} else if (this.getDatabaseSetting().getValue() == 'infinity_qs'){
			if (this.getChartTypeSetting().getValue() == 'scatter'){
				if(this.getXAxisSetting().getValue() == 'none' || this.getXAxisSetting().getValue == this.getYAxisSetting().getValue){
					//Need to Discuss.
				} 
			} else if (this.getChartTypeSetting().getValue() == 'line' || this.getChartTypeSetting().getValue() == 'verticalbar') {
				if(this.getXAxisSetting().getValue() == 'Process') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'User', value: 'User'}, {text: 'SKU', value: 'Part'}, {text: 'Test', value: 'Test'}, {text: 'Quality Performance Metrics', value: 'Quality Performance Metrics'}]);
				} else if(this.getXAxisSetting().getValue() == 'User') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Process', value: 'Process'}, {text: 'SKU', value: 'Part'}, {text: 'Test', value: 'Test'}, {text: 'Quality Performance Metrics', value: 'Quality Performance Metrics'}]);
				} else if (this.getXAxisSetting().getValue() == 'Part') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Process', value: 'Process'}, {text: 'User', value: 'User'}, {text: 'Test', value: 'Test'}, {text: 'Quality Performance Metrics', value: 'Quality Performance Metrics'}]);
				} else if(this.getXAxisSetting().getValue() == 'Test') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Process', value: 'Process'}, {text: 'User', value: 'User'}, {text: 'SKU', value: 'Part'}, {text: 'Quality Performance Metrics', value: 'Quality Performance Metrics'}]);
				} else if(this.getXAxisSetting().getValue() == 'Quality Performance Metrics') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Process', value: 'Process'}, {text: 'User', value: 'User'}, {text: 'SKU', value: 'Part'}, {text: 'Test', value: 'Test'}]);
				}
			} else if (this.getChartTypeSetting().getValue() == 'horizontalbar') {
				if(this.getXAxisSetting().getValue() == 'Percent Out Of Spec'){
					this.getYAxisSetting().setOptions(SenchaCon2013Demo.app.InfinityQSCategoryFieldStoreWithTimeWithoutQPM);
					this.getAccumulateSetting().hide('fadeOut');
					this.getAccumulateSetting().setValue('Off');
				} else if(this.getXAxisSetting().getValue() == 'Process Events'){
					this.getYAxisSetting().setOptions(SenchaCon2013Demo.app.InfinityQSCategoryFieldStoreWithTime);
					this.getAccumulateSetting().show('fadeIn');
				}
			}
		}*/	
		this.manageGranularitySettings();
	},	
		
	manageGranularitySettings: function() {
		if(this.getChartTypeSetting().getValue() == 'horizontalbar') {
			var categoryField = this.getYAxisSetting().getValue();
		}
		else if(this.getChartTypeSetting().getValue() == 'verticalbar' || this.getChartTypeSetting().getValue() == 'line') {
			var categoryField = this.getXAxisSetting().getValue();
		}
		switch(categoryField) {
			case 'Hour': this.getGranularitySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Hourly', value: 'Hourly'}]); break;
			case 'Date': this.getGranularitySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Hourly', value: 'Hourly'}, {text: 'Daily', value: 'Daily'}]); break;
			case 'DayOfWeek': this.getGranularitySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Hourly', value: 'Hourly'}, {text: 'Daily', value: 'Daily'}]); break;
			case 'Week': this.getGranularitySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Hourly', value: 'Hourly'}, {text: 'Daily', value: 'Daily'}, {text: 'Weekly', value: 'Weekly'}]); break;
			case 'Month': this.getGranularitySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Hourly', value: 'Hourly'}, {text: 'Daily', value: 'Daily'}, {text: 'Weekly', value: 'Weekly'}, {text: 'Monthly', value: 'Monthly'}]); break;					
		}
	},
	
	showGlobalSettingsPanel: function(){
		this.getNumberActivePanelsSetting().setValue(SenchaCon2013Demo.app.numberActivePanels);
		this.getInterestingMomentsSetting().setValue(SenchaCon2013Demo.app.interestingMoments);
		this.getReplayCommentsSetting().setValue(SenchaCon2013Demo.app.replayCommentsSetting);
		this.getReplaySpeedSettings().setValue(SenchaCon2013Demo.app.replaySpeed);
		this.getImType3Setting().setValue(SenchaCon2013Demo.app.interestingMomentType3Setting);
		this.getImType4Setting().setValue(SenchaCon2013Demo.app.interestingMomentType4Setting);
		this.getImType1Setting().setValue(SenchaCon2013Demo.app.interestingMomentType1Setting);
		this.getImType2Setting().setValue(SenchaCon2013Demo.app.interestingMomentType2Setting);
		this.getGlobalSettingsPanel().show();
	},
	
	showSettingsPanel: function() {		
		this.getApplication().getController('DatabaseTable').getAllDatabaseTables();		
	},
	
	configureSettingsPanel: function(){		
		this.getDatabaseSetting().setOptions(SenchaCon2013Demo.app.DatabaseTableFieldStore);
		this.getDatabaseSetting().setValue(SenchaCon2013Demo.app.databaseSetting[SenchaCon2013Demo.app.currentActivePanelIndex]);
		this.getApplication().getController('DatabaseTable').getDatabaseTableFieldsForDatabase();		
	},
	
	showConfiguredSettingsPanel: function(){
		this.getChartTypeSetting().setValue(SenchaCon2013Demo.app.chartTypes[SenchaCon2013Demo.app.currentActivePanelIndex]);
		this.manageDimensions();
		//this.getGraphTitleSetting().setValue(SenchaCon2013Demo.app.graphTitle[SenchaCon2013Demo.app.currentActivePanelIndex]);
		this.getXAxisSetting().setValue(SenchaCon2013Demo.app.xs[SenchaCon2013Demo.app.currentActivePanelIndex]);
		this.getYAxisSetting().setValue(SenchaCon2013Demo.app.ys[SenchaCon2013Demo.app.currentActivePanelIndex]);		
		this.getGranularitySetting().setValue(SenchaCon2013Demo.app.granularities[SenchaCon2013Demo.app.currentActivePanelIndex]);
		this.getGroupBySetting().setValue(SenchaCon2013Demo.app.groupBys[SenchaCon2013Demo.app.currentActivePanelIndex]);
		this.getStartDateSetting().setValue(SenchaCon2013Demo.app.startDate[SenchaCon2013Demo.app.currentActivePanelIndex]);
		this.getEndDateSetting().setValue(SenchaCon2013Demo.app.currentEndDate[SenchaCon2013Demo.app.currentActivePanelIndex]);		
		this.getAccumulateSetting().setValue(SenchaCon2013Demo.app.accumulate[SenchaCon2013Demo.app.currentActivePanelIndex]);		
		this.getFilterSetting().setValue(SenchaCon2013Demo.app.filterToggle[SenchaCon2013Demo.app.currentActivePanelIndex]);
		this.getSettingsPanel().show();		
		this.manageGranularitySettings();
	},

	cancelSettingsPanel: function() {
		this.getSettingsPanel().hide(true);
	},
	
	cancelGlobalSettingsPanel: function() {
		this.getGlobalSettingsPanel().hide(true);
	},
	
	clearLocalCache: function(){
		if (developerMode){
			try{ 
				for (i=0; i<=localStorage.length-1;)  
				{  
					key = localStorage.key(i);
					if (key.indexOf('get') == '0'){
						localStorage.removeItem(key);
					} else {
						i++;
					}
				}
			} catch(err){
				
			}
			//window.location.reload(true);
			this.getGlobalSettingsPanel().hide(true);
		} else {
			localStorage.clear();
			resetSettings();
		}		
	},
	
	clearPanelSettingsStore: function(){
		clearStore('UserSettings' + SenchaCon2013Demo.app.currentActivePanelIndex);
		Ext.get('chart'+SenchaCon2013Demo.app.currentActivePanelIndex+'Button').show();
		Ext.get('chart'+SenchaCon2013Demo.app.currentActivePanelIndex+'Image').show();
		var obj = SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		SenchaCon2013Demo.app.panelSettings[SenchaCon2013Demo.app.currentActivePanelIndex] = '';
        SenchaCon2013Demo.app.panelData[SenchaCon2013Demo.app.currentActivePanelIndex] = '';
        var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
        Ext.ComponentQuery.query('addchartpanel'+chartIndex)[0].setHtml('');
		Ext.ComponentQuery.query('selectfield[label=Accumulate:]')[0].setValue('Off');
		this.manageDimensions();
		this.getApplication().getController('Main').checkForConfiguredGraphPanels();
	},
	
	doneGlobalSettingsPanel: function(){
		SenchaCon2013Demo.app.interestingMoments = this.getInterestingMomentsSetting().getValue();
		SenchaCon2013Demo.app.replayCommentsSetting = this.getReplayCommentsSetting().getValue();
		SenchaCon2013Demo.app.numberActivePanels = this.getNumberActivePanelsSetting().getValue();
		SenchaCon2013Demo.app.replaySpeed = this.getReplaySpeedSettings().getValue();
		var newIMType3Setting = this.getImType3Setting().getValue();
		var newIMType4Setting = this.getImType4Setting().getValue();
		var newIMType1Setting = this.getImType1Setting().getValue();
		var newIMType2Setting = this.getImType2Setting().getValue();
		var imSettingChanged = false;
		if (newIMType3Setting != SenchaCon2013Demo.app.interestingMomentType3Setting ||
				newIMType4Setting != SenchaCon2013Demo.app.interestingMomentType4Setting ||
				newIMType1Setting != SenchaCon2013Demo.app.interestingMomentType1Setting ||
				newIMType2Setting != SenchaCon2013Demo.app.interestingMomentType2Setting){
			imSettingChanged = true;
		}
		SenchaCon2013Demo.app.interestingMomentType3Setting = this.getImType3Setting().getValue();
		SenchaCon2013Demo.app.interestingMomentType4Setting = this.getImType4Setting().getValue();
		SenchaCon2013Demo.app.interestingMomentType1Setting = this.getImType1Setting().getValue();
		SenchaCon2013Demo.app.interestingMomentType2Setting = this.getImType2Setting().getValue();
		var globalStore;
		globalStore = [{'NumberOfPanels': this.getNumberActivePanelsSetting().getValue(),'InterestingMoments': this.getInterestingMomentsSetting().getValue(),'ReplayComments':this.getReplayCommentsSetting().getValue(),'ReplaySpeed': this.getReplaySpeedSettings().getValue(), 'InterestingMomentType3Setting': this.getImType3Setting().getValue(), 'InterestingMomentType1Setting': this.getImType1Setting().getValue(), 'InterestingMomentType2Setting': this.getImType2Setting().getValue(), 'InterestingMomentType4Setting': this.getImType4Setting().getValue()}];
		Ext.getStore('GlobalSettingsStore').setData(globalStore);
		Ext.getStore('GlobalSettingsStore').sync();
		this.getApplication().getController('Main').changePanels();
		this.updateChartAnimationSettings();
		this.cancelGlobalSettingsPanel();
		if (imSettingChanged){
			Ext.Msg.alert('SenchaCon2013Demo &#153;', 'Interesting Moment settings has been changed. Dashboard will need to be recalculated.', function(){
				for ( i = 1; i <= SenchaCon2013Demo.app.numberActivePanels; i++ ){
					//SenchaCon2013Demo.app.XmaxReceived[i] = false;
					//SenchaCon2013Demo.app.YmaxReceived[i] = false;
					SenchaCon2013Demo.app.chartCreated[i] = false;
				}
				settingsController.getApplication().getController('Main').loadStores();
				//refreshPage();
			});
		}
	},
	
	updateChartAnimationSettings: function(){
		SenchaCon2013Demo.app.animateSpeed = SenchaCon2013Demo.app.replaySpeed - 100;
		for(i = 0; i < SenchaCon2013Demo.app.newChart.length; i++) {
			if(SenchaCon2013Demo.app.newChart[i] != null) {
				var series = SenchaCon2013Demo.app.newChart[i].getSeries();
				for (j = 0; j < series.length; j++){
					series[j].setAnimate(
							{
								duration: SenchaCon2013Demo.app.animateSpeed, 
								delay: SenchaCon2013Demo.app.animateSpeed/2, 
								easing: 'ease'
							}
						);
				}
				SenchaCon2013Demo.app.newChart[i].setAnimate(
						{
							duration: SenchaCon2013Demo.app.animateSpeed, 
							delay: SenchaCon2013Demo.app.animateSpeed/2, 
							easing: 'ease'
						}
					);
			}
		}
	},
	
	showSettingsErrorMessage: function(){
		Ext.Msg.alert('Error', 'Please select all required fields to proceed.', Ext.emptyFn);
	},

	hideSettingsPanel: function() {		
		$starttime = new Date();
		if(this.getChartTypeSetting().getValue() == 'scatter' && (this.getXAxisSetting().getValue() == 'none' || this.getYAxisSetting().getValue() == 'none' || this.getGranularitySetting().getValue() == 'none'))
		{
			this.showSettingsErrorMessage();
		}
		else if((this.getChartTypeSetting().getValue() == 'line' || this.getChartTypeSetting().getValue() == 'verticalbar') && (this.getXAxisSetting().getValue() == 'none' || this.getYAxisSetting().getValue() == 'none' || this.getGranularitySetting().getValue() == 'none'))
		{
			this.showSettingsErrorMessage();
		}		
		else if (this.getChartTypeSetting().getValue() == 'pie' &&(this.getXAxisSetting().getValue() == 'none' || this.getGroupBySetting().getValue() == 'none' || this.getGranularitySetting().getValue() == 'none'))
		{
			this.showSettingsErrorMessage();	
		}
		else if (this.getChartTypeSetting().getValue() == 'horizontalbar' &&(this.getXAxisSetting().getValue() == 'none' || this.getYAxisSetting().getValue() == 'none' || this.getGranularitySetting().getValue() == 'none'))
		{
			this.showSettingsErrorMessage();
		}
		else 
		{
			if(SenchaCon2013Demo.app.currentActivePanelIndex ==1 )
			{
				Ext.get('chart1Button').hide();
				Ext.get('chart1Image').hide();
			}			
			else if (SenchaCon2013Demo.app.currentActivePanelIndex ==2)
			{
				Ext.get('chart2Button').hide();
				Ext.get('chart2Image').hide();
			}			
			else if(SenchaCon2013Demo.app.currentActivePanelIndex ==3)
			{
				Ext.get('chart3Button').hide();
				Ext.get('chart3Image').hide();
			}
			else 
			{
				Ext.get('chart4Button').hide();
				Ext.get('chart4Image').hide();
			}
			SenchaCon2013Demo.app.databaseSetting[SenchaCon2013Demo.app.currentActivePanelIndex] = this.getDatabaseSetting().getValue();
			SenchaCon2013Demo.app.filterToggle[SenchaCon2013Demo.app.currentActivePanelIndex] = this.getFilterSetting().getValue();
			SenchaCon2013Demo.app.graphTitle[SenchaCon2013Demo.app.currentActivePanelIndex] = this.getGraphTitleSetting().getValue();
			SenchaCon2013Demo.app.xs[SenchaCon2013Demo.app.currentActivePanelIndex] = this.getXAxisSetting().getValue();
			SenchaCon2013Demo.app.ys[SenchaCon2013Demo.app.currentActivePanelIndex] = this.getYAxisSetting().getValue();
			SenchaCon2013Demo.app.granularities[SenchaCon2013Demo.app.currentActivePanelIndex] = this.getGranularitySetting().getValue();
			SenchaCon2013Demo.app.chartTypes[SenchaCon2013Demo.app.currentActivePanelIndex] = this.getChartTypeSetting().getValue();
			SenchaCon2013Demo.app.groupBys[SenchaCon2013Demo.app.currentActivePanelIndex] = this.getGroupBySetting().getValue();
			SenchaCon2013Demo.app.startDate[SenchaCon2013Demo.app.currentActivePanelIndex] = new Date(this.getStartDateSetting().getValue());
			SenchaCon2013Demo.app.currentStartDate[SenchaCon2013Demo.app.currentActivePanelIndex] = new Date(this.getStartDateSetting().getValue());
			SenchaCon2013Demo.app.currentDate[SenchaCon2013Demo.app.currentActivePanelIndex] = new Date(this.getStartDateSetting().getValue());
			SenchaCon2013Demo.app.currentEndDate[SenchaCon2013Demo.app.currentActivePanelIndex] = new Date(this.getEndDateSetting().getValue());
			SenchaCon2013Demo.app.accumulate[SenchaCon2013Demo.app.currentActivePanelIndex] = this.getAccumulateSetting().getValue();
			SenchaCon2013Demo.app.XmaxReceived[SenchaCon2013Demo.app.currentActivePanelIndex] = false;
			SenchaCon2013Demo.app.YmaxReceived[SenchaCon2013Demo.app.currentActivePanelIndex] = false;
			switch(SenchaCon2013Demo.app.granularities[SenchaCon2013Demo.app.currentActivePanelIndex]) {
				case 'Hourly':
					SenchaCon2013Demo.app.valueGranularities[SenchaCon2013Demo.app.currentActivePanelIndex] = 1;
					break;
				case 'Daily':
					SenchaCon2013Demo.app.valueGranularities[SenchaCon2013Demo.app.currentActivePanelIndex] = 2;
					break;
				case 'Weekly':
					SenchaCon2013Demo.app.valueGranularities[SenchaCon2013Demo.app.currentActivePanelIndex] = 3;
					break;
				case 'Monthly':
					SenchaCon2013Demo.app.valueGranularities[SenchaCon2013Demo.app.currentActivePanelIndex] = 4;
					break;
			}		 
			var difference = SenchaCon2013Demo.app.currentEndDate[SenchaCon2013Demo.app.currentActivePanelIndex] - SenchaCon2013Demo.app.currentStartDate[SenchaCon2013Demo.app.currentActivePanelIndex];
			var days = Math.floor(difference / (1000 * 60 * 60 * 24));		
			var datedifference =  SenchaCon2013Demo.app.currentStartDate[SenchaCon2013Demo.app.currentActivePanelIndex] - SenchaCon2013Demo.app.currentEndDate[SenchaCon2013Demo.app.currentActivePanelIndex];
			var datedays = Math.floor(datedifference / (1000 * 60 * 60 * 24));		
			if(datedays > 0)
			{
				Ext.Msg.alert('Check Dates','Start date must be earlier than end date.');
			}		
			else if (days <= 0 && SenchaCon2013Demo.app.granularities[SenchaCon2013Demo.app.currentActivePanelIndex] != 'Hourly')
			{			 
				Ext.Msg.alert('Check Dates','Start and end date can not be same');
			}		
			else 
			{				
				var tempStore;
				tempStore = [{'Database': this.getDatabaseSetting().getValue(),'GraphTitle': this.getGraphTitleSetting().getValue(),'XAxis':this.getXAxisSetting().getValue(),'YAxis':this.getYAxisSetting().getValue(),'GroupBy':this.getGroupBySetting().getValue(),'Granularity':this.getGranularitySetting().getValue(),'ChartType':this.getChartTypeSetting().getValue(),'StartDate':this.getStartDateSetting().getValue(),'EndDate':this.getEndDateSetting().getValue(),'InterestingMoments':this.getInterestingMomentsSetting().getValue(),'Accumulate':this.getAccumulateSetting().getValue(),'FilterToggle':this.getFilterSetting().getValue()}];
				Ext.getStore('UserSettings'+SenchaCon2013Demo.app.currentActivePanelIndex).setData(tempStore);
				Ext.getStore('UserSettings'+SenchaCon2013Demo.app.currentActivePanelIndex).sync();
				this.getSettingsPanel().hide(true);
				SenchaCon2013Demo.app.dateSet[SenchaCon2013Demo.app.currentActivePanelIndex] = true;
				showLoadingMask();
				this.getApplication().getController('Main').chartSetUp();
			}
		}
	},	
});