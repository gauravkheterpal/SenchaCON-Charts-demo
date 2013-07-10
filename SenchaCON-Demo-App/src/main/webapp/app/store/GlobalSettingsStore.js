Ext.define("SenchaCon2013Demo.store.GlobalSettingsStore", {
	extend : 'Ext.data.Store',
	requires: ['SenchaCon2013Demo.model.GlobalSettingsModel'],
	config: {
		model: 'SenchaCon2013Demo.model.GlobalSettingsModel',
		proxy: {
			type: 'localstorage',
			id: 'globalsettings'
		}
	}
})