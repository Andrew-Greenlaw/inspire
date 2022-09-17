import { appState } from "../AppState.js"
import { sandboxService } from "../Services/SandboxService.js"
import { Pop } from "../Utils/Pop.js"
import { setText } from "../Utils/Writer.js"

function _drawPicture() {
  let image = appState.sandboxImage
  // @ts-ignore
  document.querySelector('body').style.backgroundImage = `url(${image.largeImgUrl})`
  // TODO need to setText of author to page.
  setText('image', image.author)

}

export class SandboxController {
  constructor() {
    this.getSandboxImage()
    appState.on('sandboxImage', _drawPicture)

  }

  async getSandboxImage() {
    try {
      await sandboxService.getSandboxImage()
    } catch (error) {
      console.log('[getSandboxServer]', error)
      Pop.error(error)
    }
  }
}
