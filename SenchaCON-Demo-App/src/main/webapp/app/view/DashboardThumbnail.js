Ext.define('ReplayAnalytics.view.DashboardThumbnail', {
	extend: 'Ext.Panel',
	xtype: 'dashboardthumbnail',
	fullscreen: true,
	config: {
		layout: {type: 'vbox', pack: 'center'},
		width: '250px',
		dashboardIndex: undefined,
		dashboardId: undefined,
		height: '250px',
		cls: 'thumbnail',
		items: [
		        {
		        	xtype: 'container',
		        	docked: 'top',
		        	layout: {type: 'hbox', pack: 'right',},
		        	items: [
		        	        {
		        	        	xtype: 'container',
		        	        	customId: 'dashboard-updated-icon',
		        	        	style: 'color: white;',
		        	        	hidden: true,
		        	        	align: 'right',
		        	        	layout: {type: 'hbox', pack: 'right',},
		        	        	items: [
		        	        	        {
		        	        	        	xtype: 'image',		        	   
		        	        	        	src: 'lib/images/chat2_white.png',
		        	        	        	align: 'right',
		        	        	        	cls: 'callout-icon-thumbnail',
		        	        	        },
		        	        	        ]				        	
		        	        },
		        	        {
		        	        	xtype: 'container',
		        	        	customId: 'dashboard-shared-icon',
		        	        	style: 'color: white;',
		        	        	hidden: true,
		        	        	align: 'right',
		        	        	layout: {type: 'hbox', pack: 'right',},
		        	        	items: [
		        	        	        {
		        	        	        	xtype: 'image',		        	   
		        	        	        	src: 'lib/images/link-blue-icon.png',
		        	        	        	align: 'right',
		        	        	        	cls: 'dashboard-icon-style',
		        	        	        },
		        	        	        ]				        	
		        	        },
		        	        {
		        	        	xtype: 'container',
					        	customId: 'dashboard-lock-icon',
					        	style: 'color: white;',
					        	hidden: true,
					        	align: 'left',
					        	layout: {type: 'hbox', pack: 'right',},
					        	items: [
					        	        {
					        	        	xtype: 'image',		        	   
					        	        	src: 'lib/images/lock-icon.png',
					        	        	align: 'left',
					        	        	cls: 'dashboard-icon-style',
					        	        },
					        	 ]
		        	        },
		        	        {
					        	xtype: 'container',
					        	customId: 'dashboard-delete-icon',
					        	style: 'color: white;',
					        	hidden: true,
					        	align: 'right',
					        	layout: {type: 'hbox', pack: 'right',},
					        	items: [
					        	        {
					        	        	xtype: 'image',		        	   
					        	        	src: 'lib/images/delete-red-icon.png',
					        	        	align: 'right',
					        	        	cls: 'dashboard-icon-style',
					        	        },
					        	 ]				        	
					        },
		        	 ]
		        },
    	        {
		        	xtype: 'image',
                    hidden: false,
					autoShow: true,
					centered: true,
                    width: '100px',
                    height: '100px',
					style: 'width: 100px; height: 100px; background-size: 100%;',
					src: 'lib/images/chart-icon-big.png'
		        },
		        {
		        	docked: 'bottom',
		        	xtype: 'label',
		        	html: 'Dashboard',
		        	style: 'margin-bottom: 5px; font-weight: normal; font-size: 14px;',
		        }
				
    	]
	}
});