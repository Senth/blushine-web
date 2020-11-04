import { CommandPlayerInteractor } from '../../app/command/player/CommandPlayerInteractor'

export interface InteractorAdapter {
  command: {
    player: CommandPlayerInteractor
  }
}
