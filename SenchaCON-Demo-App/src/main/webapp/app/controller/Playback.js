var playbackController;
Ext.define('ReplayAnalytics.controller.Playback', {
	extend : 'Ext.app.Controller',
	xtype: 'playbackcontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
			'fourPanelLayout': 'fourpanellayout',
			'resetBackwardButton': 'button[id=ResetBackwardButton]',
			'stepBackwardButton': 'button[id=StepBackwardButton]',
			'playBackwardButton': 'button[id=PlayBackwardButton]',
			'pauseButton': 'button[id=PauseButton]',
			'playForwardButton': 'button[id=PlayForwardButton]',
			'stepForwardButton': 'button[id=StepForwardButton]',
			'resetForwardButton': 'button[id=ResetForwardButton]',
			'slider0': 'slider0',
			'slider1': 'slider1',
			'slider2': 'slider2',
			'slider3': 'slider3',
			'slider4': 'slider4',
			'slider5': 'slider5',
		},
		control: {
			'resetBackwardButton': {
				tap: 'resetBackwardFunction'
			},
			'stepBackwardButton': {
				tap: 'stepBackwardFunction'
			},
			'playBackwardButton': {
				tap: 'playBackwardFunction'
			},
			'pauseButton': {
				tap: 'pauseFunction'
			},
			'playForwardButton': {
				tap: 'playForwardFunction'
			},
			'stepForwardButton': {
				tap: 'stepForwardFunction'
			},
			'resetForwardButton': {
				tap: 'resetForwardFunction'
			},
			'slider0': {
				change: 'sliderListenerFunctionChange',
				drag: 'sliderListenerFunctionDrag'
			},
			'slider1': {
				change: 'sliderListenerFunctionChange',
				drag: 'sliderListenerFunctionDrag'
			},
			'slider2': {
				change: 'sliderListenerFunctionChange',
				drag: 'sliderListenerFunctionDrag'	
			},
			'slider3': {
				change: 'sliderListenerFunctionChange',
				drag: 'sliderListenerFunctionDrag'	
			},
			'slider4': {
				change: 'sliderListenerFunctionChange',
				drag: 'sliderListenerFunctionDrag'	
			},
			'slider5':{
				change: 'sliderListenerFunctionChange',
				drag: 'sliderListenerFunctionDrag'	
			},
		},
	},
	
	launch: function(){
		playbackController = this;
	},
	
	resumeLastPlaybackAction: function(){
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		logInfo('ResumePlayback called for chart=' + chartIndex + ' at sliderValue=' + ReplayAnalytics.app.sliders[chartIndex].getValue()[0]
				+' and Last action is == ' + ReplayAnalytics.app.lastPlaybackAction);		
		if (ReplayAnalytics.app.lastPlaybackAction != undefined){
			if (ReplayAnalytics.app.lastPlaybackAction == 'playForward'){
				this.getApplication().getController('InterestingMoment').getManualIMCallout().hide();
				this.playForwardFunction();
			} else if (ReplayAnalytics.app.lastPlaybackAction == 'playBackward'){
				this.getApplication().getController('InterestingMoment').getManualIMCallout().hide();
				this.playBackwardFunction();
			}			
		}
	},
	
	sliderListenerFunctionDrag: function(slider, thumb, value) {
		value = value[0];
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		ReplayAnalytics.app.currentPositions[chartIndex] = ReplayAnalytics.app.sliders[chartIndex].getValue()[0];
		//ReplayAnalytics.app.sliders[chartIndex].fireEvent('change', ReplayAnalytics.app.sliders[chartIndex], chartIndex); 
		this.sliderListenerFunctionChange(slider);
	},
	
	setPanelDateCaption: function(chartIndex, value) {
		var caption = "";
		var captionFormat = "ddd mmm dd yyyy HH:MM:ss";
		var currentDate = "";
		try {
			currentDate = ReplayAnalytics.app.globalDateArray[chartIndex][value];
		} catch(err){
		}
		//logInfo('Current date for index='+chartIndex+' & value='+value+' is == ' + currentDate);
		if (ReplayAnalytics.app.granularities[chartIndex] != 'Hourly'){
			captionFormat = "ddd mmm dd yyyy";
		}
		try{
			currentDate = dateFormat(currentDate, captionFormat);
		} catch(err){
			logInfo('Error converting date' + err);
			currentDate = this.dateConversion(currentDate);
		}		
		if (chartIndex != 0 && chartIndex != 5){
			var graphTitle = ReplayAnalytics.app.graphTitle[chartIndex];
			caption = '<h1 style="text-align:center; color: white; z-index: 10; font-size: 20px">'+graphTitle+'</h1><h1 style="text-align:center; color: white; z-index: 10; font-size: 14px">'+currentDate+'</h1>';
			Ext.ComponentQuery.query('addchartpanel'+chartIndex)[0].setHtml(caption);
			//Ext.ComponentQuery.query('panel'+chartIndex)[0].setHtml(caption);
		} else if (chartIndex == 5){
			caption = "<h1 style='text-align:center; color: white; z-index: 10; font-size: 14px; padding: 5px;'>"+currentDate+"</h1>";
			Ext.ComponentQuery.query('interestingmomentgraphpanel')[0].setHtml(caption);
		}				
		return caption;
	},
		 
	dateConversion: function(currentDate){
		 var months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
		 var currentDateinFormat = months[parseInt(currentDate.substring(5,7))-1]+" " +currentDate.substring(8,10) + ", " + currentDate.substring(0, 4);
		 return currentDateinFormat;
	},
	
	//Utility function for making intervals even:	
	updateSliderInterval: function() {	
		var sliderValue = ReplayAnalytics.app.sliders[ReplayAnalytics.app.currentActivePanelIndex].getValue();
		ReplayAnalytics.app.sliders[ReplayAnalytics.app.currentActivePanelIndex].setValue(sliderValue % ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex]);	
	},
	
	showCharts: function(){		
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;	
		var value = 0;
		if(ReplayAnalytics.app.chartTypes[chartIndex] == 'scatter') {
			if(ReplayAnalytics.app.groupBys[ReplayAnalytics.app.currentActivePanelIndex] != 'none') {
				//this.createScatterChartGroupBy(ReplayAnalytics.app.chartTypes[chartIndex], ReplayAnalytics.app.jsonstore[chartIndex][value],ReplayAnalytics.app.xs[chartIndex],ReplayAnalytics.app.ys[chartIndex],chartIndex);
			}
			else {	
				this.getApplication().getController('Scatter').createScatterChart(ReplayAnalytics.app.chartTypes[chartIndex],ReplayAnalytics.app.jsonstore[chartIndex][value],ReplayAnalytics.app.dataFieldValues[chartIndex],ReplayAnalytics.app.categoryFieldValues[chartIndex],chartIndex, null);
			}				
		}	
		else if(ReplayAnalytics.app.chartTypes[chartIndex] == 'horizontalbar' || ReplayAnalytics.app.chartTypes[chartIndex] == 'verticalbar' || ReplayAnalytics.app.chartTypes[chartIndex] == 'line') {
			this.getApplication().getController('Main').changeModelFields();
			if(ReplayAnalytics.app.chartTypes[chartIndex] == 'horizontalbar') {
				if(ReplayAnalytics.app.groupBys[ReplayAnalytics.app.currentActivePanelIndex] != 'none') {
					ReplayAnalytics.app.getController('HorizontalBar').createHorizontalBarChart(ReplayAnalytics.app.jsonstore[chartIndex][value],chartIndex,ReplayAnalytics.app.groupByBarLabels);
				}
				else {
					ReplayAnalytics.app.getController('HorizontalBar').createHorizontalBarChart(ReplayAnalytics.app.jsonstore[chartIndex][value],chartIndex,null);
				}
			}
			else if(ReplayAnalytics.app.chartTypes[chartIndex] == 'verticalbar') {
				if(ReplayAnalytics.app.groupBys[ReplayAnalytics.app.currentActivePanelIndex] != 'none') {
					ReplayAnalytics.app.getController('VerticalBar').createVerticalBarChart(ReplayAnalytics.app.jsonstore[chartIndex][value],chartIndex,ReplayAnalytics.app.groupByBarLabels);
				}
				else {
					ReplayAnalytics.app.getController('VerticalBar').createVerticalBarChart(ReplayAnalytics.app.jsonstore[chartIndex][value],chartIndex,null);
				}
			}
			else {
				if(ReplayAnalytics.app.groupBys[ReplayAnalytics.app.currentActivePanelIndex] == 'none') {
					ReplayAnalytics.app.getController('LineBar').createLineChart(ReplayAnalytics.app.jsonstore[chartIndex][value],chartIndex,null);
				}
				else{
					ReplayAnalytics.app.getController('LineBar').createLineChart(ReplayAnalytics.app.jsonstore[chartIndex][value],chartIndex,ReplayAnalytics.app.groupByBarLabels);	
				}
			}
		}
		else if(ReplayAnalytics.app.chartTypes[chartIndex] == 'pie') {
			this.getApplication().getController('Pie').createPieChart(ReplayAnalytics.app.jsonstore[chartIndex][value],ReplayAnalytics.app.dataFieldValues[chartIndex],ReplayAnalytics.app.categoryFieldValues[chartIndex],chartIndex)						
		}
		ReplayAnalytics.app.chartCreated[chartIndex] = true;
		if(ReplayAnalytics.app.dateSet[chartIndex] == true) {
			this.getApplication().getController('Main').setFocusOnPanel(chartIndex);
		}
		else {
			ReplayAnalytics.app.dateSet[chartIndex] = true;
		}
		this.setPanelDateCaption(chartIndex, value);
		
		if (chartIndex == 5){
			Ext.ComponentQuery.query('interestingmomentgraphpanel')[0].add(ReplayAnalytics.app.newChart[chartIndex]);						
		} else {
			Ext.ComponentQuery.query('addchartpanel'+chartIndex)[0].add(ReplayAnalytics.app.newChart[chartIndex]);
			var carousel = Ext.ComponentQuery.query('carousel[id=carousel'+ chartIndex +']')[0];
			playbackController.getApplication().getController('Main').clearCarousel();					
			playbackController.getApplication().getController('InterestingMoment').addChartDataTableToCarousel(chartIndex);
			playbackController.getApplication().getController('InterestingMoment').addIMCommentListToCarousel(chartIndex);	
			playbackController.getApplication().getController('InterestingMoment').addIMListToCarousel(chartIndex);					
			carousel.setActiveItem(0);
		}
		hideLoadingMask();
	},
	
	resetFunction: function() {	
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		clearInterval(ReplayAnalytics.app.waitvariables[chartIndex]);	
		var newPosition;
		newPosition = ReplayAnalytics.app.minimumPositions[chartIndex]; 
		ReplayAnalytics.app.sliders[chartIndex].setValue(newPosition); 
		ReplayAnalytics.app.currentPositions[chartIndex] = newPosition;
		this.showCharts();
		//ReplayAnalytics.app.sliders[chartIndex].fireEvent('change', ReplayAnalytics.app.sliders[chartIndex], chartIndex);
		if (chartIndex != 0){
			ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);
		}
		if (chartIndex == 0) {	
			for(i = 1; i < 5; i++) {
				ReplayAnalytics.app.currentActivePanelIndex = i;
				ReplayAnalytics.app.sliders[i].setValue(newPosition);
				ReplayAnalytics.app.sliders[i].fireEvent('change',ReplayAnalytics.app.sliders[i],i);
				//ReplayAnalytics.app.sliders[i].fireEvent('change',ReplayAnalytics.app.sliders[i],i);
			}
			ReplayAnalytics.app.currentActivePanelIndex = 0;
		}
		//this.checkForConfiguredCarousel();
	},
	
	checkForConfiguredCarousel: function(){
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		if (ReplayAnalytics.app.chartCreated[chartIndex]){
			var carousel = Ext.ComponentQuery.query('carousel[id=carousel'+ chartIndex +']')[0];
			if (carousel.getItems().items.length == 2){
				playbackController.getApplication().getController('InterestingMoment').addChartDataTableToCarousel(chartIndex);
				playbackController.getApplication().getController('InterestingMoment').addIMListToCarousel(chartIndex);				
				playbackController.getApplication().getController('InterestingMoment').addIMCommentListToCarousel(chartIndex);	
			}			
		}
	},
	
	sliderListenerFunctionChange: function(slider) {
		this.moveCarouselToGraphItem();
		this.getApplication().getController('InterestingMoment').getManualIMCallout().hide();
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		var sliderValue = slider.getValue()[0];
		var value = Math.floor(sliderValue / ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex]);
		ReplayAnalytics.app.currentPositions[ReplayAnalytics.app.currentActivePanelIndex] = ReplayAnalytics.app.sliders[ReplayAnalytics.app.currentActivePanelIndex].getValue()[0];
		logInfo('sliderValue=' + sliderValue + ' & differential=' + ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex] 
			+ ' & value=' + value);
		/*if (ReplayAnalytics.app.interestingMoments == 'On' && !ReplayAnalytics.app.creatingGraphs){
       		playbackController.getApplication().getController('InterestingMoment').checkForInterestingMoment(chartIndex, value);
    	}*/
		
		if (chartIndex != 0){
			this.setPanelDateCaption(chartIndex, value);
			ReplayAnalytics.app.newChart[chartIndex].bindStore(ReplayAnalytics.app.jsonstore[chartIndex][value]);
		} else if (chartIndex == 0) {
			this.getApplication().getController('GlobalSync').globalSyncSliderFunctionChange(sliderValue, chartIndex);
		}
	},	
	
	resetBackwardFunction: function() {	
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		ReplayAnalytics.app.lastPlaybackAction = 'resetBackward';
		clearInterval(ReplayAnalytics.app.waitvariables[chartIndex]);	
		var newPosition;
		newPosition = ReplayAnalytics.app.minimumPositions[chartIndex]; 
		ReplayAnalytics.app.sliders[chartIndex].setValue(newPosition);
		ReplayAnalytics.app.currentPositions[chartIndex] = newPosition;
		ReplayAnalytics.app.sliders[chartIndex].fireEvent('change', ReplayAnalytics.app.sliders[chartIndex], chartIndex);
		//if (ReplayAnalytics.app.interestingMoments == 'On'){
       	//	playbackController.getApplication().getController('InterestingMoment').checkForInterestingMoment(chartIndex, newPosition);
    	//}
		/*if (chartIndex != 0){
			ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);
		}*/
		/*if (chartIndex == 0) {	
			for(i = 1; i < 5; i++) {
				ReplayAnalytics.app.currentActivePanelIndex = i;
				ReplayAnalytics.app.sliders[i].setValue(newPosition);
				ReplayAnalytics.app.sliders[i].fireEvent('change',ReplayAnalytics.app.sliders[i],i);
				//ReplayAnalytics.app.sliders[i].fireEvent('change',ReplayAnalytics.app.sliders[i],i);
			}
			ReplayAnalytics.app.currentActivePanelIndex = 0;
		}*/	
	},
	
	stepBackwardFunction: function() {	
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		if(ReplayAnalytics.app.currentPositions[chartIndex] != ReplayAnalytics.app.minimumPositions[chartIndex]) {
			this.updateSliderInterval();
		}
		ReplayAnalytics.app.lastPlaybackAction = 'stepBackward';		
		clearInterval(ReplayAnalytics.app.waitvariables[chartIndex]);
        if (ReplayAnalytics.app.currentPositions[chartIndex] > ReplayAnalytics.app.minimumPositions[chartIndex]) {
          	newPosition = ReplayAnalytics.app.currentPositions[chartIndex] - ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex];
           	ReplayAnalytics.app.sliders[chartIndex].setValue(newPosition);           	
           	ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);    
           	if (ReplayAnalytics.app.interestingMoments == 'On' || ReplayAnalytics.app.replayCommentsSetting == 'On'){
           		playbackController.getApplication().getController('InterestingMoment').checkForInterestingMoment(chartIndex, newPosition);
        	}
           	/*if (chartIndex != 0){
				ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);
			}*/
           	//ReplayAnalytics.app.currentPositions[chartIndex] = ReplayAnalytics.app.sliders[chartIndex].getValue()[0];
        }
	},	
	
	playBackwardFunction: function() {
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		if(ReplayAnalytics.app.currentPositions[chartIndex] != ReplayAnalytics.app.minimumPositions[chartIndex]) {
			this.updateSliderInterval();
		}
		this.stepBackwardFunction();
		ReplayAnalytics.app.lastPlaybackAction = 'playBackward';		
		clearInterval(ReplayAnalytics.app.waitvariables[chartIndex]);
		ReplayAnalytics.app.currentPositions[chartIndex] = ReplayAnalytics.app.sliders[chartIndex].getValue()[0];     
		if (!ReplayAnalytics.app.isIMGraphRunning && chartIndex != 5){
			ReplayAnalytics.app.waitvariables[chartIndex] = setInterval( function() {	
				var newPosition;
	            if (ReplayAnalytics.app.currentPositions[chartIndex] > ReplayAnalytics.app.minimumPositions[chartIndex]) {
	            	newPosition = ReplayAnalytics.app.currentPositions[chartIndex] - ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex];
	            	ReplayAnalytics.app.sliders[chartIndex].setValue(newPosition);
	            	ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);    
	            	if (ReplayAnalytics.app.interestingMoments == 'On' || ReplayAnalytics.app.replayCommentsSetting == 'On'){
	               		playbackController.getApplication().getController('InterestingMoment').checkForInterestingMoment(chartIndex, newPosition);
	            	}
	            	/*if (chartIndex != 0){
						ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);
					}*/
	            	//ReplayAnalytics.app.currentPositions[chartIndex] = ReplayAnalytics.app.sliders[chartIndex].getValue()[0];
	            }	
	            else { 	
	               	clearInterval(ReplayAnalytics.app.waitvariables[chartIndex]); 
	            }
			},ReplayAnalytics.app.replaySpeed);
		}		
	},
	
	pauseFunction: function() {	
		this.moveCarouselToGraphItem();
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		logInfo('pauseFunction called for Chart ' + chartIndex + ' at sliderValue=' + ReplayAnalytics.app.sliders[chartIndex].getValue()[0]);		
		clearInterval(ReplayAnalytics.app.waitvariables[chartIndex]);
		if (chartIndex == 0) {
			for(i = 1; i < 5; i++) {
				clearInterval(ReplayAnalytics.app.waitvariables[i]); 
			}
		}
	},
	
	playForwardFunction: function() {
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		if(ReplayAnalytics.app.currentPositions[chartIndex] != ReplayAnalytics.app.maximumPositions[chartIndex]) {
			this.updateSliderInterval();
		}
		this.stepForwardFunction();
		ReplayAnalytics.app.lastPlaybackAction = 'playForward';
		clearInterval(ReplayAnalytics.app.waitvariables[chartIndex]);
		ReplayAnalytics.app.currentPositions[chartIndex] = ReplayAnalytics.app.sliders[chartIndex].getValue()[0];     		
		if (!ReplayAnalytics.app.isIMGraphRunning && chartIndex != 5 && ReplayAnalytics.app.currentPositions[chartIndex] != ReplayAnalytics.app.maximumPositions[chartIndex]){
			ReplayAnalytics.app.waitvariables[chartIndex] = setInterval( function() {	
				logInfo('Inside setInterval for playForwardFunction at currentPos=' + ReplayAnalytics.app.currentPositions[chartIndex]
					+ ' & newPos=' + (ReplayAnalytics.app.currentPositions[chartIndex] + ReplayAnalytics.app.differentialMultiplier[chartIndex]));
				var newPosition;
	            if (ReplayAnalytics.app.currentPositions[chartIndex] < ReplayAnalytics.app.maximumPositions[chartIndex]) {
	            	newPosition = ReplayAnalytics.app.currentPositions[chartIndex] + ReplayAnalytics.app.differentialMultiplier[chartIndex];
	            	ReplayAnalytics.app.sliders[chartIndex].setValue(newPosition);
					ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);
					if (ReplayAnalytics.app.interestingMoments == 'On' || ReplayAnalytics.app.replayCommentsSetting == 'On'){
			       		playbackController.getApplication().getController('InterestingMoment').checkForInterestingMoment(chartIndex, newPosition);
			    	}
					/*if (chartIndex != 0){
						ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);
					}*/
					//ReplayAnalytics.app.currentPositions[chartIndex] = ReplayAnalytics.app.sliders[chartIndex].getValue()[0];
				}	
	            else {
					clearInterval(ReplayAnalytics.app.waitvariables[chartIndex]); 
	            }
			},ReplayAnalytics.app.replaySpeed);
		}		
	},
	
	stepForwardFunction: function() {
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		if(ReplayAnalytics.app.currentPositions[chartIndex] != ReplayAnalytics.app.maximumPositions[chartIndex]) {
			this.updateSliderInterval();
		}
		ReplayAnalytics.app.lastPlaybackAction = 'stepForward';
		clearInterval(ReplayAnalytics.app.waitvariables[chartIndex]);
        if (ReplayAnalytics.app.currentPositions[chartIndex] < ReplayAnalytics.app.maximumPositions[chartIndex]) {
        	newPosition = ReplayAnalytics.app.currentPositions[chartIndex] + ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex];
        	ReplayAnalytics.app.sliders[chartIndex].setValue(newPosition);
           	ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);    
           	if (ReplayAnalytics.app.interestingMoments == 'On' || ReplayAnalytics.app.replayCommentsSetting == 'On'){
           		playbackController.getApplication().getController('InterestingMoment').checkForInterestingMoment(chartIndex, newPosition);
        	}
           	//ReplayAnalytics.app.currentPositions[chartIndex] = ReplayAnalytics.app.sliders[chartIndex].getValue()[0];
           	/*if (chartIndex != 0){
				ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);
			}*/
        }
	},
	
	resetForwardFunction: function() {
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		ReplayAnalytics.app.lastPlaybackAction = 'resetForward';
		this.getApplication().getController('InterestingMoment').getManualIMCallout().hide();
		logMessage('resetForwardFunction for Chart ' + ReplayAnalytics.app.currentActivePanelIndex);
		clearInterval(ReplayAnalytics.app.waitvariables[chartIndex]);	
		var newPosition;
		newPosition = ReplayAnalytics.app.maximumPositions[chartIndex]; 
		ReplayAnalytics.app.sliders[chartIndex].setValue(newPosition); 
		ReplayAnalytics.app.currentPositions[chartIndex] = newPosition;
		ReplayAnalytics.app.sliders[chartIndex].fireEvent('change', ReplayAnalytics.app.sliders[chartIndex], chartIndex);
		//if (ReplayAnalytics.app.interestingMoments == 'On'){
       	//	playbackController.getApplication().getController('InterestingMoment').checkForInterestingMoment(chartIndex, newPosition);
    	//}
		/*if (chartIndex != 0){
			ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);
		}*/
		/*if (chartIndex == 0) {
			for(i = 1; i < 5; i++) {	
				ReplayAnalytics.app.currentActivePanelIndex = i;
				ReplayAnalytics.app.sliders[i].setValue(ReplayAnalytics.app.maximumPositions[ReplayAnalytics.app.currentActivePanelIndex]);
				ReplayAnalytics.app.sliders[i].fireEvent('change',ReplayAnalytics.app.sliders[i],i);
				//ReplayAnalytics.app.sliders[i].fireEvent('change',ReplayAnalytics.app.sliders[i],i);
			}
			ReplayAnalytics.app.currentActivePanelIndex = 0;
		}*/
	},
	
	moveCarouselToGraphItem: function(){
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		if (chartIndex != 0 && chartIndex != 5){
			var carousel = Ext.ComponentQuery.query('carousel[id=carousel'+ chartIndex +']')[0];
			carousel.setActiveItem(0);
		} else if (chartIndex == 0) {
			for (i = 1; i < 5; i++){
				var carouselItem = Ext.ComponentQuery.query('carousel[id=carousel'+ i +']')[0];
				carouselItem.setActiveItem(0);
			}
		}		
	},
});