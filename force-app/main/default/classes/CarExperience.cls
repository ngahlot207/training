public class CarExperience {
	@AuraEnabled
    public static List<Car_Experiance__c> getCarExperience(Id carId){
        return [
            SELECT
            Id,
            Name,
            Experience__c,
            LastModifiedDate,
            CreatedDate,
            CreatedBy.Name,
            CreatedBy.SmallPhotoUrl,
            CreatedBy.CompanyName
            FROM Car_Experiance__c
            WHERE Car__c =:carId
            ORDER BY CreatedDate DESC
        ];
    }
}