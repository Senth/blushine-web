import { Repository } from '../core/definitions/Repository'

export interface CommandRepository extends Repository {
  /**
   * Execute these commands on the minecraft server. Will logon to the server before executing
   * these commands
   * @param commands the commands to execute on the minecraft server
   */
  execute(commands: string[]): Promise<void>
}
