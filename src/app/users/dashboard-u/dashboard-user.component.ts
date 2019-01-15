import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  constructor(private router : Router, private cus : CustomerService) { }
  p : number = 1;
  t : number = 1;
  id = sessionStorage.getItem('user');
  data = [];
  datain = [];
  dataout = [];
  dataacc = [];
  totalin : number = 0;
  totalout : number = 0;
  ngOnInit() {
    // console.log(this.da);
    this.loadData();
  }

  loadData(){
    this.cus.getCustomer(this.id).subscribe((res)=>{
      Object.assign(this.data, res['values']);
      
      this.cus.getAccount(res['values'].idcustomer).subscribe((res1) => {
        Object.assign(this.dataacc, res1['values'][0]);

        //in transaction
        this.cus.getinall(res1['values'][0].idaccount).subscribe((res2)=>{
            Object.assign(this.datain, res2['values']);
            this.totalin = Object.assign(res2['values'].length);
        }, (err2)=>{
          console.log('errot trans in : '+ err2);
        });
        //out transaction
        this.cus.getoutall(res1['values'][0].idaccount).subscribe((res3)=>{
          Object.assign(this.dataout, res3['values']);

          console.log(Object.assign(this.dataout, res3['values']));
          this.totalout = Object.assign(res3['values'].length);
          console.log(this.totalout);
        }, (err3)=>{
          console.log('errot trans in : '+ err3);
        });

      }, (err1)=>{
        console.log("error account : "+err1);
      })
    }, (err)=>{
      console.log("error customer : "+err);
    });
  }


transaksi(){
  this.router.navigate(['transaction']);
}

profile(){
  this.router.navigate(['profile']);
}

logout(){
  sessionStorage.clear();
  this.router.navigate(['']);
}

changePin(){
  this.router.navigate(['ubahpin']);
}
  

}
