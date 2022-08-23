import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftskillComponent } from './softskill.component';

describe('SoftskillComponent', () => {
  let component: SoftskillComponent;
  let fixture: ComponentFixture<SoftskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
