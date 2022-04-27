@isTest
global class MockResponseGeneratorWebEditor implements HttpCalloutMock{

    global HTTPResponse respond(HTTPRequest req) {
        Decimal VERSION= 51.0;
        HttpResponse res = new HttpResponse();
        res.setHeader('Content-Type', 'application/json');
        if((req.getEndpoint()).equalsIgnoreCase(URL.getSalesforceBaseUrl().toExternalForm() + '/services/data/v'+VERSION+'/tooling/sobjects/LightningComponentBundle') ){
            res.setBody('{"id":"0Rb6F0000008fYVSAY","success":true,"errors":[],"warnings":[],"infos":[]}');
        }
        if((req.getEndpoint()).equalsIgnoreCase(URL.getSalesforceBaseUrl().toExternalForm() + '/services/data/v'+VERSION+'/tooling/query/?q=Select+Id,FilePath,Format,Source+From+LightningComponentResource+Where+LightningComponentBundleId=\'0Rb6F0000008fYVSAY\'+Order+by+LastModifiedDate+DESC')){
            res.setBody('{"size":3,"totalSize":3,"done":true,"queryLocator":null,"entityTypeName":"LightningComponentResource","records":[{"attributes":{"type":"LightningComponentResource","url":"/services/data/v51.0/tooling/sobjects/LightningComponentResource/0Rd6F00000094lMSAQ"},"Id":"0Rd6F00000094lMSAQ","FilePath":"lwc/test406758008_data_123/test406758008_data_123.js","Format":"js","Source":"import { LightningElement } from \'lwc\';\r\n\r\nexport default class DefaultComp extends LightningElement {       \r\n\r\n}"},{"attributes":{"type":"LightningComponentResource","url":"/services/data/v51.0/tooling/sobjects/LightningComponentResource/0Rd6F00000094lOSAQ"},"Id":"0Rd6F00000094lOSAQ","FilePath":"lwc/test406758008_data_123/test406758008_data_123.js-meta.xml","Format":"xml","Source":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<LightningComponentBundle xmlns=\"http://soap.sforce.com/2006/04/metadata\">\n<apiVersion>51.0</apiVersion>\n<isExposed>true</isExposed>\n<masterLabel>test406758008_data_123</masterLabel>\n</LightningComponentBundle>"},{"attributes":{"type":"LightningComponentResource","url":"/services/data/v51.0/tooling/sobjects/LightningComponentResource/0Rd6F00000094lNSAQ"},"Id":"0Rd6F00000094lNSAQ","FilePath":"lwc/test406758008_data_123/test406758008_data_123.html","Format":"html","Source":"<template> \r\n\r\n</template>"}]}');
        }
        
        res.setStatusCode(200);
        return res;
    }
}
