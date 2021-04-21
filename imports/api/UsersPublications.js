import {Meteor}  from 'meteor/meteor';
import {UsersCollection} from '../db/UsersCollection'

Meteor.publish('users', function publishTasks() {
   console.log("-----in publish ");
    return UsersCollection.find({});
  });