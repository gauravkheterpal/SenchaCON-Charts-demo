Ext.define('ReplayAnalytics.controller.Help', {
	extend : 'Ext.app.Controller',
	xtype: 'helpcontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
			'helpButton': 'button[id=helpbutton]',
			'helpPanel': 'helppanel',
			'helpPanelHideButton': 'button[id=hidehelp]',
			'settingsHelpPanel': 'settingshelppanel',
			'playbackHelpPanel': 'playbackhelppanel',
			'globalSyncHelpPanel': 'globalsynchelppanel',
			'chartHelpPanel': 'charthelppanel',
			'sliderHelpPanel': 'sliderhelppanel',
			'gestureHelpPanel': 'gesturehelppanel',
			'informationButton': 'button[id=infobutton]',
			'settingsButton': 'button[id=settingsbutton]',
			'pauseButton': 'button[id=PauseButton]',
			'globalSyncButton': 'segmentedbutton[id=globalsynctogglebutton]',
			'chart1': 'chart[id=chart1]',
			'chart2': 'chart[id=chart2]',
			'slider1': 'slider1',
		},
		control: {
			'helpButton': {
				tap: 'showHelpNavigationPage'
			},
			'helpPanelHideButton': {
				tap: 'hideHelpNavigationPage'
			},	
			'informationButton': {
				tap: 'showInformationPanel'
			},
		},
	},
	
	showHelpNavigationPage: function() {
		//this.getHelpPanel().show();
		if (ReplayAnalytics.app.isHelpPanelShowing){
			ReplayAnalytics.app.isHelpPanelShowing = false;
			this.hideHelpNavigationPage();
		} else {
			var index = ReplayAnalytics.app.currentActivePanelIndex;
			ReplayAnalytics.app.isHelpPanelShowing = true;
			this.getSettingsHelpPanel().showBy(this.getSettingsButton());
			this.getPlaybackHelpPanel().showBy(this.getPauseButton());
			this.getGlobalSyncHelpPanel().showBy(this.getGlobalSyncButton());
			this.getChartHelpPanel().showBy(Ext.ComponentQuery.query('panel2')[0]);
			this.getSliderHelpPanel().showBy(Ext.ComponentQuery.query('slider'+index)[0]);
			this.getGestureHelpPanel().showBy(Ext.ComponentQuery.query('panel1')[0]);			
		}
		
	},
	hideHelpNavigationPage: function() {
		this.getHelpPanel().hide();
		this.getSettingsHelpPanel().hide();
		this.getPlaybackHelpPanel().hide();
		this.getGlobalSyncHelpPanel().hide();
		this.getChartHelpPanel().hide();
		this.getSliderHelpPanel().hide();
		this.getGestureHelpPanel().hide();
	},
	
	showInformationPanel: function() {
		Ext.Msg.alert('ReplayAnalytics &#153;', infoString, Ext.emptyFn);
	},
});