import { appState } from "../AppState.js"

export class Todo {
  constructor(data) {
    this.id = data.id
    this.description = data.description
    this.completed = data.completed
  }

  get ListTemplate() {
    return/*html*/`
    <li class="d-flex justify-content-between list-group-item rounded p-1 task">
      <div>
        <input class="selectable" onchange="app.todosController.toggleCompleted('${this.id}')" type="checkbox"
          ${this.completed ? 'checked' : ''}>
        <span class="ms-3">${this.description}</span>
      </div>
      <span><i onclick="app.todosController.removeTodo('${this.id}')" class="mdi mdi-close text-danger selectable"></i></span>
    </li>
`
  }
  // get uncompletedTodos() {
  //   let todos = appState.todos
  //   let uncompleted = 0
  //   todos.forEach(t => {
  //     if (t.completed === false) {
  //       uncompleted++
  //     }
  //   })
  //   return uncompleted
  // }
}