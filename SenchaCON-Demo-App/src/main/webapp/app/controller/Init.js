var initController = undefined;
var simpleLoadingScreen = '<div><img width="50px" src="lib/images/loading.gif" alt="Please wait"></div>';

Ext.define('SenchaCon2013Demo.controller.Init', {
	extend : 'Ext.app.Controller',
	xtype: 'initcontroller',
	config: {
		refs: {
			'initController': 'initcontroller',
			'mainController': 'maincontroller',
			'mainScreen' : 'senchademomain',
		},
	},
	
	launch: function(){
		initController = this;
		clearAllStores();
		this.showMainScreen();
	},
	
	showMainScreen: function(){
		initController.getMainScreen().show();
		initController.getApplication().getController('Main').loadStores();	
	},
	
	showMessageBox: function(title, message){
		hideLoadingMask();
		Ext.Msg.alert(title, message, this.handleMessageBox);
	},
});