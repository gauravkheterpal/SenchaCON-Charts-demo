Ext.define('ReplayAnalytics.view.AdminPanel', {
	extend: 'Ext.Container',
	xtype: 'adminpanel',
	requires: ['Ext.ux.Fileup'],
	config: {
		fullscreen: true,
		hiddden: true,
		layout: {type: 'vbox',},
		style: 'background-color:#001919;',
		layout: {type: 'vbox', pack: 'start', align: 'center'},
		items: [
		        {
		        	docked: 'top',
		        	xtype: 'titlebar',
		        	title: 'Admin Control Panel',
		    		docked: 'top',
		    		layout: 'hbox',
		    		height: '60px',
		    		width: '100%',
		    		items: [
		    		        {
		    		        	xtype: 'image',
		    		        	hidden: false,
		    		        	autoShow: true,
		    		        	docked: 'left',
		    		        	width: '130px',
		    		        	height: '100%',
		    		        	cls: 'replayanalyticslogo',
								src:'lib/images/mind-over-metrics-logo.png'
		    		        },
		    		        {
		    		        	xtype: 'label',
		    		        	id: 'usernamelabel3',
		    		        	docked: 'left',
		    		        	cls: 'usernamelabel',
		    		        	html: 'Welcome',
		    		        },		    		        
		    				{
		    					xtype:'button',
		    					id: 'gobackbuttonadmin',
		    					align: 'right',
		    					text: 'Back',
		    					iconCls: 'rightbig',
		    				}
		    		    ]
		        },
		    ]
	},
});