Ext.define('ReplayAnalytics.model.UserProfileModel', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
		         { name: 'UserID', type: 'text'},
		         { name: 'UserName', type: 'text'},
		         { name: 'AccessKey', type: 'text'},	
		         { name: 'SessionID', type: 'text'},
		         { name: 'UserRole', type: 'text'},
		] 
	}
});