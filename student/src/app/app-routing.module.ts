import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenComponent } from './child/screen/screen.component';
import { PageComponent } from './child/page/page.component';

const routes: Routes = [
  {
path: '', component:ScreenComponent
  },
  {
    path:'screen',
    component: ScreenComponent
  },
  {
    path:'page',
    component:PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
