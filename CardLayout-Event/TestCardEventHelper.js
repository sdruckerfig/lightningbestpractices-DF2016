({
	raiseCardChange : function(component,cardNumber) {
        var layout = component.find('myCardLayout');
		var compEvent = layout.getEvent("cardchange");
        compEvent.setParams({cardNumber: cardNumber});
        compEvent.fire();
	}
})