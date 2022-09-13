import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Quote } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getRamdon() {
    return lastValueFrom(
      this.httpClient.get<Quote>('/api/quotes/random')
    );
  }
}
