({
    callServer: function(component,method,callback,params){
        var action= component.get(method);
        if(params){
            action.set(params);
        }
        action.setCallback(this,function(response){
            var state= response.getState();
            if(state === "SUCCESS"){
                callback.call(this,response.getReturnValue());
            } else if(state === "ERROR"){
                alert("error occured");
            }
        });
        $A.enqueueAction(action);
    }
})