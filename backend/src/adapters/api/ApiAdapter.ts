import { CommandPlayerInput } from '../../app/command/player/CommandPlayerInput'
import { ApiCommandOutput } from './out/ApiCommandOutput'

export interface ApiAdapter {
  command: {
    /**
     * Run a player command on the minecraft server
     */
    player(input: CommandPlayerInput): Promise<ApiCommandOutput>
  }
}
