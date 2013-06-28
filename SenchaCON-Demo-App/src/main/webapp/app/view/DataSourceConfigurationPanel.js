Ext.define('ReplayAnalytics.view.DataSourceConfigurationPanel', {
	extend: 'Ext.Panel',
	xtype: 'datasourceconfigurationpanel',
	id: 'datasourceconfigurationpanel',
	config: {
		layout: 'vbox',
		modal: true,
		zIndex: 10,
		hideOnMaskTap: false,
		centered: true,
		width: 600,
		height: 550,
		scrollable: {
			direction: 'vertical',
			directionLock: false,
		},
		hidden: true,
		//style: 'background-color: #f7f7f7;',
		items: [	
		        {
		        	xtype: 'toolbar',
		        	docked: 'top',
		        	title: 'Configure Data Source',
		        },	
		        {
		    		xtype: 'textfield',
		    		style: 'padding: 10px; background-color: rgb(230,230,230); margin: 0px; font-size: 18px;',
		    		id: 'datasourcenamefield',
		    		docked: 'top',
		    		label: 'Data Source Name:',
		        },
		        {
		        	xtype: 'panel',
		        	docked: 'top',
		        	style: 'background-color: rgb(230,230,230); padding-left: 5px; padding-right: 5px; padding-top: 5px; padding-bottom: 10px;',
		        	layout: {type: 'hbox', pack: 'start', align: 'justify'},
		    		items: [
		        	        {
		        	        	xtype: 'label',
		        	        	html: 'Field Name', // Label
		        	        	style: 'padding-left: 5px; padding-right: 5px; background-color: rgb(230,230,230); font-size: 16px; font-weight: bold; text-align: center;',
		        	        	width: 290,
		        	        },
		        	        {
		        	        	xtype: 'label',
		        	        	html: 'Type',
		        	        	style: 'padding-left: 5px; padding-right: 5px; background-color: rgb(230,230,230); font-size: 16px; font-weight: bold; text-align: center;',
		        	        	width: 290,
		        	        },
		        	        ]
		        },
		        {
		        	xtype: 'panel',
		        	id: 'tablefieldscontainer',
		        	style: 'background-color: rgb(235, 235, 235);',
		        	layout: 'vbox',
		        },
		        {
		        	xtype: 'toolbar',
		        	docked: 'bottom',
		        	layout: { type: 'hbox', pack: 'justify' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'canceldatasourceconfigurationebutton',
					        	html: 'Cancel',
					        	align: 'left',
					        	iconCls: 'delete',
					        },
					        {
					        	xtype: 'button',
					        	id: 'adddatasourcefieldmanualbutton',
					        	html: 'Add New Field',
					        	align: 'left',
					        	hidden: true,
					        	iconCls: 'add',
					        },
					        {
					        	xtype: 'button',
					        	id: 'donedatasourceconfigurebutton',
					        	html: 'Finish',
					        	align: 'right',
					        	iconCls: 'rightbig',
					        },
					       ]
		        }
		    ]
	},
});