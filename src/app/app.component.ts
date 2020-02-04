import { Component } from '@angular/core'; // importation de la classe Component

@Component({ // Decorator
  selector: 'app-root', // comment appeler un composant <app-root></app-root>
  templateUrl: './app.component.html', // partie "visible" HTML
  styleUrls: ['./app.component.css'] // style associé au rendu HTML du composant
})
export class AppComponent { // partie "logique"
  title = 'tour of heroes';
}
