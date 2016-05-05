import 'reflect-metadata';
import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators, Control} from 'angular2/common';
import {Parties} from '../../../collections/parties.ts';
import {Logger} from '../../../services/logger.ts';

@Component({
  selector: 'parties-form',
  templateUrl: '/client/imports/parties-form/parties-form.html'
})
export class PartiesForm {
  partiesForm: ControlGroup;

  constructor(private Logger:Logger) {
    let fb = new FormBuilder();

    this.partiesForm = fb.group({
      name: ['', Validators.required],
      description: [''],
      location: ['', Validators.required],
      'public': [false]
    });
  }

  addParty(party) {
    if (this.partiesForm.valid) {
        if (Meteor.userId()) {
          Parties.insert({
            name: party.name,
            description: party.description,
            location: party.location,
            'public': party.public,
            owner: Meteor.userId()
          });

        (<Control>this.partiesForm.controls['name']).updateValue('');
        (<Control>this.partiesForm.controls['description']).updateValue('');
        (<Control>this.partiesForm.controls['location']).updateValue('');
        (<Control>this.partiesForm.controls['public']).updateValue(false);

        this.Logger.log("Party Added:" + party.name );

      } else {
        alert('Please log in to add a party');
        this.Logger.log("Please log in to add a party");
      }
    }
  }
}
