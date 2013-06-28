Ext.define('ReplayAnalytics.view.TopTwoPanelLayout', {
	extend: 'Ext.Panel',
	xtype: 'toptwopanellayout',
	requires: [
	           'ReplayAnalytics.view.Panel1',
	           'ReplayAnalytics.view.Panel2'
	],
	config: {
		layout: {type: 'hbox', pack: 'center', align: 'stretch'},
		flex: 1,
		style: "background-color: black; color:white",
		items: [
		        {
		        	xtype: 'panel1'
		        },
		        {
		        	xtype: 'panel2'
		        }
		]
	}
})