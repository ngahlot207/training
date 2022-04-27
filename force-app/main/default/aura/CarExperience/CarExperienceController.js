({
	doInit : function(component, event, helper) {
		helper.onInit(component, event, helper);
	},
    
    onUserInfoClick : function(component, event, helper){
        var userId= event.currentTarget.getAttribute("data-userId");
        var navEvt= $A.get("e.force:navigateToSObject");
        if(navEvt){
            navEvt.setParams({
                "recordId" : userId
            });
            navEvt.fire();
        } else{
            alert("This event is not supported");
            helper.showToast(component,{
                "title" : "Error",
                "type" : "error",
                "message" : "Event not supported"
            })
        }
    }
})