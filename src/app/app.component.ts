import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import * as firebase from 'firebase';
import { HomePage } from '../pages/home/home';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      let config = {
        apiKey: "AIzaSyAUm6rl83L5OL-9Zakticd3Dkg0iL9xxRs",
        authDomain: "notifire-98793.firebaseapp.com",
        databaseURL: "https://notifire-98793.firebaseio.com",
        storageBucket: "notifire-98793.appspot.com",
        messagingSenderId: "764449584786"
      };
      firebase.initializeApp(config);

     

      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
