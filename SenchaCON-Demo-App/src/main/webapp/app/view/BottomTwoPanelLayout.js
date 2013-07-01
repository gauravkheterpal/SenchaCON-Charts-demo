Ext.define('ReplayAnalytics.view.BottomTwoPanelLayout', {
	extend: 'Ext.Panel',
	xtype: 'bottomtwopanellayout',
	requires: [
	           'ReplayAnalytics.view.Panel3',
	           'ReplayAnalytics.view.Panel4',
	],
	config: {
		layout: 'hbox',
		flex: 1,
		style: "background-color: white; color:white",
		items: [
		        {
		        	xtype: 'panel3'
		        },
		        {
		        	xtype: 'panel4'
		        }
		]
	}
})