import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];

  constructor(
    private hs: HeroesService,
  ) { }

  ngOnInit(): void {
    this.hs.getHeroes()
    .subscribe(h => 
      this.heroes = h.sort((h1, h2) => h1.id - h2.id).slice(0, 4)
    );
  }

}
