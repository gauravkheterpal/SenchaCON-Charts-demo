Ext.define('SenchaCon2013Demo.view.BottomPlaybackToolbar', {
	extend: 'Ext.Toolbar',
	xtype: 'bottomplaybacktoolbar',
	requires: [
	           'Ext.Toolbar',
	           'SenchaCon2013Demo.view.Slider0',
	           'SenchaCon2013Demo.view.Slider1',
	           'SenchaCon2013Demo.view.Slider2',
	           'SenchaCon2013Demo.view.Slider3',
	           'SenchaCon2013Demo.view.Slider4',
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
		        /*{
		        	xtype: 'button',
		        	id: 'manualimbutton',
		        	hidden:true,
		        	iconCls: 'callout',
		        },*/
		        {
		        	xtype: 'segmentedbutton',
		        	id: 'globalsynctogglebutton',
		        	allowDepress: true,
		        	items: [
		        	        {
		        	        	text: 'Play All',
		        	        	pressed: false,
		        	        	id: 'globalsyncon',
		        	        	iconCls: 'sync',
		        	        },
		        	]
		        },
		]
	}
})