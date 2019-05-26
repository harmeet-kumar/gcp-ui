import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './shared/model/user';
import { HttpClient } from '@angular/common/http';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { environment } from 'src/environments/environment';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kratos';
  name:string;
  age:number;
  address:string;
  email:string;
  searchText:string;
  users: BehaviorSubject<User[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.http.get<User[]>(environment.url+'/users').subscribe(data => {
      this.users.next(data);
    });
   }

   addUser(name: string,age: number,email: string,address:string) {
     console.log(name + ' '+ age + ' '+email + ' '+address);
    let temp = new User();
    temp.Name = name;
    temp.Email = email;
    temp.Age = age;
    temp.Address = address;
    this.http.post<User[]>(environment.url+'/addUser',temp).subscribe(data => {
      this.users.next(data);
    });
    
    name = '';
    age = null;
    address = '';
    email='';
    // const allStudents = this.users.getValue();
    // let id = allStudents[allStudents.length-1].id // getting the index of last value added
    // temp.id = id+1;
    // const updatedData = [...allStudents, temp]; // updating the students array as behaviour subject
    // this.users.next(updatedData);

  }
   
}
