Ext.define('ReplayAnalytics.view.FilterFieldsPanel', {
	extend: 'Ext.Panel',
	xtype: 'filterfieldspanel',
	requires: [
	           'Ext.Toolbar',					       					       	   
	],
	config: {
		modal: true,
		layout: 'fit',
		zIndex: 20,
		hideOnMaskTap: true,
		width: 300,
		height: 300,
		centered: true,
		hidden: true,
		items: [
					{
						xtype: 'list',
						id: 'filterfieldslist',
						scrollable: 'vertical',
						itemTpl: '{text}',
					}
		]
	}
});	