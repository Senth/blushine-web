import React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

const HomePage: React.FC<Props> = (props) => {
  return (
    <div className="content">
      <h1>Server Info</h1>
      <p>
        Blushine is a vanilla++ server for casuals, builders and redstoners. The server uses the same seed as
        Hermitcraft 7.
      </p>

      <h2>Server IP</h2>
      <p>
        IP: senth.org
        <br />
        Use the default port number
      </p>

      <h2>Quality of Life Mods</h2>
      <p>
        A few QoL mods and datapacks have been enabled to make the server a bit less grindy to play. You are also free
        to use any client-side mods that you want. Check out the <Link to="/mods">mods</Link> tab for more information.
      </p>
      <p>We also have a live map where you can see the entire map including online players.</p>
      <p>
        And we also have a voice proximity chat mod that allows you to talk to other players on the server (if they have
        the mod). See the <Link to="/mods">mod page</Link> for more information.
      </p>

      <h2>World Snapshot</h2>
      <p>
        Every hour, a snapshot is taken of the world. Feel free to download this world to design or try things out in
        creative before you build them on the server.
      </p>
      <p>
        <a href="/saves/blushine-world-snapshot.tgz">Download Snapshot</a>
      </p>
    </div>
  )
}

export default HomePage
