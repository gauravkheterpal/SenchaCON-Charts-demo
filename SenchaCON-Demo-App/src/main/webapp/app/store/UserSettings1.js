Ext.define("ReplayAnalytics.store.UserSettings1", {
	extend : 'Ext.data.Store',
	requires: ['ReplayAnalytics.model.UserSettings'],
	config: {
		model: 'ReplayAnalytics.model.UserSettings',
		proxy: {
			type: 'localstorage',
			id: 'usersettings1'
		}
	}
})