public with sharing class PanicButtonServerController {
    
    @AuraEnabled
    public static List<SoundClip__c> getMedia() {
        return [SELECT Name,fileUrl__c FROM SoundClip__c];
    } 
}