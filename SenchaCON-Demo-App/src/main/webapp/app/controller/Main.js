Ext.define('CachedResponse', {
	responseText: 'Unknown',
	status: '200'
});

var mainController;
var startTime = new Date();
var finishTime = new Date();
var $lastGestureCalledTime = new Date();
var loadingScreen = 'Loading...<div><img src="lib/images/ajax-loader3.gif" alt="Please wait"></div><br /><br />'
	 + 'Taking too long to load? <button onclick="resetSettings();">Reset</button>';


Ext.Ajax.on("beforerequest", function(conn, options){
		var url = options.url;
	    var myCookie = loadData(url);
	    if (myCookie != null){
	    	logMessage("Found local cached data. value= " + myCookie);
	    	if (url.indexOf('getUnifiedData') == 0){
		        ReplayAnalytics.app.panelSettings[ReplayAnalytics.app.currentActivePanelIndex] = url;
		        ReplayAnalytics.app.panelData[ReplayAnalytics.app.currentActivePanelIndex] = myCookie;
			}
	        var response = new CachedResponse();
	        response.responseText = myCookie;
	        if (typeof(options.success) != 'undefined'){
	        	options.success(response);
	        	return false;
	        } else if (typeof(options.callback) != 'undefined'){
	        	options.callback(options, true, response);
	        	return false;
	        } else{
	        	return;
	        }
	        //hideLoadingMask();
		}       
    });

Ext.Ajax.on("requestcomplete", function(conn, response, options){
        //createCookie(options.url, response.responseText, '10');
		if (options.url.indexOf('getUnifiedData') == 0){
			saveData(options.url, response.responseText);
	        ReplayAnalytics.app.panelSettings[ReplayAnalytics.app.currentActivePanelIndex] = options.url;
	        ReplayAnalytics.app.panelData[ReplayAnalytics.app.currentActivePanelIndex] = response.responseText;
		}  
		hideLoadingMask();
	});

Ext.define('ReplayAnalytics.controller.Main', {
	extend : 'Ext.app.Controller',
	xtype: 'maincontroller',
	requires: [
	       	//'Ext.chart.Panel',
	        'Ext.chart.axis.Numeric',
	        'Ext.chart.axis.Category',
	        'Ext.chart.series.Scatter',
	        'Ext.chart.series.Bar',
	        //'Ext.draw.engine.ImageExporter',
	        'Ext.util.Format',
	        'Ext.MessageBox',
	        'ReplayAnalytics.model.DataModel'
	],
	config: {
		refs: {
			'mainController': 'maincontroller',
			'dataModel': 'datamodel',
			'mainContainer': 'replayanalyticsmain',						
			'chart1': 'chart[id=chart1]',
			'chart2': 'chart[id=chart2]',
			'chart3': 'chart[id=chart3]',
			'chart4': 'chart[id=chart4]',
			'chart5': 'chart[id=chart5]',
			'panel1': 'panel1',
			'panel2': 'panel2',
			'panel3': 'panel3',
			'panel4': 'panel4',	
			'slider0': 'slider0',
			'slider1': 'slider1',
			'slider2': 'slider2',
			'slider3': 'slider3',
			'slider4': 'slider4',
			'slider5': 'slider5',
			'fourPanelLayout': 'fourpanellayout',
			'bottomTwoPanelLayout': 'bottomtwopanellayout',
			'topTwoPanelLayout': 'toptwopanellayout',		
			'settingsButton': 'button[id=settingsbutton]',
			'globalSettingsButton': 'button[id=globalsettingsbutton]',
			'globalSyncButton': 'segmentedbutton[id=globalsynctogglebutton]',
			'filterSetting': 'selectfield[id=filtersettingtoggle]',
		},
		control: {
			'chart1': {
				tap: 'setFocusOnPanel1'
			},
			'chart2': {
				tap: 'setFocusOnPanel2'
			},
			'chart3': {
				tap: 'setFocusOnPanel3'
			},
			'chart4': {
				tap: 'setFocusOnPanel4'
			},
			'panel1': {
				tap: 'setFocusOnPanel1'
			},
			'panel2': {
				tap: 'setFocusOnPanel2'
			},
			'panel3': {
				tap: 'setFocusOnPanel3'
			},
			'panel4': {
				tap: 'setFocusOnPanel4'
			},
		}
	},
	
	launch: function(){
		mainController = this;
	},
	
	clearAllPanels: function(){
		for (i = 0; i < ReplayAnalytics.app.newChart.length; i++){
			var obj = ReplayAnalytics.app.newChart[i];
			if (obj != undefined){
				if (obj.getLegend() != undefined){
					obj.getLegend().destroy();
				}		
				obj.destroy();
			}
		}
		/*for (var j = 1; j < 5; j++){
			Ext.ComponentQuery.query('addchartpanel'+j)[0].setHtml('');
			var carousel = Ext.ComponentQuery.query('carousel[id=carousel'+ j +']')[0];
			for (var carouselIndex = carousel.getItems().items.length; carouselIndex > 2; carouselIndex--){
				var temp = carousel.getAt(carouselIndex-1);
				if (temp != undefined){
					carousel.remove(temp);
				}
			}
		}*/
	},
	
	handleTitleBarButtons: function(){
		this.getSettingsButton().setDisabled(false);
		this.getSettingsButton().show();
	},
	
	loadStores: function() {
		this.handleTitleBarButtons();
		this.checkForConfiguredGraphPanels();	
		ReplayAnalytics.app.creatingGraphs = true;
		Ext.getStore('GlobalSettingsStore').load();
		if (Ext.getStore('GlobalSettingsStore').getData().items[0] != undefined){
			ReplayAnalytics.app.interestingMoments = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().InterestingMoments;
			ReplayAnalytics.app.replayCommentsSetting = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().ReplayComments;
			ReplayAnalytics.app.replaySpeed = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().ReplaySpeed;
			ReplayAnalytics.app.numberActivePanels = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().NumberOfPanels;
			ReplayAnalytics.app.interestingMomentType3Setting = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().InterestingMomentType3Setting;
			ReplayAnalytics.app.interestingMomentType4Setting = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().InterestingMomentType4Setting;
			ReplayAnalytics.app.interestingMomentType1Setting = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().InterestingMomentType1Setting;
			ReplayAnalytics.app.interestingMomentType2Setting = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().InterestingMomentType2Setting;
		}
		this.getApplication().getController('Settings').updateChartAnimationSettings();
		this.changePanels();
		var loopIndex = 1;
		for(;loopIndex <= ReplayAnalytics.app.numberActivePanels; loopIndex++){
			Ext.getStore('UserSettings'+loopIndex).load();
			
			if(Ext.getStore('UserSettings'+loopIndex).getData().items[0] != undefined) {
				Ext.get('chart'+loopIndex+'Button').hide();
				Ext.get('chart'+loopIndex+'Image').hide();
				ReplayAnalytics.app.databaseSetting[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().Database;
				ReplayAnalytics.app.filterToggle[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().FilterToggle;
				ReplayAnalytics.app.graphTitle[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().GraphTitle;
				ReplayAnalytics.app.xs[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().XAxis;
				ReplayAnalytics.app.ys[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().YAxis;
				ReplayAnalytics.app.sizeBys[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().BubbleSize;
				ReplayAnalytics.app.granularities[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().Granularity;
				ReplayAnalytics.app.chartTypes[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().ChartType;
				ReplayAnalytics.app.groupBys[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().GroupBy;
				ReplayAnalytics.app.startDate[loopIndex] = new Date(Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().StartDate);
				ReplayAnalytics.app.currentStartDate[loopIndex] = new Date(Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().StartDate);
				ReplayAnalytics.app.currentDate[loopIndex] = new Date(Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().StartDate);
				ReplayAnalytics.app.currentEndDate[loopIndex] = new Date(Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().EndDate);
				ReplayAnalytics.app.accumulate[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().Accumulate;
				ReplayAnalytics.app.currentActivePanelIndex = loopIndex;
				switch(ReplayAnalytics.app.granularities[ReplayAnalytics.app.currentActivePanelIndex]) {
				case 'Hourly':
					ReplayAnalytics.app.valueGranularities[ReplayAnalytics.app.currentActivePanelIndex] = 1;
					break;
				case 'Daily':
					ReplayAnalytics.app.valueGranularities[ReplayAnalytics.app.currentActivePanelIndex] = 2;
					break;
				case 'Weekly':
					ReplayAnalytics.app.valueGranularities[ReplayAnalytics.app.currentActivePanelIndex] = 3;
					break;
				case 'Monthly':
					ReplayAnalytics.app.valueGranularities[ReplayAnalytics.app.currentActivePanelIndex] = 4;
					break;
				}
				debugger;
				showLoadingMask();
				this.chartSetUp();
			} else {				
				if (ReplayAnalytics.app.publicMode){
					Ext.get('chart'+loopIndex+'Button').hide();
				} else {
					Ext.get('chart'+loopIndex+'Button').show();
					Ext.get('chart'+loopIndex+'Image').show();
				}				
				//Ext.ComponentQuery.query('panel'+loopIndex)[0].setHtml('');
				Ext.ComponentQuery.query('addchartpanel'+loopIndex)[0].setHtml('');
				//this.clearCarousel();
			}
		}
		this.changePanels();
		ReplayAnalytics.app.currentActivePanelIndex = 1;
		this.setFocusOnPanel(ReplayAnalytics.app.currentActivePanelIndex);
		this.addPanelClickListener();
		hideLoadingMask();
		ReplayAnalytics.app.creatingGraphs = false;
	},
	
	addPanelClickListener: function(){
		Ext.ComponentQuery.query('panel1')[0].element.on({singletap: {fn: function(){mainController.setFocusOnPanel(1);}}});
		Ext.ComponentQuery.query('panel2')[0].element.on({singletap: {fn: function(){mainController.setFocusOnPanel(2);}}});
		Ext.ComponentQuery.query('panel3')[0].element.on({singletap: {fn: function(){mainController.setFocusOnPanel(3);}}});
		Ext.ComponentQuery.query('panel4')[0].element.on({singletap: {fn: function(){mainController.setFocusOnPanel(4);}}});
	},

	changePanels: function() {
		if(ReplayAnalytics.app.numberActivePanels == '1') {
			switch(ReplayAnalytics.app.currentActivePanelIndex) {
				case 1:
					this.getPanel2().hide();
					this.getBottomTwoPanelLayout().hide();
					break;
				case 2:
					this.getPanel1().hide();
					this.getBottomTwoPanelLayout().hide();
					break;
				case 3:
					this.getPanel4().hide();
					this.getTopTwoPanelLayout().hide();
					break;
				case 4:
					this.getPanel3().hide();
					this.getTopTwoPanelLayout().hide();
					break;			
			}
		}
		else if(ReplayAnalytics.app.numberActivePanels == '2') {
			if(ReplayAnalytics.app.currentActivePanelIndex == 1 || ReplayAnalytics.app.currentActivePanelIndex == 2) {
				this.getTopTwoPanelLayout().show();
				this.getPanel1().show();
				this.getPanel2().show();
				this.getBottomTwoPanelLayout().hide();
			}
			else {
				this.getBottomTwoPanelLayout().show();
				this.getPanel3().show();
				this.getPanel4().show();
				this.getTopTwoPanelLayout().hide();
			}
		}
		else {
			this.getTopTwoPanelLayout().show();
			this.getBottomTwoPanelLayout().show();
			this.getPanel1().show();
			this.getPanel2().show();
			this.getPanel3().show();
			this.getPanel4().show();
		}
	},
	
	chartSetUp: function() {
		mainController = this;
		this.checkForConfiguredGraphPanels();
		if(ReplayAnalytics.app.dateSet[ReplayAnalytics.currentActivePanelIndex] == true) {
			showLoadingMask();
		}
		mainController.changeDateRangeLabel(ReplayAnalytics.currentActivePanelIndex);
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		if (chartIndex == 5){
			Ext.ComponentQuery.query('interestingmomentgraphpanel')[0].setHtml('');
		} else {
			Ext.ComponentQuery.query('panel'+chartIndex)[0].setHtml('');
		}		
		var chartObject = Ext.ComponentQuery.query('chart[id=chart'+chartIndex+']')[0];
		if(chartObject != undefined){
			chartObject.destroy();
		}
		ReplayAnalytics.app.chartCreated[ReplayAnalytics.app.currentActivePanelIndex] = false;
		mainController.configureGranularities(ReplayAnalytics.app.currentActivePanelIndex,ReplayAnalytics.app.startDate[ReplayAnalytics.app.currentActivePanelIndex],ReplayAnalytics.app.currentEndDate[ReplayAnalytics.app.currentActivePanelIndex]);	
	},
	
	getModelTypeForField: function(field){
		if (field.fieldType == 'DATA_FIELD'){
			return 'int';
		}
		if (field.fieldType == 'CATEGORY_FIELD' || field.fieldType == 'TIME_CATEGORY_FIELD'){
			return 'text';
		}
		if (field.fieldType == 'TIME_FIELD'){
			return 'Date';
		}
	},

	changeModelFields: function() {
		var selectedDatabaseTable = ReplayAnalytics.app.databaseSetting[ReplayAnalytics.app.currentActivePanelIndex];
		var databaseTableId = this.getApplication().getController('DatabaseTable').getDatabaseTableIdForTableName(selectedDatabaseTable);
		var tableFields = this.getApplication().getController('DatabaseTable').getDatabaseTablesFieldsForDatabaseTableId(databaseTableId);
		var dataModelFieldArray = new Array();
		if (tableFields != undefined){			
			var temp = { name: 'length', type: 'int'};
			dataModelFieldArray.push(temp);
			temp = { name: 'groupByBar1', type: 'int'};
			dataModelFieldArray.push(temp);
			temp = { name: 'groupByBar2', type: 'int'};
			dataModelFieldArray.push(temp);
			temp = { name: 'groupByBar3', type: 'int'};
			dataModelFieldArray.push(temp);
			temp = { name: 'groupByBar4', type: 'int'};
			dataModelFieldArray.push(temp);
			temp = { name: 'Other', type: 'text'};
			dataModelFieldArray.push(temp);
			for (var index = 0 ; index < tableFields.length; index++){
				temp = { name: tableFields[index].fieldLabel, type: mainController.getModelTypeForField(tableFields[index])};
				dataModelFieldArray.push(temp);
			}
		}
		ReplayAnalytics.model.DataModel.setFields(dataModelFieldArray);
	},	

	configureGranularities: function(i, startDate, endDate) {
		this.changeModelFields();
		var yearDifferential = endDate.getFullYear() - startDate.getFullYear();
		var monthDifferential = 12 * yearDifferential + (endDate.getMonth() - startDate.getMonth());
		if(monthDifferential == 0) {
			monthDifferential = 1;
		}
		var dayDifferential = this.DatedaysBetween(startDate, endDate);
		var weekDifferential = Math.ceil(dayDifferential/7);
		if(weekDifferential == 0) {
			weekDifferential = 1;
		}
		var hourDifferential = this.DatehoursBetween(startDate,endDate);
		if(hourDifferential <= 0){
			hourDifferential = 24;
		}
		var instancestore = new Array();
		switch(ReplayAnalytics.app.granularities[i]) {
		case 'Hourly':
			ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex] = Math.round(100 / hourDifferential);	
			Ext.ComponentQuery.query('slider'+i)[0].setMaxValue(ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex] * hourDifferential);
			this.generateURLForChartData(instancestore, i, hourDifferential);
			break;
		case 'Daily':
			ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex] = Math.round(100 / dayDifferential);	
			Ext.ComponentQuery.query('slider'+i)[0].setMaxValue(ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex] * dayDifferential);
			this.generateURLForChartData(instancestore, i, dayDifferential);
			break;
		case 'Weekly':
			ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex] = Math.round(100 / (weekDifferential - 1));	
			Ext.ComponentQuery.query('slider'+i)[0].setMaxValue(ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex] * (weekDifferential - 1));
			mod = weekDifferential % 7;
			seven = 7;
			if(mod == 0) {
				this.generateURLForChartData(instancestore, i, weekDifferential);
			}
			else {			
				this.generateURLForChartData(instancestore, i, weekDifferential - 1);
			}
			break;
		case 'Monthly':
			ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex] = Math.round(100 / monthDifferential);	
			Ext.ComponentQuery.query('slider'+i)[0].setMaxValue(ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex] * monthDifferential);
			this.generateURLForChartData(instancestore, i, monthDifferential);
			break;
		}
	},

	DatedaysBetween: function(date1, date2) {
		var one_day = 1000 * 60 * 60 * 24; //Get 1 day in milliseconds		
		var date1_ms = date1.getTime(); // Convert both dates to milliseconds
		var date2_ms = date2.getTime();		
		var difference_ms = date2_ms - date1_ms; // Calculate the difference in milliseconds	
		return Math.ceil(difference_ms/one_day);  	// Convert back to days and return
	},
	
	DatehoursBetween: function(date1, date2) {
		var one_hour = 1000 * 60 * 60;  //Get 1 hour in milliseconds		
		var date1_ms = date1.getTime();  // Convert both dates to milliseconds
		var date2_ms = date2.getTime();		
		var difference_ms = date2_ms - date1_ms;  // Calculate the difference in milliseconds		
		return Math.ceil(difference_ms/one_hour);  // Convert back to hours and return
	},
	
	// Unified Controller Data Decoding function
	decodeUnifiedData: function(xhr, i, instancestore){
		logMessage('JSON for decoding is==' + xhr.responseText);
		response = Ext.JSON.decode(xhr.responseText.trim());
		dateArray = new Array();
		ReplayAnalytics.app.groupByBarLabels = response.groupByBarArray;		
		this.changeModelFields();
		for ( index = 0; index < response.data.length; index++)        
        {
			dateArray[index] = response.dateArray[index];
			instancestore[index] = Ext.create('Ext.data.Store', {
		        autoLoad: true,
		    	model: 'ReplayAnalytics.model.DataModel',
		    	data: response.data[index],
		        proxy: {
		            type: 'memory',                 		            
		            reader: {
		                type: 'json',
		                rootProperty : 'data'		                
		            }
		        }
		    });      	 
        }
		ReplayAnalytics.app.globalDateArray[ReplayAnalytics.app.currentActivePanelIndex] = dateArray;
		ReplayAnalytics.app.jsonstore[ReplayAnalytics.app.currentActivePanelIndex] = instancestore;	
		ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex] = response.dataField;
		ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex] = response.categoryField;
		if (i > 5){
			return;
		}
		ReplayAnalytics.app.maximumPositions[i] = Ext.ComponentQuery.query('slider'+i)[0].getMaxValue();
		
		if (response.yMax != undefined){
			ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex] = response.yMax;
			ReplayAnalytics.app.YmaxReceived[ReplayAnalytics.app.currentActivePanelIndex] = true;
			if (ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex] != undefined && ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex] > 0){
				ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex] = parseInt(ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex]) + (parseInt(ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex]) * ReplayAnalytics.app.graphMaxValueMargin);
				if (ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex] == 0){
					ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex] = 10;
				}
			}
		}
		
		if (response.xMax != undefined){
			ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex] = response.xMax;
			ReplayAnalytics.app.XmaxReceived[ReplayAnalytics.app.currentActivePanelIndex] = true;
			if (ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex] != undefined && ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex] > 0){
				ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex] = parseInt(ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex]) + (parseInt(ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex]) * ReplayAnalytics.app.graphMaxValueMargin);
				if (ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex] == 0){
					ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex] = 10;
				}
			}
		}
		
		if (response.interestingMoments != undefined){
			ReplayAnalytics.app.interestingMomentsPoints[ReplayAnalytics.app.currentActivePanelIndex] = response.interestingMoments;
		}
		
		finishTime = new Date();
		var loadingTime = finishTime - startTime;
		console.info('Graph Loading/Decoding time for Panel' + ReplayAnalytics.app.currentActivePanelIndex +' is = '+loadingTime+'ms');
		this.getApplication().getController('Playback').resetFunction();		
	},
	
	generateURLForChartData: function(instancestore, i, difference){
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		var databaseName = ReplayAnalytics.app.databaseSetting[chartIndex];
		var chartType = ReplayAnalytics.app.chartTypes[chartIndex];
		var absStartDate = dateFormat(ReplayAnalytics.app.startDate[chartIndex],"yyyy-mm-dd");
		var absEndDate = dateFormat(ReplayAnalytics.app.currentEndDate[chartIndex],"yyyy-mm-dd");
		var granularity = ReplayAnalytics.app.granularities[chartIndex];
		var x_axis = ReplayAnalytics.app.xs[chartIndex];
		var y_axis = ReplayAnalytics.app.ys[chartIndex];
		var groupBy = ReplayAnalytics.app.groupBys[chartIndex];
		var accum = ReplayAnalytics.app.accumulate[chartIndex];
		var imType1Setting = ReplayAnalytics.app.interestingMomentType1Setting;
		var imType2Setting = ReplayAnalytics.app.interestingMomentType2Setting;
		var imType3Setting = ReplayAnalytics.app.interestingMomentType3Setting;
		var imType4Setting = ReplayAnalytics.app.interestingMomentType4Setting;
		var filterString  = this.getApplication().getController('Filter').getFilterStringForChart();
		var url = 'getUnifiedData.do?databaseName=' + databaseName + '&chartType=' + chartType + '&absStartDate=' + absStartDate +
		'&absEndDate='+ absEndDate + '&differential=' + difference + '&granularity='+ granularity + '&x_axis='+ x_axis + 
		'&y_axis=' + y_axis + '&groupBy=' + groupBy + '&accum=' + accum + '&imType1Setting=' + imType1Setting +
		'&imType2Setting=' + imType2Setting + '&imType3Setting=' + imType3Setting + '&imType4Setting=' + imType4Setting;		
		if (filterString != "" && this.getFilterSetting().getValue() == 'On'){
			url = url + "&filterString=" + filterString;
		}
		this.getUnifiedData(url, i, instancestore);
	},
	
	getUnifiedData: function(url, i, instancestore){
		startTime = new Date();
		Ext.Ajax.request({			  
            url: url,  
            disableCaching: false,
            success: function(xhr) {
          	  	mainController.decodeUnifiedData(xhr, i, instancestore);
            },
            failure: function(response) {
            	hideLoadingMask();
            	logMessage('Unified Request Failed for URL-' + url);
            },
		});
	},
	
	setFocusOnPanel: function(index) {
		if (index != 0){
			if (this.getGlobalSyncButton().getPressedButtons().length != 0){
				this.getSettingsButton().setDisabled(false);
				this.getGlobalSettingsButton().setDisabled(false);
			}
			this.getGlobalSyncButton().setPressedButtons([false]);
			this.getFourPanelLayout().setCls('unselected-panel');
			this.getPanel1().setCls('unselected-panel');
			this.getPanel2().setCls('unselected-panel');
			this.getPanel3().setCls('unselected-panel');
			this.getPanel4().setCls('unselected-panel');
			this.getSlider0().hide();
			this.getSlider2().hide();
			this.getSlider3().hide();
			this.getSlider4().hide();
			this.getSlider1().hide();
			if (index != 5 && index != 0){
				Ext.ComponentQuery.query('panel'+index)[0].setCls('selected-panel');
			}		
			Ext.ComponentQuery.query('slider'+index)[0].show();
			ReplayAnalytics.app.currentActivePanelIndex = index;
			this.changeDateRangeLabel(index);
		}		
	},
	
	setFocusOnPanel1: function() {
		this.setFocusOnPanel(1);
	},
	
	setFocusOnPanel2: function() {
		this.setFocusOnPanel(2);
	},
	
	setFocusOnPanel3: function() {
		this.setFocusOnPanel(3);
	},
	
	setFocusOnPanel4: function() {
		this.setFocusOnPanel(4);
	},
	
	changeDateRangeLabel: function(panelIndex){
		if (ReplayAnalytics.app.isChartConfigured[panelIndex]){
			try{
				var startDate = dateFormat(ReplayAnalytics.app.startDate[panelIndex],'m/d/yy');
				var endDate = dateFormat(ReplayAnalytics.app.currentEndDate[panelIndex],'m/d/yy');
				var labelString = "<p class ='dateRangeLabelClass'>" + startDate + " - " + endDate + "</p>";
				Ext.ComponentQuery.query('container[id=daterangelabel]')[0].setHtml(labelString);
			} catch(err){
				Ext.ComponentQuery.query('container[id=daterangelabel]')[0].setHtml('');
			}
		} else {
			Ext.ComponentQuery.query('container[id=daterangelabel]')[0].setHtml('');
		}		
	},
	
	checkForConfiguredGraphPanels: function(){
		var loopIndex = 1;
		for(;loopIndex <= ReplayAnalytics.app.numberActivePanels; loopIndex++){
			Ext.getStore('UserSettings'+loopIndex).load();
			if(Ext.getStore('UserSettings'+loopIndex).getData().items[0] != undefined) {
				ReplayAnalytics.app.isChartConfigured[loopIndex] = true;
			}
		}
	},
});