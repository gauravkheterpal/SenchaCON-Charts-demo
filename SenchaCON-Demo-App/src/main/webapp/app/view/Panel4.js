Ext.define('ReplayAnalytics.view.Panel4', {
	extend: 'Ext.Panel',
	xtype: 'panel4',
	config: {
		layout: {type: 'vbox', pack: 'center'},
    	flex: 1,
    	style: "background-color: white; color:black",
    	items: [
{
	xtype: 'addchartpanel4',
	fullscreen: true,
	width:'100%',
	height:'100%',
},
    	        /*{
    	        	xtype: 'carousel',
    	        	id: 'carousel4',
    	        	direction: 'horizontal',
    	        	fullscreen: true,
    	        	width: '100%',
    	        	 hidden: true,
    	        	height: '100%',
    	        	items: [
    	        	        {
    	        	        	xtype: 'addchartpanel4',
    	        	        },    	        	        
    	        	      ]
    	        }*/
    	]
	}
});