({
    handleKeyUp : function(component, event, helper) {
        var locationValue= component.get("v.locationValue");
        helper.invokeApi(component,locationValue).then(console.log("v.outputValue"));
        //alert("v.locationValue:"+locationValue);
    }
})