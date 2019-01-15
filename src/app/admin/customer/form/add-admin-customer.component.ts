import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Customera} from '../../../modela/customera';
import { CustomeraService } from '../../../servicea/customera.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

@Component({
  selector: 'app-add-admin-customer',
  templateUrl: './add-admin-customer.component.html',
  styleUrls: ['./add-admin-customer.component.css']
})
export class AddAdminCustomerComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: CustomeraService, private route : Router) { }

  angForm: FormGroup;

   ngOnInit() {
    this.createForm();
  }

  // definisi form
  createForm() {
    this.angForm = this.fb.group({
      nip: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      phonenumber: ['', Validators.required],
      email:['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      level:['2'],
      status:['1']
    });
  }

  addCustomer() {
    let customer = new Customera;
    customer.nip = this.angForm.controls['nip'].value;
    customer.firstname = this.angForm.controls['firstname'].value;
    customer.lastname = this.angForm.controls['lastname'].value;
    customer.gender = this.angForm.controls['gender'].value;
    customer.address = this.angForm.controls['address'].value;
    customer.phonenumber = this.angForm.controls['phonenumber'].value;
    customer.email = this.angForm.controls['email'].value;
    customer.username = this.angForm.controls['username'].value;
    customer.password = this.angForm.controls['password'].value;
    customer.level = this.angForm.controls['level'].value;
    customer.status = this.angForm.controls['status'].value;

    this.service.addCustomer(customer).subscribe((res) => {
      if(res['status'] == 10){
        swal(res['values'], "", "info"); 
      }else if(res['status']== 200){
        swal(res['message'], "", "success"); 
        this.route.navigate(['customera']);
      }
    },(err)=>{
      console.log('error: ' + JSON.stringify(err))
    });
  }

}
