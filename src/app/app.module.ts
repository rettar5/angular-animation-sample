import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScaleInComponent } from './samples/scale-in/scale-in.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BindingVariablesComponent } from './samples/binding-variables/binding-variables.component';
import { AnimationGroupComponent } from './samples/animation-group/animation-group.component';
import { FadeInOutComponent } from './samples/fade-in-out/fade-in-out.component';

@NgModule({
  declarations: [
    AppComponent,
    ScaleInComponent,
    BindingVariablesComponent,
    AnimationGroupComponent,
    FadeInOutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
