import { appState } from "../AppState.js"
import { Image } from "../Models/Image.js"
import { Quote } from "../Models/Quote.js"
import { Weather } from "../Models/Weather.js"
import { sandboxServer } from "./AxiosService.js"

class SandboxService {

  // async getSandboxServer() {
  //   const wRes = await sandboxServer.get('/api/weather')
  //   appState.weather = new Weather(wRes.data)
  //   const qRes = await sandboxServer.get('/api/quotes')
  //   appState.quote = new Quote(qRes.data)
  //   const iRes = await sandboxServer.get('/api/images')
  //   appState.sandboxImage = new Image(iRes.data)
  // }

  async getSandboxImage() {
    const res = await sandboxServer.get('/api/images')
    // console.log('getSandboxImage', res.data)
    appState.sandboxImage = new Image(res.data)
    // console.log('appsate:', appState.sandboxImage)
  }
  async getQuote() {
    const res = await sandboxServer.get('/api/quotes')
    // console.log('what the heck is quotes', res.data)
    appState.quote = new Quote(res.data)
    // console.log(appState.quote)
  }
  async getWeather() {
    const res = await sandboxServer.get('/api/weather')
    console.log('[getWeather]', res.data)
    appState.weather = new Weather(res.data)
    console.log(appState.weather)
  }
  // ANCHOR  im trying to get the temp to show up on the page correctly and toggle it
  fahrenheitConverter(valNum) {
    valNum = parseFloat(valNum);
    // @ts-ignore
    document.getElementById("temp").innerHTML = ((valNum - 273.15) * 1.8) + 32;
  }
  celciusConverter(valNum) {
    valNum = parseFloat(valNum);
    // @ts-ignore
    document.getElementById("outputCelcius").innerHTML = valNum - 273.15;
  }
  toggleTemp(valNum) {
    // @ts-ignore
    let currentTemp = appState.weather.temp


  }
}
export const sandboxService = new SandboxService()