import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashComponent } from './dash/dash.component';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { AboutPetComponent } from './about-pet/about-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';




const routes: Routes = [
  {path: "", pathMatch: "full", component: DashComponent},
  {path: "new", component: CreatePetComponent},
  {path: "details/:id", component: AboutPetComponent},
  {path: "edit/:id", component: EditPetComponent},
  {path: "**", redirectTo: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
