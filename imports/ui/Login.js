import './Login.html'
import { Meteor } from 'meteor/meteor';
import { UsersCollection } from '../db/UsersCollection';

Template.login.onCreated(function() {
    var currentUser=Session.get('currentUser');
    if(currentUser){
        alert('already logged in : please logout first');
        FlowRouter.go('/');
    }
});

Template.login.events({
    'submit form':function (event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        
        Meteor.call('user.login',{email,password},function(err,id){
            
            if(id){
                Session.set('currentUser',id);
                FlowRouter.go('/');
            }
            if(err){
                alert(err);
            }
        });
    }       
});
