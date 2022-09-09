import { Injectable } from '@nestjs/common';
import { quotes } from '../../data/quotes';
import { Quote } from '../../models/quote.model';

@Injectable()
export class DataService {
    
    getData(): Quote[] {
        return quotes;
    }
    
}
