Ext.define('ReplayAnalytics.view.ManualIMCallout', {
	extend: 'Ext.Panel',
	xtype: 'manualimcallout',
	config: {
		modal: true,
		hidden: true,
		centered: true,
		width: 250,
		height: 125,
		layout: { type:'vbox', align: 'center', pack: 'top' },
		hideOnMaskTap: true,
		xIndex: 100,
		fullscreen: false,
		style: 'background-image: url(lib/images/callout-image-inverted.png); background-color: transparent; padding-left:12px; background-size: 100%;',
	}
});