import { TestBed } from '@angular/core/testing';

import { ShopifyService } from './shopify.service';

describe('ShopifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopifyService = TestBed.get(ShopifyService);
    expect(service).toBeTruthy();
  });
});
