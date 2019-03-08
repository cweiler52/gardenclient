import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignHomeComponent } from './design-home/design-home.component';

const routes: Routes = [
  { path: 'home',
  component: DesignHomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
