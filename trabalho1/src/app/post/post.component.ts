import { Post } from './post.model';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postagens: Post[];
  @Input() index:number;
  @Output() recebeuCurtida = new EventEmitter<any>();
  @Output() excluirPostagem = new EventEmitter();
  
  
  constructor() { }

  curtiu(){
    this.postagens[this.index].qtdLikes += 1;
    this.recebeuCurtida.emit(this.postagens[this.index]);
  }

  removeu(){
    this.excluirPostagem.emit(this.postagens[this.index])
    this.postagens.splice(this.index,1)
    console.log("removeu")
  }

  ngOnInit() {
  }

}
