Ext.define("ReplayAnalytics.store.UserSettings2", {
	extend : 'Ext.data.Store',
	requires: ['ReplayAnalytics.model.UserSettings'],
	config: {
		model: 'ReplayAnalytics.model.UserSettings',
		proxy: {
			type: 'localstorage',
			id: 'usersettings2'
		}
	}
})