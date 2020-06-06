import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Marcio';
  contador = 0;
  adicionado = false;
  funcionarios = [];

  adicionar() {
    this.adicionado = true;
    this.funcionarios.push({
      id: ++this.contador,
      nome: this.nome
    });
  }
}