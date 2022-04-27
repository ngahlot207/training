const getBMI =function(wieghtInKg, heightInKg){
    try{
        return wieghtInKg/(heightInKg * heightInKg);
    }
    catch(error){
        return undefined;
    }
}

export{getBMI};