import { Component, OnInit } from '@angular/core';
import { AccountaService } from 'src/app/servicea/accounta.service';
import { Accounta } from 'src/app/modela/accounta';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent implements OnInit {

  listAccount : Accounta[] = [];
  showDetail : boolean = false;
  selectedAccount: Accounta = new Accounta();
  p : number = 1;
  constructor(private dataService : AccountaService, private route: ActivatedRoute,  private router: Router) { 
  }

  ngOnInit() {
    this.route.params.subscribe(
      params=>{
        let customer:string = params['customer'];
        this.loadData(customer);
      }
    );
  }

  selectAccount(account: Accounta) {
    let copyAccount = new Accounta;
    copyAccount.idaccount = account.idaccount;
    copyAccount.norek = account.norek;
    copyAccount.pin = account.pin;
    copyAccount.balance = account.balance;
    copyAccount.opendate = account.opendate;
    copyAccount.status = account.status;
    copyAccount.customer = account.customer;
    this.selectedAccount = copyAccount;
    console.log(this.selectedAccount);
    this.showDetail = true;
    // this.formAccount.updateData();
  }


  loadData(customer?){
    this.dataService.getById(customer).subscribe(response=>{
      console.log(JSON.stringify(response));
      Object.assign(this.listAccount, response['values']);
    },(err)=>{
      console.log('Error'+JSON.stringify(err));
    });
  }


  prosesResult(result){
    if(result){
      this.showDetail = false;
      this.loadData();
    }
  }

  viewTransaction(account : Accounta){
    this.router.navigate(['transaksia',{account: account.idaccount}]);
   }

   changeStatus(account : Accounta){
    this.router.navigate(['statusa', {accounta: account.idaccount}])
  }
}
