import { Interactor } from '../../core/definitions/Interactor'
import { CommandPlayerInput } from './CommandPlayerInput'
import { CommandOutput } from '../CommandOutput'
import { CommandRepository } from '../CommandRepository'
import { CommandPlayerFactory } from './CommandPlayerFactory'

/**
 * Generates a Minecraft /player command and sends it to the Minecraft server
 */
export class CommandPlayerInteractor extends Interactor<CommandPlayerInput, CommandOutput, CommandRepository> {
  readonly factory = new CommandPlayerFactory()

  constructor(repository: CommandRepository) {
    super(repository)
  }

  /**
   * Generates a Minecraft /player command and sends it to the Minecraft server
   * @throws {Failure} if the player is not found or the action is invalid
   * @throws {Failure} if no connection could be establish to the Minecaft server
   */
  async execute(input: CommandPlayerInput): Promise<CommandOutput> {
    this.input = input

    const promise = this.factory
      .create(input.player, input.action)
      .then((commands) => {
        return this.repository.execute(commands)
      })
      .then(() => {
        return {}
      })

    return promise
  }
}
