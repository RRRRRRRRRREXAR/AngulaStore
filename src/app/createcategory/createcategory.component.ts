import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoryServiceService } from '../category-service.service';
import { CategoryModel } from '../models/categorymodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {

  constructor(private categoryService:CategoryServiceService,private router:Router) { }
  categoryForm= new FormGroup({
    Name:new FormControl(''),
  });
  ngOnInit() {
  }
  onSubmit(){
    let obj = new CategoryModel;
    obj.Name=this.categoryForm.get('Name').value;
    
    this.categoryService.create(obj).subscribe(data=>{
    console.log(data);});
    this.router.navigate(['products']);
  }
}
