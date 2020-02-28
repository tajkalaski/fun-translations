import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';
import { Translator } from '../models/translator';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunTranslationApiService {

  constructor(private http: HttpClient) { }

  getTranslation(text: string, translation: string): Observable<any> {
    const param = new HttpParams().set('text', text);
    return this.http.get('https://api.funtranslations.com/translate/' + translation + '.' + 'json', { params: param });
  }
}
