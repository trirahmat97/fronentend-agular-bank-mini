import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-u',
  templateUrl: './footer-u.component.html',
  styleUrls: ['./footer-u.component.css']
})
export class FooterUComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  checkLogin(){
    return sessionStorage.getItem('user');
  }

}
