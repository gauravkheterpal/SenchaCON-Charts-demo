var adminController;
Ext.define('ReplayAnalytics.controller.Admin', {
	extend : 'Ext.app.Controller',
	xtype: 'admincontroller',
	requires: ['Ext.ux.Fileup'],
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
			'loginScreen' : 'loginscreen',
			'adminPanel' : 'adminpanel',
			'dashboardScreen' : 'dashboardscreen',
			'dashboardGrid' : 'panel[id=dashboardgrid]',
			'mainScreen' : 'replayanalyticsmain',
			'adminButton': 'button[id=adminbutton]',
			'goBackButtonAdmin': 'button[id=gobackbuttonadmin]',
			'dataSourceUpload': 'fileupload[id=fileuploadbutton]',
			'dataSourceUploadPanel': 'datasourceuploadpanel',
			'dataSourceTypeSelectionPanel': 'datasourcetypeselectionpanel',
			'dataSourceUploadMessage': 'label[id=fileuploadmessage]',
			'doneDataSourceTypeSelectionButton': 'button[id=donedatasourcetypeselectionbutton]',
			'doneDataSourceUploadButton': 'button[id=donedatasourceuploadbutton]',
			'dataSourceConfigurationPanel': 'datasourceconfigurationpanel',
			'doneDataSourceConfigureButton': 'button[id=donedatasourceconfigurebutton]',
			'dataSourceNameField': 'textfield[id=datasourcenamefield]',
			'dataSourceTableFieldContainer': 'panel[id=tablefieldscontainer]',
			'dataSourceSelectedType': 'selectfield[id=datasourcetypeselectfield]',
			'addDataSourceFieldButton': 'button[id=adddatasourcefieldmanualbutton]',
			'cancelDataSourceUploadButton': 'button[id=canceldatasourceuploadbutton]',
			'cancelDataSourceConfigurationButton': 'button[id=canceldatasourceconfigurationebutton]',
			'selectedFileNameLabel': 'label[id=selectedfilenamelabel]',
			'manageDataSourcesButton': 'button[id=managedatasourcesbutton]',
			'dataSourceManagePanel': 'datasourcemanagepanel',
			'addDataSourceManagePanelButton': 'button[id=adddatasourcemanagepanelbutton]',
			'deleteDataSourceManagePanelButton': 'button[id=deletedatasourcemanagepanelbutton]',
			'editDataSourceManagePanelButton': 'button[id=editdatasourcemanagepanelbutton]',
			'closeDataSourceManagePanelButton': 'button[id=closedatasourcemanagepanelbutton]',
			'dataSourceDeletePanel': 'datasourcedeletepanel',
			'cancelDataSourceDeletePanelButton': 'button[id=canceldatasourcedeletepanelbutton]',
			'confirmDataSourceDeletePanelButton': 'button[id=confirmdatasourcedeletepanelbutton]',
			'dataSourceDeletePanelContainer': 'container[id=datasourcedeletepanelcontainer]',
		},
		control: {
			'adminButton': {
				tap: 'showAdminPanel'
			},
			'goBackButtonAdmin' : {
				tap: 'goBackToDashboardScreen'
			},
			'doneDataSourceTypeSelectionButton' : {
				tap: 'doneDataSourceTypeSelection'
			},
			'doneDataSourceUploadButton' : {
				tap: 'doneDataSourceUpload',
			},
			'doneDataSourceConfigureButton' : {
				tap: 'doneDataSourceConfigure'
			},
			'addDataSourceFieldButton' : {
				tap: 'addDataSourceField'
			},
			'cancelDataSourceConfigurationButton': {
				tap: 'cancelDataSourceConfiguration'
			},
			'cancelDataSourceUploadButton': {
				tap: 'cancelDataSourceUpload'
			},
			'manageDataSourcesButton': {
				tap: 'showManageDataSourcePanel'
			},
			'addDataSourceManagePanelButton': {
				tap: 'addDataSourceManagePanel'
			},
			'deleteDataSourceManagePanelButton': {
				tap: 'deleteDataSourceManagePanel'
			},
			'editDataSourceManagePanelButton': {
				tap: 'editDataSourceManagePanel'
			},
			'closeDataSourceManagePanelButton': {
				tap: 'closeDataSourceManagePanel'
			},
			'cancelDataSourceDeletePanelButton': {
				tap: 'cancelDataSourceDeletePanel'
			},
			'confirmDataSourceDeletePanelButton': {
				tap: 'confirmDataSourceDeletion'
			},
		},
	},
	
	launch: function() {
		adminController = this;	
		this.getDataSourceUpload().on({
		    success: function(response){
		    	if (response.error == undefined){
		    		ReplayAnalytics.app.currentUploadingDataSource = response.dataSource;
		    		adminController.getDataSourceUploadMessage().setHtml(response.description);
		    		adminController.getDoneDataSourceUploadButton().show();
		    	} else {
		    		Ext.Msg.alert('Error', response.description, Ext.emptyFn);
		    	}				
		    },
		    failure: function(){
		    	Ext.Msg.alert('Error', 'Data source upload was failed.', Ext.emptyFn);
		    },
		});
	},
	
	showDataSourceUploadFlow: function(){
		this.getDataSourceUploadPanel().show();
		this.getDoneDataSourceUploadButton().hide();
	},
	
	setSelectedFileName: function(fileName) {
		this.getSelectedFileNameLabel().setHtml('<b>Selected File:</b>  ' + fileName);
	},
	
	cancelDataSourceUpload: function(){
		this.getDataSourceUploadPanel().hide();
	},
	
	doneDataSourceUpload: function(){
		this.getDataSourceUploadPanel().hide();
		this.getDataSourceUploadMessage().setHtml('');
		this.getSelectedFileNameLabel().setHtml('');
		this.getDataSourceConfigurationPanel().show();
		var tableFields = undefined;
		if (ReplayAnalytics.app.currentUploadingDataSource != undefined){
			tableFields = ReplayAnalytics.app.currentUploadingDataSource.databaseTableFields;
		}
		if (tableFields != undefined){
			for (var index = 0; index < tableFields.length; index++){
				var field = tableFields[index];
				adminController.addDataSourceFieldRow(index, field.fieldName, field.fieldLabel, field.fieldType, field.fieldSelection, field.fieldCalculation, true);
			}
		}
	},
	
	addHeaderRow: function(){
		var container = this.getDataSourceTableFieldContainer();
		container.add({
        	xtype: 'panel',
        	docked: 'top',
        	style: 'background-color: rgb(230, 230, 230); padding: 10px;',
        	layout: {type: 'hbox', pack: 'start', align: 'justify'},
    		items: [
        	        /*{
        	        	xtype: 'label',
        	        	html: 'Name',
        	        	style: 'padding: 5px; background-color: #f7f7f7; font-size: 16px; font-weight: bold;',
        	        	width: 150,
        	        },*/
        	        {
        	        	xtype: 'label',
        	        	html: 'Field Name', // Label
        	        	style: 'padding: 5px; background-color: rgb(230, 230, 230); font-size: 16px; font-weight: bold;',
        	        	width: 250,
        	        },
        	        {
        	        	xtype: 'label',
        	        	html: 'Type',
        	        	style: 'padding: 5px; background-color: rgb(230, 230, 230); font-size: 16px; font-weight: bold;',
        	        	width: 350,
        	        },
        	        /*{
        	        	xtype: 'label',
        	        	html: 'Selection',
        	        	style: 'padding: 5px; background-color: #f7f7f7; font-size: 16px; font-weight: bold;',
        	        	width: 150,
        	        },
        	        {
        	        	xtype: 'label',
        	        	html: 'Calculation',
        	        	style: 'padding: 5px; background-color: #f7f7f7; font-size: 16px; font-weight: bold;',
        	        	width: 150,
        	        },*/
        	        ]
		});
	},
	
	addDataSourceField: function(){
		var container = this.getDataSourceTableFieldContainer();
		this.addDataSourceFieldRow(container.getItems().items.length - 1, '', '', 'IGNORE', '', '', false);
		var scroller = this.getDataSourceConfigurationPanel().getScrollable().getScroller();
		if (scroller != undefined){
			scroller.refresh();
			scroller.scrollToEnd(false);
		}
	},
	
	addDataSourceFieldRow: function(index, fieldName, fieldLabel, fieldType, fieldSelection, fieldCalculation, readOnly){
		var container = this.getDataSourceTableFieldContainer();
		var row = container.add({
			xtype: 'panel',
			id: 'field' + index,
			style: 'padding: 10px; background-color: rgb(235, 235, 235);',
			layout: {type: 'hbox', pack: 'start', align: 'justify'},
		});
		row.add({
			xtype: 'textfield',
			id: 'fieldname' + index,
			value: fieldName,
			readOnly: readOnly,
			hidden: true,
			style: 'padding: 5px; background-color: #f7f7f7; font-size: 15px; border-radius: 5px;',
			clearIcon: false,
			//width: 150,
		});
		row.add({
			xtype: 'textfield',
			id: 'fieldlabel' + index,
			value: fieldLabel,
			style: 'padding: 5px; background-color: rgb(235, 235, 235); font-size: 15px; border-radius: 5px;',
			clearIcon: false,
			width: 290,
		});
		row.add({
			xtype: 'selectfield',
			id: 'fieldtype' + index,
			value: fieldType,
			style: 'padding: 5px; background-color: rgb(235, 235, 235); font-size: 15px; border-radius: 5px;',
			width: 290,
			options: [
			          { text: 'Time Field', value: 'TIME_FIELD'},
			          { text: 'Data Field', value: 'DATA_FIELD'},
			          { text: 'Category Field', value: 'CATEGORY_FIELD'},
			          { text: 'Ignore', value: 'IGNORE'}
			        ],
		});
		row.add({
			xtype: 'textfield',
			id: 'fieldselection' + index,
			value: fieldSelection,
			hidden: true,
			style: 'padding: 5px; background-color: #f7f7f7; font-size: 15px; border-radius: 5px;',
			clearIcon: false,
			//width: 150,
		});
		row.add({
			xtype: 'textfield',
			id: 'fieldcalculation' + index,
			value: fieldCalculation,			
			hidden: true,
			style: 'padding: 5px; background-color: #f7f7f7; font-size: 15px; border-radius: 5px;',
			clearIcon: false,
			//width: 150,
		});
	},
	
	cancelDataSourceConfiguration: function(){	
		Ext.Msg.confirm("Confirm", "Are you sure you want to cancel data source configuration?", function(btn){
			  if (btn == 'yes'){
				  showLoadingMask();
				  Ext.Ajax.request({			  
			            url: 'cancelDataSourceConfiguration.do',
			            method: 'POST',
			            params: {			            	
			            	dataSourceId: ReplayAnalytics.app.currentUploadingDataSource.id,          	
			            },
			            success: function(response) {
			            	hideLoadingMask();
			            	adminController.getDataSourceConfigurationPanel().hide();
							adminController.getApplication().getController('Settings').getSettingsPanel().show();
							adminController.getApplication().getController('DatabaseTable').getDatabaseSetting().setValue('none');
							ReplayAnalytics.app.CachedDatabaseTables = new Array();
							adminController.getApplication().getController('DatabaseTable').getAllDatabaseTables();
			            },
			            failure: function(response) {
			           		hideLoadingMask();
			           		logMessage('Failure cancelling dataSource configuration.');
			           },
					});				  
			  }
		});
	},
	
	doneDataSourceConfigure: function(){
		var dataSourceName = this.getDataSourceNameField().getValue();
		if (dataSourceName != undefined && dataSourceName != '' && dataSourceName != ' '){
			var tableFields = undefined;
			if (ReplayAnalytics.app.currentUploadingDataSource != undefined){
				tableFields = ReplayAnalytics.app.currentUploadingDataSource.databaseTableFields;
			}
			if (tableFields != undefined){
				var container = this.getDataSourceTableFieldContainer();
				for (var index = 0; index < tableFields.length; index++){
					tableFields[index].fieldName = Ext.ComponentQuery.query('textfield[id=fieldname' + index + ']')[0].getValue();
					tableFields[index].fieldLabel = Ext.ComponentQuery.query('textfield[id=fieldlabel' + index + ']')[0].getValue();
					tableFields[index].fieldType = Ext.ComponentQuery.query('selectfield[id=fieldtype' + index + ']')[0].getValue();
					tableFields[index].fieldSelection = Ext.ComponentQuery.query('textfield[id=fieldselection' + index + ']')[0].getValue();
					tableFields[index].fieldCalculation = Ext.ComponentQuery.query('textfield[id=fieldcalculation' + index + ']')[0].getValue();				
				}
				if (container.getItems().items.length > (index /*+ 1*/)){
					for (; index < (container.getItems().items.length /*- 1*/); index++){
						var temp = new Object();
						temp.id = undefined;
						temp.fieldName = Ext.ComponentQuery.query('textfield[id=fieldname' + index + ']')[0].getValue();
						temp.fieldLabel = Ext.ComponentQuery.query('textfield[id=fieldlabel' + index + ']')[0].getValue();
						temp.fieldType = Ext.ComponentQuery.query('selectfield[id=fieldtype' + index + ']')[0].getValue();
						temp.fieldSelection = Ext.ComponentQuery.query('textfield[id=fieldselection' + index + ']')[0].getValue();
						temp.fieldCalculation = Ext.ComponentQuery.query('textfield[id=fieldcalculation' + index + ']')[0].getValue();
						tableFields.push(temp);
					}
				}
				var tableFieldsJSON = JSON.stringify(tableFields);
				//logInfo(tableFieldsJSON);
				this.saveDataSourceConfiguration(dataSourceName, tableFieldsJSON);
			}
		} else {
			Ext.Msg.alert('Error', 'Please provide a data source name.', Ext.emptyFn);
			return;
		}		
	},
	
	saveDataSourceConfiguration: function(dataSourceName, tableFieldsJSON){
		showLoadingMask();
		Ext.Ajax.request({			  
            url: 'saveDataSourceConfiguration.do',
            method: 'POST',
            params: {
            	userId: ReplayAnalytics.app.currentUserSession.userId,
            	dataSourceId: ReplayAnalytics.app.currentUploadingDataSource.id,
            	dataSourceName: dataSourceName, 
            	tableFields: tableFieldsJSON,            	
            },
            success: this.handleDataSourceConfigurationSave,
            failure: function(response) {
           		hideLoadingMask();
           		logMessage('Failure Saving dataSource configuration.');
           },
		});	
	},
	
	handleDataSourceConfigurationSave: function(response){
		var responseJSON = Ext.JSON.decode(response.responseText);
		if (responseJSON.error != undefined){
			Ext.Msg.alert('Error', responseJSON.description, Ext.emptyFn);		
		} else {
			Ext.Msg.alert('Success', responseJSON.description, function(){
				adminController.getDataSourceConfigurationPanel().hide();
				adminController.getApplication().getController('DatabaseTable').getDatabaseSetting().setValue('none');
				ReplayAnalytics.app.CachedDatabaseTables = new Array();
				//adminController.getApplication().getController('DatabaseTable').getAllDatabaseTables();
				var container = adminController.getDataSourceTableFieldContainer();
				container.removeAll();
				adminController.getDataSourceNameField().setValue('');				
			});			
		}
		hideLoadingMask();
	},
	
	showManageDataSourcePanel: function(){
		adminController.getApplication().getController('Settings').getGlobalSettingsPanel().hide();
		adminController.getDataSourceManagePanel().show();
	},
	
	addDataSourceManagePanel: function() {
		adminController.getDataSourceManagePanel().hide();
		adminController.showDataSourceUploadFlow();
	},
	
	deleteDataSourceManagePanel: function() {
		adminController.getDataSourceManagePanel().hide();
		showLoadingMask();
		Ext.Ajax.request({			  
            url: 'getAllConfiguredDataSources.do',
            method: 'GET',
            success: function(response) {
            	hideLoadingMask();
            	var responseJSON = Ext.JSON.decode(response.responseText);
            	if (responseJSON != undefined){
            		if (responseJSON.length == 0){
            			Ext.Msg.alert('Error', 'There are no Data Source(s) configured.', function(){
            				adminController.getDataSourceManagePanel().show();
            			});
            		} else {
            			var container = adminController.getDataSourceDeletePanelContainer();
            			var listObject = Ext.create('Ext.List', {
            				xtype: 'list',
            	        	id: 'datasourcedeletepanellist',
            	        	ui: 'round',
            	        	flex: 1,
                            disableSelection: true,
                            //itemTpl: '<input type="checkbox" enabled="enabled" value="open" name="data_source_selected_status" <tpl if="isChecked">checked="checked"</tpl> /> {dataSourceName}',	    			
                            itemTpl: '<div class="x-field-checkbox x-field x-label-align-left x-form-label-nowrap x-field-labeled x-layout-box-item x-stretched" style="background-color: rgb(247, 247, 247);"> <div class="x-form-label" style="width: 80% !important;"> <span>{dataSourceName}</span> </div> <div class="x-component-outer" > <div class="x-unsized x-field-input sencha-clear-icon"> <input class="x-input-el x-input-checkbox" type="checkbox"> <div class="x-field-mask"> </div> </div> </div> </div>',
                            
                            store: {
                				fields: ['id', 'dataSourceName', 'isChecked'],
                				data: responseJSON
                			}
            			});
            			listObject.on('itemtap', function(list, index, item, record, e, opts){
            		        var active,chkBox = item.bodyElement.down('input').dom;
            		        if ( e.target.tagName.toUpperCase() != 'INPUT' ){
            		            chkBox.checked = !chkBox.checked;
            		            active = chkBox.checked;
            		        } else{
            		             active = !chkBox.checked; // tap is called before the actual change
            		        }
            		        //update data
            		        //list.getData()[index]['isChecked'] =  active;
            		        record.data.isChecked = active;
            		    });
            			container.add(listObject);
            			adminController.getDataSourceDeletePanel().show();
            		}
            	}            	
            },
            failure: function(response) {
           		hideLoadingMask();
           		logMessage('Failure getting all configured DataSources.');
           },
		});
		
	},
	
	editDataSourceManagePanel: function() {
		//adminController.getDataSourceManagePanel().hide();
	},
	
	closeDataSourceManagePanel: function() {
		adminController.getDataSourceManagePanel().hide();
	},
	
	cancelDataSourceDeletePanel: function() {
		adminController.getDataSourceDeletePanel().hide();
		adminController.getDataSourceManagePanel().show();
		var container = adminController.getDataSourceDeletePanelContainer();
		container.removeAll();
	},
	
	confirmDataSourceDeletion: function() {
		var list = list = Ext.ComponentQuery.query('list[id=datasourcedeletepanellist]')[0];
		var dataSourceIds = new Array();
		if (list != undefined){
			var data = list.getStore().getData().all;
			for (var index = 0; index < data.length; index++){
				if (data[index].data.isChecked){
					dataSourceIds.push(data[index].data.id);
				}
			}
		}
		Ext.Msg.confirm("Confirm", "Are you sure you want to delete selected Data Source(s)?", function(btn){
			  if (btn == 'yes'){
				  showLoadingMask();
				  Ext.Ajax.request({			  
			            url: 'deleteDataSources.do',
			            method: 'POST',
			            params: {			            	
			            	dataSourceIds: new Array(dataSourceIds),          	
			            },
			            success: function(response) {
			            	hideLoadingMask();
			            	var responseJSON = Ext.JSON.decode(response.responseText);
			            	Ext.Msg.alert('ReplayAnalytics', responseJSON.description, function(){
			            		adminController.getDataSourceDeletePanel().hide();
			            		adminController.getDataSourceManagePanel().show();
			            		var container = adminController.getDataSourceDeletePanelContainer();
			            		container.removeAll();
			            		adminController.getApplication().getController('DatabaseTable').getDatabaseSetting().setValue('none');
								ReplayAnalytics.app.CachedDatabaseTables = new Array();
								//adminController.getApplication().getController('DatabaseTable').getAllDatabaseTables();
	            			});
			            },
			            failure: function(response) {
			           		hideLoadingMask();
			           		logMessage('Failure deleting DataSources.');
			           },
					});			  
			  }
		});
	},
});