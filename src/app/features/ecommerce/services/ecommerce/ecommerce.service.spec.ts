import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator/jest';

import { EcommerceService } from './ecommerce.service';

describe('EcommerceService', () => {
  let spectator: SpectatorHttp<EcommerceService>;
  const createHttp = createHttpFactory({
    service: EcommerceService,
  });

  beforeEach(() => {
    spectator = createHttp();
  });

  it('Should load documents from API', () => {
    spectator.service.getProducts().subscribe();
    spectator.expectOne(`api/e-commerce-api/v1/products`, HttpMethod.GET);
  });
});
