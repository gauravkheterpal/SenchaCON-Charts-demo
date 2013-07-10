Ext.define('SenchaCon2013Demo.model.UserSettings', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
		    { name: 'Database', type: 'text'},
			{ name: 'GraphTitle', type: 'text'},
			{ name: 'XAxis', type: 'text'},
			{ name: 'YAxis', type: 'text'},
			{ name: 'GroupBy', type: 'text'},
			{ name: 'BubbleSize', type: 'text'},
			{ name: 'Granularity', type: 'text'},
			{ name: 'ChartType', type: 'text'},
			{ name: 'StartDate', type: 'Date'},
			{ name: 'EndDate', type: 'Date'},
			{ name: 'InterestingMoments', type: 'text'},
			{ name: 'Accumulate', type: 'text'},
			{ name: 'FilterToggle', type: 'text'},
		] 
	}
});