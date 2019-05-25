import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchusers'
})
export class SearchUsersPipe implements PipeTransform {

  transform(users: any[], searchText: string): any[] {

    if (!users) {
      return [];
    }
    if (!searchText) {
      return users;
    }
    
    searchText = searchText.toLocaleLowerCase();
    
    /**
     * compares the entered text with users first name or last name
     */
    return users.filter(user => {
      return user.Name.toLocaleLowerCase().includes(searchText);
    });
  }

}
