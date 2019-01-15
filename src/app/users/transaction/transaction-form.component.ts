import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Transaksi} from '../../model/transaksi';
import { CustomerService } from 'src/app/service/customer.service';

import {Account} from '../../model/account';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

  constructor(private fb : FormBuilder, private serv : CustomerService, private route: Router) { }
  data = [];

  account = new Account();
  angForm : FormGroup;

  ngOnInit() {
    this.createForm();
    this.loadData();
  }

  createForm(){
    this.angForm = this.fb.group({
      amount: ['', Validators.required],
      idcard: ['', Validators.required],
      pin: ['', Validators.required],
      amounsign: ['C'],
      accountid: []
    });
  }

  loadData(){
    this.serv.getCustomer(sessionStorage.getItem('user')).subscribe((res)=>{
      this.serv.getAccount(res['values'].idcustomer).subscribe((res1) => {        
        Object.assign(this.data, res1['values'][0]);
        console.log( res1['values'][0].idaccount)
        this.angForm.controls['accountid'].setValue(res1['values'][0].idaccount);
      }, (err1)=>{
        console.log("error account : "+err1);
      })
    }, (err)=>{
      console.log("error customer : "+err);
    });
  }

  addTransfer(){
      let transaksi = new Transaksi;
      transaksi.idcard = this.angForm.controls['idcard'].value;
      transaksi.amount = this.angForm.controls['amount'].value;
      transaksi.amountsign = this.angForm.controls['amounsign'].value;
      transaksi.pin = this.angForm.controls['pin'].value;
      transaksi.accountid = this.angForm.controls['accountid'].value;
      
      this.serv.gettransfer(transaksi).subscribe((res)=>{
        if(res['status'] == 14){
          swal(res['values'], "", "info"); 
        }else if(res['status'] == 200){
          if(confirm(res['values'])){
            this.serv.insertransfer(transaksi).subscribe((res2)=>{
              swal(res2['values'], "", "success"); 
              this.route.navigate(['dashboardu']);
            }, (err2)=>{
              console.log(err2);
            })
          }else{
            swal("you have canceled transfer", "", "error"); 
            return false;
          }
        }

        console.log(res);
      }, (err)=>{
        console.log(JSON.stringify(err));
      })
  }

  cencelTransfer(){
    this.route.navigate(['dashboardu']);
  }

}
