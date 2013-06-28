Ext.define('ReplayAnalytics.view.GlobalSettingsPanel', {
	extend: 'Ext.Panel',
	xtype: 'globalsettingspanel',
	requires: [
	           'Ext.Toolbar',					       					       	   
	],
	config: {
		layout: 'vbox',
		modal: true,
		zIndex: 10,
		hideOnMaskTap: true,
		centered: true,
		width: 530,
		scroll: 'vertical',
		hidden: true,
		items: [
		        {
		        	xtype: 'toolbar',
		        	docked: 'top',
		        	maxHeight: '50px',
		        	title: 'Global Settings',
		        	flex: 1
		        },
		        {
		        	xtype: 'selectfield',
					label: 'Interesting Moments:',
					id: 'imtogglefield',
					labelWidth: '50%',
					value: 'Off',
					options: [
						{text: 'On', value: 'On'},
						{text: 'Off', value: 'Off'}
					]
		        },
		        {
		        	xtype: 'selectfield',
					label: 'Replay Comments:',
					id: 'replaycommentstogglefield',
					labelWidth: '50%',
					value: 'Off',
					options: [
						{text: 'On', value: 'On'},
						{text: 'Off', value: 'Off'}
					]
		        },
		        {
		        	xtype: 'selectfield',
		        	id: 'replayspeedsetting',
		        	labelWidth: '50%',
		        	label: 'Replay Speed',
		        	value: 'Normal',
		        	options: [
		        		{text: 'Slow', value: '3000'},
		        		{text: 'Normal', value: '2000'},
		        		{text: 'Fast', value: '1000'}
		        	]
		        },
		        {
		        	xtype: 'selectfield',
		        	id: 'activepanelsfield',
		        	label: 'Active Panels:',
		        	labelWidth: '50%',
		        	value: '4',
		        	options: [
		        		{text: '1', value: '1'},
		        		{text: '2', value: '2'},
		        		{text: '4', value: '4'}
		        	]
		        },
		        {
		        	xtype: 'selectfield',
		        	id: 'imtype1setting',
		        	labelWidth: '50%',
		        	label: 'IM Type-1 Mean Deviation',
		        	value: '-1',
		        	options: [
		        	    {text: 'None', value: '-1'},      
		        		{text: '20%', value: '20'},
		        		{text: '30%', value: '30'},
		        		{text: '40%', value: '40'},
		        		{text: '50%', value: '50'},
		        	]
		        },
		        {
		        	xtype: 'selectfield',
		        	id: 'imtype2setting',
		        	labelWidth: '50%',
		        	label: 'IM Type-2 Standard Deviation',
		        	value: '-1',
		        	options: [
		        	    {text: 'None', value: '-1'}, 
		        		{text: '1', value: '1'},
		        		{text: '1.5', value: '1.5'},
		        		{text: '2', value: '2'},
		        		{text: '2.5', value: '2.5'},
		        		{text: '3', value: '3'},
		        	]
		        },
		        {
		        	xtype: 'selectfield',
		        	id: 'imtype3setting',
		        	labelWidth: '50%',
		        	label: 'IM Type-3 Trending Points',
		        	value: '-1',
		        	options: [
		        	    {text: 'None', value: '-1'}, 
		        		{text: '3', value: '3'},
		        		{text: '4', value: '4'},
		        		{text: '5', value: '5'},
		        		{text: '6', value: '6'},
		        		{text: '7', value: '7'},
		        		{text: '8', value: '8'},
		        		{text: '9', value: '9'},
		        		{text: '10', value: '10'},
		        	]
		        },
		        {
		        	xtype: 'selectfield',
		        	id: 'imtype4setting',
		        	labelWidth: '50%',
		        	label: 'IM Type-4 Trending Points',
		        	value: '-1',
		        	options: [
		        	    {text: 'None', value: '-1'}, 
		        		{text: '3', value: '3'},
		        		{text: '4', value: '4'},
		        		{text: '5', value: '5'},
		        		{text: '6', value: '6'},
		        		{text: '7', value: '7'},
		        		{text: '8', value: '8'},
		        		{text: '9', value: '9'},
		        		{text: '10', value: '10'},
		        	]
		        },
		        {
		        	xtype: 'button',
		        	id: 'managedatasourcesbutton',
		        	html: 'Manage Data Sources',
		        	ui: 'action',
		        	style: 'font-size: 14px; margin-left: 120px; margin-right: 120px; margin-top: 10px; margin-bottom: 5px; padding: 5px;',					        	
		        },
		        {
		        	xtype: 'button',
		        	id: 'clearcachebuttonglobalsettings',
		        	html: 'Reset All Local Cache',
		        	ui: 'confirm',
		        	style: 'font-size: 14px; margin-left: 120px; margin-right: 120px; margin-top: 10px; margin-bottom: 5px; padding: 5px;',					        	
		        },					   
				{
					xtype: 'toolbar',
					layout: { type: 'hbox', pack: 'justify' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'globalsettingscancelbutton',
					        	text: 'Cancel',
					        	align: 'left',
					        	iconCls: 'delete',
					        },
					        {
					        	xtype: 'button',
					        	id: 'globalsettingsdonebutton',
					        	text: 'Done',
					        	ui: 'action',
					        	align: 'right',
					        	iconCls: 'done',
					        }
					]
				}	        
		]
	}
})