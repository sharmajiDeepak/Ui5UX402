sap.ui.define(["sap/ui/core/UIComponent","sap/ui/model/json/JSONModel", "sap/ui/model/resource/ResourceModel", "sap/ui/Device"
], function(UIComponent, JSONModel, ResourceModel, Device) {
    'use strict';
    
    return UIComponent.extend("sap.ux402.ui5.Component", {
        metadata: {
        manifest: "json"
      },
        init: function() {
            UIComponent.prototype.init.apply(this, arguments);
            this.getRouter().initialize();
            //Initializing Model
            var oData = {
                student: {
                    "name" : "Deepak"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // var oi18nModel = new ResourceModel({
            //     bundleName: "sap.ux402.ui5.i18n.i18n"
            // });
            // this.setModel(oi18nModel, "i18n");

            var oDeviceModel = new JSONModel(Device);
            this.setModel(oDeviceModel, "device");
        }

    });
});