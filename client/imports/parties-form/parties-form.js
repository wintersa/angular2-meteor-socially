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
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var parties_ts_1 = require('../../../collections/parties.ts');
var logger_ts_1 = require('../../../services/logger.ts');
var PartiesForm = (function () {
    function PartiesForm(Logger) {
        this.Logger = Logger;
        var fb = new common_1.FormBuilder();
        this.partiesForm = fb.group({
            name: ['', common_1.Validators.required],
            description: [''],
            location: ['', common_1.Validators.required],
            'public': [false]
        });
    }
    PartiesForm.prototype.addParty = function (party) {
        if (this.partiesForm.valid) {
            if (Meteor.userId()) {
                parties_ts_1.Parties.insert({
                    name: party.name,
                    description: party.description,
                    location: party.location,
                    'public': party.public,
                    owner: Meteor.userId()
                });
                this.partiesForm.controls['name'].updateValue('');
                this.partiesForm.controls['description'].updateValue('');
                this.partiesForm.controls['location'].updateValue('');
                this.partiesForm.controls['public'].updateValue(false);
                this.Logger.log("Party Added:" + party.name);
            }
            else {
                alert('Please log in to add a party');
                this.Logger.log("Please log in to add a party");
            }
        }
    };
    PartiesForm = __decorate([
        core_1.Component({
            selector: 'parties-form',
            templateUrl: '/client/imports/parties-form/parties-form.html'
        }), 
        __metadata('design:paramtypes', [logger_ts_1.Logger])
    ], PartiesForm);
    return PartiesForm;
}());
exports.PartiesForm = PartiesForm;
//# sourceMappingURL=parties-form.js.map