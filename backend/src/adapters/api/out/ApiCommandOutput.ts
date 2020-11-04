import { CommandOutput } from '../../../app/command/CommandOutput'
import { Immutable } from '../../../app/core/definitions/Immutable'

export interface ApiCommandOutput {}

export namespace ApiCommandOutput {
  export function fromInteractorOutput(interactorOutput: CommandOutput): Immutable<ApiCommandOutput> {
    return {}
  }
}
