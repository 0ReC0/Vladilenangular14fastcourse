import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxAppComponent } from './ngrx-app.component';

describe('NgrxAppComponentComponent', () => {
  let component: NgrxAppComponent;
  let fixture: ComponentFixture<NgrxAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
