({
    fetchHungerTypesRecords : function(component,helper){
        helper.callserver(component,"c.getHungerTypes",function(response){
            component.set("v.HungerTypes",response);
        });
        /*var action= component.get("c.getHungerTypes");
        action.setCallback(this,function(data){
            var state = data.getState();
            if(state === "SUCCESS"){
                component.set("v.HungerTypes",data.getReturnValue());
            } else if(state === "ERROR"){
                alert("Error Occured");
            }
        });
        $A.enqueueAction(action);*/
    },
	/*handleonsearchevent : function(component,event,helper) {
		alert('Search button was clicked');
	}*/
    
})