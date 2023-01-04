sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.airbus.zqmhycrpt.controller.View1", {
            onInit: function () {

            },
            onSearch:function(oevent) {
                var trackingNo = oevent.getSource().getValue();
                var oFilter= new Filter("TrackingNo",sap.ui.model.FilterOperator.Contains,trackingNo);
                var aFilter = [];
                aFilter.push(oFilter);
                var oTable=this.getView().byId("table");
                oTable.getBinding("items").filter(aFilter);
            }
        });
    });
