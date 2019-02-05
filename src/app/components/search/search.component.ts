import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ServicesService} from '../../components/app.services/service';
import {Router} from '@angular/router';
import { Servicess } from '../app.services/service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',

})
export class SearchComponent implements OnInit {
  services: Servicess[] = [];
  info: any [] = []; 
  termino: String;

  constructor( private activatedRoute: ActivatedRoute,
     private _services: ServicesService,
     private router: Router ) {

  }

  ngOnInit() {
    this.services = this._services.getdata();
   this.activatedRoute.params.subscribe( params => {
    console.log(params ['termino']);
    this.info = this._services.searchInformation( params ['termino'] );
    console.log(this.info);
  });

  }
  SeeInfo(index: number) {
    this.router.navigate(['/individual-search', index]);
     }

}
