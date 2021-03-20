import React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

const ModPage: React.FC<Props> = (props) => {
  return (
    <div className="content">
      <h1>Mods</h1>
      <h2>Client Mods</h2>
      <p>
        Mods I personally use, but not required to play on the server. Follow the tutorial to install these mods.
        <br />
        <a target="_blank" rel="noreferrer" href="/files/mods.zip">
          Download client mods
        </a>
        <iframe
          className="tutorial"
          src="https://www.youtube.com/embed/D-woOfkNmaw"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          title="Automatic Shulkerboxes - Vacuum and Restock"
          allowFullScreen
        ></iframe>
      </p>
      <p>
        I also use this resource pack to get nicer textures. Feel free to download and use it. To use it place the zip
        file in the resourcepacks folder.
        <br />
        <a target="_blank" rel="noreferrer" href="/files/resource_pack.zip">
          Download resource pack
        </a>
      </p>
      <dl>
        <Mod href="https://www.curseforge.com/minecraft/mc-mods/advancementinfo" name="Advancement Info">
          Larger advancement window (useful for Blaze and Cave's advancement pack).
        </Mod>

        <Mod href="https://www.curseforge.com/minecraft/mc-mods/automated-crafting" name="Automated Crafting">
          Automates the crafting table. Less time spending on crafting items.
        </Mod>

        <Mod href="https://www.curseforge.com/minecraft/mc-mods/craftpresence" name="Craft Presence">
          Adds rich information to your Discord profile.
        </Mod>

        <Mod href="https://www.curseforge.com/minecraft/mc-mods/carpet" name="Carpet">
          Mod with lots of options. See carpet section underneath.
        </Mod>

        <Mod href="https://www.curseforge.com/minecraft/mc-mods/item-scroller" name="Item Scroller">
          Exceptionally useful mod for moving items between inventory and chest, and bulk crafting.
        </Mod>

        <Mod href="https://www.curseforge.com/minecraft/mc-mods/lambdynamiclights" name="Lamb Dynamic Lights">
          Dynamic lighting, similar to Optifine's feature
        </Mod>

        <Mod href="https://www.curseforge.com/minecraft/mc-mods/light-overlay" name="Light Overlay">
          Render blocks that are spawnable (togglable by pressing F7). Great for spawn proofing.
        </Mod>

        <Mod href="https://www.curseforge.com/minecraft/mc-mods/litematica" name="Litematica">
          Design your buildings or contraptions in creative. Save them in Litematica, and follow the blueprint when
          building on the server.
        </Mod>

        <Mod href="https://www.curseforge.com/minecraft/mc-mods/lithium" name="Lithium">
          Client optimizations to make the client run faster and smoother. Doesn't change behavior.
        </Mod>

        <Mod href="https://www.curseforge.com/minecraft/mc-mods/minihud" name="MiniHUD">
          Render spawning spheres and other useful information
        </Mod>

        <Mod href="https://www.curseforge.com/minecraft/mc-mods/modmenu" name="Mod Menu">
          A Menu for all mods.
        </Mod>

        <Mod href="https://www.curseforge.com/minecraft/mc-mods/phosphor" name="Phosphor">
          Client (lighting engine) optimizations to make the client run faster and smoother. Doesn't change behavior.
        </Mod>

        <Mod href="https://www.curseforge.com/minecraft/mc-mods/sodium" name="Sodium">
          Client rendering optimization mod. Like Optifine without a lot of settings.
        </Mod>

        <Mod href="https://www.curseforge.com/minecraft/mc-mods/tweakeroo" name="Tweakeroo">
          Lots of options, but I mainly use it for smart block placement and pressing through item frames.
          <iframe
            className="tutorial"
            title="Tweakeroo Tutorial"
            src="https://www.youtube.com/embed/v2YF7F7O0Ms?start=167"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Mod>
      </dl>
      <h2>Server Mods</h2>
      <p>A list of all the server side mods and how you can use them.</p>
      <dl>
        <Mod href="https://www.curseforge.com/minecraft/mc-mods/automated-crafting" name="Automated Crafting">
          Automates the crafting table. Less time spending on crafting items.
        </Mod>

        <Mod href="https://www.curseforge.com/minecraft/mc-mods/craftpresence" name="Carpet">
          Adds extra features to the server, see the Carpet Mod section below.
        </Mod>

        <Mod href="https://www.curseforge.com/minecraft/mc-mods/dynmapforge" name="Dynmap">
          For our nice <Link to="/map">map</Link> renderer.
        </Mod>

        <Mod href="https://www.curseforge.com/minecraft/mc-mods/lithium" name="Lithium">
          Server optimizations to make the server run faster and smoother. Doesn't change behavior.
        </Mod>

        <Mod href="https://www.curseforge.com/minecraft/mc-mods/phosphor" name="Phosphor">
          Server (lighting engine) optimizations to make the server run faster and smoother. Doesn't change behavior.
        </Mod>
      </dl>
      <h3>Carpet Mod</h3>
      <p>
        Carpet mod has lot of options that can be turned on. Most of them are turned off on this server, but here are
        those that are turned on, some of these are only accessible by operators. Some limited feature will come to this
        site in the future.
        <dl>
          <dt>TPS &amp; Entity information</dt>
          <dd>Shows extra information when pressing TAB</dd>

          <dt>Shulkers spawn in end cities</dt>
          <dd>Shulkers now spawn in end cities. No more reason to travel far away and increase the world size.</dd>

          <dt>/player</dt>
          <dd>Ability to spawn in bots, rather than having a client turned on.</dd>

          <dt>/script</dt>
          <dd>Scarpet functionality. Ability to see bounding boxes.</dd>

          <dt>/shulkerboxes</dt>
          <dd>
            An improved system for handling your inventory. Just write /shulkerboxes in chat for usage, you can also
            watch this video for more usages. Our server also has another keyword 'keep' that keeps one item in the
            shulker box.
            <iframe
              className="tutorial"
              src="https://www.youtube.com/embed/sEQPMNN5UGk"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              title="Automatic Shulkerboxes - Vacuum and Restock"
              allowFullScreen
            ></iframe>
          </dd>
        </dl>
      </p>
      <h2>Datapacks</h2>
      Most of the datapacks are from{' '}
      <a target="_blank" rel="noreferrer" href="https://vanillatweaks.net/">
        Vanilla Tweaks
      </a>
      .
      <dl>
        <dt>Anti Enderman Grief</dt>
        <dd>Enderman can't pickup blocks.</dd>

        <dt>Armor Statues</dt>
        <dd>
          Create your own armor statues. Same feature as in Hermitcraft. Watch this tutorial to get started.
          <iframe
            className="tutorial"
            src="https://www.youtube.com/embed/nV9-_RacnoI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Armor Stand Book Tutorial"
          ></iframe>
        </dd>

        <dt>Blaze and Cave's Advancement Pack</dt>
        <dd>Adds over 850 advancements to the game.</dd>

        <dt>Droppers to Dispensers</dt>
        <dd>Allows you to craft Disperser with 1 dropper, 3 sticks, and 3 string.</dd>

        <dt>Dragon Drops</dt>
        <dd>Dragon always drops elytra, egg, and head.</dd>

        <dt>Durability Ping</dt>
        <dd>Warns the player when tools have low durability.</dd>

        <dt>Husks Drop Sand</dt>
        <dd>Husks drop sand, making Sand farmable.</dd>

        <dt>Invilible Item Frame</dt>
        <dd>Adds a recipe for invisible item frames (use glass pane instead of leather).</dd>

        <dt>More Mob Heads</dt>
        <dd>Adds mob head drops for all mobs.</dd>

        <dt>Multiplayer Sleep</dt>
        <dd>Only one player has to sleep for the night to pass.</dd>

        <dt>Player Head Drops</dt>
        <dd>All player kills drop heads.</dd>

        <dt>Silence Mobs</dt>
        <dd>Silence mobs by naming them 'Silence me' with a name tag.</dd>

        <dt>Terracotta Rotation Wrench</dt>
        <dd>Adds an item that allows you to rotate glazed terracotta.</dd>

        <dt>Track Statistics (incl. Raw)</dt>
        <dd>Tracks a lot of various things that can be displayed in a scoreboard.</dd>

        <dt>Universal Dyeing</dt>
        <dd>Allows you to dye any dyeable block into another color, even if it's already colored.</dd>

        <dt>Wandering Trades</dt>
        <dd>Wandering traders sell miniblocks and Hermit heads.</dd>
      </dl>
    </div>
  )
}

interface ModProps {
  href: string
  name: string
}

class Mod extends React.Component<ModProps> {
  render() {
    return (
      <React.Fragment>
        <dt>
          <a target="_blank" rel="noreferrer" href={this.props.href}>
            {this.props.name}
          </a>
        </dt>
        <dd>{this.props.children}</dd>
      </React.Fragment>
    )
  }
}

export default ModPage
