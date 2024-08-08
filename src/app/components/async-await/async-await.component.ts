import { Component } from '@angular/core';

@Component({
  selector: 'app-async-await',
  standalone: true,
  imports: [],
  templateUrl: './async-await.component.html',
  styleUrl: './async-await.component.css'
})
export class AsyncAwaitComponent {

  constructor() {

    let promise = new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve("Data Received")
      }, 3000);
    })

    async function getData() {
      let response = await promise
      console.log(response)
    }
    getData();



    //Example-1
    //async makes a function return a Promise. await makes a function wait for a Promise.
    // async function getData() {
    //   return 'Data Received'
    // }
    // getData().then(console.log)

   
  }
  

}
