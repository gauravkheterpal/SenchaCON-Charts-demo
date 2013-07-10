Ext.define('SenchaCon2013Demo.view.TitleBar', {
	extend: 'Ext.TitleBar',
	xtype: 'senchademotitlebar',
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
					xtype:'button',
					id: 'settingsbutton',
					align: 'right',
					text: 'Settings',
					iconCls: 'settings',
				},	        
		]
	}
});