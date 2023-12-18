import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';
import { FirstDoorComponent as FirstDoorComponent } from './components/first-door/first-door.component';
import { SecondDoorComponent } from './components/second-door/second-door.component';
import { ThirdDoorComponent } from './components/third-door/third-door.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstDoorComponent,
    SecondDoorComponent,
    ThirdDoorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
