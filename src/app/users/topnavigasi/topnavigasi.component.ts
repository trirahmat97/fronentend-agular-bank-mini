import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-topnavigasi',
  templateUrl: './topnavigasi.component.html',
  styleUrls: ['./topnavigasi.component.css']
})
export class TopnavigasiComponent implements OnInit {

  constructor(private router : Router, private cus : CustomerService) { }

  id = sessionStorage.getItem('user');
  data = [];
  dataacc = [];
  ngOnInit() {
    // this.loadData();
  }

  loadData(){
    this.cus.getCustomer(this.id).subscribe((res)=>{
      Object.assign(this.data, res['values']);
      this.cus.getAccount(res['values'].idcustomer).subscribe((res1) => {
        Object.assign(this.dataacc, res1['values'][0]);
      }, (err1)=>{
        console.log("error account : "+err1);
      })
    }, (err)=>{
      console.log("error customer : "+err);
    });
  }

  checkLogin(){
    return sessionStorage.getItem('user');
  }

  
  transaksi(){
    this.router.navigate(['transaction']);
  }

  dashboard(){
    this.router.navigate(['dashboardu']);
  }

  history(){
    this.router.navigate(['historiall']);
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }


}
