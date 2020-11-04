let configData: Config
if (process.env.NODE_ENV === 'development') {
  configData = require('./config.development').config
} else if (process.env.NODE_ENV === 'production') {
  configData = require('./config.production').config
} else if (process.env.NODE_ENV === 'test') {
  configData = require('./config.testing').config
} else {
  configData = require('./config.production').config
}

class Config implements ConfigOption {
  api: Api

  constructor(data: ConfigOption) {
    this.api = data.api
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

export interface ConfigOption {
  api: Api
}

interface Api {
  url: string
}
