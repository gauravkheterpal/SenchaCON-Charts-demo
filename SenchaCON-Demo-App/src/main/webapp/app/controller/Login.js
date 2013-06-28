var loginController = undefined;
var simpleLoadingScreen = '<div><img width="50px" src="lib/images/loading.gif" alt="Please wait"></div>';

Ext.define('ReplayAnalytics.controller.Login', {
	extend : 'Ext.app.Controller',
	xtype: 'logincontroller',
	requires: [
		'ReplayAnalytics.view.DashboardGridRow',
		'ReplayAnalytics.view.AddDashboardThumbnail',
	],
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
			'loginButton' : 'button[id=loginsubmitbutton]',
			'logoutButton' : 'button[id=logoutbutton]',
			'goBackButton' : 'button[id=gobackbutton]',
			'saveDashboardButton' : 'button[id=savedashboardbutton]',
			'clearButton' : 'button[id=clearloginpanelbutton]',
			'loginScreen' : 'loginscreen',
			'dashboardScreen' : 'dashboardscreen',
			'dashboardGrid' : 'panel[id=dashboardgrid]',
			'loginPanel' : 'loginpanel',
			'userName' : 'emailfield[id=usernamefield]',
			'password' : 'passwordfield[id=passwordfield]',
			'rememberMe' : 'checkboxfield[id=remembermecheck]',
			'mainScreen' : 'replayanalyticsmain',
			'toggleDashboardFunction' : 'segmentedbutton[id=editsharedashboards]',
			'saveDashboardDialog': 'savedashboarddialog',
			'saveDashboardSubmit' : 'button[id=savedashboardsubmit]',
			'closeSaveDashboardDialog' : 'button[id=closesavedashboarddialog]',
			'dashboardTitle' : 'textfield[id=dashboardtitlefield]',
			'mainTitleBar': 'replayanalyticstitlebar',
			'shareDashboardDialog': 'sharedashboarddialog',
			'closeShareDashboardDialog': 'button[id=closesharedashboarddialog]',
			'emailDashboardLink': 'button[id=emaildashboardlink]',
			'dashboardShareLinkField': 'textareafield[id=dashboardlinkfield]',
			'editDashboardToggle' : 'button[id=editdashboardtogglebutton]',
			'shareDashboardToggle' : 'button[id=sharedashboardtogglebutton]',
			'viewDashboardToggle' : 'button[id=viewdashboardtoggle]',
			'shareDashboardButton' : 'button[id=sharedashboardbutton]',
			'openInNewTabButton' : 'button[id=openinnewtabbutton]',
			'loginRedirectButton' : 'button[id=loginredirectbutton]',
			'bookmarkDashboardButton' : 'button[id=bookmarkdashboardbutton]',
			'userNameLabel': 'label[id=usernamelabel]',
			'userNameLabel2': 'label[id=usernamelabel2]',
		},
		control: {
			'loginButton' : {
				tap : 'submitLogin'				
			},
			'logoutButton' : {
				tap: 'doLogout',
			},
			'clearButton' : {
				tap: 'clearFields',
			},
			'goBackButton' : {
				tap: 'showDashboardGrid',
			},
			'toggleDashboardFunction' : {
				toggle: 'toggleDashboardFunction',
			},
			'saveDashboardButton' : {
				tap: 'saveDashboard',
			},
			'saveDashboardSubmit' : {
				tap: 'saveDashboardSubmit',
			},
			'closeSaveDashboardDialog' : {
				tap: 'closeSaveDashboardDialog',
			},
			'closeShareDashboardDialog' : {
				tap: 'closeShareDashboardDialog',
			},
			'emailDashboardLink' : {
				tap: 'emailDashboardLink',
			},
			'shareDashboardButton' : {
				tap: 'showDashboardShareLink',
			},
			'openInNewTabButton' : {
				tap: 'openInNewTab',
			},
			'loginRedirectButton': {
				tap: 'loginRedirect',
			},
			'bookmarkDashboardButton': {
				tap: 'bookmarkSharedDashboard',
			}
		}
	},
	
	launch: function(){
		loginController = this;
		$mainController = loginController.getApplication().getController('Main');
		loginController.handleButtonTextsForScreenSize();
		Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, {buffer: 50 });	
		this.checkForURLQUeryString();
		this.checkForUserSession();
	},
	
	checkForURLQUeryString: function(){
		var urlObj = Ext.Object.fromQueryString(location.search.substring(1));
		var uid = urlObj.uid;
		if (urlObj.redirectUrl != undefined && urlObj.redirectUrl != ''){
			//window.location = urlObj.redirectUrl;
			ReplayAnalytics.app.redirect = true;
			ReplayAnalytics.app.redirectUrl = decodeURIComponent(urlObj.redirectUrl);
			this.checkForUserSession();
		}
		else if (urlObj.uid != undefined && urlObj.uid != ''){
			//loginController.showSharedDashboard(urlObj.uid);
			ReplayAnalytics.app.publicMode = true;
			ReplayAnalytics.app.uniqueDashboardId = urlObj.uid;
		} else {
			//this.checkForUserSession();
		}
	},
	
	handleOrientationChange: function(viewport, orientation, width, height){
		if(!loginController.getDashboardScreen().isHidden()){
			loginController.renderDashboardThumbnails();
			loginController.toggleDashboardFunction();
		}
		loginController.handleButtonTextsForScreenSize();		
	},
	
	handleButtonTextsForScreenSize: function(){
		var windowWidth = Ext.Viewport.windowWidth;
		if (windowWidth >= 769 && windowWidth <= 1024 ){
			loginController.getApplication().getController('Main').getSettingsButton().setText('');
			loginController.getApplication().getController('Main').getGlobalSettingsButton().setText('Global');
			loginController.getApplication().getController('Main').getGlobalSyncButton().items.items[0].setText('Global Sync');
			loginController.getSaveDashboardButton().setText('');
			loginController.getGoBackButton().setText('');
			loginController.getShareDashboardButton().setText('');
		} else if (windowWidth <= 768){
			loginController.getApplication().getController('Main').getSettingsButton().setText('');
			loginController.getApplication().getController('Main').getGlobalSettingsButton().setText('');
			loginController.getApplication().getController('Main').getGlobalSyncButton().items.items[0].setText('');
			loginController.getSaveDashboardButton().setText('');
			loginController.getGoBackButton().setText('');
			loginController.getShareDashboardButton().setText('');
		} else {
			loginController.getApplication().getController('Main').getSettingsButton().setText('Settings');
			loginController.getApplication().getController('Main').getGlobalSettingsButton().setText('Global Settings');
			loginController.getApplication().getController('Main').getGlobalSyncButton().items.items[0].setText('Global Sync');
			loginController.getSaveDashboardButton().setText('Save');
			loginController.getGoBackButton().setText('My Replays');
			loginController.getShareDashboardButton().setText('Share');
		}
	},
	
	submitLogin: function(){
		//Ext.Viewport.setMasked({ html: simpleLoadingScreen });
		showLoadingMask();
		var userName = this.getUserName().getValue();
		var password = this.getPassword().getValue();
		var showError = false;
		var errorMessage = '';
		if (userName == '' || password == ''){
			errorMessage = 'All fields are required.';
			showError = true;
		} 
		else {
			Ext.Ajax.request({  
				url: 'login.do',  
	            method: 'POST',
	            params: {
	            	userName: userName,
	            	password: password,
	            },
	            success: this.decodeLoginData,
	            failure: function(response) {
               		hideLoadingMask();
               		logMessage('Failure Logging in.');
               },
			});			
		}		
		if (showError){
			this.showMessageBox('Login Error', errorMessage);
		}
	},
	
	showDashboardGrid: function(){
		loginController.getApplication().getController('Main').clearAllPanels();
		loginController.getApplication().getController('Main').getGlobalSyncButton().setPressedButtons([false]);
		this.getLoginScreen().hide();
		this.getMainScreen().hide();
		this.getDashboardScreen().show();
		this.getDashboardGrid().show();
		this.getUserDashboards();
		ReplayAnalytics.app.uniqueDashboardId = undefined;
		ReplayAnalytics.app.publicMode = false;
		clearAllStores();
		ReplayAnalytics.app.setDefaultValues();
		ReplayAnalytics.app.currentDashboard = undefined;
		try{
			window.history.pushState("", "", location.pathname);
		} catch(err){			
		}
		if(ReplayAnalytics.app.currentUserSession != undefined){
			if (ReplayAnalytics.app.currentUserSession.firstName != undefined){
				loginController.getUserNameLabel().setHtml('Welcome ' + ReplayAnalytics.app.currentUserSession.firstName);
				loginController.getUserNameLabel2().setHtml('Welcome ' + ReplayAnalytics.app.currentUserSession.firstName);
			}
		}
	},
	
	showMainScreen: function(){
		loginController.getDashboardScreen().hide();
		loginController.getMainScreen().show();
		loginController.getApplication().getController('Main').loadStores();
		/*if (!developerMode){
			var task = Ext.create('Ext.util.DelayedTask', function() {
				task.cancel();
				loginController.getApplication().getController('Main').loadStores();
			}, this);
			task.delay(3000);
		}*/		
	},
	
	showMessageBox: function(title, message){
		hideLoadingMask();
		Ext.Msg.alert(title, message, this.handleMessageBox);
	},
	
	handleMessageBox: function(){
	},
	
	doLogin: function(){
		this.showDashboardGrid();
	},
	
	doLogout: function(){
		this.getDashboardScreen().hide();
		this.getPassword().setValue('');
		this.getLoginScreen().show();
		this.clearUserSession();
	},
	
	clearFields: function(){
		this.getUserName().setValue('');
		this.getPassword().setValue('');
		this.getRememberMe().setChecked(false);
		ReplayAnalytics.app.currentUser = undefined;
	},
	
	decodeLoginData: function(response){
		hideLoadingMask();
		var responseJSON = Ext.JSON.decode(response.responseText.trim());
		if (responseJSON != undefined){
			if (responseJSON.error != undefined){
				loginController.showMessageBox('Login Error' , responseJSON.description);
				loginController.clearUserSession();
			} else {
				ReplayAnalytics.app.currentUserSession = responseJSON;
				if (loginController.getRememberMe().isChecked()){
					loginController.saveUserSession(response.responseText, responseJSON.expiryDate);					
				}	
				if (ReplayAnalytics.app.redirect && ReplayAnalytics.app.redirectUrl != undefined){
					window.location = ReplayAnalytics.app.redirectUrl;
				} else if (ReplayAnalytics.app.publicMode && ReplayAnalytics.app.uniqueDashboardId != undefined){
					loginController.showSharedDashboard(ReplayAnalytics.app.uniqueDashboardId);
				}else {
					loginController.doLogin();
				}				
			}
		}
	},
	
	checkForUserSession: function(){		
		var cookie = readCookie(ReplayAnalytics.app.sessionCookie);
		if (cookie != null){
			var cookieData = Ext.JSON.decode(cookie);
			if (cookieData != null){
				//Ext.Viewport.setMasked({ html: simpleLoadingScreen });
				showLoadingMask();
				Ext.Ajax.request({			  
		            url: 'checkSession.do',
		            method: 'POST',
		            params: {
		            	userId: cookieData.userId,
		            	accessKey: cookieData.accessKey, 
		            },
		            success: this.decodeLoginData,
		            failure: function(response) {
	               		hideLoadingMask();
	               		logMessage('Failure Checking Session.');
	               },
				});	
			}			
		} else if (ReplayAnalytics.app.publicMode && ReplayAnalytics.app.uniqueDashboardId != undefined){
			loginController.showSharedDashboard(ReplayAnalytics.app.uniqueDashboardId);
		}
	},
	
	saveUserSession: function(cookieData, expiryDate){
		var validity = 7;
		createCookie(ReplayAnalytics.app.sessionCookie, cookieData, validity);
	},
	
	clearUserSession: function(){
		eraseCookie(ReplayAnalytics.app.sessionCookie);
	},
	
	saveDashboard: function(){
		this.getSaveDashboardDialog().show();
		if (ReplayAnalytics.app.currentDashboard != undefined && ReplayAnalytics.app.currentDashboard.dashboardTitle != undefined){
			loginController.getDashboardTitle().setValue(ReplayAnalytics.app.currentDashboard.dashboardTitle);
		}
	},
	
	handleDashboardSave: function(response){
		hideLoadingMask();
		var responseJSON = Ext.JSON.decode(response.responseText.trim());
		if (responseJSON != undefined){
			if (responseJSON.error != undefined){
				loginController.showMessageBox('Error', responseJSON.description);
			} else {
				ReplayAnalytics.app.currentDashboard = responseJSON.dashboard;
				var flag = false;
				for (i=0; i<ReplayAnalytics.app.userDashboardDetails.length; i++){
					if (ReplayAnalytics.app.userDashboardDetails[i].dashboardId == responseJSON.dashboard.dashboardId){
						ReplayAnalytics.app.userDashboardDetails[i] = responseJSON.dashboard;
						flag = true;
					}
				}
				if (!flag){
					ReplayAnalytics.app.userDashboardDetails[ReplayAnalytics.app.userDashboardDetails.length] = responseJSON.dashboard;
				}
				loginController.showMessageBox('Success', responseJSON.description);				
			}
		}
	},
	
	saveDashboardSubmit: function(){
		this.closeSaveDashboardDialog();
		loginController.getApplication().getController('Main').checkForConfiguredGraphPanels();
		if (ReplayAnalytics.app.currentUserSession != null){
			//Ext.Viewport.setMasked({ html: loadingScreen });
			showLoadingMask();
			var dashboardId = undefined;
			var dashboardTitle = this.getDashboardTitle().getValue();
			var isShared = true;
			if (ReplayAnalytics.app.currentDashboard != undefined){
				dashboardId = ReplayAnalytics.app.currentDashboard.dashboardId;
			}
			Ext.Ajax.request({			  
	            url: 'saveDashbaord.do',
	            method: 'POST',
	            params: {
	            	userId: ReplayAnalytics.app.currentUserSession.userId,
	            	accessKey: ReplayAnalytics.app.currentUserSession.accessKey, 
	            	dashboardId: dashboardId,
	            	databaseName: new Array(ReplayAnalytics.app.databaseSetting),
	            	filterToggle: new Array(ReplayAnalytics.app.filterToggle),
	            	dashboardTitle: dashboardTitle,
	            	isShared: isShared,
	            	panelSettings: new Array(ReplayAnalytics.app.panelSettings),
	            	panel1Data: ReplayAnalytics.app.panelData[1],
	            	panel2Data: ReplayAnalytics.app.panelData[2],
	            	panel3Data: ReplayAnalytics.app.panelData[3],
	            	panel4Data: ReplayAnalytics.app.panelData[4],
	            	isChartConfigured: new Array(ReplayAnalytics.app.isChartConfigured),
	            	chartTypes: new Array(ReplayAnalytics.app.chartTypes),
	            	graphTitles: new Array(ReplayAnalytics.app.graphTitle),
	            	xAxis: new Array(ReplayAnalytics.app.xs),
	            	yAxis: new Array(ReplayAnalytics.app.ys),
	            	groupBys: new Array(ReplayAnalytics.app.groupBys),
	            	granularities: new Array(ReplayAnalytics.app.granularities),
	            	accumulate: new Array(ReplayAnalytics.app.accumulate),
	            	startDates: new Array(ReplayAnalytics.app.startDate),
	            	endDates: new Array(ReplayAnalytics.app.currentEndDate),
	            	activePanels: ReplayAnalytics.app.numberActivePanels,
	            	replaySpeed: ReplayAnalytics.app.replaySpeed,
	            	interestingMomentSetting: ReplayAnalytics.app.interestingMoments,
	            	replayCommentsSetting: ReplayAnalytics.app.replayCommentsSetting,
	            	type1Setting: ReplayAnalytics.app.interestingMomentType1Setting,
	            	type2Setting: ReplayAnalytics.app.interestingMomentType2Setting,
	            	type3Setting: ReplayAnalytics.app.interestingMomentType3Setting,
	            	type4Setting: ReplayAnalytics.app.interestingMomentType4Setting,
	            	informanceUserFilter: new Array(filterController.encodeFilterJSONForSaving('InformanceUser')),
	            	informanceReasonFilter: new Array(filterController.encodeFilterJSONForSaving('reason')),
	            	informanceSetFilter: new Array(filterController.encodeFilterJSONForSaving('set')),
	            	informancePartFilter: new Array(filterController.encodeFilterJSONForSaving('InformancePart')),
	            	infinityQSUserFilter: new Array(filterController.encodeFilterJSONForSaving('InfinityQSUser')),
	            	infinityQSTestFilter: new Array(filterController.encodeFilterJSONForSaving('Test')),
	            	infinityQSQPMFilter: new Array(filterController.encodeFilterJSONForSaving('Name')),
	            	infinityQSPartFilter: new Array(filterController.encodeFilterJSONForSaving('InfinityQSPart')),
	            	infinityQSProcessFilter: new Array(filterController.encodeFilterJSONForSaving('Process')),
	            },
	            success: this.handleDashboardSave,
	            failure: function(response) {
               		hideLoadingMask();
               		logMessage('Failure Saving Dashboard.');
               },
			});			
		}
	},
	
	closeSaveDashboardDialog: function(){
		this.getSaveDashboardDialog().hide();
	},
	
	getUserDashboards: function(){
		//Ext.Viewport.setMasked({ html: loadingScreen });
		showLoadingMask();
		Ext.Ajax.request({			  
            url: 'getUserDashbaords.do',
            method: 'POST',
            params: {
            	userId: ReplayAnalytics.app.currentUserSession.userId,            	
            },
            success: this.handleUserDashboardsData,
            failure: function(response) {
           		hideLoadingMask();
           		logMessage('Failure Getting User Dashboards.');
           },
		});	
	},
	
	fetchDashboardDetails: function(dashboardId){
		//Ext.Viewport.setMasked({ html: loadingScreen });
		showLoadingMask();
		for (i = 0; i < ReplayAnalytics.app.userDashboardDetails.length; i++){
			if (ReplayAnalytics.app.userDashboardDetails[i].dashboardId == dashboardId){
				ReplayAnalytics.app.currentDashboard = ReplayAnalytics.app.userDashboardDetails[i];
				loginController.showDashboard(ReplayAnalytics.app.userDashboardDetails[i]);
				return;
			}
		}		
		var userId = ReplayAnalytics.app.currentUserSession.userId;
		Ext.Ajax.request({			  
            url: 'getUserDashbaordData.do',
            method: 'POST',
            params: {
            	dashboardId: dashboardId,   
            	userId: userId,
            },
            success: this.handleUserDashboardDetails,
            failure: function(response) {
           		hideLoadingMask();
           		logMessage('Failure Getting Dashboard data.');
           },
		});	
	},
	
	handleUserDashboardsData: function(response){
		hideLoadingMask();
		var responseJSON = Ext.JSON.decode(response.responseText);
		if (responseJSON.error != undefined){
			ReplayAnalytics.app.userDashboards = new Array();
		} else {
			ReplayAnalytics.app.userDashboards = responseJSON;
		}
		loginController.renderDashboardThumbnails();
	},
	
	handleUserDashboardDetails: function(response){		
		var responseJSON = Ext.JSON.decode(response.responseText);
		if (responseJSON.error != undefined){
			ReplayAnalytics.app.currentDashboard = undefined;
			if (responseJSON.error == '508'){
				Ext.Msg.alert('ReplayAnalytics &#153;', responseJSON.description, function(){
					location.search = '';
				});
			} else {
				Ext.Msg.alert('ReplayAnalytics &#153;', responseJSON.description, Ext.emptyFn);
			}			
		} else {
			ReplayAnalytics.app.currentDashboard = responseJSON;
			ReplayAnalytics.app.userDashboardDetails[ReplayAnalytics.app.userDashboardDetails.length] = responseJSON;
			loginController.showDashboard(ReplayAnalytics.app.currentDashboard);
		}
		hideLoadingMask();
	},
	
	showBlankDashboard: function(){
		//Ext.Viewport.setMasked({ html: loadingScreen });
		showLoadingMask();
		clearAllStores();
		ReplayAnalytics.app.setDefaultValues();
		ReplayAnalytics.app.currentDashboard = undefined;
		loginController.getMainTitleBar().setTitle('Replay Analytics &#153;');
		loginController.getDashboardTitle().setValue('');
		loginController.showMainScreen();		
	},
	
	renderDashboardThumbnails: function(){
		var thmubnailWidth = 290;
		loginController.getDashboardGrid().removeAll();
		var numberOfDashboards = ReplayAnalytics.app.userDashboards.length;
		var gridRow = new Array();
		var gridIndex = 0;
		gridRow[gridIndex] = Ext.create('ReplayAnalytics.view.DashboardGridRow');
		loginController.getDashboardGrid().show();
		loginController.getDashboardGrid().add(gridRow[gridIndex]);
		gridRow[gridIndex].show();
		if (numberOfDashboards == 0){			
			newPanel = Ext.create('ReplayAnalytics.view.AddDashboardThumbnail');
			newPanel.element.on({
				tap: {fn: loginController.showBlankDashboard},
			});
			gridRow[gridIndex].add(newPanel);
		} else{
			var maxRowWidth = gridRow[gridIndex].element.getWidth();
			var numberOfThumbsInOneRow = (maxRowWidth/thmubnailWidth) | 0;
			var numberOfGrids = Math.ceil((numberOfDashboards + 1) / numberOfThumbsInOneRow);
			loginController.getDashboardGrid().element.setHeight(thmubnailWidth * numberOfGrids);
			var dashboardInCurrentRow = 0;
			for (i = 0; i < numberOfDashboards; i++){
				if (!(dashboardInCurrentRow < numberOfThumbsInOneRow)){
					gridIndex++;
					gridRow[gridIndex] = Ext.create('ReplayAnalytics.view.DashboardGridRow');
					gridRow[gridIndex].element.setTop(thmubnailWidth * gridIndex);
					loginController.getDashboardGrid().add(gridRow[gridIndex]);
					gridRow[gridIndex].show();
					dashboardInCurrentRow = 0;					
				}
				var dashboardData = ReplayAnalytics.app.userDashboards[i];
				var newPanel = Ext.create('ReplayAnalytics.view.DashboardThumbnail');	
				newPanel.setData(i);
				newPanel.items.items[2].setHtml('<div style="font-size: 17px;">' + dashboardData.dashboardTitle + 
						'</div><br /><div style="font-size: 13px;">' + dashboardData.dateModified + '</div>');
				if (dashboardData.isBookmarkedDashboard){
					newPanel.items.items[0].items.items[2].show();
				} else if (dashboardData.isSharedWithOthers){
					newPanel.items.items[0].items.items[1].show();
				}
				if (dashboardData.isUpdated){
					newPanel.items.items[0].items.items[0].show();
				}
				newPanel.setDashboardIndex(i);
				newPanel.element.on({ tap: {fn: loginController.onDashboardClick}, });
				dashboardInCurrentRow++;
				gridRow[gridIndex].add(newPanel);
			}
			if (i == numberOfDashboards){
				if (dashboardInCurrentRow == numberOfThumbsInOneRow){
					gridIndex++;
					gridRow[gridIndex] = Ext.create('ReplayAnalytics.view.DashboardGridRow');
					gridRow[gridIndex].element.setTop(thmubnailWidth * gridIndex);
					loginController.getDashboardGrid().add(gridRow[gridIndex]);
					gridRow[gridIndex].show();
					dashboardInCurrentRow = 0;		
				}
				newPanel = Ext.create('ReplayAnalytics.view.AddDashboardThumbnail');
				newPanel.element.on({
					tap: {fn: loginController.showBlankDashboard},
				});
				gridRow[gridIndex].add(newPanel);
			}
		}
	},
	
	deleteDashboard: function(dashboardData){
		Ext.Msg.show({
			   title: 'Delete',
			   message: 'Are you sure you want to delete the dashboard titled \'' + dashboardData.dashboardTitle + '\' from your library?',
			   width: 300,
			   buttons: Ext.MessageBox.YESNO,
			   fn: function(buttonId) {
			       if (buttonId == 'yes'){
			    	   Ext.Ajax.request({			  
			               url: 'deleteUserDashbaord.do',
			               method: 'POST',
			               params: {
			            	   userId: ReplayAnalytics.app.currentUserSession.userId, 
			            	   dashboardId: dashboardData.dashboardId,
			            	   isBookmarkedDashboard: dashboardData.isBookmarkedDashboard,
			               },
			               success: loginController.handleDashboardDelete,
			               failure: function(response) {
			               		hideLoadingMask();
			               		logMessage('Failure Deleting Dashboard.');
			               },
			   			});
			       }
			   }
		});	
	},
	
	handleDashboardDelete: function(response){
		var json = Ext.JSON.decode(response.responseText);
		Ext.Msg.alert('ReplayAnalytics &#153;', json.description, Ext.emptyFn);
		loginController.getToggleDashboardFunction().setPressedButtons([true, false, false]);
		ReplayAnalytics.app.isDashboardEditMode = false;
		ReplayAnalytics.app.isDashboardShareMode = false;
		loginController.getUserDashboards();
	},
	
	onDashboardClick: function(){
		var index = Ext.ComponentQuery.query('panel[id=' + this.id + ']')[0].getDashboardIndex();
		if (ReplayAnalytics.app.isDashboardEditMode){
			loginController.deleteDashboard(ReplayAnalytics.app.userDashboards[index]);
		} else if (ReplayAnalytics.app.isDashboardShareMode) {
			ReplayAnalytics.app.currentDashboard = ReplayAnalytics.app.userDashboards[index];
			loginController.showDashboardShareLink();
		} else {
			loginController.fetchDashboardDetails(ReplayAnalytics.app.userDashboards[index].dashboardId);
		}		
	},
	
	showDashboard: function(dashboardData){	
		clearAllStores();
		var databasesToCache = new Array();
		if (dashboardData != undefined){
			if (dashboardData.dashboardTitle != undefined){
				loginController.getMainTitleBar().setTitle(dashboardData.dashboardTitle);
			} else {
				loginController.getMainTitleBar().setTitle('Replay Analytics &#153;');
			}				
			ReplayAnalytics.app.currentDashboard = dashboardData;
			if (dashboardData.globalSettings != undefined){
				loginController.loadGlobalSettingsFromData(dashboardData.globalSettings);
			}
			if (dashboardData.panel1Settings != undefined && dashboardData.panel1Settings.id != undefined){
				loginController.loadSettingsFromData(dashboardData.panel1Settings, 1);
				databasesToCache[1] = dashboardData.panel1Settings.databaseName;
				loginController.getApplication().getController('Filter').loadFilterSettingsFromPanelSettings(dashboardData.panel1Settings.filters);
				if (dashboardData.panel1Settings.panelData != undefined && dashboardData.panel1Settings.panelURL != undefined){
					eraseData(dashboardData.panel1Settings.panelURL);
					saveData(dashboardData.panel1Settings.panelURL, Ext.JSON.encode(dashboardData.panel1Settings.panelData));
				}
			}
			if (dashboardData.panel2Settings != undefined && dashboardData.panel2Settings.id != undefined){
				loginController.loadSettingsFromData(dashboardData.panel2Settings, 2);
				databasesToCache[2] = dashboardData.panel1Settings.databaseName;
				loginController.getApplication().getController('Filter').loadFilterSettingsFromPanelSettings(dashboardData.panel2Settings.filters);
				if (dashboardData.panel2Settings.panelData != undefined && dashboardData.panel2Settings.panelURL != undefined){
					eraseData(dashboardData.panel2Settings.panelURL);
					saveData(dashboardData.panel2Settings.panelURL, Ext.JSON.encode(dashboardData.panel2Settings.panelData));
				}
			}
			if (dashboardData.panel3Settings != undefined && dashboardData.panel3Settings.id != undefined){
				loginController.loadSettingsFromData(dashboardData.panel3Settings, 3);
				databasesToCache[3] = dashboardData.panel1Settings.databaseName;
				loginController.getApplication().getController('Filter').loadFilterSettingsFromPanelSettings(dashboardData.panel3Settings.filters);
				if (dashboardData.panel3Settings.panelData != undefined && dashboardData.panel3Settings.panelURL != undefined){
					eraseData(dashboardData.panel3Settings.panelURL);
					saveData(dashboardData.panel3Settings.panelURL, Ext.JSON.encode(dashboardData.panel3Settings.panelData));
				}
			}
			if (dashboardData.panel4Settings != undefined && dashboardData.panel4Settings.id != undefined){
				loginController.loadSettingsFromData(dashboardData.panel4Settings, 4);
				databasesToCache[4] = dashboardData.panel1Settings.databaseName;
				loginController.getApplication().getController('Filter').loadFilterSettingsFromPanelSettings(dashboardData.panel4Settings.filters);
				if (dashboardData.panel4Settings.panelData != undefined && dashboardData.panel4Settings.panelURL != undefined){
					eraseData(dashboardData.panel4Settings.panelURL);
					saveData(dashboardData.panel4Settings.panelURL, Ext.JSON.encode(dashboardData.panel4Settings.panelData));
				}
			}
			//loginController.showMainScreen();
			loginController.getApplication().getController('DatabaseTable').cacheDatabaseTableDataForDashboard(databasesToCache);
		}
	},
	
	loadGlobalSettingsFromData: function(globalSettingsData){
		var globalStore;
		globalStore = [{'NumberOfPanels': globalSettingsData.activePanels,'InterestingMoments': globalSettingsData.interestingMoment,'ReplayComments':globalSettingsData.replayCommentsSetting,'ReplaySpeed': globalSettingsData.replaySpeed, 'InterestingMomentType3Setting': globalSettingsData.type3Setting, 'InterestingMomentType1Setting': globalSettingsData.type1Setting, 'InterestingMomentType2Setting': globalSettingsData.type2Setting, 'InterestingMomentType4Setting': globalSettingsData.type4Setting}];
		Ext.getStore('GlobalSettingsStore').setData(globalStore);
		Ext.getStore('GlobalSettingsStore').sync();
	},
	
	loadSettingsFromData: function(panelSettings, panelNumber){
		var tempStore;
		tempStore = [{'Database': panelSettings.databaseName,'GraphTitle': panelSettings.graphTitle,'XAxis':panelSettings.xAxis,'YAxis':panelSettings.yAxis,'GroupBy':panelSettings.groupBy,'BubbleSize':'','Granularity':panelSettings.granularity,'ChartType':panelSettings.chartType,'StartDate':panelSettings.startDate,'EndDate':panelSettings.endDate,'InterestingMoments':'','Accumulate':panelSettings.accumulate,'FilterToggle': panelSettings.filterToggle}];
		Ext.getStore('UserSettings'+panelNumber).setData(tempStore);
		Ext.getStore('UserSettings'+panelNumber).sync();
	},
	
	toggleDashboardFunction: function(){
		if (loginController.getEditDashboardToggle() == loginController.getToggleDashboardFunction().getPressedButtons()[0]){
			ReplayAnalytics.app.isDashboardShareMode = false;
			ReplayAnalytics.app.isDashboardEditMode = true;
		} else if (loginController.getShareDashboardToggle() == loginController.getToggleDashboardFunction().getPressedButtons()[0]) {
			ReplayAnalytics.app.isDashboardShareMode = true;
			ReplayAnalytics.app.isDashboardEditMode = false;
		} else {
			ReplayAnalytics.app.isDashboardShareMode = false;
			ReplayAnalytics.app.isDashboardEditMode = false;
		}
		var deleteIcons = Ext.ComponentQuery.query('container[customId=dashboard-delete-icon]');
		if(ReplayAnalytics.app.isDashboardEditMode){
			for (i = 0; i < deleteIcons.length; i++){
				deleteIcons[i].show();
			}
			Ext.ComponentQuery.query('adddashboardthumbnail')[0].hide();
		} else if (ReplayAnalytics.app.isDashboardShareMode){
			for (i = 0; i < deleteIcons.length; i++){
				deleteIcons[i].hide();
			}		
			Ext.ComponentQuery.query('adddashboardthumbnail')[0].hide();
		} else {
			for (i = 0; i < deleteIcons.length; i++){
				deleteIcons[i].hide();
			}		
			Ext.ComponentQuery.query('adddashboardthumbnail')[0].show();
		}
	},
	
	showSharedDashboard: function(uid){
		loginController.getLoginScreen().hide();
		loginController.fetchDashboardWithUID(uid);
	},
	
	fetchDashboardWithUID: function(uid){
		showLoadingMask();
		ReplayAnalytics.app.publicMode = true;
		var userId = undefined;
		try {
			userId = ReplayAnalytics.app.currentUserSession.userId;
		} catch(err){
		}		
		Ext.Ajax.request({			  
            url: 'getDashboardDataFromUniqueID.do',
            method: 'POST',
            params: {
            	uniqueId: uid,
            	userId: userId,
            },
            success: this.handleUserDashboardDetails,
		});	
	},
	
	closeShareDashboardDialog: function(){
		loginController.getShareDashboardDialog().hide();
	},
	
	emailDashboardLink: function(){
		var emailSubject = 'Replay Analytics : ' + ReplayAnalytics.app.currentDashboard.dashboardTitle;
		var emailBody = encodeURIComponent(emailBody_part1 + loginController.getDashboardShareLinkField().getValue() + emailBody_part2) ;
		window.location = 'mailto:?subject=' + emailSubject + '&body=' + emailBody;
	},
	
	editDashboardToggle: function(){
		
		loginController.toggleDashboardFunction();
	},
	
	showDashboardShareLink: function(){
		if (ReplayAnalytics.app.currentDashboard == undefined){
			loginController.showMessageBox('Error', 'Sorry, you can\'t share a dashboard until you have saved it.');
		} else {
			loginController.getShareDashboardDialog().show();
			loginController.getDashboardShareLinkField().setValue(window.location.toString() + '?uid=' + ReplayAnalytics.app.currentDashboard.uuid);
			//loginController.getDashboardShareLinkField().select();
		}				
	},
	
	openInNewTab: function(){
		url = loginController.getDashboardShareLinkField().getValue();
		if (url != undefined && url != ''){
			window.open(url, '_blank');
			//window.focus();
		}		
	},
	
	bookmarkSharedDashboard: function(){
		showLoadingMask();
		Ext.Ajax.request({			  
            url: 'bookmarkDashboard.do',
            method: 'POST',
            params: {
            	userId: ReplayAnalytics.app.currentUserSession.userId,
            	dashboardId: ReplayAnalytics.app.currentDashboard.dashboardId,
            },
            success: this.handleDashboardBookmark,
		});
	},	
	
	handleDashboardBookmark: function(response){
		var json = Ext.JSON.decode(response.responseText);
		Ext.Msg.alert('ReplayAnalytics &#153;', json.description, Ext.emptyFn);
	},

	loginRedirect: function(){
		window.location = location.protocol + '//' + location.host + location.pathname + '?redirectUrl=' + encodeURIComponent(location.toString());
	},
});