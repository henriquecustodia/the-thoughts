import { Module, OnModuleInit } from '@nestjs/common';
import { SchedulerService } from './services/scheduler.service';
import { ThoughtService } from './services/thought.service';
import { TweetSchedulerService } from './services/tweet-scheduler.service';
import { TweetService } from './services/tweet.service';
import { TwitterClientService } from './services/twitter-client.service';

@Module({
  imports: [],
  providers: [
    SchedulerService,
    ThoughtService,
    TwitterClientService,
    TweetService,
    TweetSchedulerService
  ],
})
export class AppModule implements OnModuleInit {

  constructor(
    private tweetSchedulerService: TweetSchedulerService
  ) { }

  onModuleInit() {
    this.tweetSchedulerService.run();
  }

}
