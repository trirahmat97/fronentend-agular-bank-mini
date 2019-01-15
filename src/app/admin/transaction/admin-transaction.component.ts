import { Component, OnInit } from '@angular/core';
import { TransactionaService } from 'src/app/servicea/transactiona.service';
import { Transaksia } from 'src/app/modela/transaksia';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-transaction',
  templateUrl: './admin-transaction.component.html',
  styleUrls: ['./admin-transaction.component.css']
})
export class AdminTransactionComponent implements OnInit {
  p : number = 1;
  constructor(private dataService : TransactionaService, private route: ActivatedRoute,  private router: Router) { }

  listTransaction : Transaksia[] = [];
  showDetail : boolean = false;

  ngOnInit() {
    this.route.params.subscribe(
      params=>{
        let account:string = params['account'];
        this.loadData(account);
      }
    );
  }

  loadData(account?){
    this.dataService.getById(account).subscribe(response=>{
      console.log(JSON.stringify(response));
      Object.assign(this.listTransaction, response['values']);
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

}
