Ext.define('ReplayAnalytics.view.Panel2', {
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
    	       /* {
    	        	xtype: 'carousel',
    	        	id: 'carousel2',
    	        	direction: 'horizontal',
    	        	fullscreen: true,
    	        	 hidden: true,
    	        	width: '100%',
    	        	height: '100%',
    	        	items: [
    	        	        {
    	        	        	xtype: 'addchartpanel2',
    	        	        },    	        	        
    	        	       ]
    	        }*/
    	]
	}
});