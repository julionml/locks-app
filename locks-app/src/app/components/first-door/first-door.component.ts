import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { DoorOpenModalComponent } from 'src/shared/components/door-open-modal/door-open-modal.component';
import { Router } from '@angular/router';
import { DoorService } from 'src/app/services/door.service';
@Component({
  selector: 'app-first-door',
  templateUrl: './first-door.component.html',
  styleUrls: ['./first-door.component.scss']
})
export class FirstDoorComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router, private doorService: DoorService) {}

  public canOpenBigLock = false
  public bigLock = {
    isLocked: true
  }

  public smallLocks = [
    {
      isLocked: true,
    },
    {
      isLocked: true,
    },
    {
      isLocked: true,
    }
  ]

  private stateSubject = new BehaviorSubject<any>(null);
  public state$ = this.stateSubject.asObservable();

  ngOnInit(): void {
    const storedState = localStorage.getItem('firstDoorComponentState');
    if (storedState !== null && storedState !== 'null') {

      const parsedState = JSON.parse(storedState);
      this.canOpenBigLock = parsedState.canOpenBigLock;
      this.bigLock = parsedState.bigLock;
      this.smallLocks = parsedState.smallLocks;
    }

    // Update the state whenever it changes
    this.state$.subscribe(state => {
      localStorage.setItem('firstDoorComponentState', JSON.stringify(state));
    });
    if(!this.bigLock.isLocked) {
      this.openDialog();
    }
  }
public unlock(lockIndex: number):void {
  this.smallLocks[lockIndex].isLocked = !this.smallLocks[lockIndex].isLocked
  if(this.smallLocks.every(lock => !lock.isLocked)) {
    this.canOpenBigLock = true
  }else{
    this.canOpenBigLock = false
    this.bigLock.isLocked = true;
  }
  this.updateState();
}

public unlockBig():void {
  this.bigLock.isLocked = !this.bigLock.isLocked
  if(!this.bigLock.isLocked){
    this.openDialog();
  }
  this.updateState();
}

public openDialog() {
  const doorName = 'First Door';
  this.dialog.open(DoorOpenModalComponent,{
    data: doorName
  });
  this.dialog.afterAllClosed.subscribe(() => {
    this.bigLock.isLocked = true;
    this.canOpenBigLock = false;
    this.smallLocks.forEach(lock => {
      lock.isLocked = true;
    });
    this.doorService.openFirstDoor();
    this.updateState();
    this.router.navigate(['/second-door']);
    console.log('The dialog was closed');
  })
}

private updateState(): void {
  const state = {
    canOpenBigLock: this.canOpenBigLock,
    bigLock: this.bigLock,
    smallLocks: this.smallLocks
  };
  this.stateSubject.next(state);
}
}
