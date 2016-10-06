({
    
    doInit: function(component,event,helper) {
        helper.callServer(component,"c.getMedia",function(response){
            var defaultSound = component.get('v.sound');
            var opts = [];
            for (var i=0; i<response.length; i++) {
                opts.push({
                    label : response[i].Name,
                    value: response[i].fileUrl__c
                });
                if (opts[i].label == defaultSound) {
                    opts[i].selected = true;                   
                    helper.setSound(component,opts[i].value); 
                }
            }
            component.find("soundSelector").set("v.options", opts);
        });
        
        
    },
    
    handleClick : function(component, event, helper) {
        
        helper.buttonDown(component,helper);
    },
    
    onPlaybackEnded : function(component, event, helper) {
        helper.buttonUp(component,helper);
    },
    
    handleChange : function(component, event, helper) {
        var soundUrl =  component.find("soundSelector").get('v.value');
        helper.setSound(component,soundUrl);
    }
    
    
})