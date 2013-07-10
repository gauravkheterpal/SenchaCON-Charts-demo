Ext.define('SenchaCon2013Demo.view.AddChartPanel4', {
	extend: 'Ext.Panel',
	xtype: 'addchartpanel4',
	fullscreen: true,	
	config: {
		layout: {type: 'vbox', pack: 'center'},
    	id: 'addchartpanel4',  
    	cls: 'add-chart-panel-style',
    	items: [
    	        {
    	        	xtype: 'panel',
    	        	fullscreen: true,
    	        	centered: true,
    	        	style: 'background-color: transparent; cursor: pointer;',
    	        	items: [
								{
									xtype: 'image',
									id: 'chart4Image',
								    hidden: false,
									autoShow: true,
								    width: '180px',
								    height: '180px',
									style: 'width: 180px; height: 180px; background-size: 100%;',
									src: 'lib/images/chart-icon.png'
								},
								{
									xtype: 'button',					
									iconCls: 'add',
									html: 'Add Chart',
									width: 150,
									ui: 'action',
									id:'chart4Button',
									style: 'font-size: 14px; font-weight: normal; margin-left: 15px;',					        	
								},
    	        	        ]
    	        }
    	]
	}
});