Ext.define('ReplayAnalytics.view.SaveDashboardDialog', {
	extend: 'Ext.Panel',
	xtype: 'savedashboarddialog',
	requires: [
	           'Ext.Toolbar',					       					       	   
	],
	config: {
		layout: 'vbox',
		modal: true,
		zIndex: 10,
		hideOnMaskTap: true,
		centered: true,
		width: 450,
		scroll: 'vertical',
		hidden: true,
		items: [		        
		        {
		            xtype: 'toolbar',
		        	maxHeight: '50px',
		        	docked: 'top',
		        	flex: '1',
		        	title: 'Save Dashboard',
		        },
		        { 
		        	xtype: 'spacer',
		        	height: '15px',
		        	style: 'background-color: #F0F0F0;',
		        },
		        {
		        	xtype: 'textfield',
					label: 'Dashboard Title',	
					id: 'dashboardtitlefield',
					maxLength: 25,
					labelWidth: '40%',
		        },	
		        { 
		        	xtype: 'spacer',
		        	height: '15px',
		        	style: 'background-color: #F0F0F0;',
		        },
				{
					xtype: 'toolbar',
					layout: { type: 'hbox', pack: 'justify' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'closesavedashboarddialog',
					        	text: 'Cancel',
					        	align: 'left',
					        	iconCls: 'delete',
					        },
					        {
					        	xtype: 'button',
					        	id: 'savedashboardsubmit',
					        	text: 'Save',
					        	ui: 'action',
					        	align: 'right',
					        	iconCls: 'save',
					        }
					]
				}	        
		]
	}
})