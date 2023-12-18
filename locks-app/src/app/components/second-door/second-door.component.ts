import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DoorOpenModalComponent } from 'src/shared/components/door-open-modal/door-open-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-door',
  templateUrl: './second-door.component.html',
  styleUrls: ['./second-door.component.scss'],
})
export class SecondDoorComponent implements OnInit {
  constructor(public dialog: MatDialog, private router: Router) {}

public leftSideUnLocked = false;
public rightSideUnLocked = false;
public middleLocked = true;


  public smallLocks = [
    {
      isLocked: true,
    },
    {
      isLocked: true,
    },
    {
      isLocked: true,
    },
    {
      isLocked: true,
    },
    {
      isLocked: true,
    },
  ];
  private stateSubject = new BehaviorSubject<any>(null);
  public state$ = this.stateSubject.asObservable();
  ngOnInit(): void {
    const storedState = localStorage.getItem('secondDoorComponentState');
    if (storedState !== null && storedState !== 'null') {
      const parsedState = JSON.parse(storedState);
      this.smallLocks = parsedState.smallLocks;
      this.leftSideUnLocked = parsedState.leftSideUnLocked;
      this.rightSideUnLocked = parsedState.leftSideUnLocked;
      this.middleLocked = parsedState.middleLocked;
    }
    if (
      this.leftSideUnLocked  &&
      this.rightSideUnLocked &&
      this.middleLocked
    ) {
      this.openDialog();
    }
    // Update the state whenever it changes
    this.state$.subscribe((state) => {
      localStorage.setItem('secondDoorComponentState', JSON.stringify(state));
    });
  }
  public unlock(lockIndex: number): void {
    this.smallLocks[lockIndex].isLocked = !this.smallLocks[lockIndex].isLocked;
    const middleLock = this.smallLocks[2];
    const leftLocks = this.smallLocks.slice(0, 2);
    const rightLocks = this.smallLocks.slice(3);
    this.leftSideUnLocked =  leftLocks.every((lock) => !lock.isLocked);
    this.rightSideUnLocked = rightLocks.every((lock) => !lock.isLocked);
    this.middleLocked = middleLock.isLocked;
    this.updateState();
    if (
      this.leftSideUnLocked  &&
      this.rightSideUnLocked &&
      this.middleLocked
    ) {
      this.openDialog();
    }

  }
  public openDialog() {
    const doorName = 'Second Door';
    this.dialog.open(DoorOpenModalComponent, {
      data: doorName,
    });
    this.dialog.afterAllClosed.subscribe(() => {
      this.middleLocked = true;
      this.leftSideUnLocked = false;
      this.rightSideUnLocked= false;
      this.smallLocks.forEach((lock) => {
        lock.isLocked = true;
      });
      this.updateState();
      this.router.navigate(['/third-door']);
      console.log('The dialog was closed');
    });
  }
  private updateState(): void {
    const state = {
      smallLocks: this.smallLocks,
      leftSideUnLocked: this.leftSideUnLocked,
      rightSideUnLocked: this.rightSideUnLocked,
      middleLocked: this.middleLocked,
    };
    this.stateSubject.next(state);
  }
}
