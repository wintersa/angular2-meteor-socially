import 'reflect-metadata';
import {Pipe} from 'angular2/core';

@Pipe({
  name: 'displayName'
})
export class DisplayName {
  transform(user: Meteor.User): string {
    if (!user) {
      return '';
    }

    if (user.username) {
      return user.username;
    //  console.log("The username is: " + user.username);
    }

    if (user.emails) {
      return user.emails[0].address;
    }
    return '';
  }
}
