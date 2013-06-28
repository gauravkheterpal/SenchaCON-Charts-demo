var databaseTableController;
Ext.define('ReplayAnalytics.controller.DatabaseTable', {
	extend : 'Ext.app.Controller',
	xtype: 'databasetablecontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
			'databaseSetting': 'selectfield[id=databaseselectfield]',
			'chartTypeSetting': 'selectfield[label=Chart Type:]',
		},
		control: {
			'databaseSetting': {
				change: 'getDatabaseTableFieldsForDatabase',
			},
			
		},
	},
	
	launch: function() {
		databaseTableController = this;	
		this.getDatabaseSetting().element.on('tap', function(el) {
			databaseTableController.applyStyleForAddDatSourceOption();
		});
	},
	
	applyStyleForAddDatSourceOption: function(){
		try{
			var items = Ext.query('div div span[class=x-list-label]');
			if (items != undefined && items.length > 0 && items[0].innerHTML == '+ Import Data'){
				items[0].parentElement.parentElement.setAttribute('style','background-color: #6c9804; background-image: -webkit-linear-gradient(top, #a2e306, #7eb105 3%, #5b7f03); border: 1px solid #263501; border-top-color: #374e02; margin: 5px 53px; border-radius: 5px; width: 200px; text-align: center;');
				items[0].innerHTML = '<img src="lib/images/spreadsheet_icon.png" style="width: 20px; height: 20px;" /> Import Data';
			}			
		} catch(err){
		}		
	},
	
	getAllDatabaseTables: function(){
		if (ReplayAnalytics.app.CachedDatabaseTables.length == 0){
			showLoadingMask();
			Ext.Ajax.request({  
				url: 'getAllDatabaseTables.do',  
	            method: 'GET',
	            success: function(response){
	            	hideLoadingMask();
	        		var responseJSON = Ext.JSON.decode(response.responseText.trim());
	        		ReplayAnalytics.app.CachedDatabaseTables = responseJSON;
	        		databaseTableController.decodeDatabaseTableData(responseJSON);
	            },
	            failure: function(response) {
               		hideLoadingMask();
               		logMessage('Failure Logging in.');
               },
			});
		} else {
			databaseTableController.decodeDatabaseTableData(ReplayAnalytics.app.CachedDatabaseTables);
		}		
	},
	
	decodeDatabaseTableData: function(responseJSON){
		ReplayAnalytics.app.DatabaseTableFieldStore = new Array();
		var temp = {text: '+ Import Data', value: 'add_new_data_source'};
		ReplayAnalytics.app.DatabaseTableFieldStore.push(temp);
		temp = {text: 'None Defined', value: 'none'};
		ReplayAnalytics.app.DatabaseTableFieldStore.push(temp);
		for (var index = 0; index < responseJSON.length; index++){
			temp = {text: responseJSON[index].name, value: responseJSON[index].tableName};
			ReplayAnalytics.app.DatabaseTableFieldStore.push(temp);
		}
		this.getApplication().getController('Settings').configureSettingsPanel();
	},
	
	getDatabaseTableIdForTableName: function(tableName){
		var databaseTableId = 0;
		if (ReplayAnalytics.app.CachedDatabaseTables != undefined && ReplayAnalytics.app.CachedDatabaseTables.length > 0){
			for (var index = 0; index < ReplayAnalytics.app.CachedDatabaseTables.length; index++){
				if (ReplayAnalytics.app.CachedDatabaseTables[index].tableName == tableName){
					databaseTableId = ReplayAnalytics.app.CachedDatabaseTables[index].id;
					return databaseTableId;
				}
			}
		}
		return databaseTableId;
	},
	
	saveDatabaseTablesFieldsForDatabaseTableId: function(databaseTableId, databaseTableFieldsJSON){
		if (ReplayAnalytics.app.CachedDatabaseTables != undefined && ReplayAnalytics.app.CachedDatabaseTables.length > 0){
			for (var index = 0; index < ReplayAnalytics.app.CachedDatabaseTables.length; index++){
				if (ReplayAnalytics.app.CachedDatabaseTables[index].id == databaseTableId){
					break;
				}
			}
			ReplayAnalytics.app.CachedDatabaseTables[index].tableFields = databaseTableFieldsJSON;
		}
	},
	
	getDatabaseTablesFieldsForDatabaseTableId: function(databaseTableId){
		if (ReplayAnalytics.app.CachedDatabaseTables != undefined && ReplayAnalytics.app.CachedDatabaseTables.length > 0){
			for (var index = 0; index < ReplayAnalytics.app.CachedDatabaseTables.length; index++){
				if (ReplayAnalytics.app.CachedDatabaseTables[index].id == databaseTableId){
					return ReplayAnalytics.app.CachedDatabaseTables[index].tableFields;
				}
			}
		}
		return undefined;
	},
	
	getDatabaseTableFieldsForDatabase: function(){
		this.getChartTypeSetting().setValue('none');
		var selectedDatabaseTable = this.getDatabaseSetting().getValue();
		if (selectedDatabaseTable == 'add_new_data_source'){
			//this.getApplication().getController('Admin').showAdminPanel();
			this.getApplication().getController('Admin').showDataSourceUploadFlow();
			this.getApplication().getController('Settings').getSettingsPanel().hide();
			return;
		}
		else if (selectedDatabaseTable != 'none'){
			var databaseTableId = this.getDatabaseTableIdForTableName(selectedDatabaseTable);
			var databaseTableFieldsJSON = this.getDatabaseTablesFieldsForDatabaseTableId(databaseTableId);
			if (databaseTableFieldsJSON != undefined && databaseTableFieldsJSON != ""){
				this.decodeDatabaseTableFieldsData(databaseTableFieldsJSON);
			} else {
				showLoadingMask();
				Ext.Ajax.request({  
					url: 'getAllDatabaseTableFieldsForTable.do',  
		            method: 'POST',
		            params: {
		            	databaseTableId: databaseTableId,
		            },
		            success: function(response){
		            	hideLoadingMask();
		        		var responseJSON = Ext.JSON.decode(response.responseText.trim());
		        		databaseTableController.saveDatabaseTablesFieldsForDatabaseTableId(databaseTableId, responseJSON);
		        		databaseTableController.decodeDatabaseTableFieldsData(responseJSON);
		            },
		            failure: function(response) {
	               		hideLoadingMask();
	               		logMessage('Failure Logging in.');
	               },
				});
			}		
		}
	},
	
	decodeDatabaseTableFieldsData: function(databaseTableFieldsJSON){
		var dataFieldStore = new Array();
		var categoryFieldStore = new Array();
		var categoryFieldStoreWithTime = new Array();
		var timeFieldStore = new Array();
		var temp = {text: 'None Defined', value: 'none'};
		dataFieldStore.push(temp);
		categoryFieldStore.push(temp);
		for (var index = 0; index < databaseTableFieldsJSON.length; index++){
			temp = {text: databaseTableFieldsJSON[index].fieldLabel, value: databaseTableFieldsJSON[index].fieldName};
			if (databaseTableFieldsJSON[index].fieldType == 'DATA_FIELD'){
				dataFieldStore.push(temp);
			} else if (databaseTableFieldsJSON[index].fieldType == 'CATEGORY_FIELD'){
				categoryFieldStore.push(temp);
			} else if (databaseTableFieldsJSON[index].fieldType == 'TIME_CATEGORY_FIELD'){
				timeFieldStore.push(temp);
			}
		}
		categoryFieldStoreWithTime = categoryFieldStore;
		for (var index = 0; index < timeFieldStore.length; index++){
			categoryFieldStoreWithTime.push(timeFieldStore[index]);
		}
		
		var selectedPanel = ReplayAnalytics.app.currentActivePanelIndex;
		ReplayAnalytics.app.PanelDataFieldStore[selectedPanel] = dataFieldStore;
		ReplayAnalytics.app.PanelCategoryFieldStore[selectedPanel] = categoryFieldStore;
		ReplayAnalytics.app.PanelCategoryFieldStoreWithTime[selectedPanel] = categoryFieldStoreWithTime;
	},
	
	cacheDatabaseTableDataForDashboard: function(databasesToCache){
		var distinctDatabases = new Array();
		for (var index = 0; index < databasesToCache.length; index++){
			if (index == 0){
				distinctDatabases.push(databasesToCache[index]);
			} else {
				var duplicate = false;
				for (var innerIndex = 0; innerIndex < distinctDatabases.length; innerIndex++){
					if (distinctDatabases[innerIndex] == databasesToCache[index]){
						duplicate = true;
						break;
					}
				}
				if (!duplicate){
					distinctDatabases.push(databasesToCache[index]);
				}
			}
		}
		if (distinctDatabases.length > 0){
			showLoadingMask();
			Ext.Ajax.request({  
				url: 'getAllDatabaseTablesDataForCaching.do',  
	            method: 'POST',
	            params: {
	            	databasesToCache: new Array(databasesToCache),
	            },
	            success: function(response){
	            	hideLoadingMask();
	        		var responseJSON = Ext.JSON.decode(response.responseText.trim());
	        		ReplayAnalytics.app.CachedDatabaseTables = responseJSON;
	        		loginController.showMainScreen();
	            },
	            failure: function(response) {
               		hideLoadingMask();
               		logMessage('Failure Caching data');
               },
			});
		} else {
			loginController.showMainScreen();
		}
	},
});