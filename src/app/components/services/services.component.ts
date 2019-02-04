import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../components/app.services/service';
import { Services } from '@angular/core/src/view';
import { Servicess } from '../app.services/service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
})
export class ServicesComponent implements OnInit {//se utiliza cuando la pagina es renderizada
  services: Servicess[] = [];

  constructor( private _Services: ServicesService,
    private router: Router
    ) { }

  ngOnInit() {
   this.services = this._Services.getdata();
   //console.log( this.services);
  }
   seeIndividual(idx: number) {
  this.router.navigate(['/individual', idx]);
   }
}
