import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from '../../../AppService/design-utility.service';

@Component({
  selector: 'app-interval',
  standalone: true,
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.css'
})
export class IntervalComponent implements OnInit {

  intervalMesg:any;
  timerMesg:any;
  intervalVideoSubscription!:Subscription;
  timerVideoSubscription!:Subscription;
  constructor(private _utilityService:DesignUtilityService) {
    
  }

  ngOnInit(): void {
    const intervalBroadCoastVideo = interval(1000);

    //timer param(delay,interval)
    const timerBroadCoastVideo = timer(5000,1000);

    this.intervalVideoSubscription = intervalBroadCoastVideo.subscribe(res=>{
      console.log(res)
      this.intervalMesg = 'Video '+ res
      this._utilityService.print(this.intervalMesg,'elContainer')
      if(res>=5){
        this.intervalVideoSubscription.unsubscribe()
      }
    })


    this.timerVideoSubscription = timerBroadCoastVideo.subscribe(res=>{
      console.log(res)
      this.timerMesg = 'Video '+ res
      this._utilityService.print(this.timerMesg,'elContainer1')
      if(res>=5){
        this.timerVideoSubscription.unsubscribe()
      }
    })
  }
}
