import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  standalone: true,
  imports: [],
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.css'
})
export class PromiseComponent implements OnInit {


  DellAvailable(){
    return this
  }

  HpAvailable(){
    return false
  }
  promiseVal:any;

  Dell ={
    brand:'Dell',
    hardDisk:'2Tb',
    color:'Black'
  }
  Hp ={
    brand:'HP',
    hardDisk:'1Tb',
    color:'Silver'
  }
  notAvailable = {
    brand:'Not Abailable',
    status:'failed'
  }
 
  ngOnInit(): void {
  //obervable promise
  let promise = new Promise((resolve, rejecet)=>{
    setTimeout(()=>{
      resolve('resolve the promise. sending data');
    }, 3000)
  })

  // let buyLaptop = new Promise(function(resolve,rejecet){
  //   resolve("promise is resolve")
  // })

  let buyLaptop = new Promise((resolve,rejecet)=>{
    //resolve("promise is resolve");
    //rejecet("promise is rejecet");

    if(this.DellAvailable()){
       setTimeout(()=>{
        //for static data
        //resolve('Dell is purchased');

        //for dynamic data
        resolve(this.Dell);
      }, 3000)
      
    } else if(this.HpAvailable()){
      setTimeout(()=>{
         //for static data
         //resolve("hp is purchased");

         //for dynamic data
        resolve(this.Hp);
      }, 3000)
      
    } else{
      //for static data
      //rejecet("laptop is not available in store");
      
      //for dynamic data
      rejecet(this.notAvailable);
    }
  });

  buyLaptop.then(res =>{
    console.log('then code =>', res)
    this.promiseVal = res;
  }).catch(res =>{
    console.log('catch code =>', res)
    this.promiseVal = res;
  })
  
} 

}

