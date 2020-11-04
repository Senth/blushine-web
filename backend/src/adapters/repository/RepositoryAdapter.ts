import { MinecraftGateway } from '../../framework/minecraft/MinecraftGateway'

/**
 * Base repository adapter for all repository adapters
 */
export abstract class RepositoryAdapter {
  protected static minecraftGateway: MinecraftGateway

  /**
   * Set all gateways for all the adapters. This must be called before any adapters can be used correctly.
   * @param minecraftGateway implementation of the minecraft gateway to be used
   */
  static init(minecraftGateway: MinecraftGateway) {
    RepositoryAdapter.minecraftGateway = minecraftGateway
  }
}
