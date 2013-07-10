Ext.define('SenchaCon2013Demo.view.TopTwoPanelLayout', {
	extend: 'Ext.Panel',
	xtype: 'toptwopanellayout',
	requires: [
	           'SenchaCon2013Demo.view.Panel1',
	           'SenchaCon2013Demo.view.Panel2'
	],
	config: {
		layout: {type: 'hbox', pack: 'center', align: 'stretch'},
		flex: 1,
		style: "background-color: white; color:white",
		items: [
		        {
		        	xtype: 'panel1'
		        },
		        {
		        	xtype: 'panel2'
		        }
		]
	}
})