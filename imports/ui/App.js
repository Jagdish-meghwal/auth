import './App.html'
import { UsersCollection } from '../db/UsersCollection';
import { Session } from 'meteor/session'

Template.app.onCreated( function () {
        Meteor.subscribe('users');
        var currentUser=Session.get('currentUser');
        if(!currentUser) FlowRouter.go('/');

});
  
Template.app.helpers({
    user() {
        var currentUser=Session.get('currentUser');
        var user=UsersCollection.findOne({_id:currentUser});
        if(user && user.name){
            user=user.name;
            return user;
        }
    },
    users(){
        var currentUser=Session.get('currentUser');
        if(currentUser){
            return UsersCollection.find({},{sort: { createdAt: -1 }}).fetch();
        }
        
    },
        
    
});
  
