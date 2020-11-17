import { Component } from '@angular/core';
import firebase  from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor(){
  var firebaseConfig = {
    apiKey: "AIzaSyCELo_T76F_lQ__xMKuV2LItXX-BYvbsXs",
    authDomain: "library-bcdf0.firebaseapp.com",
    databaseURL: "https://library-bcdf0.firebaseio.com",
    projectId: "library-bcdf0",
    storageBucket: "library-bcdf0.appspot.com",
    messagingSenderId: "635776091419",
    appId: "1:635776091419:web:16c342517d66f2860a3fbe",
    measurementId: "G-0XXCEW8GWM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 }
}
