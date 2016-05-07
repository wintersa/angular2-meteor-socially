import {Parties} from '../collections/parties.ts';

export function loadParties() {
  if (Parties.find().count() === 0) {

    var parties = [
      {
        'name': 'Dubstep-Free Zone',
        'description': 'Can we please just for an evening not listen to dubstep.',
        'public': true,
        'location': {
          name: 'Palo Alto'
        }
      },
      {
        'name': 'All dubstep all the time',
        'description': 'Get it on!',
        'public': true,
        'location': {
          name: 'Palo Alto'
        }
      },
      {
        'name': 'Savage lounging',
        'description': 'Leisure suit required. And only fiercest manners.',
        'public': false,
        'location': {
          name: 'Palo Alto'
        }
      }
    ];

    for (var i = 0; i < parties.length; i++) {
      Parties.insert(parties[i]);
      console.log("Added party: " + parties[i].name);
    }
    
    // Generate Fake Parties with fake package
    //
    // for (var i = 0; i < 27; i++) {
    //   Parties.insert({
    //     name: Fake.sentence(1),
    //     location: Fake.sentence(1),
    //     description: Fake.sentence(20),
    //     public: true
    //   });
    //   //this.Logger.log("Adding party:" + parties[1]);
    // }
  }
};
