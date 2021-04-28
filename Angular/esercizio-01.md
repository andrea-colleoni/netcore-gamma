# Esercizio gg 1

- Crea una nuova app angular chiamata blog-ng
- Titolo dell'app = 'Blog' da mettere nell'app component
- Componenti:
  - Elenco post: visualizza un elenco di Post (vedi modello) in una table html (senza body)
  - Dettaglio: Cliccando su una row della table viene visualizzato un div con title e body
- Servizi:
  - PostService: fornisce un Observable<Post[]> con l'elenco dei post preso dai Mock posts
- Modello:
  - Post: id: number, userId: number, title: string, body: string

- Test objects:
  - Mock posts: un array con qualche Post
