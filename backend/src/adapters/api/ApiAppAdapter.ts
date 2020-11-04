import { CommandPlayerInput } from '../../app/command/player/CommandPlayerInput'
import { InteractorAppAdapter } from '../interactor/InteractorAppAdapter'
import { ApiAdapter } from './ApiAdapter'
import { ApiCommandOutput } from './out/ApiCommandOutput'

export class ApiAppAdapter implements ApiAdapter {
  static interactorAdapter = new InteractorAppAdapter()

  command = {
    async player(input: CommandPlayerInput): Promise<ApiCommandOutput> {
      return ApiAppAdapter.interactorAdapter.command.player.execute(input).then((output) => {
        return ApiCommandOutput.fromInteractorOutput(output)
      })
    },
  }
}
