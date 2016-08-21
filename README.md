# ngorient
Angular OrientDB Framework

So far:

    npm install ngorient --save-dev
    npm install orientjs --save-dev
    
    node_modules/.bin/orientjs --password=<rootPassword> db create mydb document plocal
      Creating database with name: mydb
      done.

    node_modules/.bin/ngorient generate migration SpotType[ORestricted] symbol:String name:String
    node_modules/.bin/ngorient generate migration Spot[ORestricted] number:Integer spotType:Link[SpotType]
    
    node_modules/.bin/orientjs -U=admin -P=admin --dbname=mydb migrate up
      Applying all available migrations...
      Applied 2 migration(s):
          m20160821_034725_createSpotType
          m20160821_034735_createSpot

    node_modules/.bin/orientjs -U=admin -P=admin --dbname=mydb migrate down
      Reverting a maximum of 1 migration(s)...
      Reverted 1 migration(s):
          m20160821_034735_createSpot

