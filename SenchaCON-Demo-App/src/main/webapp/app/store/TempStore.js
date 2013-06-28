Ext.define("ReplayAnalytics.store.TempStore", {
	extend : 'Ext.data.Store',
	requires: ['ReplayAnalytics.model.DataModel'],
	config: {
		model: 'ReplayAnalytics.model.DataModel',
		proxy: {
			type: 'localstorage',
			id: 'tempstore'
		}
	}
})