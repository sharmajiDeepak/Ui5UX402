sap.ui.define(["sap/ui/core/ComponentContainer"
], function(ComponentContainer) {
    'use strict';

    new ComponentContainer({
        name:"sap.ux402.ui5",
        settings: {
            "id": "sap.ux402.ui5"
        },
        async: true
    }).placeAt("content");
    
});