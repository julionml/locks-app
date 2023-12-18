import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoorService {
  private firsDoorOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  public isFirstDoorOpen(): Observable<boolean> {
    return this.firsDoorOpenSubject.asObservable();
  }

  public openFirstDoor(): void {
    this.firsDoorOpenSubject.next(true);
  }
}
