Ext.define('ReplayAnalytics.view.GlobalSyncHelpPanel', {
	extend: 'Ext.Panel',
	xtype: 'globalsynchelppanel',
	config: {
		baseCls: 'GlobalSyncHelpPanel',
		html: "<div align='center'><h1 style='color:white'>Toggle button for synchronizing dates of all charts</h1></div>",
		hidden: true,
		width: 250,
		//height: 70,
		style: 'background: #00a1de'
	}
})