import { Failure } from "../../core/definitions/Failure"

type Location = { x: number; y: number; z: number }
type Facing = { horizontal: number; vertical: number }
type Player =
  | "bee"
  | "cobblestone"
  | "concrete"
  | "crimson"
  | "dirt"
  | "pigman"
  | "sand"
  | "shulker"
  | "squid"
  | "wart"
  | "warped"
  | "witch"

enum Actions {
  spawn = "spawn",
  kill = "kill",
  start = "start",
  stop = "stop",
}

export class CommandPlayerFactory {
  private readonly players: PlayerCommand[] = [
    new PlayerBee(),
    new PlayerCobblestone(),
    new PlayerConcrete(),
    new PlayerNetherTreeFarm("crimson"),
    new PlayerDirt(),
    new PlayerPigman(),
    new PlayerSand(),
    new PlayerShulker(),
    new PlayerSquid(),
    new PlayerNetherTreeFarm("warped"),
    new PlayerWart(),
    new PlayerWitch(),
  ]

  /**
   * Create the command. Throws an error if the player name or action is invalid
   * @return all the commands to be run by the Minecraft server
   * @throws player name invalid
   * @thorws action is invalid
   */
  async create(player: string, action: string): Promise<string[]> {
    player = player.toLowerCase()
    action = action.toLowerCase()

    const playerCommand = this.getPlayerCommand(player)

    if (!playerCommand) {
      throw Failure.create(Failure.Types.commandPlayerNotFound)
    }

    switch (action as Actions) {
      case Actions.spawn:
        return playerCommand.spawn()

      case Actions.kill:
        return playerCommand.kill()

      case Actions.start:
        return playerCommand.start()

      case Actions.stop:
        return playerCommand.stop()

      default:
        throw Failure.create(Failure.Types.commandPlayerActionInvalid, Object.keys(Actions))
    }
  }

  /**
   * @returns player command or undefined if not found
   */
  private getPlayerCommand(player: string): PlayerCommand | undefined {
    for (const playerCommand of this.players) {
      if (playerCommand.player === player) {
        return playerCommand
      }
    }
  }
}

enum Dimensions {
  overworld = "minecraft:overworld",
  nether = "minecraft:the_nether",
  end = "minecraft:the_end",
}

namespace PlayerCommand {
  export interface Option {
    readonly player: Player
    readonly location: Location
    /** Defaults to 0 0 */
    readonly facing?: Facing
    /** Defaults to overworld */
    readonly dimension?: Dimensions
    /** appends start() command when calling spawn(), defaults to false */
    readonly startAfterSpawn?: boolean
  }
}

abstract class PlayerCommand implements PlayerCommand.Option {
  readonly player: Player
  readonly location: Location
  readonly facing: Facing
  readonly dimension: Dimensions
  readonly startAfterSpawn: boolean

  constructor(data: PlayerCommand.Option) {
    this.player = data.player
    this.location = data.location

    if (data.facing) {
      this.facing = data.facing
    } else {
      this.facing = { horizontal: 0, vertical: 0 }
    }

    if (data.dimension) {
      this.dimension = data.dimension
    } else {
      this.dimension = Dimensions.overworld
    }
    this.startAfterSpawn = data.startAfterSpawn !== undefined && data.startAfterSpawn
  }

  /**
   * Spawn the player
   */
  spawn(): string[] {
    const command = [
      `/player ${this.player} spawn at ${this.location.x} ${this.location.y} ${this.location.z} facing ${this.facing.horizontal} ${this.facing.vertical} in ${this.dimension}`,
      `/gamemode survival ${this.player}`,
    ]

    if (this.startAfterSpawn) {
      command.push(...this.start())
    }

    return command
  }

  /**
   * Start doing someting. Child classes need to implement this method
   */
  start(): string[] {
    return []
  }

  /**
   * Stop doing everything
   */
  stop(): string[] {
    return [`/player ${this.player} stop`]
  }

  /**
   * Kill the player
   */
  kill(): string[] {
    return [`/player ${this.player} kill`]
  }
}

class PlayerNetherTreeFarm extends PlayerCommand {
  constructor(player: Player) {
    super({
      player: player,
      location: { x: -826.5, y: 16, z: 620.5 },
      facing: { horizontal: 180, vertical: 20 },
      startAfterSpawn: true,
    })
  }

  start(): string[] {
    return [`/player ${this.player} use continuous`, `/player ${this.player} attack interval 60`]
  }
}

class PlayerBee extends PlayerCommand {
  constructor() {
    super({
      player: "bee",
      location: { x: 112.5, y: 197, z: 62.5 },
      dimension: Dimensions.end,
    })
  }
}

class PlayerCobblestone extends PlayerCommand {
  constructor() {
    super({
      player: "cobblestone",
      location: { x: -815.5, y: 16, z: 641.5 },
      facing: { horizontal: 90, vertical: 0 },
      startAfterSpawn: true,
    })
  }

  toggle(): string[] {
    return [`/player ${this.player} use`]
  }

  start(): string[] {
    return this.toggle()
  }

  stop(): string[] {
    return this.toggle()
  }
}

class PlayerConcrete extends PlayerCommand {
  constructor() {
    super({
      player: "concrete",
      location: { x: -853.5, y: 16.1, z: 646.5 },
      facing: { horizontal: 15, vertical: 0 },
      startAfterSpawn: true,
    })
  }

  start(): string[] {
    return [`/player ${this.player} use continuous`]
  }
}

class PlayerDirt extends PlayerCommand {
  constructor() {
    super({
      player: "dirt",
      location: { x: -820, y: 16, z: 651 },
      facing: { horizontal: 90, vertical: 65 },
    })
  }

  start(): string[] {
    return [`/player ${this.player} use continuous`, `/player ${this.player} attack continuous`]
  }
}

class PlayerPigman extends PlayerCommand {
  constructor() {
    super({
      player: "pigman",
      location: { x: -1616.3, y: 175.1, z: -456.478 },
      facing: { horizontal: 90, vertical: 10 },
      dimension: Dimensions.nether,
      startAfterSpawn: true,
    })
  }

  start(): string[] {
    return [`/player ${this.player} attack interval 30`]
  }
}

class PlayerSand extends PlayerCommand {
  constructor() {
    super({
      player: "sand",
      location: { x: -752, y: 183, z: 492 },
    })
  }
}

class PlayerShulker extends PlayerCommand {
  constructor() {
    super({
      player: "shulker",
      location: { x: -521, y: 195, z: 1061 },
      dimension: Dimensions.end,
    })
  }
}

class PlayerSquid extends PlayerCommand {
  constructor() {
    super({
      player: "squid",
      location: { x: -339.5, y: 51.1, z: 2370.5 },
    })
  }
}

class PlayerWart extends PlayerCommand {
  constructor() {
    super({
      player: "wart",
      location: { x: -764.5, y: 11, z: 529.5 },
      facing: { horizontal: 0, vertical: -45 },
    })
  }

  start(): string[] {
    return [
      `/player ${this.player} mount`,
      `/player ${this.player} use continuous`,
      `/player ${this.player} attack continuous`,
    ]
  }

  stop(): string[] {
    return [`/player ${this.player} stop`, `/player ${this.player} dismount`]
  }
}

class PlayerWitch extends PlayerCommand {
  north = {
    player: "witch",
    location: { x: 14088.5, y: 184, z: -15516.5 },
    facing: { horizontal: 0, vertical: 0 },
  }
  center = {
    player: "witcher",
    location: { x: 14104.5, y: 170.5, z: -15453.5 },
    facing: { horizontal: 270, vertical: -10 },
  }
  south = {
    player: "witches",
    location: { x: 14085.5, y: 184, z: -15377.5 },
    facing: { horizontal: 90, vertical: 0 },
  }

  constructor() {
    super({
      player: "witch",
      location: { x: 0, y: 0, z: 0 },
    })
  }

  spawn(): string[] {
    return [
      this.createSpawnString(this.north),
      `/player ${this.north.player} attack interval 30`,
      this.createSpawnString(this.south),
      `/player ${this.south.player} attack interval 30`,
    ]
  }

  start(): string[] {
    return [this.createSpawnString(this.center), `/player ${this.center.player} use`]
  }

  stop(): string[] {
    return [`/player ${this.center.player} kill`]
  }

  kill(): string[] {
    return [`/player ${this.north.player} kill`, `/player ${this.south.player} kill`]
  }

  createSpawnString(place: any): string {
    return `/player ${place.player} spawn at ${place.location.x} ${place.location.y} ${place.location.z} facing ${place.facing.horizontal} ${place.facing.vertical} in ${this.dimension}`
  }
}
