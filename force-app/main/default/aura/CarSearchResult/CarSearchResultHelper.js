({
	onSearch : function(component, helper) {
		helper.callServer(component, "c.getCars",
                              function(response){
                                  console.log("response>> "+response.length);
                                  if(response.length>0){
                                      component.set("v.cars",response);
                                      component.set("v.carFound",true);
                                  }
                                  else{
                                      component.set("v.carFound",false);
                                  }
                              },
                          	 {
                                 carTypeId: component.get("v.carTypeIdComponent")
                          	 }
                         );
	}
})