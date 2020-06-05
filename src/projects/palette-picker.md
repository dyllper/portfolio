---
title: "Color Palette Grabber"
path: "/project/color-palette"
url: "https://determined-jang-6e3673.netlify.app/"
blurb: "A webapp that grabs generates a color palette based on the most vibrant colors in an image."
technologies: "GatsbyJS, NodeJS"
githubClient: "https://github.com/dyllper/palette-picker-client"
githubServer: "https://github.com/dyllper/palette-picker-api"
---

This webapp was created as a way to familiarize myself with how to handle file (specifically image) uploads as well as to learn how to use [GatsbyJS](https://gatsbyjs.org). The application allows a user to upload an image from their computer which will use the [Node-Vibrant](https://github.com/Vibrant-Colors/node-vibrant#readme) package to grab the most vibrant colors from the image. The API will return these colors as an array of hex values which are then used by the client to display a color palette.
