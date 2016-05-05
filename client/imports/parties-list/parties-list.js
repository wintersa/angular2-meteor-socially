"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var core_1 = require('angular2/core');
var parties_ts_1 = require('../../../collections/parties.ts');
var parties_form_ts_1 = require('../parties-form/parties-form.ts');
var router_1 = require('angular2/router');
var angular2_meteor_accounts_ui_1 = require('angular2-meteor-accounts-ui');
var angular2_meteor_1 = require('angular2-meteor');
var reactive_var_1 = require('meteor/reactive-var');
var angular2_pagination_1 = require('angular2-pagination');
var logger_ts_1 = require('../../../services/logger.ts');
var PartiesList = (function (_super) {
    __extends(PartiesList, _super);
    function PartiesList(Logger) {
        var _this = this;
        _super.call(this);
        this.Logger = Logger;
        this.pageSize = 10;
        this.curPage = new reactive_var_1.ReactiveVar(1);
        this.nameOrder = 1;
        this.partiesSize = 0;
        this.autorun(function () {
            var options = {
                limit: _this.pageSize,
                skip: (_this.curPage.get() - 1) * _this.pageSize,
                sort: { name: _this.nameOrder }
            };
            _this.subscribe('parties', options, function () {
                _this.parties = parties_ts_1.Parties.find({}, { sort: { name: _this.nameOrder } });
                _this.Logger.log("Subscribe to parties that found on the server.");
            }, true);
        });
        this.autorun(function () {
            _this.partiesSize = Counts.get('numberOfParties');
            _this.Logger.log("Parties counted: " + _this.partiesSize);
        }, true);
    }
    PartiesList.prototype.removeParty = function (party) {
        parties_ts_1.Parties.remove(party._id);
        this.Logger.log("Party removed: " + party.name);
    };
    PartiesList.prototype.search = function (value) {
        if (value) {
            this.parties = parties_ts_1.Parties.find({ location: value });
        }
        else {
            this.parties = parties_ts_1.Parties.find();
        }
    };
    PartiesList.prototype.onPageChanged = function (page) {
        this.curPage.set(page);
    };
    PartiesList = __decorate([
        core_1.Component({
            selector: 'parties-list',
            viewProviders: [angular2_pagination_1.PaginationService],
            templateUrl: '/client/imports/parties-list/parties-list.html',
            directives: [parties_form_ts_1.PartiesForm, router_1.RouterLink, angular2_meteor_accounts_ui_1.LoginButtons, angular2_pagination_1.PaginationControlsCmp],
            pipes: [angular2_pagination_1.PaginatePipe]
        }), 
        __metadata('design:paramtypes', [logger_ts_1.Logger])
    ], PartiesList);
    return PartiesList;
}(angular2_meteor_1.MeteorComponent));
exports.PartiesList = PartiesList;
//# sourceMappingURL=parties-list.js.map