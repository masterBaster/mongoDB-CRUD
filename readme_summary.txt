we've already done: 

1. make a connection to the MongoDB using mongoose;
2. set up a simple test enviroment with mocha;
3. create a model and Schema (model is a represents a collection and Schema represents a structure of individual records
in that collection);
4. create a instacne of model and save them to the db;
    -save() method was on a single instacne;
        -myChar = new MarioChar({name: 'Mario'});
        -myChar.save();

5. drop the collection from the db;
6. focus on 2 mongoose methods:
    -find (criteria) find all of records with the name of Mario;
    -findOne (criteria) find the first one with the name of Mario;
7. the find method are on the models...
    -MarioChar.find({name: 'Mario'})