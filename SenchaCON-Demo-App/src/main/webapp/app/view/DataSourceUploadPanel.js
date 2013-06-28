Ext.define('ReplayAnalytics.view.DataSourceUploadPanel', {
	extend: 'Ext.Panel',
	xtype: 'datasourceuploadpanel',
	requires: ['Ext.ux.Fileup'],
	config: {
		layout: {type: 'vbox', pack: 'start', align: 'center'},
		modal: true,
		zIndex: 10,
		hideOnMaskTap: false,
		centered: true,
		width: 600,
		height: 330,
		scroll: 'vertical',
		hidden: true,
		//style: 'background-color: #f7f7f7;',
		items: [
		        {
		        	xtype: 'toolbar',
		        	docked: 'top',
		        	title: 'Upload Data Source',
		        },
		    	{
		    		xtype: 'label',
		    		style: 'margin: 20px;',
		    		html: 'Please select a data source file..',
		        },
		        {
		    		id: 'selectedfilenamelabel',
		        	xtype: 'label',
		        	height: 10,
		    		style: 'margin-top: 10px; margin-bottom: 10px; font-size: 15px;',
		    		html: '',
		        },
		        {
		    		id: 'fileuploadbutton',
		    		xtype: 'fileupload',
		    		style: 'margin-top: 10px; margin-bottom:10px;',
		    		height: 60,
		    		width: 350,
		    		autoUpload: false,
		    		url: 'uploadDataSourceFile.do'
		        },
		        {
		    		id: 'fileuploadmessage',
		        	xtype: 'label',
		        	height: 10,
		    		style: 'margin-top: 10px; margin-bottom: 20px; color: green; font-size: 15px; font-weight: bold;',
		    		html: '',
		        },
		        {
		        	xtype: 'toolbar',
		        	docked: 'bottom',
		        	layout: { type: 'hbox', pack: 'justify' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'canceldatasourceuploadbutton',
					        	html: 'Cancel',
					        	align: 'left',
					        	iconCls: 'delete',
					        },
					        {
					        	xtype: 'button',
					        	id: 'donedatasourceuploadbutton',
					        	html: 'Next',
					        	align: 'right',
					        	iconCls: 'rightbig',
					        },
					       ]
		        }
		    ]
	},
});