import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from '../shared/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  
  /**
   * @param  {user;} user
   * @returns user
   * child component for onboarding-list
   */
  @Input() user: User;
  
  constructor() { }

  ngOnInit() {
  }

}
