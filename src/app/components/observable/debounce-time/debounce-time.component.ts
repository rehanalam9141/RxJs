import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-debounce-time',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './debounce-time.component.html',
  styleUrl: './debounce-time.component.css'
})
export class DebounceTimeComponent {

  reqData:any = null;
  reqData2:any = null;
  status:boolean= false

  @ViewChild('myInput') myInput!:ElementRef;
  @ViewChild('myInput2') myInput2!:ElementRef;

  constructor(private loadingBar:LoadingBarService) {
    
  }

  ngOnInit(): void {
  
  }

  ngAfterViewInit(): void {

    //Example-01 Debounce Time
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(event =>  event.target.value),
      debounceTime(500)
    )
   searchTerm.subscribe(res=>{
    console.log(res)
    this.reqData = res;
    this.loadingBar.start()

    setTimeout(() => {
      this.reqData = null
      this.loadingBar.stop()
    }, 1000);
   })


    //Example-02 Distinct Until Changed
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(event =>  event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    )
   searchTerm2.subscribe(res=>{
    console.log(res)
    this.reqData2 = res;
    this.loadingBar.start()

    setTimeout(() => {
      this.reqData2 = null
      this.loadingBar.stop()
    }, 1000);
   })
  }

}
