import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title: string  = 'Lukito';
  // showHelloWorld = false;
  // helloWorldMessage = 'hello world';
  // displayHelloWord(){
  //   this.showHelloWorld = !this.showHelloWorld;
  // }
  // public valueInput: String ='i love coding but not working' 

    public users:User[] =[{
      id:123,
      name: 'Luk',
      email: '2110012210@ibsu.edu.ge'
    },
    {
      id:2495,
      name: 'gio',
      email: '2110041210@ibsu.edu.ge'
    },
    {
      id:567,
      name: 'niasd',
      email: '21100210@ibsu.edu.ge'
    },];
    public myText:String = '';
    public readData:any;
    parentFunction(data:any){
      console.log(data);
      this.readData = data;
    }

    


}
