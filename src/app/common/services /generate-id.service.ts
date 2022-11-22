import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateIDService {

  constructor() { }

  generateID(){
    return (Math.floor(Math.random() * (1 - 1234 + 1)) + 1)**4;
  }

}
