import { Test } from '@nestjs/testing';
import { ThoughtsService } from './thoughts.service';

const mockedThoughts = [
  {
    text: 'test1',
    author: 'test1',
  },
  {
    text: 'test2',
    author: 'test2',
  }
]

const mockedRandomThought = mockedThoughts[1];

jest.mock('@cust/thoughts', () => ({
  getAllThoughts: jest.fn(() => mockedThoughts),
  getRandomThought: jest.fn(() => mockedRandomThought)
}));

describe('ThoughtsService', () => {
  let service: ThoughtsService;

  beforeAll(async () => {
    const app = await Test
      .createTestingModule({
        providers: [
          ThoughtsService
        ],
      }).compile();

    service = app.get<ThoughtsService>(ThoughtsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return quote list', () => {
    expect(service.getAllThoughts()).toEqual(mockedThoughts);
  });

  it('should return quote list', () => {
    expect(service.getRandomThought()).toEqual(mockedRandomThought);
  });

});
