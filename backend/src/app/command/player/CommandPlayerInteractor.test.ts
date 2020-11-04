import { CommandPlayerInteractor } from './CommandPlayerInteractor'
import { CommandPlayerInput } from './CommandPlayerInput'
import { CommandOutput } from '../CommandOutput'
import * as faker from 'faker'
import { CommandRepository } from '../CommandRepository'
import { Failure } from '../../core/definitions/Failure'

describe('CommandPlayer interactor #cold #use-case', () => {
  let interactor: CommandPlayerInteractor
  let repository: CommandRepository
  let input: CommandPlayerInput
  let output: CommandOutput
  let promise: Promise<CommandOutput>

  beforeEach(() => {
    repository = {
      async execute(commands): Promise<void> {},
    }

    interactor = new CommandPlayerInteractor(repository)
  })

  it('Valid action', async () => {
    promise = interactor.execute({ player: 'sand', action: 'spawn' })
    await expect(promise).resolves.not.toThrow()
  })

  it('Invalid player name or action', async () => {
    promise = interactor.execute({ player: 'sand', action: 'invalid' })
    await expect(promise).rejects.toBeTruthy()

    promise = interactor.execute({ player: 'something', action: 'invalid' })
    await expect(promise).rejects.toBeTruthy()
  })

  it('Error connectiing to server', async () => {
    repository = {
      async execute(commands): Promise<void> {
        throw Failure.create(Failure.Types.minecraftConnection)
      },
    }
    interactor = new CommandPlayerInteractor(repository)

    promise = interactor.execute({ player: 'sand', action: 'spawn' })
    await expect(promise).rejects.toStrictEqual(Failure.create(Failure.Types.minecraftConnection))
  })
})
