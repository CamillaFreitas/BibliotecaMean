import { Component, EventEmitter, Output } from '@angular/core';
import { Livro } from '../livros.model';

@Component({
  selector: 'app-livros-inserir',
  templateUrl: './livros-inserir.component.html',
  styleUrls: ['./livros-inserir.component.css']
})
export class LivrosInserirComponent {

  @Output() livroAdicionado = new EventEmitter<Livro>();

  id: string;
  titulo: string;
  autor: string;
  paginas: string;

  onAdicionarLivro(){
    const livro: Livro = {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      paginas: this.paginas
    };
    this.livroAdicionado.emit(livro);
  }
}
