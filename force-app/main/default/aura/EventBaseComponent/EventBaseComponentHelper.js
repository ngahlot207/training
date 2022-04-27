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

})