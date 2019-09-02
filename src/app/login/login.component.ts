import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterBindingModel } from '../models/registermodel';
import { AuthorizeService } from '../authorize.service';
import { LoginModel } from '../models/loginmodel';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm= new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
  });
  constructor(private service:AuthorizeService,private router:Router,private dataSharingService:DataSharingService) { }
  onSubmit(){
    let obj= new LoginModel();
    obj.username=this.profileForm.get('username').value;
    obj.password=this.profileForm.get('password').value;
    this.service.login(obj).subscribe(data=>
      localStorage.setItem('currentUser',JSON.stringify({token:data})));
      this.dataSharingService.isUserLoggedIn.next(true);
      this.dataSharingService.setCurrentUser=JSON.parse(localStorage.getItem('currentUser'));
      this.router.navigate(['products']);
  }

  ngOnInit() {
  }

}
