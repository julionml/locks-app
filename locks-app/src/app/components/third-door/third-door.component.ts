import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { DoorOpenModalComponent } from 'src/shared/components/door-open-modal/door-open-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-door',
  templateUrl: './third-door.component.html',
  styleUrls: ['./third-door.component.scss']
})
export class ThirdDoorComponent implements OnInit {
  constructor(public dialog: MatDialog, private router: Router) {}
  private stateSubject = new BehaviorSubject<any>(null);
  public state$ = this.stateSubject.asObservable();
  public firsRowNumbers = ['1','2','3'];
  public secondRowNumbers = ['4','5','6',];
  public thirdRowNumbers = ['7','8','9'];
  public fourthRowNumbers = ['0'];
  public correctPassword = '28091998';
  public password = '';
  public value = '123';
  public bigLock = {
    isLocked: true
  }
  ngOnInit(): void {
    const storedState = localStorage.getItem('thirdDoorComponentState');
    if (storedState !== null && storedState !== 'null') {
      const parsedState = JSON.parse(storedState);
      this.password = parsedState.password;
    }

    // Update the state whenever it changes
    this.state$.subscribe((state) => {
      localStorage.setItem('thirdDoorComponentState', JSON.stringify(state));
    });
  }
  public openDialog() {
    const doorName = 'Third Door';
    this.dialog.open(DoorOpenModalComponent,{
      data: doorName
    });
    this.dialog.afterAllClosed.subscribe(() => {
      this.bigLock.isLocked = true;
      this.password = '';
      this.updateState();
      this.router.navigate(['/cats-room']);
      console.log('The dialog was closed');
    })
  }
  private updateState(): void {
    const state = {
      password: this.password
    };
    this.stateSubject.next(state);
  }
  public completePasssword(number: string): void {
    if(this.password.length<8){
      this.password += number;
    }
    this.updateState();
    if(this.password === this.correctPassword){
      this.bigLock.isLocked = false;
      this.openDialog();
    }

  }
}


