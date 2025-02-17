// ==UserScript==
// @name         Hack Forum Theme Changer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Switch between pre-defined themes on the forum
// @author       Bloodbyte
// @match        *://hackforums.net/*
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    // Define your pre-selected themes
    const themes = {
        "Dark Blood Red": {
            background: "#2C0000",
            text: "#E0E0E0",
            accent: "#FF3333",
            navbar: "#400000"
        },
        "Midnight Blue": {
            background: "#0A0F1B",
            text: "#C0C0C0",
            accent: "#1E90FF",
            navbar: "#1A2A3A"
        },
        "Classic Gray": {
            background: "#333333",
            text: "#F0F0F0",
            accent: "#FFD700",
            navbar: "#444444"
        }
    };

    // Retrieve the current theme from storage; default to "Dark Blood Red"
    let currentThemeName = GM_getValue("currentTheme", "Dark Blood Red");
    let currentTheme = themes[currentThemeName];

    // Function to apply the selected theme by injecting CSS
    function applyTheme(theme) {
        const customCSS = `
            body { background-color: ${theme.background} !important; color: ${theme.text} !important; }
            .header, a { color: ${theme.accent} !important; }
            .navbar, .footer { background-color: ${theme.navbar} !important; }
        `;
        GM_addStyle(customCSS);
    }

    // Function to update the theme choice and reload the page
    function setTheme(themeName) {
        if (themes[themeName]) {
            GM_setValue("currentTheme", themeName);
            location.reload();
        }
    }

    // Register a menu command in Tampermonkey to choose a theme
    GM_registerMenuCommand("Select Forum Theme", function() {
        // Build a simple prompt message with available themes
        const themeNames = Object.keys(themes);
        let chosen = prompt("Choose a theme:\n" + themeNames.join("\n"), currentThemeName);
        if (chosen && themes[chosen]) {
            setTheme(chosen);
        } else {
            alert("Theme not recognized. Please try again.");
        }
    });

    // Apply the current theme when the page loads
    applyTheme(currentTheme);
})();
