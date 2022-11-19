import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IData } from '../model/viewer.model';
import { key } from 'key/key';



@Injectable({
  providedIn: 'root'
})
export class ViewerService {

  dogUrl = 'https://api.thedogapi.com/v1';
  catUrl = 'https://api.thecatapi.com/v1';
  breedParams = '/breeds'
  imageParams = '/images/search'
  mainUrl = '';
  private toShowDog: BehaviorSubject<boolean>;
  showDog: boolean = true;

  constructor(private http: HttpClient) {
    this.toShowDog = new BehaviorSubject<boolean>(true);
  }

  chooseDogOrCatUrl(){
    if(this.showDog){
      this.mainUrl = this.dogUrl;
    }else{
      this.mainUrl = this.catUrl;
    }
  }

  getImages(): Observable<any[]> {
    this.chooseDogOrCatUrl();
    const httpOptions = {
      headers: new HttpHeaders({
        'x-api-key': this.showDog ? key.dog_key : key.cat_key
      })
    };
    return this.http.get<any[]>(this.mainUrl+this.imageParams, httpOptions);
  }

  getBreedList(): Observable<any[]> {
    this.chooseDogOrCatUrl();
    return this.http.get<any[]>(this.mainUrl+this.breedParams);
  }
  onToggleChange(showDog: boolean){
    console.log('on change in service', showDog);
    this.showDog = showDog;
    //this.chooseDogOrCatUrl();
    //this.get();
  }

  setValue(toggleChange: boolean): void {
    this.toShowDog.next(toggleChange);
  }

  getValue(): Observable<boolean> {
    return this.toShowDog.asObservable();
  }
}
