import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Customer} from '../../model/customer';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  constructor(private fb: FormBuilder, private service: CustomerService, private router: Router) { }
  id = sessionStorage.getItem('user');
  angForm: FormGroup;
  ngOnInit() {
    this.createForm();
    this.loadData();
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
      level:['', Validators.required],
      status:['', Validators.required],
      idcustomer: ['', Validators.required],
    });
  }

  loadData(){
    let customer = Customer;
    this.service.getCustomer(this.id).subscribe((res)=>{
      this.angForm.controls['nip'].setValue(res['values'].nip);
      this.angForm.controls['firstname'].setValue(res['values'].firstname);
      this.angForm.controls['lastname'].setValue(res['values'].lastname);
      this.angForm.controls['gender'].setValue(res['values'].gender);
      this.angForm.controls['address'].setValue(res['values'].address);
      this.angForm.controls['phonenumber'].setValue(res['values'].phonenumber);
      this.angForm.controls['email'].setValue(res['values'].email);
      this.angForm.controls['username'].setValue(res['values'].username);
      this.angForm.controls['level'].setValue(res['values'].level);
      this.angForm.controls['status'].setValue(res['values'].status);
      this.angForm.controls['idcustomer'].setValue(res['values'].idcustomer);
    }, (err)=>{
      console.log("error customer : "+err);
    });
  }

  addCustomer() {
    let customer = new Customer;
    customer.nip = this.angForm.controls['nip'].value;
    customer.firstname = this.angForm.controls['firstname'].value;
    customer.lastname = this.angForm.controls['lastname'].value;
    customer.gender = this.angForm.controls['gender'].value;
    customer.address = this.angForm.controls['address'].value;
    customer.phonenumber = this.angForm.controls['phonenumber'].value;
    customer.email = this.angForm.controls['email'].value;
    customer.username = this.angForm.controls['username'].value;
    customer.level = this.angForm.controls['level'].value;
    customer.status = this.angForm.controls['status'].value;
    customer.idcustomer = this.angForm.controls['idcustomer'].value;
    this.service.updateCustomer(customer).subscribe((res) => {
      console.log(JSON.stringify(res));
      if(res['status'] == 10){
        alert(res['values']);
      }else{
        alert(res['message']);
      }
    }, (err) => {
      console.log(JSON.stringify(err));
    });
  }

  login(){
    this.router.navigate(['login']);
  }

  dashboard(){
    this.router.navigate(['dashboardu']);
  }

}
