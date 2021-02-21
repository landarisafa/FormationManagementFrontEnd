import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormationSaveComponent } from './components/formation-save/formation-save.component';

const routes: Routes = [
  { path: "new", component: FormationSaveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
