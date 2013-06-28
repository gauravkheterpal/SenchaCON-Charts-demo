Ext.define('ReplayAnalytics.view.SliderHelpPanel', {
	extend: 'Ext.Panel',
	xtype: 'sliderhelppanel',
	config: {
		baseCls: 'SliderHelpPanel',
		html: "<div align='center'><h1 style='color:white'>Draggable slider control for dates of charts. Just tap, hold, and drag.</h1></div>",
		hidden: true,
		width: 160,
		height: 92,
		style: 'background: #00a1de'
	}
})