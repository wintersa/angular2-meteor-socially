"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('reflect-metadata');
require('zone.js/dist/zone');
var core_1 = require('angular2/core');
var angular2_meteor_auto_bootstrap_1 = require('angular2-meteor-auto-bootstrap');
var router_1 = require('angular2/router');
var parties_list_ts_1 = require('./imports/parties-list/parties-list.ts');
var party_details_ts_1 = require('./imports/party-details/party-details.ts');
// import {LoginButtons} from 'angular2-meteor-accounts-ui';
var logger_ts_1 = require('../services/logger.ts');
var Socially = (function () {
    function Socially(Logger) {
        this.Logger = Logger;
        this.Logger.log("Social WebApp Started version 0.0.1");
    }
    Socially = __decorate([
        core_1.Component({
            selector: 'app',
            providers: [],
            templateUrl: 'client/app.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', as: 'PartiesList', component: parties_list_ts_1.PartiesList },
            { path: '/party/:partyId', as: 'PartyDetails', component: party_details_ts_1.PartyDetails }
        ]), 
        __metadata('design:paramtypes', [logger_ts_1.Logger])
    ], Socially);
    return Socially;
}());
angular2_meteor_auto_bootstrap_1.bootstrap(Socially, [router_1.ROUTER_PROVIDERS, logger_ts_1.Logger, core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' })])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=app.js.map