({
    invokeApi : function(component,params) {
        console.log("params====>"+params);
        if(params){
            const urlEndPoint= "https://maps.googleapis.com/maps/api/geocode/json?address="+params+"&key=AIzaSyB-BkoA6vQPBhtY9CKURseYeNeJOHinETA";
            console.log("urlEndPoint===>"+urlEndPoint);
            fetch(urlEndPoint)
            .then(response => {
                if(response.status === 200) {
                    return response.json();
                } else {
                    /*console.log('Response status is not good', response);
                    if(callback.errorCallback) callback.errorCallback('Error. Response status ' + response.status);*/
                }
            })
            .then(response => {
                console.log('response',  response);
                component.set("{!v.outputValue}",response);
                /*if(response.status) {
                    console.log("response k baad 1");
					if(callback.successCallback) callback.successCallback();
                    console.log("response k baad 2");
                }*/
            })
            .catch(error => {
                console.log('error',  error);
               /* if(callback.errorCallback) callback.errorCallback(error.message);*/
            });
        }
    }
})