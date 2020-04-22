/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Auth.ServiceService } from './Auth.Service.service';

describe('Service: Auth.Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth.ServiceService]
    });
  });

  it('should ...', inject([Auth.ServiceService], (service: Auth.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
