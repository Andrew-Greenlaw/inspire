export class Weather {
  constructor(data) {
    this.temp = data.main.temp
    this.description = data.weather[0].description
    this.icon = data.weather[0].icon
    this.iconImg = `https://openweathermap.org/img/wn/${this.icon}.png`
  }

  get WeatherTemplate() {
    return/*html*/`
    <div class="selectable rounded" onclick="app.sandboxController.toggleTemp(this.temp)">
      <h3>${this.temp}</h3>
      <h4>${this.description}</h4>
      <img src="${this.iconImg}" alt="this.description">
    </div>
    `
  }
}
