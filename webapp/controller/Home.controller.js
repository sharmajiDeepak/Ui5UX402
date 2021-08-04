sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast", 
], function(Controller, MessageToast, JSONModel, ResourceModel) {
    'use strict';

    return Controller.extend("sap.ux402.ui5.controller.Home", {
        onInit: function() {
            
        },
        onBeforeRendering: function() {
         
        },
        onAfterRendering : function() {
            
        },
       
        onExit: function () {},

        handleHello: function () {
            
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sName = this.getView().getModel().getProperty("/student/name");
            var sMessg = oBundle.getText("HelloMessg", [sName]);
            MessageToast.show(sMessg);

            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("ButtonNav");
        },

        onHoverText: function(oEvent) {
                MessageToast.show(oEvent.getParameter("hoverText"));
        }

    });
    
});