import { appState } from "../AppState.js"
import { Image } from "../Models/Image.js"
import { Quote } from "../Models/Quote.js"
import { Weather } from "../Models/Weather.js"
import { sandboxServer } from "./AxiosService.js"

class SandboxService {
  async getSandboxImage() {
    const res = await sandboxServer.get('/api/images')
    appState.sandboxImage = new Image(res.data)
  }
  async getQuote() {
    const res = await sandboxServer.get('/api/quotes')
    appState.quote = new Quote(res.data)
  }
  async getWeather() {
    const res = await sandboxServer.get('/api/weather')
    // console.log(res.data)
    let isF = appState.isF
    if (isF === false) {
      res.data.type = '°F'
      appState.weather = new Weather(res.data)
    } else {
      res.data.type = '°C'
      appState.weather = new Weather(res.data)
    }
  }
  tempatureConverter() {
    // @ts-ignore
    let temp = appState.weather.temp
    // @ts-ignore
    let isF = appState.isF
    if (isF === false) {
      temp = parseFloat(temp);
      temp = ((temp - 273.15) * 1.8) + 32;
      // @ts-ignore
      appState.weather.temp = temp.toFixed(0)
      // @ts-ignore
      appState.isF = true
    } else {
      temp = parseFloat(temp);
      temp -= 273.15
      // @ts-ignore
      appState.weather.temp = temp.toFixed(0)
      appState.isF = false
    }
  }
  // async getSandboxServer() {
  //   const wRes = await sandboxServer.get('/api/weather')
  //   appState.weather = new Weather(wRes.data)
  //   const qRes = await sandboxServer.get('/api/quotes')
  //   appState.quote = new Quote(qRes.data)
  //   const iRes = await sandboxServer.get('/api/images')
  //   appState.sandboxImage = new Image(iRes.data)
  // }

  // toggleTemp(temp) {
  //   // @ts-ignore
  //   let isF = appState.weather.isF
  //   if (isF) {
  //     // @ts-ignore
  //     appState.weather.isF = false
  //     temp = parseFloat(temp);
  //     temp = (temp - 32) / 1.8;
  //     // @ts-ignore
  //     appState.weather.temp = temp
  //     console.log(appState.weather)
  //   } else {
  //     temp = parseFloat(temp);
  //     temp = (temp * 1.8) + 32
  //     // @ts-ignore
  //     appState.weather.temp = temp
  //     // @ts-ignore
  //     appState.weather.isF = true
  //   }
  // }
}
export const sandboxService = new SandboxService()