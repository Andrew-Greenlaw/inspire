export class Quote {
  constructor(data) {
    this.content = data.content
    this.author = data.author || 'anonymous'

  }
  get QuoteTemplate() {
    return/*html*/`
    <p>${this.content}</p>
    <h5 class="on-hover">- ${this.author}</h5>
    `
  }
}
