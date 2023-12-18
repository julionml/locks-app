import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstDoorComponent } from './components/first-door/first-door.component';
import { SecondDoorComponent } from './components/second-door/second-door.component';
import { ThirdDoorComponent } from './components/third-door/third-door.component';
import { CatsRoomComponent } from './components/cats-room/cats-room.component';
import { FirstDoorGuard } from './guards/first-door.guard';


const routes: Routes = [
  { path: 'first-door', component: FirstDoorComponent, },
  { path: 'second-door', component: SecondDoorComponent,canActivate: [FirstDoorGuard]},
  { path: 'third-door', component: ThirdDoorComponent, },
  { path: 'cats-room', component: CatsRoomComponent, },
   {
  path: '**',
  redirectTo: 'first-door',

},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
