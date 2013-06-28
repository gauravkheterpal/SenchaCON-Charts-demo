Ext.define('ReplayAnalytics.view.Panel1', {
	extend: 'Ext.Panel',
	xtype: 'panel1',
	fullscreen: true,
	config: {
		id: 'Panel1',
		layout: {type: 'vbox', pack: 'center'},
    	flex: 1,
    	style: 'padding-bottom:20px;',
    	items: [
    	        {
    	        	xtype: 'carousel',
    	        	id: 'carousel1',
    	        	direction: 'horizontal',
    	        	fullscreen: true,
    	        	cls: 'carousel-style',
    	        	width: '100%',
    	        	height: '100%',
    	        	items: [
    	        	        {
    	        	        	xtype: 'addchartpanel1',
    	        	        },    	        	        
    	        	       ]
    	        }
    	]
	}
});