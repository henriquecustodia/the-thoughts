import { Injectable } from '@nestjs/common';
import { ThoughtService } from './thought.service';
import { TwitterClientService } from './twitter-client.service';

@Injectable()
export class TweetService {

    constructor(
        private twitterClientService: TwitterClientService,
        private thoughtService: ThoughtService
    ) { }

    async tweet() {
        const twitterClient = this.twitterClientService.getInstance();

        try {

            const response = await twitterClient.tweets.createTweet({
                text: this.thoughtService.getRandomThoughtAsText()
            });

            console.log('Yeah! The bot has just tweeted: ', response.data.text)
        } catch (error) {
            console.log('tryingToTweetError: ', error);
        }

    }
}
