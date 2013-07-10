Ext.define('SenchaCon2013Demo.view.FourPanelLayout', {
	extend: 'Ext.Panel',
	xtype: 'fourpanellayout',
	requires: [
	           'SenchaCon2013Demo.view.TopTwoPanelLayout',
	           'SenchaCon2013Demo.view.BottomTwoPanelLayout'
	],
	config: {
		layout: {type: 'vbox',},
		autoShow: true,
		id: 'fourpanellayout',
		style:'margin:10px; border-radius:10px;',
		align: 'stretch',
		flex: 1,
		items: [
		        {
		        	xtype: 'toptwopanellayout'
		        },
		        {
		        	xtype: 'bottomtwopanellayout'
		        }
		]
	}
})