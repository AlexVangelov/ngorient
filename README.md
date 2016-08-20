# ngorient
Angular OrientDB Framework

###Idea:

ngorient generate layout

ngorient generate model Accounts[ORestricted] user:OUser name:String   
ngorient generate scaffold SpotTypes[ORestricted,OTriggered] account:Account symbol:String description:String
ngorient generate scaffold Spots[ORestricted] account:Account spotType:SpotType number:Integer

ngorient generate migration addAccountNameFulltextIndex[Account]	name:fulltext
ngorient generate migration addSpotTypeAccountSymbolUniqueIndex[SpotType] unique:[account,symbol]
ngorient generate migration addSpotAccountNumberUniqueIndex[Spot] unique:[account,number]

ngorient g model ContactInfo[ORestricted] account:Account country:String city:String state:String postalCode:Integer address:String phone:String email:String 

ngorient g migration onSpotTypeBeforeDeleteTrigger[SpotType] onBeforeDelete:validateNoSpots