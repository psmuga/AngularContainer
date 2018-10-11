import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastOptions } from 'ng2-toastr';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
@Injectable()
export class TodoComponent implements OnInit {

    time = new Date();
    activeTodo: TodoItem = new TodoItem();
    baseUrl = 'http://localhost:5000/api/';
    message: string;

    todos: TodoItem[] =
    [
      	{
      		title: 'PADNUG Angular Presentation',
      		description: 'Try to show up on time',
          completed: false,
          entered: new Date()
      	},
      	{
      		title: 'Do Angular Presentation',
      		description: 'Should go good, let\'s hope I don\'t fail...',
          completed: false,
          entered: new Date()
        },
        {
      		title: 'Go Home Happy',
      		description: 'Job done. Ready to go back',
          completed: true,
          entered: new Date()
      	},
      	{
      		title: 'Drive back to Hood River',
      		description: 'Try to not fall asleep on the way back.',
          completed: false,
          entered: new Date()
      	}
    ];

  constructor(private http: Http, private toastr: ToastsManager) {
    setInterval( () => {
      this.time = new Date();
    }, 1000);
    this.toastr.onClickToast()
    .subscribe( toast => {
        if (toast.timeoutId) {
          clearTimeout(toast.timeoutId);
        }
        this.toastr.dismissToast(toast);
    });
  }

  ngOnInit() {
    //  this.loadTodos();
  }
  loadTodos() {
        // this.http.get(this.baseUrl + 'todos')
        //     .subscribe((response) => {
        //         this.todos = response.json();

        //     }, (response) => {
        //         this.showMessage('Todos failed to load.', 5000);
        //     });
        this.todos =
        [
          	{
          		title: 'PADNUG Angular Presentation',
          		description: 'Try to show up on time',
              completed: false,
              entered: new Date()
          	},
          	{
          		title: 'Do Angular Presentation',
          		description: 'Should go good, let\'s hope I don\'t fail...',
              completed: false,
              entered: new Date()
            },
            {
          		title: 'Go Home Happy',
          		description: 'Job done. Ready to go back',
              completed: true,
              entered: new Date()
          	},
          	{
          		title: 'Drive back to Hood River',
          		description: 'Try to not fall asleep on the way back.',
              completed: false,
              entered: new Date()
          	}
        ];
    }

    toggleCompleted(todo) {
        todo.completed = !todo.completed;
        // this.http.put(this.baseUrl + 'todo', todo)
        //     .subscribe((response) => {
        //         this.showMessage('Updated...', 4000);
        //     }, (response) => {
        //         todo.completed = !todo.completed;
        //         this.showMessage('couldn\'t update todo item.', 5000);
        //     });

    }

    removeTodo(todo) {
        // this.http.delete(this.baseUrl + 'todo/' +  todo.title)
        //     .subscribe((response) => {
        //         this.todos = this.todos.filter((td, i) => td !== todo);
        //     }, () => {
        //         this.showMessage('delete failed.', 5000);
        //     });
        const index = this.todos.indexOf(todo, 0);
        this.todos.splice(index, 1);

    }

    editTodo(todo) {
        this.activeTodo = todo;
    }

    saveTodo(todo, form = null) {
        // this.http.post(this.baseUrl + "todo", todo)
        //     .subscribe( (response) => {
        //        this.showMessage("saved", 5000);

        //         let match: TodoItem = this.todos.find((td) => td === todo);

        //         if (!match)
        //             this.todos.unshift(todo);

        //         this.activeTodo = new TodoItem();
        //         if (form)
        //             form.reset();
        //     }, () => {
        //         this.showMessage("save operation failed", 5000);
        //     });
        this.showMessage('saved', 5000);
        this.showSuccess('saved');
        const match: TodoItem = this.todos.find((td) => td === todo);
        if (!match)
            this.todos.unshift(todo);
        this.activeTodo = new TodoItem();
        if (form)
          form.reset();
    }

    showMessage(msg, timeout = 0) {
        this.message = msg;
        if (timeout) {
            setTimeout(() => {
                this.message = null;
            }, timeout);
        }
    }

    showSuccess(msg) {
        this.toastr.success(msg, 'Success!',{data: {url: 'https://www.google.pl'}});        
    }

    showError(msg) {
        this.toastr.error(msg, 'Oops!');
    }

    showWarning(msg) {
        this.toastr.warning(msg, 'Alert!');
    }

    showInfo(msg) {
        this.toastr.info(msg);
    }
}

export class TodoItem {
    title: string;
    description: string;
    completed: boolean;
    entered: Date = new Date();
}

export class CustomOption extends ToastOptions {
  animate = 'fade'; // you can override any options available
  newestOnTop = true;
  showCloseButton = true;
  toastLife = 5000;
  dismiss = 'auto';
}