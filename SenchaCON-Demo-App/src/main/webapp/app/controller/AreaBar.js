Ext.define('SenchaCon2013Demo.controller.AreaBar', {
	extend : 'Ext.app.Controller',
	xtype: 'areabarcontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
		}
	},
	
	launch: function(){
	},
	
	createAreaChart: function(store,chartIndex,groupByBarArray) {
		var obj = SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		if (groupByBarArray == undefined){
			this.createAreaChartGroupByNone(store,chartIndex);
		}
		else {
			SenchaCon2013Demo.app.groupByValueBar = new Array();
			for (i = 0; i < groupByBarArray.length; i++){
				SenchaCon2013Demo.app.groupByValueBar[i] = 'groupByBar' + (i+1);
			}
			if (groupByBarArray.length != 0 && groupByBarArray[groupByBarArray.length - 1] != 'other'){
				groupByBarArray[groupByBarArray.length] = "Other";
				SenchaCon2013Demo.app.groupByValueBar[SenchaCon2013Demo.app.groupByValueBar] = "Other";
			}	
			if (groupByBarArray.length == 2){
				this.createAreaChartGroupBy(store,chartIndex, groupByBarArray);
			} else if (groupByBarArray.length == 3){
				this.createAreaChartGroupBy(store,chartIndex, groupByBarArray);
			} else if (groupByBarArray.length == 4){
				this.createAreaChartGroupBy(store,chartIndex, groupByBarArray);
			} else if (groupByBarArray.length == 5){
				this.createAreaChartGroupBy(store,chartIndex, groupByBarArray);
			}			
		}	
		
	},
	
	createAreaChartGroupByNone: function(store,chartIndex) {
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
		    flex: 1,
		    store: store,
		    shadow: true,
		    insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
		    innerPadding: {top: 15, left: 0, right: 0, bottom: 25},
		   // interactions: ['panzoom'],
		    
	    	axes: [
	    	       {
	    	    	   	type: 'numeric',
	    	    	   	position: 'left',
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',    	    	   	
	    	       		},
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	minimum: 0,
	    	    	   	maximum: SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
	    	            	 type: 'area',
	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	            	 yField: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	            	 axis: 'bottom',
	    	            	 highlight: true,
	    	            	 showInLegend: false,
	    	            	 shadow: true,
	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
	    	            	 style: {
	    	            		 stroke: 'black',
	    	                     fillOpacity: 0.8,
	    	            	 		smooth: true,
	    	             	 },
	    	             	 subStyle: {
	    	             			fill: ["#115fa6"]
	    	             	 }
	    	              }
	    	           ]
		});
	},		
	createAreaChartGroupBy: function(store, chartIndex, groupByBarArray){
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
		    flipXY: false,
		    flex: 1,
		    store: store,
		    shadow: true,
		    animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
		    //interactions: ['panzoom'],
		    legend: {
	            position: 'right'
	        },
	    	axes: [
	    	       {
	    	    	   	type: 'numeric',
	    	    	   	position: 'left',
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',    	    	   	
	    	       		},
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		//fields: groupByBarArray,
	    	       		minimum: 0,
	    	    	   	maximum: SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
	    	            	 type: 'area',
	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar,
	    	            	 title: groupByBarArray,
	    	            	 highlight: true,
	    	            	 showInLegend: true,
	    	            	 stacked: true,
	    	            	 shadow: true,
	    	            	 style: {
	    	            	 		stroke: 'rgb(40,40,40)',
	    	             	 },
	    	             	 subStyle: {
	    	             			fill: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"]
	    	             	 }
	    	              }
	    	           ]
		});	
	},
	
});