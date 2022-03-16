#!/bin/bash

chmod +x ubuntu.sh

function install-docker-compose() {
  # Install docker
  sudo apt update
  sudo apt remove docker docker-engine docker.io -y
  sudo apt install docker.io -y

  # Install docker-compose
  sudo curl -L "https://github.com/docker/compose/releases/download/1.28.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  sudo chmod +x /usr/local/bin/docker-compose
  sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

  # Give docker permission to run without sudo
  sudo groupadd docker
  sudo gpasswd -a $USER docker
  newgrp docker
}