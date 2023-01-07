# Socialtree
*The awesome and damn simple, selfhosted alternative to linktree*
---
## TODO:
- [X] working template
- [ ] overwrites of default styles with css `!important` for round profile-pic etc.
- [ ] more styles
- [X] Dockerize

### TODO until 1.0:
- [X] Import my styles from the old socialtree
- [X] Overwrite for round profile pictures
- [ ] Testing if everything works like expected
- [ ] Expand Documentation
- [ ] Rewrite README

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
