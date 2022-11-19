import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: any){
    this.storage.setItem(key, JSON.stringify(value));
  }
  get(key: string){
    return JSON.parse(this.storage.getItem(key)!);
  }
  clear(){
    this.storage.clear();
  }
  checkLength(){
    if(Object.keys(localStorage).length > 0){
      return true;
    }
    return false;
  }
  getAllWithoutId(){
    let item;
    let datas: any[] = [];
    Object.keys(localStorage).forEach(data =>
      {
        item = JSON.parse(localStorage.getItem(data)!);
        datas.push(item);
      });
    return datas;
  }
}
