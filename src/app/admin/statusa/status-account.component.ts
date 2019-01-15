import { Component, OnInit } from '@angular/core';
import { CustomeraService } from '../../servicea/customera.service';
import { Customera } from '../../modela/customera';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { Accounta } from 'src/app/modela/accounta';

@Component({
  selector: 'app-status-account',
  templateUrl: './status-account.component.html',
  styleUrls: ['./status-account.component.css']
})
export class StatusAccountComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private dataService : CustomeraService, private router: Router, private route: ActivatedRoute) { }
 
  angForm : FormGroup;
 
  ngOnInit() {
    this.route.params.subscribe(
      params=>{
        let account:string = params['accounta'];
        this.loadData(account);
      }
    );
    this.createForm();
  }

  createForm(){
    this.angForm = this.formBuilder.group({
      id: ['', Validators.required],
      status : ['',Validators.required],
      norek : ['',Validators.required],
    });
  }

  loadData(account){
    this.dataService.getAccount2(account).subscribe(res1=>{
      console.log(JSON.stringify(res1));
      this.angForm.controls['id'].setValue(res1['values'].idaccount);
      this.angForm.controls['status'].setValue(res1['values'].status);
      this.angForm.controls['norek'].setValue(res1['values'].norek);
    },(err)=>{
      console.log('Error' + JSON.stringify(err));
    });
  }

  submit(){
      let account = new Accounta();
      account.idaccount = this.angForm.controls['id'].value;
      account.status = this.angForm.controls['status'].value;
      this.dataService.update2(account).subscribe((res)=>{
        if(res['status'] == 14){
          swal(res['values'], "", "error"); 
          this.router.navigate(['accounta']);
        }else if(res['status']== 200){
          swal(res['values'], "", "success"); 
          this.router.navigate(['accounta']);
        }
      },(err)=>{
        alert('error : '+JSON.stringify(err));
      });
    }

}