import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCXx7TiDtIIoSz4lwaCtIsUrXYjUoRzTUI",
      authDomain: "recipe-book-new.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
