var databaseTableController;
Ext.define('SenchaCon2013Demo.controller.DatabaseTable', {
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
	},
	
	getAllDatabaseTables: function(){
		if (SenchaCon2013Demo.app.CachedDatabaseTables.length == 0){
			showLoadingMask();
			Ext.Ajax.request({  
				url: 'getAllDatabaseTables.do',  
	            method: 'GET',
	            success: function(response){
	            	hideLoadingMask();
	        		var responseJSON = Ext.JSON.decode(response.responseText.trim());
	        		SenchaCon2013Demo.app.CachedDatabaseTables = responseJSON;
	        		databaseTableController.decodeDatabaseTableData(responseJSON);
	            },
	            failure: function(response) {
               		hideLoadingMask();
               		logMessage('Failure Logging in.');
               },
			});
		} else {
			databaseTableController.decodeDatabaseTableData(SenchaCon2013Demo.app.CachedDatabaseTables);
		}		
	},
	
	decodeDatabaseTableData: function(responseJSON){
		SenchaCon2013Demo.app.DatabaseTableFieldStore = new Array();
		temp = {text: 'None Defined', value: 'none'};
		SenchaCon2013Demo.app.DatabaseTableFieldStore.push(temp);
		for (var index = 0; index < responseJSON.length; index++){
			temp = {text: responseJSON[index].name, value: responseJSON[index].tableName};
			SenchaCon2013Demo.app.DatabaseTableFieldStore.push(temp);
		}
		this.getApplication().getController('Settings').configureSettingsPanel();
	},
	
	getDatabaseTableIdForTableName: function(tableName){
		var databaseTableId = 0;
		if (SenchaCon2013Demo.app.CachedDatabaseTables != undefined && SenchaCon2013Demo.app.CachedDatabaseTables.length > 0){
			for (var index = 0; index < SenchaCon2013Demo.app.CachedDatabaseTables.length; index++){
				if (SenchaCon2013Demo.app.CachedDatabaseTables[index].tableName == tableName){
					databaseTableId = SenchaCon2013Demo.app.CachedDatabaseTables[index].id;
					return databaseTableId;
				}
			}
		}
		return databaseTableId;
	},
	
	saveDatabaseTablesFieldsForDatabaseTableId: function(databaseTableId, databaseTableFieldsJSON){
		if (SenchaCon2013Demo.app.CachedDatabaseTables != undefined && SenchaCon2013Demo.app.CachedDatabaseTables.length > 0){
			for (var index = 0; index < SenchaCon2013Demo.app.CachedDatabaseTables.length; index++){
				if (SenchaCon2013Demo.app.CachedDatabaseTables[index].id == databaseTableId){
					break;
				}
			}
			SenchaCon2013Demo.app.CachedDatabaseTables[index].tableFields = databaseTableFieldsJSON;
		}
	},
	
	getDatabaseTablesFieldsForDatabaseTableId: function(databaseTableId){
		if (SenchaCon2013Demo.app.CachedDatabaseTables != undefined && SenchaCon2013Demo.app.CachedDatabaseTables.length > 0){
			for (var index = 0; index < SenchaCon2013Demo.app.CachedDatabaseTables.length; index++){
				if (SenchaCon2013Demo.app.CachedDatabaseTables[index].id == databaseTableId){
					return SenchaCon2013Demo.app.CachedDatabaseTables[index].tableFields;
				}
			}
		}
		return undefined;
	},
	
	getDatabaseTableFieldsForDatabase: function(){
		//this.getChartTypeSetting().setValue('none');
		var selectedDatabaseTable = this.getDatabaseSetting().getValue();
		if (selectedDatabaseTable != 'none'){
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
		for (var index = 0; index < categoryFieldStore.length; index++){
			categoryFieldStoreWithTime.push(categoryFieldStore[index]);
		}
		for (var index = 0; index < timeFieldStore.length; index++){
			categoryFieldStoreWithTime.push(timeFieldStore[index]);
		}
		
		var selectedPanel = SenchaCon2013Demo.app.currentActivePanelIndex;
		SenchaCon2013Demo.app.PanelDataFieldStore[selectedPanel] = dataFieldStore;
		SenchaCon2013Demo.app.PanelCategoryFieldStore[selectedPanel] = categoryFieldStore;
		SenchaCon2013Demo.app.PanelCategoryFieldStoreWithTime[selectedPanel] = categoryFieldStoreWithTime;
		this.getApplication().getController('Settings').showConfiguredSettingsPanel();
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
	        		SenchaCon2013Demo.app.CachedDatabaseTables = responseJSON;
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