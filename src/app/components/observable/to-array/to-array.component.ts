import { Component } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  standalone: true,
  imports: [],
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.css'
})
export class ToArrayComponent {

  sourceSub!:Subscription
  users = [
    {name:'Rehan', skill:'Angular'},
    {name:'Ahmad', skill:'Css'},
    {name:'Sami', skill:'JavaScript'},
    {name:'Imran', skill:'Html'},
  ]
  ngOnInit(): void {

    
    //Example-1
    const source = interval(1000);
    this.sourceSub = source.pipe(take(5),toArray()).subscribe(res=>{
      console.log(res)
      // if(res >= 8){
      //   this.sourceSub.unsubscribe()
      // }
    })

    //Example-2
    const source2 = from(this.users)
    source2.pipe(toArray()).subscribe(res=>{
      console.log(res)
    })

    //Example-3
    const source3 = of('rehan','alam','ahmad')
    source3.pipe(toArray()).subscribe(res=>{
      console.log(res)
    })
  }

}
