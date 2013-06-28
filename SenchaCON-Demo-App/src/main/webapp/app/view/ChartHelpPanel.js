Ext.define('ReplayAnalytics.view.ChartHelpPanel', {
	extend: 'Ext.Panel',
	xtype: 'charthelppanel',
	config: {
		baseCls: 'ChartHelpPanel',
		html: '<div align="center"><h1 style="color:white">Tap a panel to select it.</h1></div>',
		hidden: true,
		width: 250,
		//height: 23,
		style: 'background: #00a1de'
	}
})