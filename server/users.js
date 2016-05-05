"use strict";
var parties_ts_1 = require('../collections/parties.ts');
Meteor.publish('uninvited', function (partyId) {
    var party = parties_ts_1.Parties.findOne(partyId);
    if (!party)
        throw new Meteor.Error('404', 'No such party!');
    //console.log('404 No such party!');
    return Meteor.users.find({
        _id: {
            $nin: party.invited || [],
            $ne: this.userId
        }
    });
});
//# sourceMappingURL=users.js.map