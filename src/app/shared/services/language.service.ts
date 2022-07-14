import { Injectable } from '@angular/core';
import { DisplayLanguage } from '../english.constants';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }
  
  changeJP(){
    localStorage.setItem(DisplayLanguage, "jp");
  }
}
