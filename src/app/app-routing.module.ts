import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationGroupComponent } from './samples/animation-group/animation-group.component';
import { BindingVariablesComponent } from './samples/binding-variables/binding-variables.component';
import { FadeInOutComponent } from './samples/fade-in-out/fade-in-out.component';
import { ScaleInComponent } from './samples/scale-in/scale-in.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fade-in-out',
    pathMatch: 'full',
  },
  { path: 'fade-in-out', component: FadeInOutComponent },
  { path: 'scale-in', component: ScaleInComponent },
  { path: 'binding-variables', component: BindingVariablesComponent },
  { path: 'animation-group', component: AnimationGroupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
