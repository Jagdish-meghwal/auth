import { Meteor } from 'meteor/meteor';
import { UsersCollection } from '../../imports/db/UsersCollection';

Meteor.methods({
  async 'user.insert'  (newuser) {
    var name=newuser.name;
    var email=newuser.email;
    var password=newuser.password;
    const count= UsersCollection.find({email:email}).count();
    console.log("insert method call");
    if(count==0){
      var id=await UsersCollection.insert({
        name,
        email,
        password,
        createdAt: new Date(),
      });
      return id;
    }
    else{
      console.log("already exist");
      throw new Meteor.Error('already exist');
    }
    
  },

  async 'user.login' (user){
    var email=user.email;
    var password=user.password;
    const count= UsersCollection.find({email:email}).count();
    const olduser=UsersCollection.findOne({email:email});
    console.log('---email--'+email+'---password---'+password);

    if(count!=0){
      if(olduser.password==password){
        console.log('log in'); 
        return olduser._id;             
      }
      else{
        console.log('---------wrong password');
        throw new Meteor.Error('wrong password');      
      }
    }
    else{
      console.log('------not exist');
      throw new Meteor.Error('user not exist');
    } 
  }
});
