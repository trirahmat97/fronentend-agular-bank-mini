import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Login} from '../model/login';

interface myData{
  success: boolean,
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class ServiceLoginService {  
  constructor(private http: HttpClient) { }

  private loggedInStatus : boolean;
  getFromSession(){
    if(sessionStorage.getItem('user')){
      return sessionStorage.getItem('user');
    }else if(sessionStorage.getItem('admin')){
      return sessionStorage.getItem('admin');
    } 
  }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value;
  }

  get isLoggedIn(){
    if(this.getFromSession()){
          return this.loggedInStatus = true;
        }else{
          return this.loggedInStatus = false;
        }
  }

  // login(user: string){
  //   sessionStorage.setItem('user', user);
  // }

  // logina(admin: string){
  //   sessionStorage.setItem('admin', admin);
  // }

  getUserDetail(login : Login){
    return this.http.post<myData>("http://192.168.1.31:7000/api/customer/auth", login);
  }
}
