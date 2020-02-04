import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { ContactComponent } from './contact/contact.component';
import { AdditionComponent } from './addition/addition.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full'},
  { path: 'heroes', component: HeroesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'addition', component: AdditionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule]
})
export class AppRoutingModule { }
