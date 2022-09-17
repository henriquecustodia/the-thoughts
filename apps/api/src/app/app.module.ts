import { Module } from '@nestjs/common';

import { ThoughtsController } from './controllers/quotes/quotes.controller';
import { ThoughtsService } from './services//quotes/quotes.service';
import { DataService } from './services/data/data.service';
import { UtilService } from './services/util/util.service';

@Module({
  imports: [],
  controllers: [ThoughtsController],
  providers: [ThoughtsService, DataService, UtilService],
})
export class AppModule {}
