import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {


  exlusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>('Rehan');
  videoEmit = new ReplaySubject<any>(3,2000);
  asyncVideoEmit = new AsyncSubject();  

  constructor() { }

  print(val:any, containerId:any){
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el)
  }
}
