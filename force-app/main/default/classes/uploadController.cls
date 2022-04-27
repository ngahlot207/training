public without sharing class uploadController {

    @AuraEnabled
    public static List<Link> getDocumentLinks(String docId){
        system.debug('docId => '+docId);
        List<Link> rlinks = new List<Link>();
        List<ContentDocumentLink> links = [
            SELECT LinkedEntityId, LinkedEntity.Name FROM ContentDocumentLink WHERE ContentDocumentId=:docId
        ];
        system.debug('links => '+links);
        for(ContentDocumentLink cdl: links){
            rlinks.add(new Link(cdl, String.valueOf(cdl.LinkedEntityId.getSObjectType())));
        }

        return rlinks;
    }

    @AuraEnabled
    public static String deleteDocuments(List<String> docIds){
        try{
            delete [SELECT Id FROM ContentDocument WHERE Id=:docIds];
            return 'SUCCESS';
        }
        catch(Exception ex){
            throw new AuraHandledException(ex.getMessage());
        }
    }

    class Link{
        @AuraEnabled 
        public ContentDocumentLink link;
        @AuraEnabled 
        public String objectType;
        Link(ContentDocumentLink cdl, String ot){
            this.Link = cdl;
            this.ObjectType = ot;
        }
    }
    
    @AuraEnabled
    public static List<ContentDocumentLink> createDocumentLink(Map<String, Object> params) {
        system.debug('params => '+params);
        List<Object> files = (List<Object>)params.get('files');
        String recordId = (String)params.get('recordId');
        List<ContentDocumentLink> cdLinks = new List<ContentDocumentLink>(); 
        
        for(Object file : files) {
            Map<Object,Object> fileMap = (Map<Object,Object>)file;
            cdLinks.add(new ContentDocumentLink(
            	LinkedEntityId=recordId, 
                ContentDocumentId=(String)fileMap.get('documentId'), 
                ShareType='V', 
                Visibility='InternalUsers'
            ));
        }
        
        insert cdLinks;
        return cdLinks;
    }
    
}