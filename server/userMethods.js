import { Meteor } from 'meteor/meteor';
import { UsersCollection } from '../imports/db/UsersCollection';

Meteor.methods({
  'user.insert'(user) {
    console.log("insert method call"+JSON.stringify(user));
    var name=user.name;
    var email=user.email;
    var password=user.password;

    var user=!!UsersCollection.find({email:email}).fetch();
    if(!user){
      UsersCollection.insert({
        name,
        email,
        password,
        createdAt: new Date(),
      });
    }
    else{
      console.log("already exist");
    }
    console.log("insert method call"+name);
  },

});
