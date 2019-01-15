import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer';
import { Transaksi} from '../model/transaksi';
import { Account} from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomer(id) {
    return this.http.get("http://192.168.1.31:7000/api/customer/"+id);
  }

  //get acccout 
  getAccount(id){
    return this.http.get("http://192.168.1.31:7000/api/account/customer/"+id);
  }

  //get transaksi in date
  getindate(id){
    return this.http.get("http://192.168.1.31:7000/api/transaction/indate/"+id);
  }

  //get transaksi in date
  getoutdate(id){
    return this.http.get("http://192.168.1.31:7000/api/transaction/outdate/"+id);
  }

  //get transaksi in date
  getinall(id){
    return this.http.get("http://192.168.1.31:7000/api/transaction/in/"+id);
  }

  //get transaksi in date
  getoutall(id){
    return this.http.get("http://192.168.1.31:7000/api/transaction/out/"+id);
  }


  addCustomer(customer: Customer) {
    return this.http.post("http://192.168.1.31:7000/api/customer", customer);
  }

  deleteCustomer(id) {
    return this.http.delete("http://192.168.1.31:7000/api/customer/" + id);
  }

  update(customer: Customer) {
    // return this.http.put('http://localhost:4000/customer', customer);
    return this.http.put("http://192.168.1.31:7000/api/customer", customer);
  }

  gettransfer(transaksi: Transaksi){
    return this.http.post("http://192.168.1.31:7000/api/transaction", transaksi);
  }

  insertransfer(transaksi: Transaksi){
    return this.http.post("http://192.168.1.31:7000/api/transaction/transfer", transaksi);
  }

  ubahPin(accout: Account){
    return this.http.put("http://192.168.1.31:7000/api/account/updatePin", accout);
  }

  cekPin(accout: Account){
    return this.http.post("http://192.168.1.31:7000/api/account/checkpin", accout);
  }

  getTransaksiAll(id){
    return this.http.get("http://192.168.1.31:7000/api/transactions?account=" + id);
  }

  //update customer
  updateCustomer(customer: Customer){
    return this.http.put("http://192.168.1.31:7000/api/customer/", customer);
  }

  //transaksi limit
  getTransaksiLimit(){
    return this.http.get("http://192.168.1.31:7000/api/transactions/limit");
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
