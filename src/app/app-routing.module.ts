import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormationListComponent } from './components/formation-list/formation-list.component';
import { FormationSaveComponent } from './components/formation-save/formation-save.component';

const routes: Routes = [
  { path: "new", component: FormationSaveComponent },
  { path: "formations", component: FormationListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
