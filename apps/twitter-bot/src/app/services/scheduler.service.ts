import { Injectable } from '@nestjs/common';
import cron = require('cron');

@Injectable()
export class SchedulerService {

    runScheduler(cronTime: string, jobFn: () => void) {
        const onComplete = null;
        const startNow = true;
        const timeZone = 'America/Sao_Paulo';

        new cron.CronJob(cronTime, jobFn,
            onComplete,
            startNow,
            timeZone
        );

    }
}
