import { Data } from 'src/app/core/models/data.model';
import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { key } from 'key/key';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dogUrl = 'https://api.thedogapi.com/v1';
  catUrl = 'https://api.thecatapi.com/v1';
  breedParams = '/breeds'
  imageParams = '/images/search'
  mainUrl = '';
  private toShowDog: BehaviorSubject<boolean>;
  showDog!: boolean;

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
    this.showDog = showDog;
  }

  setValue(toggleChange: boolean): void {
    this.toShowDog.next(toggleChange);
  }

  getValue(): Observable<boolean> {
    return this.toShowDog.asObservable();
  }

  buildObject(dataFromApi: any){
    let data = new Data();
    data.id = dataFromApi[0]?.id;
    data.img = dataFromApi[0]?.url;
    data.width = dataFromApi[0]?.width;
    data.height = dataFromApi[0]?.height;
    data.breedName = dataFromApi[0]?.breeds[0]?.name;
    data.breedDescription = dataFromApi[0]?.breeds[0]?.description;
    data.breedTemperament = dataFromApi[0]?.breeds[0]?.temperament;
    return data;
  }
  setAnimalToggle(isToShowDog: boolean){
    this.showDog = isToShowDog;
  }
}
