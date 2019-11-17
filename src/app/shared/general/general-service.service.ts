import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  getUsername() {
    return localStorage.getItem('username');
  }
}
