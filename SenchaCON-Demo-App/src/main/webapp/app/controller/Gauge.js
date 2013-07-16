Ext.define('SenchaCon2013Demo.controller.Gauge', {
	extend : 'Ext.app.Controller',
	xtype: 'gaugecontroller',
	config: {
		refs: {
			'initController': 'initcontroller',
			'mainController': 'maincontroller',
		},
	},
	
	launch: function(){
	
	},
	
	createGaugeChart: function(store, dataField, chartIndex){
		var obj = SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create('Ext.chart.SpaceFillingChart', {
			id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
			store: store,
			flex: 1,
			//interactions: ['rotate'],
			 animate: {
	                easing: 'elasticIn',
	                duration: SenchaCon2013Demo.app.animateSpeed
	            },
			
		    innerPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    //colors: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"],
		    //shadow: true,
	    /*axes: [
	           {
	        	   type: 'gauge',
	                position: 'gauge',
	                minimum: 0,
	                maximum: SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex],
                    steps: 10,
	                margin: 7
	           }
	       ],*/
		   
		    series: [
		                {
		                    type: 'gauge',
		                   // value:  SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],//check
		                    field:SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
		                    minimum: 0,
		                    maximum: SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex],
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