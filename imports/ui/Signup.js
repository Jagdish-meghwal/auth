import { Meteor } from 'meteor/meteor';
import './Signup.html'
import { UsersCollection } from '../db/UsersCollection';

Template.signup.onCreated(function() {
    Meteor.subscribe('users');
    var currentUser=Session.get('currentUser');
    if(currentUser){
        alert('already logged in : please logout first');
        FlowRouter.go('/');
    }
});

Template.signup.events({
    'submit form':function (event){
        event.preventDefault();
        var name = $('[name=name]').val();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        
        const count= UsersCollection.find({email:email}).count();
        if(count==0){
            Meteor.call('user.insert',{name,email,password});
            const user=UsersCollection.findOne({email:email});
            alert('user created please login now');
            FlowRouter.go('login');
        }
        else{
            alert('already exist');
        }
    }
          
});
