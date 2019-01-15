import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {Accounta} from '../modela/accounta';

@Injectable({
    providedIn: 'root'
})
export class AccountaService {
    constructor(private http: HttpClient){}

    getAccount() {
        return this.http.get("http://192.168.1.31:7000/api/accounts");
    }

    accounttopup(account: Accounta){
        return this.http.put('http://192.168.1.31:7000/api/account/topup', account);
      }

    getById(customer?){
        let params : String="";
        if(customer){
          params="?customer="+customer;
          return this.http.get('http://192.168.1.31:7000/api/accounts'+ params);
        }else{
            return this.http.get('http://192.168.1.31:7000/api/accounts');
        }
        // return this.httpClient.get('http://localhost:8080/account/list'+ params);
      }

    //transaksi limit
  getTransaksiLimit(){
    return this.http.get("http://192.168.1.31:7000/api/transactions/limit");
  }

  gettopup(account: Accounta){
    return this.http.post('http://192.168.1.31:7000/api/account/validate', account);
  }
}