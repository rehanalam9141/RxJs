import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {


  dataLenght:any;
  dataGender:any;
  dataNthItem:any;

   dataArry = from([
    { id: 1, name: 'Rehan', gender:'Male'},
    { id: 2, name: 'Asim', gender:'Male' },
    { id: 3, name: 'Deeba', gender:'Female' },
    { id: 4, name: 'Jamshaid', gender:'Male' },
    { id: 5, name: 'Imran', gender:'Male' },
    { id: 6, name: 'Roshna', gender:'Female' },
    { id: 7, name: 'Faraz', gender:'Male' },
    { id: 8, name: 'Alia', gender:'Female' },
  ])

  constructor() {
    
  }

  ngOnInit(): void {
    const source = from(this.dataArry)

    //Example-1: filter by lenght

    source.pipe(
      filter(member => member.name.length > 4),
      toArray()
    ).subscribe(res=>{
      console.log(res)
      this.dataLenght = res
    })

    
    //Example-2: filter by Gender

    source.pipe(
      filter(member => member.gender =='Female'),
      toArray()
    ).subscribe(res=>{
      console.log(res)
      this.dataGender = res
    })

    //Example-3: filter by Nth Item

    source.pipe(
      filter(member => member.id <= 5),
      toArray()
    ).subscribe(res=>{
      console.log(res)
      this.dataNthItem   = res
    })
  }

}
