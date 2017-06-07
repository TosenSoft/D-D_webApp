import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Characters } from '../api/characters.js';
import { ReactiveDict } from 'meteor/reactive-dict';

import './thirdSec.html';

var firstN = 0;
var secN = 0;
var trdN = 0;
var fourthN = 0;
var fifthN = 0;
var sixthN = 0;
var seventhN = 0;

Template.thirdSec.onCreated(function bodyOnCreated() {
	Session.setDefault("totalArm", 10);
	Session.setDefault("initiative", 0);
});

Template.thirdSec.helpers({
	totalArmVal() {
		return Session.get("totalArm");
	},
	initiativeVal() {
		return Session.get("initiative");
	},
});

Template.thirdSec.events({
	'click #firstA' (event) {
		firstN = isNaN(event.target.valueAsNumber) ? 0 : event.target.valueAsNumber;
	},
	'focusout #firstA' (event) {
		var currentNum = event.target.valueAsNumber;
		if (!isNaN(currentNum)) {
			if(firstN != 0) {

			}
      	}
	},
	'focusout .inputInit' (event) {
		var numberPressed = 0;
		if (event.which != 8) {
        	numberPressed = event.target.valueAsNumber;
      	} else {
      		numberPressed = 0;
      	}
      	Session.set("initiative", Session.get("initiative") + numberPressed);
	}
});