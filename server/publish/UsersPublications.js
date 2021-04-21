import {Meteor}  from 'meteor/meteor';
import {UsersCollection} from '../../imports/db/UsersCollection'

Meteor.publish('users', function publishTasks() {
   console.log("-----in publish ");
    return UsersCollection.find({});
  });