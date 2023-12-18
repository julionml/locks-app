import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDoorComponent } from './second-door.component';

describe('SecondDoorComponent', () => {
  let component: SecondDoorComponent;
  let fixture: ComponentFixture<SecondDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondDoorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
