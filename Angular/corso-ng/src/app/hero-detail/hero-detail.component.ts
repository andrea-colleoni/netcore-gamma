import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../heroes.service';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // @Input() 
  hero? : Hero;
  id: number;

  constructor(
    private ar: ActivatedRoute,
    private hs: HeroesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    // var, let, const
    // prendo l'id passato nell'URL e chiamo il servizio per trovare l'hero
    // const id = +this.ar.snapshot.params['id'];
    this.ar.paramMap.subscribe(pm => {
      this.id = +pm.get('id');
      this.hs.getHero(this.id)
        .subscribe(h => this.hero = h);
    });
  }

  goBack() {
    this.location.back();
  }

}
