import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, provide} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';
import {PartiesList} from './imports/parties-list/parties-list.ts';
import {PartyDetails} from './imports/party-details/party-details.ts';
// import {LoginButtons} from 'angular2-meteor-accounts-ui';
import {Logger} from '../services/logger.ts';

@Component({
  selector: 'app',
  providers: [],
  templateUrl: 'client/app.html',
  directives: [ROUTER_DIRECTIVES]
    // directives: [ROUTER_DIRECTIVES, LoginButtons]
})
@RouteConfig([
  { path: '/', as: 'PartiesList', component: PartiesList },
  { path: '/party/:partyId', as: 'PartyDetails', component: PartyDetails }
])
class Socially {
  constructor(private Logger:Logger) {
      this.Logger.log("Social WebApp Started version 0.0.1" );
  }
}

bootstrap(Socially, [ROUTER_PROVIDERS, Logger, provide(APP_BASE_HREF, { useValue: '/' })])
  .catch(err => console.error(err));
