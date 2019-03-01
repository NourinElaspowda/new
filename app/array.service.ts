import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  constructor() { }
  todos:{text:string, completed:boolean, index:number, edit:boolean}[]=[];
 
}
