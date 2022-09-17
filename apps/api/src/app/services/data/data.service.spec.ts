
const mockedThoughts: Quote[] = [
  {
    text: 'test1',
    author: 'test1',
  },
  {
    text: 'test2',
    author: 'test2',
  }
]

jest.mock('../../data/quotes', () => ({
  quotes: mockedThoughts
}));

import { Test, TestingModule } from '@nestjs/testing';
import { Quote } from '../../models/quote.model';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataService],
    }).compile();

    service = module.get<DataService>(DataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined', () => {
    expect(service.getData()).toEqual(mockedThoughts);
  });
});
