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