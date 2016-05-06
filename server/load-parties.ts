import {Parties} from '../collections/parties.ts';

export function loadParties() {
  if (Parties.find().count() === 0) {

    var parties = [
      {
        'name': 'Dubstep-Free Zone',
        'description': 'Can we please just for an evening not listen to dubstep.',
        'location': 'Palo Alto',
        'public': true
      },
      {
        'name': 'All dubstep all the time',
        'description': 'Get it on!',
        'location': 'Palo Alto',
        'public': true
      },
      {
        'name': 'Savage lounging',
        'description': 'Leisure suit required. And only fiercest manners.',
        'location': 'San Francisco',
        'public': false
      }
    ];

    for (var i = 0; i < parties.length; i++) {
      Parties.insert(parties[i]);
      console.log("Added party: " + parties[i].name);
      // this.Logger.log("Adding party:" + parties[i]);
    }

    // Generate Fake Parties with fake package
    //
    for (var i = 0; i < 27; i++) {
      Parties.insert({
        name: Fake.sentence(1),
        location: Fake.sentence(1),
        description: Fake.sentence(20),
        public: true
      });
      //this.Logger.log("Adding party:" + parties[1]);
    }
  }
};
