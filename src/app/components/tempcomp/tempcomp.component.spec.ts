import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempcompComponent } from './tempcomp.component';

describe('TempcompComponent', () => {
  let component: TempcompComponent;
  let fixture: ComponentFixture<TempcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
