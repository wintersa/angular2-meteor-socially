BUGFIX For this error

collections/parties.ts (1, 21): Cannot find module 'meteor/mongo'.

Downloaded bugfix meteor 1.3 typings file
https://gist.github.com/tomitrescak/8366ce98f1857e202ea8

  - copy file to
    typings/meteor.d.ts
  
  - include meteor.d.ts file in main.d.ts
    /// <reference path="meteor.d.ts" /> 
