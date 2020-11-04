/**
 * Interface for communicating with the Minecraft server
 */
export interface MinecraftGateway {
  /**
   * Run the specified commands on the minecraft server
   * @param commands the commands to run on the minecraft server
   */
  runCommands(commands: string[]): Promise<void>
}
