import { TestBed, inject } from '@angular/core/testing';

import { GestionDemandesService } from './gestion-demandes.service';

describe('GestionDemandesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestionDemandesService]
    });
  });

  it('should be created', inject([GestionDemandesService], (service: GestionDemandesService) => {
    expect(service).toBeTruthy();
  }));
});
