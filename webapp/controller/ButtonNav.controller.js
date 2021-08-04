sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast", 
], function(Controller, MessageToast, JSONModel, ResourceModel) {
    'use strict';

    return Controller.extend("sap.ux402.ui5.controller.ButtonNav", {
        onInit: function() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("ButtonNav").attachPatternMatched(function(oEvent){
                alert(oEvent.getParameter("arguments").greetMesg);
            }, this);
        },

        onNavBack: function() {
            window.history.go(-1);
        }
        

    });
    
});