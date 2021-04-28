import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private cacheMessaggi: string[] = [
    'Cache messaggi inizializzata correttamente.',
  ];

  constructor() { }

  nuovoMessaggio(messaggio: string) {
    this.cacheMessaggi.push(messaggio);
  }

  messaggi(): Observable<string[]> {
    return of(this.cacheMessaggi);
  }
}
