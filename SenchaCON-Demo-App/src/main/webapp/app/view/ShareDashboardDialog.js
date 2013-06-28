Ext.define('ReplayAnalytics.view.ShareDashboardDialog', {
	extend: 'Ext.Panel',
	xtype: 'sharedashboarddialog',
	requires: [
	           'Ext.Toolbar',					       					       	   
	],
	config: {
		layout: 'vbox',
		modal: true,
		zIndex: 10,
		hideOnMaskTap: true,
		centered: true,
		//width: 600,
		scroll: 'vertical',
		hidden: true,
		items: [		        
		        {
		            xtype: 'toolbar',
		        	maxHeight: '50px',
		        	docked: 'top',
		        	flex: '1',
		        	title: 'Share Dashboard',
		        },
		        {
		        	xtype: 'textareafield',	
		        	label: 'Copy and paste this link in a browser window to open the shared dashboard<br />or send the link to anyone you would like to share the Replay Analytics.',
		        	labelAlign: 'top',
					id: 'dashboardlinkfield',
					clearIcon: false,
					readOnly: true,
		        },	
				{
					xtype: 'toolbar',
					layout: { type: 'hbox', pack: 'justify' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'emaildashboardlink',
					        	text: 'Email',
					        	align: 'left',
					        	ui: 'confirm',
					        	iconCls: 'mail',
					        },
					        {
					        	xtype: 'button',
					        	id: 'openinnewtabbutton',
					        	text: 'Open In New Tab',
					        	align: 'left',
					        	ui: 'confirm',
					        	iconCls: 'window',
					        },
					        {
					        	xtype: 'button',
					        	id: 'closesharedashboarddialog',
					        	text: 'Close',
					        	ui: 'action',
					        	align: 'right',
					        	iconCls: 'done',
					        }
					]
				}	        
		]
	}
})