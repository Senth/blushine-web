import { CommandPlayerInteractor } from '../../app/command/player/CommandPlayerInteractor'
import { CommandRepositoryAdapter } from '../repository/CommandRepositoryAdapter'
import { InteractorAdapter } from './InteractorAdapter'

export class InteractorAppAdapter implements InteractorAdapter {
  command = {
    player: new CommandPlayerInteractor(new CommandRepositoryAdapter()),
  }
}
