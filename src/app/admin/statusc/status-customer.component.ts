import { Component, OnInit } from '@angular/core';
import { CustomeraService } from '../../servicea/customera.service';
import { Customera } from '../../modela/customera';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { Accounta } from 'src/app/modela/accounta';

@Component({
  selector: 'app-status-customer',
  templateUrl: './status-customer.component.html',
  styleUrls: ['./status-customer.component.css']
})
export class StatusCustomerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private dataService : CustomeraService, private router: Router, private route: ActivatedRoute) { }
 
  angForm : FormGroup;
 
  ngOnInit() {
    this.route.params.subscribe(
      params=>{
        let customer:string = params['customerc'];
        this.loadData(customer);
      }
    );
    this.createForm();
  }

  createForm(){
    this.angForm = this.formBuilder.group({
      id: ['', Validators.required],
      status : ['',Validators.required],
      name : ['',Validators.required],
    });
  }

  loadData(customer){
    this.dataService.getCustomer2(customer).subscribe(res1=>{
      console.log(JSON.stringify(res1));
      this.angForm.controls['id'].setValue(res1['values'].idcustomer);
      this.angForm.controls['status'].setValue(res1['values'].status);
      this.angForm.controls['name'].setValue(res1['values'].firstname);
    },(err)=>{
      console.log('Error' + JSON.stringify(err));
    });
  }

  submit(){
      let customer = new Customera();
      customer.idcustomer = this.angForm.controls['id'].value;
      customer.status = this.angForm.controls['status'].value;
      this.dataService.update(customer).subscribe((res)=>{
        if(res['status'] == 14){
          swal(res['values'], "", "error"); 
          this.router.navigate(['customera']);
        }else if(res['status']== 200){
          swal(res['values'], "", "success"); 
          this.router.navigate(['customera']);
        }
      },(err)=>{
        alert('error : '+JSON.stringify(err));
      });
    }

}
