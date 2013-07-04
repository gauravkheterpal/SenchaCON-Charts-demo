/*
Copyright(c) 2013
*/
Ext.define('ReplayAnalytics.view.FilterFieldsPanel', {
	extend: 'Ext.Panel',
	xtype: 'filterfieldspanel',
	requires: [
	           'Ext.Toolbar',					       					       	   
	],
	config: {
		modal: true,
		layout: 'fit',
		zIndex: 20,
		hideOnMaskTap: true,
		width: 300,
		height: 300,
		centered: true,
		hidden: true,
		items: [
					{
						xtype: 'list',
						id: 'filterfieldslist',
						scrollable: 'vertical',
						itemTpl: '{text}',
					}
		]
	}
});	
Ext.define('ReplayAnalytics.view.FilterListPanel', {
	extend: 'Ext.Panel',
	xtype: 'filterlistpanel',
	requires: [
	           'Ext.Toolbar',			       					       	   
	],
	config: {
		modal: true,
		layout: 'vbox',
		zIndex: 40,
		width: 350,
		height: 360,
		centered: true,
		hidden: true,
		items: [
			{
				xtype: 'list',
				id: 'filterlist',
				scrollable: 'vertical',
				width: 350,
				height: 300,
				//disableSelection: true,
				itemTpl: '<div style="border: 1px solid transparent;"><label><input type="checkbox" class="x-form-check-focus" id="{Field}" name="filter" checked="{Checked}" > <span class="Field">{FieldLabel} </span></label></div>'
				//itemTpl: '<div class="x-component-outer"><div class="x-field-input"><input class="x-input-el x-input-checkbox" type="checkbox" label="{Field}" id="{Field}"><div class="x-clear-icon"></div><div class="x-field-mask"></div></div></div>',
			},
			{
				xtype: 'toolbar',
				docked: 'bottom',
				layout: { type: 'hbox', pack: 'justify' },
				items: [
				        {
				        	xtype: 'button',
				        	id: 'filterlistcancelbutton',
				        	//text: 'Cancel',
				        	align: 'left',
				        	iconCls: 'delete',
				        },
				        {
				        	xtype: 'button',
				        	id: 'filterlistselectunselectallbutton',
				        	text: 'Unselect All',
				        	align: 'left',
				        	iconCls: 'list',
				        },
				        {
				        	xtype: 'button',
				        	id: 'filterlistdonebutton',
				        	//text: 'Done',
				        	ui: 'action',
				        	align: 'right',
				        	iconCls: 'done',
				        }
				]
			}
		]
	}
});
Ext.define('ReplayAnalytics.view.ManualIMCallout', {
	extend: 'Ext.Panel',
	xtype: 'manualimcallout',
	config: {
		modal: true,
		hidden: true,
		centered: true,
		width: 250,
		height: 125,
		layout: { type:'vbox', align: 'center', pack: 'top' },
		hideOnMaskTap: true,
		xIndex: 100,
		fullscreen: false,
		style: 'background-image: url(lib/images/callout-image-inverted.png); background-color: transparent; padding-left:12px; background-size: 100%;',
	}
});
Ext.define('ReplayAnalytics.view.ManualIMDialog', {
	extend: 'Ext.Panel',
	xtype: 'manualimdialog',
	requires: [
	           'Ext.Toolbar',					       					       	   
	],
	config: {
		layout: 'vbox',
		modal: true,
		zIndex: 10,
		hideOnMaskTap: true,
		centered: true,
		width: 450,
		scroll: 'vertical',
		hidden: true,
		items: [		        
		        {
		            xtype: 'toolbar',
		        	maxHeight: '50px',
		        	docked: 'top',
		        	flex: '1',
		        	title: 'Replay Comment',
		        },
		        { 
		        	xtype: 'spacer',
		        	height: '15px',
		        	style: 'background-color: #F0F0F0;',
		        },
		        {
		        	xtype: 'textareafield',
					label: 'Message',	
					id: 'manualimmessagefield',
					//maxLength: 25,
					labelWidth: '30%',
		        },	
		        { 
		        	xtype: 'spacer',
		        	height: '15px',
		        	style: 'background-color: #F0F0F0;',
		        },
				{
					xtype: 'toolbar',
					layout: { type: 'hbox', pack: 'justify' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'closemanualimdialogbutton',
					        	text: 'Cancel',
					        	align: 'left',
					        	iconCls: 'delete',
					        },
					        {
					        	xtype: 'button',
					        	id: 'savemanualimbutton',
					        	text: 'Save',
					        	ui: 'action',
					        	align: 'right',
					        	iconCls: 'save',
					        }
					]
				}	        
		]
	}
})
Ext.define('ReplayAnalytics.view.ShareDashboardDialog', {
	extend: 'Ext.Panel',
	xtype: 'sharedashboarddialog',
	requires: [
	           'Ext.Toolbar',					       					       	   
	],
	config: {
		layout: 'vbox',
		modal: true,
		zIndex: 10,
		hideOnMaskTap: true,
		centered: true,
		//width: 600,
		scroll: 'vertical',
		hidden: true,
		items: [		        
		        {
		            xtype: 'toolbar',
		        	maxHeight: '50px',
		        	docked: 'top',
		        	flex: '1',
		        	title: 'Share Dashboard',
		        },
		        {
		        	xtype: 'textareafield',	
		        	label: 'Copy and paste this link in a browser window to open the shared dashboard<br />or send the link to anyone you would like to share the Replay Analytics.',
		        	labelAlign: 'top',
					id: 'dashboardlinkfield',
					clearIcon: false,
					readOnly: true,
		        },	
				{
					xtype: 'toolbar',
					layout: { type: 'hbox', pack: 'justify' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'emaildashboardlink',
					        	text: 'Email',
					        	align: 'left',
					        	ui: 'confirm',
					        	iconCls: 'mail',
					        },
					        {
					        	xtype: 'button',
					        	id: 'openinnewtabbutton',
					        	text: 'Open In New Tab',
					        	align: 'left',
					        	ui: 'confirm',
					        	iconCls: 'window',
					        },
					        {
					        	xtype: 'button',
					        	id: 'closesharedashboarddialog',
					        	text: 'Close',
					        	ui: 'action',
					        	align: 'right',
					        	iconCls: 'done',
					        }
					]
				}	        
		]
	}
})
Ext.define('ReplayAnalytics.view.SaveDashboardDialog', {
	extend: 'Ext.Panel',
	xtype: 'savedashboarddialog',
	requires: [
	           'Ext.Toolbar',					       					       	   
	],
	config: {
		layout: 'vbox',
		modal: true,
		zIndex: 10,
		hideOnMaskTap: true,
		centered: true,
		width: 450,
		scroll: 'vertical',
		hidden: true,
		items: [		        
		        {
		            xtype: 'toolbar',
		        	maxHeight: '50px',
		        	docked: 'top',
		        	flex: '1',
		        	title: 'Save Dashboard',
		        },
		        { 
		        	xtype: 'spacer',
		        	height: '15px',
		        	style: 'background-color: #F0F0F0;',
		        },
		        {
		        	xtype: 'textfield',
					label: 'Dashboard Title',	
					id: 'dashboardtitlefield',
					maxLength: 25,
					labelWidth: '40%',
		        },	
		        { 
		        	xtype: 'spacer',
		        	height: '15px',
		        	style: 'background-color: #F0F0F0;',
		        },
				{
					xtype: 'toolbar',
					layout: { type: 'hbox', pack: 'justify' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'closesavedashboarddialog',
					        	text: 'Cancel',
					        	align: 'left',
					        	iconCls: 'delete',
					        },
					        {
					        	xtype: 'button',
					        	id: 'savedashboardsubmit',
					        	text: 'Save',
					        	ui: 'action',
					        	align: 'right',
					        	iconCls: 'save',
					        }
					]
				}	        
		]
	}
})
Ext.define('ReplayAnalytics.view.DashboardGridRow', {
	extend: 'Ext.Container',
	xtype: 'dashboardgridrow',
	config: {
		fullscreen: true,
		hidden: false,
		width: '100%',
		height: '290px',
		layout: {type: 'hbox', pack: 'center', align: 'start'},
		flex: 1,
	},
});
Ext.define('ReplayAnalytics.view.AddDashboardThumbnail', {
	extend: 'Ext.Panel',
	xtype: 'adddashboardthumbnail',
	fullscreen: true,
	config: {
		layout: {type: 'vbox', pack: 'center'},
		width: '250px',
		height: '250px',
		cls: 'thumbnail',
		items: [
    	        {
		        	xtype: 'image',
                    hidden: false,
					autoShow: true,
					centered: true,
                    width: '48px',
                    height: '48px',
					style: 'width: 48px; height: 48px; background-size: 100%;',
					src: 'lib/images/plus-icon-gray.png'
		        },
		        {
		        	docked: 'bottom',
		        	xtype: 'label',
		        	html: 'Add New Dashboard',
		        	style: 'margin-bottom: 5px; font-weight: normal; font-size: 14px;',
		        }	
    	],
	}
});
Ext.define('ReplayAnalytics.view.DashboardThumbnail', {
	extend: 'Ext.Panel',
	xtype: 'dashboardthumbnail',
	fullscreen: true,
	config: {
		layout: {type: 'vbox', pack: 'center'},
		width: '250px',
		dashboardIndex: undefined,
		dashboardId: undefined,
		height: '250px',
		cls: 'thumbnail',
		items: [
		        {
		        	xtype: 'container',
		        	docked: 'top',
		        	layout: {type: 'hbox', pack: 'right',},
		        	items: [
		        	        {
		        	        	xtype: 'container',
		        	        	customId: 'dashboard-updated-icon',
		        	        	style: 'color: white;',
		        	        	hidden: true,
		        	        	align: 'right',
		        	        	layout: {type: 'hbox', pack: 'right',},
		        	        	items: [
		        	        	        {
		        	        	        	xtype: 'image',		        	   
		        	        	        	src: 'lib/images/chat2_white.png',
		        	        	        	align: 'right',
		        	        	        	cls: 'callout-icon-thumbnail',
		        	        	        },
		        	        	        ]				        	
		        	        },
		        	        {
		        	        	xtype: 'container',
		        	        	customId: 'dashboard-shared-icon',
		        	        	style: 'color: white;',
		        	        	hidden: true,
		        	        	align: 'right',
		        	        	layout: {type: 'hbox', pack: 'right',},
		        	        	items: [
		        	        	        {
		        	        	        	xtype: 'image',		        	   
		        	        	        	src: 'lib/images/link-blue-icon.png',
		        	        	        	align: 'right',
		        	        	        	cls: 'dashboard-icon-style',
		        	        	        },
		        	        	        ]				        	
		        	        },
		        	        {
		        	        	xtype: 'container',
					        	customId: 'dashboard-lock-icon',
					        	style: 'color: white;',
					        	hidden: true,
					        	align: 'left',
					        	layout: {type: 'hbox', pack: 'right',},
					        	items: [
					        	        {
					        	        	xtype: 'image',		        	   
					        	        	src: 'lib/images/lock-icon.png',
					        	        	align: 'left',
					        	        	cls: 'dashboard-icon-style',
					        	        },
					        	 ]
		        	        },
		        	        {
					        	xtype: 'container',
					        	customId: 'dashboard-delete-icon',
					        	style: 'color: white;',
					        	hidden: true,
					        	align: 'right',
					        	layout: {type: 'hbox', pack: 'right',},
					        	items: [
					        	        {
					        	        	xtype: 'image',		        	   
					        	        	src: 'lib/images/delete-red-icon.png',
					        	        	align: 'right',
					        	        	cls: 'dashboard-icon-style',
					        	        },
					        	 ]				        	
					        },
		        	 ]
		        },
    	        {
		        	xtype: 'image',
                    hidden: false,
					autoShow: true,
					centered: true,
                    width: '100px',
                    height: '100px',
					style: 'width: 100px; height: 100px; background-size: 100%;',
					src: 'lib/images/chart-icon-big.png'
		        },
		        {
		        	docked: 'bottom',
		        	xtype: 'label',
		        	html: 'Dashboard',
		        	style: 'margin-bottom: 5px; font-weight: normal; font-size: 14px;',
		        }
				
    	]
	}
});
Ext.define('ReplayAnalytics.view.InterestingMomentFoundDialog', {
	extend: 'Ext.Panel',
	xtype: 'imfounddialog',
	config: {
		modal: true,
		hidden: true,
		centered: true,
		width: 250,
		height: 125,
		layout: { type:'vbox', align: 'center', pack: 'top' },
		stopMaskTapEvent: false,
		xIndex: 100,
		fullscreen: false,
		style: 'background-image: url(lib/images/callout-image.png); background-color: transparent; padding-left:12px; background-size: 100%;',
	}
});
Ext.define('ReplayAnalytics.view.DashboardScreen', {
	extend: 'Ext.Container',
	xtype: 'dashboardscreen',
	config: {
		fullscreen: true,
		hiddden: true,
		layout: {type: 'vbox',},
		style: 'background-color:#001919;',
		scrollable: {
			direction: 'vertical',
			directionLock: false,
		},
		items: [
		        {
		        	docked: 'top',
		        	xtype: 'titlebar',
		        	title: 'My Replay Dashboards',
		    		docked: 'top',
		    		layout: 'hbox',
		    		height: '60px',
		    		width: '100%',
		    		items: [
		    		        {
		    		        	xtype: 'image',
		    		        	hidden: false,
		    		        	autoShow: true,
		    		        	docked: 'left',
		    		        	width: '130px',
		    		        	height: '100%',
		    		        	cls: 'replayanalyticslogo',
								src:'lib/images/mind-over-metrics-logo.png'
		    		        },
		    		        {
		    		        	xtype: 'label',
		    		        	id: 'usernamelabel2',
		    		        	docked: 'left',
		    		        	cls: 'usernamelabel',
		    		        	html: 'Welcome',
		    		        },
		    		        {
		    		        	xtype: 'segmentedbutton',
		    		        	id: 'editsharedashboards',
		    		        	align: 'right',
		    		        	allowDepress: false,
		    		        	items: [
		    		        	        {
		    		        	        	id: 'viewdashboardtoggle',
		    		        	        	text: 'View',
		    		        	        	pressed: true,
		    		        	        	iconCls: 'list',
		    		        	        },
		    		        	        {
		    		        	        	id: 'editdashboardtogglebutton',
		    		        	        	text: 'Delete',
		    		        	        	pressed: false,
		    		        	        	iconCls: 'delete',
		    		        	        },
		    		        	        {
		    		        	        	id: 'sharedashboardtogglebutton',
		    		        	        	text: 'Share',
		    		        	        	pressed: false,
		    		        	        	iconCls: 'share',
		    		        	        }
		    		        	]
		    		        },
		    		        {	
		    		        	xtype:'button',
		    		        	id: 'adminbutton',
		    					align: 'right',
		    					text: 'Admin Control Panel',
		    					hidden: true,
		    					iconCls: 'settings',
		    				},
		    		        {	
		    		        	xtype:'button',
		    		        	id: 'infobutton',
		    					align: 'right',
		    					iconCls: 'info',
		    				},
		    				{
		    					xtype:'button',
		    					id: 'logoutbutton',
		    					align: 'right',
		    					text: 'Logout',
		    					iconCls: 'logout',
		    				}
		    		    ]
		        },
		        {
		        	xtype: 'panel',
		        	id: 'dashboardgrid',
		        	config: {
		        		fullscreen: true,
		        		hidden: false,
		        		layout: {type: 'vbox', align: 'center'},
		        		style: 'background-color:#001919; padding: 20px;',
		        		height: '100%',
		        		flex: 1,
		        		items: [
		    		    ]
		        	}
		    	},
		    ]
	},
});
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
Ext.define('ReplayAnalytics.view.HelpPanel', {
	extend: 'Ext.Panel',
	xtype: 'helppanel',
	requires: [
	           'Ext.TitleBar'
	],
	config: {
		modal: true,
		hidden: true,
		centered: true,
		width: 400,
		height: 160,
		//fullscreen: true,
		layout: { type:'vbox', align: 'center', pack: 'center' },
		scroll: 'vertical',
		//hideOnMaskTap: true,
		//stopMaskTapEvent: false,
		xIndex: 100,
		fullscreen: false,
		baseCls: 'HelpPanel',
		style: 'background:black; border: white 3px solid;',
		items:
		[
			{ 
				//dock: 'top',
				xtype: 'toolbar',
				maxHeight: '40px',
				html: "<h1 style='color: white;font-size: 35px; top: 23px'>Help</h1>",
				style: 'background: transparent;'
			},
			{
				html: "<ul style ='color:white;'><li>Some tips for working with charts</li><br/></ul>",
			},
			{
				xtype: 'button',
				text: 'Hide',
				id: 'hidehelp',
				iconCls: 'backspace',
				iconMask: true,
				docked: 'top',
				width: 120,
				pack: 'center',
				ui: 'action',
				style: 'margin: 10px;'
			}
		],
	}
});
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
Ext.define('ReplayAnalytics.view.SettingsPanel', {
	extend: 'Ext.Panel',
	xtype: 'settingspanel',
	requires: [
	           'Ext.Toolbar',					       					       	   
	],
	config: {
		layout: 'vbox',
		modal: true,
		zIndex: 10,
		hideOnMaskTap: true,
		centered: true,
		width: 450,
		scroll: 'vertical',
		hidden: true,
		items: [		        
		        {
		            xtype: 'toolbar',
		        	maxHeight: '50px',
		        	docked: 'top',
		        	flex: '1',
		        	title: 'Panel Settings',
		        },	
		        {
		        	xtype: 'selectfield',
		        	id: 'databaseselectfield',
		        	label: 'Database:',
		        	hidden: true,
		        	value: 'None',
		        	options: [
		        	    {text: '+ Import Excel File', value: 'add_new_data_source'},
		        		{text: 'None Defined', value: 'None'},
		        		]
		        },
		        {
		        	xtype: 'textfield',
		        	id: 'graphtitlefield',
					label: 'Graph Title:',		
					hidden:true,
		        },		 
		        {
		        	xtype:'selectfield',
		        	id: 'charttypefield',
					label: 'Chart Type:', 
					value: 'None',
					options: [
					    {text: 'None', value: 'None'},
						{text: 'Bubble', value: 'scatter'},
						{text: 'Horizontal Bar', value: 'horizontalbar'},
						{text: 'Vertical Bar', value: 'verticalbar'},
						{text: 'Line', value: 'line'},
						{text: 'Pie', value: 'pie'}
					]
		        },
		        {
		        	xtype: 'selectfield',
		        	id: 'xaxisfield',
					label: 'X-Axis:',
					options: [
				        		{text: 'None Defined', value: 'none'},
				        		]
		        },						        
				{
					xtype: 'selectfield',
					id: 'yaxisfield',
					label:'Y-Axis:', 
					options: [
				        		{text: 'None Defined', value: 'none'},
				        		]
				},			
				{
					xtype: 'selectfield',
					id: 'groupbyfield',
					label: 'Group By:',	
					options: [
				        		{text: 'None Defined', value: 'none'},
				        		]
				},
				{
					xtype: 'selectfield',
					id: 'filtersettingtoggle',
					label: 'Filter:',
					value: 'Off',
					hidden: true,
					options: [
						{text: 'On', value: 'On'},
						{text: 'Off', value: 'Off'}
					]
				},				
				{
					xtype:'selectfield',
					id: 'granularityfield',
					label: 'Granularity:',
				},				
				{
					xtype: 'selectfield',
					id: 'accumfield',
					label: 'Accumulate:',
					hidden: true,
					value: 'On',
					options: [
						{text: 'On', value: 'On'},
						{text: 'Off', value: 'Off'}
					]
				},			
				{
					xtype: 'datepickerfield',
					id: 'startdatefield',
					label: 'Start Date:',
					name: 'startdate',
					dateFormat: 'm/d/y',
				},				
				{
					xtype: 'datepickerfield',
					id: 'enddatefield',
					label: 'End Date:',
					name: 'enddate',
					dateFormat: 'm/d/y',
				},						   
				{
					xtype: 'toolbar',
					layout: { type: 'hbox', pack: 'justify' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'clearpanelbutton',
					        	html: 'Clear Panel',
					        	align: 'left',
					        	iconCls: 'clear',
					        },
					        {
								xtype: 'button',
								hidden: true,
								id: 'setfilterbutton',
								html: 'Filters',
								iconCls: 'add',
							},
					        {
					        	xtype: 'button',
					        	id: 'settingscancelbutton',
					        	text: 'Cancel',
					        	align: 'right',
					        	iconCls: 'delete',
					        },
					        {
					        	xtype: 'button',
					        	id: 'settingsdonebutton',
					        	text: 'Done',
					        	ui: 'action',
					        	align: 'right',
					        	iconCls: 'done',
					        }
					]
				}	        
		]
	}
});
Ext.define('ReplayAnalytics.view.ChartHelpPanel', {
	extend: 'Ext.Panel',
	xtype: 'charthelppanel',
	config: {
		baseCls: 'ChartHelpPanel',
		html: '<div align="center"><h1 style="color:white">Tap a panel to select it.</h1></div>',
		hidden: true,
		width: 250,
		//height: 23,
		style: 'background: #00a1de'
	}
})
Ext.define('ReplayAnalytics.view.GestureHelpPanel', {
	extend: 'Ext.Panel',
	xtype: 'gesturehelppanel',
	config: {
		baseCls: 'GestureHelpPanel',
		html: "<div align='center'><h1 style='color:white'>Swipe Left and Right to reveal IM points list, comments and chart data table.</h1></div>",
		hidden: true,
		width: 250,
		//height: 120,
		style: 'background: #00a1de'
	}
})
Ext.define('ReplayAnalytics.view.SliderHelpPanel', {
	extend: 'Ext.Panel',
	xtype: 'sliderhelppanel',
	config: {
		baseCls: 'SliderHelpPanel',
		html: "<div align='center'><h1 style='color:white'>Draggable slider control for dates of charts. Just tap, hold, and drag.</h1></div>",
		hidden: true,
		width: 160,
		height: 92,
		style: 'background: #00a1de'
	}
})
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
Ext.define('ReplayAnalytics.view.TitleBar', {
	extend: 'Ext.TitleBar',
	xtype: 'replayanalyticstitlebar',
	requires: [
	           'Ext.TitleBar'
	],
	config: {
		//title: 'Replay Analytics &#153;',
		title:'SenchaCON-Charts-Demo',
		docked: 'top',
		layout: 'hbox',
		height: '60px',
		width: '100%',
		items: [
		        {
		        	xtype: 'image',
                    hidden: false,
					autoShow: true,
					docked: 'left',
                    width: '130px',
                    height: '100%',
                    hidden: true,
                    cls: 'replayanalyticslogo',
					src:'lib/images/mind-over-metrics-logo.png'
		        },
		        {
		        	xtype: 'label',
		        	id: 'usernamelabel',
		        	docked: 'left',
		        	hidden: true,
		        	cls: 'usernamelabel',
		        	html: 'Welcome',
		        },
		        {
		        	xtype:'button',
		        	id: 'helpbutton',
		        	align: 'right',
		        	hidden: true,
		        	iconCls: 'help',
		        },				
				{
					xtype: 'button',
					id: 'sharedashboardbutton',
					align: 'right',
					text: 'Share',
					hidden: true,
					iconCls: 'share',
				},
				{
					xtype:'button',
					id: 'settingsbutton',
					align: 'right',
					text: 'Settings',
					iconCls: 'settings',
				},
				{
					xtype:'button',
					id: 'globalsettingsbutton',
					align: 'right',
					hidden: true,
					text: 'Global Settings',
					iconCls: 'globe',
				},
				{
		        	xtype: 'button',
		        	id: 'savedashboardbutton',
		        	hidden: true,
		        	iconCls: 'save',
		        	align: 'right',
		        	text: 'Save',
		        },
		        {
		        	xtype:'button',
		        	id: 'loginredirectbutton',
		        	align: 'right',
		        	text: 'Login',
		        	iconCls: 'user',
		        	hidden: true,
		        },
		        {
		        	xtype:'button',
		        	id: 'bookmarkdashboardbutton',
		        	align: 'right',
		        	text: 'Save to My Library',
		        	hidden: true,
		        	iconCls: 'save',
		        },
				{
					xtype:'button',
					id: 'gobackbutton',
					hidden: true,
					align: 'right',
					text: 'My Replays',
					iconCls: 'rightbig',
				},		        
		]
	}
});
Ext.define('ReplayAnalytics.view.GlobalSettingsPanel', {
	extend: 'Ext.Panel',
	xtype: 'globalsettingspanel',
	requires: [
	           'Ext.Toolbar',					       					       	   
	],
	config: {
		layout: 'vbox',
		modal: true,
		zIndex: 10,
		hideOnMaskTap: true,
		centered: true,
		width: 530,
		scroll: 'vertical',
		hidden: true,
		items: [
		        {
		        	xtype: 'toolbar',
		        	docked: 'top',
		        	maxHeight: '50px',
		        	title: 'Global Settings',
		        	flex: 1
		        },
		        {
		        	xtype: 'selectfield',
					label: 'Interesting Moments:',
					id: 'imtogglefield',
					labelWidth: '50%',
					value: 'Off',
					options: [
						{text: 'On', value: 'On'},
						{text: 'Off', value: 'Off'}
					]
		        },
		        {
		        	xtype: 'selectfield',
					label: 'Replay Comments:',
					id: 'replaycommentstogglefield',
					labelWidth: '50%',
					value: 'Off',
					options: [
						{text: 'On', value: 'On'},
						{text: 'Off', value: 'Off'}
					]
		        },
		        {
		        	xtype: 'selectfield',
		        	id: 'replayspeedsetting',
		        	labelWidth: '50%',
		        	label: 'Replay Speed',
		        	value: 'Normal',
		        	options: [
		        		{text: 'Slow', value: '3000'},
		        		{text: 'Normal', value: '2000'},
		        		{text: 'Fast', value: '1000'}
		        	]
		        },
		        {
		        	xtype: 'selectfield',
		        	id: 'activepanelsfield',
		        	label: 'Active Panels:',
		        	labelWidth: '50%',
		        	value: '4',
		        	options: [
		        		{text: '1', value: '1'},
		        		{text: '2', value: '2'},
		        		{text: '4', value: '4'}
		        	]
		        },
		        {
		        	xtype: 'selectfield',
		        	id: 'imtype1setting',
		        	labelWidth: '50%',
		        	label: 'IM Type-1 Mean Deviation',
		        	value: '-1',
		        	options: [
		        	    {text: 'None', value: '-1'},      
		        		{text: '20%', value: '20'},
		        		{text: '30%', value: '30'},
		        		{text: '40%', value: '40'},
		        		{text: '50%', value: '50'},
		        	]
		        },
		        {
		        	xtype: 'selectfield',
		        	id: 'imtype2setting',
		        	labelWidth: '50%',
		        	label: 'IM Type-2 Standard Deviation',
		        	value: '-1',
		        	options: [
		        	    {text: 'None', value: '-1'}, 
		        		{text: '1', value: '1'},
		        		{text: '1.5', value: '1.5'},
		        		{text: '2', value: '2'},
		        		{text: '2.5', value: '2.5'},
		        		{text: '3', value: '3'},
		        	]
		        },
		        {
		        	xtype: 'selectfield',
		        	id: 'imtype3setting',
		        	labelWidth: '50%',
		        	label: 'IM Type-3 Trending Points',
		        	value: '-1',
		        	options: [
		        	    {text: 'None', value: '-1'}, 
		        		{text: '3', value: '3'},
		        		{text: '4', value: '4'},
		        		{text: '5', value: '5'},
		        		{text: '6', value: '6'},
		        		{text: '7', value: '7'},
		        		{text: '8', value: '8'},
		        		{text: '9', value: '9'},
		        		{text: '10', value: '10'},
		        	]
		        },
		        {
		        	xtype: 'selectfield',
		        	id: 'imtype4setting',
		        	labelWidth: '50%',
		        	label: 'IM Type-4 Trending Points',
		        	value: '-1',
		        	options: [
		        	    {text: 'None', value: '-1'}, 
		        		{text: '3', value: '3'},
		        		{text: '4', value: '4'},
		        		{text: '5', value: '5'},
		        		{text: '6', value: '6'},
		        		{text: '7', value: '7'},
		        		{text: '8', value: '8'},
		        		{text: '9', value: '9'},
		        		{text: '10', value: '10'},
		        	]
		        },
		        {
		        	xtype: 'button',
		        	id: 'managedatasourcesbutton',
		        	html: 'Manage Data Sources',
		        	ui: 'action',
		        	style: 'font-size: 14px; margin-left: 120px; margin-right: 120px; margin-top: 10px; margin-bottom: 5px; padding: 5px;',					        	
		        },
		        {
		        	xtype: 'button',
		        	id: 'clearcachebuttonglobalsettings',
		        	html: 'Reset All Local Cache',
		        	ui: 'confirm',
		        	style: 'font-size: 14px; margin-left: 120px; margin-right: 120px; margin-top: 10px; margin-bottom: 5px; padding: 5px;',					        	
		        },					   
				{
					xtype: 'toolbar',
					layout: { type: 'hbox', pack: 'justify' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'globalsettingscancelbutton',
					        	text: 'Cancel',
					        	align: 'left',
					        	iconCls: 'delete',
					        },
					        {
					        	xtype: 'button',
					        	id: 'globalsettingsdonebutton',
					        	text: 'Done',
					        	ui: 'action',
					        	align: 'right',
					        	iconCls: 'done',
					        }
					]
				}	        
		]
	}
})
Ext.define('ReplayAnalytics.model.GlobalSettingsModel', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
		         { name: 'NumberOfPanels', type: 'text'},
		         { name: 'InterestingMoments', type: 'text'},
		         { name: 'ReplayComments', type: 'text'},
		         { name: 'ReplaySpeed', type: 'text'},	
		         { name: 'InterestingMomentType3Setting', type: 'text'},
		         { name: 'InterestingMomentType1Setting', type: 'text'},
		         { name: 'InterestingMomentType2Setting', type: 'text'},
		         { name: 'InterestingMomentType4Setting', type: 'text'},
		] 
	}
});
Ext.define("ReplayAnalytics.store.GlobalSettingsStore", {
	extend : 'Ext.data.Store',
	requires: ['ReplayAnalytics.model.GlobalSettingsModel'],
	config: {
		model: 'ReplayAnalytics.model.GlobalSettingsModel',
		proxy: {
			type: 'localstorage',
			id: 'globalsettings'
		}
	}
})
Ext.define('ReplayAnalytics.model.DataModel', {
	extend: 'Ext.data.Model',
	xtype: 'datamodel',
	config: {
		fields: [			
			{ name: 'length', type: 'int'},	
			{ name: 'groupByBar1', type: 'int'},
			{ name: 'groupByBar2', type: 'int'},
			{ name: 'groupByBar3', type: 'int'},
			{ name: 'groupByBar4', type: 'int'},
			{ name: 'Other', type: 'int'},
		] 
	}
});
Ext.define('ReplayAnalytics.model.UserSettings', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
		    { name: 'Database', type: 'text'},
			{ name: 'GraphTitle', type: 'text'},
			{ name: 'XAxis', type: 'text'},
			{ name: 'YAxis', type: 'text'},
			{ name: 'GroupBy', type: 'text'},
			{ name: 'BubbleSize', type: 'text'},
			{ name: 'Granularity', type: 'text'},
			{ name: 'ChartType', type: 'text'},
			{ name: 'StartDate', type: 'Date'},
			{ name: 'EndDate', type: 'Date'},
			{ name: 'InterestingMoments', type: 'text'},
			{ name: 'Accumulate', type: 'text'},
			{ name: 'FilterToggle', type: 'text'},
		] 
	}
});
Ext.define('ReplayAnalytics.view.Slider0', {
	extend: 'Ext.slider.Slider',
	xtype: 'slider0',
	requires: [
	           'Ext.slider.Slider'
	],
	config: {
		maxWidth: '600px',
    	ui: 'timeline',
    	maxValue: 31,
    	minValue: 0,
    	flex: 1,
    	hidden: false,
    	thumbConfig: {draggable: {translatable: {easingX: {duration: 50, type: 'ease-out'}}}},
	}
});
Ext.define('ReplayAnalytics.view.Slider1', {
	extend: 'Ext.slider.Slider',
	xtype: 'slider1',
	requires: [
	           'Ext.slider.Slider'
	],
	config: {
		maxWidth: '600px',
    	ui: 'timeline',
    	maxValue: 31,
    	minValue: 0,
    	flex: 1,
    	hidden: false,
    	thumbConfig: {draggable: {translatable: {easingX: {duration: 50, type: 'ease-out'}}}},
	}
});
Ext.define('ReplayAnalytics.view.Slider2', {
	extend: 'Ext.slider.Slider',
	xtype: 'slider2',
	requires: [
	           'Ext.slider.Slider'
	],
	config: {
		maxWidth: '600px',
    	ui: 'timeline',
    	maxValue: 31,
    	minValue: 0,
    	flex: 1,
    	hidden: false,
    	thumbConfig: {draggable: {translatable: {easingX: {duration: 50, type: 'ease-out'}}}},
	}
});
Ext.define('ReplayAnalytics.view.Slider4', {
	extend: 'Ext.slider.Slider',
	xtype: 'slider4',
	requires: [
	           'Ext.slider.Slider'
	],
	config: {
		maxWidth: '600px',
    	ui: 'timeline',
    	maxValue: 31,
    	minValue: 0,
    	flex: 1,
    	hidden: false,
    	thumbConfig: {draggable: {translatable: {easingX: {duration: 50, type: 'ease-out'}}}},
	}
});
Ext.define('ReplayAnalytics.view.Slider3', {
	extend: 'Ext.slider.Slider',
	xtype: 'slider3',
	requires: [
	           'Ext.slider.Slider'
	],
	config: {
		maxWidth: '600px',
    	ui: 'timeline',
    	maxValue: 31,
    	minValue: 0,
    	flex: 1,
    	hidden: false,
    	thumbConfig: {draggable: {translatable: {easingX: {duration: 50, type: 'ease-out'}}}},
	}
});
Ext.define('ReplayAnalytics.view.Slider5', {
	extend: 'Ext.slider.Slider',
	xtype: 'slider5',
	requires: [
	           'Ext.slider.Slider'
	],
	config: {
		maxWidth: '600px',
    	ui: 'timeline',
    	maxValue: 31,
    	minValue: 0,
    	flex: 1,
    	hidden: false,
    	thumbConfig: {draggable: {translatable: {easingX: {duration: 50, type: 'ease-out'}}}},
	}
});
Ext.define('ReplayAnalytics.view.AddChartPanel1', {
	extend: 'Ext.Panel',
	xtype: 'addchartpanel1',
	fullscreen: true,	
	config: {
		layout: {type: 'vbox', pack: 'center'},
    	id: 'addchartpanel1',  
    	cls: 'add-chart-panel-style',
    	items: [
    	        {
    	        	xtype: 'panel',
    	        	fullscreen: true,
    	        	centered: true,
    	        	style: 'background-color: transparent; cursor: pointer;',
    	        	items: [
								{
									xtype: 'image',
									id: 'chart1Image',
								    hidden: false,
									autoShow: true,
								    width: '180px',
								    height: '180px',
									style: 'width: 180px; height: 180px; background-size: 100%;',
									src: 'lib/images/chart-icon.png'
								},
								{
									xtype: 'button',					
									iconCls: 'add',
									html: 'Add Chart',
									width: 150,
									ui: 'action',
									id:'chart1Button',
									style: 'font-size: 14px; font-weight: normal; margin-left: 15px;',					        	
								},
    	        	        ]
    	        }
    	]
	}
});
Ext.define('ReplayAnalytics.view.AddChartPanel2', {
	extend: 'Ext.Panel',
	xtype: 'addchartpanel2',
	fullscreen: true,	
	config: {
		layout: {type: 'vbox', pack: 'center'},
    	id: 'addchartpanel2', 
    	cls: 'add-chart-panel-style',
    	items: [
    	        {
    	        	xtype: 'panel',
    	        	fullscreen: true,
    	        	centered: true,
    	        	style: 'background-color: transparent; cursor: pointer;',
    	        	items: [
								{
									xtype: 'image',
									id: 'chart2Image',
								    hidden: false,
									autoShow: true,
								    width: '180px',
								    height: '180px',
									style: 'width: 180px; height: 180px; background-size: 100%;',
									src: 'lib/images/chart-icon.png'
								},
								{
									xtype: 'button',					
									iconCls: 'add',
									html: 'Add Chart',
									width: 150,
									ui: 'action',
									id:'chart2Button',
									style: 'font-size: 14px; font-weight: normal; margin-left: 15px;',					        	
								},
    	        	        ]
    	        }
    	]
	}
});
Ext.define('ReplayAnalytics.view.AddChartPanel3', {
	extend: 'Ext.Panel',
	xtype: 'addchartpanel3',
	fullscreen: true,	
	config: {
		layout: {type: 'vbox', pack: 'center'},
    	id: 'addchartpanel3',   
    	cls: 'add-chart-panel-style',	
    	items: [
    	        {
    	        	xtype: 'panel',
    	        	fullscreen: true,
    	        	centered: true,
    	        	style: 'background-color: transparent; cursor: pointer;',
    	        	items: [
								{
									xtype: 'image',
									id: 'chart3Image',
								    hidden: false,
									autoShow: true,
								    width: '180px',
								    height: '180px',
									style: 'width: 180px; height: 180px; background-size: 100%;',
									src: 'lib/images/chart-icon.png'
								},
								{
									xtype: 'button',					
									iconCls: 'add',
									html: 'Add Chart',
									width: 150,
									ui: 'action',
									id:'chart3Button',
									style: 'font-size: 14px; font-weight: normal; margin-left: 15px;',					        	
								},
    	        	        ]
    	        }
    	]
	}
});
Ext.define('ReplayAnalytics.view.AddChartPanel4', {
	extend: 'Ext.Panel',
	xtype: 'addchartpanel4',
	fullscreen: true,	
	config: {
		layout: {type: 'vbox', pack: 'center'},
    	id: 'addchartpanel4',  
    	cls: 'add-chart-panel-style',
    	items: [
    	        {
    	        	xtype: 'panel',
    	        	fullscreen: true,
    	        	centered: true,
    	        	style: 'background-color: transparent; cursor: pointer;',
    	        	items: [
								{
									xtype: 'image',
									id: 'chart4Image',
								    hidden: false,
									autoShow: true,
								    width: '180px',
								    height: '180px',
									style: 'width: 180px; height: 180px; background-size: 100%;',
									src: 'lib/images/chart-icon.png'
								},
								{
									xtype: 'button',					
									iconCls: 'add',
									html: 'Add Chart',
									width: 150,
									ui: 'action',
									id:'chart4Button',
									style: 'font-size: 14px; font-weight: normal; margin-left: 15px;',					        	
								},
    	        	        ]
    	        }
    	]
	}
});
Ext.define('ReplayAnalytics.view.Panel1', {
	extend: 'Ext.Panel',
	xtype: 'panel1',
	fullscreen: true,
	config: {
		id: 'Panel1',
		layout: {type: 'vbox', pack: 'center'},
    	flex: 1,
    	style: 'padding-bottom:20px; background-color: white; color:black',
    	items: [
{
	xtype: 'addchartpanel1',
	fullscreen: true,
	width:'100%',
	height:'100%',
},
    	       /*{
    	        	xtype: 'carousel',
    	        	id: 'carousel1',
    	        	direction: 'horizontal',
    	        	fullscreen: true,
    	        	cls: 'carousel-style',
    	        	width: '100%',
    	        	 hidden: true,
    	        	height: '100%',
    	        	items: [
    	        	        {
    	        	        	xtype: 'addchartpanel1',
    	        	        },    	        	        
    	        	       ]
    	        }*/
    	]
	}
});
Ext.define('ReplayAnalytics.view.Panel2', {
	extend: 'Ext.Panel',
	xtype: 'panel2',
	config: {
		layout: {type: 'vbox', pack: 'center'},
    	flex: 1,
    	style: "background-color: white; color:black",
    	items: [
{
	xtype: 'addchartpanel2',
	fullscreen: true,
	width:'100%',
	height:'100%',
},
    	       /* {
    	        	xtype: 'carousel',
    	        	id: 'carousel2',
    	        	direction: 'horizontal',
    	        	fullscreen: true,
    	        	 hidden: true,
    	        	width: '100%',
    	        	height: '100%',
    	        	items: [
    	        	        {
    	        	        	xtype: 'addchartpanel2',
    	        	        },    	        	        
    	        	       ]
    	        }*/
    	]
	}
});
Ext.define('ReplayAnalytics.view.Panel3', {
	extend: 'Ext.Panel',
	xtype: 'panel3',
	config: {
		layout: {type: 'vbox', pack: 'center'},
    	flex: 1,
    	style: "background-color: white; color:black",
    	items: [
{
	xtype: 'addchartpanel3',
	fullscreen: true,
	width:'100%',
	height:'100%',
}, 
    	        /*{
    	        	xtype: 'carousel',
    	        	id: 'carousel3',
    	        	direction: 'horizontal',
    	        	fullscreen: true,
    	        	width: '100%',
    	        	 hidden: true,
    	        	height: '100%',
    	        	items: [
    	        	        {
    	        	        	xtype: 'addchartpanel3',
    	        	        },    	        	        
    	        	       ]
    	        }*/
    	]
	}
});
Ext.define('ReplayAnalytics.view.Panel4', {
	extend: 'Ext.Panel',
	xtype: 'panel4',
	config: {
		layout: {type: 'vbox', pack: 'center'},
    	flex: 1,
    	style: "background-color: white; color:black",
    	items: [
{
	xtype: 'addchartpanel4',
	fullscreen: true,
	width:'100%',
	height:'100%',
},
    	        /*{
    	        	xtype: 'carousel',
    	        	id: 'carousel4',
    	        	direction: 'horizontal',
    	        	fullscreen: true,
    	        	width: '100%',
    	        	 hidden: true,
    	        	height: '100%',
    	        	items: [
    	        	        {
    	        	        	xtype: 'addchartpanel4',
    	        	        },    	        	        
    	        	      ]
    	        }*/
    	]
	}
});
Ext.define('ReplayAnalytics.view.AdminPanel', {
	extend: 'Ext.Container',
	xtype: 'adminpanel',
	requires: ['Ext.ux.Fileup'],
	config: {
		fullscreen: true,
		hiddden: true,
		layout: {type: 'vbox',},
		style: 'background-color:#001919;',
		layout: {type: 'vbox', pack: 'start', align: 'center'},
		items: [
		        {
		        	docked: 'top',
		        	xtype: 'titlebar',
		        	title: 'Admin Control Panel',
		    		docked: 'top',
		    		layout: 'hbox',
		    		height: '60px',
		    		width: '100%',
		    		items: [
		    		        {
		    		        	xtype: 'image',
		    		        	hidden: false,
		    		        	autoShow: true,
		    		        	docked: 'left',
		    		        	width: '130px',
		    		        	height: '100%',
		    		        	cls: 'replayanalyticslogo',
								src:'lib/images/mind-over-metrics-logo.png'
		    		        },
		    		        {
		    		        	xtype: 'label',
		    		        	id: 'usernamelabel3',
		    		        	docked: 'left',
		    		        	cls: 'usernamelabel',
		    		        	html: 'Welcome',
		    		        },		    		        
		    				{
		    					xtype:'button',
		    					id: 'gobackbuttonadmin',
		    					align: 'right',
		    					text: 'Back',
		    					iconCls: 'rightbig',
		    				}
		    		    ]
		        },
		    ]
	},
});
Ext.define('ReplayAnalytics.view.DataSourceConfigurationPanel', {
	extend: 'Ext.Panel',
	xtype: 'datasourceconfigurationpanel',
	id: 'datasourceconfigurationpanel',
	config: {
		layout: 'vbox',
		modal: true,
		zIndex: 10,
		hideOnMaskTap: false,
		centered: true,
		width: 600,
		height: 550,
		scrollable: {
			direction: 'vertical',
			directionLock: false,
		},
		hidden: true,
		//style: 'background-color: #f7f7f7;',
		items: [	
		        {
		        	xtype: 'toolbar',
		        	docked: 'top',
		        	title: 'Configure Data Source',
		        },	
		        {
		    		xtype: 'textfield',
		    		style: 'padding: 10px; background-color: rgb(230,230,230); margin: 0px; font-size: 18px;',
		    		id: 'datasourcenamefield',
		    		docked: 'top',
		    		label: 'Data Source Name:',
		        },
		        {
		        	xtype: 'panel',
		        	docked: 'top',
		        	style: 'background-color: rgb(230,230,230); padding-left: 5px; padding-right: 5px; padding-top: 5px; padding-bottom: 10px;',
		        	layout: {type: 'hbox', pack: 'start', align: 'justify'},
		    		items: [
		        	        {
		        	        	xtype: 'label',
		        	        	html: 'Field Name', // Label
		        	        	style: 'padding-left: 5px; padding-right: 5px; background-color: rgb(230,230,230); font-size: 16px; font-weight: bold; text-align: center;',
		        	        	width: 290,
		        	        },
		        	        {
		        	        	xtype: 'label',
		        	        	html: 'Type',
		        	        	style: 'padding-left: 5px; padding-right: 5px; background-color: rgb(230,230,230); font-size: 16px; font-weight: bold; text-align: center;',
		        	        	width: 290,
		        	        },
		        	        ]
		        },
		        {
		        	xtype: 'panel',
		        	id: 'tablefieldscontainer',
		        	style: 'background-color: rgb(235, 235, 235);',
		        	layout: 'vbox',
		        },
		        {
		        	xtype: 'toolbar',
		        	docked: 'bottom',
		        	layout: { type: 'hbox', pack: 'justify' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'canceldatasourceconfigurationebutton',
					        	html: 'Cancel',
					        	align: 'left',
					        	iconCls: 'delete',
					        },
					        {
					        	xtype: 'button',
					        	id: 'adddatasourcefieldmanualbutton',
					        	html: 'Add New Field',
					        	align: 'left',
					        	hidden: true,
					        	iconCls: 'add',
					        },
					        {
					        	xtype: 'button',
					        	id: 'donedatasourceconfigurebutton',
					        	html: 'Finish',
					        	align: 'right',
					        	iconCls: 'rightbig',
					        },
					       ]
		        }
		    ]
	},
});
Ext.define('ReplayAnalytics.view.DataSourceTypeSelectionPanel', {
	extend: 'Ext.Panel',
	xtype: 'datasourcetypeselectionpanel',
	config: {
		layout: 'vbox',
		modal: true,
		zIndex: 10,
		hideOnMaskTap: false,
		centered: true,
		width: 600,
		height: 300,
		scroll: 'vertical',
		hidden: true,
		//style: 'background-color: #f7f7f7;',
		items: [
		        {
		        	xtype: 'toolbar',
		        	docked: 'top',
		        	title: 'Select Data Source',
		        },
		    	{
		    		xtype: 'label',
		    		style: 'margin: 20px;',
		    		html: 'Select the type of data source to be added from the following options:',
		        },	    	
		        {
		    		xtype: 'selectfield',
		    		//style: 'margin: 20px;',
		    		id: 'datasourcetypeselectfield',
		        	label: 'Data Source Types:',
		        	value: 'None',
		        	options: [
		        		{text: 'None Defined', value: 'None'},
		        		{text: 'Excel Spreadsheet', value: 'excel_spreadsheet'},
		        		//{text: 'SQL Database', value: 'sql_database'},
		        		]
		        },
		        {
		        	xtype: 'toolbar',
		        	docked: 'bottom',
		        	layout: { type: 'hbox', pack: 'right' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'donedatasourcetypeselectionbutton',
					        	html: 'Next',
					        	align: 'right',
					        	iconCls: 'rightbig',
					        },
					       ]
		        }
		    ]
	},
});
Ext.define('ReplayAnalytics.view.DataSourceUploadPanel', {
	extend: 'Ext.Panel',
	xtype: 'datasourceuploadpanel',
	requires: ['Ext.ux.Fileup'],
	config: {
		layout: {type: 'vbox', pack: 'start', align: 'center'},
		modal: true,
		zIndex: 10,
		hideOnMaskTap: false,
		centered: true,
		width: 600,
		height: 330,
		scroll: 'vertical',
		hidden: true,
		//style: 'background-color: #f7f7f7;',
		items: [
		        {
		        	xtype: 'toolbar',
		        	docked: 'top',
		        	title: 'Upload Data Source',
		        },
		    	{
		    		xtype: 'label',
		    		style: 'margin: 20px;',
		    		html: 'Please select a data source file..',
		        },
		        {
		    		id: 'selectedfilenamelabel',
		        	xtype: 'label',
		        	height: 10,
		    		style: 'margin-top: 10px; margin-bottom: 10px; font-size: 15px;',
		    		html: '',
		        },
		        {
		    		id: 'fileuploadbutton',
		    		xtype: 'fileupload',
		    		style: 'margin-top: 10px; margin-bottom:10px;',
		    		height: 60,
		    		width: 350,
		    		autoUpload: false,
		    		url: 'uploadDataSourceFile.do'
		        },
		        {
		    		id: 'fileuploadmessage',
		        	xtype: 'label',
		        	height: 10,
		    		style: 'margin-top: 10px; margin-bottom: 20px; color: green; font-size: 15px; font-weight: bold;',
		    		html: '',
		        },
		        {
		        	xtype: 'toolbar',
		        	docked: 'bottom',
		        	layout: { type: 'hbox', pack: 'justify' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'canceldatasourceuploadbutton',
					        	html: 'Cancel',
					        	align: 'left',
					        	iconCls: 'delete',
					        },
					        {
					        	xtype: 'button',
					        	id: 'donedatasourceuploadbutton',
					        	html: 'Next',
					        	align: 'right',
					        	iconCls: 'rightbig',
					        },
					       ]
		        }
		    ]
	},
});
Ext.define('ReplayAnalytics.view.DataSourceManagePanel', {
	extend: 'Ext.Panel',
	xtype: 'datasourcemanagepanel',
	config: {
		layout: {type: 'vbox', pack: 'center', align: 'center'},
		modal: true,
		zIndex: 10,
		hideOnMaskTap: false,
		centered: true,
		width: 450,
		height: 400,
		scroll: 'vertical',
		hidden: true,
		//style: 'background-color: #f7f7f7;',
		items: [
		        {
		        	xtype: 'toolbar',
		        	docked: 'top',
		        	title: 'Manage Data Sources',
		        },
		        {
		        	xtype: 'button',
		        	id: 'adddatasourcemanagepanelbutton',
		        	html: 'Add Data Source',
		        	style: 'margin: 15px 0px; padding: 7px;',
		        	width: 250,
		        	ui: 'confirm',
		        	iconCls: 'add',
		        },
		        {
		        	xtype: 'button',
		        	id: 'deletedatasourcemanagepanelbutton',
		        	html: 'Delete Data Source',
		        	style: 'margin: 15px 0px; padding: 7px;',
		        	width: 250,
		        	ui: 'decline',
		        	align: 'right',
		        	iconCls: 'delete',
		        },
		        {
		        	xtype: 'button',
		        	id: 'editdatasourcemanagepanelbutton',
		        	html: 'Edit Data Source',
		        	style: 'margin: 15px 0px; padding: 7px;',
		        	width: 250,
		        	align: 'right',
		        	disabled: true,
		        	ui: 'action',
		        	iconCls: 'list',
		        },
		        {
		        	xtype: 'toolbar',
		        	docked: 'bottom',
		        	layout: { type: 'hbox', pack: 'right' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'closedatasourcemanagepanelbutton',
					        	html: 'Close',
					        	align: 'right',
					        	iconCls: 'delete',
					        },
					       ]
		        }
		    ]
	},
});
Ext.define('ReplayAnalytics.view.DataSourceDeletePanel', {
	extend: 'Ext.Panel',
	xtype: 'datasourcedeletepanel',
	config: {
		layout: {type: 'vbox'},
		modal: true,
		zIndex: 10,
		hideOnMaskTap: false,
		centered: true,
		width: 600,
		height: 500,
		scroll: 'vertical',
		hidden: true,
		//style: 'background-color: #f7f7f7;',
		items: [
		        {
		        	xtype: 'toolbar',
		        	docked: 'top',
		        	title: 'Delete Data Sources',
		        },
		        {
    	        	xtype: 'container',
    	        	id: 'datasourcedeletepanelcontainer',
    	        	layout: {type: 'vbox'},
    	        	flex: 1,
                },
		        {
		        	xtype: 'toolbar',
		        	docked: 'bottom',
		        	layout: { type: 'hbox', pack: 'justify' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'canceldatasourcedeletepanelbutton',
					        	html: 'Back',
					        	align: 'left',
					        	iconCls: 'backspace',
					        },
					        {
					        	xtype: 'button',
					        	id: 'confirmdatasourcedeletepanelbutton',
					        	html: 'Delete',
					        	ui: 'decline',
					        	align: 'right',
					        	iconCls: 'delete',
					        },
					       ]
		        }
		    ]
	},
});
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
		clearAllStores();
		$mainController = loginController.getApplication().getController('Main');
		loginController.handleButtonTextsForScreenSize();
		Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, {buffer: 50 });	
		//this.checkForURLQUeryString();
		//this.checkForUserSession();
		this.showMainScreen();
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
		/*var windowWidth = Ext.Viewport.windowWidth;
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
		}*/
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
Ext.define('CachedResponse', {
	responseText: 'Unknown',
	status: '200'
});

var mainController;
var startTime = new Date();
var finishTime = new Date();
var $lastGestureCalledTime = new Date();
var loadingScreen = 'Loading...<div><img src="lib/images/ajax-loader3.gif" alt="Please wait"></div><br /><br />'
	 + 'Taking too long to load? <button onclick="resetSettings();">Reset</button>';


Ext.Ajax.on("beforerequest", function(conn, options){
		var url = options.url;
	    var myCookie = loadData(url);
	    if (myCookie != null){
	    	logMessage("Found local cached data. value= " + myCookie);
	    	if (url.indexOf('getUnifiedData') == 0){
		        ReplayAnalytics.app.panelSettings[ReplayAnalytics.app.currentActivePanelIndex] = url;
		        ReplayAnalytics.app.panelData[ReplayAnalytics.app.currentActivePanelIndex] = myCookie;
			}
	        var response = new CachedResponse();
	        response.responseText = myCookie;
	        if (typeof(options.success) != 'undefined'){
	        	options.success(response);
	        	return false;
	        } else if (typeof(options.callback) != 'undefined'){
	        	options.callback(options, true, response);
	        	return false;
	        } else{
	        	return;
	        }
	        //hideLoadingMask();
		}       
    });

Ext.Ajax.on("requestcomplete", function(conn, response, options){
        //createCookie(options.url, response.responseText, '10');
		if (options.url.indexOf('getUnifiedData') == 0){
			saveData(options.url, response.responseText);
	        ReplayAnalytics.app.panelSettings[ReplayAnalytics.app.currentActivePanelIndex] = options.url;
	        ReplayAnalytics.app.panelData[ReplayAnalytics.app.currentActivePanelIndex] = response.responseText;
		}  
		hideLoadingMask();
	});

Ext.define('ReplayAnalytics.controller.Main', {
	extend : 'Ext.app.Controller',
	xtype: 'maincontroller',
	requires: [
	       	//'Ext.chart.Panel',
	        'Ext.chart.axis.Numeric',
	        'Ext.chart.axis.Category',
	        'Ext.chart.series.Scatter',
	        'Ext.chart.series.Bar',
	        //'Ext.draw.engine.ImageExporter',
	        'Ext.util.Format',
	        'Ext.MessageBox',
	        'ReplayAnalytics.model.DataModel'
	],
	config: {
		refs: {
			'mainController': 'maincontroller',
			'dataModel': 'datamodel',
			'mainContainer': 'replayanalyticsmain',						
			'chart1': 'chart[id=chart1]',
			'chart2': 'chart[id=chart2]',
			'chart3': 'chart[id=chart3]',
			'chart4': 'chart[id=chart4]',
			'chart5': 'chart[id=chart5]',
			'panel1': 'panel1',
			'panel2': 'panel2',
			'panel3': 'panel3',
			'panel4': 'panel4',	
			'slider0': 'slider0',
			'slider1': 'slider1',
			'slider2': 'slider2',
			'slider3': 'slider3',
			'slider4': 'slider4',
			'slider5': 'slider5',
			'fourPanelLayout': 'fourpanellayout',
			'bottomTwoPanelLayout': 'bottomtwopanellayout',
			'topTwoPanelLayout': 'toptwopanellayout',		
			'settingsButton': 'button[id=settingsbutton]',
			'globalSettingsButton': 'button[id=globalsettingsbutton]',
			'globalSyncButton': 'segmentedbutton[id=globalsynctogglebutton]',
			'filterSetting': 'selectfield[id=filtersettingtoggle]',
		},
		control: {
			'chart1': {
				tap: 'setFocusOnPanel1'
			},
			'chart2': {
				tap: 'setFocusOnPanel2'
			},
			'chart3': {
				tap: 'setFocusOnPanel3'
			},
			'chart4': {
				tap: 'setFocusOnPanel4'
			},
			'panel1': {
				tap: 'setFocusOnPanel1'
			},
			'panel2': {
				tap: 'setFocusOnPanel2'
			},
			'panel3': {
				tap: 'setFocusOnPanel3'
			},
			'panel4': {
				tap: 'setFocusOnPanel4'
			},
		}
	},
	
	launch: function(){
		mainController = this;
	},
	
	clearAllPanels: function(){
		for (i = 0; i < ReplayAnalytics.app.newChart.length; i++){
			var obj = ReplayAnalytics.app.newChart[i];
			if (obj != undefined){
				if (obj.getLegend() != undefined){
					obj.getLegend().destroy();
				}		
				obj.destroy();
			}
		}
		/*for (var j = 1; j < 5; j++){
			Ext.ComponentQuery.query('addchartpanel'+j)[0].setHtml('');
			var carousel = Ext.ComponentQuery.query('carousel[id=carousel'+ j +']')[0];
			for (var carouselIndex = carousel.getItems().items.length; carouselIndex > 2; carouselIndex--){
				var temp = carousel.getAt(carouselIndex-1);
				if (temp != undefined){
					carousel.remove(temp);
				}
			}
		}*/
	},
	
	handleTitleBarButtons: function(){
		this.getSettingsButton().setDisabled(false);
		this.getSettingsButton().show();
	},
	
	loadStores: function() {
		this.handleTitleBarButtons();
		this.checkForConfiguredGraphPanels();	
		ReplayAnalytics.app.creatingGraphs = true;
		Ext.getStore('GlobalSettingsStore').load();
		if (Ext.getStore('GlobalSettingsStore').getData().items[0] != undefined){
			ReplayAnalytics.app.interestingMoments = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().InterestingMoments;
			ReplayAnalytics.app.replayCommentsSetting = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().ReplayComments;
			ReplayAnalytics.app.replaySpeed = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().ReplaySpeed;
			ReplayAnalytics.app.numberActivePanels = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().NumberOfPanels;
			ReplayAnalytics.app.interestingMomentType3Setting = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().InterestingMomentType3Setting;
			ReplayAnalytics.app.interestingMomentType4Setting = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().InterestingMomentType4Setting;
			ReplayAnalytics.app.interestingMomentType1Setting = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().InterestingMomentType1Setting;
			ReplayAnalytics.app.interestingMomentType2Setting = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().InterestingMomentType2Setting;
		}
		this.getApplication().getController('Settings').updateChartAnimationSettings();
		this.changePanels();
		var loopIndex = 1;
		for(;loopIndex <= ReplayAnalytics.app.numberActivePanels; loopIndex++){
			Ext.getStore('UserSettings'+loopIndex).load();
			
			if(Ext.getStore('UserSettings'+loopIndex).getData().items[0] != undefined) {
				Ext.get('chart'+loopIndex+'Button').hide();
				Ext.get('chart'+loopIndex+'Image').hide();
				ReplayAnalytics.app.databaseSetting[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().Database;
				ReplayAnalytics.app.filterToggle[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().FilterToggle;
				ReplayAnalytics.app.graphTitle[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().GraphTitle;
				ReplayAnalytics.app.xs[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().XAxis;
				ReplayAnalytics.app.ys[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().YAxis;
				ReplayAnalytics.app.sizeBys[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().BubbleSize;
				ReplayAnalytics.app.granularities[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().Granularity;
				ReplayAnalytics.app.chartTypes[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().ChartType;
				ReplayAnalytics.app.groupBys[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().GroupBy;
				ReplayAnalytics.app.startDate[loopIndex] = new Date(Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().StartDate);
				ReplayAnalytics.app.currentStartDate[loopIndex] = new Date(Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().StartDate);
				ReplayAnalytics.app.currentDate[loopIndex] = new Date(Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().StartDate);
				ReplayAnalytics.app.currentEndDate[loopIndex] = new Date(Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().EndDate);
				ReplayAnalytics.app.accumulate[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().Accumulate;
				ReplayAnalytics.app.currentActivePanelIndex = loopIndex;
				switch(ReplayAnalytics.app.granularities[ReplayAnalytics.app.currentActivePanelIndex]) {
				case 'Hourly':
					ReplayAnalytics.app.valueGranularities[ReplayAnalytics.app.currentActivePanelIndex] = 1;
					break;
				case 'Daily':
					ReplayAnalytics.app.valueGranularities[ReplayAnalytics.app.currentActivePanelIndex] = 2;
					break;
				case 'Weekly':
					ReplayAnalytics.app.valueGranularities[ReplayAnalytics.app.currentActivePanelIndex] = 3;
					break;
				case 'Monthly':
					ReplayAnalytics.app.valueGranularities[ReplayAnalytics.app.currentActivePanelIndex] = 4;
					break;
				}
				
				showLoadingMask();
				this.chartSetUp();
			} else {				
				if (ReplayAnalytics.app.publicMode){
					Ext.get('chart'+loopIndex+'Button').hide();
				} else {
					Ext.get('chart'+loopIndex+'Button').show();
					Ext.get('chart'+loopIndex+'Image').show();
				}				
				//Ext.ComponentQuery.query('panel'+loopIndex)[0].setHtml('');
				Ext.ComponentQuery.query('addchartpanel'+loopIndex)[0].setHtml('');
				//this.clearCarousel();
			}
		}
		this.changePanels();
		ReplayAnalytics.app.currentActivePanelIndex = 1;
		this.setFocusOnPanel(ReplayAnalytics.app.currentActivePanelIndex);
		this.addPanelClickListener();
		hideLoadingMask();
		ReplayAnalytics.app.creatingGraphs = false;
	},
	
	addPanelClickListener: function(){
		Ext.ComponentQuery.query('panel1')[0].element.on({singletap: {fn: function(){mainController.setFocusOnPanel(1);}}});
		Ext.ComponentQuery.query('panel2')[0].element.on({singletap: {fn: function(){mainController.setFocusOnPanel(2);}}});
		Ext.ComponentQuery.query('panel3')[0].element.on({singletap: {fn: function(){mainController.setFocusOnPanel(3);}}});
		Ext.ComponentQuery.query('panel4')[0].element.on({singletap: {fn: function(){mainController.setFocusOnPanel(4);}}});
	},

	changePanels: function() {
		if(ReplayAnalytics.app.numberActivePanels == '1') {
			switch(ReplayAnalytics.app.currentActivePanelIndex) {
				case 1:
					this.getPanel2().hide();
					this.getBottomTwoPanelLayout().hide();
					break;
				case 2:
					this.getPanel1().hide();
					this.getBottomTwoPanelLayout().hide();
					break;
				case 3:
					this.getPanel4().hide();
					this.getTopTwoPanelLayout().hide();
					break;
				case 4:
					this.getPanel3().hide();
					this.getTopTwoPanelLayout().hide();
					break;			
			}
		}
		else if(ReplayAnalytics.app.numberActivePanels == '2') {
			if(ReplayAnalytics.app.currentActivePanelIndex == 1 || ReplayAnalytics.app.currentActivePanelIndex == 2) {
				this.getTopTwoPanelLayout().show();
				this.getPanel1().show();
				this.getPanel2().show();
				this.getBottomTwoPanelLayout().hide();
			}
			else {
				this.getBottomTwoPanelLayout().show();
				this.getPanel3().show();
				this.getPanel4().show();
				this.getTopTwoPanelLayout().hide();
			}
		}
		else {
			this.getTopTwoPanelLayout().show();
			this.getBottomTwoPanelLayout().show();
			this.getPanel1().show();
			this.getPanel2().show();
			this.getPanel3().show();
			this.getPanel4().show();
		}
	},
	
	chartSetUp: function() {
		mainController = this;
		this.checkForConfiguredGraphPanels();
		if(ReplayAnalytics.app.dateSet[ReplayAnalytics.currentActivePanelIndex] == true) {
			showLoadingMask();
		}
		mainController.changeDateRangeLabel(ReplayAnalytics.currentActivePanelIndex);
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		if (chartIndex == 5){
			Ext.ComponentQuery.query('interestingmomentgraphpanel')[0].setHtml('');
		} else {
			Ext.ComponentQuery.query('panel'+chartIndex)[0].setHtml('');
		}		
		var chartObject = Ext.ComponentQuery.query('chart[id=chart'+chartIndex+']')[0];
		if(chartObject != undefined){
			chartObject.destroy();
		}
		ReplayAnalytics.app.chartCreated[ReplayAnalytics.app.currentActivePanelIndex] = false;
		mainController.configureGranularities(ReplayAnalytics.app.currentActivePanelIndex,ReplayAnalytics.app.startDate[ReplayAnalytics.app.currentActivePanelIndex],ReplayAnalytics.app.currentEndDate[ReplayAnalytics.app.currentActivePanelIndex]);	
	},
	
	getModelTypeForField: function(field){
		if (field.fieldType == 'DATA_FIELD'){
			return 'int';
		}
		if (field.fieldType == 'CATEGORY_FIELD' || field.fieldType == 'TIME_CATEGORY_FIELD'){
			return 'text';
		}
		if (field.fieldType == 'TIME_FIELD'){
			return 'Date';
		}
	},

	changeModelFields: function() {
		var selectedDatabaseTable = ReplayAnalytics.app.databaseSetting[ReplayAnalytics.app.currentActivePanelIndex];
		var databaseTableId = this.getApplication().getController('DatabaseTable').getDatabaseTableIdForTableName(selectedDatabaseTable);
		var tableFields = this.getApplication().getController('DatabaseTable').getDatabaseTablesFieldsForDatabaseTableId(databaseTableId);
		var dataModelFieldArray = new Array();
		if (tableFields != undefined){			
			var temp = { name: 'length', type: 'int'};
			dataModelFieldArray.push(temp);
			temp = { name: 'groupByBar1', type: 'int'};
			dataModelFieldArray.push(temp);
			temp = { name: 'groupByBar2', type: 'int'};
			dataModelFieldArray.push(temp);
			temp = { name: 'groupByBar3', type: 'int'};
			dataModelFieldArray.push(temp);
			temp = { name: 'groupByBar4', type: 'int'};
			dataModelFieldArray.push(temp);
			temp = { name: 'Other', type: 'text'};
			dataModelFieldArray.push(temp);
			for (var index = 0 ; index < tableFields.length; index++){
				temp = { name: tableFields[index].fieldLabel, type: mainController.getModelTypeForField(tableFields[index])};
				dataModelFieldArray.push(temp);
			}
		}
		ReplayAnalytics.model.DataModel.setFields(dataModelFieldArray);
	},	

	configureGranularities: function(i, startDate, endDate) {
		this.changeModelFields();
		var yearDifferential = endDate.getFullYear() - startDate.getFullYear();
		var monthDifferential = 12 * yearDifferential + (endDate.getMonth() - startDate.getMonth());
		if(monthDifferential == 0) {
			monthDifferential = 1;
		}
		var dayDifferential = this.DatedaysBetween(startDate, endDate);
		var weekDifferential = Math.ceil(dayDifferential/7);
		if(weekDifferential == 0) {
			weekDifferential = 1;
		}
		var hourDifferential = this.DatehoursBetween(startDate,endDate);
		if(hourDifferential <= 0){
			hourDifferential = 24;
		}
		var instancestore = new Array();
		switch(ReplayAnalytics.app.granularities[i]) {
		case 'Hourly':
			ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex] = Math.round(100 / hourDifferential);	
			Ext.ComponentQuery.query('slider'+i)[0].setMaxValue(ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex] * hourDifferential);
			this.generateURLForChartData(instancestore, i, hourDifferential);
			break;
		case 'Daily':
			ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex] = Math.round(100 / dayDifferential);	
			Ext.ComponentQuery.query('slider'+i)[0].setMaxValue(ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex] * dayDifferential);
			this.generateURLForChartData(instancestore, i, dayDifferential);
			break;
		case 'Weekly':
			ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex] = Math.round(100 / (weekDifferential - 1));	
			Ext.ComponentQuery.query('slider'+i)[0].setMaxValue(ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex] * (weekDifferential - 1));
			mod = weekDifferential % 7;
			seven = 7;
			if(mod == 0) {
				this.generateURLForChartData(instancestore, i, weekDifferential);
			}
			else {			
				this.generateURLForChartData(instancestore, i, weekDifferential - 1);
			}
			break;
		case 'Monthly':
			ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex] = Math.round(100 / monthDifferential);	
			Ext.ComponentQuery.query('slider'+i)[0].setMaxValue(ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex] * monthDifferential);
			this.generateURLForChartData(instancestore, i, monthDifferential);
			break;
		}
	},

	DatedaysBetween: function(date1, date2) {
		var one_day = 1000 * 60 * 60 * 24; //Get 1 day in milliseconds		
		var date1_ms = date1.getTime(); // Convert both dates to milliseconds
		var date2_ms = date2.getTime();		
		var difference_ms = date2_ms - date1_ms; // Calculate the difference in milliseconds	
		return Math.ceil(difference_ms/one_day);  	// Convert back to days and return
	},
	
	DatehoursBetween: function(date1, date2) {
		var one_hour = 1000 * 60 * 60;  //Get 1 hour in milliseconds		
		var date1_ms = date1.getTime();  // Convert both dates to milliseconds
		var date2_ms = date2.getTime();		
		var difference_ms = date2_ms - date1_ms;  // Calculate the difference in milliseconds		
		return Math.ceil(difference_ms/one_hour);  // Convert back to hours and return
	},
	
	// Unified Controller Data Decoding function
	decodeUnifiedData: function(xhr, i, instancestore){
		logMessage('JSON for decoding is==' + xhr.responseText);
		response = Ext.JSON.decode(xhr.responseText.trim());
		dateArray = new Array();
		ReplayAnalytics.app.groupByBarLabels = response.groupByBarArray;		
		this.changeModelFields();
		for ( index = 0; index < response.data.length; index++)        
        {
			dateArray[index] = response.dateArray[index];
			instancestore[index] = Ext.create('Ext.data.Store', {
		        autoLoad: true,
		    	model: 'ReplayAnalytics.model.DataModel',
		    	data: response.data[index],
		        proxy: {
		            type: 'memory',                 		            
		            reader: {
		                type: 'json',
		                rootProperty : 'data'		                
		            }
		        }
		    });      	 
        }
		ReplayAnalytics.app.globalDateArray[ReplayAnalytics.app.currentActivePanelIndex] = dateArray;
		ReplayAnalytics.app.jsonstore[ReplayAnalytics.app.currentActivePanelIndex] = instancestore;	
		ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex] = response.dataField;
		ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex] = response.categoryField;
		if (i > 5){
			return;
		}
		ReplayAnalytics.app.maximumPositions[i] = Ext.ComponentQuery.query('slider'+i)[0].getMaxValue();
		
		if (response.yMax != undefined){
			ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex] = response.yMax;
			ReplayAnalytics.app.YmaxReceived[ReplayAnalytics.app.currentActivePanelIndex] = true;
			if (ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex] != undefined && ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex] > 0){
				ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex] = parseInt(ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex]) + (parseInt(ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex]) * ReplayAnalytics.app.graphMaxValueMargin);
				if (ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex] == 0){
					ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex] = 10;
				}
			}
		}
		
		if (response.xMax != undefined){
			ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex] = response.xMax;
			ReplayAnalytics.app.XmaxReceived[ReplayAnalytics.app.currentActivePanelIndex] = true;
			if (ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex] != undefined && ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex] > 0){
				ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex] = parseInt(ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex]) + (parseInt(ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex]) * ReplayAnalytics.app.graphMaxValueMargin);
				if (ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex] == 0){
					ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex] = 10;
				}
			}
		}
		
		if (response.interestingMoments != undefined){
			ReplayAnalytics.app.interestingMomentsPoints[ReplayAnalytics.app.currentActivePanelIndex] = response.interestingMoments;
		}
		
		finishTime = new Date();
		var loadingTime = finishTime - startTime;
		console.info('Graph Loading/Decoding time for Panel' + ReplayAnalytics.app.currentActivePanelIndex +' is = '+loadingTime+'ms');
		this.getApplication().getController('Playback').resetFunction();		
	},
	
	generateURLForChartData: function(instancestore, i, difference){
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		var databaseName = ReplayAnalytics.app.databaseSetting[chartIndex];
		var chartType = ReplayAnalytics.app.chartTypes[chartIndex];
		var absStartDate = dateFormat(ReplayAnalytics.app.startDate[chartIndex],"yyyy-mm-dd");
		var absEndDate = dateFormat(ReplayAnalytics.app.currentEndDate[chartIndex],"yyyy-mm-dd");
		var granularity = ReplayAnalytics.app.granularities[chartIndex];
		var x_axis = ReplayAnalytics.app.xs[chartIndex];
		var y_axis = ReplayAnalytics.app.ys[chartIndex];
		var groupBy = ReplayAnalytics.app.groupBys[chartIndex];
		var accum = ReplayAnalytics.app.accumulate[chartIndex];
		var imType1Setting = ReplayAnalytics.app.interestingMomentType1Setting;
		var imType2Setting = ReplayAnalytics.app.interestingMomentType2Setting;
		var imType3Setting = ReplayAnalytics.app.interestingMomentType3Setting;
		var imType4Setting = ReplayAnalytics.app.interestingMomentType4Setting;
		var filterString  = this.getApplication().getController('Filter').getFilterStringForChart();
		var url = 'getUnifiedData.do?databaseName=' + databaseName + '&chartType=' + chartType + '&absStartDate=' + absStartDate +
		'&absEndDate='+ absEndDate + '&differential=' + difference + '&granularity='+ granularity + '&x_axis='+ x_axis + 
		'&y_axis=' + y_axis + '&groupBy=' + groupBy + '&accum=' + accum + '&imType1Setting=' + imType1Setting +
		'&imType2Setting=' + imType2Setting + '&imType3Setting=' + imType3Setting + '&imType4Setting=' + imType4Setting;		
		if (filterString != "" && this.getFilterSetting().getValue() == 'On'){
			url = url + "&filterString=" + filterString;
		}
		this.getUnifiedData(url, i, instancestore);
	},
	
	getUnifiedData: function(url, i, instancestore){
		startTime = new Date();
		Ext.Ajax.request({			  
            url: url,  
            disableCaching: false,
            success: function(xhr) {
          	  	mainController.decodeUnifiedData(xhr, i, instancestore);
            },
            failure: function(response) {
            	hideLoadingMask();
            	logMessage('Unified Request Failed for URL-' + url);
            },
		});
	},
	
	setFocusOnPanel: function(index) {
		if (index != 0){
			if (this.getGlobalSyncButton().getPressedButtons().length != 0){
				this.getSettingsButton().setDisabled(false);
				this.getGlobalSettingsButton().setDisabled(false);
			}
			this.getGlobalSyncButton().setPressedButtons([false]);
			this.getFourPanelLayout().setCls('unselected-panel');
			this.getPanel1().setCls('unselected-panel');
			this.getPanel2().setCls('unselected-panel');
			this.getPanel3().setCls('unselected-panel');
			this.getPanel4().setCls('unselected-panel');
			this.getSlider0().hide();
			this.getSlider2().hide();
			this.getSlider3().hide();
			this.getSlider4().hide();
			this.getSlider1().hide();
			if (index != 5 && index != 0){
				Ext.ComponentQuery.query('panel'+index)[0].setCls('selected-panel');
			}		
			Ext.ComponentQuery.query('slider'+index)[0].show();
			ReplayAnalytics.app.currentActivePanelIndex = index;
			this.changeDateRangeLabel(index);
		}		
	},
	
	setFocusOnPanel1: function() {
		this.setFocusOnPanel(1);
	},
	
	setFocusOnPanel2: function() {
		this.setFocusOnPanel(2);
	},
	
	setFocusOnPanel3: function() {
		this.setFocusOnPanel(3);
	},
	
	setFocusOnPanel4: function() {
		this.setFocusOnPanel(4);
	},
	
	changeDateRangeLabel: function(panelIndex){
		if (ReplayAnalytics.app.isChartConfigured[panelIndex]){
			try{
				var startDate = dateFormat(ReplayAnalytics.app.startDate[panelIndex],'m/d/yy');
				var endDate = dateFormat(ReplayAnalytics.app.currentEndDate[panelIndex],'m/d/yy');
				var labelString = "<p class ='dateRangeLabelClass'>" + startDate + " - " + endDate + "</p>";
				Ext.ComponentQuery.query('container[id=daterangelabel]')[0].setHtml(labelString);
			} catch(err){
				Ext.ComponentQuery.query('container[id=daterangelabel]')[0].setHtml('');
			}
		} else {
			Ext.ComponentQuery.query('container[id=daterangelabel]')[0].setHtml('');
		}		
	},
	
	checkForConfiguredGraphPanels: function(){
		var loopIndex = 1;
		for(;loopIndex <= ReplayAnalytics.app.numberActivePanels; loopIndex++){
			Ext.getStore('UserSettings'+loopIndex).load();
			if(Ext.getStore('UserSettings'+loopIndex).getData().items[0] != undefined) {
				ReplayAnalytics.app.isChartConfigured[loopIndex] = true;
			}
		}
	},
});
Ext.define('ReplayAnalytics.controller.Pie', {
	extend : 'Ext.app.Controller',
	xtype: 'piecontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
		},
	},
	
	launch: function(){
	
	},
	
	createPieChart: function(store, dataField, categoryField, chartIndex){	
		var obj = ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex] = Ext.create('Ext.chart.PolarChart', {
			id: 'chart'+ReplayAnalytics.app.currentActivePanelIndex,
			store: store,
			flex: 1,
			interactions: ['rotate'],
			legend: {
		        position: 'right',		        
		    },
		    innerPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    colors: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"],
		    //shadow: true,
		    series: [{
				        type: 'pie',
				        labelField: categoryField,
				        xField: dataField,
				        donut: 0,
				        showInLegend: true,
				        contrast: true,
				        animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
				        label: {
				        	field: categoryField,
				        	display: 'rotate',
				        	contrast: true,
						    //fill: 'black',
						},	
						labelOverflowPadding: 10,
			}],			
		});
	},
});
Ext.define('ReplayAnalytics.controller.HorizontalBar', {
	extend : 'Ext.app.Controller',
	xtype: 'horizontalbarcontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
		},
	},
	
	launch: function(){
		
	},
	
	createHorizontalBarChart: function(store,chartIndex,groupByBarArray) {
		var obj = ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		if (groupByBarArray == undefined){
			this.createHorizontalBarChartGroupByNone(store,chartIndex);
		}
		else {
			ReplayAnalytics.app.groupByValueBar = new Array();
			for (i = 0; i < groupByBarArray.length; i++){
				ReplayAnalytics.app.groupByValueBar[i] = 'groupByBar' + (i+1);
			}
			if (groupByBarArray.length != 0 && groupByBarArray[groupByBarArray.length - 1] != 'other'){
				groupByBarArray[groupByBarArray.length] = "Other";
				ReplayAnalytics.app.groupByValueBar[ReplayAnalytics.app.groupByValueBar] = "Other";
			}			
			this.createHorizontalBarChartGroupBy(store,chartIndex, groupByBarArray);
		}		
	},
	
	createHorizontalBarChartGroupByNone: function(store,chartIndex) {
		ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+ReplayAnalytics.app.currentActivePanelIndex,
		    flipXY: true,
		    flex: 1,
		    store: store,
		    //shadow: true,
		    insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
		    //interactions: ['panzoom'],
	    	axes: [
	    	       {
	    	    	   	type: 'numeric',
	    	    	   	position: 'bottom',
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		//shadowColor: 'black',    	    	   	
	    	       		},
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	minimum: 0,
	    	    	   	maximum: ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						//strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						//shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'left',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		//shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						//strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						//shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
	    	            	 type: 'bar',
	    	            	 xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	            	 yField: ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	            	 axis: 'left',
	    	            	 highlight: true,
	    	            	 showInLegend: false,
	    	            	// shadow: true,
	    	            	 style: {
	    	            	 		stroke: 'rgb(40,40,40)',
	    	             	 },
	    	             	 subStyle: {
	    	             			fill: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"]
	    	             	 }
	    	              }
	    	           ]
		});
	},		

	createHorizontalBarChartGroupBy: function(store, chartIndex, groupByBarArray){
		ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
			id: 'chart'+ReplayAnalytics.app.currentActivePanelIndex,
			flipXY: true,
			flex: 1,
			store: store,
			//shadow: true,
			insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
			//interactions: ['panzoom'],
			legend: {
            	position: 'right'
			},
	    	axes: [
	    	       {
	    	    	   	type: 'numeric',
	    	    	   	position: 'bottom',
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		//shadowColor: 'black',    	    	   	
	    	       		},
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		//fields: groupByBarArray,
	    	       		minimum: 0,
	    	    	   	maximum: ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						//strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						//shadowColor: 'black',
	   					},	   					
	    	       },
	    	       { type: 'category',
	    	    	   	position: 'left',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		//shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						//strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						//shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
	    	            	 type: 'bar',
	    	            	 xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	            	 yField: ReplayAnalytics.app.groupByValueBar,
	    	            	 title: groupByBarArray,
	    	            	 axis: 'left',
	    	            	 highlight: true,
	    	            	 //showInLegend: true,
	    	            	// shadow: true,
	    	            	 animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
	    	            	 style: {
	    	            	 		stroke: 'rgb(40,40,40)',
	    	             	 },
	    	             	 subStyle: {
	    	             			fill: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"]
	    	             	 }
	    	              }
	    	           ]
			});	
	},
});
Ext.define('ReplayAnalytics.controller.LineBar', {
	extend : 'Ext.app.Controller',
	xtype: 'linebarcontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
		}
	},
	
	launch: function(){
	},
	
	createLineChart: function(store,chartIndex,groupByBarArray) {
		var obj = ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		if (groupByBarArray == undefined){
			this.createLineChartGroupByNone(store,chartIndex);
		}
		else {
			ReplayAnalytics.app.groupByValueBar = new Array();
			for (i = 0; i < groupByBarArray.length; i++){
				ReplayAnalytics.app.groupByValueBar[i] = 'groupByBar' + (i+1);
			}
			if (groupByBarArray.length != 0 && groupByBarArray[groupByBarArray.length - 1] != 'other'){
				groupByBarArray[groupByBarArray.length] = "Other";
				ReplayAnalytics.app.groupByValueBar[ReplayAnalytics.app.groupByValueBar] = "Other";
			}	
			if (groupByBarArray.length == 2){
				this.createLineChartGroupBy1(store,chartIndex, groupByBarArray);
			} else if (groupByBarArray.length == 3){
				this.createLineChartGroupBy2(store,chartIndex, groupByBarArray);
			} else if (groupByBarArray.length == 4){
				this.createLineChartGroupBy3(store,chartIndex, groupByBarArray);
			} else if (groupByBarArray.length == 5){
				this.createLineChartGroupBy4(store,chartIndex, groupByBarArray);
			}			
		}		
	},
	
	createLineChartGroupByNone: function(store,chartIndex) {
		ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+ReplayAnalytics.app.currentActivePanelIndex,
		    flex: 1,
		    store: store,
		    shadow: true,
		    insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
		    innerPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    //interactions: ['panzoom'],
	    	axes: [
	    	       {
	    	    	   	type: 'numeric',
	    	    	   	position: 'left',
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',    	    	   	
	    	       		},
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	minimum: 0,
	    	    	   	maximum: ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
	    	            	 type: 'line',
	    	            	 xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	            	 yField: ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	            	 axis: 'bottom',
	    	            	 highlight: true,
	    	            	 showInLegend: false,
	    	            	 shadow: true,
	    	            	 animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
	    	            	 style: {
	    	            		 	//fill: "#115fa6",
	    	            		 	stroke: "#115fa6",
	    	            	 		fillOpacity: 0,
	    	            	 		lineWidth: 3,
	    	            	 		smooth: true,
	    	             	 },
	    	             	 subStyle: {
	    	             			fill: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"]
	    	             	 }
	    	              }
	    	           ]
		});
	},		
	
	createLineChartGroupBy1: function(store, chartIndex, groupByBarArray){
		ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+ReplayAnalytics.app.currentActivePanelIndex,
		    flex: 1,
		    store: store,
		    shadow: true,
		    insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    //interactions: ['panzoom'],
		    animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
		    legend: {
	            position: 'right'
	        },
	    	axes: [
	    	       {
	    	    	   	type: 'numeric',
	    	    	   	position: 'left',
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',    	    	   	
	    	       		},
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		//fields: groupByBarArray,
	    	       		minimum: 0,
	    	    	   	maximum: ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
   	    	            	 type: 'line',
   	    	            	 xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
   	    	            	 yField: ReplayAnalytics.app.groupByValueBar[0],
   	    	            	 title: groupByBarArray[0],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
   	    	            	 style: {
    	            		 	//fill: "#115fa6",
    	            		 	stroke: "#115fa6",
    	            	 		fillOpacity: 0,
    	            	 		lineWidth: 3,
    	            	 		smooth: true,
   	    	            	 },
   	    	            	 marker: {
   	    	            		 type: 'circle',
   	    	            		 radius: 4,
   	    	            		 lineWidth: 3
   	    	            	 }  	    	             	 
   	    	              },
   	    	              {
   	    	            	  type: 'line',
   	    	            	  xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
   	    	            	  yField: ReplayAnalytics.app.groupByValueBar[1],
   	    	            	  title: groupByBarArray[1],
   	    	            	  axis: 'bottom',
   	    	            	  highlight: true,
   	    	            	  showInLegend: true,
   	    	            	  shadow: true,
   	    	            	  animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
   	    	            	  style: {
   	    	            		  //fill: "#94ae0a",
   	    	            		  stroke: "#94ae0a",
   	    	            		  fillOpacity: 0,
   	    	            		  lineWidth: 3,
   	    	            		  smooth: true,
   	    	            	  }, 
   	    	            	  marker: {
   	    	            		type: 'circle',
   	    	            		radius: 4,
   	    	            		lineWidth: 3
   	    	            	  }
	    	              },	    	                 	    	              
   	    	           ]
		});	
	},
	
	createLineChartGroupBy2: function(store, chartIndex, groupByBarArray){
		ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+ReplayAnalytics.app.currentActivePanelIndex,
		    flex: 1,
		    store: store,
		    shadow: true,
		    insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    //interactions: ['panzoom'],
		    animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
		    legend: {
	            position: 'right'
	        },
	    	axes: [
	    	       {
	    	    	   	type: 'numeric',
	    	    	   	position: 'left',
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',    	    	   	
	    	       		},
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		//fields: groupByBarArray,
	    	       		minimum: 0,
	    	    	   	maximum: ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
   	    	            	 type: 'line',
   	    	            	 xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
   	    	            	 yField: ReplayAnalytics.app.groupByValueBar[0],
   	    	            	 title: groupByBarArray[0],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
   	    	            	 style: {
    	            		 	//fill: "#115fa6",
    	            		 	stroke: "#115fa6",
    	            	 		fillOpacity: 0,
    	            	 		lineWidth: 3,
    	            	 		smooth: true,
   	    	            	 },
   	    	            	 marker: {
   	    	            		 type: 'circle',
   	    	            		 radius: 4,
   	    	            		 lineWidth: 3
   	    	            	 }  	    	             	 
   	    	              },
   	    	              {
   	    	            	  type: 'line',
   	    	            	  xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
   	    	            	  yField: ReplayAnalytics.app.groupByValueBar[1],
   	    	            	  title: groupByBarArray[1],
   	    	            	  axis: 'bottom',
   	    	            	  highlight: true,
   	    	            	  showInLegend: true,
   	    	            	  shadow: true,
   	    	            	  animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
   	    	            	  style: {
   	    	            		  //fill: "#94ae0a",
   	    	            		  stroke: "#94ae0a",
   	    	            		  fillOpacity: 0,
   	    	            		  lineWidth: 3,
   	    	            		  smooth: true,
   	    	            	  }, 
   	    	            	  marker: {
   	    	            		type: 'circle',
   	    	            		radius: 4,
   	    	            		lineWidth: 3
   	    	            	  }
	    	              },
	    	              {
   	    	            	 type: 'line',
   	    	            	 xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
   	    	            	 yField: ReplayAnalytics.app.groupByValueBar[2],
   	    	            	 title: groupByBarArray[2],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
   	    	            	 style: {
    	            		 	//fill: "#a61120",
    	            		 	stroke: "#a61120",
    	            	 		fillOpacity: 0,
    	            	 		lineWidth: 3,
    	            	 		smooth: true,
   	    	            	 }, 
   	    	            	 marker: {
   	    	            		 type: 'circle',
   	    	            		 radius: 4,
   	    	            		 lineWidth: 3
   	    	            	 }
   	    	              },   	    	                	    	              
   	    	           ]
		});	
	},
	
	createLineChartGroupBy3: function(store, chartIndex, groupByBarArray){
		ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+ReplayAnalytics.app.currentActivePanelIndex,
		    flex: 1,
		    store: store,
		    shadow: true,
		    insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    //interactions: ['panzoom'],
		    animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
		    legend: {
	            position: 'right'
	        },
	    	axes: [
	    	       {
	    	    	   	type: 'numeric',
	    	    	   	position: 'left',
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',    	    	   	
	    	       		},
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		//fields: groupByBarArray,
	    	       		minimum: 0,
	    	    	   	maximum: ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
   	    	            	 type: 'line',
   	    	            	 xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
   	    	            	 yField: ReplayAnalytics.app.groupByValueBar[0],
   	    	            	 title: groupByBarArray[0],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
   	    	            	 style: {
    	            		 	//fill: "#115fa6",
    	            		 	stroke: "#115fa6",
    	            	 		fillOpacity: 0,
    	            	 		lineWidth: 3,
    	            	 		smooth: true,
   	    	            	 },
   	    	            	 marker: {
   	    	            		 type: 'circle',
   	    	            		 radius: 4,
   	    	            		 lineWidth: 3
   	    	            	 }  	    	             	 
   	    	              },
   	    	              {
   	    	            	  type: 'line',
   	    	            	  xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
   	    	            	  yField: ReplayAnalytics.app.groupByValueBar[1],
   	    	            	  title: groupByBarArray[1],
   	    	            	  axis: 'bottom',
   	    	            	  highlight: true,
   	    	            	  showInLegend: true,
   	    	            	  shadow: true,
   	    	            	  animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
   	    	            	  style: {
   	    	            		  //fill: "#94ae0a",
   	    	            		  stroke: "#94ae0a",
   	    	            		  fillOpacity: 0,
   	    	            		  lineWidth: 3,
   	    	            		  smooth: true,
   	    	            	  }, 
   	    	            	  marker: {
   	    	            		type: 'circle',
   	    	            		radius: 4,
   	    	            		lineWidth: 3
   	    	            	  }
	    	              },
	    	              {
   	    	            	 type: 'line',
   	    	            	 xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
   	    	            	 yField: ReplayAnalytics.app.groupByValueBar[2],
   	    	            	 title: groupByBarArray[2],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
   	    	            	 style: {
    	            		 	//fill: "#a61120",
    	            		 	stroke: "#a61120",
    	            	 		fillOpacity: 0,
    	            	 		lineWidth: 3,
    	            	 		smooth: true,
   	    	            	 }, 
   	    	            	 marker: {
   	    	            		 type: 'circle',
   	    	            		 radius: 4,
   	    	            		 lineWidth: 3
   	    	            	 }
   	    	              },
   	    	              {
	    	            	 type: 'line',
	    	            	 xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	            	 yField: ReplayAnalytics.app.groupByValueBar[3],
	    	            	 title: groupByBarArray[3],
	    	            	 axis: 'bottom',
	    	            	 highlight: true,
	    	            	 showInLegend: true,
	    	            	 shadow: true,
	    	            	 animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
	    	            	 style: {
	    	            		 //fill: "#ff8809",
	    	            		 stroke: "#ff8809",
	    	            		 fillOpacity: 0,
	    	            		 lineWidth: 3,
	    	            		 smooth: true,
	    	            	 },
	    	            	 marker: {
	    	                     type: 'circle',
	    	                     radius: 4,
	    	                     lineWidth: 3
	    	                 }
	    	              },   	    	              
   	    	           ]
		});	
	},
	
	createLineChartGroupBy4: function(store, chartIndex, groupByBarArray){
		ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+ReplayAnalytics.app.currentActivePanelIndex,
		    flex: 1,
		    store: store,
		    shadow: true,
		    insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    //interactions: ['panzoom'],
		    animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
		    legend: {
	            position: 'right'
	        },
	    	axes: [
	    	       {
	    	    	   	type: 'numeric',
	    	    	   	position: 'left',
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		//shadowColor: 'black',    	    	   	
	    	       		},
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: groupByBarArray,
	    	       		minimum: 0,
	    	    	   	maximum: ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
   	    	            	 type: 'line',
   	    	            	 xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
   	    	            	 yField: ReplayAnalytics.app.groupByValueBar[0],
   	    	            	 title: groupByBarArray[0],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
   	    	            	 style: {
    	            		 	//fill: "#115fa6",
    	            		 	stroke: "#115fa6",
    	            	 		fillOpacity: 0,
    	            	 		lineWidth: 3,
    	            	 		smooth: true,
   	    	            	 },
   	    	            	 marker: {
   	    	            		 type: 'circle',
   	    	            		 radius: 4,
   	    	            		 lineWidth: 3
   	    	            	 }  	    	             	 
   	    	              },
   	    	              {
   	    	            	  type: 'line',
   	    	            	  xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
   	    	            	  yField: ReplayAnalytics.app.groupByValueBar[1],
   	    	            	  title: groupByBarArray[1],
   	    	            	  axis: 'bottom',
   	    	            	  highlight: true,
   	    	            	  showInLegend: true,
   	    	            	  shadow: true,
   	    	            	  animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
   	    	            	  style: {
   	    	            		  //fill: "#94ae0a",
   	    	            		  stroke: "#94ae0a",
   	    	            		  fillOpacity: 0,
   	    	            		  lineWidth: 3,
   	    	            		  smooth: true,
   	    	            	  }, 
   	    	            	  marker: {
   	    	            		type: 'circle',
   	    	            		radius: 4,
   	    	            		lineWidth: 3
   	    	            	  }
	    	              },
	    	              {
   	    	            	 type: 'line',
   	    	            	 xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
   	    	            	 yField: ReplayAnalytics.app.groupByValueBar[2],
   	    	            	 title: groupByBarArray[2],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
   	    	            	 style: {
    	            		 	//fill: "#a61120",
    	            		 	stroke: "#a61120",
    	            	 		fillOpacity: 0,
    	            	 		lineWidth: 3,
    	            	 		smooth: true,
   	    	            	 }, 
   	    	            	 marker: {
   	    	            		 type: 'circle',
   	    	            		 radius: 4,
   	    	            		 lineWidth: 3
   	    	            	 }
   	    	              },
   	    	              {
	    	            	 type: 'line',
	    	            	 xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	            	 yField: ReplayAnalytics.app.groupByValueBar[3],
	    	            	 title: groupByBarArray[3],
	    	            	 axis: 'bottom',
	    	            	 highlight: true,
	    	            	 showInLegend: true,
	    	            	 shadow: true,
	    	            	 animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
	    	            	 style: {
	    	            		 //fill: "#ff8809",
	    	            		 stroke: "#ff8809",
	    	            		 fillOpacity: 0,
	    	            		 lineWidth: 3,
	    	            		 smooth: true,
	    	            	 },
	    	            	 marker: {
	    	                     type: 'circle',
	    	                     radius: 4,
	    	                     lineWidth: 3
	    	                 }
	    	              },  
	    	              {
	    	            	 type: 'line',
	    	            	 xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	            	 yField: ReplayAnalytics.app.groupByValueBar[4],
	    	            	 title: groupByBarArray[4],
	    	            	 axis: 'bottom',
	    	            	 highlight: true,
	    	            	 showInLegend: true,
	    	            	 shadow: true,
	    	            	 animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
	    	            	 style: {
	    	            		 //fill: "#ff8809",
	    	            		 stroke: "#ff8809",
	    	            		 fillOpacity: 0,
	    	            		 lineWidth: 3,
	    	            		 smooth: true,
	    	            	 },
	    	            	 marker: {
	    	                     type: 'circle',
	    	                     radius: 4,
	    	                     lineWidth: 3
	    	                 }
		    	           },
   	    	           ]
		});	
	},
});
Ext.define('ReplayAnalytics.controller.Scatter', {
	extend : 'Ext.app.Controller',
	xtype: 'scattercontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
		},
	},
	
	launch: function(){
		
	},	
			    
	createScatterChart: function(chartType,store,xfield,yfield,chartIndex,groupByBarArray) {
		var obj = ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
			id: 'chart'+ReplayAnalytics.app.currentActivePanelIndex,
			animate: true,
			renderTo: Ext.getBody(),
			flex: 1,
			autoShow: true,
		    store: store,
		    //insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    axes: [{
		        type: 'numeric',
		        position: 'bottom',
		        fields: [xfield],
		        style: {
	    	   		strokeStyle: 'black',
	    	   		shadowColor: 'black',    	    	   	
	       		},
	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
		        title: {
						text: xfield,
						strokeStyle: '#4270A2',
						fillStyle: '#4270A2',
						shadowColor: 'black',
				},
		        //grid: true,
		        minimum: 0,
		        maximum: ReplayAnalytics.app.Xmax[ReplayAnalytics.app.currentActivePanelIndex],
		    }, {
		        type: 'numeric',
		        position: 'left',
		        fields: [yfield],
		        style: {
	    	   		strokeStyle: 'black',
	    	   		shadowColor: 'black',    	    	   	
	       		},
	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
		        title: {
						text: yfield,
   						strokeStyle: '#4270A2',
   						fillStyle: '#4270A2',
   						shadowColor: 'black',	    	    	   	
   				},
		        minimum: 0,
		        maximum: ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex],
		    }],
		    series: [{
		        type: 'scatter',
		        fill: true,
		        xField: xfield,
		        yField: yfield,
		        animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
		        marker: {
		        	type: 'circle',
		        	fill: '#a00',
		        	fillOpacity: 1,
					radius: 10,
		            lineWidth: 1,
		            strokeOpacity: 1,
		            strokeStyle: 'black',
		            shadowColor: 'black',
		            shadowOffestX: 2,
		            shadowOffsetY: 2,
		        }
		    }]
		}); 
	},
	
	createScatterChartGroupBy: function(chartType,store,xfield,yfield,chartIndex) {
		 
	},
});
Ext.define('ReplayAnalytics.controller.VerticalBar', {
	extend : 'Ext.app.Controller',
	xtype: 'verticalbarcontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
		},
	},
	
	launch: function(){
		
	},

	createVerticalBarChart: function(store,chartIndex,groupByBarArray) {
		var obj = ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		if (groupByBarArray == undefined){
			this.createVerticalBarChartGroupByNone(store,chartIndex);
		}
		else {
			ReplayAnalytics.app.groupByValueBar = new Array();
			for (i = 0; i < groupByBarArray.length; i++){
				ReplayAnalytics.app.groupByValueBar[i] = 'groupByBar' + (i+1);
			}
			if (groupByBarArray.length != 0 && groupByBarArray[groupByBarArray.length - 1] != 'other'){
				groupByBarArray[groupByBarArray.length] = "Other";
				ReplayAnalytics.app.groupByValueBar[ReplayAnalytics.app.groupByValueBar] = "Other";
			}			
			this.createVerticalBarChartGroupBy(store,chartIndex, groupByBarArray);
		}
	},
	
	createVerticalBarChartGroupByNone: function(store,chartIndex) {
		ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+ReplayAnalytics.app.currentActivePanelIndex,
		    flipXY: false,
		    flex: 1,
		    store: store,
		    shadow: true,
		    animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
		    //interactions: ['panzoom'],
	    	axes: [
	    	       {
	    	    	   	type: 'numeric',
	    	    	   	position: 'left',
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',    	    	   	
	    	       		},
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	minimum: 0,
	    	    	   	maximum: ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
	    	            	 type: 'bar',
	    	            	 xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	            	 yField: ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	            	 axis: 'bottom',
	    	            	 highlight: true,
	    	            	 showInLegend: false,
	    	            	 shadow: true,	    	            	 
	    	            	 style: {
	    	            	 		stroke: 'rgb(40,40,40)',
	    	             	 },
	    	             	 subStyle: {
	    	             			fill: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"]
	    	             	 }
	    	              }
	    	           ]
		});
	},		
	
	createVerticalBarChartGroupBy: function(store, chartIndex, groupByBarArray){
		ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+ReplayAnalytics.app.currentActivePanelIndex,
		    flipXY: false,
		    flex: 1,
		    store: store,
		    shadow: true,
		    animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
		    //interactions: ['panzoom'],
		    legend: {
	            position: 'right'
	        },
	    	axes: [
	    	       {
	    	    	   	type: 'numeric',
	    	    	   	position: 'left',
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',    	    	   	
	    	       		},
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		//fields: groupByBarArray,
	    	       		minimum: 0,
	    	    	   	maximum: ReplayAnalytics.app.Ymax[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
	    	            	 type: 'bar',
	    	            	 xField: ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex],
	    	            	 yField: ReplayAnalytics.app.groupByValueBar,
	    	            	 title: groupByBarArray,
	    	            	 highlight: true,
	    	            	 showInLegend: true,
	    	            	 stacked: true,
	    	            	 shadow: true,
	    	            	 style: {
	    	            	 		stroke: 'rgb(40,40,40)',
	    	             	 },
	    	             	 subStyle: {
	    	             			fill: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"]
	    	             	 }
	    	              }
	    	           ]
		});	
	},
});
var filterController;
Ext.define('ReplayAnalytics.controller.Filter', {
	extend : 'Ext.app.Controller',
	xtype: 'filtercontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
			'filterSetting': 'selectfield[id=filtersettingtoggle]',
			'filterFieldsList': 'list[id=filterfieldslist]',
			'setFilterButton': 'button[id=setfilterbutton]',
			'filterFieldsPanel': 'filterfieldspanel',
			'filterListPanel': 'filterlistpanel',
			'filterList': 'list[id=filterlist]',
			'filterListCancelButton': 'button[id=filterlistcancelbutton]',
			'filterListDoneButton': 'button[id=filterlistdonebutton]',
			'databaseSetting': 'selectfield[id=databaseselectfield]',
			'filterListSelectUnselectAllButton': 'button[id=filterlistselectunselectallbutton]',			
		},
		control: {
			'filterSetting': {
				change: 'toggleSetFilterButton'
			},
			'setFilterButton': {
				tap: 'showFilterFieldsPanel'
			},
			'mainContainer': {
				initialize: 'loadSelectFieldStores'
			},
			'filterFieldsList': {
				select: 'showFilterListPanel'
			},
			'filterListCancelButton': {
				tap: 'hideFilterListPanel'
			},
			'filterListDoneButton': {
				tap: 'saveFilters'
			},
			'filterListSelectUnselectAllButton': {
				tap: 'selectUnselectAllInFilterList'
			},
		},
	},
	
	launch: function(){
		filterController = this;
		filterController.getFilterList().on('itemtap', filterController.handleItemTap);
	},
	
	showFilterFieldsPanel: function() {		
		this.getFilterFieldsList().setStore({
			fields: ['text', 'value'],
			data: ReplayAnalytics.app.PanelFilterFieldsStore[ReplayAnalytics.app.currentActivePanelIndex],
		});
		this.getFilterFieldsPanel().showBy(this.getSetFilterButton());
		this.handleFilterFieldConfiguredStatus();
	},

	showFilterListPanel: function(view, record) {
		showLoadingMask();
		var filterCategory = record.data.value;
		ReplayAnalytics.app.currentSelectedFilterCategory = filterCategory;
		var json = this.getFilterFieldJSON(filterCategory);
		if (json == undefined || json == ''){
			var url = 'getFilterFields.do?databaseName=' + this.getDatabaseSetting().getValue() + '&filterCategory=' + this.getFilterCategoryValue(filterCategory);
			Ext.Ajax.request({
				url: url,
				success: function(response){
					var filterResponse = Ext.JSON.decode(response.responseText);
					filterController.saveFilterFieldJSON(filterResponse, filterCategory);
					filterController.handleFilterFieldResponse(filterResponse, filterCategory);
				},
			});
		} else {
			this.handleFilterFieldResponse(json, filterCategory);
		}
	},
	
	handleFilterFieldConfiguredStatus: function(){
		var store = filterController.getFilterFieldsList().getStore();
		if (store != undefined || store != null){
			for (var i = 0; i < store.data.length; i++){
				var filterCategory = store.getAt(i).data.value;
				var filterArray = this.getFilterFieldJSON(filterCategory);
				var filterSelection = this.getStringFromFilterData(filterArray, this.getFilterCategoryValue(filterCategory));
				if (filterSelection != undefined && filterSelection != ""){
					var label = store.getAt(i).data.text;
					if (label.indexOf('*') == -1){
						store.getAt(i).data.text = label + ' *';
					} 
				}
			}
		}
		filterController.getFilterFieldsList().refresh();
	},
	
	getFilterCategoryValue: function(filterCategory){
		switch(filterCategory){
			case 'InformanceUser': return 'User'; 
			case 'InformancePart': return 'Part';
			case 'InfinityQSUser': return 'User';
			case 'InfinityQSPart': return 'Part';
		}
		return filterCategory;
	},
	
	handleFilterFieldResponse: function(filterResponse, filterCategory){
		filterController.getFilterList().setStore({
			fields: ['Field', 'FieldLabel', 'Checked'],
			data: filterResponse,
		});
		filterController.getFilterListPanel().showBy(filterController.getFilterFieldsList());
		var filterlistelements = new Array();
		var inputs = document.getElementsByTagName("input");
		for(i = 0; i < inputs.length; i++) {
			if(inputs[i].type == "checkbox" && inputs[i].name == "filter") {
				filterlistelements.push(inputs[i]);
			}
		}
		var allUnchecked = true;
		for(ii = 0; ii < filterlistelements.length; ii++) {
			filterlistelements[ii].checked = filterResponse[ii].Checked;
			if (filterResponse[ii].Checked){
				allUnchecked = false;
			}
		}
		if (allUnchecked){
			ReplayAnalytics.app.filterListSelectUnselectFlag = false;
		}
		this.handleSelectAllButtonText();
		hideLoadingMask();
	},
	
	handleItemTap: function(dataview, index, item, event) {
		var temp = dataview.getStore().getAt(index).data;
        ele = Ext.get(temp.Field);
        if(!temp.Checked) {
            dataview.getStore().getAt(index).data.Checked = true;
        } else {
        	dataview.getStore().getAt(index).data.Checked = false;                   
        }
	},
	
	selectUnselectAllInFilterList: function(){
		var flag = ReplayAnalytics.app.filterListSelectUnselectFlag;
		var dataview = filterController.getFilterList();
		var filterlistelements = new Array();
		var inputs = document.getElementsByTagName("input");
		for(i = 0; i < inputs.length; i++) {
			if(inputs[i].type == "checkbox" && inputs[i].name == "filter") {
				filterlistelements.push(inputs[i]);
			}
		}
		for(index = 0; index < filterlistelements.length; index++) {
			if (flag){
				dataview.getStore().getAt(index).data.Checked = false;
			} else {
				dataview.getStore().getAt(index).data.Checked = true;
			}
			filterlistelements[index].checked = dataview.getStore().getAt(index).data.Checked;
		}
		ReplayAnalytics.app.filterListSelectUnselectFlag = !flag;
		this.handleSelectAllButtonText();
	},
	
	handleSelectAllButtonText: function(){		
		if (ReplayAnalytics.app.filterListSelectUnselectFlag){
			this.getFilterListSelectUnselectAllButton().setText('Unselect All');
		} else {
			this.getFilterListSelectUnselectAllButton().setText('Select All');			
		}
	},
	
	saveFilterFieldJSON: function(filterJSON, filterCategory){
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		switch(filterCategory){
			case 'InformanceUser': ReplayAnalytics.app.InformanceUserFilter[chartIndex] = filterJSON; break;
			case 'reason': ReplayAnalytics.app.InformanceReasonFilter[chartIndex] = filterJSON; break;
			case 'InformancePart': ReplayAnalytics.app.InformanceSKUFilter[chartIndex] = filterJSON; break;
			case 'set': ReplayAnalytics.app.InformanceSetFilter[chartIndex] = filterJSON; break;
			case 'InfinityQSUser': ReplayAnalytics.app.InfinityQSUserFilter[chartIndex] = filterJSON; break;
			case 'Test': ReplayAnalytics.app.InfinityQSTestFilter[chartIndex] = filterJSON; break;
			case 'Name': ReplayAnalytics.app.InfinityQSQPMFilter[chartIndex] = filterJSON; break;
			case 'InfinityQSPart': ReplayAnalytics.app.InfinityQSSKUFilter[chartIndex] = filterJSON; break;
			case 'Process': ReplayAnalytics.app.InfinityQSProcessFilter[chartIndex] = filterJSON; break;
		}		
	},
	
	getFilterFieldJSON: function(filterCategory){
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		switch(filterCategory){
			case 'InformanceUser': return ReplayAnalytics.app.InformanceUserFilter[chartIndex];
			case 'reason': return ReplayAnalytics.app.InformanceReasonFilter[chartIndex];
			case 'InformancePart': return ReplayAnalytics.app.InformanceSKUFilter[chartIndex];
			case 'set': return ReplayAnalytics.app.InformanceSetFilter[chartIndex];
			case 'InfinityQSUser': return ReplayAnalytics.app.InfinityQSUserFilter[chartIndex];
			case 'Test': return ReplayAnalytics.app.InfinityQSTestFilter[chartIndex];
			case 'Name': return ReplayAnalytics.app.InfinityQSQPMFilter[chartIndex];
			case 'InfinityQSPart': return ReplayAnalytics.app.InfinityQSSKUFilter[chartIndex];
			case 'Process': return ReplayAnalytics.app.InfinityQSProcessFilter[chartIndex];
		}
		return "";
	},
	
	getFilterFieldArray: function(filterCategory){
		switch(filterCategory){
			case 'InformanceUser': return ReplayAnalytics.app.InformanceUserFilter;
			case 'reason': return ReplayAnalytics.app.InformanceReasonFilter;
			case 'InformancePart': return ReplayAnalytics.app.InformanceSKUFilter;
			case 'set': return ReplayAnalytics.app.InformanceSetFilter;
			case 'InfinityQSUser': return ReplayAnalytics.app.InfinityQSUserFilter;
			case 'Test': return ReplayAnalytics.app.InfinityQSTestFilter;
			case 'Name': return ReplayAnalytics.app.InfinityQSQPMFilter;
			case 'InfinityQSPart': return ReplayAnalytics.app.InfinityQSSKUFilter;
			case 'Process': return ReplayAnalytics.app.InfinityQSProcessFilter;
		}
		return "";
	},

	saveFilters: function() {
		var filterCategory = ReplayAnalytics.app.currentSelectedFilterCategory;
		var filterArray = this.getFilterFieldJSON(filterCategory);		
		var listData = filterController.getFilterList().getStore().getData().all;
		if (listData != undefined){
			if (listData.length == filterArray.length){
				for (i = 0; i < listData.length; i++){
					if (filterArray[i].Field == listData[i].data.Field){
						filterArray[i].Checked = listData[i].data.Checked;
					}					
				}
			}
		}
		this.saveFilterFieldJSON(filterArray, filterCategory);
		this.hideFilterListPanel();
		this.handleFilterFieldConfiguredStatus();
		//this.getFilterFieldsPanel().hide();
	},

	hideFilterListPanel: function() {
		this.getFilterListPanel().hide();
		//this.getFilterFieldsPanel().hide();
	},

	toggleSetFilterButton: function() {
		if(this.getFilterSetting().getValue() == 'On') {
			this.getSetFilterButton().show();
		}
		else {
			this.getSetFilterButton().hide();
		}
	},
	
	encodeFilterJSONForSaving: function(filterCategory){
		var temp = new Array();
		var filterJSON = filterController.getFilterFieldArray(filterCategory);
		if (filterJSON != undefined || filterJSON != ""){
			for (i = 0; i < filterJSON.length; i++){
				temp[i] = "";
				try{
					temp[i] = encodeURIComponent(Ext.JSON.encode(filterJSON[i]));
				} catch(err){
				}			
			}
		} else {
			temp = new Array("", "", "", "", "");
		}
		return temp;
	},
	
	loadFilterSettingsFromPanelSettings: function(filters){
		if (filters != undefined && filters.length > 0){
			for (i = 0; i < filters.length; i++){
				if (filters[i].settingsString != undefined){
					filterController.saveFilterFieldJSON(filters[i].settingsString, filters[i].filterCategory);
				}				
			}
		}
	},
	
	getFilterStringForChart: function(){
		var filterString = "";
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		var informanceUserFilter = "", informanceReasonFilter = "", informanceSetFilter = "", informancePartFilter = "";
		var infinityQSUserFilter = "", infinityQSTestFilter = "", infinityQSProcessFilter = "", infinityQSQPMFilter = "", infinityQSPartFilter = "";
		if(ReplayAnalytics.app.databaseSetting[chartIndex] == 'informance') {
			var array = this.getFilterFieldArray("InformanceUser");
			if (array[chartIndex] != undefined && array[chartIndex] != ""){
				informanceUserFilter = this.getStringFromFilterData(array[chartIndex], "User");
			}			
			array = this.getFilterFieldArray("reason");
			if (array[chartIndex] != undefined && array[chartIndex] != ""){
				informanceReasonFilter = this.getStringFromFilterData(array[chartIndex], "reason");
			}			
			array = this.getFilterFieldArray("InformancePart");
			if (array[chartIndex] != undefined && array[chartIndex] != ""){
				informancePartFilter = this.getStringFromFilterData(array[chartIndex], "Part");
			}			
			array = this.getFilterFieldArray("set");
			if (array[chartIndex] != undefined && array[chartIndex] != ""){
				informanceSetFilter = this.getStringFromFilterData(array[chartIndex], "set");
			}
			if (informanceUserFilter != ""){
				filterString = filterString + informanceUserFilter;
			}			
			if (informanceReasonFilter != ""){
				if (filterString != ""){
					filterString = filterString + " AND ";
				}
				filterString = filterString + informanceReasonFilter;
			}
			if (informancePartFilter != ""){
				if (filterString != ""){
					filterString = filterString + " AND ";
				}
				filterString = filterString + informancePartFilter;
			}
			if (informanceSetFilter != ""){
				if (filterString != ""){
					filterString = filterString + " AND ";
				}
				filterString = filterString + informanceSetFilter;
			}
		} else if(ReplayAnalytics.app.databaseSetting[chartIndex] == 'infinity_qs') {
			var array = this.getFilterFieldArray("InfinityQSUser");
			if (array[chartIndex] != undefined && array[chartIndex] != ""){
				infinityQSUserFilter = this.getStringFromFilterData(array[chartIndex], "User");
			}			
			array = this.getFilterFieldArray("Test");
			if (array[chartIndex] != undefined && array[chartIndex] != ""){
				infinityQSTestFilter = this.getStringFromFilterData(array[chartIndex], "Test");
			}			
			array = this.getFilterFieldArray("Name");
			if (array[chartIndex] != undefined && array[chartIndex] != ""){
				infinityQSQPMFilter = this.getStringFromFilterData(array[chartIndex], "Name");
			}			
			array = this.getFilterFieldArray("Process");
			if (array[chartIndex] != undefined && array[chartIndex] != ""){
				infinityQSProcessFilter = this.getStringFromFilterData(array[chartIndex], "Process");
			}	
			array = this.getFilterFieldArray("InfinityQSPart");
			if (array[chartIndex] != undefined && array[chartIndex] != ""){
				infinityQSPartFilter = this.getStringFromFilterData(array[chartIndex], "Part");
			}
			if (infinityQSUserFilter != ""){
				filterString = filterString + infinityQSUserFilter;
			}			
			if (infinityQSTestFilter != ""){
				if (filterString != ""){
					filterString = filterString + " AND ";
				}
				filterString = filterString + infinityQSTestFilter;
			}
			if (infinityQSQPMFilter != ""){
				if (filterString != ""){
					filterString = filterString + " AND ";
				}
				filterString = filterString + infinityQSQPMFilter;
			}
			if (infinityQSProcessFilter != ""){
				if (filterString != ""){
					filterString = filterString + " AND ";
				}
				filterString = filterString + infinityQSProcessFilter;
			}
			if (infinityQSPartFilter != ""){
				if (filterString != ""){
					filterString = filterString + " AND ";
				}
				filterString = filterString + infinityQSPartFilter;
			}
		}
		//logInfo("Final filter==" + filterString);
		var encodedFilter = "";
		try{
			encodedFilter = encodeURIComponent(filterString);
		} catch(err){
		}
		return encodedFilter;
	},
	
	getStringFromFilterData: function(array, filterCategory){
		var string1 = "`" + filterCategory + "` IN (";
		var string2 = "";
		var string3 = ")";
		var uncheckedItems = 0;
		if (array != undefined && array.length > 1){
			for (i = 0; i < array.length; i++){
				if (array[i].Checked){
					if (string2 != ""){
						string2 = string2 + ", ";
						uncheckedItems++;
					}
					string2 = string2 + "\'" + array[i].Field + "\'";					
				}
			}			
		}
		var string = "";
		if ((string2 != "") && (uncheckedItems < (array.length - 1))){
			string = string1 + string2 + string3
		}
		return string;
	},
});
Ext.define('ReplayAnalytics.controller.GlobalSync', {
	extend : 'Ext.app.Controller',
	xtype: 'globalsynccontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
			'slider0': 'slider0',
			'slider1': 'slider1',
			'slider2': 'slider2',
			'slider3': 'slider3',
			'slider4': 'slider4',
			'panel1': 'panel1',
			'panel2': 'panel2',
			'panel3': 'panel3',
			'panel4': 'panel4',	
			'fourPanelLayout': 'fourpanellayout',
			'globalSyncButton': 'segmentedbutton[id=globalsynctogglebutton]',
			'settingsButton': 'button[id=settingsbutton]',
			'globalSettingsButton': 'button[id=globalsettingsbutton]',
		},
		control: {
			'globalSyncButton': {
				toggle: 'globalSyncToggle'
			},
		},
	},
	
	globalSyncToggle: function(segmentedButton, button, isPressed) {
		this.getApplication().getController('Playback').pauseFunction();
		if(isPressed == true) {
			this.calculateGlobalSyncVariables();
			this.getFourPanelLayout().setCls('selected-panel');
			this.getPanel1().setCls('unselected-panel');
			this.getPanel2().setCls('unselected-panel');
			this.getPanel3().setCls('unselected-panel');
			this.getPanel4().setCls('unselected-panel');
			this.getSlider4().hide();
			this.getSlider2().hide();
			this.getSlider3().hide();
			this.getSlider1().hide();
			this.getSlider0().show();
			ReplayAnalytics.app.currentActivePanelIndex = 0;
			this.getApplication().getController('Main').checkForConfiguredGraphPanels();
			this.getApplication().getController('Playback').resetBackwardFunction();
			this.getSettingsButton().setDisabled(true);
			this.getGlobalSettingsButton().setDisabled(true);
		}	
		else {
			this.getSettingsButton().setDisabled(false);
			this.getGlobalSettingsButton().setDisabled(false);
			this.getFourPanelLayout().setCls('unselected-panel');
			this.getPanel1().setCls('selected-panel');
			this.getPanel2().setCls('unselected-panel');
			this.getPanel3().setCls('unselected-panel');
			this.getPanel4().setCls('unselected-panel');
			this.getSlider0().hide();
			this.getSlider2().hide();
			this.getSlider3().hide();
			this.getSlider4().hide();
			this.getSlider1().show();
			/*for(i = 1; i < 5; i++) {
				ReplayAnalytics.app.currentActivePanelIndex = i;
				ReplayAnalytics.app.sliders[i].setValue(0);
				ReplayAnalytics.app.sliders[i].fireEvent('change',ReplayAnalytics.app.sliders[i],i);
			}*/
			ReplayAnalytics.app.currentActivePanelIndex = 1;
		}	
	},
	
	calculateGlobalSyncVariables: function(){
		var chartIndex = 0;
		for(i = 0; i < 15; i++) {
			ReplayAnalytics.app.chartLengths[i] = 0;
		}
		var globalindex = 0;
		for(i = 0; i < 5; i++) {
			ReplayAnalytics.app.chartValue[i] = 0;
		}
		for(i = 0; i < 5; i++) {
			if(ReplayAnalytics.app.startDate[i] != undefined) {
				ReplayAnalytics.app.currentStartDate[i] = new Date(ReplayAnalytics.app.startDate[i]);
			}
		}
		for(i = 0; i < 5; i++) {
			ReplayAnalytics.app.chartIsRunning[i] = false;
			ReplayAnalytics.app.chartIsPaused[i] = false;
			ReplayAnalytics.app.chartFinished[i] = false;
			ReplayAnalytics.app.initialPosition[i] = true;
		}	
		ReplayAnalytics.app.numberActiveCharts = 0;
		for(i = 1; i < 5; i++) {
			if(ReplayAnalytics.app.dateSet[i] == true) {
				ReplayAnalytics.app.numberActiveCharts = ReplayAnalytics.app.numberActiveCharts + 1;
			}
		}
		ReplayAnalytics.app.chartsFinished = 0;
		ReplayAnalytics.app.globalIndex = 0;
		ReplayAnalytics.app.firstGlobalDate = true;
		ReplayAnalytics.app.globalSyncPressed = true;
		ReplayAnalytics.app.nullSearchReturnedTrue = false;
		ReplayAnalytics.app.finishCall = false;
		ReplayAnalytics.app.sandwich = false;
		ReplayAnalytics.app.testNextIncrement = null;
		var dateIndex = new Array();
		var startArray = new Array();
		var endArray = new Array();
		var earliestCharts = new Array(); //Array storing the charts with the earliest start dates upon global sync initialization
		var firstCharts = new Array(); //Array storing the earliest chart(s) with the largest granularity upon global sync initialization
		var globalSliderMax = 0;
		var count = 0;
		var valueGranularities = new Array();
		valueGranularities = ReplayAnalytics.app.valueGranularities;
		for(i = 1; i < 5; i++) {
			if(ReplayAnalytics.app.dateSet[i] == true) {
				//globalSliderMax = globalSliderMax + Ext.getCmp('mySlider' + i).getMaxValue();
				startArray[count] = ReplayAnalytics.app.currentStartDate[i].getTime();
				dateIndex[count] = i;
				endArray[count] = ReplayAnalytics.app.currentEndDate[i].getTime();
				count = count + 1;
			}
		};
		for(i = 0; i < count; i++) {
			if(count == 0) {
			}
			else if(count == 1) {
				ReplayAnalytics.app.globalStartDate = startArray[i];
				earliestCharts[0] = dateIndex[i];
			}
			else if(count == 2) {
				if(startArray[i] <= startArray[(i+1)%count]) {
					ReplayAnalytics.app.globalStartDate = startArray[i];
					earliestCharts[0] = dateIndex[i];
					if(startArray[i] == startArray[(i+1)%count]) {
						earliestCharts[1] = dateIndex[(i+1)%count];
					}	
				}
				if(endArray[i] >= endArray[(i+1)%count]) {
					ReplayAnalytics.app.globalEndDate = endArray[i];
				}
			}	
			else if(count == 3) {
				if(startArray[i] <= startArray[(i+1)%count] && startArray[i] <= startArray[(i+2)%count]) {
					ReplayAnalytics.app.globalStartDate = startArray[i];
					earliestCharts[0] = dateIndex[i];
					if(startArray[i] == startArray[(i+1)%count] && startArray[i] != startArray[(i+2)%count]) {
						earliestCharts[1] = dateIndex[(i+1)%count];
					}
					else if(startArray[i] == startArray[(i+2)%count] && startArray[i] != startArray[(i+1)%count]) {
						earliestCharts[1] = dateIndex[(i+2)%count];
					}
					else if(startArray[i] == startArray[(i+1)%count] && startArray[i] == startArray[(i+2)%count]) {
						earliestCharts[1] = dateIndex[(i+1)%count];
						earliestCharts[2] = dateIndex[(i+2)%count];
					}	
				}
				if(endArray[i] >= endArray[(i+1)%count] && endArray[i] >= endArray[(i+2)%count]) {
					ReplayAnalytics.app.globalEndDate = endArray[i];
				}
			}	
			else {	
				if(startArray[i] <= startArray[(i+1)%count] && startArray[i] <= startArray[(i+2)%count] && startArray[i] <= startArray[(i+3)%count]) {
					ReplayAnalytics.app.globalStartDate = startArray[i];
					earliestCharts[0] = dateIndex[i];
					if(startArray[i] == startArray[(i+1)%count] && startArray[i] != startArray[(i+2)%count] && startArray[i] != startArray[(i+3)%count]) {
						earliestCharts[1] = dateIndex[(i+1)%count];
					}
					else if(startArray[i] == startArray[(i+2)%count] && startArray[i] != startArray[(i+1)%count] && startArray[i] != startArray[(i+3)%count]) {
						earliestCharts[1] = dateIndex[(i+2)%count];
					}
					else if(startArray[i] == startArray[(i+3)%count] && startArray[i] != startArray[(i+1)%count] && startArray[i] != startArray[(i+2)%count]) {
						earliestCharts[1] = dateIndex[(i+3)%count];
					}	
					else if(startArray[i] == startArray[(i+1)%count] && startArray[i] == startArray[(i+2)%count] && startArray[i] != startArray[(i+3)%count]) {
						earliestCharts[1] = dateIndex[(i+1)%count];
						earliestCharts[2] = dateIndex[(i+2)%count];
					}
					else if(startArray[i] == startArray[(i+1)%count] && startArray[i] != startArray[(i+2)%count] && startArray[i] == startArray[(i+3)%count]) {
						earliestCharts[1] = dateIndex[(i+1)%count];
						earliestCharts[2] = dateIndex[(i+3)%count];
					}
					else if(startArray[i] != startArray[(i+1)%count] && startArray[i] == startArray[(i+2)%count] && startArray[i] == startArray[(i+3)%count]) {
						earliestCharts[1] = dateIndex[(i+2)%count];
						earliestCharts[2] = dateIndex[(i+3)%count];
					}
					else if(startArray[i] == startArray[(i+1)%count] && startArray[i] == startArray[(i+2)%count] && startArray[i] == startArray[(i+3)%count]) {
						earliestCharts[1] = dateIndex[(i+1)%count];
						earliestCharts[2] = dateIndex[(i+2)%count];
						earliestCharts[3] = dateIndex[(i+3)%count];
					}
				}	
				if(endArray[i] >= endArray[(i+1)%count] && endArray[i] >= endArray[(i+2)%count] && endArray[i] >= endArray[(i+3)%count]) {
					ReplayAnalytics.app.globalEndDate = endArray[i];
				}	
			}	
		};
		for(i = 0; i < earliestCharts.length; i++) {
			if(earliestCharts.length == 0) {
			}
			else if(earliestCharts.length == 1) {
				firstCharts[0] = earliestCharts[0];
			}
			else if(earliestCharts.length == 2) {
				if(valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+1)%earliestCharts.length]]) {
					firstCharts[0] = earliestCharts[i];
					if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]]) {
						firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
					}
				}
			}	
			else if(earliestCharts.length == 3) {
				if(valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+2)%earliestCharts.length]]) {
					firstCharts[0] = earliestCharts[i];
					if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+2)%earliestCharts.length]]) {
						firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
					}
					else if(valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]]) {
						firstCharts[1] = earliestCharts[(i+2)%earliestCharts.length];
					}
					else if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]]) {
						firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
						firstCharts[2] = earliestCharts[(i+2)%earliestCharts.length];
					}	
				}
			}	
			else {
				if(valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
					firstCharts[0] = earliestCharts[i];
					if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
						firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
					}
					else if(valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
						firstCharts[1] = earliestCharts[(i+2)%earliestCharts.length];
					}
					else if(valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
						firstCharts[1] = earliestCharts[(i+3)%earliestCharts.length];
					}
					else if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
						firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
						firstCharts[2] = earliestCharts[(i+2)%earliestCharts.length];
					}
					else if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
						firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
						firstCharts[2] = earliestCharts[(i+3)%earliestCharts.length];
					}
					else if(valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
						firstCharts[1] = earliestCharts[(i+2)%earliestCharts.length];
						firstCharts[2] = earliestCharts[(i+3)%earliestCharts.length];
					}
					else if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
						firstCharts[2] = earliestCharts[(i+2)%earliestCharts.length];
						firstCharts[3] = earliestCharts[(i+3)%earliestCharts.length];
						firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
					}
				}
			}
		};
		for(i = 0; i < firstCharts.length; i++) {
			ReplayAnalytics.app.chartIsRunning[firstCharts[i]] = true;
			ReplayAnalytics.app.initialPosition[firstCharts[i]] = false;
		}
		//The rest of the global sync logic is in the app.js file *
		//ReplayAnalytics.app.globalSync();
		this.globalSync();
		var sum = 0;
		for(i = 0; i < ReplayAnalytics.app.chartSection.length; i++) {
			if (!isNaN(ReplayAnalytics.app.chartLengths[i])){
				sum = sum + ReplayAnalytics.app.chartLengths[i];
			}											
		}
		//ReplayAnalytics.app.differentialMultiplier[chartIndex] = Math.round(100 / sum);	
		ReplayAnalytics.app.differentialMultiplier[chartIndex] = 1;
		Ext.ComponentQuery.query('slider'+chartIndex)[0].setMaxValue(ReplayAnalytics.app.differentialMultiplier[chartIndex] * sum);
	    ReplayAnalytics.app.maximumPositions[chartIndex] = Ext.ComponentQuery.query('slider'+chartIndex)[0].getMaxValue();
		hideLoadingMask();
		ReplayAnalytics.app.testcount = ReplayAnalytics.app.testcount + 1;
		logMessage('chartIndex in global end '+chartIndex);
		this.calculateGlobalSyncChartPositionsMap();
	},
	
	globalSyncSliderFunctionChange: function(value, chartIndex){

		//if(value == 0 /*&& ReplayAnalytics.app.testcount < 2*/) {
		//	
		//}
		//else {
			//hideLoadingMask();
			//ReplayAnalytics.app.playChartsGlobal(value);
			this.playChartsGlobal(value);
		//}
	},
	
	globalSync: function() {
		var counter = 0;
		while(ReplayAnalytics.app.chartsFinished != ReplayAnalytics.app.numberActiveCharts && counter < 100) {
		//console.log('chartsFinished = '+ReplayAnalytics.app.chartsFinished);
			var chartUsed = false;
			var i = 1;
			while(i < 5) {
				if(ReplayAnalytics.app.currentStartDate[i] <= ReplayAnalytics.app.currentEndDate[i]) {
					if(ReplayAnalytics.app.chartIsRunning[i] == true && ReplayAnalytics.app.chartIsPaused[i] != true) {
						previousDate = new Date(ReplayAnalytics.app.currentStartDate[i]);
						switch(ReplayAnalytics.app.granularities[i]) {
						case 'Hourly':
							ReplayAnalytics.app.currentStartDate[i].setMinutes(ReplayAnalytics.app.currentStartDate[i].getMinutes() + 60);
							break;
						case 'Daily':
							ReplayAnalytics.app.currentStartDate[i].setDate(ReplayAnalytics.app.currentStartDate[i].getDate() + 1);
							break;
						case 'Weekly':
							ReplayAnalytics.app.currentStartDate[i].setDate(ReplayAnalytics.app.currentStartDate[i].getDate() + 7);
							break;
						case 'Monthly':
							ReplayAnalytics.app.currentStartDate[i].setMonth(ReplayAnalytics.app.currentStartDate[i].getMonth() + 1);
							ReplayAnalytics.app.currentStartDate[i].setDate(1);
						break;
						}
						var test;
						if(ReplayAnalytics.app.chartFinished[i] != true && ReplayAnalytics.app.currentStartDate[i].getTime() > ReplayAnalytics.app.currentEndDate[i].getTime()) {
							//console.log('for index '+ i);
							//console.log('first chart stopped');
							ReplayAnalytics.app.chartFinished[i] = true;
							ReplayAnalytics.app.chartsFinished = ReplayAnalytics.app.chartsFinished + 1;
							//console.log('chartsFinished = '+ReplayAnalytics.app.chartsFinished);
					
							if(ReplayAnalytics.app.chartsFinished == ReplayAnalytics.app.numberActiveCharts) {
								//console.log('chartsfinished = '+ReplayAnalytics.app.chartsFinished);
								//console.log('number active charts = '+ReplayAnalytics.app.numberActiveCharts);
						
								var sectionIndexArray = new Array();
								var j = 0;
								for(i = 1; i < 5; i++) {
									if(ReplayAnalytics.app.chartIsRunning[i] == true && ReplayAnalytics.app.chartIsPaused[i] != true) {
										sectionIndexArray[j] = i;
										j = j + 1;
										ReplayAnalytics.app.chartIsPaused[i] = true;
									}	
								}
								ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex] = sectionIndexArray;
								ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] - 1;
						
								return;
							}	
							var sectionIndexArray = new Array();
							var j = 0;
							for(var iii = 1; iii < 5; iii++) {
								if(ReplayAnalytics.app.chartIsRunning[iii] == true && ReplayAnalytics.app.chartIsPaused[iii] != true) {
									sectionIndexArray[j] = iii;
									j = j + 1;
									ReplayAnalytics.app.chartIsPaused[iii] = true;
								}	
							}
							if(this.nullSearch(ReplayAnalytics.app.currentStartDate[i],previousDate) == true) {
								ReplayAnalytics.app.nullSearchReturnedTrue = true;
							}	
							//console.log(ReplayAnalytics.app.chartIsPaused[1]);
							//console.log('sectionindexarray');
							//console.log(sectionIndexArray);
							ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex] = sectionIndexArray;
							//chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
							ReplayAnalytics.app.globalIndex = ReplayAnalytics.app.globalIndex + 1;
							//chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
							ReplayAnalytics.app.finishCall = true;
							this.globalSyncLogic(ReplayAnalytics.app.globalEndDate,previousDate,i);
							//currentStartDate[i].setDate(currentStartDate[i].getDate() + 1);
						}
						if(chartUsed == false) {
							//console.log('globalSyncLogic called with index '+i);
							test = this.globalSyncLogic(ReplayAnalytics.app.currentStartDate[i],previousDate,i);
							if(test != true) {	
								chartUsed = true;
							}	
						}
					}	
				}
				else if(ReplayAnalytics.app.currentStartDate[i] == undefined) {
				}
				else if(ReplayAnalytics.app.chartFinished[i] != true && ReplayAnalytics.app.currentStartDate[i].getTime() > ReplayAnalytics.app.currentEndDate[i].getTime()) {
					//console.log('for index '+ i);
					//console.log('first chart stopped');
					ReplayAnalytics.app.chartFinished[i] = true;
					ReplayAnalytics.app.chartsFinished = ReplayAnalytics.app.chartsFinished + 1;
					//console.log('chartsFinished = '+ReplayAnalytics.app.chartsFinished);
					
					if(ReplayAnalytics.app.chartsFinished == ReplayAnalytics.app.numberActiveCharts) {
						//console.log('chartsfinished = '+ReplayAnalytics.app.chartsFinished);
						//console.log('number active charts = '+ReplayAnalytics.app.numberActiveCharts);
						
						var sectionIndexArray = new Array();
						var j = 0;
						for(i = 1; i < 5; i++) {
							if(ReplayAnalytics.app.chartIsRunning[i] == true && ReplayAnalytics.app.chartIsPaused[i] != true) {
								sectionIndexArray[j] = i;
								j = j + 1;
								ReplayAnalytics.app.chartIsPaused[i] = true;
							}	
						}
						ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex] = sectionIndexArray;
						ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] - 1;
						
						return;
					}
					
					//console.log('chartisRunning2');
					//console.log(ReplayAnalytics.app.chartIsRunning[2]);
					//console.log('chartIsRunning1');
					//console.log(ReplayAnalytics.app.chartIsRunning[1]);
					//console.log('chartisPaused2');
					//console.log(ReplayAnalytics.app.chartIsPaused[2]);
					//console.log('chartIsPaused1');
					//console.log(ReplayAnalytics.app.chartIsPaused[1]);
					
					var sectionIndexArray = new Array();
					var j = 0;
					for(ii = 1; ii < 5; ii++) {
						if(ReplayAnalytics.app.chartIsRunning[ii] == true && ReplayAnalytics.app.chartIsPaused[ii] != true) {
							sectionIndexArray[j] = ii;
							j = j + 1;
							ReplayAnalytics.app.chartIsPaused[ii] = true;
						}	
					}
					//console.log('sectionindexarray');
					//console.log(sectionIndexArray);
					ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex] = sectionIndexArray;
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] - 1;
					ReplayAnalytics.app.globalIndex = ReplayAnalytics.app.globalIndex + 1;
					//chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
					ReplayAnalytics.app.finishCall = true;
					this.globalSyncLogic(ReplayAnalytics.app.globalEndDate,ReplayAnalytics.app.currentStartDate[i],i);
					//currentStartDate[i].setDate(currentStartDate[i].getDate() + 1);
					
				}
				//console.log('breakpoint');
				i++;
				//console.log(i);
			}
			counter = counter + 1;
		}
		var j = 0;
		for(i = 1; i < 5; i++) {
			if(ReplayAnalytics.app.chartIsRunning[i] == true && ReplayAnalytics.app.chartIsPaused[i] != true) {
				sectionIndexArray[j] = i;
				j = j + 1;
				ReplayAnalytics.app.chartIsPaused[i] = true;
			}	
		}
		ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex] = sectionIndexArray;
		return;
	},
	
	globalSyncLogic: function(presentDate,previousDate,index) {	
			var startArray = new Array();
			var earliestCharts = new Array();
			var firstCharts = new Array();
			var dateIndex = new Array();
			var earlierDateFound = false;
			var largerEndDate = false;
			var smallerEndDate = false;
			var sectionIndexArray = new Array();
			var count = 0;
			var valueGranularities = new Array();
			valueGranularities = ReplayAnalytics.app.valueGranularities;
			//console.log(ReplayAnalytics.app.dateSet[1] && (ReplayAnalytics.app.chartIsRunning[1] || ReplayAnalytics.app.chartIsPaused[1]));
			for(i = 1; i < 5; i++) {
				if(ReplayAnalytics.app.dateSet[i] == true && (ReplayAnalytics.app.chartIsRunning[i] == false || ReplayAnalytics.app.chartIsPaused[i] == true) && ReplayAnalytics.app.chartFinished[i] == false && ReplayAnalytics.app.currentStartDate[i] < presentDate && ReplayAnalytics.app.currentStartDate[i] >= previousDate) {
					startArray[count] = ReplayAnalytics.app.currentStartDate[i].getTime();
					dateIndex[count] = i;
					count = count + 1;
					earlierDateFound = true;	
				}
			}
			if(earlierDateFound == false) {
				ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] + 1;
				return false;
			}
			/*
			else if(currentStartDate[index] > currentEndDate[index] && chartFinished[index] != true) {
				chartFinished[index] = true;
				chartsFinished = chartsFinished + 1;
				//console.log('chartsFinished = '+chartsFinished);
					
				if(chartsFinished == numberActiveCharts) {
					//console.log('chartsfinished = '+chartsFinished);
					//console.log('number active charts = '+numberActiveCharts);
						
					var sectionIndexArray = new Array();
					var j = 0;
					for(i = 1; i < 5; i++) {
						if(chartIsRunning[i] == true && chartIsPaused[i] != true) {
							sectionIndexArray[j] = i;
							j = j + 1;
							chartIsPaused[i] = true;
						}	
					}
					chartSection[globalIndex] = sectionIndexArray;
					chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
					
					return false;
				}
			}	
			*/	
			for(i = 0; i < count; i++) {
				if(count == 0) {
				}
				else if(count == 1) {
					earliestCharts[0] = dateIndex[i];
				}
				else if(count == 2) {
					if(startArray[i] <= startArray[(i+1)%count]) {
						earliestCharts[0] = dateIndex[i];
						if(startArray[i] == startArray[(i+1)%count]) {
							earliestCharts[1] = dateIndex[(i+1)%count];
						}	
					}
				}	
				else if(count == 3) {
					if(startArray[i] <= startArray[(i+1)%count] && startArray[i] <= startArray[(i+2)%count]) {
						earliestCharts[0] = dateIndex[i];
						if(startArray[i] == startArray[(i+1)%count] && startArray[i] != startArray[(i+2)%count]) {
							earliestCharts[1] = dateIndex[(i+1)%count];
						}
						else if(startArray[i] == startArray[(i+2)%count] && startArray[i] != startArray[(i+1)%count]) {
							earliestCharts[1] = dateIndex[(i+2)%count];
						}
						else if(startArray[i] == startArray[(i+1)%count] && startArray[i] == startArray[(i+2)%count]) {
							earliestCharts[1] = dateIndex[(i+1)%count];
							earliestCharts[2] = dateIndex[(i+2)%count];
						}	
					}
				}	
				else {	
					if(startArray[i] <= startArray[(i+1)%count] && startArray[i] <= startArray[(i+2)%count] && startArray[i] <= startArray[(i+3)%count]) {
						earliestCharts[0] = dateIndex[i];
						if(startArray[i] == startArray[(i+1)%count] && startArray[i] != startArray[(i+2)%count] && startArray[i] != startArray[(i+3)%count]) {
							earliestCharts[1] = dateIndex[(i+1)%count];
						}
						else if(startArray[i] == startArray[(i+2)%count] && startArray[i] != startArray[(i+1)%count] && startArray[i] != startArray[(i+3)%count]) {
							earliestCharts[1] = dateIndex[(i+2)%count];
						}
						else if(startArray[i] == startArray[(i+3)%count] && startArray[i] != startArray[(i+1)%count] && startArray[i] != startArray[(i+2)%count]) {
							earliestCharts[1] = dateIndex[(i+3)%count];
						}	
						else if(startArray[i] == startArray[(i+1)%count] && startArray[i] == startArray[(i+2)%count] && startArray[i] != startArray[(i+3)%count]) {
							earliestCharts[1] = dateIndex[(i+1)%count];
							earliestCharts[2] = dateIndex[(i+2)%count];
						}
						else if(startArray[i] == startArray[(i+1)%count] && startArray[i] != startArray[(i+2)%count] && startArray[i] == startArray[(i+3)%count]) {
							earliestCharts[1] = dateIndex[(i+1)%count];
							earliestCharts[2] = dateIndex[(i+3)%count];
						}
						else if(startArray[i] != startArray[(i+1)%count] && startArray[i] == startArray[(i+2)%count] && startArray[i] == startArray[(i+3)%count]) {
							earliestCharts[1] = dateIndex[(i+2)%count];
							earliestCharts[2] = dateIndex[(i+3)%count];
						}
						else if(startArray[i] == startArray[(i+1)%count] && startArray[i] == startArray[(i+2)%count] && startArray[i] == startArray[(i+3)%count]) {
							earliestCharts[1] = dateIndex[(i+1)%count];
							earliestCharts[2] = dateIndex[(i+2)%count];
							earliestCharts[3] = dateIndex[(i+3)%count];
						}
					}
				}	
			};
			for(i = 0; i < earliestCharts.length; i++) {
				if(earliestCharts.length == 0) {
				}
				else if(earliestCharts.length == 1) {
					firstCharts[0] = earliestCharts[0];
				}
				else if(earliestCharts.length == 2) {
					if(valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+1)%earliestCharts.length]]) {
						firstCharts[0] = earliestCharts[i];
						if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]]) {
							firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
						}
					}
				}	
				else if(earliestCharts.length == 3) {
					if(valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+2)%earliestCharts.length]]) {
						firstCharts[0] = earliestCharts[i];
						if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+2)%earliestCharts.length]]) {
							firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
						}
						else if(valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]]) {
							firstCharts[1] = earliestCharts[(i+2)%earliestCharts.length];
						}
						else if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]]) {
							firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
							firstCharts[2] = earliestCharts[(i+2)%earliestCharts.length];
						}	
					}
				}	
				else {
					if(valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] >= valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
						firstCharts[0] = earliestCharts[i];
						if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
							firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
						}
						else if(valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
							firstCharts[1] = earliestCharts[(i+2)%earliestCharts.length];
						}
						else if(valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
							firstCharts[1] = earliestCharts[(i+3)%earliestCharts.length];
						}
						else if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
							firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
							firstCharts[2] = earliestCharts[(i+2)%earliestCharts.length];
						}
						else if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
							firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
							firstCharts[2] = earliestCharts[(i+3)%earliestCharts.length];
						}
						else if(valueGranularities[earliestCharts[i]] != valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
							firstCharts[1] = earliestCharts[(i+2)%earliestCharts.length];
							firstCharts[2] = earliestCharts[(i+3)%earliestCharts.length];
						}
						else if(valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+1)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+2)%earliestCharts.length]] && valueGranularities[earliestCharts[i]] == valueGranularities[earliestCharts[(i+3)%earliestCharts.length]]) {
							firstCharts[2] = earliestCharts[(i+2)%earliestCharts.length];
							firstCharts[3] = earliestCharts[(i+3)%earliestCharts.length];
							firstCharts[1] = earliestCharts[(i+1)%earliestCharts.length];
						}
					}
				}
			};
				
				//console.log('first charts are:');
				//console.log(firstCharts);
				var testParallelDates = false;
				
				if(ReplayAnalytics.app.finishCall == true && valueGranularities[index] < valueGranularities[firstCharts[0]] && firstCharts[0] < index && ReplayAnalytics.app.chartsFinished == ReplayAnalytics.app.numberActiveCharts -1) {
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] + 1;
					//console.log('chartLengths incremented. value now '+ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex]);
				}	
				if(ReplayAnalytics.app.finishCall == true && valueGranularities[index] < valueGranularities[firstCharts[0]] && firstCharts[0] > index && ReplayAnalytics.app.chartsFinished == ReplayAnalytics.app.numberActiveCharts -1) {
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] + 2;
					//console.log('chartLengths incremented. value now '+ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex]);
				}	
				if(ReplayAnalytics.app.finishCall == true && ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex-1].length < 2) {
					for(iii = 0; iii < firstCharts.length; iii++) {
						sectionIndexArray[iii] = firstCharts[iii];
					}
				}	
				var counting_1 = 0;
				var counting_2 = 0;
				if(ReplayAnalytics.app.finishCall == true && ReplayAnalytics.app.chartsFinished < ReplayAnalytics.app.numberActiveCharts - 1) {
					if(ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex-1].length > 1) {
					for(u = 0; u < firstCharts.length; u++) {
						for(uu = 0; uu < ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex-1].length; uu++) {
							if(firstCharts[u] == ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex-1][uu] && firstCharts[u] < index) {
								counting_1 = counting_1 + 1;
							}
							else if(firstCharts[u] == ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex-1][uu] && firstCharts[u] > index) {
								counting_2 = counting_2 + 1;
							}	
						}
					}
					}
				}
				if(ReplayAnalytics.app.finishCall == true && ReplayAnalytics.app.chartsFinished < ReplayAnalytics.app.numberActiveCharts - 1 && firstCharts[0] < index && ReplayAnalytics.app.initialPosition[firstCharts[0]] == true) {
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] - 1;
					//console.log('chartLengths decremented. value now '+ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex]);
				}	
				if(counting_1 != 0) {
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex-1] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex-1] - 1;
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] + 1;
					for(iii = 0; iii < firstCharts.length; iii++) {
						sectionIndexArray[iii] = firstCharts[iii];
					}
				}
				if(counting_2 != 0) {
					//chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
					//chartLengths[globalIndex] = chartLengths[globalIndex] + 1;
					for(iii = 0; iii < firstCharts.length; iii++) {
						sectionIndexArray[iii] = firstCharts[iii];
					}
				}	
				//console.log('compare...');
				//console.log(ReplayAnalytics.app.currentStartDate[firstCharts[0]]);
				//console.log(previousDate);
				if(ReplayAnalytics.app.finishCall == true && ReplayAnalytics.app.firstGlobalDate != true && ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex-1].length > 1 && ReplayAnalytics.app.chartsFinished == ReplayAnalytics.app.numberActiveCharts -1) {
					//console.log('comparison satisfied');
					//console.log(ReplayAnalytics.app.chartLengths);
					//console.log(ReplayAnalytics.app.globalIndex);
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] + 1;
					for(iii = 0; iii < firstCharts.length; iii++) {
						sectionIndexArray[iii] = firstCharts[iii];
					}	
				}
				else if(ReplayAnalytics.app.finishCall == true && ReplayAnalytics.app.firstGlobalDate == true && firstCharts[0] > index && ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex-1].length > 1 && ReplayAnalytics.app.chartsFinished == ReplayAnalytics.app.numberActiveCharts -1) {
					for(iii = 0; iii < firstCharts.length; iii++) {
						sectionIndexArray[iii] = firstCharts[iii];
					}
				}
				else if(ReplayAnalytics.app.finishCall == true && ReplayAnalytics.app.firstGlobalDate == true && firstCharts[0] < index && ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex-1].length > 1 && ReplayAnalytics.app.chartsFinished == ReplayAnalytics.app.numberActiveCharts -1) {
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex-1] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex-1] - 1;
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] + 2;
					for(iii = 0; iii < firstCharts.length; iii++) {
						sectionIndexArray[iii] = firstCharts[iii];
					}
				}
				
				/*
				if(testParallelDates == true) {
					chartLengths[globalIndex+1] = chartLengths[globalIndex+1] + 1;
					//console.log('testparalleldates added value of 1');
					//console.log('chartLengths = '+chartLengths[globalIndex + 1]);
					//console.log(chartSection);
					//console.log(globalIndex);
				}	
				*/
				var jj = 0;
				var j = 0;
				if(ReplayAnalytics.app.finishCall == false) {
					for(i = 1; i < 5; i++) {
						if(ReplayAnalytics.app.chartIsRunning[i] == true && ReplayAnalytics.app.chartIsPaused[i] != true) {
							sectionIndexArray[j] = i;
							j = j + 1;
							ReplayAnalytics.app.chartIsPaused[i] = true;
						}	
					}
				}
				if(j == 2) {
					//console.log('chart '+sectionIndexArray[1]+' updated.');
					switch(ReplayAnalytics.app.granularities[sectionIndexArray[1]]) {
						case 'Hourly':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].setMinutes(ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].getMinutes() + 60);
							break;
						case 'Daily':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].setDate(ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].getDate() + 1);
							break;
						case 'Weekly':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].setDate(ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].getDate() + 7);
							break;
						case 'Monthly':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].setDate(1);
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].setMonth(ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].getMonth() + 1);
							break;
					}
					if(ReplayAnalytics.app.chartFinished[sectionIndexArray[1]] != true && ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].getTime() > ReplayAnalytics.app.currentEndDate[sectionIndexArray[1]].getTime()) {
						ReplayAnalytics.app.chartFinished[sectionIndexArray[1]] = true;
						ReplayAnalytics.app.chartsFinished = ReplayAnalytics.app.chartsFinished + 1;
					}	
				}	
				else if(j == 3) { 
					switch(ReplayAnalytics.app.granularities[sectionIndexArray[1]]) {
						case 'Hourly':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].setMinutes(ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].getMinutes() + 60);
							break;
						case 'Daily':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].setDate(ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].getDate() + 1);
							break;
						case 'Weekly':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].setDate(ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].getDate() + 7);
							break;
						case 'Monthly':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].setDate(1);
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].setMonth(ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].getMonth() + 1);
							break;
					}
					if(ReplayAnalytics.app.chartFinished[sectionIndexArray[1]] != true && ReplayAnalytics.app.currentStartDate[sectionIndexArray[1]].getTime() > ReplayAnalytics.app.currentEndDate[sectionIndexArray[1]].getTime()) {
						ReplayAnalytics.app.chartFinished[sectionIndexArray[1]] = true;
						ReplayAnalytics.app.chartsFinished = ReplayAnalytics.app.chartsFinished + 1;
					}
					switch(ReplayAnalytics.app.granularities[sectionIndexArray[2]]) {
						case 'Hourly':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[2]].setMinutes(ReplayAnalytics.app.currentStartDate[sectionIndexArray[2]].getMinutes() + 60);
							break;
						case 'Daily':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[2]].setDate(ReplayAnalytics.app.currentStartDate[sectionIndexArray[2]].getDate() + 1);
							break;
						case 'Weekly':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[2]].setDate(ReplayAnalytics.app.currentStartDate[sectionIndexArray[2]].getDate() + 7);
							break;
						case 'Monthly':
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[2]].setDate(1);
							ReplayAnalytics.app.currentStartDate[sectionIndexArray[2]].setMonth(ReplayAnalytics.app.currentStartDate[sectionIndexArray[2]].getMonth() + 1);
							break;
					}
					if(ReplayAnalytics.app.chartFinished[sectionIndexArray[2]] != true && ReplayAnalytics.app.currentStartDate[sectionIndexArray[2]].getTime() > ReplayAnalytics.app.currentEndDate[sectionIndexArray[2]].getTime()) {
						ReplayAnalytics.app.chartFinished[sectionIndexArray[2]] = true;
						ReplayAnalytics.app.chartsFinished = ReplayAnalytics.app.chartsFinished + 1;
					}
				}
				//console.log('sectionindexarray');
				//console.log(sectionIndexArray);
				if(ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] != 0) {
					for(ii = 0; ii < firstCharts.length; ii++) {
						if(ReplayAnalytics.app.currentStartDate[index] > ReplayAnalytics.app.currentEndDate[firstCharts[ii]]) {
							//jj = jj + 1;
						}
					}
					if(jj != 0) {
						ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex+1] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex+1] + 1;
						//console.log('chartlengths[globalindex + 1] incremented. value now '+ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex+1]);

					}
					ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex] = sectionIndexArray;
					if(ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex].length > 1) {
						for(i = 0; i < ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex].length; i++) {
							if(ReplayAnalytics.app.currentEndDate[ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex][0]] > ReplayAnalytics.app.currentEndDate[ReplayAnalytics.app.chartSection[ReplayAnalytics.app.globalIndex][(i+1)]]) {
								largerEndDate = true;
							}
							/*
							else if(currentEndDate[chartSection[globalIndex][0]] < currentEndDate[chartSection[globalIndex][(i+1)]]) {
								smallerEndDate = true;
							}	
							*/
						}
					}
					if(largerEndDate == true) {
						if(jj != 0) {
							ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] - 1;
						}
						//chartLengths[globalIndex + 1] = 1;
						//console.log('chartlengths[globalindex + 1] incremented. value now '+ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex+1]);
					}
					/*
					else if(smallerEndDate == true) {
						if(jj != 0) {
							chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
						}
						chartLengths[globalIndex + 2] = 1;
						//console.log('chartlengths[globalindex + 1] incremented. value now '+chartLengths[globalIndex+1]);
					}	
					*/
					ReplayAnalytics.app.globalIndex = ReplayAnalytics.app.globalIndex + 1;
				}	
				var sum = 0;
				for(i = 0; i < firstCharts.length; i++) {
					if(ReplayAnalytics.app.currentStartDate[firstCharts[i]].getTime() == previousDate.getTime() && valueGranularities[firstCharts[i]] == valueGranularities[index] && ReplayAnalytics.app.currentStartDate[index] <= ReplayAnalytics.app.currentEndDate[index]) {
						if(ReplayAnalytics.app.currentEndDate[index] > ReplayAnalytics.app.currentEndDate[firstCharts[i]]) {
							ReplayAnalytics.app.sandwich = true;
						}	
						sum = sum + 1;
						/*
						for(j = 1; j < 5; j++) {
							if(chartIsRunning[j] == true) {
								chartIsPaused[j] = false;
							}
						}
						*/
						ReplayAnalytics.app.chartIsPaused[index] = false;
						//chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
						if(firstCharts[i] < index) {
							switch(ReplayAnalytics.app.granularities[firstCharts[i]]) {
							case 'Hourly':
								ReplayAnalytics.app.currentStartDate[firstCharts[i]].setMinutes(ReplayAnalytics.app.currentStartDate[firstCharts[i]].getMinutes() + 60);
								break;
							case 'Daily':
								ReplayAnalytics.app.currentStartDate[firstCharts[i]].setDate(ReplayAnalytics.app.currentStartDate[firstCharts[i]].getDate() + 1);
								break;
							case 'Weekly':
								ReplayAnalytics.app.currentStartDate[firstCharts[i]].setDate(ReplayAnalytics.app.currentStartDate[firstCharts[i]].getDate() + 7);
								break;
							case 'Monthly':
								ReplayAnalytics.app.currentStartDate[firstCharts[i]].setDate(1);
								ReplayAnalytics.app.currentStartDate[firstCharts[i]].setMonth(ReplayAnalytics.app.currentStartDate[firstCharts[i]].getMonth() + 1);
								break;
							}	
						}
					}
				}
				if(sum != 0) {
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] + 1;
				}
				if(valueGranularities[index] < valueGranularities[firstCharts[0]] && ReplayAnalytics.app.chartFinished[index] != true && ReplayAnalytics.app.initialPosition[firstCharts[0]] == false) {
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] + 1;
				}
				if(valueGranularities[index] > valueGranularities[firstCharts[0]] && ReplayAnalytics.app.chartFinished[index] != true && ReplayAnalytics.app.initialPosition[firstCharts[0]] == false) {
					ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] = ReplayAnalytics.app.chartLengths[ReplayAnalytics.app.globalIndex] + 1;
				}
				
				for(i = 0; i < firstCharts.length; i++) {
					ReplayAnalytics.app.chartIsRunning[firstCharts[i]] = true;
					ReplayAnalytics.app.chartIsPaused[firstCharts[i]] = false;
					ReplayAnalytics.app.initialPosition[firstCharts[i]] = false;
				};	
				ReplayAnalytics.app.firstGlobalDate = false;
				if(sum != 0) {
					return false;
				}
				ReplayAnalytics.app.nullSearchReturnedTrue = false;
				ReplayAnalytics.app.finishCall = false;
			return true;
	},
		
	nullSearch: function(presentDate,previousDate) {
		var earlierDateFound = false;
		for(i = 1; i < 5; i++) {
			if(ReplayAnalytics.app.dateSet[i] == true && (ReplayAnalytics.app.chartIsRunning[i] == false || ReplayAnalytics.app.chartIsPaused[i] == true) && ReplayAnalytics.app.chartFinished[i] == false && ReplayAnalytics.app.currentStartDate[i] < presentDate && ReplayAnalytics.app.currentStartDate[i] >= previousDate) {
				earlierDateFound = true;	
			}
		}
		if(earlierDateFound == false) {
			return false;
		}
		else {
			return true;
		}
	},

	playChartsGlobal: function(value) {
		for (i = 1; i < 5; i++){
			chartPos = ReplayAnalytics.app.globalSyncChartPositions[value][i];
			if (chartPos != undefined && ReplayAnalytics.app.isChartConfigured[i]){
				this.getApplication().getController('Playback').setPanelDateCaption(i, chartPos);
				ReplayAnalytics.app.newChart[i].bindStore(ReplayAnalytics.app.jsonstore[i][chartPos]);
				//Ext.ComponentQuery.query('chart[id=chart'+i+']')[0].bindStore(ReplayAnalytics.app.jsonstore[i][chartPos]);
			}			
		}
		if (ReplayAnalytics.app.interestingMoments == 'On'){
       		playbackController.getApplication().getController('InterestingMoment').checkForInterestingMoment(0, value);
    	}
	},
	
	calculateGlobalSyncChartPositionsMap: function(){
		this.getApplication().getController('Main').checkForConfiguredGraphPanels();
		var sliderMaxValue = ReplayAnalytics.app.maximumPositions[0];
		ReplayAnalytics.app.globalSyncChartPositions = new Array();
		for(i = 0; i <= sliderMaxValue; i++) {
			ReplayAnalytics.app.globalSyncChartPositions[i] = new Array();
			for (j = 0; j < 5; j++){
				ReplayAnalytics.app.globalSyncChartPositions[i][j] = 0;
			}
		};
		//logInfo('SliderMaxValue--' + sliderMaxValue);
		for (var value = 1; value <= sliderMaxValue; value++){
			//logInfo('SliderPosition -- '+value);
			if(value <= ReplayAnalytics.app.chartLengths[0]) {
				for(j = 0; j < ReplayAnalytics.app.chartSection[0].length; j++) {
					ReplayAnalytics.app.chartValue[ReplayAnalytics.app.chartSection[0][j]] = ReplayAnalytics.app.chartValue[ReplayAnalytics.app.chartSection[0][j]] + 1;
					for(k = 0; k < 5; k++){
						if (ReplayAnalytics.app.globalSyncChartPositions[value][k] == 0){
							ReplayAnalytics.app.globalSyncChartPositions[value][k] = ReplayAnalytics.app.globalSyncChartPositions[value - 1][k];
						}												
					}
					ReplayAnalytics.app.globalSyncChartPositions[value][ReplayAnalytics.app.chartSection[0][j]] = ReplayAnalytics.app.chartValue[ReplayAnalytics.app.chartSection[0][j]];
					//logInfo('1st block-PanelIndex--'+ReplayAnalytics.app.chartSection[0][j]+'-- ChartPosition='+ReplayAnalytics.app.chartValue[ReplayAnalytics.app.chartSection[0][j]]);
				}
				continue;
			}	
			var sum = 0;
			for(i = 0; i < ReplayAnalytics.app.chartSection.length - 1; i++) {
				sum = sum + ReplayAnalytics.app.chartLengths[i];
				if(value > sum && value <= (ReplayAnalytics.app.chartLengths[i+1] + sum)) {
					for(j = 0; j < ReplayAnalytics.app.chartSection[i+1].length; j++) {
						ReplayAnalytics.app.chartValue[ReplayAnalytics.app.chartSection[i+1][j]] = ReplayAnalytics.app.chartValue[ReplayAnalytics.app.chartSection[i+1][j]] + 1;
						for(k = 0; k < 5; k++){
							if (ReplayAnalytics.app.globalSyncChartPositions[value][k] == 0){
								ReplayAnalytics.app.globalSyncChartPositions[value][k] = ReplayAnalytics.app.globalSyncChartPositions[value - 1][k];
							}
						}
						ReplayAnalytics.app.globalSyncChartPositions[value][ReplayAnalytics.app.chartSection[i+1][j]] = ReplayAnalytics.app.chartValue[ReplayAnalytics.app.chartSection[i+1][j]];
						//logInfo('2nd block -PanelIndex-'+ReplayAnalytics.app.chartSection[i+1][j]+'-- ChartPosition='+ReplayAnalytics.app.chartValue[ReplayAnalytics.app.chartSection[i+1][j]]);	
					}
					continue;
				}
			}
		}
		this.calculateIMsForGlobalSync();
	},
	
	calculateIMsForGlobalSync: function(){
		var sliderMaxValue = ReplayAnalytics.app.maximumPositions[0];
		ReplayAnalytics.app.interestingMomentsPoints[0] = new Array();
		for(i = 0; i <= sliderMaxValue; i++) {
			ReplayAnalytics.app.interestingMomentsPoints[0][i] = new Array();
			for (j = 1; j < 5; j++){
				ReplayAnalytics.app.interestingMomentsPoints[0][i][j] = new Array();
				if (ReplayAnalytics.app.isChartConfigured[j] && ReplayAnalytics.app.interestingMomentsPoints[j] != undefined){
					for (k = 0; k < ReplayAnalytics.app.interestingMomentsPoints[j].length; k++){
						if (ReplayAnalytics.app.interestingMomentsPoints[j][k] != undefined && ReplayAnalytics.app.interestingMomentsPoints[j][k].Index == ReplayAnalytics.app.globalSyncChartPositions[i][j]){
							ReplayAnalytics.app.interestingMomentsPoints[0][i][j].push(ReplayAnalytics.app.interestingMomentsPoints[j][k]);
						}						
					}
				}
			}
		}		
		ReplayAnalytics.app.globalManualIMs = new Array();
		if (ReplayAnalytics.app.currentDashboard != undefined){
			for(i = 0; i <= sliderMaxValue; i++) {
				ReplayAnalytics.app.globalManualIMs[i] = new Array();
				var manualIMs = undefined;
				for (j = 1; j < 5; j++){
					ReplayAnalytics.app.globalManualIMs[i][j] = new Array();
					switch(j){
						case 1: manualIMs = ReplayAnalytics.app.currentDashboard.panel1Settings.manualIMs; break;
						case 2: manualIMs = ReplayAnalytics.app.currentDashboard.panel2Settings.manualIMs; break;
						case 3: manualIMs = ReplayAnalytics.app.currentDashboard.panel3Settings.manualIMs; break;
						case 4: manualIMs = ReplayAnalytics.app.currentDashboard.panel4Settings.manualIMs; break;
					}
					if (manualIMs != undefined && manualIMs.length > 0){
						for (k = 0; k < manualIMs.length; k++){
							if (i != 0 && ReplayAnalytics.app.globalSyncChartPositions[i][j] != ReplayAnalytics.app.globalSyncChartPositions[i-1][j]){
								if (manualIMs[k].imIndex == ReplayAnalytics.app.globalSyncChartPositions[i][j]){
									if (manualIMs[k].imIndex != 0 || ReplayAnalytics.app.globalSyncChartPositions[i][j] != ReplayAnalytics.app.globalSyncChartPositions[i+1][j]){
										ReplayAnalytics.app.globalManualIMs[i][j].push(manualIMs[k]);
									}									
								}
							} else if (manualIMs[k].imIndex == ReplayAnalytics.app.globalSyncChartPositions[i][j] && ReplayAnalytics.app.globalSyncChartPositions[i][j] != ReplayAnalytics.app.globalSyncChartPositions[i+1][j]) {
								ReplayAnalytics.app.globalManualIMs[i][j].push(manualIMs[k]);
							}							
						}
					}
				}
			}			
		}		
	},
});
var settingsController;
Ext.define('ReplayAnalytics.controller.Settings', {
	extend : 'Ext.app.Controller',
	xtype: 'settingscontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
			'fourPanelLayout': 'fourpanellayout',
			'settingsPanel': 'settingspanel',
			'globalSettingsPanel': 'globalsettingspanel',
			'settingsButton': 'button[id=settingsbutton]',
			'globalSettingsButton': 'button[id=globalsettingsbutton]',
			'databaseSetting': 'selectfield[id=databaseselectfield]',
			'graphTitleSetting': 'textfield[label=Graph Title:]',
			'xAxisSetting': 'selectfield[label=X-Axis:]',
			'yAxisSetting': 'selectfield[label=Y-Axis:]',
			'groupBySetting': 'selectfield[label=Group By:]',
			'granularitySetting': 'selectfield[label=Granularity:]',
			'accumulateSetting': 'selectfield[label=Accumulate:]',
			'numberActivePanelsSetting': 'selectfield[id=activepanelsfield]',
			'chartTypeSetting': 'selectfield[label=Chart Type:]',
			'startDateSetting': 'datepickerfield[label=Start Date:]',
			'endDateSetting': 'datepickerfield[label=End Date:]',
			'interestingMomentsSetting': 'selectfield[label=Interesting Moments:]',
			'replaySpeedSettings': 'selectfield[id=replayspeedsetting]',
			'imType3Setting': 'selectfield[id=imtype3setting]',
			'imType4Setting': 'selectfield[id=imtype4setting]',
			'imType1Setting': 'selectfield[id=imtype1setting]',
			'imType2Setting': 'selectfield[id=imtype2setting]',
			'doneButtonSettings': 'button[id=settingsdonebutton]',
			'cancelButtonSettings': 'button[id=settingscancelbutton]',
			'clearPanelSettings': 'button[id=clearpanelbutton]',
			'doneButtonGlobalSettings': 'button[id=globalsettingsdonebutton]',
			'cancelButtonGlobalSettings': 'button[id=globalsettingscancelbutton]',
			'clearCacheButtonGlobalSettings': 'button[id=clearcachebuttonglobalsettings]',
			'addChart1Settings': 'button[id=chart1Button]',
			'addChart2Settings': 'button[id=chart2Button]',
			'addChart3Settings': 'button[id=chart3Button]',
			'addChart4Settings': 'button[id=chart4Button]',	
			'filterSetting': 'selectfield[id=filtersettingtoggle]',
			'replayCommentsSetting': 'selectfield[id=replaycommentstogglefield]',
		},
		control: {
			'settingsButton' : {
				tap : 'showSettingsPanel'				
			},
			'globalSettingsButton' : {
				tap : 'showGlobalSettingsPanel'				
			},			
			'addChart1Settings' : {
				tap : 'showSettingsPanel1'
			},			
			'addChart2Settings' : {
				tap : 'showSettingsPanel2'
			},			
			'addChart3Settings' : {
				tap : 'showSettingsPanel3'
			},			
			'addChart4Settings' : {
				tap : 'showSettingsPanel4'
			},			
			'doneButtonGlobalSettings': {
				tap: 'doneGlobalSettingsPanel'
			},
			'cancelButtonGlobalSettings': {
				tap: 'cancelGlobalSettingsPanel'
			},			
			'doneButtonSettings': {
				tap: 'hideSettingsPanel'
			},
			'cancelButtonSettings': {
				tap: 'cancelSettingsPanel'
			},
			'clearCacheButtonGlobalSettings': {
				tap: 'clearLocalCache'
			},
			'clearPanelSettings': {
				tap: 'clearPanelSettingsStore'
			},
			'chartTypeSetting': {
				change: 'manageDimensions'
			},
			'yAxisSetting': {
				change: 'manageFieldValueChangeForyAxisField'
			},
			'xAxisSetting': {
				change: 'manageFieldValueChangeForxAxisField'
			},
		},
	},
	
	launch: function() {	
		settingsController = this;
		ReplayAnalytics.app.GranularityFieldStore = [
		                     					 	{text: 'None Defined', value: 'none'},
		                    						{text: 'Hourly', value: 'Hourly'},
		                    						{text: 'Daily', value: 'Daily'},
		                    						{text: 'Weekly', value: 'Weekly'},
		                    						{text: 'Monthly', value: 'Monthly'}
		                    					];	
	},
	
	showSettingsPanel1: function() {
		this.getApplication().getController('Main').setFocusOnPanel1();
		this.showSettingsPanel();
		//this.manageDimensions();
	},
	
	showSettingsPanel2: function() {
		this.getApplication().getController('Main').setFocusOnPanel2();
		this.showSettingsPanel();
		//this.manageDimensions();
	},
	
	showSettingsPanel3: function() {
		this.getApplication().getController('Main').setFocusOnPanel3();
		this.showSettingsPanel();
		//this.manageDimensions();
	},
	
	showSettingsPanel4: function() {
		this.getApplication().getController('Main').setFocusOnPanel4();
		this.showSettingsPanel();
		//this.manageDimensions();
	},
	
	manageDimensions: function() {	
		var selectedPanel = ReplayAnalytics.app.currentActivePanelIndex;
		var dataFieldValues = ReplayAnalytics.app.EmptyFieldStore;
		var categoryFieldValues = ReplayAnalytics.app.EmptyFieldStore;
		var categoryFieldValuesWithTime = ReplayAnalytics.app.EmptyFieldStore;
		var granularityFieldValues = ReplayAnalytics.app.GranularityFieldStore;
		if (ReplayAnalytics.app.PanelDataFieldStore[selectedPanel] != undefined){
			dataFieldValues = ReplayAnalytics.app.PanelDataFieldStore[selectedPanel];
		}
		if (ReplayAnalytics.app.PanelCategoryFieldStore[selectedPanel] != undefined){
			categoryFieldValues = ReplayAnalytics.app.PanelCategoryFieldStore[selectedPanel]
		}
		if (ReplayAnalytics.app.PanelCategoryFieldStoreWithTime[selectedPanel] != undefined){
			categoryFieldValuesWithTime = ReplayAnalytics.app.PanelCategoryFieldStoreWithTime[selectedPanel];
		}		
		this.getGranularitySetting().setOptions(granularityFieldValues);
		//this.getGranularitySetting().setValue('None');
		switch(this.getChartTypeSetting().getValue()) {
		case 'scatter':
			this.getGroupBySetting().show('fadeIn');
			//this.getAccumulateSetting().show('fadeIn');
			this.getXAxisSetting().setLabel('X-Axis:');
			this.getYAxisSetting().show('fadeIn');
			this.getGroupBySetting().hide();
			this.getGroupBySetting().setValue('none');
			this.getXAxisSetting().setOptions(dataFieldValues);
			this.getYAxisSetting().setOptions(dataFieldValues);
			break;
		case 'horizontalbar':
			this.getGroupBySetting().show('fadeIn');
			//this.getAccumulateSetting().show('fadeIn');
			this.getYAxisSetting().show('fadeIn');
			this.getXAxisSetting().setLabel('X-Axis:');
			this.getXAxisSetting().setOptions(dataFieldValues);
			this.getYAxisSetting().setOptions(categoryFieldValuesWithTime);
			this.getGroupBySetting().setOptions(categoryFieldValues);
			break;
		case 'verticalbar':
			this.getGroupBySetting().show('fadeIn');
			//this.getAccumulateSetting().show('fadeIn');
			this.getXAxisSetting().setLabel('X-Axis:');
			this.getYAxisSetting().show('fadeIn');
			this.getYAxisSetting().setOptions(dataFieldValues);
			this.getXAxisSetting().setOptions(categoryFieldValuesWithTime);
			this.getGroupBySetting().setOptions(categoryFieldValues);
			break;
		case 'line':
			this.getGroupBySetting().show('fadeIn');
			//this.getAccumulateSetting().show('fadeIn');
			this.getXAxisSetting().setLabel('X-Axis:');
			this.getYAxisSetting().show('fadeIn');
			this.getYAxisSetting().setOptions(dataFieldValues);
			this.getXAxisSetting().setOptions(categoryFieldValuesWithTime);
			this.getGroupBySetting().setOptions(categoryFieldValues);
			break;
		case 'pie':
			this.getGroupBySetting().show('fadeIn');
			//this.getAccumulateSetting().hide('fadeOut');
			this.getXAxisSetting().setLabel('Data Value:');
			this.getYAxisSetting().hide('fadeOut');
			this.getGroupBySetting().setOptions(categoryFieldValues);
			this.getXAxisSetting().setOptions(dataFieldValues);				
			break;
		case 'none':
			this.getGroupBySetting().show('fadeIn');
			//this.getAccumulateSetting().hide('fadeOut');
			this.getXAxisSetting().setLabel('Data Value:');
			this.getYAxisSetting().hide('fadeOut');
			this.getGroupBySetting().setOptions(ReplayAnalytics.app.EmptyFieldStore);
			this.getXAxisSetting().setOptions(ReplayAnalytics.app.EmptyFieldStore);	
			this.getYAxisSetting().setOptions(ReplayAnalytics.app.EmptyFieldStore);
		}
		//this.getGroupBySetting().setValue('none');
		//this.getXAxisSetting().setValue('none');
		//this.getYAxisSetting().setValue('none');
	},
	
	manageFieldValueChangeForyAxisField: function(){
		/*if (this.getDatabaseSetting().getValue() == 'informance'){
			if (this.getChartTypeSetting().getValue() == 'scatter'){
				if(this.getXAxisSetting().getValue() == 'none' || this.getXAxisSetting().getValue == this.getYAxisSetting().getValue){
					if(this.getYAxisSetting().getValue() == 'UptimeHours') {
						this.getXAxisSetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Downtime Hours', value: 'DowntimeHours'}, {text: 'Downtime Events', value: 'DowntimeEvents'}, {text: 'Production Counts', value: 'ProductionCounts'}]);
					} else if (this.getYAxisSetting().getValue() == 'DowntimeHours') {
						this.getXAxisSetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Uptime Hours', value: 'UptimeHours'}, {text: 'Downtime Events', value: 'DowntimeEvents'}, {text: 'Production Counts', value: 'ProductionCounts'}]);
					} else if (this.getYAxisSetting().getValue() == 'DowntimeEvents') {
						this.getXAxisSetting().setOptions([{text: 'None Defined', value: 'none'},{text: 'Uptime Hours', value: 'UptimeHours'}, {text: 'Downtime Hours', value: 'DowntimeHours'}, {text: 'Production Counts', value: 'ProductionCounts'}]);
					} else if (this.getYAxisSetting().getValue() == 'ProductionCounts') {
						this.getXAxisSetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Uptime Hours', value: 'UptimeHours'}, {text: 'Downtime Hours', value: 'DowntimeHours'}, {text: 'Downtime Events', value: 'DowntimeEvents'},]);
					}
				} 
			} else if (this.getChartTypeSetting().getValue() == 'horizontalbar') {
				if(this.getYAxisSetting().getValue() == 'reason') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'User', value: 'User'}, {text: 'SKU', value: 'Part'}, {text: 'Set', value: 'set'}]);
				} else if(this.getYAxisSetting().getValue() == 'User') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Reason', value: 'reason'}, {text: 'SKU', value: 'Part'}, {text: 'Set', value: 'set'}]);
				} else if (this.getYAxisSetting().getValue() == 'Part') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'User', value: 'User'}, {text: 'Reason', value: 'reason'}, {text: 'Set', value: 'set'}]);
				} else if(this.getYAxisSetting().getValue() == 'set') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'User', value: 'User'}, {text: 'SKU', value: 'Part'}, {text: 'Reason', value: 'reason'}]);
				}
			}
		} else if (this.getDatabaseSetting().getValue() == 'infinity_qs'){
			if (this.getChartTypeSetting().getValue() == 'scatter'){
				if(this.getXAxisSetting().getValue() == 'none' || this.getXAxisSetting().getValue == this.getYAxisSetting().getValue){
					//Need to Discuss.
				} 
			} else if (this.getChartTypeSetting().getValue() == 'horizontalbar') {
				if(this.getYAxisSetting().getValue() == 'Process') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'User', value: 'User'}, {text: 'SKU', value: 'Part'}, {text: 'Test', value: 'Test'}, {text: 'Quality Performance Metrics', value: 'Quality Performance Metrics'}]);
				} else if(this.getYAxisSetting().getValue() == 'User') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Process', value: 'Process'}, {text: 'SKU', value: 'Part'}, {text: 'Test', value: 'Test'}, {text: 'Quality Performance Metrics', value: 'Quality Performance Metrics'}]);
				} else if (this.getYAxisSetting().getValue() == 'Part') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Process', value: 'Process'}, {text: 'User', value: 'User'}, {text: 'Test', value: 'Test'}, {text: 'Quality Performance Metrics', value: 'Quality Performance Metrics'}]);
				} else if(this.getYAxisSetting().getValue() == 'Test') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Process', value: 'Process'}, {text: 'User', value: 'User'}, {text: 'SKU', value: 'Part'}, {text: 'Quality Performance Metrics', value: 'Quality Performance Metrics'}]);
				} else if(this.getYAxisSetting().getValue() == 'Quality Performance Metrics') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Process', value: 'Process'}, {text: 'User', value: 'User'}, {text: 'SKU', value: 'Part'}, {text: 'Test', value: 'Test'}]);
				}
			} else if (this.getChartTypeSetting().getValue() == 'line' || this.getChartTypeSetting().getValue() == 'verticalbar') {
				if(this.getYAxisSetting().getValue() == 'Percent Out Of Spec'){
					this.getXAxisSetting().setOptions(ReplayAnalytics.app.InfinityQSCategoryFieldStoreWithTimeWithoutQPM);
					this.getAccumulateSetting().hide('fadeOut');
					this.getAccumulateSetting().setValue('Off');
				} else if(this.getYAxisSetting().getValue() == 'Process Events'){
					this.getXAxisSetting().setOptions(ReplayAnalytics.app.InfinityQSCategoryFieldStoreWithTime);
					this.getAccumulateSetting().show('fadeIn');
				}
			}
		}*/
		this.manageGranularitySettings();
	},
	
	manageFieldValueChangeForxAxisField: function(){
		/*if (this.getDatabaseSetting().getValue() == 'informance'){
			if(this.getChartTypeSetting().getValue() == 'scatter') {
				if(this.getYAxisSetting().getValue() == 'none' || this.getXAxisSetting().getValue() == this.getYAxisSetting().getValue()) {
					if(this.getXAxisSetting().getValue() == 'UptimeHours') {
						this.getYAxisSetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Downtime Hours', value: 'DowntimeHours'}, {text: 'Downtime Events', value: 'DowntimeEvents'}, {text: 'Production Counts', value: 'ProductionCounts'}]);
					} else if (this.getXAxisSetting().getValue() == 'DowntimeHours') {
						this.getYAxisSetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Uptime Hours', value: 'UptimeHours'}, {text: 'Downtime Events', value: 'DowntimeEvents'}, {text: 'Production Counts', value: 'ProductionCounts'}]);
					} else if (this.getXAxisSetting().getValue() == 'DowntimeEvents') {
						this.getYAxisSetting().setOptions([{text: 'None Defined', value: 'none'},{text: 'Uptime Hours', value: 'UptimeHours'}, {text: 'Downtime Hours', value: 'DowntimeHours'}, {text: 'Production Counts', value: 'ProductionCounts'}]);
					} else if (this.getXAxisSetting().getValue() == 'ProductionCounts') {
						this.getYAxisSetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Uptime Hours', value: 'UptimeHours'}, {text: 'Downtime Hours', value: 'DowntimeHours'}, {text: 'Downtime Events', value: 'DowntimeEvents'},]);
					}
				}
			} else if (this.getChartTypeSetting().getValue() == 'line' || this.getChartTypeSetting().getValue() == 'verticalbar') {
				if(this.getXAxisSetting().getValue() == 'reason') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'User', value: 'User'}, {text: 'SKU', value: 'Part'}, {text: 'Set', value: 'set'}]);
				} else if(this.getXAxisSetting().getValue() == 'User') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Reason', value: 'reason'}, {text: 'SKU', value: 'Part'}, {text: 'Set', value: 'set'}]);
				} else if (this.getXAxisSetting().getValue() == 'Part') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'User', value: 'User'}, {text: 'Reason', value: 'reason'}, {text: 'Set', value: 'set'}]);
				} else if(this.getXAxisSetting().getValue() == 'set') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'User', value: 'User'}, {text: 'SKU', value: 'Part'}, {text: 'Reason', value: 'reason'}]);
				}
			}
		} else if (this.getDatabaseSetting().getValue() == 'infinity_qs'){
			if (this.getChartTypeSetting().getValue() == 'scatter'){
				if(this.getXAxisSetting().getValue() == 'none' || this.getXAxisSetting().getValue == this.getYAxisSetting().getValue){
					//Need to Discuss.
				} 
			} else if (this.getChartTypeSetting().getValue() == 'line' || this.getChartTypeSetting().getValue() == 'verticalbar') {
				if(this.getXAxisSetting().getValue() == 'Process') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'User', value: 'User'}, {text: 'SKU', value: 'Part'}, {text: 'Test', value: 'Test'}, {text: 'Quality Performance Metrics', value: 'Quality Performance Metrics'}]);
				} else if(this.getXAxisSetting().getValue() == 'User') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Process', value: 'Process'}, {text: 'SKU', value: 'Part'}, {text: 'Test', value: 'Test'}, {text: 'Quality Performance Metrics', value: 'Quality Performance Metrics'}]);
				} else if (this.getXAxisSetting().getValue() == 'Part') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Process', value: 'Process'}, {text: 'User', value: 'User'}, {text: 'Test', value: 'Test'}, {text: 'Quality Performance Metrics', value: 'Quality Performance Metrics'}]);
				} else if(this.getXAxisSetting().getValue() == 'Test') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Process', value: 'Process'}, {text: 'User', value: 'User'}, {text: 'SKU', value: 'Part'}, {text: 'Quality Performance Metrics', value: 'Quality Performance Metrics'}]);
				} else if(this.getXAxisSetting().getValue() == 'Quality Performance Metrics') {
					this.getGroupBySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Process', value: 'Process'}, {text: 'User', value: 'User'}, {text: 'SKU', value: 'Part'}, {text: 'Test', value: 'Test'}]);
				}
			} else if (this.getChartTypeSetting().getValue() == 'horizontalbar') {
				if(this.getXAxisSetting().getValue() == 'Percent Out Of Spec'){
					this.getYAxisSetting().setOptions(ReplayAnalytics.app.InfinityQSCategoryFieldStoreWithTimeWithoutQPM);
					this.getAccumulateSetting().hide('fadeOut');
					this.getAccumulateSetting().setValue('Off');
				} else if(this.getXAxisSetting().getValue() == 'Process Events'){
					this.getYAxisSetting().setOptions(ReplayAnalytics.app.InfinityQSCategoryFieldStoreWithTime);
					this.getAccumulateSetting().show('fadeIn');
				}
			}
		}*/	
		this.manageGranularitySettings();
	},	
		
	manageGranularitySettings: function() {
		if(this.getChartTypeSetting().getValue() == 'horizontalbar') {
			var categoryField = this.getYAxisSetting().getValue();
		}
		else if(this.getChartTypeSetting().getValue() == 'verticalbar' || this.getChartTypeSetting().getValue() == 'line') {
			var categoryField = this.getXAxisSetting().getValue();
		}
		switch(categoryField) {
			case 'Hour': this.getGranularitySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Hourly', value: 'Hourly'}]); break;
			case 'Date': this.getGranularitySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Hourly', value: 'Hourly'}, {text: 'Daily', value: 'Daily'}]); break;
			case 'DayOfWeek': this.getGranularitySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Hourly', value: 'Hourly'}, {text: 'Daily', value: 'Daily'}]); break;
			case 'Week': this.getGranularitySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Hourly', value: 'Hourly'}, {text: 'Daily', value: 'Daily'}, {text: 'Weekly', value: 'Weekly'}]); break;
			case 'Month': this.getGranularitySetting().setOptions([{text: 'None Defined', value: 'none'}, {text: 'Hourly', value: 'Hourly'}, {text: 'Daily', value: 'Daily'}, {text: 'Weekly', value: 'Weekly'}, {text: 'Monthly', value: 'Monthly'}]); break;					
		}
	},
	
	showGlobalSettingsPanel: function(){
		this.getNumberActivePanelsSetting().setValue(ReplayAnalytics.app.numberActivePanels);
		this.getInterestingMomentsSetting().setValue(ReplayAnalytics.app.interestingMoments);
		this.getReplayCommentsSetting().setValue(ReplayAnalytics.app.replayCommentsSetting);
		this.getReplaySpeedSettings().setValue(ReplayAnalytics.app.replaySpeed);
		this.getImType3Setting().setValue(ReplayAnalytics.app.interestingMomentType3Setting);
		this.getImType4Setting().setValue(ReplayAnalytics.app.interestingMomentType4Setting);
		this.getImType1Setting().setValue(ReplayAnalytics.app.interestingMomentType1Setting);
		this.getImType2Setting().setValue(ReplayAnalytics.app.interestingMomentType2Setting);
		this.getGlobalSettingsPanel().show();
	},
	
	showSettingsPanel: function() {
		
		this.getApplication().getController('DatabaseTable').getAllDatabaseTables();
		
	},
	
	configureSettingsPanel: function(){
		
		this.getDatabaseSetting().setOptions(ReplayAnalytics.app.DatabaseTableFieldStore);
		this.getDatabaseSetting().setValue(ReplayAnalytics.app.databaseSetting[ReplayAnalytics.app.currentActivePanelIndex]);
		this.getApplication().getController('DatabaseTable').getDatabaseTableFieldsForDatabase();
		
		
	},
	
	showConfiguredSettingsPanel: function(){
		this.getChartTypeSetting().setValue(ReplayAnalytics.app.chartTypes[ReplayAnalytics.app.currentActivePanelIndex]);
		this.manageDimensions();
		//this.getGraphTitleSetting().setValue(ReplayAnalytics.app.graphTitle[ReplayAnalytics.app.currentActivePanelIndex]);
		this.getXAxisSetting().setValue(ReplayAnalytics.app.xs[ReplayAnalytics.app.currentActivePanelIndex]);
		this.getYAxisSetting().setValue(ReplayAnalytics.app.ys[ReplayAnalytics.app.currentActivePanelIndex]);		
		this.getGranularitySetting().setValue(ReplayAnalytics.app.granularities[ReplayAnalytics.app.currentActivePanelIndex]);
		this.getGroupBySetting().setValue(ReplayAnalytics.app.groupBys[ReplayAnalytics.app.currentActivePanelIndex]);
		this.getStartDateSetting().setValue(ReplayAnalytics.app.startDate[ReplayAnalytics.app.currentActivePanelIndex]);
		this.getEndDateSetting().setValue(ReplayAnalytics.app.currentEndDate[ReplayAnalytics.app.currentActivePanelIndex]);		
		this.getAccumulateSetting().setValue(ReplayAnalytics.app.accumulate[ReplayAnalytics.app.currentActivePanelIndex]);		
		this.getFilterSetting().setValue(ReplayAnalytics.app.filterToggle[ReplayAnalytics.app.currentActivePanelIndex]);
		this.getSettingsPanel().show();		
		this.manageGranularitySettings();
	},

	cancelSettingsPanel: function() {
		this.getSettingsPanel().hide(true);
	},
	
	cancelGlobalSettingsPanel: function() {
		this.getGlobalSettingsPanel().hide(true);
	},
	
	clearLocalCache: function(){
		if (developerMode){
			try{ 
				for (i=0; i<=localStorage.length-1;)  
				{  
					key = localStorage.key(i);
					if (key.indexOf('get') == '0'){
						localStorage.removeItem(key);
					} else {
						i++;
					}
				}
			} catch(err){
				
			}
			//window.location.reload(true);
			this.getGlobalSettingsPanel().hide(true);
		} else {
			localStorage.clear();
			resetSettings();
		}		
	},
	
	clearPanelSettingsStore: function(){
		clearStore('UserSettings' + ReplayAnalytics.app.currentActivePanelIndex);
		Ext.get('chart'+ReplayAnalytics.app.currentActivePanelIndex+'Button').show();
		Ext.get('chart'+ReplayAnalytics.app.currentActivePanelIndex+'Image').show();
		var obj = ReplayAnalytics.app.newChart[ReplayAnalytics.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		ReplayAnalytics.app.panelSettings[ReplayAnalytics.app.currentActivePanelIndex] = '';
        ReplayAnalytics.app.panelData[ReplayAnalytics.app.currentActivePanelIndex] = '';
        var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
        Ext.ComponentQuery.query('addchartpanel'+chartIndex)[0].setHtml('');
		var carousel = Ext.ComponentQuery.query('carousel[id=carousel'+ chartIndex +']')[0];
		/*for (var carouselIndex = carousel.getItems().items.length; carouselIndex > 2; carouselIndex--){
			var temp = carousel.getAt(carouselIndex-1);
			if (temp != undefined){
				carousel.remove(temp);
			}
		}*/
		//Ext.ComponentQuery.query('textfield[label=Graph Title:]')[0].setValue('Title');
		Ext.ComponentQuery.query('selectfield[label=Accumulate:]')[0].setValue('Off');
		this.manageDimensions();
		this.getApplication().getController('Main').checkForConfiguredGraphPanels();
	},
	
	doneGlobalSettingsPanel: function(){
		ReplayAnalytics.app.interestingMoments = this.getInterestingMomentsSetting().getValue();
		ReplayAnalytics.app.replayCommentsSetting = this.getReplayCommentsSetting().getValue();
		ReplayAnalytics.app.numberActivePanels = this.getNumberActivePanelsSetting().getValue();
		ReplayAnalytics.app.replaySpeed = this.getReplaySpeedSettings().getValue();
		var newIMType3Setting = this.getImType3Setting().getValue();
		var newIMType4Setting = this.getImType4Setting().getValue();
		var newIMType1Setting = this.getImType1Setting().getValue();
		var newIMType2Setting = this.getImType2Setting().getValue();
		var imSettingChanged = false;
		if (newIMType3Setting != ReplayAnalytics.app.interestingMomentType3Setting ||
				newIMType4Setting != ReplayAnalytics.app.interestingMomentType4Setting ||
				newIMType1Setting != ReplayAnalytics.app.interestingMomentType1Setting ||
				newIMType2Setting != ReplayAnalytics.app.interestingMomentType2Setting){
			imSettingChanged = true;
		}
		ReplayAnalytics.app.interestingMomentType3Setting = this.getImType3Setting().getValue();
		ReplayAnalytics.app.interestingMomentType4Setting = this.getImType4Setting().getValue();
		ReplayAnalytics.app.interestingMomentType1Setting = this.getImType1Setting().getValue();
		ReplayAnalytics.app.interestingMomentType2Setting = this.getImType2Setting().getValue();
		var globalStore;
		globalStore = [{'NumberOfPanels': this.getNumberActivePanelsSetting().getValue(),'InterestingMoments': this.getInterestingMomentsSetting().getValue(),'ReplayComments':this.getReplayCommentsSetting().getValue(),'ReplaySpeed': this.getReplaySpeedSettings().getValue(), 'InterestingMomentType3Setting': this.getImType3Setting().getValue(), 'InterestingMomentType1Setting': this.getImType1Setting().getValue(), 'InterestingMomentType2Setting': this.getImType2Setting().getValue(), 'InterestingMomentType4Setting': this.getImType4Setting().getValue()}];
		Ext.getStore('GlobalSettingsStore').setData(globalStore);
		Ext.getStore('GlobalSettingsStore').sync();
		this.getApplication().getController('Main').changePanels();
		this.updateChartAnimationSettings();
		this.cancelGlobalSettingsPanel();
		if (imSettingChanged){
			Ext.Msg.alert('ReplayAnalytics &#153;', 'Interesting Moment settings has been changed. Dashboard will need to be recalculated.', function(){
				for ( i = 1; i <= ReplayAnalytics.app.numberActivePanels; i++ ){
					//ReplayAnalytics.app.XmaxReceived[i] = false;
					//ReplayAnalytics.app.YmaxReceived[i] = false;
					ReplayAnalytics.app.chartCreated[i] = false;
				}
				settingsController.getApplication().getController('Main').loadStores();
				//refreshPage();
			});
		}
	},
	
	updateChartAnimationSettings: function(){
		ReplayAnalytics.app.animateSpeed = ReplayAnalytics.app.replaySpeed - 100;
		for(i = 0; i < ReplayAnalytics.app.newChart.length; i++) {
			if(ReplayAnalytics.app.newChart[i] != null) {
				var series = ReplayAnalytics.app.newChart[i].getSeries();
				for (j = 0; j < series.length; j++){
					series[j].setAnimate(
							{
								duration: ReplayAnalytics.app.animateSpeed, 
								delay: ReplayAnalytics.app.animateSpeed/2, 
								easing: 'ease'
							}
						);
				}
				ReplayAnalytics.app.newChart[i].setAnimate(
						{
							duration: ReplayAnalytics.app.animateSpeed, 
							delay: ReplayAnalytics.app.animateSpeed/2, 
							easing: 'ease'
						}
					);
			}
		}
	},
	
	showSettingsErrorMessage: function(){
		Ext.Msg.alert('Error', 'Please select all required fields to proceed.', Ext.emptyFn);
	},

	hideSettingsPanel: function() {		
		$starttime = new Date();
		if(this.getChartTypeSetting().getValue() == 'scatter' && (this.getXAxisSetting().getValue() == 'none' || this.getYAxisSetting().getValue() == 'none' || this.getGranularitySetting().getValue() == 'none'))
		{
			this.showSettingsErrorMessage();
		}
		else if((this.getChartTypeSetting().getValue() == 'line' || this.getChartTypeSetting().getValue() == 'verticalbar') && (this.getXAxisSetting().getValue() == 'none' || this.getYAxisSetting().getValue() == 'none' || this.getGranularitySetting().getValue() == 'none'))
		{
			this.showSettingsErrorMessage();
		}		
		else if (this.getChartTypeSetting().getValue() == 'pie' &&(this.getXAxisSetting().getValue() == 'none' || this.getGroupBySetting().getValue() == 'none' || this.getGranularitySetting().getValue() == 'none'))
		{
			this.showSettingsErrorMessage();	
		}
		else if (this.getChartTypeSetting().getValue() == 'horizontalbar' &&(this.getXAxisSetting().getValue() == 'none' || this.getYAxisSetting().getValue() == 'none' || this.getGranularitySetting().getValue() == 'none'))
		{
			this.showSettingsErrorMessage();
		}
		else 
		{
			if(ReplayAnalytics.app.currentActivePanelIndex ==1 )
			{
				Ext.get('chart1Button').hide();
				Ext.get('chart1Image').hide();
			}			
			else if (ReplayAnalytics.app.currentActivePanelIndex ==2)
			{
				Ext.get('chart2Button').hide();
				Ext.get('chart2Image').hide();
			}			
			else if(ReplayAnalytics.app.currentActivePanelIndex ==3)
			{
				Ext.get('chart3Button').hide();
				Ext.get('chart3Image').hide();
			}
			else 
			{
				Ext.get('chart4Button').hide();
				Ext.get('chart4Image').hide();
			}
			ReplayAnalytics.app.databaseSetting[ReplayAnalytics.app.currentActivePanelIndex] = this.getDatabaseSetting().getValue();
			ReplayAnalytics.app.filterToggle[ReplayAnalytics.app.currentActivePanelIndex] = this.getFilterSetting().getValue();
			ReplayAnalytics.app.graphTitle[ReplayAnalytics.app.currentActivePanelIndex] = this.getGraphTitleSetting().getValue();
			ReplayAnalytics.app.xs[ReplayAnalytics.app.currentActivePanelIndex] = this.getXAxisSetting().getValue();
			ReplayAnalytics.app.ys[ReplayAnalytics.app.currentActivePanelIndex] = this.getYAxisSetting().getValue();
			ReplayAnalytics.app.granularities[ReplayAnalytics.app.currentActivePanelIndex] = this.getGranularitySetting().getValue();
			ReplayAnalytics.app.chartTypes[ReplayAnalytics.app.currentActivePanelIndex] = this.getChartTypeSetting().getValue();
			ReplayAnalytics.app.groupBys[ReplayAnalytics.app.currentActivePanelIndex] = this.getGroupBySetting().getValue();
			ReplayAnalytics.app.startDate[ReplayAnalytics.app.currentActivePanelIndex] = new Date(this.getStartDateSetting().getValue());
			ReplayAnalytics.app.currentStartDate[ReplayAnalytics.app.currentActivePanelIndex] = new Date(this.getStartDateSetting().getValue());
			ReplayAnalytics.app.currentDate[ReplayAnalytics.app.currentActivePanelIndex] = new Date(this.getStartDateSetting().getValue());
			ReplayAnalytics.app.currentEndDate[ReplayAnalytics.app.currentActivePanelIndex] = new Date(this.getEndDateSetting().getValue());
			ReplayAnalytics.app.accumulate[ReplayAnalytics.app.currentActivePanelIndex] = this.getAccumulateSetting().getValue();
			ReplayAnalytics.app.XmaxReceived[ReplayAnalytics.app.currentActivePanelIndex] = false;
			ReplayAnalytics.app.YmaxReceived[ReplayAnalytics.app.currentActivePanelIndex] = false;
			switch(ReplayAnalytics.app.granularities[ReplayAnalytics.app.currentActivePanelIndex]) {
				case 'Hourly':
					ReplayAnalytics.app.valueGranularities[ReplayAnalytics.app.currentActivePanelIndex] = 1;
					break;
				case 'Daily':
					ReplayAnalytics.app.valueGranularities[ReplayAnalytics.app.currentActivePanelIndex] = 2;
					break;
				case 'Weekly':
					ReplayAnalytics.app.valueGranularities[ReplayAnalytics.app.currentActivePanelIndex] = 3;
					break;
				case 'Monthly':
					ReplayAnalytics.app.valueGranularities[ReplayAnalytics.app.currentActivePanelIndex] = 4;
					break;
			}		 
			var difference = ReplayAnalytics.app.currentEndDate[ReplayAnalytics.app.currentActivePanelIndex] - ReplayAnalytics.app.currentStartDate[ReplayAnalytics.app.currentActivePanelIndex];
			var days = Math.floor(difference / (1000 * 60 * 60 * 24));		
			var datedifference =  ReplayAnalytics.app.currentStartDate[ReplayAnalytics.app.currentActivePanelIndex] - ReplayAnalytics.app.currentEndDate[ReplayAnalytics.app.currentActivePanelIndex];
			var datedays = Math.floor(datedifference / (1000 * 60 * 60 * 24));		
			if(datedays > 0)
			{
				Ext.Msg.alert('Check Dates','Start date must be earlier than end date.');
			}		
			else if (days <= 0 && ReplayAnalytics.app.granularities[ReplayAnalytics.app.currentActivePanelIndex] != 'Hourly')
			{			 
				Ext.Msg.alert('Check Dates','Start and end date can not be same');
			}		
			else 
			{				
				var tempStore;
				tempStore = [{'Database': this.getDatabaseSetting().getValue(),'GraphTitle': this.getGraphTitleSetting().getValue(),'XAxis':this.getXAxisSetting().getValue(),'YAxis':this.getYAxisSetting().getValue(),'GroupBy':this.getGroupBySetting().getValue(),'Granularity':this.getGranularitySetting().getValue(),'ChartType':this.getChartTypeSetting().getValue(),'StartDate':this.getStartDateSetting().getValue(),'EndDate':this.getEndDateSetting().getValue(),'InterestingMoments':this.getInterestingMomentsSetting().getValue(),'Accumulate':this.getAccumulateSetting().getValue(),'FilterToggle':this.getFilterSetting().getValue()}];
				Ext.getStore('UserSettings'+ReplayAnalytics.app.currentActivePanelIndex).setData(tempStore);
				Ext.getStore('UserSettings'+ReplayAnalytics.app.currentActivePanelIndex).sync();
				this.getSettingsPanel().hide(true);
				ReplayAnalytics.app.dateSet[ReplayAnalytics.app.currentActivePanelIndex] = true;
				showLoadingMask();
				this.getApplication().getController('Main').chartSetUp();
			}
		}
	},	
});
var playbackController;
Ext.define('ReplayAnalytics.controller.Playback', {
	extend : 'Ext.app.Controller',
	xtype: 'playbackcontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
			'fourPanelLayout': 'fourpanellayout',
			'resetBackwardButton': 'button[id=ResetBackwardButton]',
			'stepBackwardButton': 'button[id=StepBackwardButton]',
			'playBackwardButton': 'button[id=PlayBackwardButton]',
			'pauseButton': 'button[id=PauseButton]',
			'playForwardButton': 'button[id=PlayForwardButton]',
			'stepForwardButton': 'button[id=StepForwardButton]',
			'resetForwardButton': 'button[id=ResetForwardButton]',
			'slider0': 'slider0',
			'slider1': 'slider1',
			'slider2': 'slider2',
			'slider3': 'slider3',
			'slider4': 'slider4',
			'slider5': 'slider5',
		},
		control: {
			'resetBackwardButton': {
				tap: 'resetBackwardFunction'
			},
			'stepBackwardButton': {
				tap: 'stepBackwardFunction'
			},
			'playBackwardButton': {
				tap: 'playBackwardFunction'
			},
			'pauseButton': {
				tap: 'pauseFunction'
			},
			'playForwardButton': {
				tap: 'playForwardFunction'
			},
			'stepForwardButton': {
				tap: 'stepForwardFunction'
			},
			'resetForwardButton': {
				tap: 'resetForwardFunction'
			},
			'slider0': {
				change: 'sliderListenerFunctionChange',
				drag: 'sliderListenerFunctionDrag'
			},
			'slider1': {
				change: 'sliderListenerFunctionChange',
				drag: 'sliderListenerFunctionDrag'
			},
			'slider2': {
				change: 'sliderListenerFunctionChange',
				drag: 'sliderListenerFunctionDrag'	
			},
			'slider3': {
				change: 'sliderListenerFunctionChange',
				drag: 'sliderListenerFunctionDrag'	
			},
			'slider4': {
				change: 'sliderListenerFunctionChange',
				drag: 'sliderListenerFunctionDrag'	
			},
			'slider5':{
				change: 'sliderListenerFunctionChange',
				drag: 'sliderListenerFunctionDrag'	
			},
		},
	},
	
	launch: function(){
		playbackController = this;
	},
	
	resumeLastPlaybackAction: function(){
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		logInfo('ResumePlayback called for chart=' + chartIndex + ' at sliderValue=' + ReplayAnalytics.app.sliders[chartIndex].getValue()[0]
				+' and Last action is == ' + ReplayAnalytics.app.lastPlaybackAction);		
		if (ReplayAnalytics.app.lastPlaybackAction != undefined){
			if (ReplayAnalytics.app.lastPlaybackAction == 'playForward'){
				this.getApplication().getController('InterestingMoment').getManualIMCallout().hide();
				this.playForwardFunction();
			} else if (ReplayAnalytics.app.lastPlaybackAction == 'playBackward'){
				this.getApplication().getController('InterestingMoment').getManualIMCallout().hide();
				this.playBackwardFunction();
			}			
		}
	},
	
	sliderListenerFunctionDrag: function(slider, thumb, value) {
		value = value[0];
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		ReplayAnalytics.app.currentPositions[chartIndex] = ReplayAnalytics.app.sliders[chartIndex].getValue()[0];
		//ReplayAnalytics.app.sliders[chartIndex].fireEvent('change', ReplayAnalytics.app.sliders[chartIndex], chartIndex); 
		this.sliderListenerFunctionChange(slider);
	},
	
	setPanelDateCaption: function(chartIndex, value) {
		var caption = "";
		var captionFormat = "ddd mmm dd yyyy HH:MM:ss";
		var currentDate = "";
		try {
			currentDate = ReplayAnalytics.app.globalDateArray[chartIndex][value];
		} catch(err){
		}
		//logInfo('Current date for index='+chartIndex+' & value='+value+' is == ' + currentDate);
		if (ReplayAnalytics.app.granularities[chartIndex] != 'Hourly'){
			captionFormat = "ddd mmm dd yyyy";
		}
		try{
			currentDate = dateFormat(currentDate, captionFormat);
		} catch(err){
			logInfo('Error converting date' + err);
			currentDate = this.dateConversion(currentDate);
		}		
		if (chartIndex != 0 && chartIndex != 5){
			var graphTitle = ReplayAnalytics.app.graphTitle[chartIndex];
			caption = '<h1 style="text-align:center; color: black; z-index: 10; font-size: 14px; padding:10px"><b>'+currentDate+'</b></h1>';
			Ext.ComponentQuery.query('panel'+chartIndex)[0].setHtml(caption);
			//Ext.ComponentQuery.query('panel'+chartIndex)[0].setHtml(caption);
		} else if (chartIndex == 5){
			caption = "<h1 style='text-align:center; color: black; z-index: 10; font-size: 14px; padding: 5px;'>"+currentDate+"</h1>";
			Ext.ComponentQuery.query('interestingmomentgraphpanel')[0].setHtml(caption);
		}				
		return caption;
	},
		 
	dateConversion: function(currentDate){
		 var months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
		 var currentDateinFormat = months[parseInt(currentDate.substring(5,7))-1]+" " +currentDate.substring(8,10) + ", " + currentDate.substring(0, 4);
		 return currentDateinFormat;
	},
	
	//Utility function for making intervals even:	
	updateSliderInterval: function() {	
		var sliderValue = ReplayAnalytics.app.sliders[ReplayAnalytics.app.currentActivePanelIndex].getValue();
		ReplayAnalytics.app.sliders[ReplayAnalytics.app.currentActivePanelIndex].setValue(sliderValue % ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex]);	
	},
	
	showCharts: function(){		
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;	
		var value = 0;
		if(ReplayAnalytics.app.chartTypes[chartIndex] == 'scatter') {
			if(ReplayAnalytics.app.groupBys[ReplayAnalytics.app.currentActivePanelIndex] != 'none') {
				//this.createScatterChartGroupBy(ReplayAnalytics.app.chartTypes[chartIndex], ReplayAnalytics.app.jsonstore[chartIndex][value],ReplayAnalytics.app.xs[chartIndex],ReplayAnalytics.app.ys[chartIndex],chartIndex);
			}
			else {	
				this.getApplication().getController('Scatter').createScatterChart(ReplayAnalytics.app.chartTypes[chartIndex],ReplayAnalytics.app.jsonstore[chartIndex][value],ReplayAnalytics.app.dataFieldValues[chartIndex],ReplayAnalytics.app.categoryFieldValues[chartIndex],chartIndex, null);
			}				
		}	
		else if(ReplayAnalytics.app.chartTypes[chartIndex] == 'horizontalbar' || ReplayAnalytics.app.chartTypes[chartIndex] == 'verticalbar' || ReplayAnalytics.app.chartTypes[chartIndex] == 'line') {
			this.getApplication().getController('Main').changeModelFields();
			if(ReplayAnalytics.app.chartTypes[chartIndex] == 'horizontalbar') {
				if(ReplayAnalytics.app.groupBys[ReplayAnalytics.app.currentActivePanelIndex] != 'none') {
					ReplayAnalytics.app.getController('HorizontalBar').createHorizontalBarChart(ReplayAnalytics.app.jsonstore[chartIndex][value],chartIndex,ReplayAnalytics.app.groupByBarLabels);
				}
				else {
					ReplayAnalytics.app.getController('HorizontalBar').createHorizontalBarChart(ReplayAnalytics.app.jsonstore[chartIndex][value],chartIndex,null);
				}
			}
			else if(ReplayAnalytics.app.chartTypes[chartIndex] == 'verticalbar') {
				if(ReplayAnalytics.app.groupBys[ReplayAnalytics.app.currentActivePanelIndex] != 'none') {
					ReplayAnalytics.app.getController('VerticalBar').createVerticalBarChart(ReplayAnalytics.app.jsonstore[chartIndex][value],chartIndex,ReplayAnalytics.app.groupByBarLabels);
				}
				else {
					ReplayAnalytics.app.getController('VerticalBar').createVerticalBarChart(ReplayAnalytics.app.jsonstore[chartIndex][value],chartIndex,null);
				}
			}
			else {
				if(ReplayAnalytics.app.groupBys[ReplayAnalytics.app.currentActivePanelIndex] == 'none') {
					ReplayAnalytics.app.getController('LineBar').createLineChart(ReplayAnalytics.app.jsonstore[chartIndex][value],chartIndex,null);
				}
				else{
					ReplayAnalytics.app.getController('LineBar').createLineChart(ReplayAnalytics.app.jsonstore[chartIndex][value],chartIndex,ReplayAnalytics.app.groupByBarLabels);	
				}
			}
		}
		else if(ReplayAnalytics.app.chartTypes[chartIndex] == 'pie') {
			this.getApplication().getController('Pie').createPieChart(ReplayAnalytics.app.jsonstore[chartIndex][value],ReplayAnalytics.app.dataFieldValues[chartIndex],ReplayAnalytics.app.categoryFieldValues[chartIndex],chartIndex)						
		}
		ReplayAnalytics.app.chartCreated[chartIndex] = true;
		if(ReplayAnalytics.app.dateSet[chartIndex] == true) {
			this.getApplication().getController('Main').setFocusOnPanel(chartIndex);
		}
		else {
			ReplayAnalytics.app.dateSet[chartIndex] = true;
		}
		this.setPanelDateCaption(chartIndex, value);
		
		if (chartIndex == 5){
			Ext.ComponentQuery.query('interestingmomentgraphpanel')[0].add(ReplayAnalytics.app.newChart[chartIndex]);						
		} else {
			Ext.ComponentQuery.query('panel'+chartIndex)[0].add(ReplayAnalytics.app.newChart[chartIndex]);
			/*var carousel = Ext.ComponentQuery.query('carousel[id=carousel'+ chartIndex +']')[0];
			playbackController.getApplication().getController('Main').clearCarousel();					
			playbackController.getApplication().getController('InterestingMoment').addChartDataTableToCarousel(chartIndex);
			playbackController.getApplication().getController('InterestingMoment').addIMCommentListToCarousel(chartIndex);	
			playbackController.getApplication().getController('InterestingMoment').addIMListToCarousel(chartIndex);					
			carousel.setActiveItem(0);*/
		}
		hideLoadingMask();
	},
	
	resetFunction: function() {	
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		clearInterval(ReplayAnalytics.app.waitvariables[chartIndex]);	
		var newPosition;
		newPosition = ReplayAnalytics.app.minimumPositions[chartIndex]; 
		ReplayAnalytics.app.sliders[chartIndex].setValue(newPosition); 
		ReplayAnalytics.app.currentPositions[chartIndex] = newPosition;
		this.showCharts();
		//ReplayAnalytics.app.sliders[chartIndex].fireEvent('change', ReplayAnalytics.app.sliders[chartIndex], chartIndex);
		if (chartIndex != 0){
			ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);
		}
		if (chartIndex == 0) {	
			for(i = 1; i < 5; i++) {
				ReplayAnalytics.app.currentActivePanelIndex = i;
				ReplayAnalytics.app.sliders[i].setValue(newPosition);
				ReplayAnalytics.app.sliders[i].fireEvent('change',ReplayAnalytics.app.sliders[i],i);
				//ReplayAnalytics.app.sliders[i].fireEvent('change',ReplayAnalytics.app.sliders[i],i);
			}
			ReplayAnalytics.app.currentActivePanelIndex = 0;
		}
		//this.checkForConfiguredCarousel();
	},
	
	checkForConfiguredCarousel: function(){
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		if (ReplayAnalytics.app.chartCreated[chartIndex]){
			var carousel = Ext.ComponentQuery.query('carousel[id=carousel'+ chartIndex +']')[0];
			if (carousel.getItems().items.length == 2){
				playbackController.getApplication().getController('InterestingMoment').addChartDataTableToCarousel(chartIndex);
				playbackController.getApplication().getController('InterestingMoment').addIMListToCarousel(chartIndex);				
				playbackController.getApplication().getController('InterestingMoment').addIMCommentListToCarousel(chartIndex);	
			}			
		}
	},
	
	sliderListenerFunctionChange: function(slider) {
		this.moveCarouselToGraphItem();
		this.getApplication().getController('InterestingMoment').getManualIMCallout().hide();
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		var sliderValue = slider.getValue()[0];
		var value = Math.floor(sliderValue / ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex]);
		ReplayAnalytics.app.currentPositions[ReplayAnalytics.app.currentActivePanelIndex] = ReplayAnalytics.app.sliders[ReplayAnalytics.app.currentActivePanelIndex].getValue()[0];
		logInfo('sliderValue=' + sliderValue + ' & differential=' + ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex] 
			+ ' & value=' + value);
		/*if (ReplayAnalytics.app.interestingMoments == 'On' && !ReplayAnalytics.app.creatingGraphs){
       		playbackController.getApplication().getController('InterestingMoment').checkForInterestingMoment(chartIndex, value);
    	}*/
		
		if (chartIndex != 0){
			this.setPanelDateCaption(chartIndex, value);
			ReplayAnalytics.app.newChart[chartIndex].bindStore(ReplayAnalytics.app.jsonstore[chartIndex][value]);
		} else if (chartIndex == 0) {
			this.getApplication().getController('GlobalSync').globalSyncSliderFunctionChange(sliderValue, chartIndex);
		}
	},	
	
	resetBackwardFunction: function() {	
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		ReplayAnalytics.app.lastPlaybackAction = 'resetBackward';
		clearInterval(ReplayAnalytics.app.waitvariables[chartIndex]);	
		var newPosition;
		newPosition = ReplayAnalytics.app.minimumPositions[chartIndex]; 
		ReplayAnalytics.app.sliders[chartIndex].setValue(newPosition);
		ReplayAnalytics.app.currentPositions[chartIndex] = newPosition;
		ReplayAnalytics.app.sliders[chartIndex].fireEvent('change', ReplayAnalytics.app.sliders[chartIndex], chartIndex);
		//if (ReplayAnalytics.app.interestingMoments == 'On'){
       	//	playbackController.getApplication().getController('InterestingMoment').checkForInterestingMoment(chartIndex, newPosition);
    	//}
		/*if (chartIndex != 0){
			ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);
		}*/
		/*if (chartIndex == 0) {	
			for(i = 1; i < 5; i++) {
				ReplayAnalytics.app.currentActivePanelIndex = i;
				ReplayAnalytics.app.sliders[i].setValue(newPosition);
				ReplayAnalytics.app.sliders[i].fireEvent('change',ReplayAnalytics.app.sliders[i],i);
				//ReplayAnalytics.app.sliders[i].fireEvent('change',ReplayAnalytics.app.sliders[i],i);
			}
			ReplayAnalytics.app.currentActivePanelIndex = 0;
		}*/	
	},
	
	stepBackwardFunction: function() {	
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		if(ReplayAnalytics.app.currentPositions[chartIndex] != ReplayAnalytics.app.minimumPositions[chartIndex]) {
			this.updateSliderInterval();
		}
		ReplayAnalytics.app.lastPlaybackAction = 'stepBackward';		
		clearInterval(ReplayAnalytics.app.waitvariables[chartIndex]);
        if (ReplayAnalytics.app.currentPositions[chartIndex] > ReplayAnalytics.app.minimumPositions[chartIndex]) {
          	newPosition = ReplayAnalytics.app.currentPositions[chartIndex] - ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex];
           	ReplayAnalytics.app.sliders[chartIndex].setValue(newPosition);           	
           	ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);    
           	if (ReplayAnalytics.app.interestingMoments == 'On' || ReplayAnalytics.app.replayCommentsSetting == 'On'){
           		playbackController.getApplication().getController('InterestingMoment').checkForInterestingMoment(chartIndex, newPosition);
        	}
           	/*if (chartIndex != 0){
				ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);
			}*/
           	//ReplayAnalytics.app.currentPositions[chartIndex] = ReplayAnalytics.app.sliders[chartIndex].getValue()[0];
        }
	},	
	
	playBackwardFunction: function() {
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		if(ReplayAnalytics.app.currentPositions[chartIndex] != ReplayAnalytics.app.minimumPositions[chartIndex]) {
			this.updateSliderInterval();
		}
		this.stepBackwardFunction();
		ReplayAnalytics.app.lastPlaybackAction = 'playBackward';		
		clearInterval(ReplayAnalytics.app.waitvariables[chartIndex]);
		ReplayAnalytics.app.currentPositions[chartIndex] = ReplayAnalytics.app.sliders[chartIndex].getValue()[0];     
		if (!ReplayAnalytics.app.isIMGraphRunning && chartIndex != 5){
			ReplayAnalytics.app.waitvariables[chartIndex] = setInterval( function() {	
				var newPosition;
	            if (ReplayAnalytics.app.currentPositions[chartIndex] > ReplayAnalytics.app.minimumPositions[chartIndex]) {
	            	newPosition = ReplayAnalytics.app.currentPositions[chartIndex] - ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex];
	            	ReplayAnalytics.app.sliders[chartIndex].setValue(newPosition);
	            	ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);    
	            	if (ReplayAnalytics.app.interestingMoments == 'On' || ReplayAnalytics.app.replayCommentsSetting == 'On'){
	               		playbackController.getApplication().getController('InterestingMoment').checkForInterestingMoment(chartIndex, newPosition);
	            	}
	            	/*if (chartIndex != 0){
						ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);
					}*/
	            	//ReplayAnalytics.app.currentPositions[chartIndex] = ReplayAnalytics.app.sliders[chartIndex].getValue()[0];
	            }	
	            else { 	
	               	clearInterval(ReplayAnalytics.app.waitvariables[chartIndex]); 
	            }
			},ReplayAnalytics.app.replaySpeed);
		}		
	},
	
	pauseFunction: function() {	
		this.moveCarouselToGraphItem();
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		logInfo('pauseFunction called for Chart ' + chartIndex + ' at sliderValue=' + ReplayAnalytics.app.sliders[chartIndex].getValue()[0]);		
		clearInterval(ReplayAnalytics.app.waitvariables[chartIndex]);
		if (chartIndex == 0) {
			for(i = 1; i < 5; i++) {
				clearInterval(ReplayAnalytics.app.waitvariables[i]); 
			}
		}
	},
	
	playForwardFunction: function() {
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		if(ReplayAnalytics.app.currentPositions[chartIndex] != ReplayAnalytics.app.maximumPositions[chartIndex]) {
			this.updateSliderInterval();
		}
		this.stepForwardFunction();
		ReplayAnalytics.app.lastPlaybackAction = 'playForward';
		clearInterval(ReplayAnalytics.app.waitvariables[chartIndex]);
		ReplayAnalytics.app.currentPositions[chartIndex] = ReplayAnalytics.app.sliders[chartIndex].getValue()[0];     		
		if (!ReplayAnalytics.app.isIMGraphRunning && chartIndex != 5 && ReplayAnalytics.app.currentPositions[chartIndex] != ReplayAnalytics.app.maximumPositions[chartIndex]){
			ReplayAnalytics.app.waitvariables[chartIndex] = setInterval( function() {	
				logInfo('Inside setInterval for playForwardFunction at currentPos=' + ReplayAnalytics.app.currentPositions[chartIndex]
					+ ' & newPos=' + (ReplayAnalytics.app.currentPositions[chartIndex] + ReplayAnalytics.app.differentialMultiplier[chartIndex]));
				var newPosition;
	            if (ReplayAnalytics.app.currentPositions[chartIndex] < ReplayAnalytics.app.maximumPositions[chartIndex]) {
	            	newPosition = ReplayAnalytics.app.currentPositions[chartIndex] + ReplayAnalytics.app.differentialMultiplier[chartIndex];
	            	ReplayAnalytics.app.sliders[chartIndex].setValue(newPosition);
					ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);
					if (ReplayAnalytics.app.interestingMoments == 'On' || ReplayAnalytics.app.replayCommentsSetting == 'On'){
			       		playbackController.getApplication().getController('InterestingMoment').checkForInterestingMoment(chartIndex, newPosition);
			    	}
					/*if (chartIndex != 0){
						ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);
					}*/
					//ReplayAnalytics.app.currentPositions[chartIndex] = ReplayAnalytics.app.sliders[chartIndex].getValue()[0];
				}	
	            else {
					clearInterval(ReplayAnalytics.app.waitvariables[chartIndex]); 
	            }
			},ReplayAnalytics.app.replaySpeed);
		}		
	},
	
	stepForwardFunction: function() {
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		if(ReplayAnalytics.app.currentPositions[chartIndex] != ReplayAnalytics.app.maximumPositions[chartIndex]) {
			this.updateSliderInterval();
		}
		ReplayAnalytics.app.lastPlaybackAction = 'stepForward';
		clearInterval(ReplayAnalytics.app.waitvariables[chartIndex]);
        if (ReplayAnalytics.app.currentPositions[chartIndex] < ReplayAnalytics.app.maximumPositions[chartIndex]) {
        	newPosition = ReplayAnalytics.app.currentPositions[chartIndex] + ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.currentActivePanelIndex];
        	ReplayAnalytics.app.sliders[chartIndex].setValue(newPosition);
           	ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);    
           	if (ReplayAnalytics.app.interestingMoments == 'On' || ReplayAnalytics.app.replayCommentsSetting == 'On'){
           		playbackController.getApplication().getController('InterestingMoment').checkForInterestingMoment(chartIndex, newPosition);
        	}
           	//ReplayAnalytics.app.currentPositions[chartIndex] = ReplayAnalytics.app.sliders[chartIndex].getValue()[0];
           	/*if (chartIndex != 0){
				ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);
			}*/
        }
	},
	
	resetForwardFunction: function() {
		var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
		ReplayAnalytics.app.lastPlaybackAction = 'resetForward';
		this.getApplication().getController('InterestingMoment').getManualIMCallout().hide();
		logMessage('resetForwardFunction for Chart ' + ReplayAnalytics.app.currentActivePanelIndex);
		clearInterval(ReplayAnalytics.app.waitvariables[chartIndex]);	
		var newPosition;
		newPosition = ReplayAnalytics.app.maximumPositions[chartIndex]; 
		ReplayAnalytics.app.sliders[chartIndex].setValue(newPosition); 
		ReplayAnalytics.app.currentPositions[chartIndex] = newPosition;
		ReplayAnalytics.app.sliders[chartIndex].fireEvent('change', ReplayAnalytics.app.sliders[chartIndex], chartIndex);
		//if (ReplayAnalytics.app.interestingMoments == 'On'){
       	//	playbackController.getApplication().getController('InterestingMoment').checkForInterestingMoment(chartIndex, newPosition);
    	//}
		/*if (chartIndex != 0){
			ReplayAnalytics.app.sliders[chartIndex].fireEvent('change',ReplayAnalytics.app.sliders[chartIndex],chartIndex);
		}*/
		/*if (chartIndex == 0) {
			for(i = 1; i < 5; i++) {	
				ReplayAnalytics.app.currentActivePanelIndex = i;
				ReplayAnalytics.app.sliders[i].setValue(ReplayAnalytics.app.maximumPositions[ReplayAnalytics.app.currentActivePanelIndex]);
				ReplayAnalytics.app.sliders[i].fireEvent('change',ReplayAnalytics.app.sliders[i],i);
				//ReplayAnalytics.app.sliders[i].fireEvent('change',ReplayAnalytics.app.sliders[i],i);
			}
			ReplayAnalytics.app.currentActivePanelIndex = 0;
		}*/
	},
	
	moveCarouselToGraphItem: function(){
				
	},
});
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
var interestingMomentController;
Ext.define('ReplayAnalytics.controller.InterestingMoment', {
	extend : 'Ext.app.Controller',
	xtype: 'interestingmomentcontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
			'interestingMomentGraphPanel': 'interestingmomentgraphpanel',
			'interestingMomentGraphTitleBar' : 'toolbar[id=imgraphtitlebar]',
			'closeInterestingMomentPanel' : 'button[id=closeinterestingmomentgraphpanelbutton]',
			'imFoundDialog' : 'imfounddialog',
			'manualIMButton': 'button[id=manualimbutton]',
			'manualIMDialog': 'manualimdialog',
			'closeManualIMDialog': 'button[id=closemanualimdialogbutton]',
			'saveManualIM': 'button[id=savemanualimbutton]',
			'manualIMMessageField': 'textareafield[id=manualimmessagefield]',
			'imTabPanel': 'tabpanel[id=imtabpanel]',
			'manualIMCallout': 'manualimcallout',
			'showIMReplayGraph': 'button[id=replayinterestingmomentbutton]',
			'showTrendGraph' : 'button[id=showtrendgraphbutton]',
			'nextIMTrend' : 'button[id=nextinterestingmomentbutton]',
			'previousIMTrend' : 'button[id=previousinterestingmomentbutton]',
		},
		control: {
			'showIMReplayGraph' : {
				tap: 'showIMReplayGraph'
			},
			'showTrendGraph' : {
				tap: 'showIMTrendGraph',
			},
			'nextIMTrend' : {
				tap: 'showNextIMTrend',
			},
			'previousIMTrend' : {
				tap: 'showPreviousIMTrend',
			},
			'closeInterestingMomentPanel': {
				tap: 'closeInterestingMomentPanel'
			},
			'manualIMButton': {
				tap: 'addEditManualIMForPosition',
			},
			'closeManualIMDialog': {
				tap: 'closeManualIMDialog',
			},
			'saveManualIM': {
				tap: 'saveManualIM',
			},
		},
	},
	
	launch: function(){
		interestingMomentController = this;
	},
	
	showInterestingMomentGraphPanel: function(){
		this.getInterestingMomentGraphPanel().show();		
	},
	
	closeInterestingMomentPanel : function(){
		this.getInterestingMomentGraphPanel().hide();
		ReplayAnalytics.app.currentActivePanelIndex = ReplayAnalytics.app.previousActivePanelIndex;
		this.getApplication().getController('Main').setFocusOnPanel(ReplayAnalytics.app.currentActivePanelIndex);
		ReplayAnalytics.app.getController('Playback').resumeLastPlaybackAction();
		ReplayAnalytics.app.isIMGraphRunning = false;
	},
	
	getNewAxisForTimeAxisOption: function(axis, newGranularity){
		if (axis == 'Date'){
			if (newGranularity == 'Hourly'){
				axis = 'Hour';
			}
		} else if (axis == 'Week'){
			if (newGranularity == 'Hourly'){
				axis = 'Hour';
			} else if (newGranularity == 'Daily'){
				axis = 'Date';
			}
		} else if (axis == 'Month'){
			if (newGranularity == 'Hourly'){
				axis = 'Hour';
			} else if (newGranularity == 'Daily'){
				axis = 'Date';
			} else if (newGranularity == 'Weekly'){
				axis = 'Week';
			}
		} else if (axis == 'DayOfWeek'){
			if (newGranularity == 'Hourly'){
				axis = 'Hour';
			}
		}
		return axis;
	},
	
	isTimeAxisOption: function(axis){
		if (axis == 'Day' || axis == 'Week' || axis == 'Hour' || axis == 'DayOfWeek' || axis == 'Month' ||
				axis == 'Time (Date)' || axis == ' Time (Week)' || axis == 'Time (Hour)' || axis == 'Time (Day Of Week)' || axis == 'Time (Month)'){
			return true;
		}
		return false;
	},
	
	addEditManualIMForPosition: function(){
		this.getManualIMMessageField().setValue('');
		if (ReplayAnalytics.app.currentDashboard == undefined || ReplayAnalytics.app.currentDashboard.dashboardId == undefined){
			Ext.Msg.alert('ReplayAnalytics &#153;', 'You need to save your dashboard first to add replay comments.', Ext.emptyFn);
		} else {
			this.getManualIMDialog().show();
		}
	},
	
	getAllManualIMsForCurrentChart: function(){
		var activePanel = ReplayAnalytics.app.currentActivePanelIndex;
		try{
			if (ReplayAnalytics.app.currentDashboard != undefined){
				switch(activePanel){
					case 1: manualIMs = ReplayAnalytics.app.currentDashboard.panel1Settings.manualIMs; break;
					case 2: manualIMs = ReplayAnalytics.app.currentDashboard.panel2Settings.manualIMs; break;
					case 3: manualIMs = ReplayAnalytics.app.currentDashboard.panel3Settings.manualIMs; break;
					case 4: manualIMs = ReplayAnalytics.app.currentDashboard.panel4Settings.manualIMs; break;
				}
				ReplayAnalytics.app.currentChartManualIMs = manualIMs;
			}			
		} catch(err){
		}
	},
	
	getAllManualIMsForCurrentIndex: function(){
		var activePanel = ReplayAnalytics.app.currentActivePanelIndex;
		var imIndex = Math.floor(ReplayAnalytics.app.sliders[activePanel].getValue() / ReplayAnalytics.app.differentialMultiplier[activePanel]);
		var manualIMs = undefined;
		try{
			if (ReplayAnalytics.app.currentDashboard != undefined){
				switch(activePanel){
					case 1: manualIMs = ReplayAnalytics.app.currentDashboard.panel1Settings.manualIMs; break;
					case 2: manualIMs = ReplayAnalytics.app.currentDashboard.panel2Settings.manualIMs; break;
					case 3: manualIMs = ReplayAnalytics.app.currentDashboard.panel3Settings.manualIMs; break;
					case 4: manualIMs = ReplayAnalytics.app.currentDashboard.panel4Settings.manualIMs; break;
				}
				ReplayAnalytics.app.currentManualIMs = new Array();
				ReplayAnalytics.app.currentChartManualIMs = manualIMs;
				if (manualIMs != undefined && manualIMs != null && manualIMs.length > 0){
					var j = 0;
					for( var i = 0; i < manualIMs.length; i++){
						if (manualIMs[i].imIndex == imIndex){
							ReplayAnalytics.app.currentManualIMs[j] = manualIMs[i];
							j++;
						}
					}
				}
			}			
		} catch(err){
		}
	},
	
	saveManualIM: function(){
		this.getManualIMDialog().hide();
		var activePanel = ReplayAnalytics.app.currentActivePanelIndex;
		var dashboardSettingId = null;
		switch(activePanel){
			case 1:  dashboardSettingId = ReplayAnalytics.app.currentDashboard.panel1Settings.id; break;
			case 2:  dashboardSettingId = ReplayAnalytics.app.currentDashboard.panel2Settings.id; break;
			case 3:  dashboardSettingId = ReplayAnalytics.app.currentDashboard.panel3Settings.id; break;
			case 4:  dashboardSettingId = ReplayAnalytics.app.currentDashboard.panel4Settings.id; break;
		}
		var manualIMId = undefined;
		var imIndex = Math.floor(ReplayAnalytics.app.sliders[activePanel].getValue() / ReplayAnalytics.app.differentialMultiplier[activePanel]);
		var imMessage = this.getManualIMMessageField().getValue();
		showLoadingMask();
		Ext.Ajax.request({			  
            url: 'saveManualIM.do',
            method: 'POST',
            params: {
            	userId: ReplayAnalytics.app.currentUserSession.userId,   
            	dashboardSettingId: dashboardSettingId,
            	dashboardId: ReplayAnalytics.app.currentDashboard.dashboardId,
            	manualIMId: manualIMId,
            	imIndex: imIndex,
            	imMessage: imMessage,
            },
            success: this.handleManualIMSave,
            failure: function(response) {
           		hideLoadingMask();
           		logMessage('Failure Saving manual IM.');
           },
		});
	},
	
	closeManualIMDialog: function(){
		this.getManualIMDialog().hide();
	},
	
	handleManualIMSave: function(response){
		var responseJSON = Ext.JSON.decode(response.responseText);
		if (responseJSON.error != undefined){
			Ext.Msg.alert('Error', responseJSON.description, Ext.emptyFn);	
		} else {
			ReplayAnalytics.app.currentDashboard = responseJSON.dashboard;
			for (i = 0; i < ReplayAnalytics.app.userDashboardDetails.length; i++){
				if (ReplayAnalytics.app.userDashboardDetails[i].dashboardId == responseJSON.dashboard.dashboardId){
					ReplayAnalytics.app.userDashboardDetails[i] = responseJSON.dashboard;
				}
			}
			try{
				var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
				var carousel = Ext.ComponentQuery.query('carousel[id=carousel'+ chartIndex +']')[0];
				carousel.removeAt(carousel.getItems().items.length - 1);
				interestingMomentController.addIMCommentListToCarousel(chartIndex);
				carousel.setActiveItem(carousel.getItems().items.length);
			} catch(err){
			}
			Ext.Msg.alert('Success', responseJSON.description, Ext.emptyFn);
		}
		hideLoadingMask();
		interestingMomentController.getManualIMMessageField().setValue('');
	},
	
	checkForInterestingMoment: function(chartIndex, newPosition){
		var imPointPosition = Math.floor(newPosition / ReplayAnalytics.app.differentialMultiplier[chartIndex]);
		if (chartIndex != 0){
			this.getAllManualIMsForCurrentIndex();
			if (ReplayAnalytics.app.replayCommentsSetting == 'On' && ReplayAnalytics.app.currentManualIMs != undefined 
					&& ReplayAnalytics.app.currentManualIMs.length > 0){
				this.getApplication().getController('Playback').pauseFunction();
				this.handleManualIMsForChart(chartIndex, 0, imPointPosition);
			} else if (ReplayAnalytics.app.interestingMoments == 'On') {
				this.checkForAutoIMs(chartIndex, imPointPosition, false);
			}
		} else {
			this.checkForGlobalSyncIMs(imPointPosition, 0, 0, false, false);
		}							
	},
	
	checkForAutoIMs: function(chartIndex, imPointPosition, playbackPaused){
		var imPoint = undefined;
		if (ReplayAnalytics.app.interestingMomentsPoints[chartIndex] != undefined){
			var j = 0;
			for (var i = 0; i < ReplayAnalytics.app.interestingMomentsPoints[chartIndex].length; i++){
				if (ReplayAnalytics.app.interestingMomentsPoints[chartIndex][i].Index == imPointPosition){
					if (j == 0){
						imPoint = ReplayAnalytics.app.interestingMomentsPoints[chartIndex][i];
					}				
					ReplayAnalytics.app.allIMPointsAtCurrentIndex[j] = ReplayAnalytics.app.interestingMomentsPoints[chartIndex][i];
					j++;
				}
			}			
			if (imPoint != undefined && !ReplayAnalytics.app.isIMGraphRunning){
				ReplayAnalytics.app.isIMGraphRunning = true;
				this.getApplication().getController('Playback').pauseFunction();
				this.showIMFoundCallout(chartIndex, imPoint);
			} else {
				ReplayAnalytics.app.isIMGraphRunning = false;
			}
		} 
		if (!ReplayAnalytics.app.isIMGraphRunning && playbackPaused){
			ReplayAnalytics.app.getController('Playback').resumeLastPlaybackAction();
		}
	},
	
	handleManualIMsForChart: function(chartIndex, i, imPointPosition){
		if(i < ReplayAnalytics.app.currentManualIMs.length){
			if (ReplayAnalytics.app.currentManualIMs[i] != undefined){
				this.showManualIMCallout(chartIndex, ReplayAnalytics.app.currentManualIMs[i], i, imPointPosition);
			}
		}else{
			this.checkForAutoIMs(chartIndex, imPointPosition, true);
		}
	},
	
	showManualIMCallout: function(index, manualIM, i, imPointPosition){
		var panelObj = Ext.ComponentQuery.query('panel' + index)[0];
		var width = panelObj.element.getWidth(), height = panelObj.element.getHeight();
		var x = panelObj.element.getX(), y = panelObj.element.getY();
		var callOutX = x + width*.1, callOutY = y;
		var calloutText = '<div align="center" style="color:black; font-size: 12px; padding: 30px; padding-left: 20px;">' + manualIM.imMessage + '</div>';
		var style = 'background-image: url(lib/images/callout-image-inverted.png); background-color: transparent; padding-left:12px; background-size: 100%;';
		if (i % 2 == 1){
			callOutY = (y + height) - 135;
			calloutText = '<div align="center" style="color:black; font-size: 12px; padding: 30px; padding-left: 20px; padding-top: 60px;">' + manualIM.imMessage + '</div>';
			style = 'background-image: url(lib/images/callout-image-inverted-flipped.png); background-color: transparent; padding-left:12px; background-size: 100%';
		}
		this.getManualIMCallout().setStyle(style);
		this.getManualIMCallout().show();
		this.getManualIMCallout().element.setXY(callOutX, callOutY);		
		this.getManualIMCallout().setHtml(calloutText);
		var task = Ext.create('Ext.util.DelayedTask', function() {
			task.cancel();
			i++;				
			this.handleManualIMsForChart(index, i, imPointPosition);
		}, this);
		task.delay(2000);	
	},
	
	showIMFoundCallout: function(index, imPoint){
		var panelObj = Ext.ComponentQuery.query('panel' + index)[0];
		var width = panelObj.element.getWidth(), height = panelObj.element.getHeight();
		var x = panelObj.element.getX(), y = panelObj.element.getY();
		var callOutX = x + width*.6, callOutY = y + height*.2;
		this.getImFoundDialog().show();
		this.getImFoundDialog().element.setXY(callOutX, y);
		var calloutText = '<div align="center" style="color:black; font-size: 12px; padding: 30px; padding-left: 20px;">Found an interesting moment. ' + imPoint.Message + '</div>'
		this.getImFoundDialog().setHtml(calloutText);
		var task = Ext.create('Ext.util.DelayedTask', function() {
			task.cancel();
		    this.getImFoundDialog().hide();
			this.initInterestingMomentGraph(imPoint);
		}, this);
		task.delay(ReplayAnalytics.app.replaySpeed);
	},
	
	initInterestingMomentGraph: function(imPoint){
		ReplayAnalytics.app.previousActivePanelIndex = ReplayAnalytics.app.currentActivePanelIndex;
		this.showInterestingMomentGraphPanel();
		this.getManualIMCallout().hide();
		ReplayAnalytics.app.activeIMPoint = imPoint;
		this.showIMTrendingGraphForIMPoint(imPoint, ReplayAnalytics.app.interestingMomentGraphIndex);
		this.handleButtonsAndTextForIMPointIndex(true);
	},
	
	showIMTrendGraph: function(){	
		ReplayAnalytics.app.currentActivePanelIndex = ReplayAnalytics.app.previousActivePanelIndex;
		this.showIMTrendingGraphForIMPoint(ReplayAnalytics.app.allIMPointsAtCurrentIndex[ReplayAnalytics.app.activeIMPointIndex], ReplayAnalytics.app.interestingMomentGraphIndex);
		this.handleButtonsAndTextForIMPointIndex(true);
	},
	
	handleButtonsAndTextForIMPointIndex: function(showingTrendingGraph){
		if (showingTrendingGraph){
			Ext.ComponentQuery.query('slider' + ReplayAnalytics.app.interestingMomentGraphIndex)[0].hide();
			var imGraphTitle = 'Interesting Moment ' + (ReplayAnalytics.app.activeIMPointIndex + 1) + ' of ' + ReplayAnalytics.app.allIMPointsAtCurrentIndex.length;
			this.getInterestingMomentGraphTitleBar().setTitle(imGraphTitle);
			this.getShowIMReplayGraph().show();
			this.getShowTrendGraph().hide();
			this.getPreviousIMTrend().show();
			this.getNextIMTrend().show();
			if (ReplayAnalytics.app.allIMPointsAtCurrentIndex != undefined && ReplayAnalytics.app.allIMPointsAtCurrentIndex.length > 0){
				if (ReplayAnalytics.app.activeIMPointIndex > 0 && ReplayAnalytics.app.activeIMPointIndex < (ReplayAnalytics.app.allIMPointsAtCurrentIndex.length - 1)){
					this.getPreviousIMTrend().setDisabled(false);
					this.getNextIMTrend().setDisabled(false);
				} else if (ReplayAnalytics.app.activeIMPointIndex == 0 && ((ReplayAnalytics.app.allIMPointsAtCurrentIndex.length - 1) == 0)) {
					this.getPreviousIMTrend().setDisabled(true);
					this.getNextIMTrend().setDisabled(true);
				} else if (ReplayAnalytics.app.activeIMPointIndex == (ReplayAnalytics.app.allIMPointsAtCurrentIndex.length - 1)){
					this.getPreviousIMTrend().setDisabled(false);
					this.getNextIMTrend().setDisabled(true);
				} else if (ReplayAnalytics.app.activeIMPointIndex == 0){
					this.getPreviousIMTrend().setDisabled(true);
					this.getNextIMTrend().setDisabled(false);
				}
			}
		} else {
			this.getInterestingMomentGraphTitleBar().setTitle('Interesting Moment');
			this.getShowIMReplayGraph().hide();
			this.getShowTrendGraph().show();
			this.getPreviousIMTrend().hide();
			this.getNextIMTrend().hide();
		}
	},
	
	showNextIMTrend: function(){
		var imIndex = ReplayAnalytics.app.activeIMPointIndex;
		if (imIndex < (ReplayAnalytics.app.allIMPointsAtCurrentIndex.length - 1)){
			imIndex = imIndex + 1;
		} 
		ReplayAnalytics.app.activeIMPointIndex = imIndex;
		this.showIMTrendGraph();
	},
	
	showPreviousIMTrend: function(){
		var imIndex = ReplayAnalytics.app.activeIMPointIndex;
		if (imIndex > 0){
			imIndex = imIndex - 1;
		} 
		ReplayAnalytics.app.activeIMPointIndex = imIndex;
		this.showIMTrendGraph();
	},
	
	showIMReplayGraph: function(){
		if (ReplayAnalytics.app.currentActivePanelIndex == 0){
			this.loadChartSettingForReplayGraphInGlobalSyncMode();
		}
		var interestingMomentGraphIndex = ReplayAnalytics.app.interestingMomentGraphIndex;
		this.handleButtonsAndTextForIMPointIndex(false);
		var granularity = ReplayAnalytics.app.granularities[ReplayAnalytics.app.currentActivePanelIndex];
		if (granularity == 'Hourly'){
			Ext.Msg.alert('ReplayAnalytics &#153;', 'Already on lowest granularity. No data available to display.', Ext.emptyFn);
		} else {
			showLoadingMask();
			ReplayAnalytics.app.databaseSetting[interestingMomentGraphIndex] = ReplayAnalytics.app.databaseSetting[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.graphTitle[interestingMomentGraphIndex] = "Interesting Moment";
			ReplayAnalytics.app.xs[interestingMomentGraphIndex] = ReplayAnalytics.app.xs[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.ys[interestingMomentGraphIndex] = ReplayAnalytics.app.ys[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.sizeBys[interestingMomentGraphIndex] = ReplayAnalytics.app.sizeBys[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.granularities[interestingMomentGraphIndex] = ReplayAnalytics.app.granularities[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.chartTypes[interestingMomentGraphIndex] = ReplayAnalytics.app.chartTypes[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.groupBys[interestingMomentGraphIndex] = ReplayAnalytics.app.groupBys[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.startDate[interestingMomentGraphIndex] = ReplayAnalytics.app.startDate[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.currentStartDate[interestingMomentGraphIndex] = ReplayAnalytics.app.currentStartDate[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.currentDate[interestingMomentGraphIndex] = ReplayAnalytics.app.currentDate[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.currentEndDate[interestingMomentGraphIndex] = ReplayAnalytics.app.currentEndDate[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.accumulate[interestingMomentGraphIndex] = ReplayAnalytics.app.accumulate[ReplayAnalytics.app.currentActivePanelIndex];
			ReplayAnalytics.app.XmaxReceived[interestingMomentGraphIndex] = false;
			ReplayAnalytics.app.YmaxReceived[interestingMomentGraphIndex] = false;
			ReplayAnalytics.app.previousActivePanelIndex = ReplayAnalytics.app.currentActivePanelIndex;
			ReplayAnalytics.app.currentActivePanelIndex = interestingMomentGraphIndex;
			switch(ReplayAnalytics.app.granularities[ReplayAnalytics.app.currentActivePanelIndex]) {
				case 'Hourly':
					ReplayAnalytics.app.granularities[ReplayAnalytics.app.currentActivePanelIndex] = 'Hourly';
					ReplayAnalytics.app.valueGranularities[ReplayAnalytics.app.currentActivePanelIndex] = 1;
					break;
				case 'Daily':
					ReplayAnalytics.app.granularities[ReplayAnalytics.app.currentActivePanelIndex] = 'Hourly';
					ReplayAnalytics.app.valueGranularities[ReplayAnalytics.app.currentActivePanelIndex] = 1;
					break;
				case 'Weekly':
					ReplayAnalytics.app.granularities[ReplayAnalytics.app.currentActivePanelIndex] = 'Daily';
					ReplayAnalytics.app.valueGranularities[ReplayAnalytics.app.currentActivePanelIndex] = 2;
					break;
				case 'Monthly':
					ReplayAnalytics.app.granularities[ReplayAnalytics.app.currentActivePanelIndex] = 'Weekly';
					ReplayAnalytics.app.valueGranularities[ReplayAnalytics.app.currentActivePanelIndex] = 3;
					break;
			}
			var chartType = ReplayAnalytics.app.chartTypes[interestingMomentGraphIndex];
			var newGranularity = ReplayAnalytics.app.granularities[interestingMomentGraphIndex];
			if (chartType == 'line' || chartType == 'verticalbar'){
				var axis = ReplayAnalytics.app.xs[interestingMomentGraphIndex];
				ReplayAnalytics.app.xs[interestingMomentGraphIndex] = interestingMomentController.getNewAxisForTimeAxisOption(axis, newGranularity);
			} else if (chartType == 'horizontalbar'){
				var axis = ReplayAnalytics.app.ys[interestingMomentGraphIndex];
				ReplayAnalytics.app.ys[interestingMomentGraphIndex] = interestingMomentController.getNewAxisForTimeAxisOption(axis, newGranularity);	
			}
			var sliderValue = Ext.ComponentQuery.query('slider' + ReplayAnalytics.app.previousActivePanelIndex)[0].getValue();
			var imIndex = Math.floor(sliderValue / ReplayAnalytics.app.differentialMultiplier[ReplayAnalytics.app.previousActivePanelIndex]);
			var chartIndex = ReplayAnalytics.app.previousActivePanelIndex;
			if (chartIndex == 0){
				chartIndex = ReplayAnalytics.app.allIMPointsAtCurrentIndex[ReplayAnalytics.app.activeIMPointIndex].ChartIndex;
				imIndex = ReplayAnalytics.app.globalSyncChartPositions[imIndex][chartIndex];
			}
			if (imIndex == 0){
				imStartDate = ReplayAnalytics.app.globalDateArray[chartIndex][imIndex];
			} else {
				imStartDate = ReplayAnalytics.app.globalDateArray[chartIndex][imIndex - 1];
			}			
			imEndDate = ReplayAnalytics.app.globalDateArray[chartIndex][imIndex];
			ReplayAnalytics.app.startDate[interestingMomentGraphIndex] = new Date(imStartDate);
			ReplayAnalytics.app.currentEndDate[interestingMomentGraphIndex] = new Date(imEndDate);
			ReplayAnalytics.app.dateSet[ReplayAnalytics.app.currentActivePanelIndex] = true;
			Ext.ComponentQuery.query('slider' + interestingMomentGraphIndex)[0].show();		
			this.getApplication().getController('Main').chartSetUp();
		}	
	},
	
	showIMTrendingGraphForIMPoint: function(imPoint, chartIndex){
		var chartObject = Ext.ComponentQuery.query('chart[id=chart'+chartIndex+']')[0];
		if(chartObject != undefined){
			chartObject.destroy();
		}
		var imTrend = imPoint.IMTrendData;
		if (imTrend == undefined){
			this.getInterestingMomentGraphPanel().setHtml('<div align="center" style="font-size: 13px; padding:10px;">'+imPoint.Message + ', ' + imPoint.Details + '<br />No additional data available to display.</div>');
			return;
		}
		var xAxis = imTrend.xAxis;
		var yAxis = imTrend.yAxis;
		var data = imTrend.data;
		var yMax = parseInt(imTrend.yMax);
		var trendStartIndex = parseInt(imTrend.trendStartIndex);
		var trendEndIndex = parseInt(imTrend.trendEndIndex);
		yMax = yMax + yMax*.10;
		ReplayAnalytics.app.newChart[chartIndex] = Ext.create("Ext.chart.CartesianChart", {
			id: 'chart'+chartIndex,
			store: {
				fields: [xAxis, yAxis],
				data: data,
			},
			renderTo: Ext.getBody(),
			flex: 1,
			shadow: true,
			autoShow: true,
		    flipXY: false,
		    //interactions: ['panzoom'],
	    	axes: [
	    	       {
	    	    	   	type: 'numeric',
	    	    	   	position: 'left',
	    	    	   	style: {
	    	    	   		strokeStyle: 'white',
	    	    	   		shadowColor: 'black',    	    	   	
	    	       		},
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: yAxis,
	    	    	   	minimum: 0,
	    	    	   	maximum: yMax,
	    	    	   	title: {
	   						text: yAxis,
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {
	    	    	   		fontFamily: 'Helvetica', 
	    	    	   		color: '#4270A2', 
	    	    	   		rotate: {
	    	    	   			degrees: 315
	    	    	   		}
	    	    	   	},
	    	       		fields: xAxis,
	    	    	   	style: {
	    	    	   		strokeStyle: 'white',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: xAxis,
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {	    	            	 
	    	            	 type: 'bar',
	    	            	 xField: xAxis,
	    	            	 yField: yAxis,
	    	            	 axis: 'left',
	    	            	 highlight: true,
	    	            	 showInLegend: false,
	    	            	 shadow: true,
	    	            	 animate: { duration: ReplayAnalytics.app.animateSpeed, delay: ReplayAnalytics.app.animateSpeed/2, easing: 'ease' },
	    	            	 style: {
	    	            	 		stroke: 'rgb(40,40,40)',
	    	            	 		renderer: function (sprite, attribute, record, index) {
	    	            	 			sprite.fillStyle = '#115fa6';
	    	        					if (index >= trendStartIndex && index <= trendEndIndex){	
	    	        						sprite.fillStyle = '#a61114';
	    	            	            }
	    	            		   	  	return sprite;
	   	    	             	 	}
	    	             	 },    	             	 
	    	              }
	    	           ]
		});
		this.getInterestingMomentGraphPanel().setHtml('<div align="center" style="font-size: 13px; padding:10px;">'+imPoint.Message + ', ' + imPoint.Details + '</div>');
		this.getInterestingMomentGraphPanel().add(ReplayAnalytics.app.newChart[chartIndex]);
	},
	
	addIMListToCarousel: function(chartIndex){
		var carousel = Ext.ComponentQuery.query('carousel[id=carousel'+ chartIndex +']')[0];
		if (ReplayAnalytics.app.interestingMomentsPoints[chartIndex] != undefined 
				&& ReplayAnalytics.app.interestingMomentsPoints[chartIndex].length != 0){
			var devMode = developerMode;
			var tpl = new Ext.XTemplate(
				'<div style="font-size: 14px;">',
				'<tpl if="' + devMode + ' == ' + true + '">',
				'At position {Index}, ',
				'</tpl>',
				'{StartDate} - {EndDate}</div><br/><div style="font-size: 15px;"><b>{Message}</b><br />{Details}</div>');
			var imList = Ext.create('Ext.Panel', {				
				fullscreen: true,
				flex: 1,				
				id: 'imlistpanel' + chartIndex,
				layout: 'fit',	
				cls: 'rounded-panel',
		    	items: [
		    	        {
		    	        	xtype: 'toolbar',
		    	        	maxHeight: '35px',
		    	        	docked: 'top',
		    	        	title: 'Interesting Moments',
		    	        	cls: 'toolbar-alternate',
		    	        },		    	         
		    	        {
		    	        	xtype: 'list',
		    	        	ui: 'round',
		    				store: {
		    					fields: ['Index', 'Type', 'Message', 'Details', 'StartDate', 'EndDate'],
		    					data: ReplayAnalytics.app.interestingMomentsPoints[chartIndex],
		    				},
		    				itemTpl: tpl,		    			
		    	        }
		    	       ],
			});						
			carousel.add(imList);	
		} else {
			var imList = Ext.create('Ext.Panel', {				
				fullscreen: true,
				flex: 1,				
				id: 'imlistpanel' + chartIndex,
				layout: 'fit',		    				    	
				cls: 'rounded-panel',
			    items: [
		    	        {
		    	        	xtype: 'toolbar',
		    	        	maxHeight: '35px',
		    	        	docked: 'top',
		    	        	title: 'Interesting Moments',
		    	        	cls: 'toolbar-alternate',
		    	        },		    	         
		    	        {
		    	        	html: '<div align="center" style="color: black; padding: 30px;">No Interesting Moment Points found for this graph.</div>'
		    	        }
		    	       ],
			});
			carousel.add(imList);
		}
	},
	
	addIMCommentListToCarousel: function(chartIndex){
		var carousel = Ext.ComponentQuery.query('carousel[id=carousel'+ chartIndex +']')[0];
		this.getAllManualIMsForCurrentChart();
		if (ReplayAnalytics.app.currentChartManualIMs != undefined && ReplayAnalytics.app.currentChartManualIMs.length > 0){
			var userId = 0;
			if (ReplayAnalytics.app.currentUserSession != undefined){
				userId = ReplayAnalytics.app.currentUserSession.userId;
			}
			var devMode = developerMode;
			var tpl = new Ext.XTemplate(
					'<div class="deleteplaceholder" style="float: right;"></div>',
					'<tpl if="authorId != ' + userId + '">',
					'<div style="float: right;"><img src="lib/images/lock-icon.png" width="25px" height="25px" /></div>',
					'</tpl>',
					'<tpl if="authorId == ' + userId + '">',
					'<div id="delete" style="float: right;"><img class="delete-icon" id="delete" src="lib/images/delete-red-icon.png" width="25px" height="25px" /></div>',
					'</tpl>',
					'<div style="font-size: 16px; font-weight: bold;">{imMessage}</div>',
					'<div style="font-size: 13px;">At {dateCreated} by {authorName}',
					'<tpl if="' + devMode + ' == ' + true + '">',
					', at position {imIndex}',
					'</tpl>',
					'</div>');
			var imCommentList = Ext.create('Ext.Panel', {				
				fullscreen: true,
				flex: 1,				
				id: 'imcommentlistpanel' + chartIndex,
				layout: 'fit',	
				cls: 'rounded-panel',
		    	items: [
		    	        {
		    	        	xtype: 'toolbar',
		    	        	maxHeight: '35px',
		    	        	docked: 'top',
		    	        	title: 'Replay Comments',
		    	        	cls: 'toolbar-alternate',
		    	        },		    	         
		    	        {
		    	        	xtype: 'list',
		    	        	id: 'imcommentlist' + chartIndex,
		    	        	ui: 'round',
		    	        	store: {
		    					fields: ['id', 'imIndex', 'dateCreated', 'imMessage', 'authorName', 'authorId'],
		    					data: ReplayAnalytics.app.currentChartManualIMs,
		    				},
		    				itemTpl: tpl,
		    	        }
		    	       ],		    	            
			});	
			var commentlist = Ext.ComponentQuery.query('list[id=imcommentlist'+ chartIndex + ']')[0];
			commentlist.on('itemtap', function(list, index, target, record, senchaEvent, eOpts){
				var div = senchaEvent.target;
				if (div.id == 'delete'){
					interestingMomentController.deleteManualIM(record, list);
				}				
			});
			carousel.add(imCommentList);						
		} else {
			var imCommentList = Ext.create('Ext.Panel', {				
				fullscreen: true,
				flex: 1,				
				id: 'imcommentlistpanel' + chartIndex,
				layout: 'fit',		    				    	
				cls: 'rounded-panel',
			    items: [
		    	        {
		    	        	xtype: 'toolbar',
		    	        	maxHeight: '35px',
		    	        	docked: 'top',
		    	        	title: 'Replay Comments',
		    	        	cls: 'toolbar-alternate',
		    	        },		    	         
		    	        {
		    	        	html: '<div align="center" style="color: black; padding: 30px;">No Replay Comments found for this graph.</div>'
		    	        }
		    	       ],
			});
			carousel.add(imCommentList);
		}
	},
	
	addChartDataTableToCarousel: function(chartIndex){		
		var dataInTable= "";		
		try{
			if (ReplayAnalytics.app.panelData[ReplayAnalytics.app.currentActivePanelIndex] != undefined){
				if(ReplayAnalytics.app.groupBys[ReplayAnalytics.app.currentActivePanelIndex] == 'none' || ReplayAnalytics.app.chartTypes[ReplayAnalytics.app.currentActivePanelIndex]=='pie' ){
					dataInTable = this.getDataInTable(Ext.JSON.decode(ReplayAnalytics.app.panelData[ReplayAnalytics.app.currentActivePanelIndex]));
				} else {
					dataInTable = this.getGroupDataInTable(Ext.JSON.decode(ReplayAnalytics.app.panelData[ReplayAnalytics.app.currentActivePanelIndex]));
				}
			} else {
				dataInTable = '<div style="color: black; padding: 20px;">Panel not configured yet.</div>';
			}				
		} catch(err){	
			logInfo('Error getting DataInTable--' +err);
		}		
		var carousel = Ext.ComponentQuery.query('carousel[id=carousel'+ chartIndex +']')[0];
		if (dataInTable != undefined && dataInTable != ""){	
			var chartDataTable = Ext.create('Ext.Panel', {				
				fullscreen: true,
				flex: 1,				
				id: 'chartdatatablepanel' + chartIndex,
				layout: 'vbox',	
				defaults: { styleHtmlContent: true },
				scrollable: {direction: 'both', directionLock: true},
				cls: 'rounded-panel',
		    	items: [
		    	        {
		    	        	xtype: 'toolbar',
		    	        	maxHeight: '35px',
		    	        	docked: 'top',
		    	        	title: 'Chart Data Table',
		    	        	cls: 'toolbar-alternate',
		    	        },		    	         
		    	        {
		    	        	html: '<div align="center" style="padding: 10px;">' + dataInTable + '</div>',
		    	        }
		    	       ],
			});						
			carousel.add(chartDataTable);	
			//carousel.insert(carousel.getItems().items.length, chartDataTable);
		} else {
			logInfo('DataInTable is null--');
		}
	},
	
	deleteManualIM: function(record, listview){
		var manualIMId = record.data.id;
		Ext.Msg.show({
			   title: 'Delete',
			   message: 'Are you sure you want to delete this comment?',
			   width: 300,
			   buttons: Ext.MessageBox.YESNO,
			   fn: function(buttonId) {
			       if (buttonId == 'yes'){
			    	   showLoadingMask();
			    	   Ext.Ajax.request({			  
			               url: 'deleteManualIM.do',
			               method: 'POST',
			               params: {
			            	   userId: ReplayAnalytics.app.currentUserSession.userId, 
			            	   dashboardId: ReplayAnalytics.app.currentDashboard.dashboardId,
			            	   manualIMId: manualIMId,
			               },
			               success: interestingMomentController.handleManualIMDelete,
			               failure: function(response) {
			               		hideLoadingMask();
			               		logMessage('Failure Deleting manual im comment.');
			               },
			   			});
			    	   record.stores[0].remove(record);
			    	   //record.stores[0].sync();
			       }
			   }
		});		
	},
	
	handleManualIMDelete: function(response){
		hideLoadingMask();
		var json = Ext.JSON.decode(response.responseText);
		if (json != undefined){
			Ext.Msg.alert('ReplayAnalytics &#153;', json.description, Ext.emptyFn);
			if (json.dashboard != undefined){
				ReplayAnalytics.app.currentDashboard = json.dashboard;
				for (i = 0; i < ReplayAnalytics.app.userDashboardDetails.length; i++){
					if (ReplayAnalytics.app.userDashboardDetails[i].dashboardId == json.dashboard.dashboardId){
						ReplayAnalytics.app.userDashboardDetails[i] = json.dashboard;
					}
				}
				try{
					var chartIndex = ReplayAnalytics.app.currentActivePanelIndex;
					var carousel = Ext.ComponentQuery.query('carousel[id=carousel'+ chartIndex +']')[0];
					carousel.removeAt(carousel.getItems().items.length - 1);
					interestingMomentController.addIMCommentListToCarousel(chartIndex);
					carousel.setActiveItem(carousel.getItems().items.length);
				} catch(err){
				}
			}
		}
	},
	
	getDataInTable : function(jsonData){
		var htmlString = '<table border="1" class="table-style">';
		htmlString = htmlString + '<tr>';
		htmlString = htmlString + '<th class="table-header">Date/Time</th>';
		for(row = 0 ; row < jsonData.data[0].data.length ; row++)
		{        		
			htmlString = htmlString + '<th class="table-header">'+jsonData.data[0].data[row][jsonData.categoryField]+'</th>';
		}
		htmlString = htmlString + '</tr>';
        for(col = 0 ; col< jsonData.dateArray.length ; col++)
        {
        	var style = "cell-style-alternate";
        	if (col % 2 == 0){
        		style = "cell-style";
        	}
        	htmlString = htmlString + '<tr>';
        	htmlString = htmlString + '<td class="' + style + '">'+jsonData.dateArray[col]+'</td>';
        	for(row1 = 0 ; row1 < jsonData.data[0].data.length ; row1++)
        	{        		
        		htmlString = htmlString + '<td class="' + style + '">'+Ext.util.Format.number(jsonData.data[col].data[row1][jsonData.dataField], '00,000')+'</td>';
        	}
        	htmlString = htmlString + '</tr>';
        }		
		htmlString = htmlString + '</table>';
		return htmlString;
	},
	
	getGroupDataInTable : function(jsonData){
		var htmlString = '<table border="1" class="table-style">';
		htmlString = htmlString + '<tr>';
		htmlString = htmlString + '<th class="table-header">Date/Time</th>';
		for(row = 0 ; row < jsonData.data[0].data.length ; row++)
		{        		
			htmlString = htmlString + '<th class="table-header">'+jsonData.data[0].data[row][jsonData.categoryField]+'</th>';
		}
		htmlString = htmlString + '</tr>';
        for(col = 0 ; col< jsonData.dateArray.length ; col++)
        {
        	var style = "cell-style-alternate";
        	if (col % 2 == 0){
        		style = "cell-style";
        	}
        	htmlString = htmlString + '<tr>';
        	htmlString = htmlString + '<td class="' + style + '">'+jsonData.dateArray[col]+'</td>';
        	for(row = 0 ; row < jsonData.data[0].data.length ; row++)
        	{        		
        		htmlString = htmlString + '<td class="' + style + '">' + this.getTableForGroupBy(jsonData,jsonData.data[col].data)+'</td>';
        	}
        	htmlString = htmlString + '</tr>';
        }		
		htmlString = htmlString + '</table>';
		return htmlString;
	},	
	
	getTableForGroupBy : function(jsonData,data){
		var groupByHtmlString = '<table>';
		var useOtherField = true;
		if (this.isTimeAxisOption(ReplayAnalytics.app.dataFieldValues[ReplayAnalytics.app.currentActivePanelIndex])
				|| this.isTimeAxisOption(ReplayAnalytics.app.categoryFieldValues[ReplayAnalytics.app.currentActivePanelIndex])){
			useOtherField = false;
		}
		var other = 'others';
		for(innerow = 1 ; innerow <data.length ; innerow++)
		{  
		   if(innerow ==1)
			   {
			     groupByHtmlString = groupByHtmlString +'<tr>';
			     groupByHtmlString = groupByHtmlString + '<td>' +jsonData.groupByBarArray[0]+'</td>';
			     groupByHtmlString = groupByHtmlString + '<td>' +Ext.util.Format.number(jsonData.data[0].data[0].groupByBar1, '00,000')+'</td>';
			     groupByHtmlString = groupByHtmlString + '</tr>';
			   }
		   else if( innerow == 2)
			   {
			     groupByHtmlString = groupByHtmlString +'<tr>';
			     groupByHtmlString = groupByHtmlString + '<td>' +jsonData.groupByBarArray[1]+'</td>';
			     groupByHtmlString = groupByHtmlString + '<td>' +Ext.util.Format.number(jsonData.data[0].data[0].groupByBar2, '00,000')+'</td>';
			     groupByHtmlString = groupByHtmlString + '</tr>';
			   }else if( innerow == 3)
				   {
				     groupByHtmlString = groupByHtmlString +'<tr>';
				     groupByHtmlString = groupByHtmlString + '<td>' +jsonData.groupByBarArray[2]+'</td>';
				     groupByHtmlString = groupByHtmlString + '<td>' +Ext.util.Format.number(jsonData.data[0].data[0].groupByBar3, '00,000')+'</td>';
				     groupByHtmlString = groupByHtmlString + '</tr>';
				   }else if(innerow ==4){
					     groupByHtmlString = groupByHtmlString +'<tr>';
					     groupByHtmlString = groupByHtmlString + '<td>' +jsonData.groupByBarArray[3]+'</td>';
					     groupByHtmlString = groupByHtmlString + '<td>' +Ext.util.Format.number(jsonData.data[0].data[0].groupByBar4, '00,000')+'</td>';
					     groupByHtmlString = groupByHtmlString + '</tr>';
				   }else if (row == 5 && useOtherField)
					   {
					     groupByHtmlString = groupByHtmlString +'<tr>';
					     groupByHtmlString = groupByHtmlString + '<td>'+other+ '</td>';
					     groupByHtmlString = groupByHtmlString + '<td>' +Ext.util.Format.number(jsonData.data[0].data[0][other], '00,000')+'</td>';
					     groupByHtmlString = groupByHtmlString + '</tr>';
					   }
		}
		groupByHtmlString = groupByHtmlString + '</table>';
		return groupByHtmlString;
	},
	
	checkForGlobalSyncIMs: function(sliderPosition, panelIndex, i, playbackPaused, isIMGraphRunning){
		if (ReplayAnalytics.app.replayCommentsSetting == 'On' && ReplayAnalytics.app.globalManualIMs != undefined 
				&& sliderPosition <= ReplayAnalytics.app.globalManualIMs.length){
			if (panelIndex < 5){
				if (ReplayAnalytics.app.globalManualIMs[sliderPosition][panelIndex] != undefined && 
						ReplayAnalytics.app.globalManualIMs[sliderPosition][panelIndex].length > 0 && 
						i < ReplayAnalytics.app.globalManualIMs[sliderPosition][panelIndex].length){
					this.getApplication().getController('Playback').pauseFunction();
					this.showManualIMGlobalSync(sliderPosition, panelIndex, i, ReplayAnalytics.app.globalManualIMs[sliderPosition][panelIndex][i], true, false);
				} else {
					this.checkForGlobalSyncIMs(sliderPosition, panelIndex + 1, 0, playbackPaused, isIMGraphRunning);
				}
			} else if (ReplayAnalytics.app.interestingMoments == 'On') {
				this.checkForGlobalSyncAutoIMs(sliderPosition, playbackPaused, isIMGraphRunning);
			}
		} else if (ReplayAnalytics.app.interestingMoments == 'On') {
			this.checkForGlobalSyncAutoIMs(sliderPosition, playbackPaused, isIMGraphRunning);
		}
	},
	
	checkForGlobalSyncAutoIMs: function(sliderPosition, playbackPaused, isIMGraphRunning){
		this.getManualIMCallout().hide();
		if (ReplayAnalytics.app.interestingMomentsPoints[0] != undefined && sliderPosition <= ReplayAnalytics.app.interestingMomentsPoints[0].length
				&& ReplayAnalytics.app.interestingMomentsPoints[0][sliderPosition] != undefined){
			for (j = 1; j < 5; j++){
				if (ReplayAnalytics.app.interestingMomentsPoints[0][sliderPosition][j] != undefined && 
						ReplayAnalytics.app.interestingMomentsPoints[0][sliderPosition][j].length > 0){
					isIMGraphRunning = true;
					this.getApplication().getController('Playback').pauseFunction();
					this.showGlobalSyncIMFoundCallout(sliderPosition, j, ReplayAnalytics.app.interestingMomentsPoints[0][sliderPosition][j][0]);
					return;
				}
			}			
		}
		if (playbackPaused && !isIMGraphRunning){
			ReplayAnalytics.app.getController('Playback').resumeLastPlaybackAction();		
		}		
	},
	
	getAllGlobalSyncAutoIMsForCurrentSliderPosition: function(sliderPosition){
		ReplayAnalytics.app.allIMPointsAtCurrentIndex = new Array();
		for (i = 1; i < 5; i++){
			for (j = 0; j < ReplayAnalytics.app.interestingMomentsPoints[0][sliderPosition][i].length; j++){
				var imPoint = ReplayAnalytics.app.interestingMomentsPoints[0][sliderPosition][i][j];
				imPoint.ChartIndex = i;
				ReplayAnalytics.app.allIMPointsAtCurrentIndex.push(imPoint);
			}
		}
	},
	
	showManualIMGlobalSync: function(sliderPosition, panelIndex, i, manualIM){
		try{
			var panelObj = Ext.ComponentQuery.query('panel' + panelIndex)[0];
			var width = panelObj.element.getWidth(), height = panelObj.element.getHeight();
			var x = panelObj.element.getX(), y = panelObj.element.getY();
			var callOutX = x + width*.1, callOutY = y;
			var calloutText = '<div style="color:black; font-size: 12px; padding: 30px;">' + manualIM.imMessage + '</div>';
			var style = 'background-image: url(lib/images/callout-image-inverted.png); background-color: transparent; padding-left:12px; background-size: 100%;';
			if (i % 2 == 1){
				callOutY = (y + height) - 135;
				calloutText = '<div style="color:black; font-size: 12px; padding: 30px; padding-top: 50px;">' + manualIM.imMessage + '</div>';
				style = 'background-image: url(lib/images/callout-image-inverted-flipped.png); background-color: transparent; padding-left:12px; background-size: 100%';
			}
			this.getManualIMCallout().setStyle(style);
			this.getManualIMCallout().show();
			this.getManualIMCallout().element.setXY(callOutX, callOutY);		
			this.getManualIMCallout().setHtml(calloutText);
			var task = Ext.create('Ext.util.DelayedTask', function() {
				task.cancel();
				i++;				
				this.checkForGlobalSyncIMs(sliderPosition, panelIndex, i);
			}, this);
			task.delay(2000);
		} catch(e){
		}			
	},
	
	showGlobalSyncIMFoundCallout: function(sliderPosition, chartIndex, imPoint){
		var panelObj = Ext.ComponentQuery.query('panel' + chartIndex)[0];
		var width = panelObj.element.getWidth(), height = panelObj.element.getHeight();
		var x = panelObj.element.getX(), y = panelObj.element.getY();
		var callOutX = x + width*.6, callOutY = y + height*.2;
		this.getImFoundDialog().show();
		this.getImFoundDialog().element.setXY(callOutX, y);
		var calloutText = '<div style="color:black; font-size: 12px; padding: 30px;">Found an interesting moment. ' + imPoint.Message + '</div>'
		this.getImFoundDialog().setHtml(calloutText);
		var task = Ext.create('Ext.util.DelayedTask', function() {
			task.cancel();
		    this.getImFoundDialog().hide();
		    this.getAllGlobalSyncAutoIMsForCurrentSliderPosition(sliderPosition);
			this.initInterestingMomentGraph(imPoint);
		}, this);
		task.delay(ReplayAnalytics.app.replaySpeed);
	},
	
	loadChartSettingForReplayGraphInGlobalSyncMode: function(){
		var chartIndex = ReplayAnalytics.app.allIMPointsAtCurrentIndex[ReplayAnalytics.app.activeIMPointIndex].ChartIndex;
		ReplayAnalytics.app.databaseSetting[0] = ReplayAnalytics.app.databaseSetting[chartIndex];
		ReplayAnalytics.app.xs[0] = ReplayAnalytics.app.xs[chartIndex];
		ReplayAnalytics.app.ys[0] = ReplayAnalytics.app.ys[chartIndex];
		ReplayAnalytics.app.sizeBys[0] = ReplayAnalytics.app.sizeBys[chartIndex];
		ReplayAnalytics.app.granularities[0] = ReplayAnalytics.app.granularities[chartIndex];
		ReplayAnalytics.app.chartTypes[0] = ReplayAnalytics.app.chartTypes[chartIndex];
		ReplayAnalytics.app.groupBys[0] = ReplayAnalytics.app.groupBys[chartIndex];
		ReplayAnalytics.app.startDate[0] = ReplayAnalytics.app.startDate[chartIndex];
		ReplayAnalytics.app.currentStartDate[0] = ReplayAnalytics.app.currentStartDate[chartIndex];
		ReplayAnalytics.app.currentDate[0] = ReplayAnalytics.app.currentDate[chartIndex];
		ReplayAnalytics.app.currentEndDate[0] = ReplayAnalytics.app.currentEndDate[chartIndex];
		ReplayAnalytics.app.accumulate[0] = ReplayAnalytics.app.accumulate[chartIndex];
	},
});
var databaseTableController;
Ext.define('ReplayAnalytics.controller.DatabaseTable', {
	extend : 'Ext.app.Controller',
	
	xtype: 'databasetablecontroller',
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
			'databaseSetting': 'selectfield[id=databaseselectfield]',
			'chartTypeSetting': 'selectfield[label=Chart Type:]',
		},
		control: {
			'databaseSetting': {
				change: 'getDatabaseTableFieldsForDatabase',
			},
			
		},
	},
	
	launch: function() {
		databaseTableController = this;	
		this.getDatabaseSetting().element.on('tap', function(el) {
			databaseTableController.applyStyleForAddDatSourceOption();
		});
	},
	
	applyStyleForAddDatSourceOption: function(){
		try{
			var items = Ext.query('div div span[class=x-list-label]');
			if (items != undefined && items.length > 0 && items[0].innerHTML == '+ Import Data'){
				items[0].parentElement.parentElement.setAttribute('style','background-color: #6c9804; background-image: -webkit-linear-gradient(top, #a2e306, #7eb105 3%, #5b7f03); border: 1px solid #263501; border-top-color: #374e02; margin: 5px 53px; border-radius: 5px; width: 200px; text-align: center;');
				items[0].innerHTML = '<img src="lib/images/spreadsheet_icon.png" style="width: 20px; height: 20px;" /> Import Data';
			}			
		} catch(err){
		}		
	},
	
	getAllDatabaseTables: function(){
		if (ReplayAnalytics.app.CachedDatabaseTables.length == 0){
			showLoadingMask();
			Ext.Ajax.request({  
				url: 'getAllDatabaseTables.do',  
	            method: 'GET',
	            success: function(response){
	            	hideLoadingMask();
	        		var responseJSON = Ext.JSON.decode(response.responseText.trim());
	        		ReplayAnalytics.app.CachedDatabaseTables = responseJSON;
	        		databaseTableController.decodeDatabaseTableData(responseJSON);
	            },
	            failure: function(response) {
               		hideLoadingMask();
               		logMessage('Failure Logging in.');
               },
			});
		} else {
			databaseTableController.decodeDatabaseTableData(ReplayAnalytics.app.CachedDatabaseTables);
		}		
	},
	
	decodeDatabaseTableData: function(responseJSON){
		ReplayAnalytics.app.DatabaseTableFieldStore = new Array();
		var temp = {text: '+ Import Data', value: 'add_new_data_source'};
		ReplayAnalytics.app.DatabaseTableFieldStore.push(temp);
		temp = {text: 'None Defined', value: 'none'};
		ReplayAnalytics.app.DatabaseTableFieldStore.push(temp);
		for (var index = 0; index < responseJSON.length; index++){
			temp = {text: responseJSON[index].name, value: responseJSON[index].tableName};
			ReplayAnalytics.app.DatabaseTableFieldStore.push(temp);
		}
		this.getApplication().getController('Settings').configureSettingsPanel();
	},
	
	getDatabaseTableIdForTableName: function(tableName){
		var databaseTableId = 0;
		if (ReplayAnalytics.app.CachedDatabaseTables != undefined && ReplayAnalytics.app.CachedDatabaseTables.length > 0){
			for (var index = 0; index < ReplayAnalytics.app.CachedDatabaseTables.length; index++){
				if (ReplayAnalytics.app.CachedDatabaseTables[index].tableName == tableName){
					databaseTableId = ReplayAnalytics.app.CachedDatabaseTables[index].id;
					return databaseTableId;
				}
			}
		}
		return databaseTableId;
	},
	
	saveDatabaseTablesFieldsForDatabaseTableId: function(databaseTableId, databaseTableFieldsJSON){
		if (ReplayAnalytics.app.CachedDatabaseTables != undefined && ReplayAnalytics.app.CachedDatabaseTables.length > 0){
			for (var index = 0; index < ReplayAnalytics.app.CachedDatabaseTables.length; index++){
				if (ReplayAnalytics.app.CachedDatabaseTables[index].id == databaseTableId){
					break;
				}
			}
			ReplayAnalytics.app.CachedDatabaseTables[index].tableFields = databaseTableFieldsJSON;
		}
	},
	
	getDatabaseTablesFieldsForDatabaseTableId: function(databaseTableId){
		if (ReplayAnalytics.app.CachedDatabaseTables != undefined && ReplayAnalytics.app.CachedDatabaseTables.length > 0){
			for (var index = 0; index < ReplayAnalytics.app.CachedDatabaseTables.length; index++){
				if (ReplayAnalytics.app.CachedDatabaseTables[index].id == databaseTableId){
					return ReplayAnalytics.app.CachedDatabaseTables[index].tableFields;
				}
			}
		}
		return undefined;
	},
	
	getDatabaseTableFieldsForDatabase: function(){
		//this.getChartTypeSetting().setValue('none');
		var selectedDatabaseTable = this.getDatabaseSetting().getValue();
		if (selectedDatabaseTable == 'add_new_data_source'){
			//this.getApplication().getController('Admin').showAdminPanel();
			this.getApplication().getController('Admin').showDataSourceUploadFlow();
			this.getApplication().getController('Settings').getSettingsPanel().hide();
			return;
		}
		else if (selectedDatabaseTable != 'none'){
			var databaseTableId = this.getDatabaseTableIdForTableName(selectedDatabaseTable);
			var databaseTableFieldsJSON = this.getDatabaseTablesFieldsForDatabaseTableId(databaseTableId);
			if (databaseTableFieldsJSON != undefined && databaseTableFieldsJSON != ""){
				this.decodeDatabaseTableFieldsData(databaseTableFieldsJSON);
			} else {
				showLoadingMask();
				Ext.Ajax.request({  
					url: 'getAllDatabaseTableFieldsForTable.do',  
		            method: 'POST',
		            params: {
		            	databaseTableId: databaseTableId,
		            },
		            success: function(response){
		            	hideLoadingMask();
		        		var responseJSON = Ext.JSON.decode(response.responseText.trim());
		        		databaseTableController.saveDatabaseTablesFieldsForDatabaseTableId(databaseTableId, responseJSON);
		        		databaseTableController.decodeDatabaseTableFieldsData(responseJSON);
		            },
		            failure: function(response) {
	               		hideLoadingMask();
	               		logMessage('Failure Logging in.');
	               },
				});
			}		
		}
	},
	
	decodeDatabaseTableFieldsData: function(databaseTableFieldsJSON){
		var dataFieldStore = new Array();
		var categoryFieldStore = new Array();
		var categoryFieldStoreWithTime = new Array();
		var timeFieldStore = new Array();
		var temp = {text: 'None Defined', value: 'none'};
		dataFieldStore.push(temp);
		categoryFieldStore.push(temp);
		for (var index = 0; index < databaseTableFieldsJSON.length; index++){
			temp = {text: databaseTableFieldsJSON[index].fieldLabel, value: databaseTableFieldsJSON[index].fieldName};
			if (databaseTableFieldsJSON[index].fieldType == 'DATA_FIELD'){
				dataFieldStore.push(temp);
			} else if (databaseTableFieldsJSON[index].fieldType == 'CATEGORY_FIELD'){
				categoryFieldStore.push(temp);
			} else if (databaseTableFieldsJSON[index].fieldType == 'TIME_CATEGORY_FIELD'){
				timeFieldStore.push(temp);
			}
		}
		for (var index = 0; index < categoryFieldStore.length; index++){
			categoryFieldStoreWithTime.push(categoryFieldStore[index]);
		}
		for (var index = 0; index < timeFieldStore.length; index++){
			categoryFieldStoreWithTime.push(timeFieldStore[index]);
		}
		
		var selectedPanel = ReplayAnalytics.app.currentActivePanelIndex;
		ReplayAnalytics.app.PanelDataFieldStore[selectedPanel] = dataFieldStore;
		ReplayAnalytics.app.PanelCategoryFieldStore[selectedPanel] = categoryFieldStore;
		ReplayAnalytics.app.PanelCategoryFieldStoreWithTime[selectedPanel] = categoryFieldStoreWithTime;
		this.getApplication().getController('Settings').showConfiguredSettingsPanel();
	},
	
	cacheDatabaseTableDataForDashboard: function(databasesToCache){
		var distinctDatabases = new Array();
		for (var index = 0; index < databasesToCache.length; index++){
			if (index == 0){
				distinctDatabases.push(databasesToCache[index]);
			} else {
				var duplicate = false;
				for (var innerIndex = 0; innerIndex < distinctDatabases.length; innerIndex++){
					if (distinctDatabases[innerIndex] == databasesToCache[index]){
						duplicate = true;
						break;
					}
				}
				if (!duplicate){
					distinctDatabases.push(databasesToCache[index]);
				}
			}
		}
		if (distinctDatabases.length > 0){
			showLoadingMask();
			Ext.Ajax.request({  
				url: 'getAllDatabaseTablesDataForCaching.do',  
	            method: 'POST',
	            params: {
	            	databasesToCache: new Array(databasesToCache),
	            },
	            success: function(response){
	            	hideLoadingMask();
	        		var responseJSON = Ext.JSON.decode(response.responseText.trim());
	        		ReplayAnalytics.app.CachedDatabaseTables = responseJSON;
	        		loginController.showMainScreen();
	            },
	            failure: function(response) {
               		hideLoadingMask();
               		logMessage('Failure Caching data');
               },
			});
		} else {
			loginController.showMainScreen();
		}
	},
});
var adminController;
Ext.define('ReplayAnalytics.controller.Admin', {
	extend : 'Ext.app.Controller',
	xtype: 'admincontroller',
	requires: ['Ext.ux.Fileup'],
	config: {
		refs: {
			'loginController': 'logincontroller',
			'mainController': 'maincontroller',
			'loginScreen' : 'loginscreen',
			'adminPanel' : 'adminpanel',
			'dashboardScreen' : 'dashboardscreen',
			'dashboardGrid' : 'panel[id=dashboardgrid]',
			'mainScreen' : 'replayanalyticsmain',
			'adminButton': 'button[id=adminbutton]',
			'goBackButtonAdmin': 'button[id=gobackbuttonadmin]',
			'dataSourceUpload': 'fileupload[id=fileuploadbutton]',
			'dataSourceUploadPanel': 'datasourceuploadpanel',
			'dataSourceTypeSelectionPanel': 'datasourcetypeselectionpanel',
			'dataSourceUploadMessage': 'label[id=fileuploadmessage]',
			'doneDataSourceTypeSelectionButton': 'button[id=donedatasourcetypeselectionbutton]',
			'doneDataSourceUploadButton': 'button[id=donedatasourceuploadbutton]',
			'dataSourceConfigurationPanel': 'datasourceconfigurationpanel',
			'doneDataSourceConfigureButton': 'button[id=donedatasourceconfigurebutton]',
			'dataSourceNameField': 'textfield[id=datasourcenamefield]',
			'dataSourceTableFieldContainer': 'panel[id=tablefieldscontainer]',
			'dataSourceSelectedType': 'selectfield[id=datasourcetypeselectfield]',
			'addDataSourceFieldButton': 'button[id=adddatasourcefieldmanualbutton]',
			'cancelDataSourceUploadButton': 'button[id=canceldatasourceuploadbutton]',
			'cancelDataSourceConfigurationButton': 'button[id=canceldatasourceconfigurationebutton]',
			'selectedFileNameLabel': 'label[id=selectedfilenamelabel]',
			'manageDataSourcesButton': 'button[id=managedatasourcesbutton]',
			'dataSourceManagePanel': 'datasourcemanagepanel',
			'addDataSourceManagePanelButton': 'button[id=adddatasourcemanagepanelbutton]',
			'deleteDataSourceManagePanelButton': 'button[id=deletedatasourcemanagepanelbutton]',
			'editDataSourceManagePanelButton': 'button[id=editdatasourcemanagepanelbutton]',
			'closeDataSourceManagePanelButton': 'button[id=closedatasourcemanagepanelbutton]',
			'dataSourceDeletePanel': 'datasourcedeletepanel',
			'cancelDataSourceDeletePanelButton': 'button[id=canceldatasourcedeletepanelbutton]',
			'confirmDataSourceDeletePanelButton': 'button[id=confirmdatasourcedeletepanelbutton]',
			'dataSourceDeletePanelContainer': 'container[id=datasourcedeletepanelcontainer]',
		},
		control: {
			'adminButton': {
				tap: 'showAdminPanel'
			},
			'goBackButtonAdmin' : {
				tap: 'goBackToDashboardScreen'
			},
			'doneDataSourceTypeSelectionButton' : {
				tap: 'doneDataSourceTypeSelection'
			},
			'doneDataSourceUploadButton' : {
				tap: 'doneDataSourceUpload',
			},
			'doneDataSourceConfigureButton' : {
				tap: 'doneDataSourceConfigure'
			},
			'addDataSourceFieldButton' : {
				tap: 'addDataSourceField'
			},
			'cancelDataSourceConfigurationButton': {
				tap: 'cancelDataSourceConfiguration'
			},
			'cancelDataSourceUploadButton': {
				tap: 'cancelDataSourceUpload'
			},
			'manageDataSourcesButton': {
				tap: 'showManageDataSourcePanel'
			},
			'addDataSourceManagePanelButton': {
				tap: 'addDataSourceManagePanel'
			},
			'deleteDataSourceManagePanelButton': {
				tap: 'deleteDataSourceManagePanel'
			},
			'editDataSourceManagePanelButton': {
				tap: 'editDataSourceManagePanel'
			},
			'closeDataSourceManagePanelButton': {
				tap: 'closeDataSourceManagePanel'
			},
			'cancelDataSourceDeletePanelButton': {
				tap: 'cancelDataSourceDeletePanel'
			},
			'confirmDataSourceDeletePanelButton': {
				tap: 'confirmDataSourceDeletion'
			},
		},
	},
	
	launch: function() {
		adminController = this;	
		this.getDataSourceUpload().on({
		    success: function(response){
		    	if (response.error == undefined){
		    		ReplayAnalytics.app.currentUploadingDataSource = response.dataSource;
		    		adminController.getDataSourceUploadMessage().setHtml(response.description);
		    		adminController.getDoneDataSourceUploadButton().show();
		    	} else {
		    		Ext.Msg.alert('Error', response.description, Ext.emptyFn);
		    	}				
		    },
		    failure: function(){
		    	Ext.Msg.alert('Error', 'Data source upload was failed.', Ext.emptyFn);
		    },
		});
	},
	
	showDataSourceUploadFlow: function(){
		this.getDataSourceUploadPanel().show();
		this.getDoneDataSourceUploadButton().hide();
	},
	
	setSelectedFileName: function(fileName) {
		this.getSelectedFileNameLabel().setHtml('<b>Selected File:</b>  ' + fileName);
	},
	
	cancelDataSourceUpload: function(){
		this.getDataSourceUploadPanel().hide();
	},
	
	doneDataSourceUpload: function(){
		this.getDataSourceUploadPanel().hide();
		this.getDataSourceUploadMessage().setHtml('');
		this.getSelectedFileNameLabel().setHtml('');
		this.getDataSourceConfigurationPanel().show();
		var tableFields = undefined;
		if (ReplayAnalytics.app.currentUploadingDataSource != undefined){
			tableFields = ReplayAnalytics.app.currentUploadingDataSource.databaseTableFields;
		}
		if (tableFields != undefined){
			for (var index = 0; index < tableFields.length; index++){
				var field = tableFields[index];
				adminController.addDataSourceFieldRow(index, field.fieldName, field.fieldLabel, field.fieldType, field.fieldSelection, field.fieldCalculation, true);
			}
		}
	},
	
	addHeaderRow: function(){
		var container = this.getDataSourceTableFieldContainer();
		container.add({
        	xtype: 'panel',
        	docked: 'top',
        	style: 'background-color: rgb(230, 230, 230); padding: 10px;',
        	layout: {type: 'hbox', pack: 'start', align: 'justify'},
    		items: [
        	        /*{
        	        	xtype: 'label',
        	        	html: 'Name',
        	        	style: 'padding: 5px; background-color: #f7f7f7; font-size: 16px; font-weight: bold;',
        	        	width: 150,
        	        },*/
        	        {
        	        	xtype: 'label',
        	        	html: 'Field Name', // Label
        	        	style: 'padding: 5px; background-color: rgb(230, 230, 230); font-size: 16px; font-weight: bold;',
        	        	width: 250,
        	        },
        	        {
        	        	xtype: 'label',
        	        	html: 'Type',
        	        	style: 'padding: 5px; background-color: rgb(230, 230, 230); font-size: 16px; font-weight: bold;',
        	        	width: 350,
        	        },
        	        /*{
        	        	xtype: 'label',
        	        	html: 'Selection',
        	        	style: 'padding: 5px; background-color: #f7f7f7; font-size: 16px; font-weight: bold;',
        	        	width: 150,
        	        },
        	        {
        	        	xtype: 'label',
        	        	html: 'Calculation',
        	        	style: 'padding: 5px; background-color: #f7f7f7; font-size: 16px; font-weight: bold;',
        	        	width: 150,
        	        },*/
        	        ]
		});
	},
	
	addDataSourceField: function(){
		var container = this.getDataSourceTableFieldContainer();
		this.addDataSourceFieldRow(container.getItems().items.length - 1, '', '', 'IGNORE', '', '', false);
		var scroller = this.getDataSourceConfigurationPanel().getScrollable().getScroller();
		if (scroller != undefined){
			scroller.refresh();
			scroller.scrollToEnd(false);
		}
	},
	
	addDataSourceFieldRow: function(index, fieldName, fieldLabel, fieldType, fieldSelection, fieldCalculation, readOnly){
		var container = this.getDataSourceTableFieldContainer();
		var row = container.add({
			xtype: 'panel',
			id: 'field' + index,
			style: 'padding: 10px; background-color: rgb(235, 235, 235);',
			layout: {type: 'hbox', pack: 'start', align: 'justify'},
		});
		row.add({
			xtype: 'textfield',
			id: 'fieldname' + index,
			value: fieldName,
			readOnly: readOnly,
			hidden: true,
			style: 'padding: 5px; background-color: #f7f7f7; font-size: 15px; border-radius: 5px;',
			clearIcon: false,
			//width: 150,
		});
		row.add({
			xtype: 'textfield',
			id: 'fieldlabel' + index,
			value: fieldLabel,
			style: 'padding: 5px; background-color: rgb(235, 235, 235); font-size: 15px; border-radius: 5px;',
			clearIcon: false,
			width: 290,
		});
		row.add({
			xtype: 'selectfield',
			id: 'fieldtype' + index,
			value: fieldType,
			style: 'padding: 5px; background-color: rgb(235, 235, 235); font-size: 15px; border-radius: 5px;',
			width: 290,
			options: [
			          { text: 'Time Field', value: 'TIME_FIELD'},
			          { text: 'Data Field', value: 'DATA_FIELD'},
			          { text: 'Category Field', value: 'CATEGORY_FIELD'},
			          { text: 'Ignore', value: 'IGNORE'}
			        ],
		});
		row.add({
			xtype: 'textfield',
			id: 'fieldselection' + index,
			value: fieldSelection,
			hidden: true,
			style: 'padding: 5px; background-color: #f7f7f7; font-size: 15px; border-radius: 5px;',
			clearIcon: false,
			//width: 150,
		});
		row.add({
			xtype: 'textfield',
			id: 'fieldcalculation' + index,
			value: fieldCalculation,			
			hidden: true,
			style: 'padding: 5px; background-color: #f7f7f7; font-size: 15px; border-radius: 5px;',
			clearIcon: false,
			//width: 150,
		});
	},
	
	cancelDataSourceConfiguration: function(){	
		Ext.Msg.confirm("Confirm", "Are you sure you want to cancel data source configuration?", function(btn){
			  if (btn == 'yes'){
				  showLoadingMask();
				  Ext.Ajax.request({			  
			            url: 'cancelDataSourceConfiguration.do',
			            method: 'POST',
			            params: {			            	
			            	dataSourceId: ReplayAnalytics.app.currentUploadingDataSource.id,          	
			            },
			            success: function(response) {
			            	hideLoadingMask();
			            	adminController.getDataSourceConfigurationPanel().hide();
							adminController.getApplication().getController('Settings').getSettingsPanel().show();
							adminController.getApplication().getController('DatabaseTable').getDatabaseSetting().setValue('none');
							ReplayAnalytics.app.CachedDatabaseTables = new Array();
							adminController.getApplication().getController('DatabaseTable').getAllDatabaseTables();
			            },
			            failure: function(response) {
			           		hideLoadingMask();
			           		logMessage('Failure cancelling dataSource configuration.');
			           },
					});				  
			  }
		});
	},
	
	doneDataSourceConfigure: function(){
		var dataSourceName = this.getDataSourceNameField().getValue();
		if (dataSourceName != undefined && dataSourceName != '' && dataSourceName != ' '){
			var tableFields = undefined;
			if (ReplayAnalytics.app.currentUploadingDataSource != undefined){
				tableFields = ReplayAnalytics.app.currentUploadingDataSource.databaseTableFields;
			}
			if (tableFields != undefined){
				var container = this.getDataSourceTableFieldContainer();
				for (var index = 0; index < tableFields.length; index++){
					tableFields[index].fieldName = Ext.ComponentQuery.query('textfield[id=fieldname' + index + ']')[0].getValue();
					tableFields[index].fieldLabel = Ext.ComponentQuery.query('textfield[id=fieldlabel' + index + ']')[0].getValue();
					tableFields[index].fieldType = Ext.ComponentQuery.query('selectfield[id=fieldtype' + index + ']')[0].getValue();
					tableFields[index].fieldSelection = Ext.ComponentQuery.query('textfield[id=fieldselection' + index + ']')[0].getValue();
					tableFields[index].fieldCalculation = Ext.ComponentQuery.query('textfield[id=fieldcalculation' + index + ']')[0].getValue();				
				}
				if (container.getItems().items.length > (index /*+ 1*/)){
					for (; index < (container.getItems().items.length /*- 1*/); index++){
						var temp = new Object();
						temp.id = undefined;
						temp.fieldName = Ext.ComponentQuery.query('textfield[id=fieldname' + index + ']')[0].getValue();
						temp.fieldLabel = Ext.ComponentQuery.query('textfield[id=fieldlabel' + index + ']')[0].getValue();
						temp.fieldType = Ext.ComponentQuery.query('selectfield[id=fieldtype' + index + ']')[0].getValue();
						temp.fieldSelection = Ext.ComponentQuery.query('textfield[id=fieldselection' + index + ']')[0].getValue();
						temp.fieldCalculation = Ext.ComponentQuery.query('textfield[id=fieldcalculation' + index + ']')[0].getValue();
						tableFields.push(temp);
					}
				}
				var tableFieldsJSON = JSON.stringify(tableFields);
				//logInfo(tableFieldsJSON);
				this.saveDataSourceConfiguration(dataSourceName, tableFieldsJSON);
			}
		} else {
			Ext.Msg.alert('Error', 'Please provide a data source name.', Ext.emptyFn);
			return;
		}		
	},
	
	saveDataSourceConfiguration: function(dataSourceName, tableFieldsJSON){
		showLoadingMask();
		Ext.Ajax.request({			  
            url: 'saveDataSourceConfiguration.do',
            method: 'POST',
            params: {
            	userId: ReplayAnalytics.app.currentUserSession.userId,
            	dataSourceId: ReplayAnalytics.app.currentUploadingDataSource.id,
            	dataSourceName: dataSourceName, 
            	tableFields: tableFieldsJSON,            	
            },
            success: this.handleDataSourceConfigurationSave,
            failure: function(response) {
           		hideLoadingMask();
           		logMessage('Failure Saving dataSource configuration.');
           },
		});	
	},
	
	handleDataSourceConfigurationSave: function(response){
		var responseJSON = Ext.JSON.decode(response.responseText);
		if (responseJSON.error != undefined){
			Ext.Msg.alert('Error', responseJSON.description, Ext.emptyFn);		
		} else {
			Ext.Msg.alert('Success', responseJSON.description, function(){
				adminController.getDataSourceConfigurationPanel().hide();
				adminController.getApplication().getController('DatabaseTable').getDatabaseSetting().setValue('none');
				ReplayAnalytics.app.CachedDatabaseTables = new Array();
				//adminController.getApplication().getController('DatabaseTable').getAllDatabaseTables();
				var container = adminController.getDataSourceTableFieldContainer();
				container.removeAll();
				adminController.getDataSourceNameField().setValue('');				
			});			
		}
		hideLoadingMask();
	},
	
	showManageDataSourcePanel: function(){
		adminController.getApplication().getController('Settings').getGlobalSettingsPanel().hide();
		adminController.getDataSourceManagePanel().show();
	},
	
	addDataSourceManagePanel: function() {
		adminController.getDataSourceManagePanel().hide();
		adminController.showDataSourceUploadFlow();
	},
	
	deleteDataSourceManagePanel: function() {
		adminController.getDataSourceManagePanel().hide();
		showLoadingMask();
		Ext.Ajax.request({			  
            url: 'getAllConfiguredDataSources.do',
            method: 'GET',
            success: function(response) {
            	hideLoadingMask();
            	var responseJSON = Ext.JSON.decode(response.responseText);
            	if (responseJSON != undefined){
            		if (responseJSON.length == 0){
            			Ext.Msg.alert('Error', 'There are no Data Source(s) configured.', function(){
            				adminController.getDataSourceManagePanel().show();
            			});
            		} else {
            			var container = adminController.getDataSourceDeletePanelContainer();
            			var listObject = Ext.create('Ext.List', {
            				xtype: 'list',
            	        	id: 'datasourcedeletepanellist',
            	        	ui: 'round',
            	        	flex: 1,
                            disableSelection: true,
                            //itemTpl: '<input type="checkbox" enabled="enabled" value="open" name="data_source_selected_status" <tpl if="isChecked">checked="checked"</tpl> /> {dataSourceName}',	    			
                            itemTpl: '<div class="x-field-checkbox x-field x-label-align-left x-form-label-nowrap x-field-labeled x-layout-box-item x-stretched" style="background-color: rgb(247, 247, 247);"> <div class="x-form-label" style="width: 80% !important;"> <span>{dataSourceName}</span> </div> <div class="x-component-outer" > <div class="x-unsized x-field-input sencha-clear-icon"> <input class="x-input-el x-input-checkbox" type="checkbox"> <div class="x-field-mask"> </div> </div> </div> </div>',
                            
                            store: {
                				fields: ['id', 'dataSourceName', 'isChecked'],
                				data: responseJSON
                			}
            			});
            			listObject.on('itemtap', function(list, index, item, record, e, opts){
            		        var active,chkBox = item.bodyElement.down('input').dom;
            		        if ( e.target.tagName.toUpperCase() != 'INPUT' ){
            		            chkBox.checked = !chkBox.checked;
            		            active = chkBox.checked;
            		        } else{
            		             active = !chkBox.checked; // tap is called before the actual change
            		        }
            		        //update data
            		        //list.getData()[index]['isChecked'] =  active;
            		        record.data.isChecked = active;
            		    });
            			container.add(listObject);
            			adminController.getDataSourceDeletePanel().show();
            		}
            	}            	
            },
            failure: function(response) {
           		hideLoadingMask();
           		logMessage('Failure getting all configured DataSources.');
           },
		});
		
	},
	
	editDataSourceManagePanel: function() {
		//adminController.getDataSourceManagePanel().hide();
	},
	
	closeDataSourceManagePanel: function() {
		adminController.getDataSourceManagePanel().hide();
	},
	
	cancelDataSourceDeletePanel: function() {
		adminController.getDataSourceDeletePanel().hide();
		adminController.getDataSourceManagePanel().show();
		var container = adminController.getDataSourceDeletePanelContainer();
		container.removeAll();
	},
	
	confirmDataSourceDeletion: function() {
		var list = list = Ext.ComponentQuery.query('list[id=datasourcedeletepanellist]')[0];
		var dataSourceIds = new Array();
		if (list != undefined){
			var data = list.getStore().getData().all;
			for (var index = 0; index < data.length; index++){
				if (data[index].data.isChecked){
					dataSourceIds.push(data[index].data.id);
				}
			}
		}
		Ext.Msg.confirm("Confirm", "Are you sure you want to delete selected Data Source(s)?", function(btn){
			  if (btn == 'yes'){
				  showLoadingMask();
				  Ext.Ajax.request({			  
			            url: 'deleteDataSources.do',
			            method: 'POST',
			            params: {			            	
			            	dataSourceIds: new Array(dataSourceIds),          	
			            },
			            success: function(response) {
			            	hideLoadingMask();
			            	var responseJSON = Ext.JSON.decode(response.responseText);
			            	Ext.Msg.alert('ReplayAnalytics', responseJSON.description, function(){
			            		adminController.getDataSourceDeletePanel().hide();
			            		adminController.getDataSourceManagePanel().show();
			            		var container = adminController.getDataSourceDeletePanelContainer();
			            		container.removeAll();
			            		adminController.getApplication().getController('DatabaseTable').getDatabaseSetting().setValue('none');
								ReplayAnalytics.app.CachedDatabaseTables = new Array();
								//adminController.getApplication().getController('DatabaseTable').getAllDatabaseTables();
	            			});
			            },
			            failure: function(response) {
			           		hideLoadingMask();
			           		logMessage('Failure deleting DataSources.');
			           },
					});			  
			  }
		});
	},
});
Ext.define("ReplayAnalytics.store.TempStore", {
	extend : 'Ext.data.Store',
	requires: ['ReplayAnalytics.model.DataModel'],
	config: {
		model: 'ReplayAnalytics.model.DataModel',
		proxy: {
			type: 'localstorage',
			id: 'tempstore'
		}
	}
})
Ext.define("ReplayAnalytics.store.UserSettings4", {
	extend : 'Ext.data.Store',
	requires: ['ReplayAnalytics.model.UserSettings'],
	config: {
		model: 'ReplayAnalytics.model.UserSettings',
		proxy: {
			type: 'localstorage',
			id: 'usersettings4'
		}
	}
})
Ext.define("ReplayAnalytics.store.UserSettings3", {
	extend : 'Ext.data.Store',
	requires: ['ReplayAnalytics.model.UserSettings'],
	config: {
		model: 'ReplayAnalytics.model.UserSettings',
		proxy: {
			type: 'localstorage',
			id: 'usersettings3'
		}
	}
})
Ext.define("ReplayAnalytics.store.UserSettings2", {
	extend : 'Ext.data.Store',
	requires: ['ReplayAnalytics.model.UserSettings'],
	config: {
		model: 'ReplayAnalytics.model.UserSettings',
		proxy: {
			type: 'localstorage',
			id: 'usersettings2'
		}
	}
})
Ext.define('ReplayAnalytics.view.BottomPlaybackToolbar', {
	extend: 'Ext.Toolbar',
	xtype: 'bottomplaybacktoolbar',
	requires: [
	           'Ext.Toolbar',
	           'ReplayAnalytics.view.Slider0',
	           'ReplayAnalytics.view.Slider1',
	           'ReplayAnalytics.view.Slider2',
	           'ReplayAnalytics.view.Slider3',
	           'ReplayAnalytics.view.Slider4',
	],
	config: {
		docked: 'bottom',
		height: '55px',
		layout: {type: 'hbox', pack:'center', align: 'middle'},
		items: [
		        {
		        	xtype: 'spacer',
		        	width: '10px'
		        },
		        {
		        	xtype: 'button',
		        	id: 'ResetBackwardButton',
		        	//text: '|<',
		        	iconCls: 'resetbackward',
		        },
		        {
		        	xtype: 'button',
		        	id: 'StepBackwardButton',
		        	//text: '||<',
		        	delay: 0,
		        	iconCls: 'stepbackward',
		        },
		        {
		        	xtype: 'button',
		        	id: 'PlayBackwardButton',
		        	//text: '<',
		        	delay: 0,
		        	iconCls: 'playbackward',
		        },
		        {
		        	xtype: 'button',
		        	id: 'PauseButton',
		        	//text: '||',
		        	delay: 0,
		        	iconCls: 'pause',
		        },
		        {
		        	xtype: 'button',
		        	id: 'PlayForwardButton',
		        	//text: '>',
		        	delay: 0,
		        	iconCls: 'play',
		        },
		        {
		        	xtype: 'button',
		        	id: 'StepForwardButton',
		        	//text: '>||',
		        	delay: 0,
		        	iconCls: 'stepforward',
		        },
		        {
		        	xtype: 'button',
		        	id: 'ResetForwardButton',
		        	//text: '>|',
		        	iconCls: 'resetforward',
		        },
		        {
		        	xtype: 'spacer', 
		        	width: '10px'
		        },
		        {
		        	xtype: 'slider0'
		        },
		        {
		        	xtype: 'slider1'
		        },
		        {
		        	xtype: 'slider2'
		        },
		        {
		        	xtype: 'slider3'
		        },
		        {
		        	xtype: 'slider4'
		        },
		        {
		        	xtype: 'spacer', 
		        	width: '10px'
		        },
		        {
		        	xtype: 'container', 
		        	id: 'daterangelabel',
		        },
		        /*{
		        	xtype: 'button',
		        	id: 'manualimbutton',
		        	hidden:true,
		        	iconCls: 'callout',
		        },*/
		        {
		        	xtype: 'segmentedbutton',
		        	id: 'globalsynctogglebutton',
		        	allowDepress: true,
		        	items: [
		        	        {
		        	        	text: 'Play All',
		        	        	pressed: false,
		        	        	id: 'globalsyncon',
		        	        	iconCls: 'sync',
		        	        },
		        	]
		        },
		]
	}
})
Ext.define("ReplayAnalytics.store.UserSettings1", {
	extend : 'Ext.data.Store',
	requires: ['ReplayAnalytics.model.UserSettings'],
	config: {
		model: 'ReplayAnalytics.model.UserSettings',
		proxy: {
			type: 'localstorage',
			id: 'usersettings1'
		}
	}
})
Ext.define('ReplayAnalytics.view.TopTwoPanelLayout', {
	extend: 'Ext.Panel',
	xtype: 'toptwopanellayout',
	requires: [
	           'ReplayAnalytics.view.Panel1',
	           'ReplayAnalytics.view.Panel2'
	],
	config: {
		layout: {type: 'hbox', pack: 'center', align: 'stretch'},
		flex: 1,
		style: "background-color: white; color:white",
		items: [
		        {
		        	xtype: 'panel1'
		        },
		        {
		        	xtype: 'panel2'
		        }
		]
	}
})
Ext.define('ReplayAnalytics.view.BottomTwoPanelLayout', {
	extend: 'Ext.Panel',
	xtype: 'bottomtwopanellayout',
	requires: [
	           'ReplayAnalytics.view.Panel3',
	           'ReplayAnalytics.view.Panel4',
	],
	config: {
		layout: 'hbox',
		flex: 1,
		style: "background-color: white; color:white",
		items: [
		        {
		        	xtype: 'panel3'
		        },
		        {
		        	xtype: 'panel4'
		        }
		]
	}
})
Ext.define('ReplayAnalytics.view.FourPanelLayout', {
	extend: 'Ext.Panel',
	xtype: 'fourpanellayout',
	requires: [
	           'ReplayAnalytics.view.TopTwoPanelLayout',
	           'ReplayAnalytics.view.BottomTwoPanelLayout'
	],
	config: {
		layout: {type: 'vbox',},
		autoShow: true,
		id: 'fourpanellayout',
		style:'margin:10px;',
		align: 'stretch',
		flex: 1,
		items: [
		        {
		        	xtype: 'toptwopanellayout'
		        },
		        {
		        	xtype: 'bottomtwopanellayout'
		        }
		]
	}
})
Ext.define('ReplayAnalytics.view.InterestingMomentGraphPanel', {
	extend: 'Ext.Panel',
	xtype: 'interestingmomentgraphpanel',
	requires: [
	           'Ext.Toolbar',					       					       	   
	],
	config: {
		layout: 'vbox',
		modal: true,
		zIndex: 10,
		hideOnMaskTap: true,
		centered: true,
		width: 700,
		height: 600,
		hidden: true,
		items: [
		        {
		        	xtype: 'toolbar',
		        	maxHeight: '50px',
		        	id: 'imgraphtitlebar',
		        	docked: 'top',
		        	flex: '1',
		        	title: 'Interesting Moment',
		        	width: '100%',
		        },
				{
					xtype: 'chart',
					id: 'chart5',
					//style: "background-color: black; color:white;",
				}, 	 
				{
					xtype: 'toolbar',
					docked: 'bottom',
					layout: { type: 'hbox', pack: 'justify' },
					items: [
					        {
					        	xtype: 'button',
					        	id: 'replayinterestingmomentbutton',
					        	text: 'Show Replay Graph',
								iconCls: 'refresh5',
								align: 'left',
					        },
					        {
					        	xtype: 'button',
					        	id: 'showtrendgraphbutton',
					        	text: 'Back',
								iconCls: 'reply',
								align: 'left',
								hidden: true,
					        },
					        {
					        	xtype: 'button',
					        	id: 'previousinterestingmomentbutton',
					        	text: 'Previous',
								iconCls: 'arrow_left',
								align: 'left',
								disabled: true,
					        },
					        {
					        	xtype: 'button',
					        	id: 'nextinterestingmomentbutton',
					        	text: 'Next',
								iconCls: 'arrow_right',
								align: 'left',
					        },					        
					        {
					        	xtype: 'slider5',
					        	align: 'center',
					        },
					        {
					        	xtype: 'button',
					        	id: 'closeinterestingmomentgraphpanelbutton',
					        	html: 'Close',
					        	iconCls: 'delete',
					        	ui: 'action',
					        	align: 'right',
					        }
					]
				}
		]
	}
})
Ext.define('ReplayAnalytics.view.Main', {
	extend: 'Ext.Container',
	xtype: 'replayanalyticsmain',
	requires: [
	           'ReplayAnalytics.view.TitleBar',
	           'ReplayAnalytics.view.FourPanelLayout',
	           'ReplayAnalytics.view.BottomPlaybackToolbar'
	],
	config: {
		fullscreen: true,
		hidden: true,
		style: 'background: white;',
		layout: {type: 'vbox'},
		items: [
		        {
		        	docked: 'top',
		        	xtype: 'replayanalyticstitlebar'
		        },
		        {
		        	xtype: 'fourpanellayout'
		        },
		        {
		        	docked: 'bottom',
		        	xtype: 'bottomplaybacktoolbar'
		        }]
	},
});

