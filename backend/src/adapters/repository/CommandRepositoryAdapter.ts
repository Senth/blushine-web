import { CommandRepository } from '../../app/command/CommandRepository'
import { RepositoryAdapter } from './RepositoryAdapter'

export class CommandRepositoryAdapter extends RepositoryAdapter implements CommandRepository {
  execute(commands: string[]): Promise<void> {
    return RepositoryAdapter.minecraftGateway.runCommands(commands)
  }
}
