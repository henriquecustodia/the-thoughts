import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilService {
    
    getRandomArrayIndex(arrayLength: number) {
        return Math.floor(Math.random() * arrayLength);
    }

}
