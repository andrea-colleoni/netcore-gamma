import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../heroes.service';
import { MessagesService } from '../messages.service';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private heroesService: HeroesService, 
    private messagesService: MessagesService,
    private router: Router,
    ) { 
  }

  ngOnInit(): void {
    this.loadHeroes();
  }

  selectHero(hero: Hero) {
    // navigazione di un router link da codice
    this.router.navigate(['hero', hero.id]);
    // back-tick: ALT + 96
    this.messagesService.nuovoMessaggio(`Selezionato l'eroe ${hero.name}`);
  }

  add(heroName: string) {
    const hero: Hero = {
      id: 0,
      name: heroName,
    };
    this.heroesService
    .insert(hero)
    .subscribe(r => {
      console.log(r);
      this.loadHeroes();
    });
  }

  private loadHeroes() {
    this.heroesService.getHeroes().subscribe(
      heroes => this.heroes = heroes,
    );    
  }

}
