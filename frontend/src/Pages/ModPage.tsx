import React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

const ModPage: React.FC<Props> = (props) => {
  return (
    <div className='content'>
      <h1>Mods</h1>
      <p>A list of all the server side mods and how you can use them.</p>
      <h2>Server Mods</h2>
      <dl>
        <dt>
          <a target='_blank' rel='noreferrer' href='https://www.curseforge.com/minecraft/mc-mods/automated-crafting'>
            Automated Crafting
          </a>
        </dt>
        <dd>Automates the crafting table. Less time spending on crafting items.</dd>

        <dt>
          <a target='_blank' rel='noreferrer' href='https://www.curseforge.com/minecraft/mc-mods/dynmapforge'>
            Dynmap
          </a>
        </dt>
        <dd>
          For our nice <Link to='/map'>map</Link> renderer.
        </dd>

        <dt>
          <a target='_blank' rel='noreferrer' href='https://www.curseforge.com/minecraft/mc-mods/lithium'>
            Lithium
          </a>
        </dt>
        <dd>Server optimizations to make the server run faster and smoother. Doesn't change behavior.</dd>

        <dt>
          <a target='_blank' rel='noreferrer' href='https://www.curseforge.com/minecraft/mc-mods/phosphor'>
            Phosphor
          </a>
        </dt>
        <dd>
          Server (lighting engine) optimizations to make the server run faster and smoother. Doesn't change behavior.
        </dd>

        <dt>
          <a target='_blank' rel='noreferrer' href='https://www.curseforge.com/minecraft/mc-mods/carpet'>
            Carpet
          </a>
        </dt>
        <dd>Mod with lots of options. See carpet section underneath.</dd>
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
              className='tutorial'
              src='https://www.youtube.com/embed/sEQPMNN5UGk'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
              title='Automatic Shulkerboxes - Vacuum and Restock'
              allowFullScreen
            ></iframe>
          </dd>
        </dl>
      </p>
      <h2>Datapacks</h2>
      Most of the datapacks are from{' '}
      <a target='_blank' rel='noreferrer' href='https://vanillatweaks.net/'>
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
            className='tutorial'
            src='https://www.youtube.com/embed/nV9-_RacnoI'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Armor Stand Book Tutorial'
          ></iframe>
        </dd>

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

export default ModPage
