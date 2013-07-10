var loginController = undefined;
var simpleLoadingScreen = '<div><img width="50px" src="lib/images/loading.gif" alt="Please wait"></div>';

Ext.define('SenchaCon2013Demo.controller.Login', {
	extend : 'Ext.app.Controller',
	xtype: 'logincontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
			'mainScreen' : 'senchademomain',
		},
	},
	
	launch: function(){
		loginController = this;
		clearAllStores();
		this.showMainScreen();
	},
	
	showMainScreen: function(){
		loginController.getMainScreen().show();
		loginController.getApplication().getController('Main').loadStores();	
	},
	
	showMessageBox: function(title, message){
		hideLoadingMask();
		Ext.Msg.alert(title, message, this.handleMessageBox);
	},
});