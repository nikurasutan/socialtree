# Socialtree
*The awesome and damn simple, selfhosted alternative to linktree*
---
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://dev.cat-enby.club/Nikurasu/socialtree-js/raw/branch/main/LICENSE.txt)
[![Speed  - Blazing ⚡](https://img.shields.io/badge/Speed_-Blazing_⚡-blue)](https://www.youtube.com/watch?v=oPTwBv9lvhw)

![Screenshot of Nikus Socialtree](https://fileshare.cat-enby.club/GaTA4/PUROBIgo31.png/raw)

- [TODO](#todo)
- [Setup](#setup)
- [Build your own Themes](#build-your-own-theme)

## TODO:
- [X] working template
- [ ] overwrites of default themes with css `!important` for round profile-pic etc.
- [ ] more themes
- [ ] more variations of the themes in version 1.0
- [X] Dockerize
- [ ] Redirection with Routes (your-domain.xyz/mastodon redirects to your mastodon account)

### TODO until 1.0:
- [X] Import my themes from the old socialtree
- [X] Overwrite for round profile pictures
- [X] Testing if everything works like expected
- [X] Expand Documentation
- [X] Rewrite README

## Setup
A up to date docker image is provided at my gitea, but you can also build it yourself.

### Build
1. Clone the repository `git clone https://git.oishi-ra.men/Nikurasu/socialtree-js.git`
2. Copy .env.example to .env and edit it to your needs
3. Build the image. For unix like systems I provide a bash script in `dev/shell/docker-prod.sh`. I hated the hassle to type the full command every time ;)

### Deploy
1. Done with docker-compose. Use the file at `dev/docker/stacks/main/compose.yml` and edit it to your needs.
2. Configure the resulting config.yml file under your mounted assets volume `config/config.yml` and replace the profile pic in the img folder `img/profilepic.jpg`.
   The image name can be ajusted in the config file if needed.

## Build your own theme

### SCSS only
1. Create a new scss file with the themes name in `/src/public/themes`
2. Import any dependencies you need. E.g. for a variant of the blurred theme, you can import the blurred-basic.scss from the utils. If you create a completely new theme create your own basic scss file. Write everything that has to do with the layout in this file. In the scss file in the themes folder, you should only define the colours, if possible.
3. Change the theme variable in `asstets/config.yml`
4. If you want I can merge your theme in the main project here. You can reach me over any platform on my [Socialtree](https://links.nikurasu.gay). I would be happy if the ammont of avalable themes grows.

### Own HTML Body
If you want a completely new layout that requires another layout in the HTML you can also do that.
1. create a new main.ejs for you theme in `src/views/partials`
2. Add your themes name to the customMainPartialThemes array in `src/index.js`
3. Write your own layout. You can see the available variables and their names in `src/index.js`
4. Do the Stuff needed for a SCSS only theme.

To use your themes in Docker you have to rebuild the image.
