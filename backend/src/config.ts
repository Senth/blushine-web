let configData: Config
if (process.env.NODE_ENV === 'development') {
  configData = require('./config.development').config
} else if (process.env.NODE_ENV === 'production') {
  configData = require('./config.production').config
} else if (process.env.NODE_ENV === 'test') {
  configData = require('./config.testing').config
} else {
  throw new Error('Could not load config file')
}

class Config implements Config.Option {
  server: Server
  amp: Amp

  constructor(data: Config.Option) {
    this.server = data.server
    this.amp = data.amp
  }

  env = {
    isDevelopment(): boolean {
      return process.env.NODE_ENV === 'development'
    },

    isTesting(): boolean {
      return process.env.NODE_ENV === 'test'
    },

    isProduction(): boolean {
      return process.env.NODE_ENV === 'production'
    },
  }
}

export const config = new Config(configData)

export namespace Config {
  export interface Option {
    server: Server
    amp: Amp
  }
}
interface Server {
  port: number
}

interface Amp {
  url: string
  username: string
  password: string
}
