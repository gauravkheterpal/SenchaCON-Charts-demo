/*
Copyright(c) 2013
*/
Ext.define('SenchaCon2013Demo.view.SettingsPanel', {
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
						{text: 'Area', value: 'area'},
						{text: 'Pie', value: 'pie'},
						{text: 'Radar', value: 'radar'},
						{text: 'Gauge', value: 'gauge'},
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
					xtype:'selectfield',
					id: 'granularityfield',
					label: 'Granularity:',
				},						
				{
					xtype: 'datepickerfield',
					id: 'startdatefield',
					label: 'Start Date:',
					name: 'startdate',
					dateFormat: 'm/d/y',
					picker: {
					      yearFrom: 2009,
					      yearTo: 2011,
					     }
				},				
				{
					xtype: 'datepickerfield',
					id: 'enddatefield',
					label: 'End Date:',
					name: 'enddate',
					dateFormat: 'm/d/y',
					picker: {
					      yearFrom: 2009,
					      yearTo: 2011,
					     }
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
Ext.define('SenchaCon2013Demo.view.TitleBar', {
	extend: 'Ext.TitleBar',
	xtype: 'senchademotitlebar',
	requires: [
	           'Ext.TitleBar'
	],
	config: {
		title:'SenchaCON-Charts-Demo',
		docked: 'top',
		layout: 'hbox',
		height: '60px',
		width: '100%',
		items: [	        
				{
					xtype:'button',
					id: 'settingsbutton',
					align: 'right',
					text: 'Settings',
					iconCls: 'settings',
				},	        
		]
	}
});
Ext.define('SenchaCon2013Demo.view.GlobalSettingsPanel', {
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
		        	id: 'playspeedsetting',
		        	labelWidth: '50%',
		        	label: 'Play Speed',
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
Ext.define('SenchaCon2013Demo.model.GlobalSettingsModel', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
		         { name: 'NumberOfPanels', type: 'text'},		         
		         { name: 'PlaySpeed', type: 'text'},	
		] 
	}
});
Ext.define("SenchaCon2013Demo.store.GlobalSettingsStore", {
	extend : 'Ext.data.Store',
	requires: ['SenchaCon2013Demo.model.GlobalSettingsModel'],
	config: {
		model: 'SenchaCon2013Demo.model.GlobalSettingsModel',
		proxy: {
			type: 'localstorage',
			id: 'globalsettings'
		}
	}
})
Ext.define('SenchaCon2013Demo.model.DataModel', {
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
Ext.define('SenchaCon2013Demo.model.UserSettings', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
		    { name: 'Database', type: 'text'},
			{ name: 'GraphTitle', type: 'text'},
			{ name: 'XAxis', type: 'text'},
			{ name: 'YAxis', type: 'text'},
			{ name: 'GroupBy', type: 'text'},
			{ name: 'Granularity', type: 'text'},
			{ name: 'ChartType', type: 'text'},
			{ name: 'StartDate', type: 'Date'},
			{ name: 'EndDate', type: 'Date'},
		] 
	}
});
Ext.define('SenchaCon2013Demo.view.Slider0', {
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
Ext.define('SenchaCon2013Demo.view.Slider1', {
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
Ext.define('SenchaCon2013Demo.view.Slider2', {
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
Ext.define('SenchaCon2013Demo.view.Slider4', {
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
Ext.define('SenchaCon2013Demo.view.Slider3', {
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
Ext.define('SenchaCon2013Demo.view.Slider5', {
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
Ext.define('SenchaCon2013Demo.view.AddChartPanel1', {
	extend: 'Ext.Panel',
	xtype: 'addchartpanel1',
	hidden: false,
	config: {
		layout: {type: 'vbox', pack: 'center'},
    	id: 'addchartpanel1',  
    	cls: 'add-chart-panel-style',
    	items: [
    	        {
    	        	xtype: 'panel',
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
Ext.define('SenchaCon2013Demo.view.AddChartPanel2', {
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
Ext.define('SenchaCon2013Demo.view.AddChartPanel3', {
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
Ext.define('SenchaCon2013Demo.view.AddChartPanel4', {
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
Ext.define('SenchaCon2013Demo.view.Panel1', {
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
    	        	hidden: false,
    	        },
    	]
	}
});
Ext.define('SenchaCon2013Demo.view.Panel2', {
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
    	       
    	]
	}
});
Ext.define('SenchaCon2013Demo.view.Panel3', {
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
    	        
    	]
	}
});
Ext.define('SenchaCon2013Demo.view.Panel4', {
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
Ext.define('CachedResponse', {
	responseText: 'Unknown',
	status: '200'
});
var mainController;
Ext.Ajax.on("beforerequest", function(conn, options){
		var url = options.url;
	    var myCookie = loadData(url);
	    if (myCookie != null){
	    	logMessage("Found local cached data. value= " + myCookie);
	    	if (url.indexOf('getUnifiedData') == 0){
		        SenchaCon2013Demo.app.panelSettings[SenchaCon2013Demo.app.currentActivePanelIndex] = url;
		        SenchaCon2013Demo.app.panelData[SenchaCon2013Demo.app.currentActivePanelIndex] = myCookie;
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
	        SenchaCon2013Demo.app.panelSettings[SenchaCon2013Demo.app.currentActivePanelIndex] = options.url;
	        SenchaCon2013Demo.app.panelData[SenchaCon2013Demo.app.currentActivePanelIndex] = response.responseText;
		}  
		hideLoadingMask();
	});

Ext.define('SenchaCon2013Demo.controller.Main', {
	extend : 'Ext.app.Controller',
	xtype: 'maincontroller',
	requires: [
	        'Ext.chart.axis.Numeric',
	        'Ext.chart.axis.Category',
	        'Ext.chart.series.Scatter',
	        'Ext.chart.series.Bar',
	        'Ext.util.Format',
	        'Ext.MessageBox',
	        'SenchaCon2013Demo.model.DataModel'
	],
	config: {
		refs: {
			'mainController': 'maincontroller',
			'dataModel': 'datamodel',
			'mainContainer': 'senchademomain',						
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
			'globalSyncButton': 'segmentedbutton[id=globalsynctogglebutton]',
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
		for (i = 0; i < SenchaCon2013Demo.app.newChart.length; i++){
			var obj = SenchaCon2013Demo.app.newChart[i];
			if (obj != undefined){
				if (obj.getLegend() != undefined){
					obj.getLegend().destroy();
				}		
				obj.destroy();
			}
		}
	},
	
	handleTitleBarButtons: function(){
		this.getSettingsButton().setDisabled(false);
		this.getSettingsButton().show();
	},
	
	loadStores: function() {
		this.handleTitleBarButtons();
		this.checkForConfiguredGraphPanels();	
		SenchaCon2013Demo.app.creatingGraphs = true;
		Ext.getStore('GlobalSettingsStore').load();
		if (Ext.getStore('GlobalSettingsStore').getData().items[0] != undefined){
			SenchaCon2013Demo.app.playSpeed = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().playSpeed;
			SenchaCon2013Demo.app.numberActivePanels = Ext.getStore('GlobalSettingsStore').getData().items[0].getData().NumberOfPanels;
		}
		this.getApplication().getController('Settings').updateChartAnimationSettings();
		this.changePanels();
		var loopIndex = 1;
		for(;loopIndex <= SenchaCon2013Demo.app.numberActivePanels; loopIndex++){
			Ext.getStore('UserSettings'+loopIndex).load();
			if(Ext.getStore('UserSettings'+loopIndex).getData().items[0] != undefined) {
				Ext.get('chart'+loopIndex+'Button').hide();
				Ext.get('chart'+loopIndex+'Image').hide();
				SenchaCon2013Demo.app.databaseSetting[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().Database;
				SenchaCon2013Demo.app.graphTitle[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().GraphTitle;
				SenchaCon2013Demo.app.xs[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().XAxis;
				SenchaCon2013Demo.app.ys[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().YAxis;
				SenchaCon2013Demo.app.granularities[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().Granularity;
				SenchaCon2013Demo.app.chartTypes[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().ChartType;
				SenchaCon2013Demo.app.groupBys[loopIndex] = Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().GroupBy;
				SenchaCon2013Demo.app.startDate[loopIndex] = new Date(Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().StartDate);
				SenchaCon2013Demo.app.currentStartDate[loopIndex] = new Date(Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().StartDate);
				SenchaCon2013Demo.app.currentDate[loopIndex] = new Date(Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().StartDate);
				SenchaCon2013Demo.app.currentEndDate[loopIndex] = new Date(Ext.getStore('UserSettings'+loopIndex).getData().items[0].getData().EndDate);
				SenchaCon2013Demo.app.currentActivePanelIndex = loopIndex;
				switch(SenchaCon2013Demo.app.granularities[SenchaCon2013Demo.app.currentActivePanelIndex]) {
				case 'Hourly':
					SenchaCon2013Demo.app.valueGranularities[SenchaCon2013Demo.app.currentActivePanelIndex] = 1;
					break;
				case 'Daily':
					SenchaCon2013Demo.app.valueGranularities[SenchaCon2013Demo.app.currentActivePanelIndex] = 2;
					break;
				case 'Weekly':
					SenchaCon2013Demo.app.valueGranularities[SenchaCon2013Demo.app.currentActivePanelIndex] = 3;
					break;
				case 'Monthly':
					SenchaCon2013Demo.app.valueGranularities[SenchaCon2013Demo.app.currentActivePanelIndex] = 4;
					break;
				}				
				showLoadingMask();
				this.chartSetUp();
			} else {				
				if (SenchaCon2013Demo.app.publicMode){
					Ext.get('chart'+loopIndex+'Button').hide();
				} else {
					Ext.get('addchartpanel'+loopIndex).show();
					Ext.get('chart'+loopIndex+'Button').show();
					Ext.get('chart'+loopIndex+'Image').show();
				}
				Ext.ComponentQuery.query('addchartpanel'+loopIndex)[0].setHtml('');
			}
		}
		this.changePanels();
		SenchaCon2013Demo.app.currentActivePanelIndex = 1;
		this.setFocusOnPanel(SenchaCon2013Demo.app.currentActivePanelIndex);
		this.addPanelClickListener();
		hideLoadingMask();
		SenchaCon2013Demo.app.creatingGraphs = false;
	},
	
	addPanelClickListener: function(){
		Ext.ComponentQuery.query('panel1')[0].element.on({singletap: {fn: function(){mainController.setFocusOnPanel(1);}}});
		Ext.ComponentQuery.query('panel2')[0].element.on({singletap: {fn: function(){mainController.setFocusOnPanel(2);}}});
		Ext.ComponentQuery.query('panel3')[0].element.on({singletap: {fn: function(){mainController.setFocusOnPanel(3);}}});
		Ext.ComponentQuery.query('panel4')[0].element.on({singletap: {fn: function(){mainController.setFocusOnPanel(4);}}});
	},

	changePanels: function() {
		if(SenchaCon2013Demo.app.numberActivePanels == '1') {
			switch(SenchaCon2013Demo.app.currentActivePanelIndex) {
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
		else if(SenchaCon2013Demo.app.numberActivePanels == '2') {
			if(SenchaCon2013Demo.app.currentActivePanelIndex == 1 || SenchaCon2013Demo.app.currentActivePanelIndex == 2) {
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
		if(SenchaCon2013Demo.app.dateSet[SenchaCon2013Demo.currentActivePanelIndex] == true) {
			showLoadingMask();
		}
		mainController.changeDateRangeLabel(SenchaCon2013Demo.currentActivePanelIndex);
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;		
		Ext.ComponentQuery.query('panel'+chartIndex)[0].setHtml('');	
		var chartObject = Ext.ComponentQuery.query('chart[id=chart'+chartIndex+']')[0];
		if(chartObject != undefined){
			chartObject.destroy();
		}
		SenchaCon2013Demo.app.chartCreated[SenchaCon2013Demo.app.currentActivePanelIndex] = false;
		mainController.configureGranularities(SenchaCon2013Demo.app.currentActivePanelIndex,SenchaCon2013Demo.app.startDate[SenchaCon2013Demo.app.currentActivePanelIndex],SenchaCon2013Demo.app.currentEndDate[SenchaCon2013Demo.app.currentActivePanelIndex]);	
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
		var selectedDatabaseTable = SenchaCon2013Demo.app.databaseSetting[SenchaCon2013Demo.app.currentActivePanelIndex];
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
		SenchaCon2013Demo.model.DataModel.setFields(dataModelFieldArray);
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
		switch(SenchaCon2013Demo.app.granularities[i]) {
		case 'Hourly':
			SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex] = Math.round(100 / hourDifferential);	
			Ext.ComponentQuery.query('slider'+i)[0].setMaxValue(SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex] * hourDifferential);
			this.generateURLForChartData(instancestore, i, hourDifferential);
			break;
		case 'Daily':
			SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex] = Math.round(100 / dayDifferential);	
			Ext.ComponentQuery.query('slider'+i)[0].setMaxValue(SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex] * dayDifferential);
			this.generateURLForChartData(instancestore, i, dayDifferential);
			break;
		case 'Weekly':
			SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex] = Math.round(100 / (weekDifferential - 1));	
			Ext.ComponentQuery.query('slider'+i)[0].setMaxValue(SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex] * (weekDifferential - 1));
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
			SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex] = Math.round(100 / monthDifferential);	
			Ext.ComponentQuery.query('slider'+i)[0].setMaxValue(SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex] * monthDifferential);
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
		SenchaCon2013Demo.app.groupByBarLabels = response.groupByBarArray;		
		this.changeModelFields();
		for ( index = 0; index < response.data.length; index++)        
        {
			dateArray[index] = response.dateArray[index];
			instancestore[index] = Ext.create('Ext.data.Store', {
		        autoLoad: true,
		    	model: 'SenchaCon2013Demo.model.DataModel',
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
		SenchaCon2013Demo.app.globalDateArray[SenchaCon2013Demo.app.currentActivePanelIndex] = dateArray;
		SenchaCon2013Demo.app.jsonstore[SenchaCon2013Demo.app.currentActivePanelIndex] = instancestore;	
		SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex] = response.dataField;
		SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex] = response.categoryField;
		if (i > 5){
			return;
		}
		SenchaCon2013Demo.app.maximumPositions[i] = Ext.ComponentQuery.query('slider'+i)[0].getMaxValue();
		
		if (response.yMax != undefined){
			SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex] = response.yMax;
			SenchaCon2013Demo.app.YmaxReceived[SenchaCon2013Demo.app.currentActivePanelIndex] = true;
			if (SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex] != undefined && SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex] > 0){
				SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex] = parseInt(SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex]) + (parseInt(SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex]) * SenchaCon2013Demo.app.graphMaxValueMargin);
				if (SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex] == 0){
					SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex] = 10;
				}
			}
		}
		
		if (response.xMax != undefined){
			SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex] = response.xMax;
			SenchaCon2013Demo.app.XmaxReceived[SenchaCon2013Demo.app.currentActivePanelIndex] = true;
			if (SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex] != undefined && SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex] > 0){
				SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex] = parseInt(SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex]) + (parseInt(SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex]) * SenchaCon2013Demo.app.graphMaxValueMargin);
				if (SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex] == 0){
					SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex] = 10;
				}
			}
		}
		this.getApplication().getController('Playback').resetFunction();		
	},
	
	generateURLForChartData: function(instancestore, i, difference){
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		var databaseName = SenchaCon2013Demo.app.databaseSetting[chartIndex];
		var chartType = SenchaCon2013Demo.app.chartTypes[chartIndex];
		var absStartDate = dateFormat(SenchaCon2013Demo.app.startDate[chartIndex],"yyyy-mm-dd");
		var absEndDate = dateFormat(SenchaCon2013Demo.app.currentEndDate[chartIndex],"yyyy-mm-dd");
		var granularity = SenchaCon2013Demo.app.granularities[chartIndex];
		var x_axis = SenchaCon2013Demo.app.xs[chartIndex];
		var y_axis = SenchaCon2013Demo.app.ys[chartIndex];
		var groupBy = SenchaCon2013Demo.app.groupBys[chartIndex];
		var url = 'getUnifiedData.do?databaseName=' + databaseName + '&chartType=' + chartType + '&absStartDate=' + absStartDate +
		'&absEndDate='+ absEndDate + '&differential=' + difference + '&granularity='+ granularity + '&x_axis='+ x_axis + 
		'&y_axis=' + y_axis + '&groupBy=' + groupBy;
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
			SenchaCon2013Demo.app.currentActivePanelIndex = index;
			this.getApplication().getController('Playback').pauseFunction();
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
		if (SenchaCon2013Demo.app.isChartConfigured[panelIndex]){
			try{
				var startDate = dateFormat(SenchaCon2013Demo.app.startDate[panelIndex],'m/d/yy');
				var endDate = dateFormat(SenchaCon2013Demo.app.currentEndDate[panelIndex],'m/d/yy');
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
		for(;loopIndex <= SenchaCon2013Demo.app.numberActivePanels; loopIndex++){
			Ext.getStore('UserSettings'+loopIndex).load();
			if(Ext.getStore('UserSettings'+loopIndex).getData().items[0] != undefined) {
				SenchaCon2013Demo.app.isChartConfigured[loopIndex] = true;
			}
		}
	},
});
Ext.define('SenchaCon2013Demo.controller.Gauge', {
	extend : 'Ext.app.Controller',
	xtype: 'gaugecontroller',
	config: {
		refs: {
			'initController': 'initcontroller',
			'mainController': 'maincontroller',
		},
	},
	
	launch: function(){
	
	},
	
	createGaugeChart: function(store, dataField, chartIndex){
		var obj = SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create('Ext.chart.SpaceFillingChart', {
			id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
			store: store,
			flex: 1,
			//interactions: ['rotate'],
			 animate: {
	                easing: 'elasticIn',
	                duration: SenchaCon2013Demo.app.animateSpeed
	            },
			
		    innerPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    //colors: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"],
		    //shadow: true,
	    /*axes: [
	           {
	        	   type: 'gauge',
	                position: 'gauge',
	                minimum: 0,
	                maximum: SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex],
                    steps: 10,
	                margin: 7
	           }
	       ],*/
		   
		    series: [
		                {
		                    type: 'gauge',
		                   // value:  SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],//check
		                    field:SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
		                    minimum: 0,
		                    maximum: SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex],
		                    donut: 30,
		                    style: {
		                        miterLimit: 10,
		                        lineCap: 'miter',
		                        lineWidth: 2
		                    },
		                    subStyle: {
		                        fillStyle: ["#115fa6", "lightgrey"]
		                    }
		                }
		            ]
		   
		});
	},
});
Ext.define('SenchaCon2013Demo.controller.Pie', {
	extend : 'Ext.app.Controller',
	xtype: 'piecontroller',
	config: {
		refs: {
			'initController': 'initcontroller',
			'mainController': 'maincontroller',
		},
	},
	
	launch: function(){
	
	},
	
	createPieChart: function(store, dataField, categoryField, chartIndex){	
		var obj = SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create('Ext.chart.PolarChart', {
			id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
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
				        animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
				        label: {
				        	field: categoryField,
				        	display: 'rotate',
				        	contrast: true,
						},	
						labelOverflowPadding: 10,
			}],			
		});
	},
});
Ext.define('SenchaCon2013Demo.controller.HorizontalBar', {
	extend : 'Ext.app.Controller',
	xtype: 'horizontalbarcontroller',
	config: {
		refs: {
			'initController': 'initcontroller',
			'mainController': 'maincontroller',
		},
	},
	
	launch: function(){
		
	},
	
	createHorizontalBarChart: function(store,chartIndex,groupByBarArray) {
		var obj = SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex];
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
			SenchaCon2013Demo.app.groupByValueBar = new Array();
			for (i = 0; i < groupByBarArray.length; i++){
				SenchaCon2013Demo.app.groupByValueBar[i] = 'groupByBar' + (i+1);
			}
			if (groupByBarArray.length != 0 && groupByBarArray[groupByBarArray.length - 1] != 'other'){
				groupByBarArray[groupByBarArray.length] = "Other";
				SenchaCon2013Demo.app.groupByValueBar[SenchaCon2013Demo.app.groupByValueBar] = "Other";
			}			
			this.createHorizontalBarChartGroupBy(store,chartIndex, groupByBarArray);
		}		
	},
	
	createHorizontalBarChartGroupByNone: function(store,chartIndex) {
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
		    flipXY: true,
		    flex: 1,
		    store: store,
		    //shadow: true,
		    insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
	    	       		fields: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	minimum: 0,
	    	    	   	maximum: SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						//strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						//shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'left',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		//shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						//strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						//shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
	    	            	 type: 'bar',
	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	            	 yField: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
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
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
			id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
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
	    	    	   	maximum: SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						//strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						//shadowColor: 'black',
	   					},	   					
	    	       },
	    	       { type: 'category',
	    	    	   	position: 'left',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		//shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						//strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						//shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
	    	            	 type: 'bar',
	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar,
	    	            	 title: groupByBarArray,
	    	            	 axis: 'left',
	    	            	 highlight: true,
	    	            	 //showInLegend: true,
	    	            	// shadow: true,
	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
Ext.define('SenchaCon2013Demo.controller.LineBar', {
	extend : 'Ext.app.Controller',
	xtype: 'linebarcontroller',
	config: {
		refs: {
			'initController': 'initcontroller',
			'mainController': 'maincontroller',
		}
	},
	
	launch: function(){
	},
	
	createLineChart: function(store,chartIndex,groupByBarArray) {
		var obj = SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex];
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
			SenchaCon2013Demo.app.groupByValueBar = new Array();
			for (i = 0; i < groupByBarArray.length; i++){
				SenchaCon2013Demo.app.groupByValueBar[i] = 'groupByBar' + (i+1);
			}
			if (groupByBarArray.length != 0 && groupByBarArray[groupByBarArray.length - 1] != 'other'){
				groupByBarArray[groupByBarArray.length] = "Other";
				SenchaCon2013Demo.app.groupByValueBar[SenchaCon2013Demo.app.groupByValueBar] = "Other";
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
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
		    flex: 1,
		    store: store,
		    shadow: true,
		    insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
	    	       		fields: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	minimum: 0,
	    	    	   	maximum: SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
	    	            	 type: 'line',
	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	            	 yField: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	            	 axis: 'bottom',
	    	            	 highlight: true,
	    	            	 showInLegend: false,
	    	            	 shadow: true,
	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
		    flex: 1,
		    store: store,
		    shadow: true,
		    insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    //interactions: ['panzoom'],
		    animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
	    	    	   	maximum: SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
   	    	            	 type: 'line',
   	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar[0],
   	    	            	 title: groupByBarArray[0],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
   	    	            	  xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	  yField: SenchaCon2013Demo.app.groupByValueBar[1],
   	    	            	  title: groupByBarArray[1],
   	    	            	  axis: 'bottom',
   	    	            	  highlight: true,
   	    	            	  showInLegend: true,
   	    	            	  shadow: true,
   	    	            	  animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
		    flex: 1,
		    store: store,
		    shadow: true,
		    insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    //interactions: ['panzoom'],
		    animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
	    	    	   	maximum: SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
   	    	            	 type: 'line',
   	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar[0],
   	    	            	 title: groupByBarArray[0],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
   	    	            	  xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	  yField: SenchaCon2013Demo.app.groupByValueBar[1],
   	    	            	  title: groupByBarArray[1],
   	    	            	  axis: 'bottom',
   	    	            	  highlight: true,
   	    	            	  showInLegend: true,
   	    	            	  shadow: true,
   	    	            	  animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
   	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar[2],
   	    	            	 title: groupByBarArray[2],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
		    flex: 1,
		    store: store,
		    shadow: true,
		    insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    //interactions: ['panzoom'],
		    animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
	    	    	   	maximum: SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
   	    	            	 type: 'line',
   	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar[0],
   	    	            	 title: groupByBarArray[0],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
   	    	            	  xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	  yField: SenchaCon2013Demo.app.groupByValueBar[1],
   	    	            	  title: groupByBarArray[1],
   	    	            	  axis: 'bottom',
   	    	            	  highlight: true,
   	    	            	  showInLegend: true,
   	    	            	  shadow: true,
   	    	            	  animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
   	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar[2],
   	    	            	 title: groupByBarArray[2],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar[3],
	    	            	 title: groupByBarArray[3],
	    	            	 axis: 'bottom',
	    	            	 highlight: true,
	    	            	 showInLegend: true,
	    	            	 shadow: true,
	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
		    flex: 1,
		    store: store,
		    shadow: true,
		    insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    //interactions: ['panzoom'],
		    animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
	    	    	   	maximum: SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
   	    	            	 type: 'line',
   	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar[0],
   	    	            	 title: groupByBarArray[0],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
   	    	            	  xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	  yField: SenchaCon2013Demo.app.groupByValueBar[1],
   	    	            	  title: groupByBarArray[1],
   	    	            	  axis: 'bottom',
   	    	            	  highlight: true,
   	    	            	  showInLegend: true,
   	    	            	  shadow: true,
   	    	            	  animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
   	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
   	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar[2],
   	    	            	 title: groupByBarArray[2],
   	    	            	 axis: 'bottom',
   	    	            	 highlight: true,
   	    	            	 showInLegend: true,
   	    	            	 shadow: true,
   	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar[3],
	    	            	 title: groupByBarArray[3],
	    	            	 axis: 'bottom',
	    	            	 highlight: true,
	    	            	 showInLegend: true,
	    	            	 shadow: true,
	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar[4],
	    	            	 title: groupByBarArray[4],
	    	            	 axis: 'bottom',
	    	            	 highlight: true,
	    	            	 showInLegend: true,
	    	            	 shadow: true,
	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
Ext.define('SenchaCon2013Demo.controller.Scatter', {
	extend : 'Ext.app.Controller',
	xtype: 'scattercontroller',
	config: {
		refs: {
			'initController': 'initcontroller',
			'mainController': 'maincontroller',
		},
	},
	
	launch: function(){
		
	},	
			    
	createScatterChart: function(chartType,store,xfield,yfield,chartIndex,groupByBarArray) {
		var obj = SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
			id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
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
		        maximum: SenchaCon2013Demo.app.Xmax[SenchaCon2013Demo.app.currentActivePanelIndex],
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
		        maximum: SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex],
		    }],
		    series: [{
		        type: 'scatter',
		        fill: true,
		        xField: xfield,
		        yField: yfield,
		        animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
Ext.define('SenchaCon2013Demo.controller.VerticalBar', {
	extend : 'Ext.app.Controller',
	xtype: 'verticalbarcontroller',
	config: {
		refs: {
			'mainController': 'maincontroller',
		},
	},
	
	launch: function(){
		
	},

	createVerticalBarChart: function(store,chartIndex,groupByBarArray) {
		var obj = SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.get().destroy();
			}		
			obj.destroy();
		}
		if (groupByBarArray == undefined){
			this.createVerticalBarChartGroupByNone(store,chartIndex);
		}
		else {
			SenchaCon2013Demo.app.groupByValueBar = new Array();
			for (i = 0; i < groupByBarArray.length; i++){
				SenchaCon2013Demo.app.groupByValueBar[i] = 'groupByBar' + (i+1);
			}
			if (groupByBarArray.length != 0 && groupByBarArray[groupByBarArray.length - 1] != 'other'){
				groupByBarArray[groupByBarArray.length] = "Other";
				SenchaCon2013Demo.app.groupByValueBar[SenchaCon2013Demo.app.groupByValueBar] = "Other";
			}			
			this.createVerticalBarChartGroupBy(store,chartIndex, groupByBarArray);
		}
	},
	
	createVerticalBarChartGroupByNone: function(store,chartIndex) {
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
		    flipXY: false,
		    flex: 1,
		    store: store,
		    shadow: true,
		    animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
	    	       		fields: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	minimum: 0,
	    	    	   	maximum: SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
	    	            	 type: 'bar',
	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	            	 yField: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
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
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
		    flipXY: false,
		    flex: 1,
		    store: store,
		    shadow: true,
		    animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
	    	    	   	maximum: SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
	    	            	 type: 'bar',
	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar,
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
Ext.define('SenchaCon2013Demo.controller.GlobalSync', {
	extend : 'Ext.app.Controller',
	xtype: 'globalsynccontroller',
	config: {
		refs: {
			'initController': 'initcontroller',
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
			SenchaCon2013Demo.app.currentActivePanelIndex = 0;
			this.getApplication().getController('Main').checkForConfiguredGraphPanels();
			this.getApplication().getController('Playback').resetBackwardFunction();
			this.getSettingsButton().setDisabled(true);
		}	
		else {
			this.getSettingsButton().setDisabled(false);
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
				SenchaCon2013Demo.app.currentActivePanelIndex = i;
				SenchaCon2013Demo.app.sliders[i].setValue(0);
				SenchaCon2013Demo.app.sliders[i].fireEvent('change',SenchaCon2013Demo.app.sliders[i],i);
			}*/
			SenchaCon2013Demo.app.currentActivePanelIndex = 1;
		}	
	},
	
	calculateGlobalSyncVariables: function(){
		var chartIndex = 0;
		for(i = 0; i < 15; i++) {
			SenchaCon2013Demo.app.chartLengths[i] = 0;
		}
		var globalindex = 0;
		for(i = 0; i < 5; i++) {
			SenchaCon2013Demo.app.chartValue[i] = 0;
		}
		for(i = 0; i < 5; i++) {
			if(SenchaCon2013Demo.app.startDate[i] != undefined) {
				SenchaCon2013Demo.app.currentStartDate[i] = new Date(SenchaCon2013Demo.app.startDate[i]);
			}
		}
		for(i = 0; i < 5; i++) {
			SenchaCon2013Demo.app.chartIsRunning[i] = false;
			SenchaCon2013Demo.app.chartIsPaused[i] = false;
			SenchaCon2013Demo.app.chartFinished[i] = false;
			SenchaCon2013Demo.app.initialPosition[i] = true;
		}	
		SenchaCon2013Demo.app.numberActiveCharts = 0;
		for(i = 1; i < 5; i++) {
			if(SenchaCon2013Demo.app.dateSet[i] == true) {
				SenchaCon2013Demo.app.numberActiveCharts = SenchaCon2013Demo.app.numberActiveCharts + 1;
			}
		}
		SenchaCon2013Demo.app.chartsFinished = 0;
		SenchaCon2013Demo.app.globalIndex = 0;
		SenchaCon2013Demo.app.firstGlobalDate = true;
		SenchaCon2013Demo.app.globalSyncPressed = true;
		SenchaCon2013Demo.app.nullSearchReturnedTrue = false;
		SenchaCon2013Demo.app.finishCall = false;
		SenchaCon2013Demo.app.sandwich = false;
		SenchaCon2013Demo.app.testNextIncrement = null;
		var dateIndex = new Array();
		var startArray = new Array();
		var endArray = new Array();
		var earliestCharts = new Array(); //Array storing the charts with the earliest start dates upon global sync initialization
		var firstCharts = new Array(); //Array storing the earliest chart(s) with the largest granularity upon global sync initialization
		var globalSliderMax = 0;
		var count = 0;
		var valueGranularities = new Array();
		valueGranularities = SenchaCon2013Demo.app.valueGranularities;
		for(i = 1; i < 5; i++) {
			if(SenchaCon2013Demo.app.dateSet[i] == true) {
				//globalSliderMax = globalSliderMax + Ext.getCmp('mySlider' + i).getMaxValue();
				startArray[count] = SenchaCon2013Demo.app.currentStartDate[i].getTime();
				dateIndex[count] = i;
				endArray[count] = SenchaCon2013Demo.app.currentEndDate[i].getTime();
				count = count + 1;
			}
		};
		for(i = 0; i < count; i++) {
			if(count == 0) {
			}
			else if(count == 1) {
				SenchaCon2013Demo.app.globalStartDate = startArray[i];
				earliestCharts[0] = dateIndex[i];
			}
			else if(count == 2) {
				if(startArray[i] <= startArray[(i+1)%count]) {
					SenchaCon2013Demo.app.globalStartDate = startArray[i];
					earliestCharts[0] = dateIndex[i];
					if(startArray[i] == startArray[(i+1)%count]) {
						earliestCharts[1] = dateIndex[(i+1)%count];
					}	
				}
				if(endArray[i] >= endArray[(i+1)%count]) {
					SenchaCon2013Demo.app.globalEndDate = endArray[i];
				}
			}	
			else if(count == 3) {
				if(startArray[i] <= startArray[(i+1)%count] && startArray[i] <= startArray[(i+2)%count]) {
					SenchaCon2013Demo.app.globalStartDate = startArray[i];
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
					SenchaCon2013Demo.app.globalEndDate = endArray[i];
				}
			}	
			else {	
				if(startArray[i] <= startArray[(i+1)%count] && startArray[i] <= startArray[(i+2)%count] && startArray[i] <= startArray[(i+3)%count]) {
					SenchaCon2013Demo.app.globalStartDate = startArray[i];
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
					SenchaCon2013Demo.app.globalEndDate = endArray[i];
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
			SenchaCon2013Demo.app.chartIsRunning[firstCharts[i]] = true;
			SenchaCon2013Demo.app.initialPosition[firstCharts[i]] = false;
		}
		//The rest of the global sync logic is in the app.js file *
		//SenchaCon2013Demo.app.globalSync();
		this.globalSync();
		var sum = 0;
		for(i = 0; i < SenchaCon2013Demo.app.chartSection.length; i++) {
			if (!isNaN(SenchaCon2013Demo.app.chartLengths[i])){
				sum = sum + SenchaCon2013Demo.app.chartLengths[i];
			}											
		}
		//SenchaCon2013Demo.app.differentialMultiplier[chartIndex] = Math.round(100 / sum);	
		SenchaCon2013Demo.app.differentialMultiplier[chartIndex] = 1;
		Ext.ComponentQuery.query('slider'+chartIndex)[0].setMaxValue(SenchaCon2013Demo.app.differentialMultiplier[chartIndex] * sum);
	    SenchaCon2013Demo.app.maximumPositions[chartIndex] = Ext.ComponentQuery.query('slider'+chartIndex)[0].getMaxValue();
		hideLoadingMask();
		SenchaCon2013Demo.app.testcount = SenchaCon2013Demo.app.testcount + 1;
		logMessage('chartIndex in global end '+chartIndex);
		this.calculateGlobalSyncChartPositionsMap();
	},
	
	globalSyncSliderFunctionChange: function(value, chartIndex){

		//if(value == 0 /*&& SenchaCon2013Demo.app.testcount < 2*/) {
		//	
		//}
		//else {
			//hideLoadingMask();
			//SenchaCon2013Demo.app.playChartsGlobal(value);
			this.playChartsGlobal(value);
		//}
	},
	
	globalSync: function() {
		var counter = 0;
		while(SenchaCon2013Demo.app.chartsFinished != SenchaCon2013Demo.app.numberActiveCharts && counter < 100) {
		//console.log('chartsFinished = '+SenchaCon2013Demo.app.chartsFinished);
			var chartUsed = false;
			var i = 1;
			while(i < 5) {
				if(SenchaCon2013Demo.app.currentStartDate[i] <= SenchaCon2013Demo.app.currentEndDate[i]) {
					if(SenchaCon2013Demo.app.chartIsRunning[i] == true && SenchaCon2013Demo.app.chartIsPaused[i] != true) {
						previousDate = new Date(SenchaCon2013Demo.app.currentStartDate[i]);
						switch(SenchaCon2013Demo.app.granularities[i]) {
						case 'Hourly':
							SenchaCon2013Demo.app.currentStartDate[i].setMinutes(SenchaCon2013Demo.app.currentStartDate[i].getMinutes() + 60);
							break;
						case 'Daily':
							SenchaCon2013Demo.app.currentStartDate[i].setDate(SenchaCon2013Demo.app.currentStartDate[i].getDate() + 1);
							break;
						case 'Weekly':
							SenchaCon2013Demo.app.currentStartDate[i].setDate(SenchaCon2013Demo.app.currentStartDate[i].getDate() + 7);
							break;
						case 'Monthly':
							SenchaCon2013Demo.app.currentStartDate[i].setMonth(SenchaCon2013Demo.app.currentStartDate[i].getMonth() + 1);
							SenchaCon2013Demo.app.currentStartDate[i].setDate(1);
						break;
						}
						var test;
						if(SenchaCon2013Demo.app.chartFinished[i] != true && SenchaCon2013Demo.app.currentStartDate[i].getTime() > SenchaCon2013Demo.app.currentEndDate[i].getTime()) {
							//console.log('for index '+ i);
							//console.log('first chart stopped');
							SenchaCon2013Demo.app.chartFinished[i] = true;
							SenchaCon2013Demo.app.chartsFinished = SenchaCon2013Demo.app.chartsFinished + 1;
							//console.log('chartsFinished = '+SenchaCon2013Demo.app.chartsFinished);
					
							if(SenchaCon2013Demo.app.chartsFinished == SenchaCon2013Demo.app.numberActiveCharts) {
								//console.log('chartsfinished = '+SenchaCon2013Demo.app.chartsFinished);
								//console.log('number active charts = '+SenchaCon2013Demo.app.numberActiveCharts);
						
								var sectionIndexArray = new Array();
								var j = 0;
								for(i = 1; i < 5; i++) {
									if(SenchaCon2013Demo.app.chartIsRunning[i] == true && SenchaCon2013Demo.app.chartIsPaused[i] != true) {
										sectionIndexArray[j] = i;
										j = j + 1;
										SenchaCon2013Demo.app.chartIsPaused[i] = true;
									}	
								}
								SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex] = sectionIndexArray;
								SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] - 1;
						
								return;
							}	
							var sectionIndexArray = new Array();
							var j = 0;
							for(var iii = 1; iii < 5; iii++) {
								if(SenchaCon2013Demo.app.chartIsRunning[iii] == true && SenchaCon2013Demo.app.chartIsPaused[iii] != true) {
									sectionIndexArray[j] = iii;
									j = j + 1;
									SenchaCon2013Demo.app.chartIsPaused[iii] = true;
								}	
							}
							if(this.nullSearch(SenchaCon2013Demo.app.currentStartDate[i],previousDate) == true) {
								SenchaCon2013Demo.app.nullSearchReturnedTrue = true;
							}	
							//console.log(SenchaCon2013Demo.app.chartIsPaused[1]);
							//console.log('sectionindexarray');
							//console.log(sectionIndexArray);
							SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex] = sectionIndexArray;
							//chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
							SenchaCon2013Demo.app.globalIndex = SenchaCon2013Demo.app.globalIndex + 1;
							//chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
							SenchaCon2013Demo.app.finishCall = true;
							this.globalSyncLogic(SenchaCon2013Demo.app.globalEndDate,previousDate,i);
							//currentStartDate[i].setDate(currentStartDate[i].getDate() + 1);
						}
						if(chartUsed == false) {
							//console.log('globalSyncLogic called with index '+i);
							test = this.globalSyncLogic(SenchaCon2013Demo.app.currentStartDate[i],previousDate,i);
							if(test != true) {	
								chartUsed = true;
							}	
						}
					}	
				}
				else if(SenchaCon2013Demo.app.currentStartDate[i] == undefined) {
				}
				else if(SenchaCon2013Demo.app.chartFinished[i] != true && SenchaCon2013Demo.app.currentStartDate[i].getTime() > SenchaCon2013Demo.app.currentEndDate[i].getTime()) {
					//console.log('for index '+ i);
					//console.log('first chart stopped');
					SenchaCon2013Demo.app.chartFinished[i] = true;
					SenchaCon2013Demo.app.chartsFinished = SenchaCon2013Demo.app.chartsFinished + 1;
					//console.log('chartsFinished = '+SenchaCon2013Demo.app.chartsFinished);
					
					if(SenchaCon2013Demo.app.chartsFinished == SenchaCon2013Demo.app.numberActiveCharts) {
						//console.log('chartsfinished = '+SenchaCon2013Demo.app.chartsFinished);
						//console.log('number active charts = '+SenchaCon2013Demo.app.numberActiveCharts);
						
						var sectionIndexArray = new Array();
						var j = 0;
						for(i = 1; i < 5; i++) {
							if(SenchaCon2013Demo.app.chartIsRunning[i] == true && SenchaCon2013Demo.app.chartIsPaused[i] != true) {
								sectionIndexArray[j] = i;
								j = j + 1;
								SenchaCon2013Demo.app.chartIsPaused[i] = true;
							}	
						}
						SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex] = sectionIndexArray;
						SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] - 1;
						
						return;
					}
					
					//console.log('chartisRunning2');
					//console.log(SenchaCon2013Demo.app.chartIsRunning[2]);
					//console.log('chartIsRunning1');
					//console.log(SenchaCon2013Demo.app.chartIsRunning[1]);
					//console.log('chartisPaused2');
					//console.log(SenchaCon2013Demo.app.chartIsPaused[2]);
					//console.log('chartIsPaused1');
					//console.log(SenchaCon2013Demo.app.chartIsPaused[1]);
					
					var sectionIndexArray = new Array();
					var j = 0;
					for(ii = 1; ii < 5; ii++) {
						if(SenchaCon2013Demo.app.chartIsRunning[ii] == true && SenchaCon2013Demo.app.chartIsPaused[ii] != true) {
							sectionIndexArray[j] = ii;
							j = j + 1;
							SenchaCon2013Demo.app.chartIsPaused[ii] = true;
						}	
					}
					//console.log('sectionindexarray');
					//console.log(sectionIndexArray);
					SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex] = sectionIndexArray;
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] - 1;
					SenchaCon2013Demo.app.globalIndex = SenchaCon2013Demo.app.globalIndex + 1;
					//chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
					SenchaCon2013Demo.app.finishCall = true;
					this.globalSyncLogic(SenchaCon2013Demo.app.globalEndDate,SenchaCon2013Demo.app.currentStartDate[i],i);
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
			if(SenchaCon2013Demo.app.chartIsRunning[i] == true && SenchaCon2013Demo.app.chartIsPaused[i] != true) {
				sectionIndexArray[j] = i;
				j = j + 1;
				SenchaCon2013Demo.app.chartIsPaused[i] = true;
			}	
		}
		SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex] = sectionIndexArray;
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
			valueGranularities = SenchaCon2013Demo.app.valueGranularities;
			//console.log(SenchaCon2013Demo.app.dateSet[1] && (SenchaCon2013Demo.app.chartIsRunning[1] || SenchaCon2013Demo.app.chartIsPaused[1]));
			for(i = 1; i < 5; i++) {
				if(SenchaCon2013Demo.app.dateSet[i] == true && (SenchaCon2013Demo.app.chartIsRunning[i] == false || SenchaCon2013Demo.app.chartIsPaused[i] == true) && SenchaCon2013Demo.app.chartFinished[i] == false && SenchaCon2013Demo.app.currentStartDate[i] < presentDate && SenchaCon2013Demo.app.currentStartDate[i] >= previousDate) {
					startArray[count] = SenchaCon2013Demo.app.currentStartDate[i].getTime();
					dateIndex[count] = i;
					count = count + 1;
					earlierDateFound = true;	
				}
			}
			if(earlierDateFound == false) {
				SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] + 1;
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
				
				if(SenchaCon2013Demo.app.finishCall == true && valueGranularities[index] < valueGranularities[firstCharts[0]] && firstCharts[0] < index && SenchaCon2013Demo.app.chartsFinished == SenchaCon2013Demo.app.numberActiveCharts -1) {
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] + 1;
					//console.log('chartLengths incremented. value now '+SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex]);
				}	
				if(SenchaCon2013Demo.app.finishCall == true && valueGranularities[index] < valueGranularities[firstCharts[0]] && firstCharts[0] > index && SenchaCon2013Demo.app.chartsFinished == SenchaCon2013Demo.app.numberActiveCharts -1) {
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] + 2;
					//console.log('chartLengths incremented. value now '+SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex]);
				}	
				if(SenchaCon2013Demo.app.finishCall == true && SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex-1].length < 2) {
					for(iii = 0; iii < firstCharts.length; iii++) {
						sectionIndexArray[iii] = firstCharts[iii];
					}
				}	
				var counting_1 = 0;
				var counting_2 = 0;
				if(SenchaCon2013Demo.app.finishCall == true && SenchaCon2013Demo.app.chartsFinished < SenchaCon2013Demo.app.numberActiveCharts - 1) {
					if(SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex-1].length > 1) {
					for(u = 0; u < firstCharts.length; u++) {
						for(uu = 0; uu < SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex-1].length; uu++) {
							if(firstCharts[u] == SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex-1][uu] && firstCharts[u] < index) {
								counting_1 = counting_1 + 1;
							}
							else if(firstCharts[u] == SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex-1][uu] && firstCharts[u] > index) {
								counting_2 = counting_2 + 1;
							}	
						}
					}
					}
				}
				if(SenchaCon2013Demo.app.finishCall == true && SenchaCon2013Demo.app.chartsFinished < SenchaCon2013Demo.app.numberActiveCharts - 1 && firstCharts[0] < index && SenchaCon2013Demo.app.initialPosition[firstCharts[0]] == true) {
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] - 1;
					//console.log('chartLengths decremented. value now '+SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex]);
				}	
				if(counting_1 != 0) {
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex-1] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex-1] - 1;
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] + 1;
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
				//console.log(SenchaCon2013Demo.app.currentStartDate[firstCharts[0]]);
				//console.log(previousDate);
				if(SenchaCon2013Demo.app.finishCall == true && SenchaCon2013Demo.app.firstGlobalDate != true && SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex-1].length > 1 && SenchaCon2013Demo.app.chartsFinished == SenchaCon2013Demo.app.numberActiveCharts -1) {
					//console.log('comparison satisfied');
					//console.log(SenchaCon2013Demo.app.chartLengths);
					//console.log(SenchaCon2013Demo.app.globalIndex);
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] + 1;
					for(iii = 0; iii < firstCharts.length; iii++) {
						sectionIndexArray[iii] = firstCharts[iii];
					}	
				}
				else if(SenchaCon2013Demo.app.finishCall == true && SenchaCon2013Demo.app.firstGlobalDate == true && firstCharts[0] > index && SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex-1].length > 1 && SenchaCon2013Demo.app.chartsFinished == SenchaCon2013Demo.app.numberActiveCharts -1) {
					for(iii = 0; iii < firstCharts.length; iii++) {
						sectionIndexArray[iii] = firstCharts[iii];
					}
				}
				else if(SenchaCon2013Demo.app.finishCall == true && SenchaCon2013Demo.app.firstGlobalDate == true && firstCharts[0] < index && SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex-1].length > 1 && SenchaCon2013Demo.app.chartsFinished == SenchaCon2013Demo.app.numberActiveCharts -1) {
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex-1] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex-1] - 1;
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] + 2;
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
				if(SenchaCon2013Demo.app.finishCall == false) {
					for(i = 1; i < 5; i++) {
						if(SenchaCon2013Demo.app.chartIsRunning[i] == true && SenchaCon2013Demo.app.chartIsPaused[i] != true) {
							sectionIndexArray[j] = i;
							j = j + 1;
							SenchaCon2013Demo.app.chartIsPaused[i] = true;
						}	
					}
				}
				if(j == 2) {
					//console.log('chart '+sectionIndexArray[1]+' updated.');
					switch(SenchaCon2013Demo.app.granularities[sectionIndexArray[1]]) {
						case 'Hourly':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].setMinutes(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].getMinutes() + 60);
							break;
						case 'Daily':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].setDate(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].getDate() + 1);
							break;
						case 'Weekly':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].setDate(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].getDate() + 7);
							break;
						case 'Monthly':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].setDate(1);
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].setMonth(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].getMonth() + 1);
							break;
					}
					if(SenchaCon2013Demo.app.chartFinished[sectionIndexArray[1]] != true && SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].getTime() > SenchaCon2013Demo.app.currentEndDate[sectionIndexArray[1]].getTime()) {
						SenchaCon2013Demo.app.chartFinished[sectionIndexArray[1]] = true;
						SenchaCon2013Demo.app.chartsFinished = SenchaCon2013Demo.app.chartsFinished + 1;
					}	
				}	
				else if(j == 3) { 
					switch(SenchaCon2013Demo.app.granularities[sectionIndexArray[1]]) {
						case 'Hourly':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].setMinutes(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].getMinutes() + 60);
							break;
						case 'Daily':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].setDate(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].getDate() + 1);
							break;
						case 'Weekly':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].setDate(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].getDate() + 7);
							break;
						case 'Monthly':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].setDate(1);
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].setMonth(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].getMonth() + 1);
							break;
					}
					if(SenchaCon2013Demo.app.chartFinished[sectionIndexArray[1]] != true && SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[1]].getTime() > SenchaCon2013Demo.app.currentEndDate[sectionIndexArray[1]].getTime()) {
						SenchaCon2013Demo.app.chartFinished[sectionIndexArray[1]] = true;
						SenchaCon2013Demo.app.chartsFinished = SenchaCon2013Demo.app.chartsFinished + 1;
					}
					switch(SenchaCon2013Demo.app.granularities[sectionIndexArray[2]]) {
						case 'Hourly':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[2]].setMinutes(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[2]].getMinutes() + 60);
							break;
						case 'Daily':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[2]].setDate(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[2]].getDate() + 1);
							break;
						case 'Weekly':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[2]].setDate(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[2]].getDate() + 7);
							break;
						case 'Monthly':
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[2]].setDate(1);
							SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[2]].setMonth(SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[2]].getMonth() + 1);
							break;
					}
					if(SenchaCon2013Demo.app.chartFinished[sectionIndexArray[2]] != true && SenchaCon2013Demo.app.currentStartDate[sectionIndexArray[2]].getTime() > SenchaCon2013Demo.app.currentEndDate[sectionIndexArray[2]].getTime()) {
						SenchaCon2013Demo.app.chartFinished[sectionIndexArray[2]] = true;
						SenchaCon2013Demo.app.chartsFinished = SenchaCon2013Demo.app.chartsFinished + 1;
					}
				}
				//console.log('sectionindexarray');
				//console.log(sectionIndexArray);
				if(SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] != 0) {
					for(ii = 0; ii < firstCharts.length; ii++) {
						if(SenchaCon2013Demo.app.currentStartDate[index] > SenchaCon2013Demo.app.currentEndDate[firstCharts[ii]]) {
							//jj = jj + 1;
						}
					}
					if(jj != 0) {
						SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex+1] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex+1] + 1;
						//console.log('chartlengths[globalindex + 1] incremented. value now '+SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex+1]);

					}
					SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex] = sectionIndexArray;
					if(SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex].length > 1) {
						for(i = 0; i < SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex].length; i++) {
							if(SenchaCon2013Demo.app.currentEndDate[SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex][0]] > SenchaCon2013Demo.app.currentEndDate[SenchaCon2013Demo.app.chartSection[SenchaCon2013Demo.app.globalIndex][(i+1)]]) {
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
							SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] - 1;
						}
						//chartLengths[globalIndex + 1] = 1;
						//console.log('chartlengths[globalindex + 1] incremented. value now '+SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex+1]);
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
					SenchaCon2013Demo.app.globalIndex = SenchaCon2013Demo.app.globalIndex + 1;
				}	
				var sum = 0;
				for(i = 0; i < firstCharts.length; i++) {
					if(SenchaCon2013Demo.app.currentStartDate[firstCharts[i]].getTime() == previousDate.getTime() && valueGranularities[firstCharts[i]] == valueGranularities[index] && SenchaCon2013Demo.app.currentStartDate[index] <= SenchaCon2013Demo.app.currentEndDate[index]) {
						if(SenchaCon2013Demo.app.currentEndDate[index] > SenchaCon2013Demo.app.currentEndDate[firstCharts[i]]) {
							SenchaCon2013Demo.app.sandwich = true;
						}	
						sum = sum + 1;
						/*
						for(j = 1; j < 5; j++) {
							if(chartIsRunning[j] == true) {
								chartIsPaused[j] = false;
							}
						}
						*/
						SenchaCon2013Demo.app.chartIsPaused[index] = false;
						//chartLengths[globalIndex] = chartLengths[globalIndex] - 1;
						if(firstCharts[i] < index) {
							switch(SenchaCon2013Demo.app.granularities[firstCharts[i]]) {
							case 'Hourly':
								SenchaCon2013Demo.app.currentStartDate[firstCharts[i]].setMinutes(SenchaCon2013Demo.app.currentStartDate[firstCharts[i]].getMinutes() + 60);
								break;
							case 'Daily':
								SenchaCon2013Demo.app.currentStartDate[firstCharts[i]].setDate(SenchaCon2013Demo.app.currentStartDate[firstCharts[i]].getDate() + 1);
								break;
							case 'Weekly':
								SenchaCon2013Demo.app.currentStartDate[firstCharts[i]].setDate(SenchaCon2013Demo.app.currentStartDate[firstCharts[i]].getDate() + 7);
								break;
							case 'Monthly':
								SenchaCon2013Demo.app.currentStartDate[firstCharts[i]].setDate(1);
								SenchaCon2013Demo.app.currentStartDate[firstCharts[i]].setMonth(SenchaCon2013Demo.app.currentStartDate[firstCharts[i]].getMonth() + 1);
								break;
							}	
						}
					}
				}
				if(sum != 0) {
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] + 1;
				}
				if(valueGranularities[index] < valueGranularities[firstCharts[0]] && SenchaCon2013Demo.app.chartFinished[index] != true && SenchaCon2013Demo.app.initialPosition[firstCharts[0]] == false) {
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] + 1;
				}
				if(valueGranularities[index] > valueGranularities[firstCharts[0]] && SenchaCon2013Demo.app.chartFinished[index] != true && SenchaCon2013Demo.app.initialPosition[firstCharts[0]] == false) {
					SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] = SenchaCon2013Demo.app.chartLengths[SenchaCon2013Demo.app.globalIndex] + 1;
				}
				
				for(i = 0; i < firstCharts.length; i++) {
					SenchaCon2013Demo.app.chartIsRunning[firstCharts[i]] = true;
					SenchaCon2013Demo.app.chartIsPaused[firstCharts[i]] = false;
					SenchaCon2013Demo.app.initialPosition[firstCharts[i]] = false;
				};	
				SenchaCon2013Demo.app.firstGlobalDate = false;
				if(sum != 0) {
					return false;
				}
				SenchaCon2013Demo.app.nullSearchReturnedTrue = false;
				SenchaCon2013Demo.app.finishCall = false;
			return true;
	},
		
	nullSearch: function(presentDate,previousDate) {
		var earlierDateFound = false;
		for(i = 1; i < 5; i++) {
			if(SenchaCon2013Demo.app.dateSet[i] == true && (SenchaCon2013Demo.app.chartIsRunning[i] == false || SenchaCon2013Demo.app.chartIsPaused[i] == true) && SenchaCon2013Demo.app.chartFinished[i] == false && SenchaCon2013Demo.app.currentStartDate[i] < presentDate && SenchaCon2013Demo.app.currentStartDate[i] >= previousDate) {
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
			chartPos = SenchaCon2013Demo.app.globalSyncChartPositions[value][i];
			if (chartPos != undefined && SenchaCon2013Demo.app.isChartConfigured[i]){
				this.getApplication().getController('Playback').setPanelDateCaption(i, chartPos);
				SenchaCon2013Demo.app.newChart[i].bindStore(SenchaCon2013Demo.app.jsonstore[i][chartPos]);
				//Ext.ComponentQuery.query('chart[id=chart'+i+']')[0].bindStore(SenchaCon2013Demo.app.jsonstore[i][chartPos]);
			}			
		}
	},
	
	calculateGlobalSyncChartPositionsMap: function(){
		this.getApplication().getController('Main').checkForConfiguredGraphPanels();
		var sliderMaxValue = SenchaCon2013Demo.app.maximumPositions[0];
		SenchaCon2013Demo.app.globalSyncChartPositions = new Array();
		for(i = 0; i <= sliderMaxValue; i++) {
			SenchaCon2013Demo.app.globalSyncChartPositions[i] = new Array();
			for (j = 0; j < 5; j++){
				SenchaCon2013Demo.app.globalSyncChartPositions[i][j] = 0;
			}
		};
		//logInfo('SliderMaxValue--' + sliderMaxValue);
		for (var value = 1; value <= sliderMaxValue; value++){
			//logInfo('SliderPosition -- '+value);
			if(value <= SenchaCon2013Demo.app.chartLengths[0]) {
				for(j = 0; j < SenchaCon2013Demo.app.chartSection[0].length; j++) {
					SenchaCon2013Demo.app.chartValue[SenchaCon2013Demo.app.chartSection[0][j]] = SenchaCon2013Demo.app.chartValue[SenchaCon2013Demo.app.chartSection[0][j]] + 1;
					for(k = 0; k < 5; k++){
						if (SenchaCon2013Demo.app.globalSyncChartPositions[value][k] == 0){
							SenchaCon2013Demo.app.globalSyncChartPositions[value][k] = SenchaCon2013Demo.app.globalSyncChartPositions[value - 1][k];
						}												
					}
					SenchaCon2013Demo.app.globalSyncChartPositions[value][SenchaCon2013Demo.app.chartSection[0][j]] = SenchaCon2013Demo.app.chartValue[SenchaCon2013Demo.app.chartSection[0][j]];
					//logInfo('1st block-PanelIndex--'+SenchaCon2013Demo.app.chartSection[0][j]+'-- ChartPosition='+SenchaCon2013Demo.app.chartValue[SenchaCon2013Demo.app.chartSection[0][j]]);
				}
				continue;
			}	
			var sum = 0;
			for(i = 0; i < SenchaCon2013Demo.app.chartSection.length - 1; i++) {
				sum = sum + SenchaCon2013Demo.app.chartLengths[i];
				if(value > sum && value <= (SenchaCon2013Demo.app.chartLengths[i+1] + sum)) {
					for(j = 0; j < SenchaCon2013Demo.app.chartSection[i+1].length; j++) {
						SenchaCon2013Demo.app.chartValue[SenchaCon2013Demo.app.chartSection[i+1][j]] = SenchaCon2013Demo.app.chartValue[SenchaCon2013Demo.app.chartSection[i+1][j]] + 1;
						for(k = 0; k < 5; k++){
							if (SenchaCon2013Demo.app.globalSyncChartPositions[value][k] == 0){
								SenchaCon2013Demo.app.globalSyncChartPositions[value][k] = SenchaCon2013Demo.app.globalSyncChartPositions[value - 1][k];
							}
						}
						SenchaCon2013Demo.app.globalSyncChartPositions[value][SenchaCon2013Demo.app.chartSection[i+1][j]] = SenchaCon2013Demo.app.chartValue[SenchaCon2013Demo.app.chartSection[i+1][j]];
						//logInfo('2nd block -PanelIndex-'+SenchaCon2013Demo.app.chartSection[i+1][j]+'-- ChartPosition='+SenchaCon2013Demo.app.chartValue[SenchaCon2013Demo.app.chartSection[i+1][j]]);	
					}
					continue;
				}
			}
		}
	},
});
var settingsController;
Ext.define('SenchaCon2013Demo.controller.Settings', {
	extend : 'Ext.app.Controller',
	xtype: 'settingscontroller',
	config: {
		refs: {
			'initController': 'initcontroller',
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
			'numberActivePanelsSetting': 'selectfield[id=activepanelsfield]',
			'chartTypeSetting': 'selectfield[label=Chart Type:]',
			'startDateSetting': 'datepickerfield[label=Start Date:]',
			'endDateSetting': 'datepickerfield[label=End Date:]',
			'playSpeedSettings': 'selectfield[id=playspeedsetting]',
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
		SenchaCon2013Demo.app.GranularityFieldStore = [
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
	},
	
	showSettingsPanel2: function() {
		this.getApplication().getController('Main').setFocusOnPanel2();
		this.showSettingsPanel();
	},
	
	showSettingsPanel3: function() {
		this.getApplication().getController('Main').setFocusOnPanel3();
		this.showSettingsPanel();
	},
	
	showSettingsPanel4: function() {
		this.getApplication().getController('Main').setFocusOnPanel4();
		this.showSettingsPanel();
	},
	
	manageDimensions: function() {	
		var selectedPanel = SenchaCon2013Demo.app.currentActivePanelIndex;
		var dataFieldValues = SenchaCon2013Demo.app.EmptyFieldStore;
		var categoryFieldValues = SenchaCon2013Demo.app.EmptyFieldStore;
		var categoryFieldValuesWithTime = SenchaCon2013Demo.app.EmptyFieldStore;
		var granularityFieldValues = SenchaCon2013Demo.app.GranularityFieldStore;
		if (SenchaCon2013Demo.app.PanelDataFieldStore[selectedPanel] != undefined){
			dataFieldValues = SenchaCon2013Demo.app.PanelDataFieldStore[selectedPanel];
		}
		if (SenchaCon2013Demo.app.PanelCategoryFieldStore[selectedPanel] != undefined){
			categoryFieldValues = SenchaCon2013Demo.app.PanelCategoryFieldStore[selectedPanel]
		}
		if (SenchaCon2013Demo.app.PanelCategoryFieldStoreWithTime[selectedPanel] != undefined){
			categoryFieldValuesWithTime = SenchaCon2013Demo.app.PanelCategoryFieldStoreWithTime[selectedPanel];
		}		
		this.getGranularitySetting().setOptions(granularityFieldValues);
		switch(this.getChartTypeSetting().getValue()) {
		case 'scatter':
			this.getGroupBySetting().show('fadeIn');
			this.getXAxisSetting().setLabel('X-Axis:');
			this.getYAxisSetting().show('fadeIn');
			this.getGroupBySetting().hide();
			this.getGroupBySetting().setValue('none');
			this.getXAxisSetting().setOptions(dataFieldValues);
			this.getYAxisSetting().setOptions(dataFieldValues);
			break;
		case 'horizontalbar':
			this.getGroupBySetting().show('fadeIn');
			this.getYAxisSetting().show('fadeIn');
			this.getXAxisSetting().setLabel('X-Axis:');
			this.getXAxisSetting().setOptions(dataFieldValues);
			this.getYAxisSetting().setOptions(categoryFieldValuesWithTime);
			this.getGroupBySetting().setOptions(categoryFieldValues);
			break;
		case 'verticalbar':
			this.getGroupBySetting().show('fadeIn');
			this.getXAxisSetting().setLabel('X-Axis:');
			this.getYAxisSetting().show('fadeIn');
			this.getYAxisSetting().setOptions(dataFieldValues);
			this.getXAxisSetting().setOptions(categoryFieldValuesWithTime);
			this.getGroupBySetting().setOptions(categoryFieldValues);
			break;
		case 'line':
			this.getGroupBySetting().show('fadeIn');
			this.getXAxisSetting().setLabel('X-Axis:');
			this.getYAxisSetting().show('fadeIn');
			this.getYAxisSetting().setOptions(dataFieldValues);
			this.getXAxisSetting().setOptions(categoryFieldValuesWithTime);
			this.getGroupBySetting().setOptions(categoryFieldValues);
			break;
		case 'area':
			this.getGroupBySetting().show('fadeIn');
			this.getXAxisSetting().setLabel('X-Axis:');
			this.getYAxisSetting().show('fadeIn');
			this.getYAxisSetting().setOptions(dataFieldValues);
			this.getXAxisSetting().setOptions(categoryFieldValuesWithTime);
			this.getGroupBySetting().setOptions(categoryFieldValues);
			break;
		case 'pie':
			this.getGroupBySetting().show('fadeIn');
			this.getXAxisSetting().setLabel('Data Value:');
			this.getYAxisSetting().hide('fadeOut');
			this.getGroupBySetting().setOptions(categoryFieldValues);
			this.getXAxisSetting().setOptions(dataFieldValues);				
			break;
		case 'gauge':
			this.getGroupBySetting().hide('fadeOut');
			this.getXAxisSetting().setLabel('Data Value:');
			this.getYAxisSetting().hide('fadeOut');
			this.getXAxisSetting().setOptions(dataFieldValues);				
			break;
		case 'radar':
			this.getGroupBySetting().show('fadeIn');
			this.getXAxisSetting().setLabel('Data Value:');
			this.getYAxisSetting().hide('fadeOut');
			this.getGroupBySetting().setOptions(categoryFieldValues);
			this.getXAxisSetting().setOptions(dataFieldValues);
			break;
		case 'none':
			this.getGroupBySetting().show('fadeIn');
			this.getXAxisSetting().setLabel('Data Value:');
			this.getYAxisSetting().hide('fadeOut');
			this.getGroupBySetting().setOptions(SenchaCon2013Demo.app.EmptyFieldStore);
			this.getXAxisSetting().setOptions(SenchaCon2013Demo.app.EmptyFieldStore);	
			this.getYAxisSetting().setOptions(SenchaCon2013Demo.app.EmptyFieldStore);
		}
	},
	
	manageFieldValueChangeForyAxisField: function(){
		this.manageGranularitySettings();
	},
	
	manageFieldValueChangeForxAxisField: function(){
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
		this.getNumberActivePanelsSetting().setValue(SenchaCon2013Demo.app.numberActivePanels);
		this.getInterestingMomentsSetting().setValue(SenchaCon2013Demo.app.interestingMoments);
		this.getReplayCommentsSetting().setValue(SenchaCon2013Demo.app.replayCommentsSetting);
		this.getPlaySpeedSettings().setValue(SenchaCon2013Demo.app.playSpeed);
		this.getImType3Setting().setValue(SenchaCon2013Demo.app.interestingMomentType3Setting);
		this.getImType4Setting().setValue(SenchaCon2013Demo.app.interestingMomentType4Setting);
		this.getImType1Setting().setValue(SenchaCon2013Demo.app.interestingMomentType1Setting);
		this.getImType2Setting().setValue(SenchaCon2013Demo.app.interestingMomentType2Setting);
		this.getGlobalSettingsPanel().show();
	},
	
	showSettingsPanel: function() {		
		this.getApplication().getController('DatabaseTable').getAllDatabaseTables();		
	},
	
	configureSettingsPanel: function(){		
		this.getDatabaseSetting().setOptions(SenchaCon2013Demo.app.DatabaseTableFieldStore);
		this.getDatabaseSetting().setValue(SenchaCon2013Demo.app.databaseSetting[SenchaCon2013Demo.app.currentActivePanelIndex]);
		this.getApplication().getController('DatabaseTable').getDatabaseTableFieldsForDatabase();		
	},
	
	showConfiguredSettingsPanel: function(){
		this.getChartTypeSetting().setValue(SenchaCon2013Demo.app.chartTypes[SenchaCon2013Demo.app.currentActivePanelIndex]);
		this.manageDimensions();
		this.getXAxisSetting().setValue(SenchaCon2013Demo.app.xs[SenchaCon2013Demo.app.currentActivePanelIndex]);
		this.getYAxisSetting().setValue(SenchaCon2013Demo.app.ys[SenchaCon2013Demo.app.currentActivePanelIndex]);		
		this.getGranularitySetting().setValue(SenchaCon2013Demo.app.granularities[SenchaCon2013Demo.app.currentActivePanelIndex]);
		this.getGroupBySetting().setValue(SenchaCon2013Demo.app.groupBys[SenchaCon2013Demo.app.currentActivePanelIndex]);
		this.getStartDateSetting().setValue(SenchaCon2013Demo.app.startDate[SenchaCon2013Demo.app.currentActivePanelIndex]);
		this.getEndDateSetting().setValue(SenchaCon2013Demo.app.currentEndDate[SenchaCon2013Demo.app.currentActivePanelIndex]);				
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
		clearStore('UserSettings' + SenchaCon2013Demo.app.currentActivePanelIndex);
		Ext.get('chart'+SenchaCon2013Demo.app.currentActivePanelIndex+'Button').show();
		Ext.get('chart'+SenchaCon2013Demo.app.currentActivePanelIndex+'Image').show();
		var obj = SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		SenchaCon2013Demo.app.panelSettings[SenchaCon2013Demo.app.currentActivePanelIndex] = '';
        SenchaCon2013Demo.app.panelData[SenchaCon2013Demo.app.currentActivePanelIndex] = '';
        var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
        Ext.ComponentQuery.query('addchartpanel'+chartIndex)[0].setHtml('');
		this.manageDimensions();
		this.getApplication().getController('Main').checkForConfiguredGraphPanels();
	},
	
	doneGlobalSettingsPanel: function(){
		SenchaCon2013Demo.app.numberActivePanels = this.getNumberActivePanelsSetting().getValue();
		SenchaCon2013Demo.app.playSpeed = this.getPlaySpeedSettings().getValue();
		var globalStore;
		globalStore = [{'NumberOfPanels': this.getNumberActivePanelsSetting().getValue(),'PlaySpeed': this.getPlaySpeedSettings().getValue()}];
		Ext.getStore('GlobalSettingsStore').setData(globalStore);
		Ext.getStore('GlobalSettingsStore').sync();
		this.getApplication().getController('Main').changePanels();
		this.updateChartAnimationSettings();
		this.cancelGlobalSettingsPanel();
	},
	
	updateChartAnimationSettings: function(){
		SenchaCon2013Demo.app.animateSpeed = SenchaCon2013Demo.app.playSpeed - 100;
		for(i = 0; i < SenchaCon2013Demo.app.newChart.length; i++) {
			if(SenchaCon2013Demo.app.newChart[i] != null) {
				var series = SenchaCon2013Demo.app.newChart[i].getSeries();
				for (j = 0; j < series.length; j++){
					series[j].setAnimate(
							{
								duration: SenchaCon2013Demo.app.animateSpeed, 
								delay: SenchaCon2013Demo.app.animateSpeed/2, 
								easing: 'ease'
							}
						);
				}
				SenchaCon2013Demo.app.newChart[i].setAnimate(
						{
							duration: SenchaCon2013Demo.app.animateSpeed, 
							delay: SenchaCon2013Demo.app.animateSpeed/2, 
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
		else if((this.getChartTypeSetting().getValue() == 'line' || this.getChartTypeSetting().getValue() == 'verticalbar' || this.getChartTypeSetting().getValue() == 'area') && (this.getXAxisSetting().getValue() == 'none' || this.getYAxisSetting().getValue() == 'none' || this.getGroupBySetting().getValue() == 'none' || this.getGranularitySetting().getValue() == 'none'))
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
		else if (this.getChartTypeSetting().getValue() == 'radar' &&(this.getXAxisSetting().getValue() == 'none' || this.getGroupBySetting().getValue() == 'none' || this.getGranularitySetting().getValue() == 'none'))
		{
			this.showSettingsErrorMessage();	
		}
		else if (this.getChartTypeSetting().getValue() == 'gauge' &&(this.getXAxisSetting().getValue() == 'none' || this.getGranularitySetting().getValue() == 'none'))
		{
			this.showSettingsErrorMessage();	
		}
		else 
		{
			if(SenchaCon2013Demo.app.currentActivePanelIndex ==1 )
			{
				Ext.get('chart1Button').hide();
				Ext.get('chart1Image').hide();
			}			
			else if (SenchaCon2013Demo.app.currentActivePanelIndex ==2)
			{
				Ext.get('chart2Button').hide();
				Ext.get('chart2Image').hide();
			}			
			else if(SenchaCon2013Demo.app.currentActivePanelIndex ==3)
			{
				Ext.get('chart3Button').hide();
				Ext.get('chart3Image').hide();
			}
			else 
			{
				Ext.get('chart4Button').hide();
				Ext.get('chart4Image').hide();
			}
			SenchaCon2013Demo.app.databaseSetting[SenchaCon2013Demo.app.currentActivePanelIndex] = this.getDatabaseSetting().getValue();
			SenchaCon2013Demo.app.graphTitle[SenchaCon2013Demo.app.currentActivePanelIndex] = this.getGraphTitleSetting().getValue();
			SenchaCon2013Demo.app.xs[SenchaCon2013Demo.app.currentActivePanelIndex] = this.getXAxisSetting().getValue();
			SenchaCon2013Demo.app.ys[SenchaCon2013Demo.app.currentActivePanelIndex] = this.getYAxisSetting().getValue();
			SenchaCon2013Demo.app.granularities[SenchaCon2013Demo.app.currentActivePanelIndex] = this.getGranularitySetting().getValue();
			SenchaCon2013Demo.app.chartTypes[SenchaCon2013Demo.app.currentActivePanelIndex] = this.getChartTypeSetting().getValue();
			SenchaCon2013Demo.app.groupBys[SenchaCon2013Demo.app.currentActivePanelIndex] = this.getGroupBySetting().getValue();
			SenchaCon2013Demo.app.startDate[SenchaCon2013Demo.app.currentActivePanelIndex] = new Date(this.getStartDateSetting().getValue());
			SenchaCon2013Demo.app.currentStartDate[SenchaCon2013Demo.app.currentActivePanelIndex] = new Date(this.getStartDateSetting().getValue());
			SenchaCon2013Demo.app.currentDate[SenchaCon2013Demo.app.currentActivePanelIndex] = new Date(this.getStartDateSetting().getValue());
			SenchaCon2013Demo.app.currentEndDate[SenchaCon2013Demo.app.currentActivePanelIndex] = new Date(this.getEndDateSetting().getValue());
			SenchaCon2013Demo.app.XmaxReceived[SenchaCon2013Demo.app.currentActivePanelIndex] = false;
			SenchaCon2013Demo.app.YmaxReceived[SenchaCon2013Demo.app.currentActivePanelIndex] = false;
			switch(SenchaCon2013Demo.app.granularities[SenchaCon2013Demo.app.currentActivePanelIndex]) {
				case 'Hourly':
					SenchaCon2013Demo.app.valueGranularities[SenchaCon2013Demo.app.currentActivePanelIndex] = 1;
					break;
				case 'Daily':
					SenchaCon2013Demo.app.valueGranularities[SenchaCon2013Demo.app.currentActivePanelIndex] = 2;
					break;
				case 'Weekly':
					SenchaCon2013Demo.app.valueGranularities[SenchaCon2013Demo.app.currentActivePanelIndex] = 3;
					break;
				case 'Monthly':
					SenchaCon2013Demo.app.valueGranularities[SenchaCon2013Demo.app.currentActivePanelIndex] = 4;
					break;
			}		 
			var difference = SenchaCon2013Demo.app.currentEndDate[SenchaCon2013Demo.app.currentActivePanelIndex] - SenchaCon2013Demo.app.currentStartDate[SenchaCon2013Demo.app.currentActivePanelIndex];
			var days = Math.floor(difference / (1000 * 60 * 60 * 24));		
			var datedifference =  SenchaCon2013Demo.app.currentStartDate[SenchaCon2013Demo.app.currentActivePanelIndex] - SenchaCon2013Demo.app.currentEndDate[SenchaCon2013Demo.app.currentActivePanelIndex];
			var datedays = Math.floor(datedifference / (1000 * 60 * 60 * 24));		
			if(datedays > 0)
			{
				Ext.Msg.alert('Check Dates','Start date must be earlier than end date.');
			}		
			else if (days <= 0 && SenchaCon2013Demo.app.granularities[SenchaCon2013Demo.app.currentActivePanelIndex] != 'Hourly')
			{			 
				Ext.Msg.alert('Check Dates','Start and end date can not be same');
			}		
			else 
			{				
				var tempStore;
				tempStore = [{'Database': this.getDatabaseSetting().getValue(),'GraphTitle': this.getGraphTitleSetting().getValue(),'XAxis':this.getXAxisSetting().getValue(),'YAxis':this.getYAxisSetting().getValue(),'GroupBy':this.getGroupBySetting().getValue(),'Granularity':this.getGranularitySetting().getValue(),'ChartType':this.getChartTypeSetting().getValue(),'StartDate':this.getStartDateSetting().getValue(),'EndDate':this.getEndDateSetting().getValue()}];
				Ext.getStore('UserSettings'+SenchaCon2013Demo.app.currentActivePanelIndex).setData(tempStore);
				Ext.getStore('UserSettings'+SenchaCon2013Demo.app.currentActivePanelIndex).sync();
				this.getSettingsPanel().hide(true);
				SenchaCon2013Demo.app.dateSet[SenchaCon2013Demo.app.currentActivePanelIndex] = true;
				showLoadingMask();
				this.getApplication().getController('Main').chartSetUp();
			}
		}
	},	
});
var playbackController;
Ext.define('SenchaCon2013Demo.controller.Playback', {
	extend : 'Ext.app.Controller',
	xtype: 'playbackcontroller',
	config: {
		refs: {
			'initController': 'initcontroller',
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
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		logInfo('ResumePlayback called for chart=' + chartIndex + ' at sliderValue=' + SenchaCon2013Demo.app.sliders[chartIndex].getValue()[0]
				+' and Last action is == ' + SenchaCon2013Demo.app.lastPlaybackAction);		
		if (SenchaCon2013Demo.app.lastPlaybackAction != undefined){
			if (SenchaCon2013Demo.app.lastPlaybackAction == 'playForward'){
				this.playForwardFunction();
			} else if (SenchaCon2013Demo.app.lastPlaybackAction == 'playBackward'){
				this.playBackwardFunction();
			}			
		}
	},
	
	sliderListenerFunctionDrag: function(slider, thumb, value) {
		value = value[0];
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		SenchaCon2013Demo.app.currentPositions[chartIndex] = SenchaCon2013Demo.app.sliders[chartIndex].getValue()[0];
		//SenchaCon2013Demo.app.sliders[chartIndex].fireEvent('change', SenchaCon2013Demo.app.sliders[chartIndex], chartIndex); 
		this.sliderListenerFunctionChange(slider);
	},
	
	setPanelDateCaption: function(chartIndex, value) {
		var caption = "";
		var captionFormat = "ddd mmm dd yyyy HH:MM:ss";
		var currentDate = "";
		try {
			currentDate = SenchaCon2013Demo.app.globalDateArray[chartIndex][value];
		} catch(err){
		}
		//logInfo('Current date for index='+chartIndex+' & value='+value+' is == ' + currentDate);
		if (SenchaCon2013Demo.app.granularities[chartIndex] != 'Hourly'){
			captionFormat = "ddd mmm dd yyyy";
		}
		try{
			currentDate = dateFormat(currentDate, captionFormat);
		} catch(err){
			logInfo('Error converting date' + err);
			currentDate = this.dateConversion(currentDate);
		}		
		if (chartIndex != 0 && chartIndex != 5){
			var graphTitle = SenchaCon2013Demo.app.graphTitle[chartIndex];
			caption = '<h1 style="text-align:center; color: black; z-index: 10; font-size: 14px; padding:10px"><b>'+currentDate+'</b></h1>';
			Ext.ComponentQuery.query('panel'+chartIndex)[0].setHtml(caption);
			//Ext.ComponentQuery.query('panel'+chartIndex)[0].setHtml(caption);
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
		var sliderValue = SenchaCon2013Demo.app.sliders[SenchaCon2013Demo.app.currentActivePanelIndex].getValue();
		SenchaCon2013Demo.app.sliders[SenchaCon2013Demo.app.currentActivePanelIndex].setValue(sliderValue % SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex]);	
	},
	
	showCharts: function(){		
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;	
		var value = 0;
		if(SenchaCon2013Demo.app.chartTypes[chartIndex] == 'scatter') {
			if(SenchaCon2013Demo.app.groupBys[SenchaCon2013Demo.app.currentActivePanelIndex] != 'none') {
				//this.createScatterChartGroupBy(SenchaCon2013Demo.app.chartTypes[chartIndex], SenchaCon2013Demo.app.jsonstore[chartIndex][value],SenchaCon2013Demo.app.xs[chartIndex],SenchaCon2013Demo.app.ys[chartIndex],chartIndex);
			}
			else {	
				this.getApplication().getController('Scatter').createScatterChart(SenchaCon2013Demo.app.chartTypes[chartIndex],SenchaCon2013Demo.app.jsonstore[chartIndex][value],SenchaCon2013Demo.app.dataFieldValues[chartIndex],SenchaCon2013Demo.app.categoryFieldValues[chartIndex],chartIndex, null);
			}				
		}	
		else if(SenchaCon2013Demo.app.chartTypes[chartIndex] == 'horizontalbar' || SenchaCon2013Demo.app.chartTypes[chartIndex] == 'verticalbar' || SenchaCon2013Demo.app.chartTypes[chartIndex] == 'line' || SenchaCon2013Demo.app.chartTypes[chartIndex] == 'area') {
			this.getApplication().getController('Main').changeModelFields();
			if(SenchaCon2013Demo.app.chartTypes[chartIndex] == 'horizontalbar') {
				if(SenchaCon2013Demo.app.groupBys[SenchaCon2013Demo.app.currentActivePanelIndex] != 'none') {
					SenchaCon2013Demo.app.getController('HorizontalBar').createHorizontalBarChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],chartIndex,SenchaCon2013Demo.app.groupByBarLabels);
				}
				else {
					SenchaCon2013Demo.app.getController('HorizontalBar').createHorizontalBarChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],chartIndex,null);
				}
			}
			else if(SenchaCon2013Demo.app.chartTypes[chartIndex] == 'verticalbar') {
				if(SenchaCon2013Demo.app.groupBys[SenchaCon2013Demo.app.currentActivePanelIndex] != 'none') {
					SenchaCon2013Demo.app.getController('VerticalBar').createVerticalBarChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],chartIndex,SenchaCon2013Demo.app.groupByBarLabels);
				}
				else {
					SenchaCon2013Demo.app.getController('VerticalBar').createVerticalBarChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],chartIndex,null);
				}
			}
			else if(SenchaCon2013Demo.app.chartTypes[chartIndex] == 'area') {
				if(SenchaCon2013Demo.app.groupBys[SenchaCon2013Demo.app.currentActivePanelIndex] != 'none') {
					SenchaCon2013Demo.app.getController('AreaBar').createAreaChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],chartIndex,SenchaCon2013Demo.app.groupByBarLabels);
				}
				else {
					SenchaCon2013Demo.app.getController('AreaBar').createAreaChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],chartIndex,null);
				}
			}
			
			else {
				if(SenchaCon2013Demo.app.groupBys[SenchaCon2013Demo.app.currentActivePanelIndex] == 'none') {
					SenchaCon2013Demo.app.getController('LineBar').createLineChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],chartIndex,null);
				}
				else{
					SenchaCon2013Demo.app.getController('LineBar').createLineChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],chartIndex,SenchaCon2013Demo.app.groupByBarLabels);	
				}
			}
		}
		else if(SenchaCon2013Demo.app.chartTypes[chartIndex] == 'pie') {
			this.getApplication().getController('Pie').createPieChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],SenchaCon2013Demo.app.dataFieldValues[chartIndex],SenchaCon2013Demo.app.categoryFieldValues[chartIndex],chartIndex);						
		}
		else if(SenchaCon2013Demo.app.chartTypes[chartIndex] == 'gauge') {
			this.getApplication().getController('Gauge').createGaugeChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],SenchaCon2013Demo.app.dataFieldValues[chartIndex],chartIndex);						
		}
		else if(SenchaCon2013Demo.app.chartTypes[chartIndex] == 'radar') {
			this.getApplication().getController('Radar').createRadarChart(SenchaCon2013Demo.app.jsonstore[chartIndex][value],SenchaCon2013Demo.app.dataFieldValues[chartIndex],SenchaCon2013Demo.app.categoryFieldValues[chartIndex],chartIndex);						
		}
		SenchaCon2013Demo.app.chartCreated[chartIndex] = true;
		if(SenchaCon2013Demo.app.dateSet[chartIndex] == true) {
			this.getApplication().getController('Main').setFocusOnPanel(chartIndex);
		}
		else {
			SenchaCon2013Demo.app.dateSet[chartIndex] = true;
		}
		this.setPanelDateCaption(chartIndex, value);			
		Ext.ComponentQuery.query('panel'+chartIndex)[0].add(SenchaCon2013Demo.app.newChart[chartIndex]);
		hideLoadingMask();
	},
	
	resetFunction: function() {	
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		clearInterval(SenchaCon2013Demo.app.waitvariables[chartIndex]);	
		var newPosition;
		newPosition = SenchaCon2013Demo.app.minimumPositions[chartIndex]; 
		SenchaCon2013Demo.app.sliders[chartIndex].setValue(newPosition); 
		SenchaCon2013Demo.app.currentPositions[chartIndex] = newPosition;
		this.showCharts();
		//SenchaCon2013Demo.app.sliders[chartIndex].fireEvent('change', SenchaCon2013Demo.app.sliders[chartIndex], chartIndex);
		if (chartIndex != 0){
			SenchaCon2013Demo.app.sliders[chartIndex].fireEvent('change',SenchaCon2013Demo.app.sliders[chartIndex],chartIndex);
		}
		if (chartIndex == 0) {	
			for(i = 1; i < 5; i++) {
				SenchaCon2013Demo.app.currentActivePanelIndex = i;
				SenchaCon2013Demo.app.sliders[i].setValue(newPosition);
				SenchaCon2013Demo.app.sliders[i].fireEvent('change',SenchaCon2013Demo.app.sliders[i],i);
				//SenchaCon2013Demo.app.sliders[i].fireEvent('change',SenchaCon2013Demo.app.sliders[i],i);
			}
			SenchaCon2013Demo.app.currentActivePanelIndex = 0;
		}
	},
	
	sliderListenerFunctionChange: function(slider) {
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		var sliderValue = slider.getValue()[0];
		var value = Math.floor(sliderValue / SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex]);
		SenchaCon2013Demo.app.currentPositions[SenchaCon2013Demo.app.currentActivePanelIndex] = SenchaCon2013Demo.app.sliders[SenchaCon2013Demo.app.currentActivePanelIndex].getValue()[0];
		logInfo('sliderValue=' + sliderValue + ' & differential=' + SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex] 
			+ ' & value=' + value);		
		if (chartIndex != 0){
			this.setPanelDateCaption(chartIndex, value);
			SenchaCon2013Demo.app.newChart[chartIndex].bindStore(SenchaCon2013Demo.app.jsonstore[chartIndex][value]);
		} else if (chartIndex == 0) {
			this.getApplication().getController('GlobalSync').globalSyncSliderFunctionChange(sliderValue, chartIndex);
		}
	},	
	
	resetBackwardFunction: function() {	
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		SenchaCon2013Demo.app.lastPlaybackAction = 'resetBackward';
		clearInterval(SenchaCon2013Demo.app.waitvariables[chartIndex]);	
		var newPosition;
		newPosition = SenchaCon2013Demo.app.minimumPositions[chartIndex]; 
		SenchaCon2013Demo.app.sliders[chartIndex].setValue(newPosition);
		SenchaCon2013Demo.app.currentPositions[chartIndex] = newPosition;
		SenchaCon2013Demo.app.sliders[chartIndex].fireEvent('change', SenchaCon2013Demo.app.sliders[chartIndex], chartIndex);	
	},
	
	stepBackwardFunction: function() {	
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		if(SenchaCon2013Demo.app.currentPositions[chartIndex] != SenchaCon2013Demo.app.minimumPositions[chartIndex]) {
			this.updateSliderInterval();
		}
		SenchaCon2013Demo.app.lastPlaybackAction = 'stepBackward';		
		clearInterval(SenchaCon2013Demo.app.waitvariables[chartIndex]);
        if (SenchaCon2013Demo.app.currentPositions[chartIndex] > SenchaCon2013Demo.app.minimumPositions[chartIndex]) {
          	newPosition = SenchaCon2013Demo.app.currentPositions[chartIndex] - SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex];
           	SenchaCon2013Demo.app.sliders[chartIndex].setValue(newPosition);           	
           	SenchaCon2013Demo.app.sliders[chartIndex].fireEvent('change',SenchaCon2013Demo.app.sliders[chartIndex],chartIndex);
        }
	},	
	
	playBackwardFunction: function() {
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		if(SenchaCon2013Demo.app.currentPositions[chartIndex] != SenchaCon2013Demo.app.minimumPositions[chartIndex]) {
			this.updateSliderInterval();
		}
		this.stepBackwardFunction();
		SenchaCon2013Demo.app.lastPlaybackAction = 'playBackward';		
		clearInterval(SenchaCon2013Demo.app.waitvariables[chartIndex]);
		SenchaCon2013Demo.app.currentPositions[chartIndex] = SenchaCon2013Demo.app.sliders[chartIndex].getValue()[0];		
		SenchaCon2013Demo.app.waitvariables[chartIndex] = setInterval( function() {	
			var newPosition;
            if (SenchaCon2013Demo.app.currentPositions[chartIndex] > SenchaCon2013Demo.app.minimumPositions[chartIndex]) {
            	newPosition = SenchaCon2013Demo.app.currentPositions[chartIndex] - SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex];
            	SenchaCon2013Demo.app.sliders[chartIndex].setValue(newPosition);
            	SenchaCon2013Demo.app.sliders[chartIndex].fireEvent('change',SenchaCon2013Demo.app.sliders[chartIndex],chartIndex);    
            }	
            else { 	
               	clearInterval(SenchaCon2013Demo.app.waitvariables[chartIndex]); 
            }
		},SenchaCon2013Demo.app.playSpeed);		
	},
	
	pauseFunction: function() {	
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		logInfo('pauseFunction called for Chart ' + chartIndex + ' at sliderValue=' + SenchaCon2013Demo.app.sliders[chartIndex].getValue()[0]);		
		clearInterval(SenchaCon2013Demo.app.waitvariables[chartIndex]);
		if (chartIndex == 0) {
			for(i = 1; i < 5; i++) {
				clearInterval(SenchaCon2013Demo.app.waitvariables[i]); 
			}
		}
	},
	
	playForwardFunction: function() {
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		if(SenchaCon2013Demo.app.currentPositions[chartIndex] != SenchaCon2013Demo.app.maximumPositions[chartIndex]) {
			this.updateSliderInterval();
		}
		this.stepForwardFunction();
		SenchaCon2013Demo.app.lastPlaybackAction = 'playForward';
		clearInterval(SenchaCon2013Demo.app.waitvariables[chartIndex]);
		SenchaCon2013Demo.app.currentPositions[chartIndex] = SenchaCon2013Demo.app.sliders[chartIndex].getValue()[0];     		
		if (SenchaCon2013Demo.app.currentPositions[chartIndex] != SenchaCon2013Demo.app.maximumPositions[chartIndex]){
			SenchaCon2013Demo.app.waitvariables[chartIndex] = setInterval( function() {	
				logInfo('Inside setInterval for playForwardFunction at currentPos=' + SenchaCon2013Demo.app.currentPositions[chartIndex]
					+ ' & newPos=' + (SenchaCon2013Demo.app.currentPositions[chartIndex] + SenchaCon2013Demo.app.differentialMultiplier[chartIndex]));
				var newPosition;
	            if (SenchaCon2013Demo.app.currentPositions[chartIndex] < SenchaCon2013Demo.app.maximumPositions[chartIndex]) {
	            	newPosition = SenchaCon2013Demo.app.currentPositions[chartIndex] + SenchaCon2013Demo.app.differentialMultiplier[chartIndex];
	            	SenchaCon2013Demo.app.sliders[chartIndex].setValue(newPosition);
					SenchaCon2013Demo.app.sliders[chartIndex].fireEvent('change',SenchaCon2013Demo.app.sliders[chartIndex],chartIndex);
				}	
	            else {
					clearInterval(SenchaCon2013Demo.app.waitvariables[chartIndex]); 
	            }
			},SenchaCon2013Demo.app.playSpeed);
		}		
	},
	
	stepForwardFunction: function() {
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		if(SenchaCon2013Demo.app.currentPositions[chartIndex] != SenchaCon2013Demo.app.maximumPositions[chartIndex]) {
			this.updateSliderInterval();
		}
		SenchaCon2013Demo.app.lastPlaybackAction = 'stepForward';
		clearInterval(SenchaCon2013Demo.app.waitvariables[chartIndex]);
        if (SenchaCon2013Demo.app.currentPositions[chartIndex] < SenchaCon2013Demo.app.maximumPositions[chartIndex]) {
        	newPosition = SenchaCon2013Demo.app.currentPositions[chartIndex] + SenchaCon2013Demo.app.differentialMultiplier[SenchaCon2013Demo.app.currentActivePanelIndex];
        	SenchaCon2013Demo.app.sliders[chartIndex].setValue(newPosition);
           	SenchaCon2013Demo.app.sliders[chartIndex].fireEvent('change',SenchaCon2013Demo.app.sliders[chartIndex],chartIndex);
        }
	},
	
	resetForwardFunction: function() {
		var chartIndex = SenchaCon2013Demo.app.currentActivePanelIndex;
		SenchaCon2013Demo.app.lastPlaybackAction = 'resetForward';
		logMessage('resetForwardFunction for Chart ' + SenchaCon2013Demo.app.currentActivePanelIndex);
		clearInterval(SenchaCon2013Demo.app.waitvariables[chartIndex]);	
		var newPosition;
		newPosition = SenchaCon2013Demo.app.maximumPositions[chartIndex]; 
		SenchaCon2013Demo.app.sliders[chartIndex].setValue(newPosition); 
		SenchaCon2013Demo.app.currentPositions[chartIndex] = newPosition;
		SenchaCon2013Demo.app.sliders[chartIndex].fireEvent('change', SenchaCon2013Demo.app.sliders[chartIndex], chartIndex);
	}
});
var databaseTableController;
Ext.define('SenchaCon2013Demo.controller.DatabaseTable', {
	extend : 'Ext.app.Controller',
	
	xtype: 'databasetablecontroller',
	config: {
		refs: {
			'initController': 'initcontroller',
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
	},
	
	getAllDatabaseTables: function(){
		if (SenchaCon2013Demo.app.CachedDatabaseTables.length == 0){
			showLoadingMask();
			Ext.Ajax.request({  
				url: 'getAllDatabaseTables.do',  
	            method: 'GET',
	            success: function(response){
	            	hideLoadingMask();
	        		var responseJSON = Ext.JSON.decode(response.responseText.trim());
	        		SenchaCon2013Demo.app.CachedDatabaseTables = responseJSON;
	        		databaseTableController.decodeDatabaseTableData(responseJSON);
	            },
	            failure: function(response) {
               		hideLoadingMask();
               		logMessage('Failure Logging in.');
               },
			});
		} else {
			databaseTableController.decodeDatabaseTableData(SenchaCon2013Demo.app.CachedDatabaseTables);
		}		
	},
	
	decodeDatabaseTableData: function(responseJSON){
		SenchaCon2013Demo.app.DatabaseTableFieldStore = new Array();
		temp = {text: 'None Defined', value: 'none'};
		SenchaCon2013Demo.app.DatabaseTableFieldStore.push(temp);
		for (var index = 0; index < responseJSON.length; index++){
			temp = {text: responseJSON[index].name, value: responseJSON[index].tableName};
			SenchaCon2013Demo.app.DatabaseTableFieldStore.push(temp);
		}
		this.getApplication().getController('Settings').configureSettingsPanel();
	},
	
	getDatabaseTableIdForTableName: function(tableName){
		var databaseTableId = 0;
		if (SenchaCon2013Demo.app.CachedDatabaseTables != undefined && SenchaCon2013Demo.app.CachedDatabaseTables.length > 0){
			for (var index = 0; index < SenchaCon2013Demo.app.CachedDatabaseTables.length; index++){
				if (SenchaCon2013Demo.app.CachedDatabaseTables[index].tableName == tableName){
					databaseTableId = SenchaCon2013Demo.app.CachedDatabaseTables[index].id;
					return databaseTableId;
				}
			}
		}
		return databaseTableId;
	},
	
	saveDatabaseTablesFieldsForDatabaseTableId: function(databaseTableId, databaseTableFieldsJSON){
		if (SenchaCon2013Demo.app.CachedDatabaseTables != undefined && SenchaCon2013Demo.app.CachedDatabaseTables.length > 0){
			for (var index = 0; index < SenchaCon2013Demo.app.CachedDatabaseTables.length; index++){
				if (SenchaCon2013Demo.app.CachedDatabaseTables[index].id == databaseTableId){
					break;
				}
			}
			SenchaCon2013Demo.app.CachedDatabaseTables[index].tableFields = databaseTableFieldsJSON;
		}
	},
	
	getDatabaseTablesFieldsForDatabaseTableId: function(databaseTableId){
		if (SenchaCon2013Demo.app.CachedDatabaseTables != undefined && SenchaCon2013Demo.app.CachedDatabaseTables.length > 0){
			for (var index = 0; index < SenchaCon2013Demo.app.CachedDatabaseTables.length; index++){
				if (SenchaCon2013Demo.app.CachedDatabaseTables[index].id == databaseTableId){
					return SenchaCon2013Demo.app.CachedDatabaseTables[index].tableFields;
				}
			}
		}
		return undefined;
	},
	
	getDatabaseTableFieldsForDatabase: function(){
		//this.getChartTypeSetting().setValue('none');
		var selectedDatabaseTable = this.getDatabaseSetting().getValue();
		if (selectedDatabaseTable != 'none'){
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
		
		var selectedPanel = SenchaCon2013Demo.app.currentActivePanelIndex;
		SenchaCon2013Demo.app.PanelDataFieldStore[selectedPanel] = dataFieldStore;
		SenchaCon2013Demo.app.PanelCategoryFieldStore[selectedPanel] = categoryFieldStore;
		SenchaCon2013Demo.app.PanelCategoryFieldStoreWithTime[selectedPanel] = categoryFieldStoreWithTime;
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
	        		SenchaCon2013Demo.app.CachedDatabaseTables = responseJSON;
	        		initController.showMainScreen();
	            },
	            failure: function(response) {
               		hideLoadingMask();
               		logMessage('Failure Caching data');
               },
			});
		} else {
			initController.showMainScreen();
		}
	},
});
Ext.define('SenchaCon2013Demo.controller.Radar', {
	extend : 'Ext.app.Controller',
	xtype: 'radarcontroller',
	config: {
		refs: {
			'initController': 'initcontroller',
			'mainController': 'maincontroller',
		},
	},
	
	launch: function(){
	
	},
	
	createRadarChart: function(store, dataField, categoryField, chartIndex){
		var obj = SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create('Ext.chart.PolarChart', {
			id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
			store: store,
			flex: 1,
			interactions: ['rotate'],
			//legend: {
		      //  position: 'right',		        
		    //},
		    innerPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    //colors: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"],
		    //shadow: true,
	    axes: [
	           {
	               type: 'numeric',
	               position: 'radial',
	               fields: dataField,
	               grid: true,
	               style: {
	                   estStepSize: 20
	               },
	               label: {
	                   fill: 'black',
	                  // y: -8
	               }
	           },
	           {
	               type: 'category',
	               position: 'angular',
	               fields: categoryField,
	               grid: true,
	               style: {
	                   estStepSize: 2
	               },
	               label: {
	                   fill: 'black'
	               }
	           }
	       ],
	       series: [
	                {
	                    type: 'radar',
	                    xField: categoryField,
	                    yField: dataField,
	                    animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
	                    style: {
	                        fillStyle: 'rgba(0,255,0,0.2)',
	                        strokeStyle: 'rgba(0,0,0,0.8)',
	                        lineWidth: 1
	                    }
	                }
	            ],
		   
		});
	},
});
Ext.define('SenchaCon2013Demo.controller.AreaBar', {
	extend : 'Ext.app.Controller',
	xtype: 'areabarcontroller',
	config: {
		refs: {
			'initController': 'initcontroller',
			'mainController': 'maincontroller',
		}
	},
	
	launch: function(){
	},
	
	createAreaChart: function(store,chartIndex,groupByBarArray) {
		var obj = SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex];
		if (obj != undefined){
			if (obj.getLegend() != undefined){
				obj.getLegend().destroy();
			}		
			obj.destroy();
		}
		if (groupByBarArray == undefined){
			this.createAreaChartGroupByNone(store,chartIndex);
		}
		else {
			SenchaCon2013Demo.app.groupByValueBar = new Array();
			for (i = 0; i < groupByBarArray.length; i++){
				SenchaCon2013Demo.app.groupByValueBar[i] = 'groupByBar' + (i+1);
			}
			if (groupByBarArray.length != 0 && groupByBarArray[groupByBarArray.length - 1] != 'other'){
				groupByBarArray[groupByBarArray.length] = "Other";
				SenchaCon2013Demo.app.groupByValueBar[SenchaCon2013Demo.app.groupByValueBar] = "Other";
			}	
			if (groupByBarArray.length == 2){
				this.createAreaChartGroupBy(store,chartIndex, groupByBarArray);
			} else if (groupByBarArray.length == 3){
				this.createAreaChartGroupBy(store,chartIndex, groupByBarArray);
			} else if (groupByBarArray.length == 4){
				this.createAreaChartGroupBy(store,chartIndex, groupByBarArray);
			} else if (groupByBarArray.length == 5){
				this.createAreaChartGroupBy(store,chartIndex, groupByBarArray);
			}			
		}	
		
	},
	
	createAreaChartGroupByNone: function(store,chartIndex) {
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
		    flex: 1,
		    store: store,
		    shadow: true,
		    insetPadding: {top: 15, left: 0, right: 0, bottom: 25},
		    animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
		    innerPadding: {top: 15, left: 0, right: 0, bottom: 25},
		   // interactions: ['panzoom'],
		    
	    	axes: [
	    	       {
	    	    	   	type: 'numeric',
	    	    	   	position: 'left',
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',    	    	   	
	    	       		},
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	minimum: 0,
	    	    	   	maximum: SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
	    	            	 type: 'area',
	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	            	 yField: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	            	 axis: 'bottom',
	    	            	 highlight: true,
	    	            	 showInLegend: false,
	    	            	 shadow: true,
	    	            	 animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
	    	            	 style: {
	    	            		 stroke: 'black',
	    	                     fillOpacity: 0.8,
	    	            	 		smooth: true,
	    	             	 },
	    	             	 subStyle: {
	    	             			fill: ["#115fa6"]
	    	             	 }
	    	              }
	    	           ]
		});
	},		
	createAreaChartGroupBy: function(store, chartIndex, groupByBarArray){
		SenchaCon2013Demo.app.newChart[SenchaCon2013Demo.app.currentActivePanelIndex] = Ext.create("Ext.chart.CartesianChart", {
		    id: 'chart'+SenchaCon2013Demo.app.currentActivePanelIndex,
		    flipXY: false,
		    flex: 1,
		    store: store,
		    shadow: true,
		    animate: { duration: SenchaCon2013Demo.app.animateSpeed, delay: SenchaCon2013Demo.app.animateSpeed/2, easing: 'ease' },
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
	    	    	   	maximum: SenchaCon2013Demo.app.Ymax[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	title: {
	   						text: SenchaCon2013Demo.app.dataFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',
	   					},	   					
	    	       },
	    	       {
	    	    	   	type: 'category',
	    	    	   	position: 'bottom',
	    	    	   	label: {fontFamily: 'Helvetica', color: '#4270A2'},
	    	       		fields: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	    	   	style: {
	    	    	   		strokeStyle: 'black',
	    	    	   		shadowColor: 'black',
	    	       		},
	    	       		title: {
	   						text: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	   						strokeStyle: '#4270A2',
	   						fillStyle: '#4270A2',
	   						shadowColor: 'black',	    	    	   	
	   					},
	    	       }
	    	    ],
	    	    series: [
	    	             {
	    	            	 type: 'area',
	    	            	 xField: SenchaCon2013Demo.app.categoryFieldValues[SenchaCon2013Demo.app.currentActivePanelIndex],
	    	            	 yField: SenchaCon2013Demo.app.groupByValueBar,
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
Ext.define("SenchaCon2013Demo.store.TempStore", {
	extend : 'Ext.data.Store',
	requires: ['SenchaCon2013Demo.model.DataModel'],
	config: {
		model: 'SenchaCon2013Demo.model.DataModel',
		proxy: {
			type: 'localstorage',
			id: 'tempstore'
		}
	}
})
Ext.define("SenchaCon2013Demo.store.UserSettings4", {
	extend : 'Ext.data.Store',
	requires: ['SenchaCon2013Demo.model.UserSettings'],
	config: {
		model: 'SenchaCon2013Demo.model.UserSettings',
		proxy: {
			type: 'localstorage',
			id: 'usersettings4'
		}
	}
})
Ext.define("SenchaCon2013Demo.store.UserSettings3", {
	extend : 'Ext.data.Store',
	requires: ['SenchaCon2013Demo.model.UserSettings'],
	config: {
		model: 'SenchaCon2013Demo.model.UserSettings',
		proxy: {
			type: 'localstorage',
			id: 'usersettings3'
		}
	}
})
Ext.define("SenchaCon2013Demo.store.UserSettings2", {
	extend : 'Ext.data.Store',
	requires: ['SenchaCon2013Demo.model.UserSettings'],
	config: {
		model: 'SenchaCon2013Demo.model.UserSettings',
		proxy: {
			type: 'localstorage',
			id: 'usersettings2'
		}
	}
})
Ext.define('SenchaCon2013Demo.view.BottomPlaybackToolbar', {
	extend: 'Ext.Toolbar',
	xtype: 'bottomplaybacktoolbar',
	requires: [
	           'Ext.Toolbar',
	           'SenchaCon2013Demo.view.Slider0',
	           'SenchaCon2013Demo.view.Slider1',
	           'SenchaCon2013Demo.view.Slider2',
	           'SenchaCon2013Demo.view.Slider3',
	           'SenchaCon2013Demo.view.Slider4',
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
Ext.define("SenchaCon2013Demo.store.UserSettings1", {
	extend : 'Ext.data.Store',
	requires: ['SenchaCon2013Demo.model.UserSettings'],
	config: {
		model: 'SenchaCon2013Demo.model.UserSettings',
		proxy: {
			type: 'localstorage',
			id: 'usersettings1'
		}
	}
})
Ext.define('SenchaCon2013Demo.view.TopTwoPanelLayout', {
	extend: 'Ext.Panel',
	xtype: 'toptwopanellayout',
	requires: [
	           'SenchaCon2013Demo.view.Panel1',
	           'SenchaCon2013Demo.view.Panel2'
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
Ext.define('SenchaCon2013Demo.view.BottomTwoPanelLayout', {
	extend: 'Ext.Panel',
	xtype: 'bottomtwopanellayout',
	requires: [
	           'SenchaCon2013Demo.view.Panel3',
	           'SenchaCon2013Demo.view.Panel4',
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
Ext.define('SenchaCon2013Demo.view.FourPanelLayout', {
	extend: 'Ext.Panel',
	xtype: 'fourpanellayout',
	requires: [
	           'SenchaCon2013Demo.view.TopTwoPanelLayout',
	           'SenchaCon2013Demo.view.BottomTwoPanelLayout'
	],
	config: {
		layout: {type: 'vbox',},
		autoShow: true,
		id: 'fourpanellayout',
		style:'margin:10px; border-radius:10px;',
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
Ext.define('SenchaCon2013Demo.view.Main', {
	extend: 'Ext.Container',
	xtype: 'senchademomain',
	requires: [
	           'SenchaCon2013Demo.view.TitleBar',
	           'SenchaCon2013Demo.view.FourPanelLayout',
	           'SenchaCon2013Demo.view.BottomPlaybackToolbar'
	],
	config: {
		fullscreen: true,
		hidden: false,
		style: 'background: white;',
		layout: {type: 'vbox'},
		items: [
		        {
		        	docked: 'top',
		        	xtype: 'senchademotitlebar'
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


