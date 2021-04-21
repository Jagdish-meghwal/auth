import './Login.html'
import { Meteor } from 'meteor/meteor';
import { UsersCollection } from '../db/UsersCollection';


Template.login.onCreated(function () {
    Meteor.subscribe('users');
});
Template.login.events({
    'submit form':function (event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        
        var user=!!UsersCollection.find({email:email}).fetch();

    if(user){
        if(user[0].password==password){
            console.log("correct password");
            FlowRouter.go('app',{email:email});
        }
        else{
            alert("wrong password");
        }
        
    }
    else{
        alert("already exist");
    }
    

    }
          
});
