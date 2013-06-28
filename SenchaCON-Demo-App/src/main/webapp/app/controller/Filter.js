var filterController;
Ext.define('ReplayAnalytics.controller.Filter', {
	extend : 'Ext.app.Controller',
	xtype: 'filtercontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
			'filterSetting': 'selectfield[id=filtersettingtoggle]',
			'filterFieldsList': 'list[id=filterfieldslist]',
			'setFilterButton': 'button[id=setfilterbutton]',
			'filterFieldsPanel': 'filterfieldspanel',
			'filterListPanel': 'filterlistpanel',
			'filterList': 'list[id=filterlist]',
			'filterListCancelButton': 'button[id=filterlistcancelbutton]',
			'filterListDoneButton': 'button[id=filterlistdonebutton]',
			'databaseSetting': 'selectfield[id=databaseselectfield]',
			'filterListSelectUnselectAllButton': 'button[id=filterlistselectunselectallbutton]',			
		},
		control: {
			'filterSetting': {
				change: 'toggleSetFilterButton'
			},
			'setFilterButton': {
				tap: 'showFilterFieldsPanel'
			},
			'mainContainer': {
				initialize: 'loadSelectFieldStores'
			},
			'filterFieldsList': {
				select: 'showFilterListPanel'
			},
			'filterListCancelButton': {
				tap: 'hideFilterListPanel'
			},
			'filterListDoneButton': {
				tap: 'saveFilters'
			},
			'filterListSelectUnselectAllButton': {
				tap: 'selectUnselectAllInFilterList'
			},
		},
	},
	
	launch: function(){
		filterController = this;
		filterController.getFilterList().on('itemtap', filterController.handleItemTap);
	},
	
	showFilterFieldsPanel: function() {		
		this.getFilterFieldsList().setStore({
			fields: ['text', 'value'],
			data: ReplayAnalytics.app.PanelFilterFieldsStore[ReplayAnalytics.app.currentActivePanelIndex],
		});
		this.getFilterFieldsPanel().showBy(this.getSetFilterButton());
		this.handleFilterFieldConfiguredStatus();
	},

	showFilterListPanel: function(view, record) {
		showLoadingMask();
		var filterCategory = record.data.value;
		ReplayAnalytics.app.currentSelectedFilterCategory = filterCategory;
		var json = this.getFilterFieldJSON(filterCategory);
		if (json == undefined || json == ''){
			var url = 'getFilterFields.do?databaseName=' + this.getDatabaseSetting().getValue() + '&filterCategory=' + this.getFilterCategoryValue(filterCategory);
			Ext.Ajax.request({
				url: url,
				success: function(response){
					var filterResponse = Ext.JSON.decode(response.responseText);
					filterController.saveFilterFieldJSON(filterResponse, filterCategory);
					filterController.handleFilterFieldResponse(filterResponse, filterCategory);
				},
			});
		} else {
			this.handleFilterFieldResponse(json, filterCategory);
		}
	},
	
	handleFilterFieldConfiguredStatus: function(){
		var store = filterController.getFilterFieldsList().getStore();
		if (store != undefined || store != null){
			for (var i = 0; i < store.data.length; i++){
				var filterCategory = store.getAt(i).data.value;
				var filterArray = this.getFilterFieldJSON(filterCategory);
				var filterSelection = this.getStringFromFilterData(filterArray, this.getFilterCategoryValue(filterCategory));
				if (filterSelection != undefined && filterSelection != ""){
					var label = store.getAt(i).data.text;
					if (label.indexOf('*') == -1){
						store.getAt(i).data.text = label + ' *';
					} 
				}
			}
		}
		filterController.getFilterFieldsList().refresh();
	},
	
	getFilterCategoryValue: function(filterCategory){
		switch(filterCategory){
			case 'InformanceUser': return 'User'; 
			case 'InformancePart': return 'Part';
			case 'InfinityQSUser': return 'User';
			case 'InfinityQSPart': return 'Part';
		}
		return filterCategory;
	},
	
	handleFilterFieldResponse: function(filterResponse, filterCategory){
		filterController.getFilterList().setStore({
			fields: ['Field', 'FieldLabel', 'Checked'],
			data: filterResponse,
		});
		filterController.getFilterListPanel().showBy(filterController.getFilterFieldsList());
		var filterlistelements = new Array();
		var inputs = document.getElementsByTagName("input");
		for(i = 0; i < inputs.length; i++) {
			if(inputs[i].type == "checkbox" && inputs[i].name == "filter") {
				filterlistelements.push(inputs[i]);
			}
		}
		var allUnchecked = true;
		for(ii = 0; ii < filterlistelements.length; ii++) {
			filterlistelements[ii].checked = filterResponse[ii].Checked;
			if (filterResponse[ii].Checked){
				allUnchecked = false;
			}
		}
		if (allUnchecked){
			ReplayAnalytics.app.filterListSelectUnselectFlag = false;
		}
		this.handleSelectAllButtonText();
		hideLoadingMask();
	},
	
	handleItemTap: function(dataview, index, item, event) {
		var temp = dataview.getStore().getAt(index).data;
        ele = Ext.get(temp.Field);
        if(!temp.Checked) {
            dataview.getStore().getAt(index).data.Checked = true;
        } else {
        	dataview.getStore().getAt(index).data.Checked = false;                   
        }
	},
	
	selectUnselectAllInFilterList: function(){
		var flag = ReplayAnalytics.app.filterListSelectUnselectFlag;
		var dataview = filterController.getFilterList();
		var filterlistelements = new Array();
		var inputs = document.getElementsByTagName("input");
		for(i = 0; i < inputs.length; i++) {
			if(inputs[i].type == "checkbox" && inputs[i].name == "filter") {
				filterlistelements.push(inputs[i]);
			}
		}
		for(index = 0; index < filterlistelements.length; index++) {
			if (flag){
				dataview.getStore().getAt(index).data.Checked = false;
			} else {
				dataview.getStore().getAt(index).data.Checked = true;
			}
			filterlistelements[index].checked = dataview.getStore().getAt(index).data.Checked;
		}
		ReplayAnalytics.app.filterListSelectUnselectFlag = !flag;
		this.handleSelectAllButtonText();
	},
	
	handleSelectAllButtonText: function(){		
		if (ReplayAnalytics.app.filterListSelectUnselectFlag){
			this.getFilterListSelectUnselectAllButton().setText('Unselect All');
		} else {
			this.getFilterListSelectUnselectAllButton().setText('Select All');			
		}
	},
	
	saveFilterFieldJSON: function(filterJSON, filterCategory){
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		switch(filterCategory){
			case 'InformanceUser': ReplayAnalytics.app.InformanceUserFilter[chartIndex] = filterJSON; break;
			case 'reason': ReplayAnalytics.app.InformanceReasonFilter[chartIndex] = filterJSON; break;
			case 'InformancePart': ReplayAnalytics.app.InformanceSKUFilter[chartIndex] = filterJSON; break;
			case 'set': ReplayAnalytics.app.InformanceSetFilter[chartIndex] = filterJSON; break;
			case 'InfinityQSUser': ReplayAnalytics.app.InfinityQSUserFilter[chartIndex] = filterJSON; break;
			case 'Test': ReplayAnalytics.app.InfinityQSTestFilter[chartIndex] = filterJSON; break;
			case 'Name': ReplayAnalytics.app.InfinityQSQPMFilter[chartIndex] = filterJSON; break;
			case 'InfinityQSPart': ReplayAnalytics.app.InfinityQSSKUFilter[chartIndex] = filterJSON; break;
			case 'Process': ReplayAnalytics.app.InfinityQSProcessFilter[chartIndex] = filterJSON; break;
		}		
	},
	
	getFilterFieldJSON: function(filterCategory){
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		switch(filterCategory){
			case 'InformanceUser': return ReplayAnalytics.app.InformanceUserFilter[chartIndex];
			case 'reason': return ReplayAnalytics.app.InformanceReasonFilter[chartIndex];
			case 'InformancePart': return ReplayAnalytics.app.InformanceSKUFilter[chartIndex];
			case 'set': return ReplayAnalytics.app.InformanceSetFilter[chartIndex];
			case 'InfinityQSUser': return ReplayAnalytics.app.InfinityQSUserFilter[chartIndex];
			case 'Test': return ReplayAnalytics.app.InfinityQSTestFilter[chartIndex];
			case 'Name': return ReplayAnalytics.app.InfinityQSQPMFilter[chartIndex];
			case 'InfinityQSPart': return ReplayAnalytics.app.InfinityQSSKUFilter[chartIndex];
			case 'Process': return ReplayAnalytics.app.InfinityQSProcessFilter[chartIndex];
		}
		return "";
	},
	
	getFilterFieldArray: function(filterCategory){
		switch(filterCategory){
			case 'InformanceUser': return ReplayAnalytics.app.InformanceUserFilter;
			case 'reason': return ReplayAnalytics.app.InformanceReasonFilter;
			case 'InformancePart': return ReplayAnalytics.app.InformanceSKUFilter;
			case 'set': return ReplayAnalytics.app.InformanceSetFilter;
			case 'InfinityQSUser': return ReplayAnalytics.app.InfinityQSUserFilter;
			case 'Test': return ReplayAnalytics.app.InfinityQSTestFilter;
			case 'Name': return ReplayAnalytics.app.InfinityQSQPMFilter;
			case 'InfinityQSPart': return ReplayAnalytics.app.InfinityQSSKUFilter;
			case 'Process': return ReplayAnalytics.app.InfinityQSProcessFilter;
		}
		return "";
	},

	saveFilters: function() {
		var filterCategory = ReplayAnalytics.app.currentSelectedFilterCategory;
		var filterArray = this.getFilterFieldJSON(filterCategory);		
		var listData = filterController.getFilterList().getStore().getData().all;
		if (listData != undefined){
			if (listData.length == filterArray.length){
				for (i = 0; i < listData.length; i++){
					if (filterArray[i].Field == listData[i].data.Field){
						filterArray[i].Checked = listData[i].data.Checked;
					}					
				}
			}
		}
		this.saveFilterFieldJSON(filterArray, filterCategory);
		this.hideFilterListPanel();
		this.handleFilterFieldConfiguredStatus();
		//this.getFilterFieldsPanel().hide();
	},

	hideFilterListPanel: function() {
		this.getFilterListPanel().hide();
		//this.getFilterFieldsPanel().hide();
	},

	toggleSetFilterButton: function() {
		if(this.getFilterSetting().getValue() == 'On') {
			this.getSetFilterButton().show();
		}
		else {
			this.getSetFilterButton().hide();
		}
	},
	
	encodeFilterJSONForSaving: function(filterCategory){
		var temp = new Array();
		var filterJSON = filterController.getFilterFieldArray(filterCategory);
		if (filterJSON != undefined || filterJSON != ""){
			for (i = 0; i < filterJSON.length; i++){
				temp[i] = "";
				try{
					temp[i] = encodeURIComponent(Ext.JSON.encode(filterJSON[i]));
				} catch(err){
				}			
			}
		} else {
			temp = new Array("", "", "", "", "");
		}
		return temp;
	},
	
	loadFilterSettingsFromPanelSettings: function(filters){
		if (filters != undefined && filters.length > 0){
			for (i = 0; i < filters.length; i++){
				if (filters[i].settingsString != undefined){
					filterController.saveFilterFieldJSON(filters[i].settingsString, filters[i].filterCategory);
				}				
			}
		}
	},
	
	getFilterStringForChart: function(){
		var filterString = "";
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		var informanceUserFilter = "", informanceReasonFilter = "", informanceSetFilter = "", informancePartFilter = "";
		var infinityQSUserFilter = "", infinityQSTestFilter = "", infinityQSProcessFilter = "", infinityQSQPMFilter = "", infinityQSPartFilter = "";
		if(ReplayAnalytics.app.databaseSetting[chartIndex] == 'informance') {
			var array = this.getFilterFieldArray("InformanceUser");
			if (array[chartIndex] != undefined && array[chartIndex] != ""){
				informanceUserFilter = this.getStringFromFilterData(array[chartIndex], "User");
			}			
			array = this.getFilterFieldArray("reason");
			if (array[chartIndex] != undefined && array[chartIndex] != ""){
				informanceReasonFilter = this.getStringFromFilterData(array[chartIndex], "reason");
			}			
			array = this.getFilterFieldArray("InformancePart");
			if (array[chartIndex] != undefined && array[chartIndex] != ""){
				informancePartFilter = this.getStringFromFilterData(array[chartIndex], "Part");
			}			
			array = this.getFilterFieldArray("set");
			if (array[chartIndex] != undefined && array[chartIndex] != ""){
				informanceSetFilter = this.getStringFromFilterData(array[chartIndex], "set");
			}
			if (informanceUserFilter != ""){
				filterString = filterString + informanceUserFilter;
			}			
			if (informanceReasonFilter != ""){
				if (filterString != ""){
					filterString = filterString + " AND ";
				}
				filterString = filterString + informanceReasonFilter;
			}
			if (informancePartFilter != ""){
				if (filterString != ""){
					filterString = filterString + " AND ";
				}
				filterString = filterString + informancePartFilter;
			}
			if (informanceSetFilter != ""){
				if (filterString != ""){
					filterString = filterString + " AND ";
				}
				filterString = filterString + informanceSetFilter;
			}
		} else if(ReplayAnalytics.app.databaseSetting[chartIndex] == 'infinity_qs') {
			var array = this.getFilterFieldArray("InfinityQSUser");
			if (array[chartIndex] != undefined && array[chartIndex] != ""){
				infinityQSUserFilter = this.getStringFromFilterData(array[chartIndex], "User");
			}			
			array = this.getFilterFieldArray("Test");
			if (array[chartIndex] != undefined && array[chartIndex] != ""){
				infinityQSTestFilter = this.getStringFromFilterData(array[chartIndex], "Test");
			}			
			array = this.getFilterFieldArray("Name");
			if (array[chartIndex] != undefined && array[chartIndex] != ""){
				infinityQSQPMFilter = this.getStringFromFilterData(array[chartIndex], "Name");
			}			
			array = this.getFilterFieldArray("Process");
			if (array[chartIndex] != undefined && array[chartIndex] != ""){
				infinityQSProcessFilter = this.getStringFromFilterData(array[chartIndex], "Process");
			}	
			array = this.getFilterFieldArray("InfinityQSPart");
			if (array[chartIndex] != undefined && array[chartIndex] != ""){
				infinityQSPartFilter = this.getStringFromFilterData(array[chartIndex], "Part");
			}
			if (infinityQSUserFilter != ""){
				filterString = filterString + infinityQSUserFilter;
			}			
			if (infinityQSTestFilter != ""){
				if (filterString != ""){
					filterString = filterString + " AND ";
				}
				filterString = filterString + infinityQSTestFilter;
			}
			if (infinityQSQPMFilter != ""){
				if (filterString != ""){
					filterString = filterString + " AND ";
				}
				filterString = filterString + infinityQSQPMFilter;
			}
			if (infinityQSProcessFilter != ""){
				if (filterString != ""){
					filterString = filterString + " AND ";
				}
				filterString = filterString + infinityQSProcessFilter;
			}
			if (infinityQSPartFilter != ""){
				if (filterString != ""){
					filterString = filterString + " AND ";
				}
				filterString = filterString + infinityQSPartFilter;
			}
		}
		//logInfo("Final filter==" + filterString);
		var encodedFilter = "";
		try{
			encodedFilter = encodeURIComponent(filterString);
		} catch(err){
		}
		return encodedFilter;
	},
	
	getStringFromFilterData: function(array, filterCategory){
		var string1 = "`" + filterCategory + "` IN (";
		var string2 = "";
		var string3 = ")";
		var uncheckedItems = 0;
		if (array != undefined && array.length > 1){
			for (i = 0; i < array.length; i++){
				if (array[i].Checked){
					if (string2 != ""){
						string2 = string2 + ", ";
						uncheckedItems++;
					}
					string2 = string2 + "\'" + array[i].Field + "\'";					
				}
			}			
		}
		var string = "";
		if ((string2 != "") && (uncheckedItems < (array.length - 1))){
			string = string1 + string2 + string3
		}
		return string;
	},
});