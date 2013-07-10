Ext.define("SenchaCon2013Demo.store.TempStore", {
	extend : 'Ext.data.Store',
	requires: ['SenchaCon2013Demo.model.DataModel'],
	config: {
		model: 'SenchaCon2013Demo.model.DataModel',
		proxy: {
			type: 'localstorage',
			id: 'tempstore'
		}
	}
})