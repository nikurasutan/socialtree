docker build -t dev.cat-enby.club/nikurasu/socialtree:latest -f dev/docker/images/main/Dockerfile --no-cache .
docker build -t dev.cat-enby.club/nikurasu/socialtree:$1 -f dev/docker/images/main/Dockerfile .
