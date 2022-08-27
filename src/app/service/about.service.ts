import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../model/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  URL = 'https://frontendvj.herokuapp.com/about/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<About[]>{
    return this.httpClient.get<About[]>(this.URL + 'lista');
  }

  public details(id:number): Observable<About>{
    return this.httpClient.get<About>(this.URL +  `detail/${id}`)
  }

  public save(about: About): Observable<any>{
    return this.httpClient.post<any>(this.URL +'create', about);
  }
  public update(id:number, about:About): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, about);
  }
  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/$){id`);
  }
}
