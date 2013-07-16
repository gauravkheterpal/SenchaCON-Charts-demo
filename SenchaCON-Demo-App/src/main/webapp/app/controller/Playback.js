var playbackController;
Ext.define('SenchaCon2013Demo.controller.Playback', {
	extend : 'Ext.app.Controller',
	xtype: 'playbackcontroller',
	config: {
		refs: {
			'initController': 'initcontroller',
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
		},
	},
	
	launch: function(){
		playbackController = this;
	},
	
	resumeLastPlaybackAction: function(){
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		logInfo('ResumePlayback called for chart=' + chartIndex + ' at sliderValue=' + SenchaCon2013Demo.app.sliders[chartIndex].getValue()[0]
				+' and Last action is == ' + SenchaCon2013Demo.app.lastPlaybackAction);		
		if (SenchaCon2013Demo.app.lastPlaybackAction != undefined){
			if (SenchaCon2013Demo.app.lastPlaybackAction == 'playForward'){
				this.playForwardFunction();
			} else if (SenchaCon2013Demo.app.lastPlaybackAction == 'playBackward'){
				this.playBackwardFunction();
			}			
		}
	},
	
	sliderListenerFunctionDrag: function(slider, thumb, value) {
		value = value[0];
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		SenchaCon2013Demo.app.currentPositions[chartIndex] = SenchaCon2013Demo.app.sliders[chartIndex].getValue()[0];
		//SenchaCon2013Demo.app.sliders[chartIndex].fireEvent('change', SenchaCon2013Demo.app.sliders[chartIndex], chartIndex); 
		this.sliderListenerFunctionChange(slider);
	},
	
	setPanelDateCaption: function(chartIndex, value) {
		var caption = "";
		var captionFormat = "ddd mmm dd yyyy HH:MM:ss";
		var currentDate = "";
		try {
			currentDate = SenchaCon2013Demo.app.globalDateArray[chartIndex][value];
		} catch(err){
		}
		//logInfo('Current date for index='+chartIndex+' & value='+value+' is == ' + currentDate);
		if (SenchaCon2013Demo.app.granularities[chartIndex] != 'Hourly'){
			captionFormat = "ddd mmm dd yyyy";
		}
		try{
			currentDate = dateFormat(currentDate, captionFormat);
		} catch(err){
			logInfo('Error converting date' + err);
			currentDate = this.dateConversion(currentDate);
		}		
		if (chartIndex != 0 && chartIndex != 5){
			var graphTitle = SenchaCon2013Demo.app.graphTitle[chartIndex];
			caption = '<h1 style="text-align:center; color: black; z-index: 10; font-size: 14px; padding:10px"><b>'+currentDate+'</b></h1>';
			Ext.ComponentQuery.query('panel'+chartIndex)[0].setHtml(caption);
			//Ext.ComponentQuery.query('panel'+chartIndex)[0].setHtml(caption);
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
		var sliderValue = SenchaCon2013Demo.app.sliders[SenchaCon2013Demo.app.currentActivePanelIndex].getValue();
		SenchaCon2013Demo.app.sliders[SenchaCon2013Demo.app.currentActivePanelIndex].setValue(sliderValue % SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex]);	
	},
	
	showCharts: function(){		
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;	
		var value = 0;
		if(SenchaCon2013Demo.app.chartTypes[chartIndex] == 'scatter') {
			if(SenchaCon2013Demo.app.groupBys[SenchaCon2013Demo.app.currentActivePanelIndex] != 'none') {
				//this.createScatterChartGroupBy(SenchaCon2013Demo.app.chartTypes[chartIndex], SenchaCon2013Demo.app.jsonstore[chartIndex][value],SenchaCon2013Demo.app.xs[chartIndex],SenchaCon2013Demo.app.ys[chartIndex],chartIndex);
			}
			else {	
				this.getApplication().getController('Scatter').createScatterChart(SenchaCon2013Demo.app.chartTypes[chartIndex],SenchaCon2013Demo.app.jsonstore[chartIndex][value],SenchaCon2013Demo.app.dataFieldValues[chartIndex],SenchaCon2013Demo.app.categoryFieldValues[chartIndex],chartIndex, null);
			}				
		}	
		else if(SenchaCon2013Demo.app.chartTypes[chartIndex] == 'horizontalbar' || SenchaCon2013Demo.app.chartTypes[chartIndex] == 'verticalbar' || SenchaCon2013Demo.app.chartTypes[chartIndex] == 'line' || SenchaCon2013Demo.app.chartTypes[chartIndex] == 'area') {
			this.getApplication().getController('Main').changeModelFields();
			if(SenchaCon2013Demo.app.chartTypes[chartIndex] == 'horizontalbar') {
				if(SenchaCon2013Demo.app.groupBys[SenchaCon2013Demo.app.currentActivePanelIndex] != 'none') {
					SenchaCon2013Demo.app.getController('HorizontalBar').createHorizontalBarChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],chartIndex,SenchaCon2013Demo.app.groupByBarLabels);
				}
				else {
					SenchaCon2013Demo.app.getController('HorizontalBar').createHorizontalBarChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],chartIndex,null);
				}
			}
			else if(SenchaCon2013Demo.app.chartTypes[chartIndex] == 'verticalbar') {
				if(SenchaCon2013Demo.app.groupBys[SenchaCon2013Demo.app.currentActivePanelIndex] != 'none') {
					SenchaCon2013Demo.app.getController('VerticalBar').createVerticalBarChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],chartIndex,SenchaCon2013Demo.app.groupByBarLabels);
				}
				else {
					SenchaCon2013Demo.app.getController('VerticalBar').createVerticalBarChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],chartIndex,null);
				}
			}
			else if(SenchaCon2013Demo.app.chartTypes[chartIndex] == 'area') {
				if(SenchaCon2013Demo.app.groupBys[SenchaCon2013Demo.app.currentActivePanelIndex] != 'none') {
					SenchaCon2013Demo.app.getController('AreaBar').createAreaChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],chartIndex,SenchaCon2013Demo.app.groupByBarLabels);
				}
				else {
					SenchaCon2013Demo.app.getController('AreaBar').createAreaChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],chartIndex,null);
				}
			}
			
			else {
				if(SenchaCon2013Demo.app.groupBys[SenchaCon2013Demo.app.currentActivePanelIndex] == 'none') {
					SenchaCon2013Demo.app.getController('LineBar').createLineChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],chartIndex,null);
				}
				else{
					SenchaCon2013Demo.app.getController('LineBar').createLineChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],chartIndex,SenchaCon2013Demo.app.groupByBarLabels);	
				}
			}
		}
		else if(SenchaCon2013Demo.app.chartTypes[chartIndex] == 'pie') {
			this.getApplication().getController('Pie').createPieChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],SenchaCon2013Demo.app.dataFieldValues[chartIndex],SenchaCon2013Demo.app.categoryFieldValues[chartIndex],chartIndex);						
		}
		else if(SenchaCon2013Demo.app.chartTypes[chartIndex] == 'gauge') {
			this.getApplication().getController('Gauge').createGaugeChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],SenchaCon2013Demo.app.dataFieldValues[chartIndex],chartIndex);						
		}
		else if(SenchaCon2013Demo.app.chartTypes[chartIndex] == 'radar') {
			this.getApplication().getController('Radar').createRadarChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],SenchaCon2013Demo.app.dataFieldValues[chartIndex],SenchaCon2013Demo.app.categoryFieldValues[chartIndex],chartIndex);						
		}
		SenchaCon2013Demo.app.chartCreated[chartIndex] = true;
		if(SenchaCon2013Demo.app.dateSet[chartIndex] == true) {
			this.getApplication().getController('Main').setFocusOnPanel(chartIndex);
		}
		else {
			SenchaCon2013Demo.app.dateSet[chartIndex] = true;
		}
		this.setPanelDateCaption(chartIndex, value);			
		Ext.ComponentQuery.query('panel'+chartIndex)[0].add(SenchaCon2013Demo.app.newChart[chartIndex]);
		hideLoadingMask();
	},
	
	resetFunction: function() {	
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		clearInterval(SenchaCon2013Demo.app.waitvariables[chartIndex]);	
		var newPosition;
		newPosition = SenchaCon2013Demo.app.minimumPositions[chartIndex]; 
		SenchaCon2013Demo.app.sliders[chartIndex].setValue(newPosition); 
		SenchaCon2013Demo.app.currentPositions[chartIndex] = newPosition;
		this.showCharts();
		//SenchaCon2013Demo.app.sliders[chartIndex].fireEvent('change', SenchaCon2013Demo.app.sliders[chartIndex], chartIndex);
		if (chartIndex != 0){
			SenchaCon2013Demo.app.sliders[chartIndex].fireEvent('change',SenchaCon2013Demo.app.sliders[chartIndex],chartIndex);
		}
		if (chartIndex == 0) {	
			for(i = 1; i < 5; i++) {
				SenchaCon2013Demo.app.currentActivePanelIndex = i;
				SenchaCon2013Demo.app.sliders[i].setValue(newPosition);
				SenchaCon2013Demo.app.sliders[i].fireEvent('change',SenchaCon2013Demo.app.sliders[i],i);
				//SenchaCon2013Demo.app.sliders[i].fireEvent('change',SenchaCon2013Demo.app.sliders[i],i);
			}
			SenchaCon2013Demo.app.currentActivePanelIndex = 0;
		}
	},
	
	sliderListenerFunctionChange: function(slider) {
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		var sliderValue = slider.getValue()[0];
		var value = Math.floor(sliderValue / SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex]);
		SenchaCon2013Demo.app.currentPositions[SenchaCon2013Demo.app.currentActivePanelIndex] = SenchaCon2013Demo.app.sliders[SenchaCon2013Demo.app.currentActivePanelIndex].getValue()[0];
		logInfo('sliderValue=' + sliderValue + ' & differential=' + SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex] 
			+ ' & value=' + value);		
		if (chartIndex != 0){
			this.setPanelDateCaption(chartIndex, value);
			SenchaCon2013Demo.app.newChart[chartIndex].bindStore(SenchaCon2013Demo.app.jsonstore[chartIndex][value]);
		} else if (chartIndex == 0) {
			this.getApplication().getController('GlobalSync').globalSyncSliderFunctionChange(sliderValue, chartIndex);
		}
	},	
	
	resetBackwardFunction: function() {	
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		SenchaCon2013Demo.app.lastPlaybackAction = 'resetBackward';
		clearInterval(SenchaCon2013Demo.app.waitvariables[chartIndex]);	
		var newPosition;
		newPosition = SenchaCon2013Demo.app.minimumPositions[chartIndex]; 
		SenchaCon2013Demo.app.sliders[chartIndex].setValue(newPosition);
		SenchaCon2013Demo.app.currentPositions[chartIndex] = newPosition;
		SenchaCon2013Demo.app.sliders[chartIndex].fireEvent('change', SenchaCon2013Demo.app.sliders[chartIndex], chartIndex);	
	},
	
	stepBackwardFunction: function() {	
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		if(SenchaCon2013Demo.app.currentPositions[chartIndex] != SenchaCon2013Demo.app.minimumPositions[chartIndex]) {
			this.updateSliderInterval();
		}
		SenchaCon2013Demo.app.lastPlaybackAction = 'stepBackward';		
		clearInterval(SenchaCon2013Demo.app.waitvariables[chartIndex]);
        if (SenchaCon2013Demo.app.currentPositions[chartIndex] > SenchaCon2013Demo.app.minimumPositions[chartIndex]) {
          	newPosition = SenchaCon2013Demo.app.currentPositions[chartIndex] - SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex];
           	SenchaCon2013Demo.app.sliders[chartIndex].setValue(newPosition);           	
           	SenchaCon2013Demo.app.sliders[chartIndex].fireEvent('change',SenchaCon2013Demo.app.sliders[chartIndex],chartIndex);
        }
	},	
	
	playBackwardFunction: function() {
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		if(SenchaCon2013Demo.app.currentPositions[chartIndex] != SenchaCon2013Demo.app.minimumPositions[chartIndex]) {
			this.updateSliderInterval();
		}
		this.stepBackwardFunction();
		SenchaCon2013Demo.app.lastPlaybackAction = 'playBackward';		
		clearInterval(SenchaCon2013Demo.app.waitvariables[chartIndex]);
		SenchaCon2013Demo.app.currentPositions[chartIndex] = SenchaCon2013Demo.app.sliders[chartIndex].getValue()[0];		
		SenchaCon2013Demo.app.waitvariables[chartIndex] = setInterval( function() {	
			var newPosition;
            if (SenchaCon2013Demo.app.currentPositions[chartIndex] > SenchaCon2013Demo.app.minimumPositions[chartIndex]) {
            	newPosition = SenchaCon2013Demo.app.currentPositions[chartIndex] - SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex];
            	SenchaCon2013Demo.app.sliders[chartIndex].setValue(newPosition);
            	SenchaCon2013Demo.app.sliders[chartIndex].fireEvent('change',SenchaCon2013Demo.app.sliders[chartIndex],chartIndex);    
            }	
            else { 	
               	clearInterval(SenchaCon2013Demo.app.waitvariables[chartIndex]); 
            }
		},SenchaCon2013Demo.app.playSpeed);		
	},
	
	pauseFunction: function() {	
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		logInfo('pauseFunction called for Chart ' + chartIndex + ' at sliderValue=' + SenchaCon2013Demo.app.sliders[chartIndex].getValue()[0]);		
		clearInterval(SenchaCon2013Demo.app.waitvariables[chartIndex]);
		if (chartIndex == 0) {
			for(i = 1; i < 5; i++) {
				clearInterval(SenchaCon2013Demo.app.waitvariables[i]); 
			}
		}
	},
	
	playForwardFunction: function() {
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		if(SenchaCon2013Demo.app.currentPositions[chartIndex] != SenchaCon2013Demo.app.maximumPositions[chartIndex]) {
			this.updateSliderInterval();
		}
		this.stepForwardFunction();
		SenchaCon2013Demo.app.lastPlaybackAction = 'playForward';
		clearInterval(SenchaCon2013Demo.app.waitvariables[chartIndex]);
		SenchaCon2013Demo.app.currentPositions[chartIndex] = SenchaCon2013Demo.app.sliders[chartIndex].getValue()[0];     		
		if (SenchaCon2013Demo.app.currentPositions[chartIndex] != SenchaCon2013Demo.app.maximumPositions[chartIndex]){
			SenchaCon2013Demo.app.waitvariables[chartIndex] = setInterval( function() {	
				logInfo('Inside setInterval for playForwardFunction at currentPos=' + SenchaCon2013Demo.app.currentPositions[chartIndex]
					+ ' & newPos=' + (SenchaCon2013Demo.app.currentPositions[chartIndex] + SenchaCon2013Demo.app.differentialMultiplier[chartIndex]));
				var newPosition;
	            if (SenchaCon2013Demo.app.currentPositions[chartIndex] < SenchaCon2013Demo.app.maximumPositions[chartIndex]) {
	            	newPosition = SenchaCon2013Demo.app.currentPositions[chartIndex] + SenchaCon2013Demo.app.differentialMultiplier[chartIndex];
	            	SenchaCon2013Demo.app.sliders[chartIndex].setValue(newPosition);
					SenchaCon2013Demo.app.sliders[chartIndex].fireEvent('change',SenchaCon2013Demo.app.sliders[chartIndex],chartIndex);
				}	
	            else {
					clearInterval(SenchaCon2013Demo.app.waitvariables[chartIndex]); 
	            }
			},SenchaCon2013Demo.app.playSpeed);
		}		
	},
	
	stepForwardFunction: function() {
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		if(SenchaCon2013Demo.app.currentPositions[chartIndex] != SenchaCon2013Demo.app.maximumPositions[chartIndex]) {
			this.updateSliderInterval();
		}
		SenchaCon2013Demo.app.lastPlaybackAction = 'stepForward';
		clearInterval(SenchaCon2013Demo.app.waitvariables[chartIndex]);
        if (SenchaCon2013Demo.app.currentPositions[chartIndex] < SenchaCon2013Demo.app.maximumPositions[chartIndex]) {
        	newPosition = SenchaCon2013Demo.app.currentPositions[chartIndex] + SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex];
        	SenchaCon2013Demo.app.sliders[chartIndex].setValue(newPosition);
           	SenchaCon2013Demo.app.sliders[chartIndex].fireEvent('change',SenchaCon2013Demo.app.sliders[chartIndex],chartIndex);
        }
	},
	
	resetForwardFunction: function() {
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		SenchaCon2013Demo.app.lastPlaybackAction = 'resetForward';
		logMessage('resetForwardFunction for Chart ' + SenchaCon2013Demo.app.currentActivePanelIndex);
		clearInterval(SenchaCon2013Demo.app.waitvariables[chartIndex]);	
		var newPosition;
		newPosition = SenchaCon2013Demo.app.maximumPositions[chartIndex]; 
		SenchaCon2013Demo.app.sliders[chartIndex].setValue(newPosition); 
		SenchaCon2013Demo.app.currentPositions[chartIndex] = newPosition;
		SenchaCon2013Demo.app.sliders[chartIndex].fireEvent('change', SenchaCon2013Demo.app.sliders[chartIndex], chartIndex);
	}
});