# CommandPlayer use case

Ability to call certain /player commands on the minecraft server.

## Input Data

- Player name to affect
- Player action (spawn, kill, start, stop)

## Output Data

- Nothing

## Primary Course

1. Player name and action is valid
1. Login to the AMP minecraft server
1. Spawn or kill the player
1. Do extra actions if necessary for the player

## Exception Cases

- Player name is invalid. Send info about the available player names and what they do
- Action is invalid. Send information about valid actions
