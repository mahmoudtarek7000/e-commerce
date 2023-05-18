import { TestBed } from '@angular/core/testing';

import { MockBackEndInterceptor } from './mock-back-end.interceptor';

describe('MockBackEndInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MockBackEndInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MockBackEndInterceptor = TestBed.inject(MockBackEndInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
