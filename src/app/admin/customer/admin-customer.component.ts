import { Component, OnInit } from '@angular/core';
import { CustomeraService } from '../../servicea/customera.service';
import { Customera } from '../../modela/customera';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.css']
})
export class AdminCustomerComponent implements OnInit {

  constructor(private dataService : CustomeraService, private router: Router) { }
  p : number = 1;
  listCustomer : Customera[] = [];
  showDetail : boolean = false;
  showCreated : boolean = false;

  selectedCustomer : Customera = new Customera();
  
  ngOnInit() {
    this.loadData();
  }

  showDetails(){
    this.showDetail = true,
    this.showCreated = false
  }

  loadData(){
    this.dataService.getCustomer().subscribe(response=>{
      console.log(JSON.stringify(response));
      Object.assign(this.listCustomer, response['values']);
    },(err)=>{
      console.log('Error' + JSON.stringify(err));
    });
  }

  prosesResult(result){
    if(result){
      this.showDetail = false;
      this.loadData();
    }
  }
  
  viewAccount(customer : Customera){
    this.router.navigate(['accounta',{customer: customer.idcustomer}]);
  }

  changeStatus(customer : Customera){
    this.router.navigate(['statusc', {customerc: customer.idcustomer}])
  }


}
