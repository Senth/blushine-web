import React from "react"
import "./CommandPage.css"
import { config } from "../config"

interface Props {}

const CommandPage: React.FC<Props> = (props) => {
  return (
    <div className="content">
      <h1>Commands</h1>
      <p>This page is for running various commands on the server</p>

      <h2>/player</h2>
      <table className="commands">
        <Player name="Concrete" />
        <Player name="Crimson" />
        <Player name="Dirt" />
        <Player name="Pigman" />
        <Player name="Sand" />
        <Player name="Shulker" />
        <Player name="Warped" />
      </table>
    </div>
  )
}

interface PlayerProps {
  name: string
}

class Player extends React.Component<PlayerProps> {
  render() {
    return (
      <React.Fragment>
        <tbody>
          <tr className="command">
            <td className="command-name">{this.props.name}</td>
            <Action player={this.props.name} action="spawn" icon="power_settings_new" />
            <Action player={this.props.name} action="start" icon="play_arrow" />
            <Action player={this.props.name} action="stop" icon="stop" />
            <Action player={this.props.name} action="kill" icon="power_settings_new" />
          </tr>
        </tbody>
      </React.Fragment>
    )
  }
}

interface ActionProps {
  player: string
  action: string
  icon: string
}

class Action extends React.Component<ActionProps> {
  constructor(props: ActionProps) {
    super(props)
    this.execute = this.execute.bind(this)
  }

  render() {
    const className = "material-icons " + this.props.action
    return (
      <td>
        <i className={className} onClick={this.execute}>
          {this.props.icon}
        </i>
      </td>
    )
  }

  execute() {
    const url = config.api.url + `/player/${this.props.player}/action/${this.props.action}`
    const requestInit: RequestInit = {
      method: "post",
    }
    fetch(url, requestInit)
      .then((response) => {
        // TODO success
      })
      .catch((reason) => {
        // TODO error
      })
  }
}

export default CommandPage
