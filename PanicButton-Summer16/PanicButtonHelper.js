({
    setSound: function(component,soundUrl) {
        component.set('v.soundUrl',soundUrl);   
    },
    
    playSound: function(component) {
        
        var domCmp = component.find('audioclip');
        var domElem = domCmp.getElement();
        domElem.src = component.get('v.soundUrl');
        
    },
    buttonDown: function(component,helper) {
        var msgElem = component.find('message');
        console.log(msgElem);
        $A.util.removeClass(msgElem,'slds-hide');
        helper.playSound(component);
    },
    buttonUp: function(component,helper) {
        var msgElem = component.find('message');
        $A.util.addClass(msgElem,'slds-hide');    
    },
    callServer : function(component,method,callback,params,cacheable) {
        var action = component.get(method);
        if (params) {
            action.setParams(params);
        }
        if (cacheable) {
            action.setStorable();
        }
        action.setCallback(this,function(response) {
            var state = response.getState();
            if (state === "SUCCESS") { 
                // pass returned value to callback function
                callback.call(this,response.getReturnValue());   
            } else if (state === "ERROR") {
                // generic error handler
                var errors = response.getError();
                if (errors) {
                    console.log("Errors", errors);
                    if (errors[0] && errors[0].message) {
                        throw new Error("Error" + errors[0].message);
                    }
                } else {
                    throw new Error("Unknown Error");
                }
            }
        });
        
        $A.enqueueAction(action);
    }
    
})