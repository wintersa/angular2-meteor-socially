import {loadParties} from './load-parties.ts';
import './parties.ts';
import './users.ts';
import '../collections/methods.ts';

Meteor.startup(loadParties);

// The main.ts file loads all publications at startup
