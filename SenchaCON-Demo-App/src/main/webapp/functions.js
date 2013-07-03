var developerMode = true;
var showAllLogs = false;

var infoString = 'Last updated June 25th, 2013';

var emailBody_part1 = 'Replay Analytics is a great way to animate time sequenced data.\n\nCheck out these Replay Analytics:\n\n';
var emailBody_part2 = '\n\nUse the navigation at the bottom of the application to Play, Fast forward, pause or rewind the animation.\n' +
					'"Interesting Moments" in the data will appear automatically.\n\n\n'+
					'Sincerely,\n\nThe Replay Analytics Team\nReplay Analytics is a Mind over Metrics application. Copyright 2013. All rights reserved.';

function logMessage(message){
	if (developerMode && showAllLogs){
		console.log(message);
	}
}

function logInfo(message){
	if (developerMode){
		console.info(message);
	}
}

function showLoadingMask(){
	Ext.Viewport.setMasked({
        xtype: 'loadmask',
        message: 'Loading..',
    });
}

function hideLoadingMask(){
	Ext.Viewport.setMasked(false);
}

function saveData(name, value) {
	if (name.indexOf('getUnifiedData') != 0){
		return;
	}
    if (typeof(localStorage) != 'undefined') {
    	//localStorage.removeItem(name);
    	try{
    		localStorage.setItem(name, value);
    	} catch(err){
    		console.info('localstorage failed.' + err);
    		try{
    			sessionStorage.setItem(name, value);
    		} catch(err){
    			console.info('sessionstorage failed' + err);
    			createCookie(name, value, 300);
    		}
    	}  
    } else {
    	createCookie(name, value, 300);
    }
}

function loadData(name) {
    var temp_value = null;
    if (typeof(localStorage) != 'undefined') {
    		temp_value = localStorage.getItem(name);        
    } else if (typeof(sessionStorage) != 'undefined') {
    	temp_value = sessionStorage.getItem(name);
    }    
    else {
        temp_value = readCookie(name);
    }
    return temp_value;
}

function eraseData(name) {
    if (typeof(localStorage) != 'undefined') {
        localStorage.removeItem(name);
    } else {
         eraseCookie(name);
    }
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

function refreshPage(){
	document.location.reload(true);
}

function clearStore(storeName){
	var store = Ext.getStore(storeName);
	store.getProxy().clear();
	store.data.clear();
	store.sync();
	return;
}

function resetSettings(){
	clearStore('UserSettings1');
	clearStore('UserSettings2');
	clearStore('UserSettings3');
	clearStore('UserSettings4');
	//clearStore('GlobalSettingsStore');
	refreshPage();
}

function clearAllStores(){
	clearStore('UserSettings1');
	clearStore('UserSettings2');
	clearStore('UserSettings3');
	clearStore('UserSettings4');
	clearStore('GlobalSettingsStore');
}

function verifyString(string){
	
}