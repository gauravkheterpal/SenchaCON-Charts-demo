Ext.define('ReplayAnalytics.controller.Pie', {
	extend : 'Ext.app.Controller',
	xtype: 'piecontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
		},
	},
	
	launch: function(){
	
	},
	
	createPieChart: function(store, dataField, categoryField, chartIndex){	
		var obj = ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex] = Ext.create('Ext.chart.PolarChart', {
			id: 'chart'+ReplayAnalytics.app.currentActivePanelIndex,
			store: store,
			flex: 1,
			interactions: ['rotate'],
			legend: {
		        position: 'right',		        
		    },
		    innerPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    colors: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"],
		    //shadow: true,
		    series: [{
				        type: 'pie',
				        labelField: categoryField,
				        xField: dataField,
				        donut: 0,
				        showInLegend: true,
				        contrast: true,
				        animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
				        label: {
				        	field: categoryField,
				        	display: 'rotate',
				        	contrast: true,
						    //fill: 'black',
						},	
						labelOverflowPadding: 10,
			}],			
		});
	},
});