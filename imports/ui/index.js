import './index.html'
import { Session } from 'meteor/session'
import { UsersCollection } from '../db/UsersCollection';


Template.index.onCreated( function () {
       
        var currentUser=Session.get('currentUser');
        if(currentUser){
            //FlowRouter.go('app',{email:email});
            FlowRouter.go('app');
        }
        

});
  
