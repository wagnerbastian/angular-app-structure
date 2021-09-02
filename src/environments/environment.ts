// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase: {
    config: {
      apiKey: "AIzaSyCyPidUUtmSlrPKRaTl-W1AJuvJbJXMdyo",
  authDomain: "apparchitecture-37d47.firebaseapp.com",
  projectId: "apparchitecture-37d47",
  storageBucket: "apparchitecture-37d47.appspot.com",
  messagingSenderId: "208006190366",
  appId: "1:208006190366:web:586239311c3b244057a50f"
    },
    actionCodeSettings: {
      url: 'http://localhost:5200/demo',
      handleCodeInApp: true
  }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
