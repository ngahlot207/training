({
	/*handleOnSearchClick : function() {
		alert('Search button is clicked');
	},*/
    getCarType: function(component,helper){
        /*var action = component.get("c.getCarTypes");
        action.setCallback(this,function(data){
            var state= data.getState();
            if(state === "SUCCESS"){
                component.set("v.carTypes",data.getReturnValue());
            } else if(state === "ERROR"){
                alert("Unknown Error");
            }
        });
        $A.enqueueAction(action);
        */
        helper.callServer(component,"c.getCarTypes",function(response){
            component.set("v.carTypes",response);
        });
    }
    
})