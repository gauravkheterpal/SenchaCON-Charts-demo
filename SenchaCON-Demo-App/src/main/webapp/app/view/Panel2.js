Ext.define('SenchaCon2013Demo.view.Panel2', {
	extend: 'Ext.Panel',
	xtype: 'panel2',
	config: {
		layout: {type: 'vbox', pack: 'center'},
    	flex: 1,
    	style: "background-color: white; color:black",
    	items: [
{
	xtype: 'addchartpanel2',
	fullscreen: true,
	width:'100%',
	height:'100%',
},
    	       
    	]
	}
});