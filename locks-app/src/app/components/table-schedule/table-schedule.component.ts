import { Component } from '@angular/core';

@Component({
  selector: 'app-table-schedule',
  templateUrl: './table-schedule.component.html',
  styleUrls: ['./table-schedule.component.scss']
})
export class TableScheduleComponent {
  user: any = {
    name: '',
    startDate: '',
    endDate: '',
  };

  userList: any = [];

  addUser() {
    // Check if valid user data is provided
    if (!this.user.startDate || !this.user.endDate || !this.user.name) {
      console.error('Please provide valid user data');
      return;
    }

    // Create start and end user objects
    let startUser: any = {
      name: [this.user.name],
      date: this.user.startDate,
    };

    let endUser: any = {
      name: [this.user.name],
      date: this.user.endDate,
    };

    // Find existing users with the same start or end date
    let existingStartUser : any = this.userList.find(
      (user: any) => user.date === this.user.startDate
    );
    let existingEndUser: any = this.userList.find(
      (user: any) => user.date === this.user.endDate
    );

    // If start date user exists, add name to it; otherwise, push start user to userList
    if (existingStartUser) {
      existingStartUser.name.push(this.user.name);
    } else {
      this.userList.push(startUser);
    }

    // If end date user exists, add name to it; otherwise, push end user to userList
    if (existingEndUser) {
      existingEndUser.name.push(this.user.name);
    } else {
      this.userList.push(endUser);
    }

    // Reset user object
    this.user = {
      name: '',
      startDate: '',
      endDate: '',
    };
  }
}
