/* global suite test assert */
/* global ButtonComponent */

/**
 * This will assert both that the component contains the attribute and has the value.
 * @param {HTMLElement} component The comonent to test
 * @param {string} attribute The attribute of component to test
 * @param {*} value The value that it should be equal to
 */
function attributeEqulButton (component, attribute, value) {
  assert.isDefined(component)
  assert.isString(attribute)
  assert.include(ButtonComponent.observedAttributes, attribute)
  assert.equal(component[attribute], value)
}

/**
 * This will assert that the attribute is valid and then sets it.
 * @param {HTMLElement} component The component to set
 * @param {string} attribute The attribute of component to set
 * @param {*} newValue The vew value to set
 */
function safeSetButton (component, attribute, newValue) {
  assert.isDefined(attribute)
  assert.isString(attribute)
  assert.include(ButtonComponent.observedAttributes, attribute)
  component[attribute] = newValue
}

suite('button-component', function () {
  test('all attributes are in component', function () {
    assert.isDefined(ButtonComponent)
    const attributes = ['size', 'type', 'plain', 'round', 'circle', 'disabled', 'theme']
    for (var i = 0; i < attributes.length; i += 1) {
      assert.include(ButtonComponent.observedAttributes, attributes[i])
    }
    const component = document.createElement('button-component')
    safeSetButton(component, 'size', 'medium')
    safeSetButton(component, 'type', 'primary')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqulButton(component, 'size', 'medium')
    attributeEqulButton(component, 'type', 'primary')
    attributeEqulButton(component, 'plain', false)
    attributeEqulButton(component, 'round', false)
    attributeEqulButton(component, 'circle', false)
    attributeEqulButton(component, 'disabled', false)
  })
  // Tests to see if the default plain attribute is false
  test('default plain is false', function () {
    const component = document.createElement('button-component')
    safeSetButton(component, 'size', 'medium')
    safeSetButton(component, 'type', 'primary')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqulButton(component, 'plain', false)
  })
  // Tests to see if the default round attribute is false
  test('default round is false', function () {
    const component = document.createElement('button-component')
    safeSetButton(component, 'size', 'medium')
    safeSetButton(component, 'type', 'primary')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqulButton(component, 'round', false)
  })
  // Tests to see if the default circle attribute is false
  test('default circle is false', function () {
    const component = document.createElement('button-component')
    safeSetButton(component, 'size', 'medium')
    safeSetButton(component, 'type', 'primary')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqulButton(component, 'circle', false)
  })
  // Tests to see if the default disabled attribute is false
  test('default disabled is false', function () {
    const component = document.createElement('button-component')
    safeSetButton(component, 'size', 'medium')
    safeSetButton(component, 'type', 'primary')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqulButton(component, 'disabled', false)
  })
  // Tests to see if it handles changing the size value
  test('changing size works', function () {
    const component = document.createElement('button-component')
    safeSetButton(component, 'size', 'medium')
    safeSetButton(component, 'type', 'primary')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqulButton(component, 'size', 'medium')
    safeSetButton(component, 'size', 'small')
    attributeEqulButton(component, 'size', 'small')
    safeSetButton(component, 'size', 'mini')
    attributeEqulButton(component, 'size', 'mini')
    safeSetButton(component, 'size', 'medium')
    attributeEqulButton(component, 'size', 'medium')
  })
  // Tests to see if it handles changing the type value
  test('changing type works', function () {
    const component = document.createElement('button-component')
    safeSetButton(component, 'size', 'medium')
    safeSetButton(component, 'type', 'primary')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqulButton(component, 'type', 'primary')
    safeSetButton(component, 'type', 'success')
    attributeEqulButton(component, 'type', 'success')
    safeSetButton(component, 'type', 'warning')
    attributeEqulButton(component, 'type', 'warning')
    safeSetButton(component, 'type', 'danger')
    attributeEqulButton(component, 'type', 'danger')
    safeSetButton(component, 'type', 'info')
    attributeEqulButton(component, 'type', 'info')
    safeSetButton(component, 'type', 'primary')
    attributeEqulButton(component, 'type', 'primary')
  })
  // Tests to see if it handles changing the plain value
  test('changing plain works', function () {
    const component = document.createElement('button-component')
    safeSetButton(component, 'size', 'medium')
    safeSetButton(component, 'type', 'primary')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqulButton(component, 'plain', false)
    component.plain = true
    attributeEqulButton(component, 'plain', true)
    component.plain = false
    attributeEqulButton(component, 'plain', false)
  })
  // Tests to see if it handles changing the round value
  test('changing round works', function () {
    const component = document.createElement('button-component')
    safeSetButton(component, 'size', 'medium')
    safeSetButton(component, 'type', 'primary')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqulButton(component, 'round', false)
    component.round = true
    attributeEqulButton(component, 'round', true)
    component.round = false
    attributeEqulButton(component, 'round', false)
  })
  // Tests to see if it handles changing the circle value
  test('changing circle works', function () {
    const component = document.createElement('button-component')
    safeSetButton(component, 'size', 'medium')
    safeSetButton(component, 'type', 'primary')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqulButton(component, 'circle', false)
    component.circle = true
    attributeEqulButton(component, 'circle', true)
    component.circle = false
    attributeEqulButton(component, 'circle', false)
  })
  // Tests to see if it handles changing the disabled value
  test('changing circle works', function () {
    const component = document.createElement('button-component')
    safeSetButton(component, 'size', 'medium')
    safeSetButton(component, 'type', 'primary')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqulButton(component, 'disabled', false)
    component.disabled = true
    attributeEqulButton(component, 'disabled', true)
    component.disabled = false
    attributeEqulButton(component, 'disabled', false)
  })
  // Tests to see if button's theme is bootsrap
  test('testing bootsrap works', function () {
    const component = document.createElement('button-component')
    safeSetButton(component, 'size', 'medium')
    safeSetButton(component, 'type', 'primary')
    safeSetButton(component, 'theme', 'bootstrap')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqulButton(component, 'theme', 'bootstrap')
  })
})
