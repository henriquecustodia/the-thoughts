import { Controller, Get } from '@nestjs/common';
import { QuotesService } from '../../services/quotes/quotes.service';

@Controller('quotes')
export class QuotesController {

  constructor(
    private readonly quotesService: QuotesService
  ) { }

  @Get()
  getAll() {
    return this.quotesService.getAllQuotes();
  }

  @Get('/random')
  getRandomQuote() {
    return this.quotesService.getRandomQuote();
  }
}
