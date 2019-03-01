import { Component} from '@angular/core';
import { ArrayService } from './array.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {

    constructor( private arr:ArrayService) {
  this.arr.todos=this.getTodos();
    console.log(this.arr.todos);
  }
  i :number=0;
  input:string;
  s;
 
  
addTodo(todo){
  if(todo==""){
    alert("Please enter something");
  }
  else{
  this.arr.todos.push({text:todo,completed:false, index:this.i, edit:false});
  console.log(this.arr.todos);
  
  localStorage.setItem('key',JSON.stringify(this.arr.todos));
  this.input="";
  this.i++;
}
}
 

  //s;
 getTodos() {
   this.s=JSON.parse(localStorage.getItem('key'));
  console.log(this.s);
  return this.s==null ? []:this.s;
}


checkboxClicked(value){
  let k:number;
    for(let h=0;h<this.arr.todos.length;h++)
    {
      if(this.arr.todos[h].index==value)
      {
       k=h;
      }
    }
  console.log(k);
  this.s[k].completed=true;
  localStorage.setItem("key",JSON.stringify(this.s));
}


checkboxcom(value){
  let k:number;
    for(let h=0;h<this.arr.todos.length;h++)
    {
      if(this.arr.todos[h].index==value)
      {
       k=h;
      }
    }
  console.log(k);
  this.s[k].completed=false;
  localStorage.setItem("key",JSON.stringify(this.s))
}


  edit(value){
    let k:number;
    for(let h=0;h<this.arr.todos.length;h++)
    {
      if(this.arr.todos[h].index==value)
      {
       k=h;
      }
    }
    console.log(k)
    this.s[k].edit=true;
  localStorage.setItem("key",JSON.stringify(this.s))
  }


save(val,i){
  let k:number;
    for(let h=0;h<this.arr.todos.length;h++)
    {
      if(this.arr.todos[h].index==i)
      {
       k=h;
      }
    }
  console.log(k)
  this.s[k].edit=false;
  this.s[k].text=val
  localStorage.setItem("key",JSON.stringify(this.s))
}


delete(value){
  let k:number;
    for(let h=0;h<this.arr.todos.length;h++)
    {
      if(this.arr.todos[h].index==value)
      {
       k=h;
      }
    }
   this.arr.todos.splice(k,1);
   localStorage.setItem('key',JSON.stringify(this.arr.todos));
   console.log(this.arr.todos);
}
}



