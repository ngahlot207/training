({
	onSearch : function(component, helper) {
		helper.callServer(component, "c.getBoats",
                              function(response){
                                  console.log("response>> "+response.length);
                                  if(response.length>0){
                                      component.set("v.boats",response);
                                      component.set("v.boatFound",true);
                                  }
                                  else{
                                      component.set("v.boatFound",false);
                                  }
                              },
                          	 {
                                 boatTypeId: component.get("v.boatTypeIdComponent")
                          	 }
                         );
	}
})