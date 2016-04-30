import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Parties} from '../../../collections/parties.ts';
import {RouterLink} from 'angular2/router';
import {RequireUser} from 'angular2-meteor-accounts-ui';

@Component({
  selector: 'party-details',
  templateUrl: '/client/imports/party-details/party-details.html',
  directives: [RouterLink]
})

@RequireUser()
export class PartyDetails {

  party: Party;

  constructor(params: RouteParams) {
    var partyId = params.get('partyId');
    this.party = Parties.findOne(partyId);
  }

  saveParty(party) {
    if (Meteor.userId()) {
      Parties.update(party._id, {
        $set: {
          name: party.name,
          description: party.description,
          location: party.location
        }
      });
    } else {
      alert('Please log in to change this party');
    }
  }
}
