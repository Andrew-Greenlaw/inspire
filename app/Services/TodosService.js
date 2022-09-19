import { appState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandboxServer } from "./AxiosService.js"

class TodosService {
  getUncompleted() {
    appState.uncompleted = 0
    appState.todos.forEach(t => {
      if (t.completed === false) {
        appState.uncompleted++
      }
    })
  }
  async removeTodo(id) {
    // do a delete request with the id
    // update the appstate and save it without the current id
    await sandboxServer.delete(`/api/andrew/todos/${id}`)
    appState.todos = appState.todos.filter(t => t.id != id)
  }
  async toggleCompleted(id) {
    // find the todo by its id
    // change it to the oposite booel
    // put to the sandboxServer

    let todo = appState.todos.find(t => t.id == id)
    if (!todo) {
      throw new Error('Bad Id')
    }
    console.log('does this look right todo', todo)
    // @ts-ignore
    todo.completed = !todo.completed
    await sandboxServer.put(`/api/andrew/todos/${id}`, todo)
  }
  async addTodo(formData) {
    const res = await sandboxServer.post('/api/andrew/todos', formData)
    console.log('what the heck does this look like', res.data)
    const newTodo = new Todo(res.data)
    appState.todos = [...appState.todos, newTodo]
  }
  async getTodo() {
    const res = await sandboxServer.get('/api/andrew/todos')
    console.log('GetTodo', res)
    appState.todos = res.data.map(t => new Todo(t))
  }
}
export const todosService = new TodosService()