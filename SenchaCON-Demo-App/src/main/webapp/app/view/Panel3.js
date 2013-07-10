Ext.define('SenchaCon2013Demo.view.Panel3', {
	extend: 'Ext.Panel',
	xtype: 'panel3',
	config: {
		layout: {type: 'vbox', pack: 'center'},
    	flex: 1,
    	style: "background-color: white; color:black",
    	items: [
{
	xtype: 'addchartpanel3',
	fullscreen: true,
	width:'100%',
	height:'100%',
}, 
    	        
    	]
	}
});