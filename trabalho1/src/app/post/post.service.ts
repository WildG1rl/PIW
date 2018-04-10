import {Injectable, Input, Output, EventEmitter} from '@angular/core';
import {Post} from './post.model';

@Injectable()
export class PostService{
    postagens = [        
        new Post(1,"User 1", "Eu só queria dormir e acabei me apaixonando", 0),
        new Post(2,"User 2", "Eu só queria me apaixonar e acabei dormindo", 0)
        
    ]

    
    inserirPostagem(post: Post){
        this.postagens.push(post)
        console.log(this.postagens)
    }

    excluirPostagem(id:number){
        let indice = null;
        for (let i in this.postagens){
            if (id == this.postagens[i].id){
                indice = this.postagens.indexOf(this.postagens[i]);
            }
        }
        this.postagens.splice(indice,1)

    }
    getPostagens(){
        return this.postagens;
    }
    addCurtida(post: Post){
        let indice = this.postagens.indexOf(post)
        this.postagens[indice].qtdLikes +=1
    }
}