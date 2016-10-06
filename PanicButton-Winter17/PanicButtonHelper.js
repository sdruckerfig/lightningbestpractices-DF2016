({
    
    playSound: function(component) {
        var domElem = component.find('audioclip').getElement();
        domElem.src = component.get('v.soundUrl');
        domElem.play();
        
    },
    buttonDown: function(component,helper) {
        var msgElem = component.find('message');
        $A.util.removeClass(msgElem,'slds-hide');
        helper.playSound(component);
    },
    buttonUp: function(component,helper) {
        var msgElem = component.find('message');
        $A.util.addClass(msgElem,'slds-hide');
    }
    
})