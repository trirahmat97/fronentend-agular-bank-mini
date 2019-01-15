import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountaService } from 'src/app/servicea/accounta.service';
import { Accounta } from '../../modela/accounta';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

@Component({
  selector: 'app-add-balance',
  templateUrl: './add-balance.component.html',
  styleUrls: ['./add-balance.component.css']
})
export class AddBalanceComponent implements OnInit {

  accountFormGroup: FormGroup;
  constructor(private accountService: AccountaService, private formBuilder: FormBuilder, private route : Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
  this.accountFormGroup = this.formBuilder.group({
    norek: ['', Validators.required],
    amount : ['',Validators.required]    
  });
}

submit(){
    let account = new Accounta();
    account.norek = this.accountFormGroup.controls['norek'].value;
    account.amount = this.accountFormGroup.controls['amount'].value;
    this.accountService.gettopup(account).subscribe((res)=>{
      if(res['status'] == 14){
        swal(res['values'], "", "info"); 
        return false;
      }else if(res['status']== 200){
        // swal(res['values'], "", "success"); 
        // this.route.navigate(['accounta']);
        if(confirm(res['values'])){
          this.accountService.accounttopup(account).subscribe((res)=>{
            swal(res['values'], "", "success"); 
            this.route.navigate(['accounta']);
          }, (err)=>{
            console.log(err);
          });
        }else{
          swal("you can cenceled topup", "", "info"); 
          return false;
        }
      }
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }
 
  }