Ext.define('ReplayAnalytics.view.SettingsPanel', {
	extend: 'Ext.Panel',
	xtype: 'settingspanel',
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
		        	title: 'Panel Settings',
		        },	
		        {
		        	xtype: 'selectfield',
		        	id: 'databaseselectfield',
		        	label: 'Database:',
		        	hidden: true,
		        	value: 'None',
		        	options: [
		        	    {text: '+ Import Excel File', value: 'add_new_data_source'},
		        		{text: 'None Defined', value: 'None'},
		        		]
		        },
		        {
		        	xtype: 'textfield',
		        	id: 'graphtitlefield',
					label: 'Graph Title:',		
					hidden:true,
		        },		 
		        {
		        	xtype:'selectfield',
		        	id: 'charttypefield',
					label: 'Chart Type:', 
					value: 'None',
					options: [
					    {text: 'None', value: 'None'},
						{text: 'Bubble', value: 'scatter'},
						{text: 'Horizontal Bar', value: 'horizontalbar'},
						{text: 'Vertical Bar', value: 'verticalbar'},
						{text: 'Line', value: 'line'},
						{text: 'Area', value: 'area'},
						{text: 'Pie', value: 'pie'},
						{text: 'Radar', value: 'radar'},
						{text: 'Gauge', value: 'gauge'},
					]
		        },
		        {
		        	xtype: 'selectfield',
		        	id: 'xaxisfield',
					label: 'X-Axis:',
					options: [
				        		{text: 'None Defined', value: 'none'},
				        		]
		        },						        
				{
					xtype: 'selectfield',
					id: 'yaxisfield',
					label:'Y-Axis:', 
					options: [
				        		{text: 'None Defined', value: 'none'},
				        		]
				},			
				{
					xtype: 'selectfield',
					id: 'groupbyfield',
					label: 'Group By:',	
					options: [
				        		{text: 'None Defined', value: 'none'},
				        		]
				},
				{
					xtype: 'selectfield',
					id: 'filtersettingtoggle',
					label: 'Filter:',
					value: 'Off',
					hidden: true,
					options: [
						{text: 'On', value: 'On'},
						{text: 'Off', value: 'Off'}
					]
				},				
				{
					xtype:'selectfield',
					id: 'granularityfield',
					label: 'Granularity:',
				},				
				{
					xtype: 'selectfield',
					id: 'accumfield',
					label: 'Accumulate:',
					hidden: true,
					value: 'On',
					options: [
						{text: 'On', value: 'On'},
						{text: 'Off', value: 'Off'}
					]
				},			
				{
					xtype: 'datepickerfield',
					id: 'startdatefield',
					label: 'Start Date:',
					name: 'startdate',
					dateFormat: 'm/d/y',
					picker: {
					      yearFrom: 2009,
					      yearTo: 2011,
					     }
				},				
				{
					xtype: 'datepickerfield',
					id: 'enddatefield',
					label: 'End Date:',
					name: 'enddate',
					dateFormat: 'm/d/y',
					picker: {
					      yearFrom: 2009,
					      yearTo: 2011,
					     }
				},						   
				{
					xtype: 'toolbar',
					layout: { type: 'hbox', pack: 'justify' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'clearpanelbutton',
					        	html: 'Clear Panel',
					        	align: 'left',
					        	iconCls: 'clear',
					        },
					        {
								xtype: 'button',
								hidden: true,
								id: 'setfilterbutton',
								html: 'Filters',
								iconCls: 'add',
							},
					        {
					        	xtype: 'button',
					        	id: 'settingscancelbutton',
					        	text: 'Cancel',
					        	align: 'right',
					        	iconCls: 'delete',
					        },
					        {
					        	xtype: 'button',
					        	id: 'settingsdonebutton',
					        	text: 'Done',
					        	ui: 'action',
					        	align: 'right',
					        	iconCls: 'done',
					        }
					]
				}	        
		]
	}
});