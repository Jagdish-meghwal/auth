import './Login.html'
import { Meteor } from 'meteor/meteor';
import { UsersCollection } from '../db/UsersCollection';

Template.login.onCreated(function() {
    Meteor.subscribe('users');
});


Template.login.events({
    'submit form':function (event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        
        const count= UsersCollection.find({email:email}).count();
        const user=UsersCollection.findOne({email:email});

    if(count!=0){
        if(user.password==password){
            Session.set('currentUser',user._id);
            FlowRouter.go('/');
        }
        else{
            alert("wrong password");
        }
        
    }
    else{
        alert("User not exist");
    }
    

    }
          
});
