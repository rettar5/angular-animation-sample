import {
  animate,
  group,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-group',
  // prettier-ignore
  template: `<div>
  <mat-icon @scaleIn class="color-blue">auto_awesome</mat-icon>
  <mat-icon @scaleIn class="color-yellow">auto_awesome</mat-icon>
  <mat-icon @scaleIn class="color-orange">auto_awesome</mat-icon>
  <mat-icon @scaleIn class="color-purple">auto_awesome</mat-icon>
</div>
<div>
  <mat-icon @scaleIn class="color-blue">auto_awesome</mat-icon>
  <mat-icon @scaleIn class="color-yellow">auto_awesome</mat-icon>
  <mat-icon @scaleIn class="color-orange">auto_awesome</mat-icon>
  <mat-icon @scaleIn class="color-purple">auto_awesome</mat-icon>
</div>
<div>
  <mat-icon @scaleIn class="color-blue">auto_awesome</mat-icon>
  <mat-icon @scaleIn class="color-yellow">auto_awesome</mat-icon>
  <mat-icon @scaleIn class="color-orange">auto_awesome</mat-icon>
  <mat-icon @scaleIn class="color-purple">auto_awesome</mat-icon>
</div>`,
  // prettier-ignore
  styles: [`mat-icon { filter: drop-shadow(0.5rem 0.5rem 3px); }`],
  styleUrls: ['../icon.scss'],
  animations: [
    trigger('scaleIn', [
      transition(':enter', [
        style({ transform: 'scale(0)', filter: 'drop-shadow(0rem 0rem 0px)' }),
        group([
          animate('1000ms 500ms', style({ transform: 'scale(1)' })),
          animate(
            '200ms 1300ms',
            style({ filter: 'drop-shadow(0.5rem 0.5rem 3px)' })
          ),
        ]),
      ]),
    ]),
  ],
})
export class AnimationGroupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
