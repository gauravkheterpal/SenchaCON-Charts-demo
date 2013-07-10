Ext.define('ReplayAnalytics.controller.Gauge', {
	extend : 'Ext.app.Controller',
	xtype: 'gaugecontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
		},
	},
	
	launch: function(){
	
	},
	
	createGaugeChart: function(store, dataField, chartIndex){
		var obj = ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex] = Ext.create('Ext.chart.SpaceFillingChart', {
			id: 'chart'+ReplayAnalytics.app.currentActivePanelIndex,
			store: store,
			flex: 1,
			//interactions: ['rotate'],
			 animate: {
	                easing: 'elasticIn',
	                duration: 1000
	            },
			
		    innerPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    //colors: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"],
		    //shadow: true,
	    /*axes: [
	           {
	        	   type: 'gauge',
	                position: 'gauge',
	                minimum: 0,
	                maximum: ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex],
                    steps: 10,
	                margin: 7
	           }
	       ],*/
		   
		    series: [
		                {
		                    type: 'gauge',
		                   // value:  ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],//check
		                    field:ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
		                    minimum: 0,
		                    maximum: ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex],
		                    donut: 30,
		                    style: {
		                        miterLimit: 10,
		                        lineCap: 'miter',
		                        lineWidth: 2
		                    },
		                    subStyle: {
		                        fillStyle: ["#115fa6", "lightgrey"]
		                    }
		                }
		            ]
		   
		});
	},
});