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
  public name:string;
  public age:number;
  public address:string;
  public email:string;
  public searchText:string;
  public users: BehaviorSubject<User[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.http.get<User[]>('/users').subscribe(data => {
      this.users.next(data);
    });
   }
   showSuccess(header: string, message: string) {
    
  }
   addUser(username: string,userAge: number,userEmail: string,userAddress:string) {
     console.log(username + ' '+ userAge + ' '+userEmail + ' '+userAddress);
     if(!username || username.trim() == '') {
        this.toastr.error('User Name is a required.', 'Error: ');
     } else {
        let temp = new User();
        temp.Name = username;
        temp.Email = userEmail;
        temp.Age = userAge;
        temp.Address = userAddress;
        this.http.post<User[]>('/addUser',temp).subscribe(data => {
          this.users.next(data);
          this.toastr.success('User Added.','Success :');
        });
     }
    
     this.name = '';
     this.age = null;
     this.address = '';
     this.email='';
  }
   
}
