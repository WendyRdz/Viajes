import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ServicesComponent} from './components/services/services.component';
import {ContactComponent} from './components/contact/contact.component';
import {IndividualComponent} from './components/individual/individual.component';



const APP_ROUTES: Routes =  [//arreglo de rutas
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'services', component: ServicesComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'individual/:id', component: IndividualComponent},

    //{ path: 'buscar/:termino', component: BuscadorComponent}, // este es el uscador 
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true}); //  { useHash:true soportado en diferentes navegadores }
