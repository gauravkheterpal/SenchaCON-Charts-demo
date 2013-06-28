Ext.define('ReplayAnalytics.view.DashboardScreen', {
	extend: 'Ext.Container',
	xtype: 'dashboardscreen',
	config: {
		fullscreen: true,
		hiddden: true,
		layout: {type: 'vbox',},
		style: 'background-color:#001919;',
		scrollable: {
			direction: 'vertical',
			directionLock: false,
		},
		items: [
		        {
		        	docked: 'top',
		        	xtype: 'titlebar',
		        	title: 'My Replay Dashboards',
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
		    		        	id: 'usernamelabel2',
		    		        	docked: 'left',
		    		        	cls: 'usernamelabel',
		    		        	html: 'Welcome',
		    		        },
		    		        {
		    		        	xtype: 'segmentedbutton',
		    		        	id: 'editsharedashboards',
		    		        	align: 'right',
		    		        	allowDepress: false,
		    		        	items: [
		    		        	        {
		    		        	        	id: 'viewdashboardtoggle',
		    		        	        	text: 'View',
		    		        	        	pressed: true,
		    		        	        	iconCls: 'list',
		    		        	        },
		    		        	        {
		    		        	        	id: 'editdashboardtogglebutton',
		    		        	        	text: 'Delete',
		    		        	        	pressed: false,
		    		        	        	iconCls: 'delete',
		    		        	        },
		    		        	        {
		    		        	        	id: 'sharedashboardtogglebutton',
		    		        	        	text: 'Share',
		    		        	        	pressed: false,
		    		        	        	iconCls: 'share',
		    		        	        }
		    		        	]
		    		        },
		    		        {	
		    		        	xtype:'button',
		    		        	id: 'adminbutton',
		    					align: 'right',
		    					text: 'Admin Control Panel',
		    					hidden: true,
		    					iconCls: 'settings',
		    				},
		    		        {	
		    		        	xtype:'button',
		    		        	id: 'infobutton',
		    					align: 'right',
		    					iconCls: 'info',
		    				},
		    				{
		    					xtype:'button',
		    					id: 'logoutbutton',
		    					align: 'right',
		    					text: 'Logout',
		    					iconCls: 'logout',
		    				}
		    		    ]
		        },
		        {
		        	xtype: 'panel',
		        	id: 'dashboardgrid',
		        	config: {
		        		fullscreen: true,
		        		hidden: false,
		        		layout: {type: 'vbox', align: 'center'},
		        		style: 'background-color:#001919; padding: 20px;',
		        		height: '100%',
		        		flex: 1,
		        		items: [
		    		    ]
		        	}
		    	},
		    ]
	},
});