/* global suite test assert */
/* global ButtonComponent */

/**
 * This will assert both that the component contains the attribute and has the value.
 * @param {HTMLElement} component The comonent to test
 * @param {string} attribute The attribute of component to test
 * @param {*} value The value that it should be equal to
 */
function assertAttributeEqual (component, attribute, value) {
  assert.isDefined(attribute)
  assert.equal(component[attribute], value)
}

suite('button-component', function () {
  test('all attributes are in component', function () {
    for (var attribute in ['size', 'type', 'plain', 'round', 'circle', 'disabled']) {
      assert.include(ButtonComponent.observedAttributes, attribute)
    }
    const component = document.createElement('button-component')
    component.size = 'medium'
    component.type = 'primary'
    document.body.append(component)
    assert.isDefined(component)
    assertAttributeEqual(component, 'size', 'medium')
    assertAttributeEqual(component, 'type', 'primary')
    assertAttributeEqual(component, 'plain', false)
    assertAttributeEqual(component, 'round', false)
    assertAttributeEqual(component, 'circle', false)
    assertAttributeEqual(component, 'disabled', false)
  })
  // Tests to see if the default plain attribute is false
  test('default plain is false', function () {
    const component = document.createElement('button-component')
    component.size = 'medium'
    component.type = 'primary'
    document.body.append(component)
    assert.isDefined(component)
    assertAttributeEqual(component, 'plain', false)
  })
  // Tests to see if the default round attribute is false
  test('default round is false', function () {
    const component = document.createElement('button-component')
    component.size = 'medium'
    component.type = 'primary'
    document.body.append(component)
    assert.isDefined(component)
    assertAttributeEqual(component, 'round', false)
  })
  // Tests to see if the default circle attribute is false
  test('default circle is false', function () {
    const component = document.createElement('button-component')
    component.size = 'medium'
    component.type = 'primary'
    document.body.append(component)
    assert.isDefined(component)
    assertAttributeEqual(component, 'circle', false)
  })
  // Tests to see if the default disabled attribute is false
  test('default disabled is false', function () {
    const component = document.createElement('button-component')
    component.size = 'medium'
    component.type = 'primary'
    document.body.append(component)
    assert.isDefined(component)
    assertAttributeEqual(component, 'disabled', false)
  })
  // Tests to see if it handles changing the size value
  test('changing size works', function () {
    const component = document.createElement('button-component')
    component.size = 'medium'
    component.type = 'primary'
    document.body.append(component)
    assert.isDefined(component)
    assertAttributeEqual(component, 'size', 'medium')
    component.size = 'small'
    assertAttributeEqual(component, 'size', 'small')
    component.size = 'mini'
    assertAttributeEqual(component, 'size', 'mini')
    component.size = 'medium'
    assertAttributeEqual(component, 'size', 'medium')
  })
  // Tests to see if it handles changing the type value
  test('changing type works', function () {
    const component = document.createElement('button-component')
    component.size = 'medium'
    component.type = 'primary'
    document.body.append(component)
    assert.isDefined(component)
    assertAttributeEqual(component, 'type', 'primary')
    component.type = 'success'
    assertAttributeEqual(component, 'type', 'success')
    component.type = 'warning'
    assertAttributeEqual(component, 'type', 'warning')
    component.type = 'danger'
    assertAttributeEqual(component, 'type', 'danger')
    component.type = 'info'
    assertAttributeEqual(component, 'type', 'info')
    component.type = 'primary'
    assertAttributeEqual(component, 'type', 'primary')
  })
  // Tests to see if it handles changing the plain value
  test('changing plain works', function () {
    const component = document.createElement('button-component')
    component.size = 'medium'
    component.type = 'primary'
    document.body.append(component)
    assert.isDefined(component)
    assertAttributeEqual(component, 'plain', false)
    component.plain = true
    assertAttributeEqual(component, 'plain', true)
    component.plain = false
    assertAttributeEqual(component, 'plain', false)
  })
  // Tests to see if it handles changing the round value
  test('changing round works', function () {
    const component = document.createElement('button-component')
    component.size = 'medium'
    component.type = 'primary'
    document.body.append(component)
    assert.isDefined(component)
    assertAttributeEqual(component, 'round', false)
    component.round = true
    assertAttributeEqual(component, 'round', true)
    component.round = false
    assertAttributeEqual(component, 'round', false)
  })
  // Tests to see if it handles changing the circle value
  test('changing circle works', function () {
    const component = document.createElement('button-component')
    component.size = 'medium'
    component.type = 'primary'
    document.body.append(component)
    assert.isDefined(component)
    assertAttributeEqual(component, 'circle', false)
    component.circle = true
    assertAttributeEqual(component, 'circle', true)
    component.circle = false
    assertAttributeEqual(component, 'circle', false)
  })
  // Tests to see if it handles changing the disabled value
  test('changing circle works', function () {
    const component = document.createElement('button-component')
    component.size = 'medium'
    component.type = 'primary'
    document.body.append(component)
    assert.isDefined(component)
    assertAttributeEqual(component, 'disabled', false)
    component.disabled = true
    assertAttributeEqual(component, 'disabled', true)
    component.disabled = false
    assertAttributeEqual(component, 'disabled', false)
  })
  // Tests to see if button's theme is bootsrap
  test('testing bootsrap works', function () {
    const component = document.createElement('button-component')
    component.size = 'medium'
    component.type = 'primary'
    component.theme = 'bootstrap'
    document.body.append(component)
    assert.isDefined(component)
    assertAttributeEqual(component, 'theme', 'bootstrap')
  })
})
