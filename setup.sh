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
sudo apt-get install docker-ce docker-ce-cli containerd.io
apt-cache madison docker-ce
sudo apt-get install docker-ce=5:18.09.6~3-0~ubuntu-bionic docker-ce-cli=5:18.09.6~3-0~ubuntu-bionic containerd.io
sudo systemctl status docker