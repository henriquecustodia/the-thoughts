import { Injectable } from '@nestjs/common';
import { getRandomThought } from '@cust/thoughts';


@Injectable()
export class ThoughtService {

    getRandomThoughtAsText() {
        const { author, text } = getRandomThought();

        return `${text} - ${author}`;
    }
}
