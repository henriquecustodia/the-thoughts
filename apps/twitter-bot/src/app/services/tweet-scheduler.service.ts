import { Injectable } from '@nestjs/common';
import { CronTime } from '../enums/cron-time';
import { SchedulerService } from './scheduler.service';
import { TweetService } from './tweet.service';

@Injectable()
export class TweetSchedulerService {

    constructor(
        private schedulerService: SchedulerService,
        private tweetService: TweetService
    ) { }

    run() {
        this.schedulerService.runScheduler(CronTime.EveryDayatLunchTime, () => {
            this.tweetService.tweet();
        });
    }

}
