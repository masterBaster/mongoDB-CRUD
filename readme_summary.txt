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

8. focus on 3 moongose method
    -char.remove() refers to single instance of the model, record;
    -MarioChar.remove() refers to whole MarioChar collection (criteria 'Mario');
    -MarioChar.findOneAndRemove() refers to first one witch matech our criteria and remove just that one;

8.1 the process:
    - create and save new record to the db;
    - use findOneAndRemove() to remove record;
    - try to findOne in the db (the one we just removed);
    - assert that the result is null;

9. various mongoose method:
    -char.update();
    -MarioChar.update();
    -MarioChar.findOneAndUpdate();

9.1 the process:
    - create and save new record to the db;
    - use findOneAndUpdate() to update the name of a record;
    - try to findOne in the db (the one we just updated);
    - assert that the result has the updated property value;

