import { Template } from 'meteor/templating';

import './main.html';


Template.navbar.events({
    'click .logout':function (event){
        Session.set('currentUser',null);
    }
          
});
