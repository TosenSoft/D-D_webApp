import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Characters } from '../api/characters.js';
import { ReactiveDict } from 'meteor/reactive-dict';

import './fourthSec.html';

Template.fourthSec.onCreated(function bodyOnCreated() {
  Session.setDefault("numAbilities", 0);
});

Template.fourthSec.helpers({
	numAbilities() {
        return Session.get("numAbilities");
    },
});

Template.fourthSec.events({
	'click .check-ability' (event) {
		if(event.currentTarget.checked) {
			Session.set("numAbilities", Session.get("numAbilities") + 1);
		} else {
			Session.set("numAbilities", Session.get("numAbilities") - 1);
		}
	},
});