import { Controller, Get } from '@nestjs/common';
import { ThoughtsService } from '../../services/quotes/quotes.service';

@Controller('quotes')
export class ThoughtsController {

  constructor(
    private readonly ThoughtsService: ThoughtsService
  ) { }

  @Get()
  getAll() {
    return this.ThoughtsService.getAllThoughts();
  }

  @Get('/random')
  getRandomQuote() {
    return this.ThoughtsService.getRandomQuote();
  }
}
