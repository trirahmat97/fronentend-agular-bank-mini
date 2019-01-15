import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Account} from '../../model/account';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-ubahpin',
  templateUrl: './ubahpin.component.html',
  styleUrls: ['./ubahpin.component.css']
})
export class UbahpinComponent implements OnInit {

  constructor(private fb : FormBuilder, private serv : CustomerService, private route: Router) { }
  data = [];
  account = new Account();
  angForm : FormGroup;

  ngOnInit() {
    this.loadData();
    this.createForm();
  }

  createForm(){
    this.angForm = this.fb.group({
      pin: ['', Validators.required],
      newpin: ['', Validators.required],
      confirmpin: ['', Validators.required],
      idaccount: ['', Validators.required]
    });
  }

  loadData(){
    this.serv.getCustomer(sessionStorage.getItem('user')).subscribe((res)=>{
      this.serv.getAccount(res['values'].idcustomer).subscribe((res1) => {        
        Object.assign(this.data, res1['values'][0]);
        console.log( res1['values'][0].idaccount)
        this.angForm.controls['idaccount'].setValue(res1['values'][0].idaccount);
      }, (err1)=>{
        console.log("error account : "+err1);
      })
    }, (err)=>{
      console.log("error customer : "+err);
    });
  }

  ubahPin(){
      let account = new Account;
      let a = this.angForm.controls['newpin'].value;
      let b = this.angForm.controls['confirmpin'].value;

      account.pin = this.angForm.controls['pin'].value;
      account.idaccount = this.angForm.controls['idaccount'].value;
      account.newPin = a;
      this.serv.cekPin(account).subscribe((res)=>{
        if(res['status'] == 14){
          swal(res['values'], "", "info"); 
          return false;
        }else if(a != b){
          swal("please confirm your pin", "", "error"); 
          return false;
        }else{
          if(confirm('are you sure change new pin ?')){
            this.serv.ubahPin(account).subscribe((res1)=>{
              if(res1['status'] == 200){
                swal("Change New Pin Success ", "", "success");
                this.route.navigate(['dashboardu']); 
              }
            }, (err)=>{
              console.log(JSON.stringify(err));
            })
          }else{
            swal("change new pin have been canceled", "", "info");
          }
        }
      }, (err)=>{
        console.log(JSON.stringify(err));
      })
      
  }

  cencelPin(){
    this.route.navigate(['dashboardu']);
  }

}
