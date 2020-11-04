import * as faker from 'faker'
import { Failure } from '../../core/definitions/Failure'
import { CommandPlayerFactory } from './CommandPlayerFactory'

const validActions = ['spawn', 'kill', 'start', 'stop']

describe('CommandPlayerFactory #cold #command', () => {
  const factory = new CommandPlayerFactory()
  let promise: Promise<string[]>

  it('Valid player, test all actions', async () => {
    promise = factory.create('sand', 'spawn')
    await expect(promise).resolves.not.toThrow()

    promise = factory.create('sand', 'kill')
    await expect(promise).resolves.not.toThrow()

    promise = factory.create('sand', 'start')
    await expect(promise).resolves.not.toThrow()

    promise = factory.create('sand', 'stop')
    await expect(promise).resolves.not.toThrow()
  })

  it('Invalid player name', async () => {
    promise = factory.create('invalid', 'spawn')
    await expect(promise).rejects.toStrictEqual(Failure.create(Failure.Types.commandPlayerNotFound))

    promise = factory.create('invalid', 'invalid')
    await expect(promise).rejects.toStrictEqual(Failure.create(Failure.Types.commandPlayerNotFound))
  })

  it('Invalid player action', async () => {
    promise = factory.create('sand', 'invalid')
    await expect(promise).rejects.toStrictEqual(Failure.create(Failure.Types.commandPlayerActionInvalid, validActions))
  })
})
