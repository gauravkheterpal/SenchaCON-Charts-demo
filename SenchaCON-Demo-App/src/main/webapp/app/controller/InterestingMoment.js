var interestingMomentController;
Ext.define('ReplayAnalytics.controller.InterestingMoment', {
	extend : 'Ext.app.Controller',
	xtype: 'interestingmomentcontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
			'interestingMomentGraphPanel': 'interestingmomentgraphpanel',
			'interestingMomentGraphTitleBar' : 'toolbar[id=imgraphtitlebar]',
			'closeInterestingMomentPanel' : 'button[id=closeinterestingmomentgraphpanelbutton]',
			'imFoundDialog' : 'imfounddialog',
			'manualIMButton': 'button[id=manualimbutton]',
			'manualIMDialog': 'manualimdialog',
			'closeManualIMDialog': 'button[id=closemanualimdialogbutton]',
			'saveManualIM': 'button[id=savemanualimbutton]',
			'manualIMMessageField': 'textareafield[id=manualimmessagefield]',
			'imTabPanel': 'tabpanel[id=imtabpanel]',
			'manualIMCallout': 'manualimcallout',
			'showIMReplayGraph': 'button[id=replayinterestingmomentbutton]',
			'showTrendGraph' : 'button[id=showtrendgraphbutton]',
			'nextIMTrend' : 'button[id=nextinterestingmomentbutton]',
			'previousIMTrend' : 'button[id=previousinterestingmomentbutton]',
		},
		control: {
			'showIMReplayGraph' : {
				tap: 'showIMReplayGraph'
			},
			'showTrendGraph' : {
				tap: 'showIMTrendGraph',
			},
			'nextIMTrend' : {
				tap: 'showNextIMTrend',
			},
			'previousIMTrend' : {
				tap: 'showPreviousIMTrend',
			},
			'closeInterestingMomentPanel': {
				tap: 'closeInterestingMomentPanel'
			},
			'manualIMButton': {
				tap: 'addEditManualIMForPosition',
			},
			'closeManualIMDialog': {
				tap: 'closeManualIMDialog',
			},
			'saveManualIM': {
				tap: 'saveManualIM',
			},
		},
	},
	
	launch: function(){
		interestingMomentController = this;
	},
	
	showInterestingMomentGraphPanel: function(){
		this.getInterestingMomentGraphPanel().show();		
	},
	
	closeInterestingMomentPanel : function(){
		this.getInterestingMomentGraphPanel().hide();
		ReplayAnalytics.app.currentActivePanelIndex = ReplayAnalytics.app.previousActivePanelIndex;
		this.getApplication().getController('Main').setFocusOnPanel(ReplayAnalytics.app.currentActivePanelIndex);
		ReplayAnalytics.app.getController('Playback').resumeLastPlaybackAction();
		ReplayAnalytics.app.isIMGraphRunning = false;
	},
	
	getNewAxisForTimeAxisOption: function(axis, newGranularity){
		if (axis == 'Date'){
			if (newGranularity == 'Hourly'){
				axis = 'Hour';
			}
		} else if (axis == 'Week'){
			if (newGranularity == 'Hourly'){
				axis = 'Hour';
			} else if (newGranularity == 'Daily'){
				axis = 'Date';
			}
		} else if (axis == 'Month'){
			if (newGranularity == 'Hourly'){
				axis = 'Hour';
			} else if (newGranularity == 'Daily'){
				axis = 'Date';
			} else if (newGranularity == 'Weekly'){
				axis = 'Week';
			}
		} else if (axis == 'DayOfWeek'){
			if (newGranularity == 'Hourly'){
				axis = 'Hour';
			}
		}
		return axis;
	},
	
	isTimeAxisOption: function(axis){
		if (axis == 'Day' || axis == 'Week' || axis == 'Hour' || axis == 'DayOfWeek' || axis == 'Month' ||
				axis == 'Time (Date)' || axis == ' Time (Week)' || axis == 'Time (Hour)' || axis == 'Time (Day Of Week)' || axis == 'Time (Month)'){
			return true;
		}
		return false;
	},
	
	addEditManualIMForPosition: function(){
		this.getManualIMMessageField().setValue('');
		if (ReplayAnalytics.app.currentDashboard == undefined || ReplayAnalytics.app.currentDashboard.dashboardId == undefined){
			Ext.Msg.alert('ReplayAnalytics &#153;', 'You need to save your dashboard first to add replay comments.', Ext.emptyFn);
		} else {
			this.getManualIMDialog().show();
		}
	},
	
	getAllManualIMsForCurrentChart: function(){
		var activePanel = ReplayAnalytics.app.currentActivePanelIndex;
		try{
			if (ReplayAnalytics.app.currentDashboard != undefined){
				switch(activePanel){
					case 1: manualIMs = ReplayAnalytics.app.currentDashboard.panel1Settings.manualIMs; break;
					case 2: manualIMs = ReplayAnalytics.app.currentDashboard.panel2Settings.manualIMs; break;
					case 3: manualIMs = ReplayAnalytics.app.currentDashboard.panel3Settings.manualIMs; break;
					case 4: manualIMs = ReplayAnalytics.app.currentDashboard.panel4Settings.manualIMs; break;
				}
				ReplayAnalytics.app.currentChartManualIMs = manualIMs;
			}			
		} catch(err){
		}
	},
	
	getAllManualIMsForCurrentIndex: function(){
		var activePanel = ReplayAnalytics.app.currentActivePanelIndex;
		var imIndex = Math.floor(ReplayAnalytics.app.sliders[activePanel].getValue() / ReplayAnalytics.app.differentialMultiplier[activePanel]);
		var manualIMs = undefined;
		try{
			if (ReplayAnalytics.app.currentDashboard != undefined){
				switch(activePanel){
					case 1: manualIMs = ReplayAnalytics.app.currentDashboard.panel1Settings.manualIMs; break;
					case 2: manualIMs = ReplayAnalytics.app.currentDashboard.panel2Settings.manualIMs; break;
					case 3: manualIMs = ReplayAnalytics.app.currentDashboard.panel3Settings.manualIMs; break;
					case 4: manualIMs = ReplayAnalytics.app.currentDashboard.panel4Settings.manualIMs; break;
				}
				ReplayAnalytics.app.currentManualIMs = new Array();
				ReplayAnalytics.app.currentChartManualIMs = manualIMs;
				if (manualIMs != undefined && manualIMs != null && manualIMs.length > 0){
					var j = 0;
					for( var i = 0; i < manualIMs.length; i++){
						if (manualIMs[i].imIndex == imIndex){
							ReplayAnalytics.app.currentManualIMs[j] = manualIMs[i];
							j++;
						}
					}
				}
			}			
		} catch(err){
		}
	},
	
	saveManualIM: function(){
		this.getManualIMDialog().hide();
		var activePanel = ReplayAnalytics.app.currentActivePanelIndex;
		var dashboardSettingId = null;
		switch(activePanel){
			case 1:  dashboardSettingId = ReplayAnalytics.app.currentDashboard.panel1Settings.id; break;
			case 2:  dashboardSettingId = ReplayAnalytics.app.currentDashboard.panel2Settings.id; break;
			case 3:  dashboardSettingId = ReplayAnalytics.app.currentDashboard.panel3Settings.id; break;
			case 4:  dashboardSettingId = ReplayAnalytics.app.currentDashboard.panel4Settings.id; break;
		}
		var manualIMId = undefined;
		var imIndex = Math.floor(ReplayAnalytics.app.sliders[activePanel].getValue() / ReplayAnalytics.app.differentialMultiplier[activePanel]);
		var imMessage = this.getManualIMMessageField().getValue();
		showLoadingMask();
		Ext.Ajax.request({			  
            url: 'saveManualIM.do',
            method: 'POST',
            params: {
            	userId: ReplayAnalytics.app.currentUserSession.userId,   
            	dashboardSettingId: dashboardSettingId,
            	dashboardId: ReplayAnalytics.app.currentDashboard.dashboardId,
            	manualIMId: manualIMId,
            	imIndex: imIndex,
            	imMessage: imMessage,
            },
            success: this.handleManualIMSave,
            failure: function(response) {
           		hideLoadingMask();
           		logMessage('Failure Saving manual IM.');
           },
		});
	},
	
	closeManualIMDialog: function(){
		this.getManualIMDialog().hide();
	},
	
	handleManualIMSave: function(response){
		var responseJSON = Ext.JSON.decode(response.responseText);
		if (responseJSON.error != undefined){
			Ext.Msg.alert('Error', responseJSON.description, Ext.emptyFn);	
		} else {
			ReplayAnalytics.app.currentDashboard = responseJSON.dashboard;
			for (i = 0; i < ReplayAnalytics.app.userDashboardDetails.length; i++){
				if (ReplayAnalytics.app.userDashboardDetails[i].dashboardId == responseJSON.dashboard.dashboardId){
					ReplayAnalytics.app.userDashboardDetails[i] = responseJSON.dashboard;
				}
			}
			try{
				var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
				var carousel = Ext.ComponentQuery.query('carousel[id=carousel'+ chartIndex +']')[0];
				carousel.removeAt(carousel.getItems().items.length - 1);
				interestingMomentController.addIMCommentListToCarousel(chartIndex);
				carousel.setActiveItem(carousel.getItems().items.length);
			} catch(err){
			}
			Ext.Msg.alert('Success', responseJSON.description, Ext.emptyFn);
		}
		hideLoadingMask();
		interestingMomentController.getManualIMMessageField().setValue('');
	},
	
	checkForInterestingMoment: function(chartIndex, newPosition){
		var imPointPosition = Math.floor(newPosition / ReplayAnalytics.app.differentialMultiplier[chartIndex]);
		if (chartIndex != 0){
			this.getAllManualIMsForCurrentIndex();
			if (ReplayAnalytics.app.replayCommentsSetting == 'On' && ReplayAnalytics.app.currentManualIMs != undefined 
					&& ReplayAnalytics.app.currentManualIMs.length > 0){
				this.getApplication().getController('Playback').pauseFunction();
				this.handleManualIMsForChart(chartIndex, 0, imPointPosition);
			} else if (ReplayAnalytics.app.interestingMoments == 'On') {
				this.checkForAutoIMs(chartIndex, imPointPosition, false);
			}
		} else {
			this.checkForGlobalSyncIMs(imPointPosition, 0, 0, false, false);
		}							
	},
	
	checkForAutoIMs: function(chartIndex, imPointPosition, playbackPaused){
		var imPoint = undefined;
		if (ReplayAnalytics.app.interestingMomentsPoints[chartIndex] != undefined){
			var j = 0;
			for (var i = 0; i < ReplayAnalytics.app.interestingMomentsPoints[chartIndex].length; i++){
				if (ReplayAnalytics.app.interestingMomentsPoints[chartIndex][i].Index == imPointPosition){
					if (j == 0){
						imPoint = ReplayAnalytics.app.interestingMomentsPoints[chartIndex][i];
					}				
					ReplayAnalytics.app.allIMPointsAtCurrentIndex[j] = ReplayAnalytics.app.interestingMomentsPoints[chartIndex][i];
					j++;
				}
			}			
			if (imPoint != undefined && !ReplayAnalytics.app.isIMGraphRunning){
				ReplayAnalytics.app.isIMGraphRunning = true;
				this.getApplication().getController('Playback').pauseFunction();
				this.showIMFoundCallout(chartIndex, imPoint);
			} else {
				ReplayAnalytics.app.isIMGraphRunning = false;
			}
		} 
		if (!ReplayAnalytics.app.isIMGraphRunning && playbackPaused){
			ReplayAnalytics.app.getController('Playback').resumeLastPlaybackAction();
		}
	},
	
	handleManualIMsForChart: function(chartIndex, i, imPointPosition){
		if(i < ReplayAnalytics.app.currentManualIMs.length){
			if (ReplayAnalytics.app.currentManualIMs[i] != undefined){
				this.showManualIMCallout(chartIndex, ReplayAnalytics.app.currentManualIMs[i], i, imPointPosition);
			}
		}else{
			this.checkForAutoIMs(chartIndex, imPointPosition, true);
		}
	},
	
	showManualIMCallout: function(index, manualIM, i, imPointPosition){
		var panelObj = Ext.ComponentQuery.query('panel' + index)[0];
		var width = panelObj.element.getWidth(), height = panelObj.element.getHeight();
		var x = panelObj.element.getX(), y = panelObj.element.getY();
		var callOutX = x + width*.1, callOutY = y;
		var calloutText = '<div align="center" style="color:black; font-size: 12px; padding: 30px; padding-left: 20px;">' + manualIM.imMessage + '</div>';
		var style = 'background-image: url(lib/images/callout-image-inverted.png); background-color: transparent; padding-left:12px; background-size: 100%;';
		if (i % 2 == 1){
			callOutY = (y + height) - 135;
			calloutText = '<div align="center" style="color:black; font-size: 12px; padding: 30px; padding-left: 20px; padding-top: 60px;">' + manualIM.imMessage + '</div>';
			style = 'background-image: url(lib/images/callout-image-inverted-flipped.png); background-color: transparent; padding-left:12px; background-size: 100%';
		}
		this.getManualIMCallout().setStyle(style);
		this.getManualIMCallout().show();
		this.getManualIMCallout().element.setXY(callOutX, callOutY);		
		this.getManualIMCallout().setHtml(calloutText);
		var task = Ext.create('Ext.util.DelayedTask', function() {
			task.cancel();
			i++;				
			this.handleManualIMsForChart(index, i, imPointPosition);
		}, this);
		task.delay(2000);	
	},
	
	showIMFoundCallout: function(index, imPoint){
		var panelObj = Ext.ComponentQuery.query('panel' + index)[0];
		var width = panelObj.element.getWidth(), height = panelObj.element.getHeight();
		var x = panelObj.element.getX(), y = panelObj.element.getY();
		var callOutX = x + width*.6, callOutY = y + height*.2;
		this.getImFoundDialog().show();
		this.getImFoundDialog().element.setXY(callOutX, y);
		var calloutText = '<div align="center" style="color:black; font-size: 12px; padding: 30px; padding-left: 20px;">Found an interesting moment. ' + imPoint.Message + '</div>'
		this.getImFoundDialog().setHtml(calloutText);
		var task = Ext.create('Ext.util.DelayedTask', function() {
			task.cancel();
		    this.getImFoundDialog().hide();
			this.initInterestingMomentGraph(imPoint);
		}, this);
		task.delay(ReplayAnalytics.app.replaySpeed);
	},
	
	initInterestingMomentGraph: function(imPoint){
		ReplayAnalytics.app.previousActivePanelIndex = ReplayAnalytics.app.currentActivePanelIndex;
		this.showInterestingMomentGraphPanel();
		this.getManualIMCallout().hide();
		ReplayAnalytics.app.activeIMPoint = imPoint;
		this.showIMTrendingGraphForIMPoint(imPoint, ReplayAnalytics.app.interestingMomentGraphIndex);
		this.handleButtonsAndTextForIMPointIndex(true);
	},
	
	showIMTrendGraph: function(){	
		ReplayAnalytics.app.currentActivePanelIndex = ReplayAnalytics.app.previousActivePanelIndex;
		this.showIMTrendingGraphForIMPoint(ReplayAnalytics.app.allIMPointsAtCurrentIndex[ReplayAnalytics.app.activeIMPointIndex], ReplayAnalytics.app.interestingMomentGraphIndex);
		this.handleButtonsAndTextForIMPointIndex(true);
	},
	
	handleButtonsAndTextForIMPointIndex: function(showingTrendingGraph){
		if (showingTrendingGraph){
			Ext.ComponentQuery.query('slider' + ReplayAnalytics.app.interestingMomentGraphIndex)[0].hide();
			var imGraphTitle = 'Interesting Moment ' + (ReplayAnalytics.app.activeIMPointIndex + 1) + ' of ' + ReplayAnalytics.app.allIMPointsAtCurrentIndex.length;
			this.getInterestingMomentGraphTitleBar().setTitle(imGraphTitle);
			this.getShowIMReplayGraph().show();
			this.getShowTrendGraph().hide();
			this.getPreviousIMTrend().show();
			this.getNextIMTrend().show();
			if (ReplayAnalytics.app.allIMPointsAtCurrentIndex != undefined && ReplayAnalytics.app.allIMPointsAtCurrentIndex.length > 0){
				if (ReplayAnalytics.app.activeIMPointIndex > 0 && ReplayAnalytics.app.activeIMPointIndex < (ReplayAnalytics.app.allIMPointsAtCurrentIndex.length - 1)){
					this.getPreviousIMTrend().setDisabled(false);
					this.getNextIMTrend().setDisabled(false);
				} else if (ReplayAnalytics.app.activeIMPointIndex == 0 && ((ReplayAnalytics.app.allIMPointsAtCurrentIndex.length - 1) == 0)) {
					this.getPreviousIMTrend().setDisabled(true);
					this.getNextIMTrend().setDisabled(true);
				} else if (ReplayAnalytics.app.activeIMPointIndex == (ReplayAnalytics.app.allIMPointsAtCurrentIndex.length - 1)){
					this.getPreviousIMTrend().setDisabled(false);
					this.getNextIMTrend().setDisabled(true);
				} else if (ReplayAnalytics.app.activeIMPointIndex == 0){
					this.getPreviousIMTrend().setDisabled(true);
					this.getNextIMTrend().setDisabled(false);
				}
			}
		} else {
			this.getInterestingMomentGraphTitleBar().setTitle('Interesting Moment');
			this.getShowIMReplayGraph().hide();
			this.getShowTrendGraph().show();
			this.getPreviousIMTrend().hide();
			this.getNextIMTrend().hide();
		}
	},
	
	showNextIMTrend: function(){
		var imIndex = ReplayAnalytics.app.activeIMPointIndex;
		if (imIndex < (ReplayAnalytics.app.allIMPointsAtCurrentIndex.length - 1)){
			imIndex = imIndex + 1;
		} 
		ReplayAnalytics.app.activeIMPointIndex = imIndex;
		this.showIMTrendGraph();
	},
	
	showPreviousIMTrend: function(){
		var imIndex = ReplayAnalytics.app.activeIMPointIndex;
		if (imIndex > 0){
			imIndex = imIndex - 1;
		} 
		ReplayAnalytics.app.activeIMPointIndex = imIndex;
		this.showIMTrendGraph();
	},
	
	showIMReplayGraph: function(){
		if (ReplayAnalytics.app.currentActivePanelIndex == 0){
			this.loadChartSettingForReplayGraphInGlobalSyncMode();
		}
		var interestingMomentGraphIndex = ReplayAnalytics.app.interestingMomentGraphIndex;
		this.handleButtonsAndTextForIMPointIndex(false);
		var granularity = ReplayAnalytics.app.granularities[ReplayAnalytics.app.currentActivePanelIndex];
		if (granularity == 'Hourly'){
			Ext.Msg.alert('ReplayAnalytics &#153;', 'Already on lowest granularity. No data available to display.', Ext.emptyFn);
		} else {
			showLoadingMask();
			ReplayAnalytics.app.databaseSetting[interestingMomentGraphIndex] = ReplayAnalytics.app.databaseSetting[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.graphTitle[interestingMomentGraphIndex] = "Interesting Moment";
			ReplayAnalytics.app.xs[interestingMomentGraphIndex] = ReplayAnalytics.app.xs[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.ys[interestingMomentGraphIndex] = ReplayAnalytics.app.ys[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.sizeBys[interestingMomentGraphIndex] = ReplayAnalytics.app.sizeBys[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.granularities[interestingMomentGraphIndex] = ReplayAnalytics.app.granularities[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.chartTypes[interestingMomentGraphIndex] = ReplayAnalytics.app.chartTypes[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.groupBys[interestingMomentGraphIndex] = ReplayAnalytics.app.groupBys[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.startDate[interestingMomentGraphIndex] = ReplayAnalytics.app.startDate[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.currentStartDate[interestingMomentGraphIndex] = ReplayAnalytics.app.currentStartDate[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.currentDate[interestingMomentGraphIndex] = ReplayAnalytics.app.currentDate[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.currentEndDate[interestingMomentGraphIndex] = ReplayAnalytics.app.currentEndDate[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.accumulate[interestingMomentGraphIndex] = ReplayAnalytics.app.accumulate[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.XmaxReceived[interestingMomentGraphIndex] = false;
			ReplayAnalytics.app.YmaxReceived[interestingMomentGraphIndex] = false;
			ReplayAnalytics.app.previousActivePanelIndex = ReplayAnalytics.app.currentActivePanelIndex;
			ReplayAnalytics.app.currentActivePanelIndex = interestingMomentGraphIndex;
			switch(ReplayAnalytics.app.granularities[ReplayAnalytics.app.currentActivePanelIndex]) {
				case 'Hourly':
					ReplayAnalytics.app.granularities[ReplayAnalytics.app.currentActivePanelIndex] = 'Hourly';
					ReplayAnalytics.app.valueGranularities[ReplayAnalytics.app.currentActivePanelIndex] = 1;
					break;
				case 'Daily':
					ReplayAnalytics.app.granularities[ReplayAnalytics.app.currentActivePanelIndex] = 'Hourly';
					ReplayAnalytics.app.valueGranularities[ReplayAnalytics.app.currentActivePanelIndex] = 1;
					break;
				case 'Weekly':
					ReplayAnalytics.app.granularities[ReplayAnalytics.app.currentActivePanelIndex] = 'Daily';
					ReplayAnalytics.app.valueGranularities[ReplayAnalytics.app.currentActivePanelIndex] = 2;
					break;
				case 'Monthly':
					ReplayAnalytics.app.granularities[ReplayAnalytics.app.currentActivePanelIndex] = 'Weekly';
					ReplayAnalytics.app.valueGranularities[ReplayAnalytics.app.currentActivePanelIndex] = 3;
					break;
			}
			var chartType = ReplayAnalytics.app.chartTypes[interestingMomentGraphIndex];
			var newGranularity = ReplayAnalytics.app.granularities[interestingMomentGraphIndex];
			if (chartType == 'line' || chartType == 'verticalbar'){
				var axis = ReplayAnalytics.app.xs[interestingMomentGraphIndex];
				ReplayAnalytics.app.xs[interestingMomentGraphIndex] = interestingMomentController.getNewAxisForTimeAxisOption(axis, newGranularity);
			} else if (chartType == 'horizontalbar'){
				var axis = ReplayAnalytics.app.ys[interestingMomentGraphIndex];
				ReplayAnalytics.app.ys[interestingMomentGraphIndex] = interestingMomentController.getNewAxisForTimeAxisOption(axis, newGranularity);	
			}
			var sliderValue = Ext.ComponentQuery.query('slider' + ReplayAnalytics.app.previousActivePanelIndex)[0].getValue();
			var imIndex = Math.floor(sliderValue / ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.previousActivePanelIndex]);
			var chartIndex = ReplayAnalytics.app.previousActivePanelIndex;
			if (chartIndex == 0){
				chartIndex = ReplayAnalytics.app.allIMPointsAtCurrentIndex[ReplayAnalytics.app.activeIMPointIndex].ChartIndex;
				imIndex = ReplayAnalytics.app.globalSyncChartPositions[imIndex][chartIndex];
			}
			if (imIndex == 0){
				imStartDate = ReplayAnalytics.app.globalDateArray[chartIndex][imIndex];
			} else {
				imStartDate = ReplayAnalytics.app.globalDateArray[chartIndex][imIndex - 1];
			}			
			imEndDate = ReplayAnalytics.app.globalDateArray[chartIndex][imIndex];
			ReplayAnalytics.app.startDate[interestingMomentGraphIndex] = new Date(imStartDate);
			ReplayAnalytics.app.currentEndDate[interestingMomentGraphIndex] = new Date(imEndDate);
			ReplayAnalytics.app.dateSet[ReplayAnalytics.app.currentActivePanelIndex] = true;
			Ext.ComponentQuery.query('slider' + interestingMomentGraphIndex)[0].show();		
			this.getApplication().getController('Main').chartSetUp();
		}	
	},
	
	showIMTrendingGraphForIMPoint: function(imPoint, chartIndex){
		var chartObject = Ext.ComponentQuery.query('chart[id=chart'+chartIndex+']')[0];
		if(chartObject != undefined){
			chartObject.destroy();
		}
		var imTrend = imPoint.IMTrendData;
		if (imTrend == undefined){
			this.getInterestingMomentGraphPanel().setHtml('<div align="center" style="font-size: 13px; padding:10px;">'+imPoint.Message + ', ' + imPoint.Details + '<br />No additional data available to display.</div>');
			return;
		}
		var xAxis = imTrend.xAxis;
		var yAxis = imTrend.yAxis;
		var data = imTrend.data;
		var yMax = parseInt(imTrend.yMax);
		var trendStartIndex = parseInt(imTrend.trendStartIndex);
		var trendEndIndex = parseInt(imTrend.trendEndIndex);
		yMax = yMax + yMax*.10;
		ReplayAnalytics.app.newChart[chartIndex] = Ext.create("Ext.chart.CartesianChart", {
			id: 'chart'+chartIndex,
			store: {
				fields: [xAxis, yAxis],
				data: data,
			},
			renderTo: Ext.getBody(),
			flex: 1,
			shadow: true,
			autoShow: true,
		    flipXY: false,
		    //interactions: ['panzoom'],
	    	axes: [
	    	       {
	    	    	   	type: 'numeric',
	    	    	   	position: 'left',
	    	    	   	style: {
	    	    	   		strokeStyle: 'white',
	    	    	   		shadowColor: 'black',    	    	   	
	    	       		},
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: yAxis,
	    	    	   	minimum: 0,
	    	    	   	maximum: yMax,
	    	    	   	title: {
	   						text: yAxis,
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {
	    	    	   		fontFamily: 'Helvetica', 
	    	    	   		color: '#4270A2', 
	    	    	   		rotate: {
	    	    	   			degrees: 315
	    	    	   		}
	    	    	   	},
	    	       		fields: xAxis,
	    	    	   	style: {
	    	    	   		strokeStyle: 'white',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: xAxis,
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {	    	            	 
	    	            	 type: 'bar',
	    	            	 xField: xAxis,
	    	            	 yField: yAxis,
	    	            	 axis: 'left',
	    	            	 highlight: true,
	    	            	 showInLegend: false,
	    	            	 shadow: true,
	    	            	 animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
	    	            	 style: {
	    	            	 		stroke: 'rgb(40,40,40)',
	    	            	 		renderer: function (sprite, attribute, record, index) {
	    	            	 			sprite.fillStyle = '#115fa6';
	    	        					if (index >= trendStartIndex && index <= trendEndIndex){	
	    	        						sprite.fillStyle = '#a61114';
	    	            	            }
	    	            		   	  	return sprite;
	   	    	             	 	}
	    	             	 },    	             	 
	    	              }
	    	           ]
		});
		this.getInterestingMomentGraphPanel().setHtml('<div align="center" style="font-size: 13px; padding:10px;">'+imPoint.Message + ', ' + imPoint.Details + '</div>');
		this.getInterestingMomentGraphPanel().add(ReplayAnalytics.app.newChart[chartIndex]);
	},
	
	addIMListToCarousel: function(chartIndex){
		var carousel = Ext.ComponentQuery.query('carousel[id=carousel'+ chartIndex +']')[0];
		if (ReplayAnalytics.app.interestingMomentsPoints[chartIndex] != undefined 
				&& ReplayAnalytics.app.interestingMomentsPoints[chartIndex].length != 0){
			var devMode = developerMode;
			var tpl = new Ext.XTemplate(
				'<div style="font-size: 14px;">',
				'<tpl if="' + devMode + ' == ' + true + '">',
				'At position {Index}, ',
				'</tpl>',
				'{StartDate} - {EndDate}</div><br/><div style="font-size: 15px;"><b>{Message}</b><br />{Details}</div>');
			var imList = Ext.create('Ext.Panel', {				
				fullscreen: true,
				flex: 1,				
				id: 'imlistpanel' + chartIndex,
				layout: 'fit',	
				cls: 'rounded-panel',
		    	items: [
		    	        {
		    	        	xtype: 'toolbar',
		    	        	maxHeight: '35px',
		    	        	docked: 'top',
		    	        	title: 'Interesting Moments',
		    	        	cls: 'toolbar-alternate',
		    	        },		    	         
		    	        {
		    	        	xtype: 'list',
		    	        	ui: 'round',
		    				store: {
		    					fields: ['Index', 'Type', 'Message', 'Details', 'StartDate', 'EndDate'],
		    					data: ReplayAnalytics.app.interestingMomentsPoints[chartIndex],
		    				},
		    				itemTpl: tpl,		    			
		    	        }
		    	       ],
			});						
			carousel.add(imList);	
		} else {
			var imList = Ext.create('Ext.Panel', {				
				fullscreen: true,
				flex: 1,				
				id: 'imlistpanel' + chartIndex,
				layout: 'fit',		    				    	
				cls: 'rounded-panel',
			    items: [
		    	        {
		    	        	xtype: 'toolbar',
		    	        	maxHeight: '35px',
		    	        	docked: 'top',
		    	        	title: 'Interesting Moments',
		    	        	cls: 'toolbar-alternate',
		    	        },		    	         
		    	        {
		    	        	html: '<div align="center" style="color: black; padding: 30px;">No Interesting Moment Points found for this graph.</div>'
		    	        }
		    	       ],
			});
			carousel.add(imList);
		}
	},
	
	addIMCommentListToCarousel: function(chartIndex){
		var carousel = Ext.ComponentQuery.query('carousel[id=carousel'+ chartIndex +']')[0];
		this.getAllManualIMsForCurrentChart();
		if (ReplayAnalytics.app.currentChartManualIMs != undefined && ReplayAnalytics.app.currentChartManualIMs.length > 0){
			var userId = 0;
			if (ReplayAnalytics.app.currentUserSession != undefined){
				userId = ReplayAnalytics.app.currentUserSession.userId;
			}
			var devMode = developerMode;
			var tpl = new Ext.XTemplate(
					'<div class="deleteplaceholder" style="float: right;"></div>',
					'<tpl if="authorId != ' + userId + '">',
					'<div style="float: right;"><img src="lib/images/lock-icon.png" width="25px" height="25px" /></div>',
					'</tpl>',
					'<tpl if="authorId == ' + userId + '">',
					'<div id="delete" style="float: right;"><img class="delete-icon" id="delete" src="lib/images/delete-red-icon.png" width="25px" height="25px" /></div>',
					'</tpl>',
					'<div style="font-size: 16px; font-weight: bold;">{imMessage}</div>',
					'<div style="font-size: 13px;">At {dateCreated} by {authorName}',
					'<tpl if="' + devMode + ' == ' + true + '">',
					', at position {imIndex}',
					'</tpl>',
					'</div>');
			var imCommentList = Ext.create('Ext.Panel', {				
				fullscreen: true,
				flex: 1,				
				id: 'imcommentlistpanel' + chartIndex,
				layout: 'fit',	
				cls: 'rounded-panel',
		    	items: [
		    	        {
		    	        	xtype: 'toolbar',
		    	        	maxHeight: '35px',
		    	        	docked: 'top',
		    	        	title: 'Replay Comments',
		    	        	cls: 'toolbar-alternate',
		    	        },		    	         
		    	        {
		    	        	xtype: 'list',
		    	        	id: 'imcommentlist' + chartIndex,
		    	        	ui: 'round',
		    	        	store: {
		    					fields: ['id', 'imIndex', 'dateCreated', 'imMessage', 'authorName', 'authorId'],
		    					data: ReplayAnalytics.app.currentChartManualIMs,
		    				},
		    				itemTpl: tpl,
		    	        }
		    	       ],		    	            
			});	
			var commentlist = Ext.ComponentQuery.query('list[id=imcommentlist'+ chartIndex + ']')[0];
			commentlist.on('itemtap', function(list, index, target, record, senchaEvent, eOpts){
				var div = senchaEvent.target;
				if (div.id == 'delete'){
					interestingMomentController.deleteManualIM(record, list);
				}				
			});
			carousel.add(imCommentList);						
		} else {
			var imCommentList = Ext.create('Ext.Panel', {				
				fullscreen: true,
				flex: 1,				
				id: 'imcommentlistpanel' + chartIndex,
				layout: 'fit',		    				    	
				cls: 'rounded-panel',
			    items: [
		    	        {
		    	        	xtype: 'toolbar',
		    	        	maxHeight: '35px',
		    	        	docked: 'top',
		    	        	title: 'Replay Comments',
		    	        	cls: 'toolbar-alternate',
		    	        },		    	         
		    	        {
		    	        	html: '<div align="center" style="color: black; padding: 30px;">No Replay Comments found for this graph.</div>'
		    	        }
		    	       ],
			});
			carousel.add(imCommentList);
		}
	},
	
	addChartDataTableToCarousel: function(chartIndex){		
		var dataInTable= "";		
		try{
			if (ReplayAnalytics.app.panelData[ReplayAnalytics.app.currentActivePanelIndex] != undefined){
				if(ReplayAnalytics.app.groupBys[ReplayAnalytics.app.currentActivePanelIndex] == 'none' || ReplayAnalytics.app.chartTypes[ReplayAnalytics.app.currentActivePanelIndex]=='pie' ){
					dataInTable = this.getDataInTable(Ext.JSON.decode(ReplayAnalytics.app.panelData[ReplayAnalytics.app.currentActivePanelIndex]));
				} else {
					dataInTable = this.getGroupDataInTable(Ext.JSON.decode(ReplayAnalytics.app.panelData[ReplayAnalytics.app.currentActivePanelIndex]));
				}
			} else {
				dataInTable = '<div style="color: black; padding: 20px;">Panel not configured yet.</div>';
			}				
		} catch(err){	
			logInfo('Error getting DataInTable--' +err);
		}		
		var carousel = Ext.ComponentQuery.query('carousel[id=carousel'+ chartIndex +']')[0];
		if (dataInTable != undefined && dataInTable != ""){	
			var chartDataTable = Ext.create('Ext.Panel', {				
				fullscreen: true,
				flex: 1,				
				id: 'chartdatatablepanel' + chartIndex,
				layout: 'vbox',	
				defaults: { styleHtmlContent: true },
				scrollable: {direction: 'both', directionLock: true},
				cls: 'rounded-panel',
		    	items: [
		    	        {
		    	        	xtype: 'toolbar',
		    	        	maxHeight: '35px',
		    	        	docked: 'top',
		    	        	title: 'Chart Data Table',
		    	        	cls: 'toolbar-alternate',
		    	        },		    	         
		    	        {
		    	        	html: '<div align="center" style="padding: 10px;">' + dataInTable + '</div>',
		    	        }
		    	       ],
			});						
			carousel.add(chartDataTable);	
			//carousel.insert(carousel.getItems().items.length, chartDataTable);
		} else {
			logInfo('DataInTable is null--');
		}
	},
	
	deleteManualIM: function(record, listview){
		var manualIMId = record.data.id;
		Ext.Msg.show({
			   title: 'Delete',
			   message: 'Are you sure you want to delete this comment?',
			   width: 300,
			   buttons: Ext.MessageBox.YESNO,
			   fn: function(buttonId) {
			       if (buttonId == 'yes'){
			    	   showLoadingMask();
			    	   Ext.Ajax.request({			  
			               url: 'deleteManualIM.do',
			               method: 'POST',
			               params: {
			            	   userId: ReplayAnalytics.app.currentUserSession.userId, 
			            	   dashboardId: ReplayAnalytics.app.currentDashboard.dashboardId,
			            	   manualIMId: manualIMId,
			               },
			               success: interestingMomentController.handleManualIMDelete,
			               failure: function(response) {
			               		hideLoadingMask();
			               		logMessage('Failure Deleting manual im comment.');
			               },
			   			});
			    	   record.stores[0].remove(record);
			    	   //record.stores[0].sync();
			       }
			   }
		});		
	},
	
	handleManualIMDelete: function(response){
		hideLoadingMask();
		var json = Ext.JSON.decode(response.responseText);
		if (json != undefined){
			Ext.Msg.alert('ReplayAnalytics &#153;', json.description, Ext.emptyFn);
			if (json.dashboard != undefined){
				ReplayAnalytics.app.currentDashboard = json.dashboard;
				for (i = 0; i < ReplayAnalytics.app.userDashboardDetails.length; i++){
					if (ReplayAnalytics.app.userDashboardDetails[i].dashboardId == json.dashboard.dashboardId){
						ReplayAnalytics.app.userDashboardDetails[i] = json.dashboard;
					}
				}
				try{
					var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
					var carousel = Ext.ComponentQuery.query('carousel[id=carousel'+ chartIndex +']')[0];
					carousel.removeAt(carousel.getItems().items.length - 1);
					interestingMomentController.addIMCommentListToCarousel(chartIndex);
					carousel.setActiveItem(carousel.getItems().items.length);
				} catch(err){
				}
			}
		}
	},
	
	getDataInTable : function(jsonData){
		var htmlString = '<table border="1" class="table-style">';
		htmlString = htmlString + '<tr>';
		htmlString = htmlString + '<th class="table-header">Date/Time</th>';
		for(row = 0 ; row < jsonData.data[0].data.length ; row++)
		{        		
			htmlString = htmlString + '<th class="table-header">'+jsonData.data[0].data[row][jsonData.categoryField]+'</th>';
		}
		htmlString = htmlString + '</tr>';
        for(col = 0 ; col< jsonData.dateArray.length ; col++)
        {
        	var style = "cell-style-alternate";
        	if (col % 2 == 0){
        		style = "cell-style";
        	}
        	htmlString = htmlString + '<tr>';
        	htmlString = htmlString + '<td class="' + style + '">'+jsonData.dateArray[col]+'</td>';
        	for(row1 = 0 ; row1 < jsonData.data[0].data.length ; row1++)
        	{        		
        		htmlString = htmlString + '<td class="' + style + '">'+Ext.util.Format.number(jsonData.data[col].data[row1][jsonData.dataField], '00,000')+'</td>';
        	}
        	htmlString = htmlString + '</tr>';
        }		
		htmlString = htmlString + '</table>';
		return htmlString;
	},
	
	getGroupDataInTable : function(jsonData){
		var htmlString = '<table border="1" class="table-style">';
		htmlString = htmlString + '<tr>';
		htmlString = htmlString + '<th class="table-header">Date/Time</th>';
		for(row = 0 ; row < jsonData.data[0].data.length ; row++)
		{        		
			htmlString = htmlString + '<th class="table-header">'+jsonData.data[0].data[row][jsonData.categoryField]+'</th>';
		}
		htmlString = htmlString + '</tr>';
        for(col = 0 ; col< jsonData.dateArray.length ; col++)
        {
        	var style = "cell-style-alternate";
        	if (col % 2 == 0){
        		style = "cell-style";
        	}
        	htmlString = htmlString + '<tr>';
        	htmlString = htmlString + '<td class="' + style + '">'+jsonData.dateArray[col]+'</td>';
        	for(row = 0 ; row < jsonData.data[0].data.length ; row++)
        	{        		
        		htmlString = htmlString + '<td class="' + style + '">' + this.getTableForGroupBy(jsonData,jsonData.data[col].data)+'</td>';
        	}
        	htmlString = htmlString + '</tr>';
        }		
		htmlString = htmlString + '</table>';
		return htmlString;
	},	
	
	getTableForGroupBy : function(jsonData,data){
		var groupByHtmlString = '<table>';
		var useOtherField = true;
		if (this.isTimeAxisOption(ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex])
				|| this.isTimeAxisOption(ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex])){
			useOtherField = false;
		}
		var other = 'others';
		for(innerow = 1 ; innerow <data.length ; innerow++)
		{  
		   if(innerow ==1)
			   {
			     groupByHtmlString = groupByHtmlString +'<tr>';
			     groupByHtmlString = groupByHtmlString + '<td>' +jsonData.groupByBarArray[0]+'</td>';
			     groupByHtmlString = groupByHtmlString + '<td>' +Ext.util.Format.number(jsonData.data[0].data[0].groupByBar1, '00,000')+'</td>';
			     groupByHtmlString = groupByHtmlString + '</tr>';
			   }
		   else if( innerow == 2)
			   {
			     groupByHtmlString = groupByHtmlString +'<tr>';
			     groupByHtmlString = groupByHtmlString + '<td>' +jsonData.groupByBarArray[1]+'</td>';
			     groupByHtmlString = groupByHtmlString + '<td>' +Ext.util.Format.number(jsonData.data[0].data[0].groupByBar2, '00,000')+'</td>';
			     groupByHtmlString = groupByHtmlString + '</tr>';
			   }else if( innerow == 3)
				   {
				     groupByHtmlString = groupByHtmlString +'<tr>';
				     groupByHtmlString = groupByHtmlString + '<td>' +jsonData.groupByBarArray[2]+'</td>';
				     groupByHtmlString = groupByHtmlString + '<td>' +Ext.util.Format.number(jsonData.data[0].data[0].groupByBar3, '00,000')+'</td>';
				     groupByHtmlString = groupByHtmlString + '</tr>';
				   }else if(innerow ==4){
					     groupByHtmlString = groupByHtmlString +'<tr>';
					     groupByHtmlString = groupByHtmlString + '<td>' +jsonData.groupByBarArray[3]+'</td>';
					     groupByHtmlString = groupByHtmlString + '<td>' +Ext.util.Format.number(jsonData.data[0].data[0].groupByBar4, '00,000')+'</td>';
					     groupByHtmlString = groupByHtmlString + '</tr>';
				   }else if (row == 5 && useOtherField)
					   {
					     groupByHtmlString = groupByHtmlString +'<tr>';
					     groupByHtmlString = groupByHtmlString + '<td>'+other+ '</td>';
					     groupByHtmlString = groupByHtmlString + '<td>' +Ext.util.Format.number(jsonData.data[0].data[0][other], '00,000')+'</td>';
					     groupByHtmlString = groupByHtmlString + '</tr>';
					   }
		}
		groupByHtmlString = groupByHtmlString + '</table>';
		return groupByHtmlString;
	},
	
	checkForGlobalSyncIMs: function(sliderPosition, panelIndex, i, playbackPaused, isIMGraphRunning){
		if (ReplayAnalytics.app.replayCommentsSetting == 'On' && ReplayAnalytics.app.globalManualIMs != undefined 
				&& sliderPosition <= ReplayAnalytics.app.globalManualIMs.length){
			if (panelIndex < 5){
				if (ReplayAnalytics.app.globalManualIMs[sliderPosition][panelIndex] != undefined && 
						ReplayAnalytics.app.globalManualIMs[sliderPosition][panelIndex].length > 0 && 
						i < ReplayAnalytics.app.globalManualIMs[sliderPosition][panelIndex].length){
					this.getApplication().getController('Playback').pauseFunction();
					this.showManualIMGlobalSync(sliderPosition, panelIndex, i, ReplayAnalytics.app.globalManualIMs[sliderPosition][panelIndex][i], true, false);
				} else {
					this.checkForGlobalSyncIMs(sliderPosition, panelIndex + 1, 0, playbackPaused, isIMGraphRunning);
				}
			} else if (ReplayAnalytics.app.interestingMoments == 'On') {
				this.checkForGlobalSyncAutoIMs(sliderPosition, playbackPaused, isIMGraphRunning);
			}
		} else if (ReplayAnalytics.app.interestingMoments == 'On') {
			this.checkForGlobalSyncAutoIMs(sliderPosition, playbackPaused, isIMGraphRunning);
		}
	},
	
	checkForGlobalSyncAutoIMs: function(sliderPosition, playbackPaused, isIMGraphRunning){
		this.getManualIMCallout().hide();
		if (ReplayAnalytics.app.interestingMomentsPoints[0] != undefined && sliderPosition <= ReplayAnalytics.app.interestingMomentsPoints[0].length
				&& ReplayAnalytics.app.interestingMomentsPoints[0][sliderPosition] != undefined){
			for (j = 1; j < 5; j++){
				if (ReplayAnalytics.app.interestingMomentsPoints[0][sliderPosition][j] != undefined && 
						ReplayAnalytics.app.interestingMomentsPoints[0][sliderPosition][j].length > 0){
					isIMGraphRunning = true;
					this.getApplication().getController('Playback').pauseFunction();
					this.showGlobalSyncIMFoundCallout(sliderPosition, j, ReplayAnalytics.app.interestingMomentsPoints[0][sliderPosition][j][0]);
					return;
				}
			}			
		}
		if (playbackPaused && !isIMGraphRunning){
			ReplayAnalytics.app.getController('Playback').resumeLastPlaybackAction();		
		}		
	},
	
	getAllGlobalSyncAutoIMsForCurrentSliderPosition: function(sliderPosition){
		ReplayAnalytics.app.allIMPointsAtCurrentIndex = new Array();
		for (i = 1; i < 5; i++){
			for (j = 0; j < ReplayAnalytics.app.interestingMomentsPoints[0][sliderPosition][i].length; j++){
				var imPoint = ReplayAnalytics.app.interestingMomentsPoints[0][sliderPosition][i][j];
				imPoint.ChartIndex = i;
				ReplayAnalytics.app.allIMPointsAtCurrentIndex.push(imPoint);
			}
		}
	},
	
	showManualIMGlobalSync: function(sliderPosition, panelIndex, i, manualIM){
		try{
			var panelObj = Ext.ComponentQuery.query('panel' + panelIndex)[0];
			var width = panelObj.element.getWidth(), height = panelObj.element.getHeight();
			var x = panelObj.element.getX(), y = panelObj.element.getY();
			var callOutX = x + width*.1, callOutY = y;
			var calloutText = '<div style="color:black; font-size: 12px; padding: 30px;">' + manualIM.imMessage + '</div>';
			var style = 'background-image: url(lib/images/callout-image-inverted.png); background-color: transparent; padding-left:12px; background-size: 100%;';
			if (i % 2 == 1){
				callOutY = (y + height) - 135;
				calloutText = '<div style="color:black; font-size: 12px; padding: 30px; padding-top: 50px;">' + manualIM.imMessage + '</div>';
				style = 'background-image: url(lib/images/callout-image-inverted-flipped.png); background-color: transparent; padding-left:12px; background-size: 100%';
			}
			this.getManualIMCallout().setStyle(style);
			this.getManualIMCallout().show();
			this.getManualIMCallout().element.setXY(callOutX, callOutY);		
			this.getManualIMCallout().setHtml(calloutText);
			var task = Ext.create('Ext.util.DelayedTask', function() {
				task.cancel();
				i++;				
				this.checkForGlobalSyncIMs(sliderPosition, panelIndex, i);
			}, this);
			task.delay(2000);
		} catch(e){
		}			
	},
	
	showGlobalSyncIMFoundCallout: function(sliderPosition, chartIndex, imPoint){
		var panelObj = Ext.ComponentQuery.query('panel' + chartIndex)[0];
		var width = panelObj.element.getWidth(), height = panelObj.element.getHeight();
		var x = panelObj.element.getX(), y = panelObj.element.getY();
		var callOutX = x + width*.6, callOutY = y + height*.2;
		this.getImFoundDialog().show();
		this.getImFoundDialog().element.setXY(callOutX, y);
		var calloutText = '<div style="color:black; font-size: 12px; padding: 30px;">Found an interesting moment. ' + imPoint.Message + '</div>'
		this.getImFoundDialog().setHtml(calloutText);
		var task = Ext.create('Ext.util.DelayedTask', function() {
			task.cancel();
		    this.getImFoundDialog().hide();
		    this.getAllGlobalSyncAutoIMsForCurrentSliderPosition(sliderPosition);
			this.initInterestingMomentGraph(imPoint);
		}, this);
		task.delay(ReplayAnalytics.app.replaySpeed);
	},
	
	loadChartSettingForReplayGraphInGlobalSyncMode: function(){
		var chartIndex = ReplayAnalytics.app.allIMPointsAtCurrentIndex[ReplayAnalytics.app.activeIMPointIndex].ChartIndex;
		ReplayAnalytics.app.databaseSetting[0] = ReplayAnalytics.app.databaseSetting[chartIndex];
		ReplayAnalytics.app.xs[0] = ReplayAnalytics.app.xs[chartIndex];
		ReplayAnalytics.app.ys[0] = ReplayAnalytics.app.ys[chartIndex];
		ReplayAnalytics.app.sizeBys[0] = ReplayAnalytics.app.sizeBys[chartIndex];
		ReplayAnalytics.app.granularities[0] = ReplayAnalytics.app.granularities[chartIndex];
		ReplayAnalytics.app.chartTypes[0] = ReplayAnalytics.app.chartTypes[chartIndex];
		ReplayAnalytics.app.groupBys[0] = ReplayAnalytics.app.groupBys[chartIndex];
		ReplayAnalytics.app.startDate[0] = ReplayAnalytics.app.startDate[chartIndex];
		ReplayAnalytics.app.currentStartDate[0] = ReplayAnalytics.app.currentStartDate[chartIndex];
		ReplayAnalytics.app.currentDate[0] = ReplayAnalytics.app.currentDate[chartIndex];
		ReplayAnalytics.app.currentEndDate[0] = ReplayAnalytics.app.currentEndDate[chartIndex];
		ReplayAnalytics.app.accumulate[0] = ReplayAnalytics.app.accumulate[chartIndex];
	},
});