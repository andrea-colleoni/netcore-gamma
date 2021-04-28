import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { Hero } from './model/hero';
import { HEROES } from './model/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  mockHeroes = HEROES;

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(this.mockHeroes);
  }
}
