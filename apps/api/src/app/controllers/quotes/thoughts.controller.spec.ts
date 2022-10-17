import { Test, TestingModule } from '@nestjs/testing';
import { ThoughtsController } from './thoughts.controller';
import { ThoughtsService } from '../../services/quotes/thoughts.service';
import { Thought } from '@cust/thoughts';

describe('AppController', () => {
  let app: TestingModule;
  let controller: ThoughtsController;
  let mockThoughtsService: Partial<ThoughtsService>;
  
  let mockedThoughts: Thought[];
  let mockedQuote1: Thought;
  let mockedQuote2: Thought;

  beforeAll(async () => {
    mockedQuote1 = { text: 'text1', author: 'author1' };
    mockedQuote2 = { text: 'text2', author: 'author2' };

    mockedThoughts = [
      mockedQuote1,
      mockedQuote2
    ]

    mockThoughtsService = {
      getAllThoughts: jest.fn(() => mockedThoughts),
      getRandomThought: jest.fn(() => mockedQuote2),
    };

    app = await Test.createTestingModule({
      controllers: [ThoughtsController],
      providers: [
        { provide: ThoughtsService, useValue: mockThoughtsService }
      ],
    }).compile();

    controller = app.get<ThoughtsController>(ThoughtsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a quote list', () => {
    expect(controller.getAll()).toEqual(mockedThoughts);
  });

  it('should return a random quote', () => {
    expect(controller.getRandomThought()).toEqual(mockedQuote2);
  });

});
