import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  constructor(private http:HttpClient) { }
  getData():Observable<any>{
    let url='https://gorest.co.in/public-api/users'
   // let url='http://dummy.restapiexample.com/api/v1/employees';
    return this.http.get<any>(url);
  }
}
