import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router : Router, private cus : CustomerService) { }

  id = sessionStorage.getItem('admin');
  data = [];
  datalimit = [];
  dataout = [];
  dataacc = [];
  totalin : number = 0;
  totalout : number = 0;
  ngOnInit() {
    // console.log(this.da);
    this.loadData();
    this.loaddata2();
    this.loaddata3();
  }

  loadData(){
    this.cus.getCustomer(this.id).subscribe((res)=>{
      Object.assign(this.data, res['values']);
      
      this.cus.getTransaksiLimit().subscribe((res2)=>{
        Object.assign(this.datalimit, res2['values']);
      }, (err)=>{
        console.log(err);
      });

    }, (err)=>{
      console.log("error customer : "+err);
    });
  }

  loaddata2(){
    this.cus.getTransaksiin().subscribe((res3)=>{
      this.totalin = Object.assign(res3['values'].length);
    }, (err)=>{
      console.log(err);
    });
  }

  loaddata3(){
    this.cus.getTransaksiout().subscribe((res4)=>{
      this.totalout = Object.assign(res4['values'].length);
      console.log(Object.assign(res4['values'].length));
    }, (err)=>{
      console.log(err);
    });
  }


  transaksi(){
    this.router.navigate(['transaction']);
  }

  profile(){
    this.router.navigate(['profilea']);
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  changePin(){
    this.router.navigate(['ubahpin']);
  }
}