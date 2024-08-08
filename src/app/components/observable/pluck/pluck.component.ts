import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pluck.component.html',
  styleUrl: './pluck.component.css'
})
export class PluckComponent {

  userlist:any;
  userlist1:any;
  users = [
    { name: 'rehan', skill: 'angular', job: { title: 'Front end Developer', exp: '10 Years' } },
    {name:'ahmad', skill:'dev ops', job: { title: 'Deployment', exp: '2 Years' }},
    {name:'awais', skill:'Ux & UI', job: { title: 'Designer', exp: '5 Years' }},
    {name:'imran', skill:'Api', job: { title: 'Back end Developer', exp: '7 Years' }},
  ]

  
  ngOnInit(): void {

    //Example-1
    from(this.users).pipe(
      //map(data => data.name),
      pluck('name'),
      toArray()
    ).subscribe(res=>{
      console.log(res)
      this.userlist = res;
    })

    //Example-2
    from(this.users).pipe(
      //map(data => data.name),
      pluck('job','title'),
      toArray()
    ).subscribe(res=>{
      console.log(res)
      this.userlist1 = res;
    })
  }

}
