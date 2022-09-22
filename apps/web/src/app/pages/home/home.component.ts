import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Thought } from "@libs/thoughts";
import '@cust/random-thought-component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
  
  @HostBinding('class') get classAttr() {
    return 'h-full flex flex-col items-center justify-center p-4'
  }

  thought!: Thought;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.thought = this.activatedRoute.snapshot.data['thought'];
  }

}
