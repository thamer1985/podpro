import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedbubbleTrend } from '../model/redbubbleTrend';

@Injectable({
  providedIn: 'root'
})
export class RedbubbleService {

  constructor(private http: HttpClient) { }

  gettrends():Observable<RedbubbleTrend[]> {
    return this.http.get<RedbubbleTrend[]>('./../assets/data/database.json');
    
}
}
