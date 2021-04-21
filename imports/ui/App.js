import './App.html'
import { UsersCollection } from '../db/UsersCollection';


Template.app.onCreated(function() {
        Meteor.subscribe('users');
});
  
Template.app.helpers({
    user() {
        var email=FlowRouter.getParam('email');
        var user=UsersCollection.find({email:email}).fetch();

        if(user && user[0].name){
            user=user[0].name;
            //console.log('user----'+JSON.stringify(user));
            return user;
        }
    },
    users() {
            //console.log("------users data "+UsersCollection.find().fetch());
            return UsersCollection.find().fetch();
    },
        
});
  