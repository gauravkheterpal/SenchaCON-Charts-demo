Ext.define('ReplayAnalytics.view.ManualIMDialog', {
	extend: 'Ext.Panel',
	xtype: 'manualimdialog',
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
		        	title: 'Replay Comment',
		        },
		        { 
		        	xtype: 'spacer',
		        	height: '15px',
		        	style: 'background-color: #F0F0F0;',
		        },
		        {
		        	xtype: 'textareafield',
					label: 'Message',	
					id: 'manualimmessagefield',
					//maxLength: 25,
					labelWidth: '30%',
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
					        	id: 'closemanualimdialogbutton',
					        	text: 'Cancel',
					        	align: 'left',
					        	iconCls: 'delete',
					        },
					        {
					        	xtype: 'button',
					        	id: 'savemanualimbutton',
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