import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NotifiConfigComponent } from './notifi-config.component';

describe('NotifiConfigComponent', () => {
  let component: NotifiConfigComponent;
  let fixture: ComponentFixture<NotifiConfigComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NotifiConfigComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotifiConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
