import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AgregarNotifiComponent } from './agregar-notifi.component';

describe('AgregarNotifiComponent', () => {
  let component: AgregarNotifiComponent;
  let fixture: ComponentFixture<AgregarNotifiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AgregarNotifiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarNotifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
