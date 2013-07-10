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