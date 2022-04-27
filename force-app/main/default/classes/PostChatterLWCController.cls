public inherited sharing class PostChatterLWCController {
    
    @AuraEnabled
    public static void postChatter(Id parentRecordId, List<Id> contendDocIdList){
    
        List<ContentVersion> cvList = [select id,contentdocumentid from contentversion where contentdocumentid IN: contendDocIdList];
        List<ContentDistribution> cdList = new List<ContentDistribution>();
        for(ContentVersion idObj : cvList){
            ContentDistribution cd = new ContentDistribution();
            cd.Name = 'Doc'+idObj.contentdocumentid;
            cd.ContentVersionId = idObj.id;
            cd.PreferencesAllowViewInBrowser= true;
            cd.PreferencesLinkLatestVersion=true;
            
            cd.PreferencesNotifyOnVisit=false;
            cd.PreferencesPasswordRequired=false;
            cd.PreferencesAllowOriginalDownload= true;
            cdList.add(cd);
        }
        insert cdList;
        List<FeedItem> FeedItemList= new List<FeedItem>();
        List<ContentDistribution> ContentDistributionList= [Select id, ContentDocumentId, DistributionPublicUrl, ExpiryDate FROM ContentDistribution WHERE ContentDocumentId IN: contendDocIdList];
        for(ContentDistribution cdObj: [Select id, Name, ContentDocumentId, DistributionPublicUrl, ExpiryDate FROM ContentDistribution WHERE ContentDocumentId IN: contendDocIdList]){
            FeedItem post = new FeedItem();
            post.parentid = parentRecordId;
            post.Body = UserInfo.getUserId()+' has posted public link to the doc: '+cdObj.Name+' Link: '+cdObj.DistributionPublicUrl;
            FeedItemList.add(post);
        }
        insert FeedItemList;
    }
}