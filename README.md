# HF-Themes
Custom themes for Hack Forums via Tampermonkey extension


# Forum Theme Switcher

Welcome to **Forum Theme Switcher** – a slick Tampermonkey userscript that lets you transform any forum's look with just a few clicks. Whether you're in the mood for a dark, edgy vibe or a sleek, modern twist, this script has you covered.

## Features

- **Multiple Pre-Selected Themes:**  
  Choose from themes like *Dark Blood Red*, *Midnight Blue*, *Classic Gray*, and more to instantly change the forum’s appearance.

- **Persistent Theme Selection:**  
  Your chosen theme is saved, so every time you visit, your personalized look is ready to roll.

- **Easy Theme Switching:**  
  Use a handy menu command (via Tampermonkey) to switch themes on the fly without any fuss.

- **Customizable and Extendable:**  
  Add or tweak themes easily by editing the script’s configuration. The possibilities are endless, bro!

## Installation

1. **Install Tampermonkey:**  
   Get [Tampermonkey](https://www.tampermonkey.net/) for your browser (Chrome, Firefox, Edge, etc.).

2. **Add the Script:**  
   - Click on the Tampermonkey icon in your browser toolbar and select **"Create a new script..."**.
   - Replace the default code with the contents of `theme_switcher.user.js` (this repository).
   - Save the script.

3. **Configure the @match URL:**  
   Ensure the `@match` directive in the script covers the forum(s) you want to customize. For example:  
   ```javascript
   // @match        *://exampleforum.com/*
