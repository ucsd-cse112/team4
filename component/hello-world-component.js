/* global HTMLElement */
/**
 * This is a class
 */
class HelloWorldComponent extends HTMLElement {
  /**
   * This is a basic constructor hello
   */
  constructor () {
    super()
    let shadowRoot = this.attachShadow({ mode: 'open' })
    var content = this.textContent
    if (content === '') { content = 'World' }
    let elementContent = `<h1>Hello ${content}!</h1>`
    shadowRoot.innerHTML = elementContent
  }

  static get observedAttributes () {
    return ['rainbow', 'language']
  }

  connectedCallback () {
    console.log('Component connected!')
  }

  disconnectedCallback () {
    console.log('Component disconnect!')
  }

  handleRainbow (newVal) {
    if (newVal === 'true') {
      this.shadowRoot.querySelector('h1').style.background = 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)'
      this.shadowRoot.querySelector('h1').style.webkitBackgroundClip = 'text'
      this.shadowRoot.querySelector('h1').style.webkitTextFillColor = 'transparent'
      this.shadowRoot.querySelector('h1').style.position = 'absolute'
    } else if (newVal === 'false') {
      this.shadowRoot.querySelector('h1').style.background = 'none'
    }
  }

  handleLanguage (newVal) {
    var content = this.textContent
    if (newVal === 'en') {
      if (content === '') { content = 'World' }
      this.shadowRoot.querySelector('h1').textContent = `Hello ${content}!`
    }

    if (newVal === 'sp') {
      if (content === '') { content = 'Mundo' }
      this.shadowRoot.querySelector('h1').textContent = `Hola ${content}!`
    }

    if (newVal === 'fe') {
      if (content === '') { content = 'le monde' }
      this.shadowRoot.querySelector('h1').textContent = `Bonjour ${content}!`
    }

    if (newVal === 'ch') {
      if (content === '') { content = '世界' }
      this.shadowRoot.querySelector('h1').textContent = `你好, ${content}!`
    }

    if (newVal === 'jp') {
      if (content === '') { content = '世界' }
      this.shadowRoot.querySelector('h1').textContent = `こんにちは ${content}!`
    }

    if (newVal === 'ge') {
      if (content === '') { content = 'Welt' }
      this.shadowRoot.querySelector('h1').textContent = `Hallo ${content}!`
    }

    if (newVal === 'sw') {
      if (content === '') { content = 'världen' }
      this.shadowRoot.querySelector('h1').textContent = `Hej ${content}!`
    }

    if (newVal === 'hi') {
      if (content === '') { content = 'दुनिया' }
      this.shadowRoot.querySelector('h1').textContent = `नमस्ते ${content}!`
    }

    if (newVal === 'ru') {
      if (content === '') { content = 'мир' }
      this.shadowRoot.querySelector('h1').textContent = `Привет, ${content}!`
    }

    if (newVal === 'la') {
      if (content === '') { content = 'Orbis Terrarum' }
      this.shadowRoot.querySelector('h1').textContent = `salve ${content}!`
    }

    if (newVal === 'ko') {
      if (content === '') { content = '세계' }
      this.shadowRoot.querySelector('h1').textContent = `안녕하세요 ${content}!`
    }

    if (newVal === 'pig') {
      if (content === '') { content = 'orldway' }
      this.shadowRoot.querySelector('h1').textContent = `ellohay ${content}!`
    }

    if (newVal === 'it') {
      if (content === '') { content = 'mondo' }
      this.shadowRoot.querySelector('h1').textContent = `Ciao ${content}!`
    }

    if (newVal === 'fi') {
      if (content === '') { content = 'maailma' }
      this.shadowRoot.querySelector('h1').textContent = `Hei ${content}!`
    }

    if (newVal === 'po') {
      if (content === '') { content = 'Mundo' }
      this.shadowRoot.querySelector('h1').textContent = `Olá ${content}!`
    }
  }

  attributeChangedCallback (attrName, oldVal, newVal) {
    if (attrName === 'rainbow') {
      this.handleRainbow(newVal)
    }
    if (attrName === 'language') {
      this.handleLanguage(newVal)
    }
  }
}
window.customElements.define('hello-world', HelloWorldComponent)
