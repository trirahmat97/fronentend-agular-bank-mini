import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';


@Component({
  selector: 'app-history-user',
  templateUrl: './history-user.component.html',
  styleUrls: ['./history-user.component.css']
})
export class HistoryUserComponent implements OnInit {
  p : number = 1;
  t : number = 1;
  listHistory: MatTableDataSource<any>;
  data = [];
  searchKey: string;

  constructor(private cus: CustomerService) { }

  id = sessionStorage.getItem('user');
  dataout = [];
  dataacc = [];
  datain = [];
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
          this.totalout = Object.assign(res3['values'].length);
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


  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.listHistory.filter = this.searchKey.trim().toLowerCase();
  }

}
