({
    doShow : function(component, event, helper) {
        var args = event.getParam('arguments');
      
        $A.createComponent(   
            "c:modalDialog",     
            {
                "title": args.title,
                "message" : args.message,
                "onclose": component.getReference("c.handleClose"),
                "onconfirm": component.getReference("c.handleClose"),
                "cancelLabel" : ""
            }, 
            function(newObj, status, errorMessage){
                
                //Add the new button to the body array
                
                if (status === "SUCCESS") {
                    var alertBox = component.find("alertbox");
                    var body = alertBox.get('v.body');
                    body.push(newObj);       
                    alertBox.set("v.body", body);            
                }
                
                else if (status === "INCOMPLETE") {
                    
                    console.log("No response from server or client is offline.")
                    
                    // Show offline error
                    
                }  else if (status === "ERROR") {
                        
                        console.log("Error: " + errorMessage);
                        
                        // Show error message
                        
                    }
                
            }
            
        );
    },
    handleClose: function(component,event,helper) {
         var alertBox = component.find("alertbox");
         alertBox.set("v.body",[]);
    }
})