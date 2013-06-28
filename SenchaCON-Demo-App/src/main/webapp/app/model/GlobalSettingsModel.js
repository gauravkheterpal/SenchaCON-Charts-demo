Ext.define('ReplayAnalytics.model.GlobalSettingsModel', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
		         { name: 'NumberOfPanels', type: 'text'},
		         { name: 'InterestingMoments', type: 'text'},
		         { name: 'ReplayComments', type: 'text'},
		         { name: 'ReplaySpeed', type: 'text'},	
		         { name: 'InterestingMomentType3Setting', type: 'text'},
		         { name: 'InterestingMomentType1Setting', type: 'text'},
		         { name: 'InterestingMomentType2Setting', type: 'text'},
		         { name: 'InterestingMomentType4Setting', type: 'text'},
		] 
	}
});