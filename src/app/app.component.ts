import { Component } from '@angular/core';

const PAGES = [
  { path: '/fade-in-out', name: 'FadeIn FadeOut' },
  { path: '/scale-in', name: 'ScaleIn' },
  { path: '/binding-variables', name: 'Binding Variables' },
  { path: '/animation-group', name: 'Parallel Animation' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'animation-sample-app';
  pages = PAGES;
}
