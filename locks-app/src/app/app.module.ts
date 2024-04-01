import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';
import { FirstDoorComponent as FirstDoorComponent } from './components/first-door/first-door.component';
import { SecondDoorComponent } from './components/second-door/second-door.component';
import { ThirdDoorComponent } from './components/third-door/third-door.component';
import { CatsRoomComponent } from './components/cats-room/cats-room.component';
import { TableScheduleComponent } from './components/table-schedule/table-schedule.component';
import { SimpleListComponent } from './components/simple-list/simple-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstDoorComponent,
    SecondDoorComponent,
    ThirdDoorComponent,
    CatsRoomComponent,
    TableScheduleComponent,
    SimpleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
