import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class Welcome implements OnInit {
  const gmailCreds = "Winters@2024";
  const facebookLoginPassword = "Winters@2024";\

  constructor() { }

  ngOnInit() {
    console.log(this.gmailCreds);
    console.log(this.facebookLoginPassword);
  }

}
