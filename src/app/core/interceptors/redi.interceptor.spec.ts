import { TestBed } from '@angular/core/testing';

import { RediInterceptor } from './redi.interceptor';

describe('RediInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RediInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RediInterceptor = TestBed.inject(RediInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
