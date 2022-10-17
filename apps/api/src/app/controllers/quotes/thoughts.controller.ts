import { Controller, Get } from '@nestjs/common';
import { ThoughtsService } from '../../services/quotes/thoughts.service';

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
  getRandomThought() {
    return this.ThoughtsService.getRandomThought();
  }
}
