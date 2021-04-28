import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { MessagesService } from '../messages.service';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[] = [];

  constructor(
    private heroesService: HeroesService, 
    public messagesService: MessagesService) { 
  }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
    // back-tick: ALT + 96
    this.messagesService.nuovoMessaggio(`Selezionato l'eroe ${hero.name}`);
  }

}
