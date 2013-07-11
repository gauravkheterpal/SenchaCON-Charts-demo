Ext.define('SenchaCon2013Demo.controller.GlobalSync', {
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
			SenchaCon2013Demo.app.currentActivePanelIndex = 0;
			this.getApplication().getController('Main').checkForConfiguredGraphPanels();
			this.getApplication().getController('Playback').resetBackwardFunction();
			this.getSettingsButton().setDisabled(true);
		}	
		else {
			this.getSettingsButton().setDisabled(false);
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
				SenchaCon2013Demo.app.currentActivePanelIndex = i;
				SenchaCon2013Demo.app.sliders[i].setValue(0);
				SenchaCon2013Demo.app.sliders[i].fireEvent('change',SenchaCon2013Demo.app.sliders[i],i);
			}*/
			SenchaCon2013Demo.app.currentActivePanelIndex = 1;
		}	
	},
	
	calculateGlobalSyncVariables: function(){
		var chartIndex = 0;
		for(i = 0; i < 15; i++) {
			SenchaCon2013Demo.app.chartLengths[i] = 0;
		}
		var globalindex = 0;
		for(i = 0; i < 5; i++) {
			SenchaCon2013Demo.app.chartValue[i] = 0;
		}
		for(i = 0; i < 5; i++) {
			if(SenchaCon2013Demo.app.startDate[i] != undefined) {
				SenchaCon2013Demo.app.currentStartDate[i] = new Date(SenchaCon2013Demo.app.startDate[i]);
			}
		}
		for(i = 0; i < 5; i++) {
			SenchaCon2013Demo.app.chartIsRunning[i] = false;
			SenchaCon2013Demo.app.chartIsPaused[i] = false;
			SenchaCon2013Demo.app.chartFinished[i] = false;
			SenchaCon2013Demo.app.initialPosition[i] = true;
		}	
		SenchaCon2013Demo.app.numberActiveCharts = 0;
		for(i = 1; i < 5; i++) {
			if(SenchaCon2013Demo.app.dateSet[i] == true) {
				SenchaCon2013Demo.app.numberActiveCharts = SenchaCon2013Demo.app.numberActiveCharts + 1;
			}
		}
		SenchaCon2013Demo.app.chartsFinished = 0;
		SenchaCon2013Demo.app.globalIndex = 0;
		SenchaCon2013Demo.app.firstGlobalDate = true;
		SenchaCon2013Demo.app.globalSyncPressed = true;
		SenchaCon2013Demo.app.nullSearchReturnedTrue = false;
		SenchaCon2013Demo.app.finishCall = false;
		SenchaCon2013Demo.app.sandwich = false;
		SenchaCon2013Demo.app.testNextIncrement = null;
		var dateIndex = new Array();
		var startArray = new Array();
		var endArray = new Array();
		var earliestCharts = new Array(); //Array storing the charts with the earliest start dates upon global sync initialization
		var firstCharts = new Array(); //Array storing the earliest chart(s) with the largest granularity upon global sync initialization
		var globalSliderMax = 0;
		var count = 0;
		var valueGranularities = new Array();
		valueGranularities = SenchaCon2013Demo.app.valueGranularities;
		for(i = 1; i < 5; i++) {
			if(SenchaCon2013Demo.app.dateSet[i] == true) {
				//globalSliderMax = globalSliderMax + Ext.getCmp('mySlider' + i).getMaxValue();
				startArray[count] = SenchaCon2013Demo.app.currentStartDate[i].getTime();
				dateIndex[count] = i;
				endArray[count] = SenchaCon2013Demo.app.currentEndDate[i].getTime();
				count = count + 1;
			}
		};
		for(i = 0; i < count; i++) {
			if(count == 0) {
			}
			else if(count == 1) {
				SenchaCon2013Demo.app.globalStartDate = startArray[i];
				earliestCharts[0] = dateIndex[i];
			}
			else if(count == 2) {
				if(startArray[i] <= startArray[(i+1)%count]) {
					SenchaCon2013Demo.app.globalStartDate = startArray[i];
					earliestCharts[0] = dateIndex[i];
					if(startArray[i] == startArray[(i+1)%count]) {
						earliestCharts[1] = dateIndex[(i+1)%count];
					}	
				}
				if(endArray[i] >= endArray[(i+1)%count]) {
					SenchaCon2013Demo.app.globalEndDate = endArray[i];
				}
			}	
			else if(count == 3) {
				if(startArray[i] <= startArray[(i+1)%count] && startArray[i] <= startArray[(i+2)%count]) {
					SenchaCon2013Demo.app.globalStartDate = startArray[i];
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
					SenchaCon2013Demo.app.globalEndDate = endArray[i];
				}
			}	
			else {	
				if(startArray[i] <= startArray[(i+1)%count] && startArray[i] <= startArray[(i+2)%count] && startArray[i] <= startArray[(i+3)%count]) {
					SenchaCon2013Demo.app.globalStartDate = startArray[i];
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
					SenchaCon2013Demo.app.globalEndDate = endArray[i];
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
			SenchaCon2013Demo.app.chartIsRunning[firstCharts[i]] = true;
			SenchaCon2013Demo.app.initialPosition[firstCharts[i]] = false;
		}
		//The rest of the global sync logic is in the app.js file *
		//SenchaCon2013Demo.app.globalSync();
		this.globalSync();
		var sum = 0;
		for(i = 0; i < SenchaCon2013Demo.app.chartSection.length; i++) {
			if (!isNaN(SenchaCon2013Demo.app.chartLengths[i])){
				sum = sum + SenchaCon2013Demo.app.chartLengths[i];
			}											
		}
		//SenchaCon2013Demo.app.differentialMultiplier[chartIndex] = Math.round(100 / sum);	
		SenchaCon2013Demo.app.differentialMultiplier[chartIndex] = 1;
		Ext.ComponentQuery.query('slider'+chartIndex)[0].setMaxValue(SenchaCon2013Demo.app.differentialMultiplier[chartIndex] * sum);
	    SenchaCon2013Demo.app.maximumPositions[chartIndex] = Ext.ComponentQuery.query('slider'+chartIndex)[0].getMaxValue();
		hideLoadingMask();
		SenchaCon2013Demo.app.testcount = SenchaCon2013Demo.app.testcount + 1;
		logMessage('chartIndex in global end '+chartIndex);
		this.calculateGlobalSyncChartPositionsMap();
	},
	
	globalSyncSliderFunctionChange: function(value, chartIndex){

		//if(value == 0 /*&& SenchaCon2013Demo.app.testcount < 2*/) {
		//	
		//}
		//else {
			//hideLoadingMask();
			//SenchaCon2013Demo.app.playChartsGlobal(value);
			this.playChartsGlobal(value);
		//}
	},
	
	globalSync: function() {
		var counter = 0;
		while(SenchaCon2013Demo.app.chartsFinished != SenchaCon2013Demo.app.numberActiveCharts && counter < 100) {
		//console.log('chartsFinished = '+SenchaCon2013Demo.app.chartsFinished);
			var chartUsed = false;
			var i = 1;
			while(i < 5) {
				if(SenchaCon2013Demo.app.currentStartDate[i] <= SenchaCon2013Demo.app.currentEndDate[i]) {
					if(SenchaCon2013Demo.app.chartIsRunning[i] == true && SenchaCon2013Demo.app.chartIsPaused[i] != true) {
						previousDate = new Date(SenchaCon2013Demo.app.currentStartDate[i]);
						switch(SenchaCon2013Demo.app.granularities[i]) {
						case 'Hourly':
							SenchaCon2013Demo.app.currentStartDate[i].setMinutes(SenchaCon2013Demo.app.currentStartDate[i].getMinutes() + 60);
							break;
						case 'Daily':
							SenchaCon2013Demo.app.currentStartDate[i].setDate(SenchaCon2013Demo.app.currentStartDate[i].getDate() + 1);
							break;
						case 'Weekly':
							SenchaCon2013Demo.app.currentStartDate[i].setDate(SenchaCon2013Demo.app.currentStartDate[i].getDate() + 7);
							break;
						case 'Monthly':
							SenchaCon2013Demo.app.currentStartDate[i].setMonth(SenchaCon2013Demo.app.currentStartDate[i].getMonth() + 1);
							SenchaCon2013Demo.app.currentStartDate[i].setDate(1);
						break;
						}
						var test;
						if(SenchaCon2013Demo.app.chartFinished[i] != true && SenchaCon2013Demo.app.currentStartDate[i].getTime() > SenchaCon2013Demo.app.currentEndDate[i].getTime()) {
							//console.log('for index '+ i);
							//console.log('first chart stopped');
							SenchaCon2013Demo.app.chartFinished[i] = true;
							SenchaCon2013Demo.app.chartsFinished = SenchaCon2013Demo.app.chartsFinished + 1;
							//console.log('chartsFinished = '+SenchaCon2013Demo.app.chartsFinished);
					
							if(SenchaCon2013Demo.app.chartsFinished == SenchaCon2013Demo.app.numberActiveCharts) {
								//console.log('chartsfinished = '+SenchaCon2013Demo.app.chartsFinished);
								//console.log('number active charts = '+SenchaCon2013Demo.app.numberActiveCharts);
						
								var sectionIndexArray = new Array();
								var j = 0;
								for(i = 1; i < 5; i++) {
									if(SenchaCon2013Demo.app.chartIsRunning[i] == true && SenchaCon2013Demo.app.chartIsPaused[i] != true) {
										sectionIndexArray[j] = i;
										j = j + 1;
										SenchaCon2013Demo.app.chartIsPaused[i] = true;
									}	
								}
								SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex] = sectionIndexArray;
								SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] - 1;
						
								return;
							}	
							var sectionIndexArray = new Array();
							var j = 0;
							for(var iii = 1; iii < 5; iii++) {
								if(SenchaCon2013Demo.app.chartIsRunning[iii] == true && SenchaCon2013Demo.app.chartIsPaused[iii] != true) {
									sectionIndexArray[j] = iii;
									j = j + 1;
									SenchaCon2013Demo.app.chartIsPaused[iii] = true;
								}	
							}
							if(this.nullSearch(SenchaCon2013Demo.app.currentStartDate[i],previousDate) == true) {
								SenchaCon2013Demo.app.nullSearchReturnedTrue = true;
							}	
							//console.log(SenchaCon2013Demo.app.chartIsPaused[1]);
							//console.log('sectionindexarray');
							//console.log(sectionIndexArray);
							SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex] = sectionIndexArray;
							//chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
							SenchaCon2013Demo.app.globalIndex = SenchaCon2013Demo.app.globalIndex + 1;
							//chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
							SenchaCon2013Demo.app.finishCall = true;
							this.globalSyncLogic(SenchaCon2013Demo.app.globalEndDate,previousDate,i);
							//currentStartDate[i].setDate(currentStartDate[i].getDate() + 1);
						}
						if(chartUsed == false) {
							//console.log('globalSyncLogic called with index '+i);
							test = this.globalSyncLogic(SenchaCon2013Demo.app.currentStartDate[i],previousDate,i);
							if(test != true) {	
								chartUsed = true;
							}	
						}
					}	
				}
				else if(SenchaCon2013Demo.app.currentStartDate[i] == undefined) {
				}
				else if(SenchaCon2013Demo.app.chartFinished[i] != true && SenchaCon2013Demo.app.currentStartDate[i].getTime() > SenchaCon2013Demo.app.currentEndDate[i].getTime()) {
					//console.log('for index '+ i);
					//console.log('first chart stopped');
					SenchaCon2013Demo.app.chartFinished[i] = true;
					SenchaCon2013Demo.app.chartsFinished = SenchaCon2013Demo.app.chartsFinished + 1;
					//console.log('chartsFinished = '+SenchaCon2013Demo.app.chartsFinished);
					
					if(SenchaCon2013Demo.app.chartsFinished == SenchaCon2013Demo.app.numberActiveCharts) {
						//console.log('chartsfinished = '+SenchaCon2013Demo.app.chartsFinished);
						//console.log('number active charts = '+SenchaCon2013Demo.app.numberActiveCharts);
						
						var sectionIndexArray = new Array();
						var j = 0;
						for(i = 1; i < 5; i++) {
							if(SenchaCon2013Demo.app.chartIsRunning[i] == true && SenchaCon2013Demo.app.chartIsPaused[i] != true) {
								sectionIndexArray[j] = i;
								j = j + 1;
								SenchaCon2013Demo.app.chartIsPaused[i] = true;
							}	
						}
						SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex] = sectionIndexArray;
						SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] - 1;
						
						return;
					}
					
					//console.log('chartisRunning2');
					//console.log(SenchaCon2013Demo.app.chartIsRunning[2]);
					//console.log('chartIsRunning1');
					//console.log(SenchaCon2013Demo.app.chartIsRunning[1]);
					//console.log('chartisPaused2');
					//console.log(SenchaCon2013Demo.app.chartIsPaused[2]);
					//console.log('chartIsPaused1');
					//console.log(SenchaCon2013Demo.app.chartIsPaused[1]);
					
					var sectionIndexArray = new Array();
					var j = 0;
					for(ii = 1; ii < 5; ii++) {
						if(SenchaCon2013Demo.app.chartIsRunning[ii] == true && SenchaCon2013Demo.app.chartIsPaused[ii] != true) {
							sectionIndexArray[j] = ii;
							j = j + 1;
							SenchaCon2013Demo.app.chartIsPaused[ii] = true;
						}	
					}
					//console.log('sectionindexarray');
					//console.log(sectionIndexArray);
					SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex] = sectionIndexArray;
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] - 1;
					SenchaCon2013Demo.app.globalIndex = SenchaCon2013Demo.app.globalIndex + 1;
					//chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
					SenchaCon2013Demo.app.finishCall = true;
					this.globalSyncLogic(SenchaCon2013Demo.app.globalEndDate,SenchaCon2013Demo.app.currentStartDate[i],i);
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
			if(SenchaCon2013Demo.app.chartIsRunning[i] == true && SenchaCon2013Demo.app.chartIsPaused[i] != true) {
				sectionIndexArray[j] = i;
				j = j + 1;
				SenchaCon2013Demo.app.chartIsPaused[i] = true;
			}	
		}
		SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex] = sectionIndexArray;
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
			valueGranularities = SenchaCon2013Demo.app.valueGranularities;
			//console.log(SenchaCon2013Demo.app.dateSet[1] && (SenchaCon2013Demo.app.chartIsRunning[1] || SenchaCon2013Demo.app.chartIsPaused[1]));
			for(i = 1; i < 5; i++) {
				if(SenchaCon2013Demo.app.dateSet[i] == true && (SenchaCon2013Demo.app.chartIsRunning[i] == false || SenchaCon2013Demo.app.chartIsPaused[i] == true) && SenchaCon2013Demo.app.chartFinished[i] == false && SenchaCon2013Demo.app.currentStartDate[i] < presentDate && SenchaCon2013Demo.app.currentStartDate[i] >= previousDate) {
					startArray[count] = SenchaCon2013Demo.app.currentStartDate[i].getTime();
					dateIndex[count] = i;
					count = count + 1;
					earlierDateFound = true;	
				}
			}
			if(earlierDateFound == false) {
				SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] + 1;
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
				
				if(SenchaCon2013Demo.app.finishCall == true && valueGranularities[index] < valueGranularities[firstCharts[0]] && firstCharts[0] < index && SenchaCon2013Demo.app.chartsFinished == SenchaCon2013Demo.app.numberActiveCharts -1) {
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] + 1;
					//console.log('chartLengths incremented. value now '+SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex]);
				}	
				if(SenchaCon2013Demo.app.finishCall == true && valueGranularities[index] < valueGranularities[firstCharts[0]] && firstCharts[0] > index && SenchaCon2013Demo.app.chartsFinished == SenchaCon2013Demo.app.numberActiveCharts -1) {
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] + 2;
					//console.log('chartLengths incremented. value now '+SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex]);
				}	
				if(SenchaCon2013Demo.app.finishCall == true && SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex-1].length < 2) {
					for(iii = 0; iii < firstCharts.length; iii++) {
						sectionIndexArray[iii] = firstCharts[iii];
					}
				}	
				var counting_1 = 0;
				var counting_2 = 0;
				if(SenchaCon2013Demo.app.finishCall == true && SenchaCon2013Demo.app.chartsFinished < SenchaCon2013Demo.app.numberActiveCharts - 1) {
					if(SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex-1].length > 1) {
					for(u = 0; u < firstCharts.length; u++) {
						for(uu = 0; uu < SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex-1].length; uu++) {
							if(firstCharts[u] == SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex-1][uu] && firstCharts[u] < index) {
								counting_1 = counting_1 + 1;
							}
							else if(firstCharts[u] == SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex-1][uu] && firstCharts[u] > index) {
								counting_2 = counting_2 + 1;
							}	
						}
					}
					}
				}
				if(SenchaCon2013Demo.app.finishCall == true && SenchaCon2013Demo.app.chartsFinished < SenchaCon2013Demo.app.numberActiveCharts - 1 && firstCharts[0] < index && SenchaCon2013Demo.app.initialPosition[firstCharts[0]] == true) {
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] - 1;
					//console.log('chartLengths decremented. value now '+SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex]);
				}	
				if(counting_1 != 0) {
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex-1] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex-1] - 1;
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] + 1;
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
				//console.log(SenchaCon2013Demo.app.currentStartDate[firstCharts[0]]);
				//console.log(previousDate);
				if(SenchaCon2013Demo.app.finishCall == true && SenchaCon2013Demo.app.firstGlobalDate != true && SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex-1].length > 1 && SenchaCon2013Demo.app.chartsFinished == SenchaCon2013Demo.app.numberActiveCharts -1) {
					//console.log('comparison satisfied');
					//console.log(SenchaCon2013Demo.app.chartLengths);
					//console.log(SenchaCon2013Demo.app.globalIndex);
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] + 1;
					for(iii = 0; iii < firstCharts.length; iii++) {
						sectionIndexArray[iii] = firstCharts[iii];
					}	
				}
				else if(SenchaCon2013Demo.app.finishCall == true && SenchaCon2013Demo.app.firstGlobalDate == true && firstCharts[0] > index && SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex-1].length > 1 && SenchaCon2013Demo.app.chartsFinished == SenchaCon2013Demo.app.numberActiveCharts -1) {
					for(iii = 0; iii < firstCharts.length; iii++) {
						sectionIndexArray[iii] = firstCharts[iii];
					}
				}
				else if(SenchaCon2013Demo.app.finishCall == true && SenchaCon2013Demo.app.firstGlobalDate == true && firstCharts[0] < index && SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex-1].length > 1 && SenchaCon2013Demo.app.chartsFinished == SenchaCon2013Demo.app.numberActiveCharts -1) {
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex-1] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex-1] - 1;
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] + 2;
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
				if(SenchaCon2013Demo.app.finishCall == false) {
					for(i = 1; i < 5; i++) {
						if(SenchaCon2013Demo.app.chartIsRunning[i] == true && SenchaCon2013Demo.app.chartIsPaused[i] != true) {
							sectionIndexArray[j] = i;
							j = j + 1;
							SenchaCon2013Demo.app.chartIsPaused[i] = true;
						}	
					}
				}
				if(j == 2) {
					//console.log('chart '+sectionIndexArray[1]+' updated.');
					switch(SenchaCon2013Demo.app.granularities[sectionIndexArray[1]]) {
						case 'Hourly':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].setMinutes(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].getMinutes() + 60);
							break;
						case 'Daily':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].setDate(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].getDate() + 1);
							break;
						case 'Weekly':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].setDate(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].getDate() + 7);
							break;
						case 'Monthly':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].setDate(1);
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].setMonth(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].getMonth() + 1);
							break;
					}
					if(SenchaCon2013Demo.app.chartFinished[sectionIndexArray[1]] != true && SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].getTime() > SenchaCon2013Demo.app.currentEndDate[sectionIndexArray[1]].getTime()) {
						SenchaCon2013Demo.app.chartFinished[sectionIndexArray[1]] = true;
						SenchaCon2013Demo.app.chartsFinished = SenchaCon2013Demo.app.chartsFinished + 1;
					}	
				}	
				else if(j == 3) { 
					switch(SenchaCon2013Demo.app.granularities[sectionIndexArray[1]]) {
						case 'Hourly':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].setMinutes(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].getMinutes() + 60);
							break;
						case 'Daily':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].setDate(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].getDate() + 1);
							break;
						case 'Weekly':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].setDate(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].getDate() + 7);
							break;
						case 'Monthly':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].setDate(1);
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].setMonth(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].getMonth() + 1);
							break;
					}
					if(SenchaCon2013Demo.app.chartFinished[sectionIndexArray[1]] != true && SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].getTime() > SenchaCon2013Demo.app.currentEndDate[sectionIndexArray[1]].getTime()) {
						SenchaCon2013Demo.app.chartFinished[sectionIndexArray[1]] = true;
						SenchaCon2013Demo.app.chartsFinished = SenchaCon2013Demo.app.chartsFinished + 1;
					}
					switch(SenchaCon2013Demo.app.granularities[sectionIndexArray[2]]) {
						case 'Hourly':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[2]].setMinutes(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[2]].getMinutes() + 60);
							break;
						case 'Daily':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[2]].setDate(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[2]].getDate() + 1);
							break;
						case 'Weekly':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[2]].setDate(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[2]].getDate() + 7);
							break;
						case 'Monthly':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[2]].setDate(1);
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[2]].setMonth(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[2]].getMonth() + 1);
							break;
					}
					if(SenchaCon2013Demo.app.chartFinished[sectionIndexArray[2]] != true && SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[2]].getTime() > SenchaCon2013Demo.app.currentEndDate[sectionIndexArray[2]].getTime()) {
						SenchaCon2013Demo.app.chartFinished[sectionIndexArray[2]] = true;
						SenchaCon2013Demo.app.chartsFinished = SenchaCon2013Demo.app.chartsFinished + 1;
					}
				}
				//console.log('sectionindexarray');
				//console.log(sectionIndexArray);
				if(SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] != 0) {
					for(ii = 0; ii < firstCharts.length; ii++) {
						if(SenchaCon2013Demo.app.currentStartDate[index] > SenchaCon2013Demo.app.currentEndDate[firstCharts[ii]]) {
							//jj = jj + 1;
						}
					}
					if(jj != 0) {
						SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex+1] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex+1] + 1;
						//console.log('chartlengths[globalindex + 1] incremented. value now '+SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex+1]);

					}
					SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex] = sectionIndexArray;
					if(SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex].length > 1) {
						for(i = 0; i < SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex].length; i++) {
							if(SenchaCon2013Demo.app.currentEndDate[SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex][0]] > SenchaCon2013Demo.app.currentEndDate[SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex][(i+1)]]) {
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
							SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] - 1;
						}
						//chartLengths[globalIndex + 1] = 1;
						//console.log('chartlengths[globalindex + 1] incremented. value now '+SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex+1]);
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
					SenchaCon2013Demo.app.globalIndex = SenchaCon2013Demo.app.globalIndex + 1;
				}	
				var sum = 0;
				for(i = 0; i < firstCharts.length; i++) {
					if(SenchaCon2013Demo.app.currentStartDate[firstCharts[i]].getTime() == previousDate.getTime() && valueGranularities[firstCharts[i]] == valueGranularities[index] && SenchaCon2013Demo.app.currentStartDate[index] <= SenchaCon2013Demo.app.currentEndDate[index]) {
						if(SenchaCon2013Demo.app.currentEndDate[index] > SenchaCon2013Demo.app.currentEndDate[firstCharts[i]]) {
							SenchaCon2013Demo.app.sandwich = true;
						}	
						sum = sum + 1;
						/*
						for(j = 1; j < 5; j++) {
							if(chartIsRunning[j] == true) {
								chartIsPaused[j] = false;
							}
						}
						*/
						SenchaCon2013Demo.app.chartIsPaused[index] = false;
						//chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
						if(firstCharts[i] < index) {
							switch(SenchaCon2013Demo.app.granularities[firstCharts[i]]) {
							case 'Hourly':
								SenchaCon2013Demo.app.currentStartDate[firstCharts[i]].setMinutes(SenchaCon2013Demo.app.currentStartDate[firstCharts[i]].getMinutes() + 60);
								break;
							case 'Daily':
								SenchaCon2013Demo.app.currentStartDate[firstCharts[i]].setDate(SenchaCon2013Demo.app.currentStartDate[firstCharts[i]].getDate() + 1);
								break;
							case 'Weekly':
								SenchaCon2013Demo.app.currentStartDate[firstCharts[i]].setDate(SenchaCon2013Demo.app.currentStartDate[firstCharts[i]].getDate() + 7);
								break;
							case 'Monthly':
								SenchaCon2013Demo.app.currentStartDate[firstCharts[i]].setDate(1);
								SenchaCon2013Demo.app.currentStartDate[firstCharts[i]].setMonth(SenchaCon2013Demo.app.currentStartDate[firstCharts[i]].getMonth() + 1);
								break;
							}	
						}
					}
				}
				if(sum != 0) {
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] + 1;
				}
				if(valueGranularities[index] < valueGranularities[firstCharts[0]] && SenchaCon2013Demo.app.chartFinished[index] != true && SenchaCon2013Demo.app.initialPosition[firstCharts[0]] == false) {
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] + 1;
				}
				if(valueGranularities[index] > valueGranularities[firstCharts[0]] && SenchaCon2013Demo.app.chartFinished[index] != true && SenchaCon2013Demo.app.initialPosition[firstCharts[0]] == false) {
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] + 1;
				}
				
				for(i = 0; i < firstCharts.length; i++) {
					SenchaCon2013Demo.app.chartIsRunning[firstCharts[i]] = true;
					SenchaCon2013Demo.app.chartIsPaused[firstCharts[i]] = false;
					SenchaCon2013Demo.app.initialPosition[firstCharts[i]] = false;
				};	
				SenchaCon2013Demo.app.firstGlobalDate = false;
				if(sum != 0) {
					return false;
				}
				SenchaCon2013Demo.app.nullSearchReturnedTrue = false;
				SenchaCon2013Demo.app.finishCall = false;
			return true;
	},
		
	nullSearch: function(presentDate,previousDate) {
		var earlierDateFound = false;
		for(i = 1; i < 5; i++) {
			if(SenchaCon2013Demo.app.dateSet[i] == true && (SenchaCon2013Demo.app.chartIsRunning[i] == false || SenchaCon2013Demo.app.chartIsPaused[i] == true) && SenchaCon2013Demo.app.chartFinished[i] == false && SenchaCon2013Demo.app.currentStartDate[i] < presentDate && SenchaCon2013Demo.app.currentStartDate[i] >= previousDate) {
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
			chartPos = SenchaCon2013Demo.app.globalSyncChartPositions[value][i];
			if (chartPos != undefined && SenchaCon2013Demo.app.isChartConfigured[i]){
				this.getApplication().getController('Playback').setPanelDateCaption(i, chartPos);
				SenchaCon2013Demo.app.newChart[i].bindStore(SenchaCon2013Demo.app.jsonstore[i][chartPos]);
				//Ext.ComponentQuery.query('chart[id=chart'+i+']')[0].bindStore(SenchaCon2013Demo.app.jsonstore[i][chartPos]);
			}			
		}
	},
	
	calculateGlobalSyncChartPositionsMap: function(){
		this.getApplication().getController('Main').checkForConfiguredGraphPanels();
		var sliderMaxValue = SenchaCon2013Demo.app.maximumPositions[0];
		SenchaCon2013Demo.app.globalSyncChartPositions = new Array();
		for(i = 0; i <= sliderMaxValue; i++) {
			SenchaCon2013Demo.app.globalSyncChartPositions[i] = new Array();
			for (j = 0; j < 5; j++){
				SenchaCon2013Demo.app.globalSyncChartPositions[i][j] = 0;
			}
		};
		//logInfo('SliderMaxValue--' + sliderMaxValue);
		for (var value = 1; value <= sliderMaxValue; value++){
			//logInfo('SliderPosition -- '+value);
			if(value <= SenchaCon2013Demo.app.chartLengths[0]) {
				for(j = 0; j < SenchaCon2013Demo.app.chartSection[0].length; j++) {
					SenchaCon2013Demo.app.chartValue[SenchaCon2013Demo.app.chartSection[0][j]] = SenchaCon2013Demo.app.chartValue[SenchaCon2013Demo.app.chartSection[0][j]] + 1;
					for(k = 0; k < 5; k++){
						if (SenchaCon2013Demo.app.globalSyncChartPositions[value][k] == 0){
							SenchaCon2013Demo.app.globalSyncChartPositions[value][k] = SenchaCon2013Demo.app.globalSyncChartPositions[value - 1][k];
						}												
					}
					SenchaCon2013Demo.app.globalSyncChartPositions[value][SenchaCon2013Demo.app.chartSection[0][j]] = SenchaCon2013Demo.app.chartValue[SenchaCon2013Demo.app.chartSection[0][j]];
					//logInfo('1st block-PanelIndex--'+SenchaCon2013Demo.app.chartSection[0][j]+'-- ChartPosition='+SenchaCon2013Demo.app.chartValue[SenchaCon2013Demo.app.chartSection[0][j]]);
				}
				continue;
			}	
			var sum = 0;
			for(i = 0; i < SenchaCon2013Demo.app.chartSection.length - 1; i++) {
				sum = sum + SenchaCon2013Demo.app.chartLengths[i];
				if(value > sum && value <= (SenchaCon2013Demo.app.chartLengths[i+1] + sum)) {
					for(j = 0; j < SenchaCon2013Demo.app.chartSection[i+1].length; j++) {
						SenchaCon2013Demo.app.chartValue[SenchaCon2013Demo.app.chartSection[i+1][j]] = SenchaCon2013Demo.app.chartValue[SenchaCon2013Demo.app.chartSection[i+1][j]] + 1;
						for(k = 0; k < 5; k++){
							if (SenchaCon2013Demo.app.globalSyncChartPositions[value][k] == 0){
								SenchaCon2013Demo.app.globalSyncChartPositions[value][k] = SenchaCon2013Demo.app.globalSyncChartPositions[value - 1][k];
							}
						}
						SenchaCon2013Demo.app.globalSyncChartPositions[value][SenchaCon2013Demo.app.chartSection[i+1][j]] = SenchaCon2013Demo.app.chartValue[SenchaCon2013Demo.app.chartSection[i+1][j]];
						//logInfo('2nd block -PanelIndex-'+SenchaCon2013Demo.app.chartSection[i+1][j]+'-- ChartPosition='+SenchaCon2013Demo.app.chartValue[SenchaCon2013Demo.app.chartSection[i+1][j]]);	
					}
					continue;
				}
			}
		}
	},
});