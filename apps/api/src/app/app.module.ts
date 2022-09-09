import { Module } from '@nestjs/common';

import { QuotesController } from './controllers/quotes/quotes.controller';
import { QuotesService } from './services//quotes/quotes.service';
import { DataService } from './services/data/data.service';
import { UtilService } from './services/util/util.service';

@Module({
  imports: [],
  controllers: [QuotesController],
  providers: [QuotesService, DataService, UtilService],
})
export class AppModule {}
