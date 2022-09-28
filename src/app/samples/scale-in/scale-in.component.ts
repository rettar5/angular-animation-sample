import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scale-in',
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
  styleUrls: ['../icon.scss'],
  animations: [
    trigger('scaleIn', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('300ms 500ms', style({ transform: 'scale(1.5)' })),
        animate('200ms 0ms', style({ transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class ScaleInComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
