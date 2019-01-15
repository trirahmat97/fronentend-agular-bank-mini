import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Customer} from '../../model/customer';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() customer: Customer;

  angForm: FormGroup;

  data: Object;
  @Output() result = new EventEmitter();

  constructor(private fb: FormBuilder, private service: CustomerService, private router: Router) { }

 
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

  //set data to form
  setData(customer) {
    if (customer) {
      // this.angForm.controls['id'].setValue(customer.id);
      this.angForm.controls['nip'].setValue(customer.nip);
      this.angForm.controls['firstname'].setValue(customer.firtsname);
      this.angForm.controls['lastname'].setValue(customer.lastname);
      this.angForm.controls['gender'].setValue(customer.gender);
      this.angForm.controls['address'].setValue(customer.address);
      this.angForm.controls['phonenumber'].setValue(customer.phonenumber);
      this.angForm.controls['email'].setValue(customer.email);
      this.angForm.controls['username'].setValue(customer.username);
      this.angForm.controls['password'].setValue(customer.password);
      this.angForm.controls['level'].setValue(customer.level);
      this.angForm.controls['status'].setValue(customer.status);
    }
  }

  onClear() {
    this.angForm.reset();
  }

  //proses form add
  cencelChanges() {
    this.result.emit(true);
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
    customer.password = this.angForm.controls['password'].value;
    customer.level = this.angForm.controls['level'].value;
    customer.status = this.angForm.controls['status'].value;

    this.service.addCustomer(customer).subscribe((res) => {
      console.log(JSON.stringify(res));
      if(res['status'] == 10){
        swal(res['values'], "", "info"); 
      }else if(res['status']== 200){
        swal(res['message'], "", "success"); 
        this.router.navigate(['login']);
      }      
    }, (err) => {
      console.log(JSON.stringify(err));
    });
  }

  login(){
    this.router.navigate(['login']);
  }
}