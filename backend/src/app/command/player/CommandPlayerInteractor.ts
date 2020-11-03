import { Interactor } from '../../core/definitions/Interactor'
import { CommandPlayerInput } from './CommandPlayerInput'
import { CommandOutput } from '../CommandOutput'
import { CommandPlayerRepository } from './CommandPlayerRepository'

/**
 * TODO Write documentation for CommandPlayerInteractor
 * Contains the business logic of the specific use case.
 * Interacts with the underlying entities (enterprise wide
 * business rules)
 */
export class CommandPlayerInteractor extends Interactor<CommandPlayerInput, CommandOutput, CommandPlayerRepository> {
  constructor(repository: CommandPlayerRepository) {
    super(repository)
  }

  /**
   * TODO Write documentation for CommandPlayerInteractor.execute()
   * @param input
   * @return {Promise.<CommandOutput>}
   * @throws
   */
  async execute(input: CommandPlayerInput): Promise<CommandOutput> {
    this.input = input

    return {}
  }
}
