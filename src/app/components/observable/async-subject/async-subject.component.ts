import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../../AppService/design-utility.service';

@Component({
  selector: 'app-async-subject',
  standalone: true,
  imports: [],
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.css'
})
export class AsyncSubjectComponent {
  

asyncVideoEmit:any;
constructor(private _utilityService:DesignUtilityService) {
  
}

ngOnInit(): void {
  this._utilityService.asyncVideoEmit.subscribe(res=>{
    this.asyncVideoEmit = res
  })
}

//Video add method
  onVideoAdd(video:any){
    console.log(video);
    this._utilityService.asyncVideoEmit.next(video)
  }


  onComplete(){
    this._utilityService.asyncVideoEmit.complete()
  }
}
