# Simple Soundboard - Svelte Edition

This repo is a Svelte rewrite of my [Simple Soundboard](https://github.com/digitalcolony/Simple-Soundboard), which uses jQuery.

## Add Sounds and Setup a JSON file

Add the sound files you wish to have on your soundboard in the /public/sounds/ folder. Then create a JSON file to describe those files.

```json
  "files": [
    {
      "name": "1 to 12 hour",
      "artist": "Boca Britany Somers",
      "mp3": "/sounds/1-to-12-hour.mp3"
    },
    {
      "name": "2 of the Dumbest White Men",
      "artist": "Mike Reineri",
      "mp3": "/sounds/2-of-the-Dumbest-White-Men.mp3"
    }
  ]
```

## Build and Deploy

Visit the [Svelte website](https://svelte.dev/) to learn how to setup, build, and deploy a Svelte website.
