import { ConseillerModule } from './conseiller.module';

describe('ConseillerModule', () => {
  let conseillerModule: ConseillerModule;

  beforeEach(() => {
    conseillerModule = new ConseillerModule();
  });

  it('should create an instance', () => {
    expect(conseillerModule).toBeTruthy();
  });
});
