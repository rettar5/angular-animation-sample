import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-variables',
  // prettier-ignore
  template: `<div>
  <mat-icon [@scaleIn]="{value: true, params: { delay: 0 }}" class="color-blue">auto_awesome</mat-icon>
  <mat-icon [@scaleIn]="{value: true, params: { delay: 100 }}" class="color-yellow">auto_awesome</mat-icon>
  <mat-icon [@scaleIn]="{value: true, params: { delay: 200 }}" class="color-orange">auto_awesome</mat-icon>
  <mat-icon [@scaleIn]="{value: true, params: { delay: 300 }}" class="color-purple">auto_awesome</mat-icon>
</div>
<div>
  <mat-icon [@scaleIn]="{value: true, params: { delay: 400 }}" class="color-blue">auto_awesome</mat-icon>
  <mat-icon [@scaleIn]="{value: true, params: { delay: 500 }}" class="color-yellow">auto_awesome</mat-icon>
  <mat-icon [@scaleIn]="{value: true, params: { delay: 600 }}" class="color-orange">auto_awesome</mat-icon>
  <mat-icon [@scaleIn]="{value: true, params: { delay: 700 }}" class="color-purple">auto_awesome</mat-icon>
</div>
<div>
  <mat-icon [@scaleIn]="{value: true, params: { delay: 800 }}" class="color-blue">auto_awesome</mat-icon>
  <mat-icon [@scaleIn]="{value: true, params: { delay: 900 }}" class="color-yellow">auto_awesome</mat-icon>
  <mat-icon [@scaleIn]="{value: true, params: { delay: 1000 }}" class="color-orange">auto_awesome</mat-icon>
  <mat-icon [@scaleIn]="{value: true, params: { delay: 1100 }}" class="color-purple">auto_awesome</mat-icon>
</div>`,
  styleUrls: ['../icon.scss'],
  animations: [
    trigger('scaleIn', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('300ms {{delay}}ms', style({ transform: 'scale(1.5)' })),
        animate('200ms 0ms', style({ transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class BindingVariablesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
