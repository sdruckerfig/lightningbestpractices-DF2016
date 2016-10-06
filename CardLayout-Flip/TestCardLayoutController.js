({
	showCard1 : function(component, event, helper) {
        component.find('myCardLayout').setActiveCard(0);
	},
    showCard2 : function(component, event, helper) {
        component.find('myCardLayout').setActiveCard(1);
	},
    showCard3 : function(component, event, helper) {
        component.find('myCardLayout').setActiveCard(2);
	}
})