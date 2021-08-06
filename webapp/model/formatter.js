sap.ui.define([
], function() {
    'use strict';

    return {
        hideLabel: function(sValue) {
            var bValue = true;
            if (sValue === "NoNoNo") {
                bValue = false;
            }
            return bValue;
        }
    }
    
});