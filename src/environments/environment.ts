// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCVEaD5WhSbu4grKosMEOy-_UqDTV9XDgk",
    authDomain: "angular-firebase-lab4.firebaseapp.com",
    databaseURL: "https://angular-firebase-lab4.firebaseio.com",
    projectId: "angular-firebase-lab4",
    storageBucket: "angular-firebase-lab4.appspot.com",
    messagingSenderId: "21177430505",
    appId: "1:21177430505:web:eb9608cf2c47a3558edb78",
    measurementId: "G-WB670Y63TV"
  },
  urlpaises: 'https://restcountries.eu/rest/v2/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
