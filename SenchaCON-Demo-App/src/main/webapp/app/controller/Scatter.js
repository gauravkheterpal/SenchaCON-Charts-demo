Ext.define('SenchaCon2013Demo.controller.Scatter', {
	extend : 'Ext.app.Controller',
	xtype: 'scattercontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
		},
	},
	
	launch: function(){
		
	},	
			    
	createScatterChart: function(chartType,store,xfield,yfield,chartIndex,groupByBarArray) {
		var obj = SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
			id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
			animate: true,
			renderTo: Ext.getBody(),
			flex: 1,
			autoShow: true,
		    store: store,
		    //insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    axes: [{
		        type: 'numeric',
		        position: 'bottom',
		        fields: [xfield],
		        style: {
	    	   		strokeStyle: 'black',
	    	   		shadowColor: 'black',    	    	   	
	       		},
	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
		        title: {
						text: xfield,
						strokeStyle: '#4270A2',
						fillStyle: '#4270A2',
						shadowColor: 'black',
				},
		        //grid: true,
		        minimum: 0,
		        maximum: SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex],
		    }, {
		        type: 'numeric',
		        position: 'left',
		        fields: [yfield],
		        style: {
	    	   		strokeStyle: 'black',
	    	   		shadowColor: 'black',    	    	   	
	       		},
	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
		        title: {
						text: yfield,
   						strokeStyle: '#4270A2',
   						fillStyle: '#4270A2',
   						shadowColor: 'black',	    	    	   	
   				},
		        minimum: 0,
		        maximum: SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex],
		    }],
		    series: [{
		        type: 'scatter',
		        fill: true,
		        xField: xfield,
		        yField: yfield,
		        animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
		        marker: {
		        	type: 'circle',
		        	fill: '#a00',
		        	fillOpacity: 1,
					radius: 10,
		            lineWidth: 1,
		            strokeOpacity: 1,
		            strokeStyle: 'black',
		            shadowColor: 'black',
		            shadowOffestX: 2,
		            shadowOffsetY: 2,
		        }
		    }]
		}); 
	},
	
	createScatterChartGroupBy: function(chartType,store,xfield,yfield,chartIndex) {
		 
	},
});