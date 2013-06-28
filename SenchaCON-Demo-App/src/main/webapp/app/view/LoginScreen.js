Ext.define('ReplayAnalytics.view.LoginScreen', {
	extend: 'Ext.Container',
	xtype: 'loginscreen',
	config: {
		fullscreen: true,
		scrollable: {
			direction: 'vertical',
			directionLock: false,
		},
		layout: {type: 'vbox', pack: 'start', align: 'center'},
		style: 'background-color: white;',
		flex: 1,
		items: [
		        {
		        	xtype: 'image',
		            width: 400,
		            height: 167,
		    		style: "width: 100%; padding: 10px; margin-top: 30px; background-size: 100%; background-color: transparent;",
		    		src:'lib/images/mind-over-metrics-logo-white.png'
		        },
		        {
		        	xtype: 'container',
		        	id: 'logocontainer',
		        	layout: 'vbox',
		        	height: 30,
		        	style: 'margin-top: 20px; height: 30px; color: black; font-color: black; font-size: 22px;',
		        	items: [
		        	        {
		        	        	html: 'Login',		        	        	
		        	        },
		        	],
		        },
		        {
		        	xtype: 'container',
		        	layout: 'vbox',
		    		width: 450,
		    		height: 250,
		    		scroll: 'vertical',
		    		style: 'margin-top: 50px; border: 5px solid #F0F0F0; border-radius: 5px;',
		    		items: [
		    		        { 
		    		        	xtype: 'spacer' ,
		    		        	height: '5px',
		    		        	style: 'background-color: #F0F0F0;',
		    		        },
		    		        {
		    		        	xtype: 'emailfield',
		    					label: 'User Name',	
		    					labelAlign: 'left',
		    					id: 'usernamefield',
		    					labelWidth: '40%',
		    		        },	
		    		        { 
		    		        	xtype: 'spacer',
		    		        	height: '5px',
		    		        	style: 'background-color: #F0F0F0;',
		    		        },
		    		        {
		    		        	xtype: 'passwordfield',
		    					label: 'Password',	
		    					labelAlign: 'left',
		    					id: 'passwordfield',
		    					labelWidth: '40%',
		    		        },
		    		        { 
		    		        	xtype: 'spacer',
		    		        	height: '5px',
		    		        	style: 'background-color: #F0F0F0;',
		    		        },
		    		        {
		    		            xtype: 'checkboxfield',
		    		            name : 'remembermecheck',
		    		            label: 'Remember Me?',
		    		            labelAlign: 'left',
		    		            id: 'remembermecheck',
		    		            value: 'remember',
		    		            labelWidth: '40%',
		    		            style: 'background-color: #F7F7F7;',
		    		            checked: true,
		    		        },
		    		        { 
		    		        	xtype: 'spacer',
		    		        	height: '5px',
		    		        	style: 'background-color: #F0F0F0;',
		    		        },
		    				{
		    					xtype: 'container',
		    					style: 'padding: 15px; background-color: #F0F0F0;',
		    					layout: { type: 'hbox', pack: 'justify' },
		    					items: [
		    					        {
		    					        	xtype: 'button',
		    					        	id: 'clearloginpanelbutton',
		    					        	html: 'Clear',
		    					        	align: 'left',
		    					        	iconCls: 'clear',
		    					        },
		    					        {
		    					        	xtype: 'button',
		    					        	id: 'loginsubmitbutton',
		    					        	text: 'Login',
		    					        	ui: 'action',
		    					        	align: 'right',
		    					        	iconCls: 'user',
		    					        }
		    					]
		    				}	        
		    		]
		    	}
		   ]    
	},
});