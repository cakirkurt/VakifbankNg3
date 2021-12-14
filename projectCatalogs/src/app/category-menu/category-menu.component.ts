import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { categories } from '../models/mocks/categories.mock';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  categories: Category[];

  ngOnInit(): void {
    this.httpClient.get<Category[]>("https://mocki.io/v1/e77d1403-4902-4c02-a143-f5a7067eeb94")
        .subscribe((incomingData:Category[])=>this.categories=incomingData);
    
  }

}
