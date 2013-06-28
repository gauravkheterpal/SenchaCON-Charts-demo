Ext.define('ReplayAnalytics.view.InterestingMomentGraphPanel', {
	extend: 'Ext.Panel',
	xtype: 'interestingmomentgraphpanel',
	requires: [
	           'Ext.Toolbar',					       					       	   
	],
	config: {
		layout: 'vbox',
		modal: true,
		zIndex: 10,
		hideOnMaskTap: true,
		centered: true,
		width: 700,
		height: 600,
		hidden: true,
		items: [
		        {
		        	xtype: 'toolbar',
		        	maxHeight: '50px',
		        	id: 'imgraphtitlebar',
		        	docked: 'top',
		        	flex: '1',
		        	title: 'Interesting Moment',
		        	width: '100%',
		        },
				{
					xtype: 'chart',
					id: 'chart5',
					//style: "background-color: black; color:white;",
				}, 	 
				{
					xtype: 'toolbar',
					docked: 'bottom',
					layout: { type: 'hbox', pack: 'justify' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'replayinterestingmomentbutton',
					        	text: 'Show Replay Graph',
								iconCls: 'refresh5',
								align: 'left',
					        },
					        {
					        	xtype: 'button',
					        	id: 'showtrendgraphbutton',
					        	text: 'Back',
								iconCls: 'reply',
								align: 'left',
								hidden: true,
					        },
					        {
					        	xtype: 'button',
					        	id: 'previousinterestingmomentbutton',
					        	text: 'Previous',
								iconCls: 'arrow_left',
								align: 'left',
								disabled: true,
					        },
					        {
					        	xtype: 'button',
					        	id: 'nextinterestingmomentbutton',
					        	text: 'Next',
								iconCls: 'arrow_right',
								align: 'left',
					        },					        
					        {
					        	xtype: 'slider5',
					        	align: 'center',
					        },
					        {
					        	xtype: 'button',
					        	id: 'closeinterestingmomentgraphpanelbutton',
					        	html: 'Close',
					        	iconCls: 'delete',
					        	ui: 'action',
					        	align: 'right',
					        }
					]
				}
		]
	}
})