import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { Search } from '../Appdto/app_dto';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor(private http:HttpClient) {}

  apiUrl = 'https://my-json-server.typicode.com/Uxtrendz/apis/videoList'

  exlusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>('Rehan');
  videoEmit = new ReplaySubject<any>(3,2000);
  asyncVideoEmit = new AsyncSubject();  

 
  print(val:any, containerId:any){
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el)
  }

  getSerches(searchTerm:string):Observable<Search>{
    return this.http.get<Search>(this.apiUrl + '?q='+searchTerm)
  }

}
