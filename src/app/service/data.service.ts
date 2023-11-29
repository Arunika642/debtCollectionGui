import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Details } from '../details';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   private baseurl: string = "http://localhost:8080/api";

   constructor(private http: HttpClient) { }

   getList(month: string, year:string): Observable<Details[]>{
    return this.http.get<Details[]>("http://localhost:8080/api/debtCollection/pull/"+month+"/"+year);
   }


   createTrack(track: Details): Observable<Details>{
    return this.http.post<Details>(`${this.baseurl}/debtCollection/create`,track);
   }

   update(paymentTrackId: number): Observable<Details>{
    console.log(`${this.baseurl}/debtCollection/update/${paymentTrackId}`);
    return this.http.get<Details>(`${this.baseurl}/debtCollection/update/${paymentTrackId}`)
   }
   getDefaultersList(month: string, year:string): Observable<Details[]>{
    return this.http.get<Details[]>("http://localhost:8080/api/debtCollection/listOfdefaulters/"+month+"/"+year);
   }

  }