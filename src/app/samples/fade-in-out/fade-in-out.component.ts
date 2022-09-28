import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fade-in-out',
  // prettier-ignore
  template: `<div>
  <button mat-raised-button color="primary" (click)="toggle()" class="toggle-button">
    {{ shouldShowIcons ? 'Hide' : 'Show' }}
  </button>
</div>
<div>
  <mat-icon *ngIf="shouldShowIcons" @fadeInOut class="color-blue">auto_awesome</mat-icon>
  <mat-icon *ngIf="shouldShowIcons" @fadeInOut class="color-yellow">auto_awesome</mat-icon>
  <mat-icon *ngIf="shouldShowIcons" @fadeInOut class="color-orange">auto_awesome</mat-icon>
  <mat-icon *ngIf="shouldShowIcons" @fadeInOut class="color-purple">auto_awesome</mat-icon>
</div>
<div>
  <mat-icon *ngIf="shouldShowIcons" @fadeInOut class="color-blue">auto_awesome</mat-icon>
  <mat-icon *ngIf="shouldShowIcons" @fadeInOut class="color-yellow">auto_awesome</mat-icon>
  <mat-icon *ngIf="shouldShowIcons" @fadeInOut class="color-orange">auto_awesome</mat-icon>
  <mat-icon *ngIf="shouldShowIcons" @fadeInOut class="color-purple">auto_awesome</mat-icon>
</div>
<div>
  <mat-icon *ngIf="shouldShowIcons" @fadeInOut class="color-blue">auto_awesome</mat-icon>
  <mat-icon *ngIf="shouldShowIcons" @fadeInOut class="color-yellow">auto_awesome</mat-icon>
  <mat-icon *ngIf="shouldShowIcons" @fadeInOut class="color-orange">auto_awesome</mat-icon>
  <mat-icon *ngIf="shouldShowIcons" @fadeInOut class="color-purple">auto_awesome</mat-icon>
</div>`,
  // prettier-ignore
  styles: [`.toggle-button { margin-bottom: 2rem; }`],
  styleUrls: ['../icon.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('1000ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class FadeInOutComponent implements OnInit {
  shouldShowIcons: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.shouldShowIcons = !this.shouldShowIcons;
  }
}
