import { Input } from '../../core/definitions/Input'
import { CommandPlayer } from '../../core/entities/CommandPlayer'

export interface CommandPlayerInput extends Input {
  player: CommandPlayer.Players
  action: CommandPlayer.Actions
}
