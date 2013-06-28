Ext.define('ReplayAnalytics.view.Main', {
	extend: 'Ext.Container',
	xtype: 'replayanalyticsmain',
	requires: [
	           'ReplayAnalytics.view.TitleBar',
	           'ReplayAnalytics.view.FourPanelLayout',
	           'ReplayAnalytics.view.BottomPlaybackToolbar'
	],
	config: {
		fullscreen: true,
		hidden: true,
		style: 'background: black;',
		layout: {type: 'vbox'},
		items: [
		        {
		        	docked: 'top',
		        	xtype: 'replayanalyticstitlebar'
		        },
		        {
		        	xtype: 'fourpanellayout'
		        },
		        {
		        	docked: 'bottom',
		        	xtype: 'bottomplaybacktoolbar'
		        }]
	},
});