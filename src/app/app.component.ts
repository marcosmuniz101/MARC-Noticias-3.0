import { Component } from '@angular/core';
import {NoticiasService } from "./noticias.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  autor = null;
  conteudo = null;
  Tela = "Inicio"
  NoticiaAtualConteudo = "";
  NoticiaAtualAutor = "";
  


  constructor ( private Noticias: NoticiasService){}


  Salvar(){
  this.Noticias.Salvar(this.autor, this.conteudo);
  this.autor = null;
  this.conteudo = null;

  }
  Ler(id){
    this.Noticias.idAtual = id;
    this.Noticias.Ler();
    this.Noticias.views(id);
    this.Tela = 'Ler';

  }

  
  
}
