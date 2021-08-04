sap.ui.define([
    "sap/m/Text"
], function(Text) {
    'use strict';
    return Text.extend("sap.ux402.ui5.control.HoverText", {
        metadata: {
            properties: {
                "isActive": {
                    type: "boolean",
                    defaultValue: false
                },

                "hoverText": {
                    type: "String",
                    defaultText: "Default Text"
                }
            },
            events: {
                "hover": {}
            }
        },

        onmouseover: function() {
            if (this.getIsActive()) {
                this.fireHover({hoverText: this.getHoverText()});
            }
        },
        renderer: function(oRm) {
            oRm.open
        }
    });
});