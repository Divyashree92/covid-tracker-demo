import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatePreviewComponent } from './state-preview.component';

describe('StatePreviewComponent', () => {
  let component: StatePreviewComponent;
  let fixture: ComponentFixture<StatePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
