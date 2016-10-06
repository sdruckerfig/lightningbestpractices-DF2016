({
    doSetActiveCard: function(component, event, helper) {
	  var params = event.getParams();
      helper.setActiveCard(component,event,helper,params.cardNumber);    
    },
    
    doInit: function(component, event, helper) {
        helper.setActiveCard(component,event,helper,component.get('v.activeCard'));
    }
})