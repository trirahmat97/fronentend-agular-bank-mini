import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnavigasia',
  templateUrl: './topnavigasia.component.html',
  styleUrls: ['./topnavigasia.component.css']
})
export class TopnavigasiaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkLogin(){
    return sessionStorage.getItem('admin');
  }

  customera(){
    this.router.navigate(['customera']);
  }

  dashboard(){
    this.router.navigate(['dashboarda']);
  }

  accounta(){
    this.router.navigate(['accounta']);
  }

  transaksia(){
    this.router.navigate(['transaksia']);
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
