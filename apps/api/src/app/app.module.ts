import { Module } from '@nestjs/common';

import { ThoughtsController } from './controllers/quotes/thoughts.controller';
import { ThoughtsService } from './services/quotes/thoughts.service';

@Module({
  imports: [],
  controllers: [ThoughtsController],
  providers: [ThoughtsService],
})
export class AppModule {}
