import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DoorService } from '../services/door.service';


@Injectable({
  providedIn: 'root'
})
export class FirstDoorGuard implements CanActivate {
  constructor(private doorService: DoorService, private router: Router) {}

  canActivate(): boolean {
    if (this.doorService.isFirstDoorOpen()) {
      return true; // Permite o acesso à próxima página (porta2)
    } else {
      this.router.navigate(['/first-door']); // Redireciona de volta para a primeira página (porta1)
      return false;
    }
  }
}
