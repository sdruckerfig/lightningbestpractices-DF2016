({
    doSetActiveCard : function(component, event, helper) {
        
        var currentActiveCard = event.getParams().oldValue || 0;
        var newCardId = event.getParams().value;
        if (typeof newCardId == 'object') {
            newCardId = 0;
        }
        var oldCard = component.get('v.body')[currentActiveCard];
        $A.util.removeClass(oldCard,"card--on");
        
        var newCard = component.get('v.body')[newCardId];
        $A.util.addClass(newCard,"card--on");
    }
})