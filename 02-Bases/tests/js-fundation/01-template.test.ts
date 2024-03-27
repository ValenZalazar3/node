import { emailTemplate } from '../../src/js-foundation/01-template'

describe('js-foundation/01-template', () => {
  test('Email Template should contein a greeting', () => {
    expect(emailTemplate).toContain('Hi,')
  })

  test('Email Template should contein {{name}} and {{orderId}}', () => {
    expect(emailTemplate).toMatch('{{name}}')
    expect(emailTemplate).toMatch('{{orderId}}')
  })
})
