import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedbubbleTrend } from '../model/redbubbleTrend';
import { bubbleLink } from '../model/bubbleLink';

const API="http://localhost:5000/api/";
@Injectable({
  providedIn: 'root'
})
export class RedbubbleService {

  constructor(private http: HttpClient) { }

  gettrends():Observable<RedbubbleTrend[]> {
    return this.http.get<RedbubbleTrend[]>('./../assets/data/database.json');
    
}
getusers():Observable<any[]> {
  return this.http.get<any[]>(API+"users");
}
tagGenerator(link:bubbleLink):Observable<any> {
  return this.http.post<any>(API+"tag",link);
}
}
