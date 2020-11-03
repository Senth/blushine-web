export class CommandPlayer {
  constructor(readonly player: CommandPlayer.Players, readonly action: CommandPlayer.Actions) {}
}

export namespace CommandPlayer {
  export enum Players {
    sand = 'Sand',
    pigman = 'Pigman',
    dirt = 'Dirt',
    shulker = 'Shulker',
  }

  export enum Actions {
    spawn = 'spawn',
    kill = 'kill',
    start = 'start',
    stop = 'stop',
  }
}
