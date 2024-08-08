import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  standalone: true,
  imports: [],
  templateUrl: './custom-observable.component.html',
  styleUrl: './custom-observable.component.css'
})
export class CustomObservableComponent {

  watchVideo1:string = 'https://www.youtube.com/watch?v=DumuLATsHnU&list=PLLhsXdvz0qjI68a8tLUUMyXmNhl608mcn&index=12'
  watchVideo2:string = "https://www.youtube.com/watch?v=bS_y2q4GbsQ&list=PLLhsXdvz0qjI68a8tLUUMyXmNhl608mcn&index=13";
  ngOnInit(): void {

    //Example-1
    // const customObs1 = Observable.create((observer) =>{
    //   observer.next('Data Emit 1')
    // })

  }

}
