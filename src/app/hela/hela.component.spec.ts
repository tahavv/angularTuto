import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelaComponent } from './hela.component';

describe('HelaComponent', () => {
  let component: HelaComponent;
  let fixture: ComponentFixture<HelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
