#!/bin/sh
if [[ ! -d "/app/assets/config" ]] && [[ ! -d "/app/assets/img" ]]; then
    echo "No config found, installing default files"
    cp -R /assets/* /app/assets
fi

echo "Starting node application"
yarn start