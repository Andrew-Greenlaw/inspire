import { appState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function _drawTodos() {
  let template = ''
  appState.todos.forEach(t => template += t.ListTemplate)
  setHTML('todos', template)
  setText('uncompleted', appState.uncompleted)
}
function _getUncompleted() {
  todosService.getUncompleted()
  _drawTodos()
}
export class TodosController {
  constructor() {
    this.getTodo()
    appState.on('todos', _getUncompleted)
  }
  async removeTodo(id) {
    try {
      const yes = await Pop.confirm('Delete this todo?')
      if (!yes) { return }
      await todosService.removeTodo(id)
    } catch (error) {
      console.error('removeTodo', error)
      Pop.error(error)
    }
  }
  async toggleCompleted(id) {
    try {
      await todosService.toggleCompleted(id)
      _getUncompleted()
    } catch (error) {
      console.error('[toggleCompleted]', error)
      Pop.error(error)
    }
  }
  async getTodo() {
    try {
      await todosService.getTodo()
    } catch (error) {
      console.error('[getTodo]', error)
      Pop.error(error)
    }
  }
  async addTodo() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      let form = window.event.target
      let formData = getFormData(form)
      await todosService.addTodo(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[addTodo]', error)
      Pop.error(error)
    }
  }
}
