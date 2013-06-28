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