import { TestBed } from '@angular/core/testing';

import { FunTranslationApiService } from './fun-translation-api.service';

describe('FunTranslationApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FunTranslationApiService = TestBed.get(FunTranslationApiService);
    expect(service).toBeTruthy();
  });
});
