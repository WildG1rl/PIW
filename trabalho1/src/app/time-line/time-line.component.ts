import { Post } from './../post/post.model';
import { Component, OnInit, Input } from '@angular/core';
import {PostService} from '../post/post.service';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css'],
  providers: [PostService]
})
export class TimeLineComponent implements OnInit {

  postagens: Post[];

  constructor(private pservice:PostService) {
  }
  
  ngOnInit() {
    this.postagens = this.pservice.getPostagens();
  }

  capturarCurtida(postagem:Post){
    console.log(postagem.nomePessoa + " Curtidas");



  }

}
