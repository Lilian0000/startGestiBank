import { TestBed, inject } from '@angular/core/testing';

import { GestionComptesService } from './gestion-comptes.service';

describe('GestionComptesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestionComptesService]
    });
  });

  it('should be created', inject([GestionComptesService], (service: GestionComptesService) => {
    expect(service).toBeTruthy();
  }));
});
