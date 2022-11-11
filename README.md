# Socialtree
*The awesome and damn simple, selfhosted alternative to linktree*
---
## TODO:
- [ ] working template
- [ ] overwrites of default styles with css `!important` for round profile-pic etc.
- [ ] more styles
- [X] Dockerize

## Setup
A up to date docker image is provided at my gitea, but you can also build it yourself.

### Build
1. Clone the repository `git clone https://git.oishi-ra.men/Nikurasu/socialtree-js.git`
2. Copy .env.example to .env and edit it to your needs
3. Build the image. For unix like systems I provide a bash script in `dev/shell/docker-prod.sh`. I hated the hassle to type the full command every time ;)

### Deploy
Done with docker-compose. Use the file at `dev/docker/stacks/main/compose.yml` and edit it to your needs.