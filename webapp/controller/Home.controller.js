sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment", "sap/ux402/ui5/model/formatter"
], function(Controller, MessageToast, Fragment, formatter) {
    'use strict';

    return Controller.extend("sap.ux402.ui5.controller.Home", {
        formatter: formatter,
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
        },

        handleDialog: function() {
            var oView = this.getView();
                var oDialog = new Fragment.load({
                    id: "myFragment",
                    name:"sap.ux402.ui5.fragments.HelloDialog",
                    controller: this
                }).then(function(oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                });
        },

        closeDialog: function (oEvent) {
                oEvent.getSource().getParent().close();
        }

    });
    
});