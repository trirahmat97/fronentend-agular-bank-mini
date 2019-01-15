import { Component, OnInit } from '@angular/core';
import {Login} from '../../model/login';
import {ServiceLoginService} from '../../service/service-login.service'

import { Router } from '@angular/router';

import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: ServiceLoginService, private router: Router ) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();

    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    let login = new Login;
    login.username = username;
    login.password = password;

    console.log(username, password);

    this.Auth.getUserDetail(login).subscribe((res)=>{
      if(res['values'].status == 1 && res['values'].level == 2){
        this.Auth.setLoggedIn(true);
        sessionStorage.setItem('user', res['values'].idcustomer);
        this.router.navigate(['dashboardu']);
      }else if(res['values'].status == 1 && res['values'].level == 1){
        this.Auth.setLoggedIn(true);
        sessionStorage.setItem('admin', res['values'].idcustomer);
        this.router.navigate(['dashboarda']);
      }else{
        this.router.navigate(['login']);
        swal("username or password wrong!", "", "error"); 
      }
    }, (err)=>{
      console.log(JSON.stringify(err));
    })

  }

  register(){
    this.router.navigate(['register']);
  }

}
