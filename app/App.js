import { SandboxController } from "./Controllers/SandboxController.js";
import { TodosController } from "./Controllers/TodosController.js"


class App {

  sanboxController = new SandboxController()
  todosController = new TodosController()

}

window["app"] = new App();
