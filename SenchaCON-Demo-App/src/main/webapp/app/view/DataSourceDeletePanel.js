Ext.define('ReplayAnalytics.view.DataSourceDeletePanel', {
	extend: 'Ext.Panel',
	xtype: 'datasourcedeletepanel',
	config: {
		layout: {type: 'vbox'},
		modal: true,
		zIndex: 10,
		hideOnMaskTap: false,
		centered: true,
		width: 600,
		height: 500,
		scroll: 'vertical',
		hidden: true,
		//style: 'background-color: #f7f7f7;',
		items: [
		        {
		        	xtype: 'toolbar',
		        	docked: 'top',
		        	title: 'Delete Data Sources',
		        },
		        {
    	        	xtype: 'container',
    	        	id: 'datasourcedeletepanelcontainer',
    	        	layout: {type: 'vbox'},
    	        	flex: 1,
                },
		        {
		        	xtype: 'toolbar',
		        	docked: 'bottom',
		        	layout: { type: 'hbox', pack: 'justify' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'canceldatasourcedeletepanelbutton',
					        	html: 'Back',
					        	align: 'left',
					        	iconCls: 'backspace',
					        },
					        {
					        	xtype: 'button',
					        	id: 'confirmdatasourcedeletepanelbutton',
					        	html: 'Delete',
					        	ui: 'decline',
					        	align: 'right',
					        	iconCls: 'delete',
					        },
					       ]
		        }
		    ]
	},
});