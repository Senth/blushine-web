import fetch, { RequestInit } from "node-fetch"
import { URL } from "url"
import { Failure } from "../../app/core/definitions/Failure"
import { config } from "../../config"
import { MinecraftGateway } from "./MinecraftGateway"

export class AmpGateway implements MinecraftGateway {
  private minecraftSessionId?: string

  async runCommands(commands: string[]): Promise<void> {
    for (const command of commands) {
      await this.loginAndRunCommand(command)
    }
  }

  /**
   * Login to the AMP Minecraft Module. This will set the minecraftSessionId
   */
  private async loginMinecraftModule(): Promise<void> {
    return this.login("Blushine/API/Core/Login").then((sessionId) => {
      this.minecraftSessionId = sessionId
    })
  }

  private async login(uri: string): Promise<string> {
    const url = this.url(uri)
    const loginBody = new LoginBody(config.amp.username, config.amp.password).toJson()
    const options = this.buildOptions(loginBody)
    return fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw Failure.create(Failure.Types.minecraftConnection)
        }
      })
      .then((blob) => {
        if (blob.success) {
          return blob.sessionID
        } else {
          throw Failure.create(Failure.Types.minecraftConnection)
        }
      })
  }

  /**
   * Run one specified command on the minecraft server. Logins in again if needed
   * @param command the command to run
   */
  private async loginAndRunCommand(command: string): Promise<void> {
    let promise: Promise<void>

    // Login first, then run command
    if (!this.minecraftSessionId) {
      promise = this.loginMinecraftModule().then(() => {
        return this.runCommand(command)
      })
    }
    // Already loggin in, try running command. If fail, login and try again
    else {
      promise = this.runCommand(command).catch(() => {
        this.minecraftSessionId = undefined
        return this.loginAndRunCommand(command)
      })
    }

    return promise
  }

  private async runCommand(command: string): Promise<void> {
    const sessionId: string = this.minecraftSessionId || ""
    const body = new CommandBody(sessionId, command).toJson()
    const option = this.buildOptions(body)
    return fetch(this.url("Blushine/API/Core/SendConsoleMessage"), option)
      .then((response) => {
        if (!response.ok) {
          throw Failure.create(Failure.Types.minecraftConnection)
        }
      })
      .catch(() => {
        throw Failure.create(Failure.Types.minecraftConnection)
      })
  }

  private url(uri: string): URL {
    return new URL(uri, config.amp.url)
  }

  private buildOptions(body?: string): RequestInit {
    return {
      method: "POST",
      body: body,
      headers: {
        Accept: "application/json",
      },
    }
  }
}

abstract class Body {
  toJson(): string {
    return JSON.stringify(this)
  }
}

abstract class LoggedInBody extends Body {
  constructor(readonly SESSIONID: string) {
    super()
  }
}

class LoginBody extends Body {
  readonly token = ""
  readonly rememberMe = false

  constructor(readonly username: string, readonly password: string) {
    super()
  }
}

class CommandBody extends LoggedInBody {
  constructor(sessionId: string, readonly message: string) {
    super(sessionId)
  }
}
