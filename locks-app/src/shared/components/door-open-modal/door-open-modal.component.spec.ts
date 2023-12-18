import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorOpenModalComponent } from './door-open-modal.component';

describe('DoorOpenModalComponent', () => {
  let component: DoorOpenModalComponent;
  let fixture: ComponentFixture<DoorOpenModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoorOpenModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoorOpenModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
