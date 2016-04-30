import 'reflect-metadata';
import {Component} from 'angular2/core';
import {Parties} from '../../../collections/parties.ts';
import {PartiesForm} from '../parties-form/parties-form.ts';
import {RouterLink} from 'angular2/router';
import {LoginButtons} from 'angular2-meteor-accounts-ui/login-buttons';
// import {AccountUI} from 'meteor-accounts-ui';

@Component({
  selector: 'parties-list',
  templateUrl: '/client/imports/parties-list/parties-list.html',
  directives: [PartiesForm, RouterLink, LoginButtons]
  // directives: [PartiesForm, RouterLink]
})
export class PartiesList {
  parties: Mongo.Cursor<Party>;

  constructor() {
    this.parties = Parties.find();
  }

  removeParty(party) {
    Parties.remove(party._id);
  }
}
