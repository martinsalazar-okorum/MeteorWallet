import { Mongo } from 'meteor/mongo';

export const ContactsCollection = new Mongo.Collection('contacts');

ContactsCollection.allow({
  insert(userId, doc) {
    return true; // permitir inserts desde el cliente
  }
});
