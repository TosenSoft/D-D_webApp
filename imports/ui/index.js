import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Characters } from '../api/characters.js';
import { CharactersFinal } from '../api/characters.js';

import './index.html';
import '../api/characters.js';
import './firstSec.html';
import './secondSec.html';
import './thirdSec.js';
import './fourthSec.js';
import './fifthSec.html';
import './sixthSec.html';
import './seventhSec.html';
import './eigthSec.html';

Template.body.onCreated(function bodyOnCreated() {
	Session.setDefault("newCharacter", false);
});

Template.body.helpers({
	newCharacter() {
		return !Session.get('newCharacter');
	},
	createdCharacters() {
		return CharactersFinal.find({});
	},
	template_name: function() {
		return Session.get("currentTemplate");
	},
});

//body is the body of the html file, not templatename
Template.body.events({
	'click .newChar' (event) {
		Session.set("currentTemplate", 'firstSec');
		Session.set("newCharacter", true);
	},
	'click .nextSec1' (event) {
		// Prevent default browser form submit
    	event.preventDefault();

    	//get the value of the form
    	const target = event.delegateTarget;

    	//insert a character in the local collection
    	Characters.insert({
    		username: Meteor.user().username,
    		createdAt: new Date(),
    		name: target.lastElementChild[0].value,
    		player: target.lastElementChild[1].value,
    		classLevel: target.lastElementChild[2].value,
    		breed: target.lastElementChild[3].value,
    		alignment: target.lastElementChild[4].value,
    		gods: target.lastElementChild[5].value,
    		size: target.lastElementChild[6].value,
    		age: target.lastElementChild[7].value,
    		sex: target.lastElementChild[8].value,
    		height: target.lastElementChild[9].value,
    		weight: target.lastElementChild[10].value,
    		eyes: target.lastElementChild[11].value,
    		hairs: target.lastElementChild[12].value,
    		skin: target.lastElementChild[13].value,
    	});

    	//update and render the new template
    	Session.set("currentTemplate", 'secondSec');
	},
    'click .prevSec2' (event) {
        // Prevent default browser form submit
        event.preventDefault();

        //get the value of the form
        const target = event.delegateTarget;

        //update and render the new template
        Session.set("currentTemplate", 'firstSec');
    },
	'click .nextSec2' (event) {
		// Prevent default browser form submit
    	event.preventDefault();

    	//get the value of the form
    	const target = event.delegateTarget;

    	//update the first collection
    	// Characters.update({

    	// });
    	
    	//update and render the new template
    	Session.set("currentTemplate", 'thirdSec');
        Session.set("totalArm", 10);
        Session.set("initiative", 0);
	},
    'click .prevSec3' (event) {
        // Prevent default browser form submit
        event.preventDefault();

        //get the value of the form
        const target = event.delegateTarget;

        //update and render the new template
        Session.set("currentTemplate", 'secondSec');
    },
	'click .nextSec3' (event) {
		// Prevent default browser form submit
    	event.preventDefault();

    	//get the value of the form
    	const target = event.delegateTarget;

    	//update the first collection
    	// Characters.update({

    	// });
    	
    	//update and render the new template
    	Session.set("currentTemplate", 'fourthSec');
	},
    'click .prevSec4' (event) {
        // Prevent default browser form submit
        event.preventDefault();

        //get the value of the form
        const target = event.delegateTarget;

        //update and render the new template
        Session.set("currentTemplate", 'thirdSec');
        Session.set("totalArm", 10);
        Session.set("initiative", 0);
    },
    'click .nextSec4' (event) {
        // Prevent default browser form submit
        event.preventDefault();

        //get the value of the form
        const target = event.delegateTarget;

        //update the first collection
        // Characters.update({

        // });
        
        //update and render the new template
        Session.set("currentTemplate", 'fifthSec');
    },
    'click .prevSec5' (event) {
        // Prevent default browser form submit
        event.preventDefault();

        //get the value of the form
        const target = event.delegateTarget;

        //update and render the new template
        Session.set("currentTemplate", 'fourthSec');
    },
    'click .nextSec5' (event) {
        // Prevent default browser form submit
        event.preventDefault();

        //get the value of the form
        const target = event.delegateTarget;

        //update the first collection
        // Characters.update({

        // });
        
        //update and render the new template
        Session.set("currentTemplate", 'sixthSec');
    },
    'click .prevSec6' (event) {
        // Prevent default browser form submit
        event.preventDefault();

        //get the value of the form
        const target = event.delegateTarget;

        //update and render the new template
        Session.set("currentTemplate", 'fifthSec');
    },
    'click .nextSec6' (event) {
        // Prevent default browser form submit
        event.preventDefault();

        //get the value of the form
        const target = event.delegateTarget;

        //update the first collection
        // Characters.update({

        // });
        
        //update and render the new template
        Session.set("currentTemplate", 'seventhSec');
    },
    'click .prevSec7' (event) {
        // Prevent default browser form submit
        event.preventDefault();

        //get the value of the form
        const target = event.delegateTarget;

        //update and render the new template
        Session.set("currentTemplate", 'sixthSec');
    },
    'click .nextSec7' (event) {
        // Prevent default browser form submit
        event.preventDefault();

        //get the value of the form
        const target = event.delegateTarget;

        //update the first collection
        // Characters.update({

        // });
        
        //update and render the new template
        Session.set("currentTemplate", 'eigthSec');
    },
    'click .prevSec8' (event) {
        // Prevent default browser form submit
        event.preventDefault();

        //get the value of the form
        const target = event.delegateTarget;

        //update and render the new template
        Session.set("currentTemplate", 'seventhSec');
    },
    'click .nextSec8' (event) {
        // Prevent default browser form submit
        event.preventDefault();

        //get the value of the form
        const target = event.delegateTarget;

        //update the first collection
        // Characters.update({

        // });
        
        //finish the creation and create PDF with values
    }
});
