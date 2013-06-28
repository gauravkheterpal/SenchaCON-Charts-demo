Ext.define('ReplayAnalytics.view.DataSourceTypeSelectionPanel', {
	extend: 'Ext.Panel',
	xtype: 'datasourcetypeselectionpanel',
	config: {
		layout: 'vbox',
		modal: true,
		zIndex: 10,
		hideOnMaskTap: false,
		centered: true,
		width: 600,
		height: 300,
		scroll: 'vertical',
		hidden: true,
		//style: 'background-color: #f7f7f7;',
		items: [
		        {
		        	xtype: 'toolbar',
		        	docked: 'top',
		        	title: 'Select Data Source',
		        },
		    	{
		    		xtype: 'label',
		    		style: 'margin: 20px;',
		    		html: 'Select the type of data source to be added from the following options:',
		        },	    	
		        {
		    		xtype: 'selectfield',
		    		//style: 'margin: 20px;',
		    		id: 'datasourcetypeselectfield',
		        	label: 'Data Source Types:',
		        	value: 'None',
		        	options: [
		        		{text: 'None Defined', value: 'None'},
		        		{text: 'Excel Spreadsheet', value: 'excel_spreadsheet'},
		        		//{text: 'SQL Database', value: 'sql_database'},
		        		]
		        },
		        {
		        	xtype: 'toolbar',
		        	docked: 'bottom',
		        	layout: { type: 'hbox', pack: 'right' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'donedatasourcetypeselectionbutton',
					        	html: 'Next',
					        	align: 'right',
					        	iconCls: 'rightbig',
					        },
					       ]
		        }
		    ]
	},
});