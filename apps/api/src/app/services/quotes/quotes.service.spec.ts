import { Test } from '@nestjs/testing';
import { Quote } from '../../models/quote.model';
import { DataService } from '../data/data.service';
import { UtilService } from '../util/util.service';
import { ThoughtsService } from './quotes.service';

describe('ThoughtsService', () => {
  let service: ThoughtsService;
  let mockedDataService: DataService;
  let mockedUtilService: UtilService;

  let mockedQuoteList: Quote[];
  let mockedQuote1: Quote;
  let mockedQuote2: Quote;
  let mockedQuote3: Quote;

  let mockedRandomArrayIndex: number;

  beforeAll(async () => {
    mockedQuote1 = { text: 'text1', author: 'author1' };
    mockedQuote2 = { text: 'text2', author: 'author2' };
    mockedQuote3 = { text: 'text3', author: 'author3' };

    mockedQuoteList = [
      mockedQuote1,
      mockedQuote2,
      mockedQuote3
    ];

    mockedRandomArrayIndex = 1; // mockedQuote2

    mockedDataService = {
      getData: jest.fn(() => mockedQuoteList)
    };

    mockedUtilService = {
      getRandomArrayIndex: jest.fn(() => mockedRandomArrayIndex)
    };

    const app = await Test.createTestingModule({
      providers: [
        ThoughtsService,
        { provide: DataService, useValue: mockedDataService },
        { provide: UtilService, useValue: mockedUtilService }
      ],
    }).compile();

    service = app.get<ThoughtsService>(ThoughtsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return quote list', () => {
    expect(service.getAllThoughts()).toEqual(mockedQuoteList);
  });

  it('should return quote list', () => {
    expect(service.getRandomQuote()).toEqual(mockedQuote2);
  });

});
