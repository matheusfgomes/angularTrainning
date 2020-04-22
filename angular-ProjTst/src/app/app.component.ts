import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public todos: Todo[] = []; // any retorna []
  // public todos: any[];  any retorna undefined

  public title: String = 'Minha rotina';

  public form: FormGroup;

 
  constructor(private formb: FormBuilder) {
    this.form = this.formb.group({
      title: ['', Validators.compose([
       Validators.minLength(3),
       Validators.maxLength(60),
       Validators.required,
      ])]
    });
    this.todos.push(new Todo( 1, 'passear com a cachorra', false));             
    this.todos.push(new Todo( 2, 'jogar videogame', false));                     
    this.todos.push(new Todo( 3, 'estudar angular', true)); 
    
    
    // this.todos.push(935);                                  // inteiro
    // this.todos.push({ message: 'teste'});                  // json
    // this.todos.push(new Date());                          //método
    
  }

  // alteraTexto(){
  //   this.title = 'Teste';
  // }


  remove(todo: Todo){
    const index = this.todos.indexOf(todo);
    if(index !== -1){
      this.todos.splice(index,1);
    } 
  }

  markAsDone(todo: Todo){
    todo.done = true;
  }

  markAsUndone(todo: Todo){
    todo.done = false;
  }
 
}
