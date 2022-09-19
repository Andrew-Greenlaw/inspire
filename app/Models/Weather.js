export class Weather {
  constructor(data) {
    this.temp = data.main.temp
    this.isC = false
    this.type = data.type
    this.main = data.weather[0].main
    this.icon = data.weather[0].icon
    this.iconImg = `https://openweathermap.org/img/wn/${this.icon}.png`
  }

  get WeatherTemplate() {
    return/*html*/`
    <div class="selectable rounded" onclick = "app.sanboxController.toggleTemp()">
      <h3>${this.temp}${this.type}</h3>
      <h4>${this.main}</h4>
      <img src="${this.iconImg}" alt="this.description">
    </div>
    `
  }
}
