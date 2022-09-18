import { todosService } from "../Services/TodosService.js"
import { Pop } from "../Utils/Pop.js"

export class TodosController {
  constructor() {

  }
  async getTodo() {
    try {
      await todosService.getTodo()
    } catch (error) {
      console.log('[getTodo]', error)
      Pop.error(error)
    }
  }
}
