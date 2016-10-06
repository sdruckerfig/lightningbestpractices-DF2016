({
	setActiveCard : function(component, event, helper, cardNumber) {
        var currentActiveCard = component.get('v.activeCard');
		var oldCard = component.get('v.body')[currentActiveCard];
        $A.util.removeClass(oldCard,"card--on");
        
        var newCard = component.get('v.body')[cardNumber];
   
        $A.util.addClass(newCard,"card--on");
        component.set('v.activeCard',cardNumber);
	}
})