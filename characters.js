import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

//create a local DB to store data until the character is ready
//to be inserted into the server DB
export const Characters = new Mongo.Collection(null);
export const CharactersFinal = new Mongo.Collection('finalchar');