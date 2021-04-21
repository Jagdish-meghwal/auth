import { Meteor } from 'meteor/meteor';
import './Signup.html'
import { UsersCollection } from '../db/UsersCollection';


Template.signup.onCreated(function () {
    Meteor.subscribe('users');
});
Template.signup.events({
    'submit form':function (event){
        event.preventDefault();
        var name = $('[name=name]').val();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        alert(name);
        var user=UsersCollection.find({email:email}).fetch();
        
        console.log("--user---"+user);
    if(!user){
        Meteor.call('user.insert',{name,email,password});
        FlowRouter.go('app',{email:email});
    }
    else{
        console.log("already exist"+JSON.stringify(user));
        alert("already exist");
    }
    

    }
          
});
