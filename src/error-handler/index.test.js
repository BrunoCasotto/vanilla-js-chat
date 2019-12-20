import {
  throwWrapperIdError,
  throwWrapperMessageError,
  throwWrapperSideError,
  throwWrapperColorError,
  throwOnSendMessageCallbackError,
} from './index'

describe('Error handler', () => {
  test('throwWrapperIdError throw error', () => {
    expect(throwWrapperIdError).toThrow()
  })

  test('throwWrapperMessageError throw error', () => {
    expect(throwWrapperMessageError).toThrow()
  })

  test('throwWrapperSideError throw error', () => {
    expect(throwWrapperSideError).toThrow()
  })

  test('throwWrapperColorError throw error', () => {
    expect(throwWrapperColorError).toThrow()
  })

  test('throwOnSendMessageCallbackError throw error', () => {
    expect(throwOnSendMessageCallbackError).toThrow()
  })

})