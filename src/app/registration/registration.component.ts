import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthorizeService } from '../authorize.service';
import { UserModel } from '../models/usermodel';
import { RegisterBindingModel } from '../models/registermodel';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service:AuthorizeService) { }

  profileForm= new FormGroup({
    Email:new FormControl(''),
    Password:new FormControl(''),
    ConfirmPassword:new FormControl(''),
  });
  ngOnInit() {
  }
  onSubmit(){
    let obj= new RegisterBindingModel();
    obj.Email=this.profileForm.get('Email').value;
    obj.Password=this.profileForm.get('Password').value;
    obj.ConfirmPassword=this.profileForm.get('ConfirmPassword').value;
    this.service.register(obj).subscribe();
    console.log(obj);
  }
}
