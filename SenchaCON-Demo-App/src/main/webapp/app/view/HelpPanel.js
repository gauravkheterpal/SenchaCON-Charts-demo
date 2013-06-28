Ext.define('ReplayAnalytics.view.HelpPanel', {
	extend: 'Ext.Panel',
	xtype: 'helppanel',
	requires: [
	           'Ext.TitleBar'
	],
	config: {
		modal: true,
		hidden: true,
		centered: true,
		width: 400,
		height: 160,
		//fullscreen: true,
		layout: { type:'vbox', align: 'center', pack: 'center' },
		scroll: 'vertical',
		//hideOnMaskTap: true,
		//stopMaskTapEvent: false,
		xIndex: 100,
		fullscreen: false,
		baseCls: 'HelpPanel',
		style: 'background:black; border: white 3px solid;',
		items:
		[
			{ 
				//dock: 'top',
				xtype: 'toolbar',
				maxHeight: '40px',
				html: "<h1 style='color: white;font-size: 35px; top: 23px'>Help</h1>",
				style: 'background: transparent;'
			},
			{
				html: "<ul style ='color:white;'><li>Some tips for working with charts</li><br/></ul>",
			},
			{
				xtype: 'button',
				text: 'Hide',
				id: 'hidehelp',
				iconCls: 'backspace',
				iconMask: true,
				docked: 'top',
				width: 120,
				pack: 'center',
				ui: 'action',
				style: 'margin: 10px;'
			}
		],
	}
});