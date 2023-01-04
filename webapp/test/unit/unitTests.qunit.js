/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comairbus/zqm_hyc_rpt/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
