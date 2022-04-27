({
	onCarClick : function(component, event, helper) {
		var car= component.get("v.car");
        var evt= component.getEvent("onCarSelect");
        evt.setParams({
            "carId": car.Id
        });
        evt.fire();
        
        var appEvent= $A.get("e.c:CarSelectedApplicationEvent");
        if(appEvent){
            appEvent.setParams({
                "car": car 
            });
            appEvent.fire();
        } else{
            
        }
	}
    
})