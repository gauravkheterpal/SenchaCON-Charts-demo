Ext.define('ReplayAnalytics.controller.GlobalSync', {
	extend : 'Ext.app.Controller',
	xtype: 'globalsynccontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
			'slider0': 'slider0',
			'slider1': 'slider1',
			'slider2': 'slider2',
			'slider3': 'slider3',
			'slider4': 'slider4',
			'panel1': 'panel1',
			'panel2': 'panel2',
			'panel3': 'panel3',
			'panel4': 'panel4',	
			'fourPanelLayout': 'fourpanellayout',
			'globalSyncButton': 'segmentedbutton[id=globalsynctogglebutton]',
			'settingsButton': 'button[id=settingsbutton]',
			'globalSettingsButton': 'button[id=globalsettingsbutton]',
		},
		control: {
			'globalSyncButton': {
				toggle: 'globalSyncToggle'
			},
		},
	},
	
	globalSyncToggle: function(segmentedButton, button, isPressed) {
		this.getApplication().getController('Playback').pauseFunction();
		if(isPressed == true) {
			this.calculateGlobalSyncVariables();
			this.getFourPanelLayout().setCls('selected-panel');
			this.getPanel1().setCls('unselected-panel');
			this.getPanel2().setCls('unselected-panel');
			this.getPanel3().setCls('unselected-panel');
			this.getPanel4().setCls('unselected-panel');
			this.getSlider4().hide();
			this.getSlider2().hide();
			this.getSlider3().hide();
			this.getSlider1().hide();
			this.getSlider0().show();
			ReplayAnalytics.app.currentActivePanelIndex = 0;
			this.getApplication().getController('Main').checkForConfiguredGraphPanels();
			this.getApplication().getController('Playback').resetBackwardFunction();
			this.getSettingsButton().setDisabled(true);
			this.getGlobalSettingsButton().setDisabled(true);
		}	
		else {
			this.getSettingsButton().setDisabled(false);
			this.getGlobalSettingsButton().setDisabled(false);
			this.getFourPanelLayout().setCls('unselected-panel');
			this.getPanel1().setCls('selected-panel');
			this.getPanel2().setCls('unselected-panel');
			this.getPanel3().setCls('unselected-panel');
			this.getPanel4().setCls('unselected-panel');
			this.getSlider0().hide();
			this.getSlider2().hide();
			this.getSlider3().hide();
			this.getSlider4().hide();
			this.getSlider1().show();
			/*for(i = 1; i < 5; i++) {
				ReplayAnalytics.app.currentActivePanelIndex = i;
				ReplayAnalytics.app.sliders[i].setValue(0);
				ReplayAnalytics.app.sliders[i].fireEvent('change',ReplayAnalytics.app.sliders[i],i);
			}*/
			ReplayAnalytics.app.currentActivePanelIndex = 1;
		}	
	},
	
	calculateGlobalSyncVariables: function(){
		var chartIndex = 0;
		for(i = 0; i < 15; i++) {
			ReplayAnalytics.app.chartLengths[i] = 0;
		}
		var globalindex = 0;
		for(i = 0; i < 5; i++) {
			ReplayAnalytics.app.chartValue[i] = 0;
		}
		for(i = 0; i < 5; i++) {
			if(ReplayAnalytics.app.startDate[i] != undefined) {
				ReplayAnalytics.app.currentStartDate[i] = new Date(ReplayAnalytics.app.startDate[i]);
			}
		}
		for(i = 0; i < 5; i++) {
			ReplayAnalytics.app.chartIsRunning[i] = false;
			ReplayAnalytics.app.chartIsPaused[i] = false;
			ReplayAnalytics.app.chartFinished[i] = false;
			ReplayAnalytics.app.initialPosition[i] = true;
		}	
		ReplayAnalytics.app.numberActiveCharts = 0;
		for(i = 1; i < 5; i++) {
			if(ReplayAnalytics.app.dateSet[i] == true) {
				ReplayAnalytics.app.numberActiveCharts = ReplayAnalytics.app.numberActiveCharts + 1;
			}
		}
		ReplayAnalytics.app.chartsFinished = 0;
		ReplayAnalytics.app.globalIndex = 0;
		ReplayAnalytics.app.firstGlobalDate = true;
		ReplayAnalytics.app.globalSyncPressed = true;
		ReplayAnalytics.app.nullSearchReturnedTrue = false;
		ReplayAnalytics.app.finishCall = false;
		ReplayAnalytics.app.sandwich = false;
		ReplayAnalytics.app.testNextIncrement = null;
		var dateIndex = new Array();
		var startArray = new Array();
		var endArray = new Array();
		var earliestCharts = new Array(); //Array storing the charts with the earliest start dates upon global sync initialization
		var firstCharts = new Array(); //Array storing the earliest chart(s) with the largest granularity upon global sync initialization
		var globalSliderMax = 0;
		var count = 0;
		var valueGranularities = new Array();
		valueGranularities = ReplayAnalytics.app.valueGranularities;
		for(i = 1; i < 5; i++) {
			if(ReplayAnalytics.app.dateSet[i] == true) {
				//globalSliderMax = globalSliderMax + Ext.getCmp('mySlider' + i).getMaxValue();
				startArray[count] = ReplayAnalytics.app.currentStartDate[i].getTime();
				dateIndex[count] = i;
				endArray[count] = ReplayAnalytics.app.currentEndDate[i].getTime();
				count = count + 1;
			}
		};
		for(i = 0; i < count; i++) {
			if(count == 0) {
			}
			else if(count == 1) {
				ReplayAnalytics.app.globalStartDate = startArray[i];
				earliestCharts[0] = dateIndex[i];
			}
			else if(count == 2) {
				if(startArray[i] <= startArray[(i+1)%count]) {
					ReplayAnalytics.app.globalStartDate = startArray[i];
					earliestCharts[0] = dateIndex[i];
					if(startArray[i] == startArray[(i+1)%count]) {
						earliestCharts[1] = dateIndex[(i+1)%count];
					}	
				}
				if(endArray[i] >= endArray[(i+1)%count]) {
					ReplayAnalytics.app.globalEndDate = endArray[i];
				}
			}	
			else if(count == 3) {
				if(startArray[i] <= startArray[(i+1)%count] && startArray[i] <= startArray[(i+2)%count]) {
					ReplayAnalytics.app.globalStartDate = startArray[i];
					earliestCharts[0] = dateIndex[i];
					if(startArray[i] == startArray[(i+1)%count] && startArray[i] != startArray[(i+2)%count]) {
						earliestCharts[1] = dateIndex[(i+1)%count];
					}
					else if(startArray[i] == startArray[(i+2)%count] && startArray[i] != startArray[(i+1)%count]) {
						earliestCharts[1] = dateIndex[(i+2)%count];
					}
					else if(startArray[i] == startArray[(i+1)%count] && startArray[i] == startArray[(i+2)%count]) {
						earliestCharts[1] = dateIndex[(i+1)%count];
						earliestCharts[2] = dateIndex[(i+2)%count];
					}	
				}
				if(endArray[i] >= endArray[(i+1)%count] && endArray[i] >= endArray[(i+2)%count]) {
					ReplayAnalytics.app.globalEndDate = endArray[i];
				}
			}	
			else {	
				if(startArray[i] <= startArray[(i+1)%count] && startArray[i] <= startArray[(i+2)%count] && startArray[i] <= startArray[(i+3)%count]) {
					ReplayAnalytics.app.globalStartDate = startArray[i];
					earliestCharts[0] = dateIndex[i];
					if(startArray[i] == startArray[(i+1)%count] && startArray[i] != startArray[(i+2)%count] && startArray[i] != startArray[(i+3)%count]) {
						earliestCharts[1] = dateIndex[(i+1)%count];
					}
					else if(startArray[i] == startArray[(i+2)%count] && startArray[i] != startArray[(i+1)%count] && startArray[i] != startArray[(i+3)%count]) {
						earliestCharts[1] = dateIndex[(i+2)%count];
					}
					else if(startArray[i] == startArray[(i+3)%count] && startArray[i] != startArray[(i+1)%count] && startArray[i] != startArray[(i+2)%count]) {
						earliestCharts[1] = dateIndex[(i+3)%count];
					}	
					else if(startArray[i] == startArray[(i+1)%count] && startArray[i] == startArray[(i+2)%count] && startArray[i] != startArray[(i+3)%count]) {
						earliestCharts[1] = dateIndex[(i+1)%count];
						earliestCharts[2] = dateIndex[(i+2)%count];
					}
					else if(startArray[i] == startArray[(i+1)%count] && startArray[i] != startArray[(i+2)%count] && startArray[i] == startArray[(i+3)%count]) {
						earliestCharts[1] = dateIndex[(i+1)%count];
						earliestCharts[2] = dateIndex[(i+3)%count];
					}
					else if(startArray[i] != startArray[(i+1)%count] && startArray[i] == startArray[(i+2)%count] && startArray[i] == startArray[(i+3)%count]) {
						earliestCharts[1] = dateIndex[(i+2)%count];
						earliestCharts[2] = dateIndex[(i+3)%count];
					}
					else if(startArray[i] == startArray[(i+1)%count] && startArray[i] == startArray[(i+2)%count] && startArray[i] == startArray[(i+3)%count]) {
						earliestCharts[1] = dateIndex[(i+1)%count];
						earliestCharts[2] = dateIndex[(i+2)%count];
						earliestCharts[3] = dateIndex[(i+3)%count];
					}
				}	
				if(endArray[i] >= endArray[(i+1)%count] && endArray[i] >= endArray[(i+2)%count] && endArray[i] >= endArray[(i+3)%count]) {
					ReplayAnalytics.app.globalEndDate = endArray[i];
				}	
			}	
		};
		for(i = 0; i < earliestCharts.length; i++) {
			if(earliestCharts.length == 0) {
			}
			else if(earliestCharts.length == 1) {
				firstCharts[0] = earliestCharts[0];
			}
			else if(earliestCharts.length == 2) {
				if(valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+1)%earliestCharts.length]]) {
					firstCharts[0] = earliestCharts[i];
					if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]]) {
						firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
					}
				}
			}	
			else if(earliestCharts.length == 3) {
				if(valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+2)%earliestCharts.length]]) {
					firstCharts[0] = earliestCharts[i];
					if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+2)%earliestCharts.length]]) {
						firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
					}
					else if(valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]]) {
						firstCharts[1] = earliestCharts[(i+2)%earliestCharts.length];
					}
					else if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]]) {
						firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
						firstCharts[2] = earliestCharts[(i+2)%earliestCharts.length];
					}	
				}
			}	
			else {
				if(valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
					firstCharts[0] = earliestCharts[i];
					if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
						firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
					}
					else if(valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
						firstCharts[1] = earliestCharts[(i+2)%earliestCharts.length];
					}
					else if(valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
						firstCharts[1] = earliestCharts[(i+3)%earliestCharts.length];
					}
					else if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
						firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
						firstCharts[2] = earliestCharts[(i+2)%earliestCharts.length];
					}
					else if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
						firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
						firstCharts[2] = earliestCharts[(i+3)%earliestCharts.length];
					}
					else if(valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
						firstCharts[1] = earliestCharts[(i+2)%earliestCharts.length];
						firstCharts[2] = earliestCharts[(i+3)%earliestCharts.length];
					}
					else if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
						firstCharts[2] = earliestCharts[(i+2)%earliestCharts.length];
						firstCharts[3] = earliestCharts[(i+3)%earliestCharts.length];
						firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
					}
				}
			}
		};
		for(i = 0; i < firstCharts.length; i++) {
			ReplayAnalytics.app.chartIsRunning[firstCharts[i]] = true;
			ReplayAnalytics.app.initialPosition[firstCharts[i]] = false;
		}
		//The rest of the global sync logic is in the app.js file *
		//ReplayAnalytics.app.globalSync();
		this.globalSync();
		var sum = 0;
		for(i = 0; i < ReplayAnalytics.app.chartSection.length; i++) {
			if (!isNaN(ReplayAnalytics.app.chartLengths[i])){
				sum = sum + ReplayAnalytics.app.chartLengths[i];
			}											
		}
		//ReplayAnalytics.app.differentialMultiplier[chartIndex] = Math.round(100 / sum);	
		ReplayAnalytics.app.differentialMultiplier[chartIndex] = 1;
		Ext.ComponentQuery.query('slider'+chartIndex)[0].setMaxValue(ReplayAnalytics.app.differentialMultiplier[chartIndex] * sum);
	    ReplayAnalytics.app.maximumPositions[chartIndex] = Ext.ComponentQuery.query('slider'+chartIndex)[0].getMaxValue();
		hideLoadingMask();
		ReplayAnalytics.app.testcount = ReplayAnalytics.app.testcount + 1;
		logMessage('chartIndex in global end '+chartIndex);
		this.calculateGlobalSyncChartPositionsMap();
	},
	
	globalSyncSliderFunctionChange: function(value, chartIndex){

		//if(value == 0 /*&& ReplayAnalytics.app.testcount < 2*/) {
		//	
		//}
		//else {
			//hideLoadingMask();
			//ReplayAnalytics.app.playChartsGlobal(value);
			this.playChartsGlobal(value);
		//}
	},
	
	globalSync: function() {
		var counter = 0;
		while(ReplayAnalytics.app.chartsFinished != ReplayAnalytics.app.numberActiveCharts && counter < 100) {
		//console.log('chartsFinished = '+ReplayAnalytics.app.chartsFinished);
			var chartUsed = false;
			var i = 1;
			while(i < 5) {
				if(ReplayAnalytics.app.currentStartDate[i] <= ReplayAnalytics.app.currentEndDate[i]) {
					if(ReplayAnalytics.app.chartIsRunning[i] == true && ReplayAnalytics.app.chartIsPaused[i] != true) {
						previousDate = new Date(ReplayAnalytics.app.currentStartDate[i]);
						switch(ReplayAnalytics.app.granularities[i]) {
						case 'Hourly':
							ReplayAnalytics.app.currentStartDate[i].setMinutes(ReplayAnalytics.app.currentStartDate[i].getMinutes() + 60);
							break;
						case 'Daily':
							ReplayAnalytics.app.currentStartDate[i].setDate(ReplayAnalytics.app.currentStartDate[i].getDate() + 1);
							break;
						case 'Weekly':
							ReplayAnalytics.app.currentStartDate[i].setDate(ReplayAnalytics.app.currentStartDate[i].getDate() + 7);
							break;
						case 'Monthly':
							ReplayAnalytics.app.currentStartDate[i].setMonth(ReplayAnalytics.app.currentStartDate[i].getMonth() + 1);
							ReplayAnalytics.app.currentStartDate[i].setDate(1);
						break;
						}
						var test;
						if(ReplayAnalytics.app.chartFinished[i] != true && ReplayAnalytics.app.currentStartDate[i].getTime() > ReplayAnalytics.app.currentEndDate[i].getTime()) {
							//console.log('for index '+ i);
							//console.log('first chart stopped');
							ReplayAnalytics.app.chartFinished[i] = true;
							ReplayAnalytics.app.chartsFinished = ReplayAnalytics.app.chartsFinished + 1;
							//console.log('chartsFinished = '+ReplayAnalytics.app.chartsFinished);
					
							if(ReplayAnalytics.app.chartsFinished == ReplayAnalytics.app.numberActiveCharts) {
								//console.log('chartsfinished = '+ReplayAnalytics.app.chartsFinished);
								//console.log('number active charts = '+ReplayAnalytics.app.numberActiveCharts);
						
								var sectionIndexArray = new Array();
								var j = 0;
								for(i = 1; i < 5; i++) {
									if(ReplayAnalytics.app.chartIsRunning[i] == true && ReplayAnalytics.app.chartIsPaused[i] != true) {
										sectionIndexArray[j] = i;
										j = j + 1;
										ReplayAnalytics.app.chartIsPaused[i] = true;
									}	
								}
								ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex] = sectionIndexArray;
								ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] - 1;
						
								return;
							}	
							var sectionIndexArray = new Array();
							var j = 0;
							for(var iii = 1; iii < 5; iii++) {
								if(ReplayAnalytics.app.chartIsRunning[iii] == true && ReplayAnalytics.app.chartIsPaused[iii] != true) {
									sectionIndexArray[j] = iii;
									j = j + 1;
									ReplayAnalytics.app.chartIsPaused[iii] = true;
								}	
							}
							if(this.nullSearch(ReplayAnalytics.app.currentStartDate[i],previousDate) == true) {
								ReplayAnalytics.app.nullSearchReturnedTrue = true;
							}	
							//console.log(ReplayAnalytics.app.chartIsPaused[1]);
							//console.log('sectionindexarray');
							//console.log(sectionIndexArray);
							ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex] = sectionIndexArray;
							//chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
							ReplayAnalytics.app.globalIndex = ReplayAnalytics.app.globalIndex + 1;
							//chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
							ReplayAnalytics.app.finishCall = true;
							this.globalSyncLogic(ReplayAnalytics.app.globalEndDate,previousDate,i);
							//currentStartDate[i].setDate(currentStartDate[i].getDate() + 1);
						}
						if(chartUsed == false) {
							//console.log('globalSyncLogic called with index '+i);
							test = this.globalSyncLogic(ReplayAnalytics.app.currentStartDate[i],previousDate,i);
							if(test != true) {	
								chartUsed = true;
							}	
						}
					}	
				}
				else if(ReplayAnalytics.app.currentStartDate[i] == undefined) {
				}
				else if(ReplayAnalytics.app.chartFinished[i] != true && ReplayAnalytics.app.currentStartDate[i].getTime() > ReplayAnalytics.app.currentEndDate[i].getTime()) {
					//console.log('for index '+ i);
					//console.log('first chart stopped');
					ReplayAnalytics.app.chartFinished[i] = true;
					ReplayAnalytics.app.chartsFinished = ReplayAnalytics.app.chartsFinished + 1;
					//console.log('chartsFinished = '+ReplayAnalytics.app.chartsFinished);
					
					if(ReplayAnalytics.app.chartsFinished == ReplayAnalytics.app.numberActiveCharts) {
						//console.log('chartsfinished = '+ReplayAnalytics.app.chartsFinished);
						//console.log('number active charts = '+ReplayAnalytics.app.numberActiveCharts);
						
						var sectionIndexArray = new Array();
						var j = 0;
						for(i = 1; i < 5; i++) {
							if(ReplayAnalytics.app.chartIsRunning[i] == true && ReplayAnalytics.app.chartIsPaused[i] != true) {
								sectionIndexArray[j] = i;
								j = j + 1;
								ReplayAnalytics.app.chartIsPaused[i] = true;
							}	
						}
						ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex] = sectionIndexArray;
						ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] - 1;
						
						return;
					}
					
					//console.log('chartisRunning2');
					//console.log(ReplayAnalytics.app.chartIsRunning[2]);
					//console.log('chartIsRunning1');
					//console.log(ReplayAnalytics.app.chartIsRunning[1]);
					//console.log('chartisPaused2');
					//console.log(ReplayAnalytics.app.chartIsPaused[2]);
					//console.log('chartIsPaused1');
					//console.log(ReplayAnalytics.app.chartIsPaused[1]);
					
					var sectionIndexArray = new Array();
					var j = 0;
					for(ii = 1; ii < 5; ii++) {
						if(ReplayAnalytics.app.chartIsRunning[ii] == true && ReplayAnalytics.app.chartIsPaused[ii] != true) {
							sectionIndexArray[j] = ii;
							j = j + 1;
							ReplayAnalytics.app.chartIsPaused[ii] = true;
						}	
					}
					//console.log('sectionindexarray');
					//console.log(sectionIndexArray);
					ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex] = sectionIndexArray;
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] - 1;
					ReplayAnalytics.app.globalIndex = ReplayAnalytics.app.globalIndex + 1;
					//chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
					ReplayAnalytics.app.finishCall = true;
					this.globalSyncLogic(ReplayAnalytics.app.globalEndDate,ReplayAnalytics.app.currentStartDate[i],i);
					//currentStartDate[i].setDate(currentStartDate[i].getDate() + 1);
					
				}
				//console.log('breakpoint');
				i++;
				//console.log(i);
			}
			counter = counter + 1;
		}
		var j = 0;
		for(i = 1; i < 5; i++) {
			if(ReplayAnalytics.app.chartIsRunning[i] == true && ReplayAnalytics.app.chartIsPaused[i] != true) {
				sectionIndexArray[j] = i;
				j = j + 1;
				ReplayAnalytics.app.chartIsPaused[i] = true;
			}	
		}
		ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex] = sectionIndexArray;
		return;
	},
	
	globalSyncLogic: function(presentDate,previousDate,index) {	
			var startArray = new Array();
			var earliestCharts = new Array();
			var firstCharts = new Array();
			var dateIndex = new Array();
			var earlierDateFound = false;
			var largerEndDate = false;
			var smallerEndDate = false;
			var sectionIndexArray = new Array();
			var count = 0;
			var valueGranularities = new Array();
			valueGranularities = ReplayAnalytics.app.valueGranularities;
			//console.log(ReplayAnalytics.app.dateSet[1] && (ReplayAnalytics.app.chartIsRunning[1] || ReplayAnalytics.app.chartIsPaused[1]));
			for(i = 1; i < 5; i++) {
				if(ReplayAnalytics.app.dateSet[i] == true && (ReplayAnalytics.app.chartIsRunning[i] == false || ReplayAnalytics.app.chartIsPaused[i] == true) && ReplayAnalytics.app.chartFinished[i] == false && ReplayAnalytics.app.currentStartDate[i] < presentDate && ReplayAnalytics.app.currentStartDate[i] >= previousDate) {
					startArray[count] = ReplayAnalytics.app.currentStartDate[i].getTime();
					dateIndex[count] = i;
					count = count + 1;
					earlierDateFound = true;	
				}
			}
			if(earlierDateFound == false) {
				ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] + 1;
				return false;
			}
			/*
			else if(currentStartDate[index] > currentEndDate[index] && chartFinished[index] != true) {
				chartFinished[index] = true;
				chartsFinished = chartsFinished + 1;
				//console.log('chartsFinished = '+chartsFinished);
					
				if(chartsFinished == numberActiveCharts) {
					//console.log('chartsfinished = '+chartsFinished);
					//console.log('number active charts = '+numberActiveCharts);
						
					var sectionIndexArray = new Array();
					var j = 0;
					for(i = 1; i < 5; i++) {
						if(chartIsRunning[i] == true && chartIsPaused[i] != true) {
							sectionIndexArray[j] = i;
							j = j + 1;
							chartIsPaused[i] = true;
						}	
					}
					chartSection[globalIndex] = sectionIndexArray;
					chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
					
					return false;
				}
			}	
			*/	
			for(i = 0; i < count; i++) {
				if(count == 0) {
				}
				else if(count == 1) {
					earliestCharts[0] = dateIndex[i];
				}
				else if(count == 2) {
					if(startArray[i] <= startArray[(i+1)%count]) {
						earliestCharts[0] = dateIndex[i];
						if(startArray[i] == startArray[(i+1)%count]) {
							earliestCharts[1] = dateIndex[(i+1)%count];
						}	
					}
				}	
				else if(count == 3) {
					if(startArray[i] <= startArray[(i+1)%count] && startArray[i] <= startArray[(i+2)%count]) {
						earliestCharts[0] = dateIndex[i];
						if(startArray[i] == startArray[(i+1)%count] && startArray[i] != startArray[(i+2)%count]) {
							earliestCharts[1] = dateIndex[(i+1)%count];
						}
						else if(startArray[i] == startArray[(i+2)%count] && startArray[i] != startArray[(i+1)%count]) {
							earliestCharts[1] = dateIndex[(i+2)%count];
						}
						else if(startArray[i] == startArray[(i+1)%count] && startArray[i] == startArray[(i+2)%count]) {
							earliestCharts[1] = dateIndex[(i+1)%count];
							earliestCharts[2] = dateIndex[(i+2)%count];
						}	
					}
				}	
				else {	
					if(startArray[i] <= startArray[(i+1)%count] && startArray[i] <= startArray[(i+2)%count] && startArray[i] <= startArray[(i+3)%count]) {
						earliestCharts[0] = dateIndex[i];
						if(startArray[i] == startArray[(i+1)%count] && startArray[i] != startArray[(i+2)%count] && startArray[i] != startArray[(i+3)%count]) {
							earliestCharts[1] = dateIndex[(i+1)%count];
						}
						else if(startArray[i] == startArray[(i+2)%count] && startArray[i] != startArray[(i+1)%count] && startArray[i] != startArray[(i+3)%count]) {
							earliestCharts[1] = dateIndex[(i+2)%count];
						}
						else if(startArray[i] == startArray[(i+3)%count] && startArray[i] != startArray[(i+1)%count] && startArray[i] != startArray[(i+2)%count]) {
							earliestCharts[1] = dateIndex[(i+3)%count];
						}	
						else if(startArray[i] == startArray[(i+1)%count] && startArray[i] == startArray[(i+2)%count] && startArray[i] != startArray[(i+3)%count]) {
							earliestCharts[1] = dateIndex[(i+1)%count];
							earliestCharts[2] = dateIndex[(i+2)%count];
						}
						else if(startArray[i] == startArray[(i+1)%count] && startArray[i] != startArray[(i+2)%count] && startArray[i] == startArray[(i+3)%count]) {
							earliestCharts[1] = dateIndex[(i+1)%count];
							earliestCharts[2] = dateIndex[(i+3)%count];
						}
						else if(startArray[i] != startArray[(i+1)%count] && startArray[i] == startArray[(i+2)%count] && startArray[i] == startArray[(i+3)%count]) {
							earliestCharts[1] = dateIndex[(i+2)%count];
							earliestCharts[2] = dateIndex[(i+3)%count];
						}
						else if(startArray[i] == startArray[(i+1)%count] && startArray[i] == startArray[(i+2)%count] && startArray[i] == startArray[(i+3)%count]) {
							earliestCharts[1] = dateIndex[(i+1)%count];
							earliestCharts[2] = dateIndex[(i+2)%count];
							earliestCharts[3] = dateIndex[(i+3)%count];
						}
					}
				}	
			};
			for(i = 0; i < earliestCharts.length; i++) {
				if(earliestCharts.length == 0) {
				}
				else if(earliestCharts.length == 1) {
					firstCharts[0] = earliestCharts[0];
				}
				else if(earliestCharts.length == 2) {
					if(valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+1)%earliestCharts.length]]) {
						firstCharts[0] = earliestCharts[i];
						if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]]) {
							firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
						}
					}
				}	
				else if(earliestCharts.length == 3) {
					if(valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+2)%earliestCharts.length]]) {
						firstCharts[0] = earliestCharts[i];
						if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+2)%earliestCharts.length]]) {
							firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
						}
						else if(valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]]) {
							firstCharts[1] = earliestCharts[(i+2)%earliestCharts.length];
						}
						else if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]]) {
							firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
							firstCharts[2] = earliestCharts[(i+2)%earliestCharts.length];
						}	
					}
				}	
				else {
					if(valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
						firstCharts[0] = earliestCharts[i];
						if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
							firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
						}
						else if(valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
							firstCharts[1] = earliestCharts[(i+2)%earliestCharts.length];
						}
						else if(valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
							firstCharts[1] = earliestCharts[(i+3)%earliestCharts.length];
						}
						else if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
							firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
							firstCharts[2] = earliestCharts[(i+2)%earliestCharts.length];
						}
						else if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
							firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
							firstCharts[2] = earliestCharts[(i+3)%earliestCharts.length];
						}
						else if(valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
							firstCharts[1] = earliestCharts[(i+2)%earliestCharts.length];
							firstCharts[2] = earliestCharts[(i+3)%earliestCharts.length];
						}
						else if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
							firstCharts[2] = earliestCharts[(i+2)%earliestCharts.length];
							firstCharts[3] = earliestCharts[(i+3)%earliestCharts.length];
							firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
						}
					}
				}
			};
				
				//console.log('first charts are:');
				//console.log(firstCharts);
				var testParallelDates = false;
				
				if(ReplayAnalytics.app.finishCall == true && valueGranularities[index] < valueGranularities[firstCharts[0]] && firstCharts[0] < index && ReplayAnalytics.app.chartsFinished == ReplayAnalytics.app.numberActiveCharts -1) {
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] + 1;
					//console.log('chartLengths incremented. value now '+ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex]);
				}	
				if(ReplayAnalytics.app.finishCall == true && valueGranularities[index] < valueGranularities[firstCharts[0]] && firstCharts[0] > index && ReplayAnalytics.app.chartsFinished == ReplayAnalytics.app.numberActiveCharts -1) {
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] + 2;
					//console.log('chartLengths incremented. value now '+ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex]);
				}	
				if(ReplayAnalytics.app.finishCall == true && ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex-1].length < 2) {
					for(iii = 0; iii < firstCharts.length; iii++) {
						sectionIndexArray[iii] = firstCharts[iii];
					}
				}	
				var counting_1 = 0;
				var counting_2 = 0;
				if(ReplayAnalytics.app.finishCall == true && ReplayAnalytics.app.chartsFinished < ReplayAnalytics.app.numberActiveCharts - 1) {
					if(ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex-1].length > 1) {
					for(u = 0; u < firstCharts.length; u++) {
						for(uu = 0; uu < ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex-1].length; uu++) {
							if(firstCharts[u] == ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex-1][uu] && firstCharts[u] < index) {
								counting_1 = counting_1 + 1;
							}
							else if(firstCharts[u] == ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex-1][uu] && firstCharts[u] > index) {
								counting_2 = counting_2 + 1;
							}	
						}
					}
					}
				}
				if(ReplayAnalytics.app.finishCall == true && ReplayAnalytics.app.chartsFinished < ReplayAnalytics.app.numberActiveCharts - 1 && firstCharts[0] < index && ReplayAnalytics.app.initialPosition[firstCharts[0]] == true) {
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] - 1;
					//console.log('chartLengths decremented. value now '+ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex]);
				}	
				if(counting_1 != 0) {
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex-1] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex-1] - 1;
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] + 1;
					for(iii = 0; iii < firstCharts.length; iii++) {
						sectionIndexArray[iii] = firstCharts[iii];
					}
				}
				if(counting_2 != 0) {
					//chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
					//chartLengths[globalIndex] = chartLengths[globalIndex] + 1;
					for(iii = 0; iii < firstCharts.length; iii++) {
						sectionIndexArray[iii] = firstCharts[iii];
					}
				}	
				//console.log('compare...');
				//console.log(ReplayAnalytics.app.currentStartDate[firstCharts[0]]);
				//console.log(previousDate);
				if(ReplayAnalytics.app.finishCall == true && ReplayAnalytics.app.firstGlobalDate != true && ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex-1].length > 1 && ReplayAnalytics.app.chartsFinished == ReplayAnalytics.app.numberActiveCharts -1) {
					//console.log('comparison satisfied');
					//console.log(ReplayAnalytics.app.chartLengths);
					//console.log(ReplayAnalytics.app.globalIndex);
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] + 1;
					for(iii = 0; iii < firstCharts.length; iii++) {
						sectionIndexArray[iii] = firstCharts[iii];
					}	
				}
				else if(ReplayAnalytics.app.finishCall == true && ReplayAnalytics.app.firstGlobalDate == true && firstCharts[0] > index && ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex-1].length > 1 && ReplayAnalytics.app.chartsFinished == ReplayAnalytics.app.numberActiveCharts -1) {
					for(iii = 0; iii < firstCharts.length; iii++) {
						sectionIndexArray[iii] = firstCharts[iii];
					}
				}
				else if(ReplayAnalytics.app.finishCall == true && ReplayAnalytics.app.firstGlobalDate == true && firstCharts[0] < index && ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex-1].length > 1 && ReplayAnalytics.app.chartsFinished == ReplayAnalytics.app.numberActiveCharts -1) {
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex-1] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex-1] - 1;
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] + 2;
					for(iii = 0; iii < firstCharts.length; iii++) {
						sectionIndexArray[iii] = firstCharts[iii];
					}
				}
				
				/*
				if(testParallelDates == true) {
					chartLengths[globalIndex+1] = chartLengths[globalIndex+1] + 1;
					//console.log('testparalleldates added value of 1');
					//console.log('chartLengths = '+chartLengths[globalIndex + 1]);
					//console.log(chartSection);
					//console.log(globalIndex);
				}	
				*/
				var jj = 0;
				var j = 0;
				if(ReplayAnalytics.app.finishCall == false) {
					for(i = 1; i < 5; i++) {
						if(ReplayAnalytics.app.chartIsRunning[i] == true && ReplayAnalytics.app.chartIsPaused[i] != true) {
							sectionIndexArray[j] = i;
							j = j + 1;
							ReplayAnalytics.app.chartIsPaused[i] = true;
						}	
					}
				}
				if(j == 2) {
					//console.log('chart '+sectionIndexArray[1]+' updated.');
					switch(ReplayAnalytics.app.granularities[sectionIndexArray[1]]) {
						case 'Hourly':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].setMinutes(ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].getMinutes() + 60);
							break;
						case 'Daily':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].setDate(ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].getDate() + 1);
							break;
						case 'Weekly':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].setDate(ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].getDate() + 7);
							break;
						case 'Monthly':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].setDate(1);
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].setMonth(ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].getMonth() + 1);
							break;
					}
					if(ReplayAnalytics.app.chartFinished[sectionIndexArray[1]] != true && ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].getTime() > ReplayAnalytics.app.currentEndDate[sectionIndexArray[1]].getTime()) {
						ReplayAnalytics.app.chartFinished[sectionIndexArray[1]] = true;
						ReplayAnalytics.app.chartsFinished = ReplayAnalytics.app.chartsFinished + 1;
					}	
				}	
				else if(j == 3) { 
					switch(ReplayAnalytics.app.granularities[sectionIndexArray[1]]) {
						case 'Hourly':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].setMinutes(ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].getMinutes() + 60);
							break;
						case 'Daily':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].setDate(ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].getDate() + 1);
							break;
						case 'Weekly':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].setDate(ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].getDate() + 7);
							break;
						case 'Monthly':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].setDate(1);
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].setMonth(ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].getMonth() + 1);
							break;
					}
					if(ReplayAnalytics.app.chartFinished[sectionIndexArray[1]] != true && ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].getTime() > ReplayAnalytics.app.currentEndDate[sectionIndexArray[1]].getTime()) {
						ReplayAnalytics.app.chartFinished[sectionIndexArray[1]] = true;
						ReplayAnalytics.app.chartsFinished = ReplayAnalytics.app.chartsFinished + 1;
					}
					switch(ReplayAnalytics.app.granularities[sectionIndexArray[2]]) {
						case 'Hourly':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[2]].setMinutes(ReplayAnalytics.app.currentStartDate[sectionIndexArray[2]].getMinutes() + 60);
							break;
						case 'Daily':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[2]].setDate(ReplayAnalytics.app.currentStartDate[sectionIndexArray[2]].getDate() + 1);
							break;
						case 'Weekly':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[2]].setDate(ReplayAnalytics.app.currentStartDate[sectionIndexArray[2]].getDate() + 7);
							break;
						case 'Monthly':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[2]].setDate(1);
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[2]].setMonth(ReplayAnalytics.app.currentStartDate[sectionIndexArray[2]].getMonth() + 1);
							break;
					}
					if(ReplayAnalytics.app.chartFinished[sectionIndexArray[2]] != true && ReplayAnalytics.app.currentStartDate[sectionIndexArray[2]].getTime() > ReplayAnalytics.app.currentEndDate[sectionIndexArray[2]].getTime()) {
						ReplayAnalytics.app.chartFinished[sectionIndexArray[2]] = true;
						ReplayAnalytics.app.chartsFinished = ReplayAnalytics.app.chartsFinished + 1;
					}
				}
				//console.log('sectionindexarray');
				//console.log(sectionIndexArray);
				if(ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] != 0) {
					for(ii = 0; ii < firstCharts.length; ii++) {
						if(ReplayAnalytics.app.currentStartDate[index] > ReplayAnalytics.app.currentEndDate[firstCharts[ii]]) {
							//jj = jj + 1;
						}
					}
					if(jj != 0) {
						ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex+1] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex+1] + 1;
						//console.log('chartlengths[globalindex + 1] incremented. value now '+ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex+1]);

					}
					ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex] = sectionIndexArray;
					if(ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex].length > 1) {
						for(i = 0; i < ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex].length; i++) {
							if(ReplayAnalytics.app.currentEndDate[ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex][0]] > ReplayAnalytics.app.currentEndDate[ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex][(i+1)]]) {
								largerEndDate = true;
							}
							/*
							else if(currentEndDate[chartSection[globalIndex][0]] < currentEndDate[chartSection[globalIndex][(i+1)]]) {
								smallerEndDate = true;
							}	
							*/
						}
					}
					if(largerEndDate == true) {
						if(jj != 0) {
							ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] - 1;
						}
						//chartLengths[globalIndex + 1] = 1;
						//console.log('chartlengths[globalindex + 1] incremented. value now '+ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex+1]);
					}
					/*
					else if(smallerEndDate == true) {
						if(jj != 0) {
							chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
						}
						chartLengths[globalIndex + 2] = 1;
						//console.log('chartlengths[globalindex + 1] incremented. value now '+chartLengths[globalIndex+1]);
					}	
					*/
					ReplayAnalytics.app.globalIndex = ReplayAnalytics.app.globalIndex + 1;
				}	
				var sum = 0;
				for(i = 0; i < firstCharts.length; i++) {
					if(ReplayAnalytics.app.currentStartDate[firstCharts[i]].getTime() == previousDate.getTime() && valueGranularities[firstCharts[i]] == valueGranularities[index] && ReplayAnalytics.app.currentStartDate[index] <= ReplayAnalytics.app.currentEndDate[index]) {
						if(ReplayAnalytics.app.currentEndDate[index] > ReplayAnalytics.app.currentEndDate[firstCharts[i]]) {
							ReplayAnalytics.app.sandwich = true;
						}	
						sum = sum + 1;
						/*
						for(j = 1; j < 5; j++) {
							if(chartIsRunning[j] == true) {
								chartIsPaused[j] = false;
							}
						}
						*/
						ReplayAnalytics.app.chartIsPaused[index] = false;
						//chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
						if(firstCharts[i] < index) {
							switch(ReplayAnalytics.app.granularities[firstCharts[i]]) {
							case 'Hourly':
								ReplayAnalytics.app.currentStartDate[firstCharts[i]].setMinutes(ReplayAnalytics.app.currentStartDate[firstCharts[i]].getMinutes() + 60);
								break;
							case 'Daily':
								ReplayAnalytics.app.currentStartDate[firstCharts[i]].setDate(ReplayAnalytics.app.currentStartDate[firstCharts[i]].getDate() + 1);
								break;
							case 'Weekly':
								ReplayAnalytics.app.currentStartDate[firstCharts[i]].setDate(ReplayAnalytics.app.currentStartDate[firstCharts[i]].getDate() + 7);
								break;
							case 'Monthly':
								ReplayAnalytics.app.currentStartDate[firstCharts[i]].setDate(1);
								ReplayAnalytics.app.currentStartDate[firstCharts[i]].setMonth(ReplayAnalytics.app.currentStartDate[firstCharts[i]].getMonth() + 1);
								break;
							}	
						}
					}
				}
				if(sum != 0) {
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] + 1;
				}
				if(valueGranularities[index] < valueGranularities[firstCharts[0]] && ReplayAnalytics.app.chartFinished[index] != true && ReplayAnalytics.app.initialPosition[firstCharts[0]] == false) {
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] + 1;
				}
				if(valueGranularities[index] > valueGranularities[firstCharts[0]] && ReplayAnalytics.app.chartFinished[index] != true && ReplayAnalytics.app.initialPosition[firstCharts[0]] == false) {
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] + 1;
				}
				
				for(i = 0; i < firstCharts.length; i++) {
					ReplayAnalytics.app.chartIsRunning[firstCharts[i]] = true;
					ReplayAnalytics.app.chartIsPaused[firstCharts[i]] = false;
					ReplayAnalytics.app.initialPosition[firstCharts[i]] = false;
				};	
				ReplayAnalytics.app.firstGlobalDate = false;
				if(sum != 0) {
					return false;
				}
				ReplayAnalytics.app.nullSearchReturnedTrue = false;
				ReplayAnalytics.app.finishCall = false;
			return true;
	},
		
	nullSearch: function(presentDate,previousDate) {
		var earlierDateFound = false;
		for(i = 1; i < 5; i++) {
			if(ReplayAnalytics.app.dateSet[i] == true && (ReplayAnalytics.app.chartIsRunning[i] == false || ReplayAnalytics.app.chartIsPaused[i] == true) && ReplayAnalytics.app.chartFinished[i] == false && ReplayAnalytics.app.currentStartDate[i] < presentDate && ReplayAnalytics.app.currentStartDate[i] >= previousDate) {
				earlierDateFound = true;	
			}
		}
		if(earlierDateFound == false) {
			return false;
		}
		else {
			return true;
		}
	},

	playChartsGlobal: function(value) {
		for (i = 1; i < 5; i++){
			chartPos = ReplayAnalytics.app.globalSyncChartPositions[value][i];
			if (chartPos != undefined && ReplayAnalytics.app.isChartConfigured[i]){
				this.getApplication().getController('Playback').setPanelDateCaption(i, chartPos);
				ReplayAnalytics.app.newChart[i].bindStore(ReplayAnalytics.app.jsonstore[i][chartPos]);
				//Ext.ComponentQuery.query('chart[id=chart'+i+']')[0].bindStore(ReplayAnalytics.app.jsonstore[i][chartPos]);
			}			
		}
		if (ReplayAnalytics.app.interestingMoments == 'On'){
       		playbackController.getApplication().getController('InterestingMoment').checkForInterestingMoment(0, value);
    	}
	},
	
	calculateGlobalSyncChartPositionsMap: function(){
		this.getApplication().getController('Main').checkForConfiguredGraphPanels();
		var sliderMaxValue = ReplayAnalytics.app.maximumPositions[0];
		ReplayAnalytics.app.globalSyncChartPositions = new Array();
		for(i = 0; i <= sliderMaxValue; i++) {
			ReplayAnalytics.app.globalSyncChartPositions[i] = new Array();
			for (j = 0; j < 5; j++){
				ReplayAnalytics.app.globalSyncChartPositions[i][j] = 0;
			}
		};
		//logInfo('SliderMaxValue--' + sliderMaxValue);
		for (var value = 1; value <= sliderMaxValue; value++){
			//logInfo('SliderPosition -- '+value);
			if(value <= ReplayAnalytics.app.chartLengths[0]) {
				for(j = 0; j < ReplayAnalytics.app.chartSection[0].length; j++) {
					ReplayAnalytics.app.chartValue[ReplayAnalytics.app.chartSection[0][j]] = ReplayAnalytics.app.chartValue[ReplayAnalytics.app.chartSection[0][j]] + 1;
					for(k = 0; k < 5; k++){
						if (ReplayAnalytics.app.globalSyncChartPositions[value][k] == 0){
							ReplayAnalytics.app.globalSyncChartPositions[value][k] = ReplayAnalytics.app.globalSyncChartPositions[value - 1][k];
						}												
					}
					ReplayAnalytics.app.globalSyncChartPositions[value][ReplayAnalytics.app.chartSection[0][j]] = ReplayAnalytics.app.chartValue[ReplayAnalytics.app.chartSection[0][j]];
					//logInfo('1st block-PanelIndex--'+ReplayAnalytics.app.chartSection[0][j]+'-- ChartPosition='+ReplayAnalytics.app.chartValue[ReplayAnalytics.app.chartSection[0][j]]);
				}
				continue;
			}	
			var sum = 0;
			for(i = 0; i < ReplayAnalytics.app.chartSection.length - 1; i++) {
				sum = sum + ReplayAnalytics.app.chartLengths[i];
				if(value > sum && value <= (ReplayAnalytics.app.chartLengths[i+1] + sum)) {
					for(j = 0; j < ReplayAnalytics.app.chartSection[i+1].length; j++) {
						ReplayAnalytics.app.chartValue[ReplayAnalytics.app.chartSection[i+1][j]] = ReplayAnalytics.app.chartValue[ReplayAnalytics.app.chartSection[i+1][j]] + 1;
						for(k = 0; k < 5; k++){
							if (ReplayAnalytics.app.globalSyncChartPositions[value][k] == 0){
								ReplayAnalytics.app.globalSyncChartPositions[value][k] = ReplayAnalytics.app.globalSyncChartPositions[value - 1][k];
							}
						}
						ReplayAnalytics.app.globalSyncChartPositions[value][ReplayAnalytics.app.chartSection[i+1][j]] = ReplayAnalytics.app.chartValue[ReplayAnalytics.app.chartSection[i+1][j]];
						//logInfo('2nd block -PanelIndex-'+ReplayAnalytics.app.chartSection[i+1][j]+'-- ChartPosition='+ReplayAnalytics.app.chartValue[ReplayAnalytics.app.chartSection[i+1][j]]);	
					}
					continue;
				}
			}
		}
		this.calculateIMsForGlobalSync();
	},
	
	calculateIMsForGlobalSync: function(){
		var sliderMaxValue = ReplayAnalytics.app.maximumPositions[0];
		ReplayAnalytics.app.interestingMomentsPoints[0] = new Array();
		for(i = 0; i <= sliderMaxValue; i++) {
			ReplayAnalytics.app.interestingMomentsPoints[0][i] = new Array();
			for (j = 1; j < 5; j++){
				ReplayAnalytics.app.interestingMomentsPoints[0][i][j] = new Array();
				if (ReplayAnalytics.app.isChartConfigured[j] && ReplayAnalytics.app.interestingMomentsPoints[j] != undefined){
					for (k = 0; k < ReplayAnalytics.app.interestingMomentsPoints[j].length; k++){
						if (ReplayAnalytics.app.interestingMomentsPoints[j][k] != undefined && ReplayAnalytics.app.interestingMomentsPoints[j][k].Index == ReplayAnalytics.app.globalSyncChartPositions[i][j]){
							ReplayAnalytics.app.interestingMomentsPoints[0][i][j].push(ReplayAnalytics.app.interestingMomentsPoints[j][k]);
						}						
					}
				}
			}
		}		
		ReplayAnalytics.app.globalManualIMs = new Array();
		if (ReplayAnalytics.app.currentDashboard != undefined){
			for(i = 0; i <= sliderMaxValue; i++) {
				ReplayAnalytics.app.globalManualIMs[i] = new Array();
				var manualIMs = undefined;
				for (j = 1; j < 5; j++){
					ReplayAnalytics.app.globalManualIMs[i][j] = new Array();
					switch(j){
						case 1: manualIMs = ReplayAnalytics.app.currentDashboard.panel1Settings.manualIMs; break;
						case 2: manualIMs = ReplayAnalytics.app.currentDashboard.panel2Settings.manualIMs; break;
						case 3: manualIMs = ReplayAnalytics.app.currentDashboard.panel3Settings.manualIMs; break;
						case 4: manualIMs = ReplayAnalytics.app.currentDashboard.panel4Settings.manualIMs; break;
					}
					if (manualIMs != undefined && manualIMs.length > 0){
						for (k = 0; k < manualIMs.length; k++){
							if (i != 0 && ReplayAnalytics.app.globalSyncChartPositions[i][j] != ReplayAnalytics.app.globalSyncChartPositions[i-1][j]){
								if (manualIMs[k].imIndex == ReplayAnalytics.app.globalSyncChartPositions[i][j]){
									if (manualIMs[k].imIndex != 0 || ReplayAnalytics.app.globalSyncChartPositions[i][j] != ReplayAnalytics.app.globalSyncChartPositions[i+1][j]){
										ReplayAnalytics.app.globalManualIMs[i][j].push(manualIMs[k]);
									}									
								}
							} else if (manualIMs[k].imIndex == ReplayAnalytics.app.globalSyncChartPositions[i][j] && ReplayAnalytics.app.globalSyncChartPositions[i][j] != ReplayAnalytics.app.globalSyncChartPositions[i+1][j]) {
								ReplayAnalytics.app.globalManualIMs[i][j].push(manualIMs[k]);
							}							
						}
					}
				}
			}			
		}		
	},
});