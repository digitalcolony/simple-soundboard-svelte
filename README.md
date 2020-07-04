<p style="text-align:center;">
<img src="https://michaelallensmith.com/images/svelte-soundboard.jpg" alt="Simple Soundboard - Svelte Edition"/>
</p>

# 🔊 Simple Soundboard - Svelte Edition

This repo is a Svelte rewrite of my [Simple Soundboard](https://github.com/digitalcolony/Simple-Soundboard), which uses jQuery.

## 🎼 Add Sounds and Setup a JSON file

Add the sound files you wish to have on your soundboard in the /public/sounds/ folder. Then create a JSON file to describe those files.

```json
   {
      "name": "A Stench of Cow Manure...",
      "artist": "Jim Mandich",
      "mp3": "/sounds/A-Stench-of-Cow-Manure.mp3"
    },
    {
      "name": "Absolutely Correct Sir",
      "artist": "Neil Rogers/Old Bridge Dude",
      "mp3": "/sounds/Absolutely-Correct-Sir.mp3"
    },
    {
      "name": "Anybody have a heart or a liver",
      "artist": "Jennifer Rehm",
      "mp3": "/sounds/Anybody-have-a-heart-or-a-liver.mp3"
    }
  ]
```

## 🔨 Build and Deploy

Visit the [Svelte website](https://svelte.dev/) to learn how to setup, build, and deploy a Svelte website.
