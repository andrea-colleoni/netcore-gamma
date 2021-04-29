import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { Hero } from './model/hero';
import { HEROES } from './model/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  mockHeroes = HEROES;
  private apiUrl = `${environment.apiUrlBase}/api/Heroes`;

  constructor(
    private http: HttpClient,
  ) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl)
      .pipe(
        tap(r => console.log(r)), // può vedere il payload dell'Observable senza alterarlo
        catchError(this.handleError<Hero[]>('hero list', [])),
      );
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError(this.handleError<Hero>('get by id', undefined)),
    )
  }

  update(hero: Hero): Observable<boolean> {
    return this.http.put<any>(`${this.apiUrl}/${hero.id}`, hero)
    .pipe(
      catchError(this.handleError<boolean>('update', false)),
      map(o => true)
    );
  }

  insert(hero: Hero): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}`, hero)
    .pipe(
      catchError(this.handleError<boolean>('insert', false)),
      map(o => true)
    );
  }  

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
