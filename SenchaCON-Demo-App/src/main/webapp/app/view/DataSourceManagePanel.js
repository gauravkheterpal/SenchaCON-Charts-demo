Ext.define('ReplayAnalytics.view.DataSourceManagePanel', {
	extend: 'Ext.Panel',
	xtype: 'datasourcemanagepanel',
	config: {
		layout: {type: 'vbox', pack: 'center', align: 'center'},
		modal: true,
		zIndex: 10,
		hideOnMaskTap: false,
		centered: true,
		width: 450,
		height: 400,
		scroll: 'vertical',
		hidden: true,
		//style: 'background-color: #f7f7f7;',
		items: [
		        {
		        	xtype: 'toolbar',
		        	docked: 'top',
		        	title: 'Manage Data Sources',
		        },
		        {
		        	xtype: 'button',
		        	id: 'adddatasourcemanagepanelbutton',
		        	html: 'Add Data Source',
		        	style: 'margin: 15px 0px; padding: 7px;',
		        	width: 250,
		        	ui: 'confirm',
		        	iconCls: 'add',
		        },
		        {
		        	xtype: 'button',
		        	id: 'deletedatasourcemanagepanelbutton',
		        	html: 'Delete Data Source',
		        	style: 'margin: 15px 0px; padding: 7px;',
		        	width: 250,
		        	ui: 'decline',
		        	align: 'right',
		        	iconCls: 'delete',
		        },
		        {
		        	xtype: 'button',
		        	id: 'editdatasourcemanagepanelbutton',
		        	html: 'Edit Data Source',
		        	style: 'margin: 15px 0px; padding: 7px;',
		        	width: 250,
		        	align: 'right',
		        	disabled: true,
		        	ui: 'action',
		        	iconCls: 'list',
		        },
		        {
		        	xtype: 'toolbar',
		        	docked: 'bottom',
		        	layout: { type: 'hbox', pack: 'right' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'closedatasourcemanagepanelbutton',
					        	html: 'Close',
					        	align: 'right',
					        	iconCls: 'delete',
					        },
					       ]
		        }
		    ]
	},
});