var template = document.createElement('template')
template.innerHTML = `
  <style>
    /*  Default CSS style for slider */
    :host{ 
      --slider-color: #409eff;
    }
    :host {
      width: 300px;
      font-weight: 400;
      cursor: pointer;
      border-radius: 3px;
      background-color: #e4e7ed;
      margin: 0;
    }
    input[type=range] {
      -webkit-appearance: none;
      display: inline-block;
      width: 80%;
      height: 10px;
      padding: 0;
      border-radius: 4px;
      background: #e4e7ed;
      box-sizing: content-box;
    }
    input[type=range]:focus {
      outline: none;
    }
    /* CSS classes for slider thumb */
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      border: 2px solid var(--slider-color);
      border-radius: 25px;
      background: #fff;
      transition: transform .2s;
      -webkit-transition: transform .2s;
      -moz-transition: transform .2s;
      -o-transition: transform .2s;
    }
    input[type=range]::-moz-range-thumb {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #409eff;
      cursor: pointer;
    }
    #min,
    #max {
      color: #333;
      text-align: right;
      font-weight: bold;
      margin-top: -2px;
    }
    #max {
      text-align: left;
    }
    input[type=range]:hover{
      cursor: pointer;
    }
    input[type=range]::-webkit-slider-thumb:hover{
      -webkit-transform: scale(1.2); /* Safari & Chrome */
      -moz-transform: scale(1.2); /* Firefox */
      -ms-transform: scale(1.2); /* Internet Explorer */
      -o-transform: scale(1.2); /* Opera */
    }   
  </style>
  <div>
    <span id="min">0</span>
    <input type="range" min="1" max="100" step="1">
    <span id="max">100</span>
  </div>
`
/**
 * Local theme
 */
const theme = {
  default: '#409eff',
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  info: '#17a2b8',
  warning: '#ffc107',
  danger: '#dc3545',
  background: '#d7dcdf'
}

/* global HTMLElement */
/**
 * This is a custom slider component
 * Ported from https://element.eleme.io/#/en-US/component/slider
 */
class SliderComponent extends HTMLElement {
  /**
   * SliderComponent constructor.
   * @constructor
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
    if (this.shadowRoot.querySelector('input') !== null) {
      var slider = this.shadowRoot.querySelector('input')
      this.handleListener(slider)
      this.handleMinAndMax()
      this.handleValue(slider)
      this.color = theme.default
      this.applyFill(slider)
    }
  }

  /**
   * Method returns a list of attributes supported by this component.<br>
   */
  static get observedAttributes () {
    return ['value', 'min', 'max', 'type']
  }

  /**
   * Callback when the component get created.
   */
  connectedCallback () {
    console.log('Component connected!')
    if (!this.hasAttribute('value')) {
      this.setAttribute('value', '50')
    }
    var slider = this.shadowRoot.querySelector('input')
    if (slider !== null) {
      slider.setAttribute('value', this.getAttribute('value'))
    }
    if (!this.hasAttribute('min')) {
      this.setAttribute('min', 0)
    }
    if (!this.hasAttribute('max')) {
      this.setAttribute('max', 100)
    }
  }

  /**
   * Callback when the component get disconnected.
   */
  disconnectedCallback () {
    console.log('Component disconnect!')
  }

  /**
   * Callback for when the supported attributes change its value.
   * @param {string} attrName - the name of the attribute.
   * @param {*} oldVal - the old value of the attribute.
   * @param {*} newVal - the new value of the attribute.
  */
  attributeChangedCallback (attrName, oldVal, newVal) {
    if (attrName === 'value' && !isNaN(newVal) && newVal >= 0 && newVal <= 100) {
      var slider = this.shadowRoot.querySelector('input')
      if (slider !== null) {
        slider.value = newVal
        this.applyFill(slider)
      }
    }
    if (attrName === 'min' || attrName === 'max') {
      this.handleMinAndMax()
    }
    if (attrName === 'type') {
      this.handleType(newVal)
    }
  }

  /**
   * Getter for value attribute.
   */
  get value () {
    return this.getAttribute('value')
  }

  /**
   * Setter for value attribute.
   * @param {string} newVal - The new value for value attribute
   */
  set value (newVal) {
    if (!isNaN(newVal) && newVal >= 0 && newVal <= 100) {
      this.setAttribute('value', newVal)
    }
  }

  /**
   * Getter for min attribute.
   */
  get min () {
    return this.getAttribute('min')
  }

  /**
   *  Setter for min attribute
   * @param {int} newVal - The new value for min attribute
   */
  set min (newVal) {
    if (!isNaN(newVal)) {
      this.setAttribute('min', newVal)
    }
  }

  /**
   * Getter for min attribute.
   */
  get max () {
    return this.getAttribute('max')
  }

  /**
   *  Setter for max attribute
   * @param {int} newVal - The new value for max attribute
   */
  set max (newVal) {
    if (!isNaN(newVal)) {
      this.setAttribute('max', newVal)
    }
  }

  /**
   * Method for handling user defined min/max
   * Example: <slider-component min="10" max="20"></slider-component>
   */
  handleMinAndMax () {
    if (this.hasAttribute('min') && this.hasAttribute('max')) {
      var min = this.getAttribute('min')
      var max = this.getAttribute('max')
      if (!(isNaN(min) || isNaN(max))) {
        if (this.shadowRoot.getElementById('min') !== null) {
          this.shadowRoot.getElementById('min').textContent = min
          this.shadowRoot.querySelector('input').setAttribute('min', min)
        }
        if (this.shadowRoot.getElementById('max') !== null) {
          this.shadowRoot.getElementById('max').textContent = max
          this.shadowRoot.querySelector('input').setAttribute('max', max)
        }
      }
    }
  }

  /**
   * Method for handling when the sliding happen
   * @param {*} slider - the slider
   */
  handleListener (slider) {
    // listener when sliding
    slider.addEventListener('input', () => {
      this.applyFill(slider)
    })
    // listener when sliding event finished
    slider.addEventListener('change', () => {
      this.applyFill(slider)
      this.setAttribute('value', slider.value)
    })
  }

  /**
   * Method for handling user defined value
   * Example: <slider-component value="88"></slider-component>
   * @param {*} slider - The slider
   */
  handleValue (slider) {
    if (this.hasAttribute('value')) {
      slider.setAttribute('value', this.getAttribute('value'))
    } else {
      this.setAttribute('value', slider.value)
    }
  }

  handleType (newVal) {
    if (theme.hasOwnProperty(newVal)) {
      this.color = theme[newVal]
    } else {
      this.color = theme.default
    }
    this.applyFill(this.shadowRoot.querySelector('input'))
  }

  /**
   * Method for filling the color for the slider
   * @param {*} _slider - Slider object (aka the input tag)
   */
  applyFill (_slider) {
    this.style.setProperty('--slider-color', this.color)
    const percentage = 100 * (_slider.value - _slider.min) / (_slider.max - _slider.min)
    const bg = `linear-gradient(90deg, ${this.color} ${percentage}%, ${theme.background} ${percentage + 0.1}%)`
    _slider.style.background = bg
  }
}
window.customElements.define('slider-component', SliderComponent)
