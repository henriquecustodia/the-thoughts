import { getAllThoughts, getRandomThought, Thought } from '@cust/thoughts';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ThoughtsService {

  getAllThoughts(): Thought[] {
    return getAllThoughts();
  }

  getRandomThought(): Thought {
    return getRandomThought();
  }

}
