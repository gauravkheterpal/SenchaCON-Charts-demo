Ext.define('SenchaCon2013Demo.view.GlobalSettingsPanel', {
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
		        	id: 'playspeedsetting',
		        	labelWidth: '50%',
		        	label: 'Play Speed',
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