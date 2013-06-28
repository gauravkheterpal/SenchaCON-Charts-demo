Ext.define('ReplayAnalytics.view.GestureHelpPanel', {
	extend: 'Ext.Panel',
	xtype: 'gesturehelppanel',
	config: {
		baseCls: 'GestureHelpPanel',
		html: "<div align='center'><h1 style='color:white'>Swipe Left and Right to reveal IM points list, comments and chart data table.</h1></div>",
		hidden: true,
		width: 250,
		//height: 120,
		style: 'background: #00a1de'
	}
})