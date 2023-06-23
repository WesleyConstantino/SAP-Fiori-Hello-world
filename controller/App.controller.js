sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
      return BaseController.extend("project1.controller.App", {

        goodbye : function() {
          alert("Goodbye!");
        },

        hello : function() {
          alert("Hello word!");
        }
      });
    }
  );
  
