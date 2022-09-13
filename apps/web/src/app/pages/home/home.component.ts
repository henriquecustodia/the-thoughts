import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Quote } from '../../models/quote';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  
  @HostBinding('class') get classAttr() {
    return 'h-full flex flex-col items-center justify-center p-4'
  }

  quote!: Quote;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.quote = this.activatedRoute.snapshot.data['quote'];
  }

}
