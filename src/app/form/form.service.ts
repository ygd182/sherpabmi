import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { FormModel } from './../model/form.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  calculateBMI(data): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                               .set('authentication', 'howdy' );

    const url = 'https://sherpa-careers-assessment.appspot.com/api/calculateBMI';
    return this.http.post(url, { headers: headers }, data);

  }
}
