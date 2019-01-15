import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn : 'root'
})
export class TransactionaService{
    constructor(private http : HttpClient){}

    getTransaction(){
        return this.http.get('http://192.168.1.31:7000/api/transactions');
    }

    getById(account?){
        let params : String="";
        if(account){
          params="?account="+account;
          return this.http.get('http://192.168.1.31:7000/api/transactions'+ params);
        }else{
            return this.http.get('http://192.168.1.31:7000/api/transactions');
        }
        // return this.httpClient.get('http://localhost:8080/account/list'+ params);
      }
}