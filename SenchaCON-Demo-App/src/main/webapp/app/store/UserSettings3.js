Ext.define("ReplayAnalytics.store.UserSettings3", {
	extend : 'Ext.data.Store',
	requires: ['ReplayAnalytics.model.UserSettings'],
	config: {
		model: 'ReplayAnalytics.model.UserSettings',
		proxy: {
			type: 'localstorage',
			id: 'usersettings3'
		}
	}
})