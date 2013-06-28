Ext.define('ReplayAnalytics.view.InterestingMomentFoundDialog', {
	extend: 'Ext.Panel',
	xtype: 'imfounddialog',
	config: {
		modal: true,
		hidden: true,
		centered: true,
		width: 250,
		height: 125,
		layout: { type:'vbox', align: 'center', pack: 'top' },
		stopMaskTapEvent: false,
		xIndex: 100,
		fullscreen: false,
		style: 'background-image: url(lib/images/callout-image.png); background-color: transparent; padding-left:12px; background-size: 100%;',
	}
});