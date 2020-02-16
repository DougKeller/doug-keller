import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from '@dk-components/home/home.component';
import { PicturesComponent } from '@dk-components/pictures/pictures.component';
import { RootComponent } from '@dk-components/root/root.component';
import { HeaderComponent } from '@dk-components/header/header.component';
import { FooterComponent } from '@dk-components/footer/footer.component';
import { ProjectsComponent } from '@dk-components/projects/projects.component';
import { ContactComponent } from '@dk-components/contact/contact.component';

@NgModule({
  declarations: [
    PicturesComponent,
    HomeComponent,
    RootComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
