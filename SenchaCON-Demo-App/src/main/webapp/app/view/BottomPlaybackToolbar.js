Ext.define('ReplayAnalytics.view.BottomPlaybackToolbar', {
	extend: 'Ext.Toolbar',
	xtype: 'bottomplaybacktoolbar',
	requires: [
	           'Ext.Toolbar',
	           'ReplayAnalytics.view.Slider0',
	           'ReplayAnalytics.view.Slider1',
	           'ReplayAnalytics.view.Slider2',
	           'ReplayAnalytics.view.Slider3',
	           'ReplayAnalytics.view.Slider4',
	],
	config: {
		docked: 'bottom',
		height: '55px',
		layout: {type: 'hbox', pack:'center', align: 'middle'},
		items: [
		        {
		        	xtype: 'spacer',
		        	width: '10px'
		        },
		        {
		        	xtype: 'button',
		        	id: 'ResetBackwardButton',
		        	//text: '|<',
		        	iconCls: 'resetbackward',
		        },
		        {
		        	xtype: 'button',
		        	id: 'StepBackwardButton',
		        	//text: '||<',
		        	delay: 0,
		        	iconCls: 'stepbackward',
		        },
		        {
		        	xtype: 'button',
		        	id: 'PlayBackwardButton',
		        	//text: '<',
		        	delay: 0,
		        	iconCls: 'playbackward',
		        },
		        {
		        	xtype: 'button',
		        	id: 'PauseButton',
		        	//text: '||',
		        	delay: 0,
		        	iconCls: 'pause',
		        },
		        {
		        	xtype: 'button',
		        	id: 'PlayForwardButton',
		        	//text: '>',
		        	delay: 0,
		        	iconCls: 'play',
		        },
		        {
		        	xtype: 'button',
		        	id: 'StepForwardButton',
		        	//text: '>||',
		        	delay: 0,
		        	iconCls: 'stepforward',
		        },
		        {
		        	xtype: 'button',
		        	id: 'ResetForwardButton',
		        	//text: '>|',
		        	iconCls: 'resetforward',
		        },
		        {
		        	xtype: 'spacer', 
		        	width: '10px'
		        },
		        {
		        	xtype: 'slider0'
		        },
		        {
		        	xtype: 'slider1'
		        },
		        {
		        	xtype: 'slider2'
		        },
		        {
		        	xtype: 'slider3'
		        },
		        {
		        	xtype: 'slider4'
		        },
		        {
		        	xtype: 'spacer', 
		        	width: '10px'
		        },
		        {
		        	xtype: 'container', 
		        	id: 'daterangelabel',
		        },
		        {
		        	xtype: 'button',
		        	id: 'manualimbutton',
		        	iconCls: 'callout',
		        },
		        {
		        	xtype: 'segmentedbutton',
		        	id: 'globalsynctogglebutton',
		        	allowDepress: true,
		        	items: [
		        	        {
		        	        	text: 'Global Sync',
		        	        	pressed: false,
		        	        	id: 'globalsyncon',
		        	        	iconCls: 'sync',
		        	        },
		        	]
		        },
		]
	}
})