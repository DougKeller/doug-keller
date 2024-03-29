import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturesComponent } from '@dk-components/pictures/pictures.component';
import { HomeComponent } from '@dk-components/home/home.component';
import { ContactComponent } from '@dk-components/contact/contact.component';
import { ProjectsComponent } from '@dk-components/projects/projects.component';

const routes: Routes = [
  { path: 'pictures', component: PicturesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
