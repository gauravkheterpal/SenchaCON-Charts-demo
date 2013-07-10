Ext.define('SenchaCon2013Demo.view.BottomTwoPanelLayout', {
	extend: 'Ext.Panel',
	xtype: 'bottomtwopanellayout',
	requires: [
	           'SenchaCon2013Demo.view.Panel3',
	           'SenchaCon2013Demo.view.Panel4',
	],
	config: {
		layout: 'hbox',
		flex: 1,
		style: "background-color: white; color:white",
		items: [
		        {
		        	xtype: 'panel3'
		        },
		        {
		        	xtype: 'panel4'
		        }
		]
	}
})