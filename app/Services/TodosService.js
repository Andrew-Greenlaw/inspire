import { appState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandboxServer } from "./AxiosService.js"

class TodosService {
  async getTodo() {
    const res = await sandboxServer.get('/api/andrew/todos')
    appState.todos = res.data.map(t => new Todo(t))

  }
}
export const todosService = new TodosService()