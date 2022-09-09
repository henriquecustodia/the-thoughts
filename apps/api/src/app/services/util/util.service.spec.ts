import { Test, TestingModule } from '@nestjs/testing';
import { UtilService } from './util.service';

describe('UtilService', () => {
  let service: UtilService;
  let array: unknown[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UtilService],
    }).compile();

    service = module.get<UtilService>(UtilService);
    array = Array(5); 
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an index fewer than 5', () => {
    expect(service.getRandomArrayIndex(array.length)).toBeLessThan(5);
  });

  it('should return an index greater or equal to 0', () => {
    expect(service.getRandomArrayIndex(array.length)).toBeGreaterThanOrEqual(0);
  });

  it('should return an index fewer than 5', () => {
    expect(typeof service.getRandomArrayIndex(array.length)).toEqual('number');
  });
  
});
