import 'reflect-metadata';
import {Pipe} from 'angular2/core';
import {Logger} from '../../../services/logger.ts';

@Pipe({
  name: 'displayName'
})
export class DisplayName {
constructor(private Logger:Logger) {
    this.Logger.log("Load pipes.ts");
}
    transform(user: Meteor.User): string {
      if (!user) {
        return '';
      }

      if (user.username) {
        return user.username;
        //  Logger.log("The username is: " + user.username);
      }

      if (user.emails) {
      return user.emails[0].address;
      }
      return '';
    }

}
