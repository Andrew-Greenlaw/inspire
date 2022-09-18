import { appState } from "../AppState.js"
import { sandboxService } from "../Services/SandboxService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function _drawPicture() {
  let image = appState.sandboxImage
  let quote = appState.quote
  let weather = appState.weather
  // @ts-ignore
  document.querySelector('body').style.backgroundImage = `url(${image.largeImgUrl})`
  // @ts-ignore
  setText('image', image.author)
  // @ts-ignore
  setHTML('quotes', quote.QuoteTemplate)
  // @ts-ignore
  setHTML('weather', weather.WeatherTemplate)
}
function _displayClock() {
  let display = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
  setText('clock', display)
  setTimeout(_displayClock, 1000)
}

export class SandboxController {
  constructor() {
    this.getSandboxImage()
    this.getQuote()
    this.getWeather()
    // this.getSandboxServer()
    appState.on('sandboxImage', _drawPicture)
    _displayClock()
  }

  async getSandboxImage() {
    try {
      await sandboxService.getSandboxImage()
    } catch (error) {
      console.error('[getSandboxServer]', error)
      Pop.error(error)
    }
  }
  async getQuote() {
    try {
      await sandboxService.getQuote()
    } catch (error) {
      console.error('[getQuote]', error)
      Pop.error(error)
    }
  }
  async getWeather() {
    try {
      await sandboxService.getWeather()
    } catch (error) {
      console.error('[getWeather]', error)
      Pop.error(error)
    }
  }
  toggleTemp(valNum) {
    sandboxService.toggleTemp(valNum)
  }
  // async getSandboxServer() {
  //   try {
  //     await sandboxService.getSandboxServer()
  //   } catch (error) {
  //     console.error('[getSandboxServer]', error)
  //     Pop.error(error)
  //   }
  // }
}
