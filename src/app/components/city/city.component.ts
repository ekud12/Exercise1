import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Params } from '@angular/router';
import { cities } from '../cities';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  id: string;
  private route$: Subscription;
  cityDetails = { city: '', country: '', text: '', image: '' };
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route$ = this.route.params.subscribe((params: Params) => {
      this.id = params['id']; // cast to number
    });
    const paramsToUse = cities.find(val => val.city === this.id);
    this.buildParams(paramsToUse);
  }

  buildParams(parametrs: any) {
    console.log(parametrs);
    this.cityDetails.city = parametrs.city;
    this.cityDetails.country = parametrs.country;
    this.cityDetails.text = parametrs.text;
    this.cityDetails.image = parametrs.image;
  }
}
