import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Data } from '../model/viewer.model';



@Injectable({
  providedIn: 'root'
})
export class ViewerService {
  url = 'https://api.thedogapi.com/v1/images/search';

  constructor(private http: HttpClient) { }

  get(): Observable<Data[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.get<Data[]>(this.url, httpOptions);
  }
}
