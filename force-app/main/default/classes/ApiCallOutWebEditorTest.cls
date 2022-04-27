@isTest
private class ApiCallOutWebEditorTest {
    
    @IsTest
    public static void methodName(){
        integer intuserNumber = Math.abs(Crypto.getRandomInteger());
        String strnewusername = 'test'+intuserNumber +'_data_123';
        Test.setMock(HttpCalloutMock.class, new MockResponseGeneratorWebEditor());
        String responseBody1= ApiCallOutWebEditor.makeAPICall();
        String responseBody2= ApiCallOutWebEditor.makeAPICallOnClick('0Rb6F0000008fYVSAY');
        String responseBody3= ApiCallOutWebEditor.createCompoApiCall(strnewusername);
        String responseBody4= ApiCallOutWebEditor.saveCompApiCall('0Rb6F0000008fYVSAY','lwc/test406758008_data_123/test406758008_data_123.js','js','import { LightningElement } from \'lwc\';\r\n\r\nexport default class DefaultComp extends LightningElement {       \r\n\r\n}');
        String responseBody5= ApiCallOutWebEditor.addFileApiCall('0Rb6F0000008fYVSAY','lwc/test406758008_data_123/test406758008_data_123.js','js');
        String responseBody6= ApiCallOutWebEditor.deleteFileApiCall('0Rd6F00000094lMSAQ');
        String responseBody7= ApiCallOutWebEditor.deleteCompApiCall('0Rb6F0000008fYVSAY');
    }

}
