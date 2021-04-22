import { Meteor } from 'meteor/meteor';
import { UsersCollection } from '../../imports/db/UsersCollection';

Meteor.methods({
  async 'user.insert'  (user) {
    console.log("insert method call"+JSON.stringify(user));
    var name=user.name;
    var email=user.email;
    var password=user.password;
    const count= UsersCollection.find({email:email}).count();
    console.log("------count---"+count);
    if(count==0){
      await UsersCollection.insert({
        name,
        email,
        password,
        createdAt: new Date(),
      });
    }
    else{
      console.log("already exist");
    }
    console.log("insert method call");
  },

});
