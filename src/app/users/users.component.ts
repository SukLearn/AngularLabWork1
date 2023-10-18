import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @Input() users: User[] = [];




//   @Output() parentFunction: EventEmitter<any> = new EventEmitter();
//   sendData(){
    
//  let users =[{
//       name: 'Luk',
//       age: 21,
//       email: '21100210@ibsu.edu.ge'
//     },
//     {
//       name: 'gio',
//       age: 22,
//       email: '21100210@ibsu.edu.ge'
//     },
//     {
//     name: 'nik',
//     age: 23,
//     email: '21100210@ibsu.edu.ge'
//   },];
// }
// this.parentFunction.emit(users);



}
