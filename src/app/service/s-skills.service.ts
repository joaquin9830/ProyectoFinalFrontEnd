import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SSoftskill } from '../model/s-softskill';

@Injectable({
  providedIn: 'root'
})
export class SSkillsService {
  URL = 'https://backend-vjc.onrender.com/soskill/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<SSoftskill[]>{
    return this.httpClient.get<SSoftskill[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<SSoftskill>{
    return this.httpClient.get<SSoftskill>(this.URL + `detail/${id}`);
  }

  public save(skills: SSoftskill): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', skills);
  }

  public update(id: number, skills: SSoftskill): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, skills);

  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
