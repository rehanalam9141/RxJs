import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'RxJs';

  // observable Array
  postArry = [
    { title:"html", description:"learn about web desigingin"},
    { title:"angular", description:"learn web front end "},
    { title:"Css", description:"learn html pages desining"}
  ]

  //obervable promise
  promise = new Promise((resolve, rejecet)=>{
    setTimeout(()=>{
      resolve('resolve the promise. sending data');
    }, 3000)
  })



  postArryObservables$ = from(this.postArry);

  promiseObservable$ = from(this.promise);

  constructor(){
    this.postArryObservables$.subscribe({
      next: (data)=> console.log(data),
      error: (error)=> console.log(error),
      complete: ()=> console.log("completed done"),
    })

    this.promiseObservable$.subscribe({
      next: (data)=> console.log(data),
      error: (error)=> console.log(error),
      complete: ()=> console.log("completed done! promise done"),
    })
  }


  //Observable DOM Events handler

  ngAfterViewInit(){
    fromEvent(document.getElementById('click-button')!, 'click').subscribe({
    next: (data)=> console.log(data),
    error: (error)=> console.log(error),
    complete: ()=> console.log("completed done! promise done"),
    })
  }
}
