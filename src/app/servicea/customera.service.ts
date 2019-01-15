import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customera } from '../modela/customera';
import { Accounta } from '../modela/accounta';

@Injectable({
  providedIn: 'root'
})
export class CustomeraService {

  constructor(private http: HttpClient) { }

  getCustomer() {
    return this.http.get("http://192.168.1.31:7000/api/customers");
  }

  getCustomer2(id) {
    return this.http.get("http://192.168.1.31:7000/api/customer/"+id);
  }

  getAccount2(id) {
    return this.http.get("http://192.168.1.31:7000/api/account/"+id);
  }

  addCustomer(customer: Customera) {
    return this.http.post("http://192.168.1.31:7000/api/customer", customer);
  }

  update(customer: Customera) {
    return this.http.put("http://192.168.1.31:7000/api/customer/status", customer);
  }

  update2(account: Accounta) {
    return this.http.put("http://192.168.1.31:7000/api/account/status", account);
  }

  //get all transaki in
  getTransaksiin() {
    return this.http.get("http://192.168.1.31:7000/api/transactions/in");
  }

  //get all transaksi out
 getTransaksiout() {
    return this.http.get("http://192.168.1.31:7000/api/transactions/out");
  }
  

}
