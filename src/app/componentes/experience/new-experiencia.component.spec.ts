import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExperienciaComponent } from './new-experiencia.component';

describe('NewExperienciaComponent', () => {
  let component: NewExperienciaComponent;
  let fixture: ComponentFixture<NewExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
