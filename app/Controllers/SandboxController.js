import { appState } from "../AppState.js"
import { sandboxService } from "../Services/SandboxService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function _drawPicture() {
  let image = appState.sandboxImage
  // @ts-ignore
  document.querySelector('body').style.backgroundImage = `url(${image.largeImgUrl})`
  // @ts-ignore
  setText('image', image.author)
  // @ts-ignore
  setHTML('quotes', appState.quote.QuoteTemplate)
}
function _displayClock() {
  let display = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
  setText('clock', display)
  setTimeout(_displayClock, 1000)
}
function _drawWeather() {
  let weather = appState.weather
  sandboxService.tempatureConverter()
  // @ts-ignore
  setHTML('weather', weather.WeatherTemplate)
}

export class SandboxController {
  constructor() {
    this.getSandboxImage()
    this.getQuote()
    this.getWeather()
    appState.on('sandboxImage', _drawPicture)
    appState.on('weather', _drawWeather)
    _displayClock()
    // this.getSandboxServer()
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
  async toggleTemp() {
    try {
      await sandboxService.getWeather()
    } catch (error) {
      console.error('[getWeather]', error)
      Pop.error(error)
    }
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
