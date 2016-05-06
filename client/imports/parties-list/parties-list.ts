import 'reflect-metadata';
import {Component} from 'angular2/core';
import {Parties} from '../../../collections/parties.ts';
import {PartiesForm} from '../parties-form/parties-form.ts';
import {RouterLink} from 'angular2/router';
import {LoginButtons} from 'angular2-meteor-accounts-ui';
import {MeteorComponent} from 'angular2-meteor';
import {ReactiveVar} from 'meteor/reactive-var';
import {PaginationService, PaginatePipe, PaginationControlsCmp} from 'angular2-pagination';
import {Logger} from '../../../services/logger.ts';

@Component({
  selector: 'parties-list',
  viewProviders: [PaginationService],
  templateUrl: '/client/imports/parties-list/parties-list.html',
  directives: [PartiesForm, RouterLink, LoginButtons, PaginationControlsCmp],
  pipes: [PaginatePipe]
})

export class PartiesList extends MeteorComponent{
  parties: Mongo.Cursor<Party>;
  pageSize: number = 10;
  curPage: ReactiveVar<number> = new ReactiveVar<number>(1);
  nameOrder: number = 1;
  partiesSize: number = 0;

  constructor(private Logger:Logger) {
    super();

    this.autorun(() => {
      let options = {
        limit: this.pageSize,
        skip: (this.curPage.get() - 1) * this.pageSize,
        sort: { name: this.nameOrder }
      };

    this.subscribe('parties', options, () => {
        this.parties = Parties.find({}, { sort: { name: this.nameOrder } });
        this.Logger.log("Subscribe to parties that found on the server.");
      }, true);
    });

    this.autorun(() => {
      this.partiesSize = Counts.get('numberOfParties');
      this.Logger.log("Parties counted: " + Counts.get('numberOfParties'));
    }, true);
}

  removeParty(party) {
    Parties.remove(party._id);
    this.Logger.log("Party removed: " + party.name);
  }

  search(value: string) {
    if (value) {
      this.parties = Parties.find({ location: value });
    } else {
      this.parties = Parties.find();
    }
  }

  onPageChanged(page: number) {
    this.curPage.set(page);
  }
}
