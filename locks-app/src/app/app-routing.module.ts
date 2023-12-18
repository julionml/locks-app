import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstDoorComponent } from './components/first-door/first-door.component';
import { SecondDoorComponent } from './components/second-door/second-door.component';
import { ThirdDoorComponent } from './components/third-door/third-door.component';

const routes: Routes = [
  { path: 'first-door', component: FirstDoorComponent, },
  { path: 'second-door', component: SecondDoorComponent, },
  { path: 'third-door', component: ThirdDoorComponent, },
   {
  path: '**',
  redirectTo: 'first-door',
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
