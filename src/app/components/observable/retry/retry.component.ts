import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './retry.component.html',
  styleUrl: './retry.component.css'
})
export class RetryComponent {
  constructor(private http:HttpClient) {
    
  }

  data:any;
  fetching:boolean = false
  status:any = 'No data'
  ngOnInit(): void {
  }

  fetchDetails(){
    this.fetching = true
      this.status = 'Fetched data.....'
    this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments').pipe(
      //retry(5)
      retryWhen(error=> error.pipe(
        delay(3000),
        scan((retryCout) => {
          if(retryCout>5){
            throw error;
          } else{
            retryCout = retryCout + 1
            console.log('retry Count => ' + retryCout)
            this.status = 'Retrying attempt #' + retryCout;
            return retryCout
          }
        },0)
      ))
    ).subscribe(res=>{
      console.log(res)
      this.data = res
      this.status = 'Data Fetched'
      this.fetching = false;
    },error=>{
      console.log(error)
      this.status = 'Problem in data fetching'
      this.fetching = false;
    })
  }
}
