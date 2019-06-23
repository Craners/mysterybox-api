ls 
sudo apt-get clean
sudo rm -rf /var/lib/apt/lists/*
sudo apt-get clean
sudo apt-get update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
sudo apt-get upgrade
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository 'deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable'
sudo apt update
apt-cache policy docker-ce
apt install docker-ce=18.03.1~ce~3-0~ubuntu
sudo systemctl status docker