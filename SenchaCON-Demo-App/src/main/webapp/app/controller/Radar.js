Ext.define('SenchaCon2013Demo.controller.Radar', {
	extend : 'Ext.app.Controller',
	xtype: 'radarcontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
		},
	},
	
	launch: function(){
	
	},
	
	createRadarChart: function(store, dataField, categoryField, chartIndex){
		var obj = SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create('Ext.chart.PolarChart', {
			id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
			store: store,
			flex: 1,
			interactions: ['rotate'],
			//legend: {
		      //  position: 'right',		        
		    //},
		    innerPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    //colors: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"],
		    //shadow: true,
	    axes: [
	           {
	               type: 'numeric',
	               position: 'radial',
	               fields: dataField,
	               grid: true,
	               style: {
	                   estStepSize: 20
	               },
	               label: {
	                   fill: 'black',
	                  // y: -8
	               }
	           },
	           {
	               type: 'category',
	               position: 'angular',
	               fields: categoryField,
	               grid: true,
	               style: {
	                   estStepSize: 2
	               },
	               label: {
	                   fill: 'black'
	               }
	           }
	       ],
	       series: [
	                {
	                    type: 'radar',
	                    xField: categoryField,
	                    yField: dataField,
	                    animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
	                    style: {
	                        fillStyle: 'rgba(0,255,0,0.2)',
	                        strokeStyle: 'rgba(0,0,0,0.8)',
	                        lineWidth: 1
	                    }
	                }
	            ],
		   
		});
	},
});