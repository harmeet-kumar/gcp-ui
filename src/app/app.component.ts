import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './shared/model/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kratos';

  users: BehaviorSubject<User[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.http.get<User[]>('assets/users.json').subscribe(data => {
      this.users.next(data);
    });
   }

   addStudent(user:User) {
    // const allStudents = this.students.getValue();
    // let id = allStudents[allStudents.length-1].id // getting the index of last value added
    // student.id = id+1;
    // const updatedData = [...allStudents, student]; // updating the students array as behaviour subject
    // this.students.next(updatedData);
  }
   
}
