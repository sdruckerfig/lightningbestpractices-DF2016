({
    doSetActiveCard : function(component, event, helper) {
        var currentActiveCard = component.get('v.activeCard');
        
        var params = event.getParam('arguments');
        var newCardId = params[0];
        
        var oldCard = component.get('v.body')[currentActiveCard];
        $A.util.removeClass(oldCard,"card--on");
        
        var newCard = component.get('v.body')[newCardId];
        
        $A.util.addClass(newCard,"card--on");
        component.set('v.activeCard',newCardId);
        
    },
    
    doInit: function(component, event, helper) {
        component.setActiveCard(component.get('v.activeCard'));
    }
})