Ext.define('ReplayAnalytics.view.SettingsHelpPanel', {
	extend: 'Ext.Panel',
	xtype: 'settingshelppanel',
	config: {
		baseCls: 'SettingsHelpPanel',
		html: '<div align="center"><h1 style="color:white;">Configure settings like title, x-axis, y-axis, start date, end date, etc. for selected chart.</h1></div>',
		hidden: true,
		width: 250,
		//height: 70,
		style: 'background: #00a1de'
	}
})