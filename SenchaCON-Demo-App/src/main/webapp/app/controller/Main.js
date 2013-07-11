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
		        SenchaCon2013Demo.app.panelSettings[SenchaCon2013Demo.app.currentActivePanelIndex] = url;
		        SenchaCon2013Demo.app.panelData[SenchaCon2013Demo.app.currentActivePanelIndex] = myCookie;
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
	        SenchaCon2013Demo.app.panelSettings[SenchaCon2013Demo.app.currentActivePanelIndex] = options.url;
	        SenchaCon2013Demo.app.panelData[SenchaCon2013Demo.app.currentActivePanelIndex] = response.responseText;
		}  
		hideLoadingMask();
	});

Ext.define('SenchaCon2013Demo.controller.Main', {
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
	        'SenchaCon2013Demo.model.DataModel'
	],
	config: {
		refs: {
			'mainController': 'maincontroller',
			'dataModel': 'datamodel',
			'mainContainer': 'senchademomain',						
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
			'globalSyncButton': 'segmentedbutton[id=globalsynctogglebutton]',
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
		for (i = 0; i < SenchaCon2013Demo.app.newChart.length; i++){
			var obj = SenchaCon2013Demo.app.newChart[i];
			if (obj != undefined){
				if (obj.getLegend() != undefined){
					obj.getLegend().destroy();
				}		
				obj.destroy();
			}
		}
	},
	
	handleTitleBarButtons: function(){
		this.getSettingsButton().setDisabled(false);
		this.getSettingsButton().show();
	},
	
	loadStores: function() {
		this.handleTitleBarButtons();
		this.checkForConfiguredGraphPanels();	
		SenchaCon2013Demo.app.creatingGraphs = true;
		Ext.getStore('GlobalSettingsStore').load();
		if (Ext.getStore('GlobalSettingsStore').getData().items[0] != undefined){
			SenchaCon2013Demo.app.interestingMoments = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().InterestingMoments;
			SenchaCon2013Demo.app.replayCommentsSetting = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().ReplayComments;
			SenchaCon2013Demo.app.replaySpeed = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().ReplaySpeed;
			SenchaCon2013Demo.app.numberActivePanels = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().NumberOfPanels;
			SenchaCon2013Demo.app.interestingMomentType3Setting = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().InterestingMomentType3Setting;
			SenchaCon2013Demo.app.interestingMomentType4Setting = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().InterestingMomentType4Setting;
			SenchaCon2013Demo.app.interestingMomentType1Setting = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().InterestingMomentType1Setting;
			SenchaCon2013Demo.app.interestingMomentType2Setting = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().InterestingMomentType2Setting;
		}
		this.getApplication().getController('Settings').updateChartAnimationSettings();
		this.changePanels();
		var loopIndex = 1;
		for(;loopIndex <= SenchaCon2013Demo.app.numberActivePanels; loopIndex++){
			Ext.getStore('UserSettings'+loopIndex).load();
			if(Ext.getStore('UserSettings'+loopIndex).getData().items[0] != undefined) {
				Ext.get('chart'+loopIndex+'Button').hide();
				Ext.get('chart'+loopIndex+'Image').hide();
				SenchaCon2013Demo.app.databaseSetting[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().Database;
				SenchaCon2013Demo.app.filterToggle[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().FilterToggle;
				SenchaCon2013Demo.app.graphTitle[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().GraphTitle;
				SenchaCon2013Demo.app.xs[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().XAxis;
				SenchaCon2013Demo.app.ys[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().YAxis;
				SenchaCon2013Demo.app.sizeBys[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().BubbleSize;
				SenchaCon2013Demo.app.granularities[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().Granularity;
				SenchaCon2013Demo.app.chartTypes[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().ChartType;
				SenchaCon2013Demo.app.groupBys[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().GroupBy;
				SenchaCon2013Demo.app.startDate[loopIndex] = new Date(Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().StartDate);
				SenchaCon2013Demo.app.currentStartDate[loopIndex] = new Date(Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().StartDate);
				SenchaCon2013Demo.app.currentDate[loopIndex] = new Date(Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().StartDate);
				SenchaCon2013Demo.app.currentEndDate[loopIndex] = new Date(Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().EndDate);
				SenchaCon2013Demo.app.accumulate[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().Accumulate;
				SenchaCon2013Demo.app.currentActivePanelIndex = loopIndex;
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
				showLoadingMask();
				this.chartSetUp();
			} else {				
				if (SenchaCon2013Demo.app.publicMode){
					Ext.get('chart'+loopIndex+'Button').hide();
				} else {
					Ext.get('addchartpanel'+loopIndex).show();
					Ext.get('chart'+loopIndex+'Button').show();
					Ext.get('chart'+loopIndex+'Image').show();
				}				
				//Ext.ComponentQuery.query('panel'+loopIndex)[0].setHtml('');
				Ext.ComponentQuery.query('addchartpanel'+loopIndex)[0].setHtml('');
				//this.clearCarousel();
			}
		}
		this.changePanels();
		SenchaCon2013Demo.app.currentActivePanelIndex = 1;
		this.setFocusOnPanel(SenchaCon2013Demo.app.currentActivePanelIndex);
		this.addPanelClickListener();
		hideLoadingMask();
		SenchaCon2013Demo.app.creatingGraphs = false;
	},
	
	addPanelClickListener: function(){
		Ext.ComponentQuery.query('panel1')[0].element.on({singletap: {fn: function(){mainController.setFocusOnPanel(1);}}});
		Ext.ComponentQuery.query('panel2')[0].element.on({singletap: {fn: function(){mainController.setFocusOnPanel(2);}}});
		Ext.ComponentQuery.query('panel3')[0].element.on({singletap: {fn: function(){mainController.setFocusOnPanel(3);}}});
		Ext.ComponentQuery.query('panel4')[0].element.on({singletap: {fn: function(){mainController.setFocusOnPanel(4);}}});
	},

	changePanels: function() {
		if(SenchaCon2013Demo.app.numberActivePanels == '1') {
			switch(SenchaCon2013Demo.app.currentActivePanelIndex) {
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
		else if(SenchaCon2013Demo.app.numberActivePanels == '2') {
			if(SenchaCon2013Demo.app.currentActivePanelIndex == 1 || SenchaCon2013Demo.app.currentActivePanelIndex == 2) {
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
		if(SenchaCon2013Demo.app.dateSet[SenchaCon2013Demo.currentActivePanelIndex] == true) {
			showLoadingMask();
		}
		mainController.changeDateRangeLabel(SenchaCon2013Demo.currentActivePanelIndex);
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;		
		Ext.ComponentQuery.query('panel'+chartIndex)[0].setHtml('');	
		var chartObject = Ext.ComponentQuery.query('chart[id=chart'+chartIndex+']')[0];
		if(chartObject != undefined){
			chartObject.destroy();
		}
		SenchaCon2013Demo.app.chartCreated[SenchaCon2013Demo.app.currentActivePanelIndex] = false;
		mainController.configureGranularities(SenchaCon2013Demo.app.currentActivePanelIndex,SenchaCon2013Demo.app.startDate[SenchaCon2013Demo.app.currentActivePanelIndex],SenchaCon2013Demo.app.currentEndDate[SenchaCon2013Demo.app.currentActivePanelIndex]);	
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
		var selectedDatabaseTable = SenchaCon2013Demo.app.databaseSetting[SenchaCon2013Demo.app.currentActivePanelIndex];
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
		SenchaCon2013Demo.model.DataModel.setFields(dataModelFieldArray);
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
		switch(SenchaCon2013Demo.app.granularities[i]) {
		case 'Hourly':
			SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex] = Math.round(100 / hourDifferential);	
			Ext.ComponentQuery.query('slider'+i)[0].setMaxValue(SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex] * hourDifferential);
			this.generateURLForChartData(instancestore, i, hourDifferential);
			break;
		case 'Daily':
			SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex] = Math.round(100 / dayDifferential);	
			Ext.ComponentQuery.query('slider'+i)[0].setMaxValue(SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex] * dayDifferential);
			this.generateURLForChartData(instancestore, i, dayDifferential);
			break;
		case 'Weekly':
			SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex] = Math.round(100 / (weekDifferential - 1));	
			Ext.ComponentQuery.query('slider'+i)[0].setMaxValue(SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex] * (weekDifferential - 1));
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
			SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex] = Math.round(100 / monthDifferential);	
			Ext.ComponentQuery.query('slider'+i)[0].setMaxValue(SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex] * monthDifferential);
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
		SenchaCon2013Demo.app.groupByBarLabels = response.groupByBarArray;		
		this.changeModelFields();
		for ( index = 0; index < response.data.length; index++)        
        {
			dateArray[index] = response.dateArray[index];
			instancestore[index] = Ext.create('Ext.data.Store', {
		        autoLoad: true,
		    	model: 'SenchaCon2013Demo.model.DataModel',
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
		SenchaCon2013Demo.app.globalDateArray[SenchaCon2013Demo.app.currentActivePanelIndex] = dateArray;
		SenchaCon2013Demo.app.jsonstore[SenchaCon2013Demo.app.currentActivePanelIndex] = instancestore;	
		SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex] = response.dataField;
		SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex] = response.categoryField;
		if (i > 5){
			return;
		}
		SenchaCon2013Demo.app.maximumPositions[i] = Ext.ComponentQuery.query('slider'+i)[0].getMaxValue();
		
		if (response.yMax != undefined){
			SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex] = response.yMax;
			SenchaCon2013Demo.app.YmaxReceived[SenchaCon2013Demo.app.currentActivePanelIndex] = true;
			if (SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex] != undefined && SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex] > 0){
				SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex] = parseInt(SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex]) + (parseInt(SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex]) * SenchaCon2013Demo.app.graphMaxValueMargin);
				if (SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex] == 0){
					SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex] = 10;
				}
			}
		}
		
		if (response.xMax != undefined){
			SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex] = response.xMax;
			SenchaCon2013Demo.app.XmaxReceived[SenchaCon2013Demo.app.currentActivePanelIndex] = true;
			if (SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex] != undefined && SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex] > 0){
				SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex] = parseInt(SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex]) + (parseInt(SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex]) * SenchaCon2013Demo.app.graphMaxValueMargin);
				if (SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex] == 0){
					SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex] = 10;
				}
			}
		}
		
		if (response.interestingMoments != undefined){
			SenchaCon2013Demo.app.interestingMomentsPoints[SenchaCon2013Demo.app.currentActivePanelIndex] = response.interestingMoments;
		}
		
		finishTime = new Date();
		var loadingTime = finishTime - startTime;
		console.info('Graph Loading/Decoding time for Panel' + SenchaCon2013Demo.app.currentActivePanelIndex +' is = '+loadingTime+'ms');
		this.getApplication().getController('Playback').resetFunction();		
	},
	
	generateURLForChartData: function(instancestore, i, difference){
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		var databaseName = SenchaCon2013Demo.app.databaseSetting[chartIndex];
		var chartType = SenchaCon2013Demo.app.chartTypes[chartIndex];
		var absStartDate = dateFormat(SenchaCon2013Demo.app.startDate[chartIndex],"yyyy-mm-dd");
		var absEndDate = dateFormat(SenchaCon2013Demo.app.currentEndDate[chartIndex],"yyyy-mm-dd");
		var granularity = SenchaCon2013Demo.app.granularities[chartIndex];
		var x_axis = SenchaCon2013Demo.app.xs[chartIndex];
		var y_axis = SenchaCon2013Demo.app.ys[chartIndex];
		var groupBy = SenchaCon2013Demo.app.groupBys[chartIndex];
		var url = 'getUnifiedData.do?databaseName=' + databaseName + '&chartType=' + chartType + '&absStartDate=' + absStartDate +
		'&absEndDate='+ absEndDate + '&differential=' + difference + '&granularity='+ granularity + '&x_axis='+ x_axis + 
		'&y_axis=' + y_axis + '&groupBy=' + groupBy;
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
			SenchaCon2013Demo.app.currentActivePanelIndex = index;
			this.getApplication().getController('Playback').pauseFunction();
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
		if (SenchaCon2013Demo.app.isChartConfigured[panelIndex]){
			try{
				var startDate = dateFormat(SenchaCon2013Demo.app.startDate[panelIndex],'m/d/yy');
				var endDate = dateFormat(SenchaCon2013Demo.app.currentEndDate[panelIndex],'m/d/yy');
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
		for(;loopIndex <= SenchaCon2013Demo.app.numberActivePanels; loopIndex++){
			Ext.getStore('UserSettings'+loopIndex).load();
			if(Ext.getStore('UserSettings'+loopIndex).getData().items[0] != undefined) {
				SenchaCon2013Demo.app.isChartConfigured[loopIndex] = true;
			}
		}
	},
});