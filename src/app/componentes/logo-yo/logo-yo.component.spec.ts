import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoYoComponent } from './logo-yo.component';

describe('LogoYoComponent', () => {
  let component: LogoYoComponent;
  let fixture: ComponentFixture<LogoYoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoYoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoYoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
