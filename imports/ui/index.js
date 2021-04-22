import './index.html'
import { Session } from 'meteor/session'
import { UsersCollection } from '../db/UsersCollection';


Template.index.onCreated( function () {
        Meteor.subscribe('users');

        var currentUser=Session.get('currentUser');
        console.log("-----index"+currentUser);
        if(currentUser){
            var user=UsersCollection.findOne({_id:currentUser});
            email=user.email;
            if(email) FlowRouter.go('app',{email:email});
            
        }
        

});
  
