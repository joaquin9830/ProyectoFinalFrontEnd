import { TestBed } from '@angular/core/testing';

import { CargarScriptService } from './cargar-script.service';

describe('CargarScriptService', () => {
  let service: CargarScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
