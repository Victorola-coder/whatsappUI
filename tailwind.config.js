/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    "extend": {
      animation: {
        "marquee": "marquee 10s linear infinite",
        "sparkle-1": "sparkle 3s infinite",
        "sparkle-2": "sparkle 5s infinite",
        "sparkle-3": "sparkle 10s infinite",
        "fade-in": "fadeIn 0.5s linear",
        "loading-circle-1": "loadingCircle1 3s linear infinite",
        "loading-circle-2": "loadingCircle2 3s linear infinite",
        "border": "borderAnimation 4s linear infinite",
        "translate-x-1": "transX 2s ease-in infinite",
        "translate-x-2": "transX 3s ease-in infinite",
        "translate-x-3": "transX 4s ease-in infinite",
        "marquee-2": "marquee2 2s ease-in infinite",
        "maybe":"color .33s linear .5s, border-color ease-out .5s, background-color .33s linear 0s"
      },
      keyframes: {
        borderAnimation: {
          "0%": { "border-left": "2px solid #ffffff80" },
          "25%": { "border-top": "2px solid #ffffff80" },
          "50%": { "border-right": "2px solid #ffffff80" },
          "75%": { "border-bottom": "2px solid #ffffff80" },
          "100%": { "border-left": "2px solid #ffffff80" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
        transX: {
          "0%": { transform: "translateX(0%)", opacity: "0" },
          "100%": { transform: "translateX(100%)", opacity: "1" },
        },
        loadingCircle1: {
          "0%": { transform: "translateX(0%)", opacity: 0 },
          "10%": { opacity: 1 },
          "75%": { transform: "translateX(75%)" },
          "100%": { opacity: 0 },
        },
        loadingCircle2: {
          "0%": { transform: "translateX(0%)", opacity: 0, },
          "10%": { opacity: 1, },
          "75%": { transform: "translateX(-75%)" },
          "100%": { opacity: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        sparkle: {
          '0%': { opacity: 1, scale: "0" },
          '50%': { scale: 1 },
          '100%': { opacity: 0, rotate: "180deg", scale: "1" },
        },
      },
      "fontFamily": {
        'sans': ['Inter', 'sans-serif'],
        "sf-pro-display": "'SF Pro Display'"
      },
      "colors": {
        "gray": {
          "100": "#929292",
          "200": "#7c7c7c",
          "300": "#2b1b31",
          "400": "#0d0a18",
          "500": "#0b0814",
          "600": "rgba(255, 255, 255, 0)",
          "700": "rgba(10, 7, 19, 0.95)"
        },
        "lavender": {
          "100": "#f4f0ff",
          "200": "rgba(239, 237, 253, 0.7)",
          "300": "rgba(243, 238, 255, 0.1)",
          "400": "rgba(243, 238, 255, 0.08)",
          "500": "rgba(239, 237, 253, 0.6)"
        },
        "whitesmoke": "#f7f8f8",
        "lightslategray": "#8a8f98",
        "lightgray": "#d0d6e0",
        "lightsteelblue": "#b4bcd0",
        "white": "#fff",
        "dimgray": "rgba(109, 109, 109, 0.05)",
        "green": "#25d366",
        "blackk": "#1c1e21"
      },
      "borderRadius": {
        "41xl": "60px",
        "9980xl": "9999px"
      }
    },
  },
  "corePlugins": {
    // "preflight": false,
  }
}

/* 
  "theme": {
      "extend": {
          "colors": {
              "gray": "rgba(255, 255, 255, 0.1)",
              "lavender": {
                  "100": "#f4f0ff",
                  "200": "rgba(239, 237, 253, 0.7)",
                  "300": "rgba(243, 238, 255, 0.1)",
                  "400": "rgba(243, 238, 255, 0.08)",
                  "500": "rgba(239, 237, 253, 0.6)"
              }
          },
          "fontFamily": {
              "inter": "Inter",
              "roboto": "Roboto"
          }
      },
      "fontSize": {
          "sm": "0.88rem"
      }
  },
  "corePlugins": {
      "preflight": false
  }
}
 */