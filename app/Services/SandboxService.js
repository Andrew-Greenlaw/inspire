import { appState } from "../AppState.js"
import { Image } from "../Models/Image.js"
import { sandboxServer } from "./AxiosService.js"

class SandboxService {
  async getSandboxImage() {
    const res = await sandboxServer.get('/api/images')
    console.log('getSandboxImage', res.data)
    appState.sandboxImage = new Image(res.data)
    console.log('appsate:', appState.sandboxImage)
  }


}
export const sandboxService = new SandboxService()