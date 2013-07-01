Ext.define('ReplayAnalytics.view.TitleBar', {
	extend: 'Ext.TitleBar',
	xtype: 'replayanalyticstitlebar',
	requires: [
	           'Ext.TitleBar'
	],
	config: {
		//title: 'Replay Analytics &#153;',
		title:'SenchaCON-Charts-Demo',
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
                    hidden: true,
                    cls: 'replayanalyticslogo',
					src:'lib/images/mind-over-metrics-logo.png'
		        },
		        {
		        	xtype: 'label',
		        	id: 'usernamelabel',
		        	docked: 'left',
		        	hidden: true,
		        	cls: 'usernamelabel',
		        	html: 'Welcome',
		        },
		        {
		        	xtype:'button',
		        	id: 'helpbutton',
		        	align: 'right',
		        	hidden: true,
		        	iconCls: 'help',
		        },				
				{
					xtype: 'button',
					id: 'sharedashboardbutton',
					align: 'right',
					text: 'Share',
					hidden: true,
					iconCls: 'share',
				},
				{
					xtype:'button',
					id: 'settingsbutton',
					align: 'right',
					text: 'Settings',
					iconCls: 'settings',
				},
				{
					xtype:'button',
					id: 'globalsettingsbutton',
					align: 'right',
					hidden: true,
					text: 'Global Settings',
					iconCls: 'globe',
				},
				{
		        	xtype: 'button',
		        	id: 'savedashboardbutton',
		        	hidden: true,
		        	iconCls: 'save',
		        	align: 'right',
		        	text: 'Save',
		        },
		        {
		        	xtype:'button',
		        	id: 'loginredirectbutton',
		        	align: 'right',
		        	text: 'Login',
		        	iconCls: 'user',
		        	hidden: true,
		        },
		        {
		        	xtype:'button',
		        	id: 'bookmarkdashboardbutton',
		        	align: 'right',
		        	text: 'Save to My Library',
		        	hidden: true,
		        	iconCls: 'save',
		        },
				{
					xtype:'button',
					id: 'gobackbutton',
					hidden: true,
					align: 'right',
					text: 'My Replays',
					iconCls: 'rightbig',
				},		        
		]
	}
});