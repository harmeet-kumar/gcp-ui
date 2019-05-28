import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './shared/model/user';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.http.get<User[]>('/users').subscribe(data => {
      this.users.next(data);
    });
   }
   showSuccess(header: string, message: string) {
    this.toastr.success(header, message);
  }
   addUser(name: string,age: number,email: string,address:string) {
     console.log(name + ' '+ age + ' '+email + ' '+address);
     if(!name || name.trim() == '') {
        this.toastr.error('User Name is a required.', 'Error: ');
     }
    let temp = new User();
    temp.Name = name;
    temp.Email = email;
    temp.Age = age;
    temp.Address = address;
    this.http.post<User[]>('/addUser',temp).subscribe(data => {
      this.users.next(data);
      this.showSuccess('User Added Successfully', 'Name : '+ name);
    });
    
    name = '';
    age = null;
    address = '';
    email='';
  }
   
}
