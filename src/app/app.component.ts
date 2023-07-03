import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon app';
  nom: string = "Jean";
  verif: boolean = true;
  element: number = 1;

  etudiants: any[] = [
    { "nom": "Toto", "prenom": "claire", "age": 30 },
    { "nom": "Perle", "prenom": "Prune", "age": 13 },
    { "nom": "Titi", "prenom": "marie", "age": 30 }
  ];

  getNomClass(premier: boolean, dernier: boolean, pair: boolean) {
    var nomClass = "";
    if (premier || dernier) {
      nomClass += "gras";
    }

    if (pair) {
      nomClass += " rouge";
    } else {
      nomClass += " bleu";
    }
    return nomClass;
  }
}
