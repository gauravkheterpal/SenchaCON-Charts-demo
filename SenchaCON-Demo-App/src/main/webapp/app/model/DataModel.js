Ext.define('ReplayAnalytics.model.DataModel', {
	extend: 'Ext.data.Model',
	xtype: 'datamodel',
	config: {
		fields: [			
			{ name: 'length', type: 'int'},	
			{ name: 'groupByBar1', type: 'int'},
			{ name: 'groupByBar2', type: 'int'},
			{ name: 'groupByBar3', type: 'int'},
			{ name: 'groupByBar4', type: 'int'},
			{ name: 'Other', type: 'int'},
		] 
	}
});