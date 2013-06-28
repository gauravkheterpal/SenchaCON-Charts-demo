Ext.define("ReplayAnalytics.store.GlobalSettingsStore", {
	extend : 'Ext.data.Store',
	requires: ['ReplayAnalytics.model.GlobalSettingsModel'],
	config: {
		model: 'ReplayAnalytics.model.GlobalSettingsModel',
		proxy: {
			type: 'localstorage',
			id: 'globalsettings'
		}
	}
})