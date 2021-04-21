import './App.html'
import { UsersCollection } from '../db/UsersCollection';


Template.app.onCreated( function () {
        Meteor.subscribe('users');

});
  
Template.app.helpers({
    user() {
        var email=FlowRouter.getParam('email');
        var user=UsersCollection.findOne({email:email});

        if(user && user.name){
            user=user.name;
            return user;
        }
    },
    users(){
        return UsersCollection.find({},{sort: { createdAt: -1 }}).fetch();
    },
        
    
});
  