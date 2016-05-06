import {Parties} from '../collections/parties.ts';
import {Logger} from '../services/logger.ts';

Meteor.publish('uninvited', function (partyId:string) {
  let party = Parties.findOne(partyId);

  if (!party)
    throw new Meteor.Error('404', 'No such party!');
    this.Logger.log('404 No such party!');

  return Meteor.users.find({
    _id: {
      $nin: party.invited || [],
      $ne: this.userId
    }
  });
});
