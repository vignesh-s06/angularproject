import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from './response-data';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) {

  }

  getData(){
    return this.http.get<ResponseData[]>('http://universities.hipolabs.com/search?country=INDIA')
  }
  fetchstate():Observable<any>{
    return  this.http.get<any>("http://universities.hipolabs.com/search?country=INDIA");
    }
}
