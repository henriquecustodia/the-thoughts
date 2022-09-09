import { Test, TestingModule } from '@nestjs/testing';
import { QuotesController } from './quotes.controller';
import { QuotesService } from '../../services/quotes/quotes.service';
import { Quote } from '../../models/quote.model';

describe('AppController', () => {
  let app: TestingModule;
  let controller: QuotesController;
  let mockQuotesService: Partial<QuotesService>;
  
  let mockedQuotes: Quote[];
  let mockedQuote1: Quote;
  let mockedQuote2: Quote;

  beforeAll(async () => {
    mockedQuote1 = { text: 'text1', author: 'author1' };
    mockedQuote2 = { text: 'text2', author: 'author2' };

    mockedQuotes = [
      mockedQuote1,
      mockedQuote2
    ]

    mockQuotesService = {
      getAllQuotes: jest.fn(() => mockedQuotes),
      getRandomQuote: jest.fn(() => mockedQuote2),
    };

    app = await Test.createTestingModule({
      controllers: [QuotesController],
      providers: [
        { provide: QuotesService, useValue: mockQuotesService }
      ],
    }).compile();

    controller = app.get<QuotesController>(QuotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a quote list', () => {
    expect(controller.getAll()).toEqual(mockedQuotes);
  });

  it('should return a random quote', () => {
    expect(controller.getRandomQuote()).toEqual(mockedQuote1); 
  });

});
