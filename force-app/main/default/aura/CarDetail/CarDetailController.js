({
	doInit : function(component, event, helper) {
        var navEvt= $A.get("e.force:navigateToSObject");
        if(navEvt){
            component.set("v.showCardAction",true);
        }else{
            component.set("v.showCardAction",false);
        }
	},
    onFullDetails : function(component, event, helper) {
        var navEvt= $A.get("e.force:navigateToSObject");
        if(navEvt){
            navEvt.setParams(
                {
                    "recordId": component.get("v.car").Id,
                    "slideDevName": "detail"
                });
            navEvt.fire();
        }else{
            console.log("'e.force:navigateToSObject' does not support in this context");
            helper.showToast(component, {
                "title": "Error",
                "type": "error",
                "message": "Event doesnt support"
            });
        }
    }
})