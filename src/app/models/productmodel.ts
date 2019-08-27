import {CategoryModel} from './categorymodel';

export class ProductModel {
     Id:number;
     Price:number;
     Name:string; 
     Description:string;
     Category:CategoryModel;
     SessionId:string;
  }