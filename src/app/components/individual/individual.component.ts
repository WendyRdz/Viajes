import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {ServicesService} from '../app.services/service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
})
export class IndividualComponent  {

 individual: any = {};


  constructor(private activatedRoute: ActivatedRoute,
    private _services: ServicesService
    ) {

    this.activatedRoute.params.subscribe ( params => {
      console.log( params['id']);
      this.individual = this._services.getIndividual( params['id'] );
    });

   }

}
