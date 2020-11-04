import { ApiAppAdapter } from './adapters/api/ApiAppAdapter'
import { RepositoryAdapter } from './adapters/repository/RepositoryAdapter'
import { ExpressApi } from './framework/api/ExpressApi'
import { AmpGateway } from './framework/minecraft/AmpGateway'

RepositoryAdapter.init(new AmpGateway())
const apiAdapter = new ApiAppAdapter()
const expressApi = new ExpressApi(apiAdapter)
