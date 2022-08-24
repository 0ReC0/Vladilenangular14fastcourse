import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxWalkthroughComponent } from './ngrx-walkthrough.component';

describe('NgrxWalkthroughComponent', () => {
  let component: NgrxWalkthroughComponent;
  let fixture: ComponentFixture<NgrxWalkthroughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxWalkthroughComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxWalkthroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
