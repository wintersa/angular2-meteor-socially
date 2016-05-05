"use strict";
var parties_ts_1 = require('../collections/parties.ts');
function buildQuery(partyId, location) {
    var isAvailable = {
        $or: [
            { 'public': true },
            {
                $and: [
                    { owner: this.userId },
                    { owner: { $exists: true } }
                ],
            },
            {
                $and: [
                    { invited: this.userId },
                    { invited: { $exists: true } }
                ]
            }
        ]
    };
    if (partyId) {
        return { $and: [{ _id: partyId }, isAvailable] };
    }
    var searchRegEx = { '$regex': '.*' + (location || '') + '.*', '$options': 'i' };
    return { $and: [{ 'location.name': searchRegEx }, isAvailable] };
}
Meteor.publish('parties', function (options, location) {
    // Counts is set in typings, see "typings/Counts.d.ts"
    Counts.publish(this, 'numberOfParties', parties_ts_1.Parties.find(buildQuery.call(this, null, location)), { noReady: true });
    return parties_ts_1.Parties.find(buildQuery.call(this, null, location), options);
});
Meteor.publish('party', function (partyId) {
    return parties_ts_1.Parties.find(buildQuery.call(this, partyId));
});
//# sourceMappingURL=parties.js.map