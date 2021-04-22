import { Meteor } from 'meteor/meteor';
import './Signup.html'
import { UsersCollection } from '../db/UsersCollection';

Template.signup.onCreated(function() {
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
        
        Meteor.call('user.insert',{name,email,password},(err,id)=>{
            if(err){
                alert(err);
            }
            else{
                Session.set('currentUser',id);
                FlowRouter.go('/');
            }
        });            
    }

});
