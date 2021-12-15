import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: string = 'https://mocki.io/v1/e77d1403-4902-4c02-a143-f5a7067eeb94';
  constructor(private httpClient: HttpClient) { }


  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.url).pipe(
      tap(data => console.log(data)),
      map((data: Category[], index: number) => {
        let newArray = data.map((value:Category)=> new Category(value.id, "Kategori: " + value.name)) ;
        return newArray;
      })
    );
  }


}
