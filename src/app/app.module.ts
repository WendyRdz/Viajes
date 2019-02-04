import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//routes
import {APP_ROUTING } from './routes';
import {ServicesService} from './components/app.services/service';


//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { from } from 'rxjs';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { IndividualComponent } from './components/individual/individual.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    IndividualComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ServicesService //se agregan servicios aqui
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
