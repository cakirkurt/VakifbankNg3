import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url:string = 'https://mocki.io/v1/e77d1403-4902-4c02-a143-f5a7067eeb94';
  constructor(private httpClient:HttpClient) { }


  getAllCategories():Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.url).pipe(tap(data=>console.log(data)));
  }


}
