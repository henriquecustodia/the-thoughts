import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Thought } from "@cust/thoughts";
import { getResolvedRouteData } from '../../functions/get-resolved-route-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  @HostBinding('class') get classAttr() {
    return 'h-full flex flex-col items-center justify-center p-4'
  }

  thought = getResolvedRouteData<Thought>('thought') ;

}
