import {
  storage
} from '../storage'

import { saveUserName, getUser } from '../user'

jest.mock('../storage')

describe('moks', () => {
  it('Mocks simple ', () => {
    const myMock = jest.fn()
    myMock()
    expect(myMock).not.toBeCalledTimes(3)

  });

  it('Moks compicated', () => {
    const myMock = jest.fn()
      .mockReturnValueOnce(true)
      .mockReturnValueOnce("Hola Perros")
      .mockReturnValueOnce(8)

    const result1 = myMock()
    const result2 = myMock()
    const result3 = myMock()

    expect(result1).toBe(true)
    expect(result2).toBe("Hola Perros")
    expect(result3).toBe(8)
  });

  it('Example save storage', () => {
    const useerName = 'daniel'
    saveUserName(useerName)
    expect(storage.save).toHaveBeenCalled()
    expect(storage.save).toHaveBeenCalledWith({key:"username", value:useerName})

  });

  it('example get storage', () => {
    const userName = 'daniel'
    storage.get.mockReturnValueOnce(userName)
    
    const result = getUser()

    expect(result).toBe(userName)
    expect(storage.get).toBeCalledTimes(1)
    expect(storage.get).toHaveBeenCalledWith({key:'username'})

  });
});