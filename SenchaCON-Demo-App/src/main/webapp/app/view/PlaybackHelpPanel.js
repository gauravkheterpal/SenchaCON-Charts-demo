Ext.define('ReplayAnalytics.view.PlaybackHelpPanel', {
	extend: 'Ext.Panel',
	xtype: 'playbackhelppanel',
	config: {
		baseCls: 'PlaybackHelpPanel',
		html: "<div align='center'><h1 style='color:white'>Playback control for charts include pause, play, step forward/backward, and skip.</h1></div>",
		hidden: true,
		width: 250,
		//height: 70,
		style: 'background: #00a1de'
	}
})