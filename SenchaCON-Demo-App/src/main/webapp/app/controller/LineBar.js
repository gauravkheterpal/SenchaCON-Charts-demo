Ext.define('SenchaCon2013Demo.controller.LineBar', {
	extend : 'Ext.app.Controller',
	xtype: 'linebarcontroller',
	config: {
		refs: {
			'initController': 'initcontroller',
			'mainController': 'maincontroller',
		}
	},
	
	launch: function(){
	},
	
	createLineChart: function(store,chartIndex,groupByBarArray) {
		var obj = SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		if (groupByBarArray == undefined){
			this.createLineChartGroupByNone(store,chartIndex);
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
				this.createLineChartGroupBy1(store,chartIndex, groupByBarArray);
			} else if (groupByBarArray.length == 3){
				this.createLineChartGroupBy2(store,chartIndex, groupByBarArray);
			} else if (groupByBarArray.length == 4){
				this.createLineChartGroupBy3(store,chartIndex, groupByBarArray);
			} else if (groupByBarArray.length == 5){
				this.createLineChartGroupBy4(store,chartIndex, groupByBarArray);
			}			
		}		
	},
	
	createLineChartGroupByNone: function(store,chartIndex) {
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
		    flex: 1,
		    store: store,
		    shadow: true,
		    insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
		    innerPadding: {top: 15, left: 0, right: 0, bottom: 25},
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
	    	            	 type: 'line',
	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	            	 yField: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	            	 axis: 'bottom',
	    	            	 highlight: true,
	    	            	 showInLegend: false,
	    	            	 shadow: true,
	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
	    	            	 style: {
	    	            		 	//fill: "#115fa6",
	    	            		 	stroke: "#115fa6",
	    	            	 		fillOpacity: 0,
	    	            	 		lineWidth: 3,
	    	            	 		smooth: true,
	    	             	 },
	    	             	 subStyle: {
	    	             			fill: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"]
	    	             	 }
	    	              }
	    	           ]
		});
	},		
	
	createLineChartGroupBy1: function(store, chartIndex, groupByBarArray){
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
		    flex: 1,
		    store: store,
		    shadow: true,
		    insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    //interactions: ['panzoom'],
		    animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
   	    	            	 type: 'line',
   	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar[0],
   	    	            	 title: groupByBarArray[0],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
   	    	            	 style: {
    	            		 	//fill: "#115fa6",
    	            		 	stroke: "#115fa6",
    	            	 		fillOpacity: 0,
    	            	 		lineWidth: 3,
    	            	 		smooth: true,
   	    	            	 },
   	    	            	 marker: {
   	    	            		 type: 'circle',
   	    	            		 radius: 4,
   	    	            		 lineWidth: 3
   	    	            	 }  	    	             	 
   	    	              },
   	    	              {
   	    	            	  type: 'line',
   	    	            	  xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	  yField: SenchaCon2013Demo.app.groupByValueBar[1],
   	    	            	  title: groupByBarArray[1],
   	    	            	  axis: 'bottom',
   	    	            	  highlight: true,
   	    	            	  showInLegend: true,
   	    	            	  shadow: true,
   	    	            	  animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
   	    	            	  style: {
   	    	            		  //fill: "#94ae0a",
   	    	            		  stroke: "#94ae0a",
   	    	            		  fillOpacity: 0,
   	    	            		  lineWidth: 3,
   	    	            		  smooth: true,
   	    	            	  }, 
   	    	            	  marker: {
   	    	            		type: 'circle',
   	    	            		radius: 4,
   	    	            		lineWidth: 3
   	    	            	  }
	    	              },	    	                 	    	              
   	    	           ]
		});	
	},
	
	createLineChartGroupBy2: function(store, chartIndex, groupByBarArray){
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
		    flex: 1,
		    store: store,
		    shadow: true,
		    insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    //interactions: ['panzoom'],
		    animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
   	    	            	 type: 'line',
   	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar[0],
   	    	            	 title: groupByBarArray[0],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
   	    	            	 style: {
    	            		 	//fill: "#115fa6",
    	            		 	stroke: "#115fa6",
    	            	 		fillOpacity: 0,
    	            	 		lineWidth: 3,
    	            	 		smooth: true,
   	    	            	 },
   	    	            	 marker: {
   	    	            		 type: 'circle',
   	    	            		 radius: 4,
   	    	            		 lineWidth: 3
   	    	            	 }  	    	             	 
   	    	              },
   	    	              {
   	    	            	  type: 'line',
   	    	            	  xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	  yField: SenchaCon2013Demo.app.groupByValueBar[1],
   	    	            	  title: groupByBarArray[1],
   	    	            	  axis: 'bottom',
   	    	            	  highlight: true,
   	    	            	  showInLegend: true,
   	    	            	  shadow: true,
   	    	            	  animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
   	    	            	  style: {
   	    	            		  //fill: "#94ae0a",
   	    	            		  stroke: "#94ae0a",
   	    	            		  fillOpacity: 0,
   	    	            		  lineWidth: 3,
   	    	            		  smooth: true,
   	    	            	  }, 
   	    	            	  marker: {
   	    	            		type: 'circle',
   	    	            		radius: 4,
   	    	            		lineWidth: 3
   	    	            	  }
	    	              },
	    	              {
   	    	            	 type: 'line',
   	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar[2],
   	    	            	 title: groupByBarArray[2],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
   	    	            	 style: {
    	            		 	//fill: "#a61120",
    	            		 	stroke: "#a61120",
    	            	 		fillOpacity: 0,
    	            	 		lineWidth: 3,
    	            	 		smooth: true,
   	    	            	 }, 
   	    	            	 marker: {
   	    	            		 type: 'circle',
   	    	            		 radius: 4,
   	    	            		 lineWidth: 3
   	    	            	 }
   	    	              },   	    	                	    	              
   	    	           ]
		});	
	},
	
	createLineChartGroupBy3: function(store, chartIndex, groupByBarArray){
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
		    flex: 1,
		    store: store,
		    shadow: true,
		    insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    //interactions: ['panzoom'],
		    animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
   	    	            	 type: 'line',
   	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar[0],
   	    	            	 title: groupByBarArray[0],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
   	    	            	 style: {
    	            		 	//fill: "#115fa6",
    	            		 	stroke: "#115fa6",
    	            	 		fillOpacity: 0,
    	            	 		lineWidth: 3,
    	            	 		smooth: true,
   	    	            	 },
   	    	            	 marker: {
   	    	            		 type: 'circle',
   	    	            		 radius: 4,
   	    	            		 lineWidth: 3
   	    	            	 }  	    	             	 
   	    	              },
   	    	              {
   	    	            	  type: 'line',
   	    	            	  xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	  yField: SenchaCon2013Demo.app.groupByValueBar[1],
   	    	            	  title: groupByBarArray[1],
   	    	            	  axis: 'bottom',
   	    	            	  highlight: true,
   	    	            	  showInLegend: true,
   	    	            	  shadow: true,
   	    	            	  animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
   	    	            	  style: {
   	    	            		  //fill: "#94ae0a",
   	    	            		  stroke: "#94ae0a",
   	    	            		  fillOpacity: 0,
   	    	            		  lineWidth: 3,
   	    	            		  smooth: true,
   	    	            	  }, 
   	    	            	  marker: {
   	    	            		type: 'circle',
   	    	            		radius: 4,
   	    	            		lineWidth: 3
   	    	            	  }
	    	              },
	    	              {
   	    	            	 type: 'line',
   	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar[2],
   	    	            	 title: groupByBarArray[2],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
   	    	            	 style: {
    	            		 	//fill: "#a61120",
    	            		 	stroke: "#a61120",
    	            	 		fillOpacity: 0,
    	            	 		lineWidth: 3,
    	            	 		smooth: true,
   	    	            	 }, 
   	    	            	 marker: {
   	    	            		 type: 'circle',
   	    	            		 radius: 4,
   	    	            		 lineWidth: 3
   	    	            	 }
   	    	              },
   	    	              {
	    	            	 type: 'line',
	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar[3],
	    	            	 title: groupByBarArray[3],
	    	            	 axis: 'bottom',
	    	            	 highlight: true,
	    	            	 showInLegend: true,
	    	            	 shadow: true,
	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
	    	            	 style: {
	    	            		 //fill: "#ff8809",
	    	            		 stroke: "#ff8809",
	    	            		 fillOpacity: 0,
	    	            		 lineWidth: 3,
	    	            		 smooth: true,
	    	            	 },
	    	            	 marker: {
	    	                     type: 'circle',
	    	                     radius: 4,
	    	                     lineWidth: 3
	    	                 }
	    	              },   	    	              
   	    	           ]
		});	
	},
	
	createLineChartGroupBy4: function(store, chartIndex, groupByBarArray){
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
		    flex: 1,
		    store: store,
		    shadow: true,
		    insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    //interactions: ['panzoom'],
		    animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
		    legend: {
	            position: 'right'
	        },
	    	axes: [
	    	       {
	    	    	   	type: 'numeric',
	    	    	   	position: 'left',
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		//shadowColor: 'black',    	    	   	
	    	       		},
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: groupByBarArray,
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
   	    	            	 type: 'line',
   	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar[0],
   	    	            	 title: groupByBarArray[0],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
   	    	            	 style: {
    	            		 	//fill: "#115fa6",
    	            		 	stroke: "#115fa6",
    	            	 		fillOpacity: 0,
    	            	 		lineWidth: 3,
    	            	 		smooth: true,
   	    	            	 },
   	    	            	 marker: {
   	    	            		 type: 'circle',
   	    	            		 radius: 4,
   	    	            		 lineWidth: 3
   	    	            	 }  	    	             	 
   	    	              },
   	    	              {
   	    	            	  type: 'line',
   	    	            	  xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	  yField: SenchaCon2013Demo.app.groupByValueBar[1],
   	    	            	  title: groupByBarArray[1],
   	    	            	  axis: 'bottom',
   	    	            	  highlight: true,
   	    	            	  showInLegend: true,
   	    	            	  shadow: true,
   	    	            	  animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
   	    	            	  style: {
   	    	            		  //fill: "#94ae0a",
   	    	            		  stroke: "#94ae0a",
   	    	            		  fillOpacity: 0,
   	    	            		  lineWidth: 3,
   	    	            		  smooth: true,
   	    	            	  }, 
   	    	            	  marker: {
   	    	            		type: 'circle',
   	    	            		radius: 4,
   	    	            		lineWidth: 3
   	    	            	  }
	    	              },
	    	              {
   	    	            	 type: 'line',
   	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar[2],
   	    	            	 title: groupByBarArray[2],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
   	    	            	 style: {
    	            		 	//fill: "#a61120",
    	            		 	stroke: "#a61120",
    	            	 		fillOpacity: 0,
    	            	 		lineWidth: 3,
    	            	 		smooth: true,
   	    	            	 }, 
   	    	            	 marker: {
   	    	            		 type: 'circle',
   	    	            		 radius: 4,
   	    	            		 lineWidth: 3
   	    	            	 }
   	    	              },
   	    	              {
	    	            	 type: 'line',
	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar[3],
	    	            	 title: groupByBarArray[3],
	    	            	 axis: 'bottom',
	    	            	 highlight: true,
	    	            	 showInLegend: true,
	    	            	 shadow: true,
	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
	    	            	 style: {
	    	            		 //fill: "#ff8809",
	    	            		 stroke: "#ff8809",
	    	            		 fillOpacity: 0,
	    	            		 lineWidth: 3,
	    	            		 smooth: true,
	    	            	 },
	    	            	 marker: {
	    	                     type: 'circle',
	    	                     radius: 4,
	    	                     lineWidth: 3
	    	                 }
	    	              },  
	    	              {
	    	            	 type: 'line',
	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar[4],
	    	            	 title: groupByBarArray[4],
	    	            	 axis: 'bottom',
	    	            	 highlight: true,
	    	            	 showInLegend: true,
	    	            	 shadow: true,
	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
	    	            	 style: {
	    	            		 //fill: "#ff8809",
	    	            		 stroke: "#ff8809",
	    	            		 fillOpacity: 0,
	    	            		 lineWidth: 3,
	    	            		 smooth: true,
	    	            	 },
	    	            	 marker: {
	    	                     type: 'circle',
	    	                     radius: 4,
	    	                     lineWidth: 3
	    	                 }
		    	           },
   	    	           ]
		});	
	},
});