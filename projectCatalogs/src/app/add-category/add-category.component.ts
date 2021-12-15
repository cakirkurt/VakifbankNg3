import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private builder:FormBuilder) { }
  addCategoryForm : FormGroup
  category:Category = new Category();

  ngOnInit(): void {
    this.addCategoryForm = this.builder.group({
      name:['',Validators.required]
    });

    
  }

  checkForm(){
    return this.addCategoryForm.get("name")?.hasError('required') &&
           this.addCategoryForm.get("name")?.dirty
  }

  addCategory(){
    if (this.addCategoryForm.valid) {
        this.category= Object.assign(this.category,this.addCategoryForm.value) ;
        console.log(this.category);
    }
  }


}
