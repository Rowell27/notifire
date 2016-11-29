/// <reference path="../../fcm.d/index.d.ts" />
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

declare let FCMPlugin:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
    FCMPlugin.onNotification( (data) => {
      if(data.wasTapped)
        alert( JSON.stringify(data) );
      else 
        alert( JSON.stringify(data) );
    }, (msg) => {
        console.log("Notification callback successfully registered");
    }, (e) => {
        console.log("Error registering notification callback: " + e);
    });
    
  }

    registerDevice(){
    //   messaging.getToken()
    //     .then((currentToken)=>{
    //       if(currentToken){
    //         sendTokenToServer
    //       }
    //     })

      FCMPlugin.getToken((token)=>{
        console.log("Acquired Token", token);
        alert("Token: " + token);
      },(e)=>{
        console.log("Unable to get token. Error: ", e);
      });

    }  

}
