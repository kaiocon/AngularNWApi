import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
    private http : HttpClient
  ) {

  }
  myfunction(event) {
    alert("Click!");
  }
}
