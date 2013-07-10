Ext.define('SenchaCon2013Demo.view.Main', {
	extend: 'Ext.Container',
	xtype: 'senchademomain',
	requires: [
	           'SenchaCon2013Demo.view.TitleBar',
	           'SenchaCon2013Demo.view.FourPanelLayout',
	           'SenchaCon2013Demo.view.BottomPlaybackToolbar'
	],
	config: {
		fullscreen: true,
		hidden: false,
		style: 'background: white;',
		layout: {type: 'vbox'},
		items: [
		        {
		        	docked: 'top',
		        	xtype: 'senchademotitlebar'
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