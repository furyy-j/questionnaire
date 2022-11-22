import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  setItem(key: string,item:any):void{
    localStorage.setItem(key, JSON.stringify(item));
  }

  getItem(key: string):any{
    const item = localStorage.getItem(key) as string;
    return JSON.parse(item)
  }
  removeItem(key: string): void{
    localStorage.removeItem(key);
  }
  removeAll(){
    localStorage.clear();
  }

}
