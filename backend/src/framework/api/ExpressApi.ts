import { ApiAdapter } from '../../adapters/api/ApiAdapter'
import { ExpressApiHelper } from './ExpressApiHelper'

export class ExpressApi {
  readonly api: ExpressApiHelper

  constructor(apiAdapter: ApiAdapter) {
    this.api = new ExpressApiHelper(apiAdapter)
    this.bindApi()
  }

  private bindApi() {
    this.bindVerification()
  }

  private bindVerification() {
    this.api.post('/api/player/:player/action/:action', (adapter, request) => {
      const { player, action } = request.params
      return adapter.command.player({ player: player, action: action })
    })
  }
}
