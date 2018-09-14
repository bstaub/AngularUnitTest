import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {ContentComponent} from './components/content/content.component';
import {BilderComponent} from './components/bilder/bilder.component';
import {StartseiteComponent} from './components/startseite/startseite.component';

const routes: Routes = [
  { path: '', component: StartseiteComponent, pathMatch: 'full' },
  { path: 'bilder', component: BilderComponent },
  { path: 'content', component: ContentComponent },
  { path: '**', component: NotfoundComponent },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
