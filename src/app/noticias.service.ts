import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  autores = [{
    nome: "Amanda Soares", noticias:0, publicacoes : 0}, { nome: "José Nascimento", noticias: 0, publicacoes : 0},
     {nome: "Pedro Henrique", noticias: 3, publicacoes : 2}, {nome: "Beatriz Limeira", noticias: 0, publicacoes : 0}];

  noticias = [{id: 0, conteudo: "Primeira Noticia para teste, espero que funcione", autor: "Pedro Henrique", publicada: true, views : 2},
  {id: 1, conteudo: "Segunda Noticia para teste, espero que funcione", autor: "Pedro Henrique", publicada: false, views : 0},
  {id: 2, conteudo: "Terceira", autor: "Pedro Henrique", publicada: true, views : 5}];

  idAtual = 0;
  NoticiaAtualAutor: string;
  NoticiaAtualConteudo: string;


  dataSource = {
    "chart": {
      "caption": "Noticias  por Autor",
      "subCaption" : "Numero de noticias cadastradas por cada autor.",
      "showValues":"1",
      "showPercentInTooltip" : "0",
      "numberPrefix" : "Noticias Cadastradas: ",
      "enableMultiSlicing":"1",
      "theme": "fusion"
    },
    "data": []
};

  


  constructor() { }


  Listanoticias(){
    return this.noticias;
  };

  ListaNoticiasPublicadas(){
    let publicadas = [];
    for (let n of this.noticias){
      if (n.publicada == true){
        publicadas.push(n)
      }
    }
    return publicadas;
  };

  ListaNoticiasNaoPublicadas(){
    let NaoPublicadas = [];
    for (let n of this.noticias){
      if (n.publicada == false){
        NaoPublicadas.push(n)
      }
    }
    return NaoPublicadas;
  };

  
  ListaAutores(){
    
    return this.autores;
  };

  Salvar( autor, conteudo){
    let id = this.noticias.length;
    const n = {
      id: id,
      conteudo: conteudo,
      autor: autor,
      publicada : false,
      views : 0,

    }
    
  this.noticias.push(n);
  for (let A of this.autores){
    if (A.nome == autor){
      A.noticias ++;
    }
  };

 
  
  }

  Publicar(notica){
    let n    
    for ( n of this.noticias){
        if (n === notica){
          n.publicada = true;
        }        
    }
    for (let a of this.autores){
      if (a.nome == n.autor){
        a.publicacoes ++;
      }
    }
 }

  views(id){
    for (let n of this.noticias){
      if (id == n.id){
        n.views ++;
      }
    }  

  }

  Ler(){
    for (let n of this.noticias){
      if (this.idAtual == n.id){
        this.NoticiaAtualAutor = n.autor;
        this.NoticiaAtualConteudo = n.conteudo;
      }
    }  
   

  }
  
  retornaQtdNoticias(){
  this.autores.sort((a, b) => (a.noticias > b.noticias) ? -1 : 1);
   return this.autores;
  }

  Ranking(){
    this.noticias.sort((a, b) => (a.views > b.views) ? -1 : 1);
     return this.noticias.slice(0,5);
    }

  AutorMaisPubicou(){
    this.autores.sort((a, b) => (a.publicacoes > b.publicacoes) ? -1 : 1);
    return this.autores[0];
    
  }

  atualizaDataSource(){
    this.dataSource.data = []
    for (let autor of this.autores){
      this.dataSource.data.push({"label": autor.nome, "value" : String(autor.noticias)})
    }

  return this.dataSource;
  }


  

}
