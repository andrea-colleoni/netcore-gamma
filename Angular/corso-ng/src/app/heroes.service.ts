import { HttpClient } from '@angular/common/http';
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

  constructor(
    private http: HttpClient,
  ) { }

  getHeroes(): Observable<Hero[]> {
    return of(this.mockHeroes);
  }

  getHero(id: number): Observable<Hero> {
    return of(this.mockHeroes.find(h => h.id === id));
  }

  httpTest() {
    // get restituisce un Observable, quindi per avviare una request, è necessario sottoscriverla
    this.http.get('https://www.google.it')
      .subscribe();
  }
}
