import { Injectable } from '@nestjs/common';
import { DataService } from '../data/data.service';
import { UtilService } from '../util/util.service';
import { Quote } from './../../models/quote.model';


@Injectable()
export class ThoughtsService {

  constructor(
    private dataService: DataService,
    private utilService: UtilService
  ) { }

  getAllThoughts(): Quote[] {
    return this.dataService.getData();
  }

  getRandomQuote(): Quote {
    const quotes = this.dataService.getData();
    const index = this.utilService.getRandomArrayIndex(quotes.length);
    return quotes[index];
  }

}
