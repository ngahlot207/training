({
	callServer : function(component,method,callback,params) {
		var action= component.get(method);
        console.log("action"+action);
        console.log("params"+params);
        if(params){
            action.setParams(params);
        }
        
        action.setCallback(this,function(response){
            var state= response.getState();
            console.log("state"+state);
            if(state === "SUCCESS"){
                callback.call(this, response.getReturnValue());
            }else if(state === "ERROR"){
                var error= response.getError();
                console.log("Errors"+error);
            }
        });
        $A.enqueueAction(action);
	},
    
    showToast : function(component,event,helper,params){
        var toastEvent = $A.get("e.force:showToast");
        if(toastEvent){
            if(!params){
                toastEvent.setParams({
                    "title" : "Toast Error!",
                    "type" : "error",
                    "message" : "Toast Param Not Defined"
                });
                toastEvent.fire();
            } else {
                toastEvent.setParams(params);
                toastEvent.fire();
           }
        } else {
            alert(params.message);
        }
    }    
})