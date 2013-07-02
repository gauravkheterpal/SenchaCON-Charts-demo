Ext.define('ReplayAnalytics.controller.VerticalBar', {
	extend : 'Ext.app.Controller',
	xtype: 'verticalbarcontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
		},
	},
	
	launch: function(){
		
	},

	createVerticalBarChart: function(store,chartIndex,groupByBarArray) {
		var obj = ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		if (groupByBarArray == undefined){
			this.createVerticalBarChartGroupByNone(store,chartIndex);
		}
		else {
			ReplayAnalytics.app.groupByValueBar = new Array();
			for (i = 0; i < groupByBarArray.length; i++){
				ReplayAnalytics.app.groupByValueBar[i] = 'groupByBar' + (i+1);
			}
			if (groupByBarArray.length != 0 && groupByBarArray[groupByBarArray.length - 1] != 'other'){
				groupByBarArray[groupByBarArray.length] = "Other";
				ReplayAnalytics.app.groupByValueBar[ReplayAnalytics.app.groupByValueBar] = "Other";
			}			
			this.createVerticalBarChartGroupBy(store,chartIndex, groupByBarArray);
		}
	},
	
	createVerticalBarChartGroupByNone: function(store,chartIndex) {
		ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+ReplayAnalytics.app.currentActivePanelIndex,
		    flipXY: false,
		    flex: 1,
		    store: store,
		    shadow: true,
		    animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
		    //interactions: ['panzoom'],
	    	axes: [
	    	       {
	    	    	   	type: 'numeric',
	    	    	   	position: 'left',
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',    	    	   	
	    	       		},
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	minimum: 0,
	    	    	   	maximum: ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
	    	            	 type: 'bar',
	    	            	 xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	            	 yField: ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	            	 axis: 'bottom',
	    	            	 highlight: true,
	    	            	 showInLegend: false,
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
	
	createVerticalBarChartGroupBy: function(store, chartIndex, groupByBarArray){
		ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+ReplayAnalytics.app.currentActivePanelIndex,
		    flipXY: false,
		    flex: 1,
		    store: store,
		    shadow: true,
		    animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
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
	    	    	   	maximum: ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
	    	            	 type: 'bar',
	    	            	 xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	            	 yField: ReplayAnalytics.app.groupByValueBar,
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