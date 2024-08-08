import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DesignUtilityService } from '../../../AppService/design-utility.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.css'
})
export class ReplaySubjectComponent {

  user1List =['Angular1','Angular 2'];
  user2List:any[] = [];
  user3List:any[] =[];

  //subscribe modes
  subscribeMode2:boolean = false;
  subscribeMode3:boolean = false;


  //subscription
  subscription2!:Subscription;
  subscription3!:Subscription;
  intSub!:Subscription;

  methodInterval:boolean =false

constructor(private _utilityService:DesignUtilityService) {
  
}

ngOnInit(): void {
  this._utilityService.videoEmit.subscribe(res=>{
    console.log(res);
    this.user1List.push(res);
  })
}

//Video add method
  onVideoAdd(video:any){
    //console.log(video.value);
    this._utilityService.videoEmit.next(video.value)
  }

  //user 2 subscribe button
  user2Subscribe(){
    if(this.subscribeMode2){
      this.subscription2.unsubscribe();
    }
    else{
      this.subscription2 = this._utilityService.videoEmit.subscribe(res=>{
        this.user2List.push(res);
      })
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }

   //user 3 subscribe button
   user3Subscribe(){
    if(this.subscribeMode3){
      this.subscription3.unsubscribe();
    }
    else{
      this.subscription3 = this._utilityService.videoEmit.subscribe(res=>{
        this.user3List.push(res);
      })
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }

  toggleMethod(){
    const brodcastVideo = interval(1000);
   if(!this.methodInterval){
    this.intSub = brodcastVideo.subscribe(res=>{
      this._utilityService.videoEmit.next('Video '+ res)
    })
   }
   else{
    this.intSub.unsubscribe()
   }
    this.methodInterval = !this.methodInterval
  }

}
