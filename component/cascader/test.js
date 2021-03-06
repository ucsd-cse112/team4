/* global suite test assert */

suite('cascader-component', function () {
  test('temp', function () {
    const component = document.createElement('cascader-component')
    component.options = [{
      value: 'team 4',
      label: 'Team 4',
      children: [{
        value: 'team lead',
        label: 'Team Lead',
        children: [{
          value: 'christopher thomas',
          label: 'Christopher Thomas'
        }]
      },
      {
        value: 'team co-lead',
        label: 'Team Co-Lead',
        children: [{
          value: 'harrison wang',
          label: 'Harrison Wang'
        }]
      },
      {
        value: 'dev-ops',
        label: 'Dev-Ops',
        children: [{
          value: 'jiajin liang',
          label: 'Jiajin Liang'
        },
        {
          value: 'evan nguyen',
          label: 'Evan Nguyen'
        }]
      },
      {
        value: 'tools and utility',
        label: 'Tools and utility',
        children: [{
          value: 'amir farhan',
          label: 'Amir Farhan'
        },
        {
          value: 'yankai zhang',
          label: 'Yankai Zhang'
        }]
      },
      {
        value: 'coders',
        label: 'Coders',
        children: [{
          value: 'russel brobst',
          label: 'Russel Brobst'
        },
        {
          value: 'garett crawford',
          label: 'Garett Crawford'
        }]
      },
      {
        value: 'quality assurance',
        label: 'Quality Assurance',
        children: [{
          value: 'bart tam',
          label: 'Bart Tam'
        },
        {
          value: 'erick soto',
          label: 'Erick Soto'
        }]
      }]
    }]
    document.body.append(component)
    assert.isDefined(component)
  })
  // Tests toggling cascader menu after clicking
  test('opening and closing cascader works', function () {
    const component = document.createElement('cascader-component')
    component.options = [{
      value: 'colors',
      label: 'Colors',
      children: [{
        value: 'Red',
        label: 'Red',
        children: [{
          value: 'Another Color',
          label: 'Another Color'
        }]
      }, {
        value: 'Blue',
        label: 'Blue'
      }, {
        value: 'Green',
        label: 'Green'
      }]
    }]
    component.setAttribute('menudisplay', 'none')
    document.body.append(component)
    assert.isDefined(component)
    // test before opening menu
    assert.equal(component.getAttribute('menudisplay'), 'none')
    // test open menu now
    component.setAttribute('menudisplay', 'inline-block')
    assert.equal(component.getAttribute('menudisplay'), 'inline-block')
  })
  // Tests changing cascader type attribute
  test('changing type attribute works', function () {
    const component = document.createElement('cascader-component')
    document.body.append(component)
    assert.isDefined(component)
    component.setAttribute('type', 'default')
    assert.equal(component.getAttribute('type'), 'default')
  })
})
