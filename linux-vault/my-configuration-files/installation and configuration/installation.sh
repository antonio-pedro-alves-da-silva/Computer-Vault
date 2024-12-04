


#1.generate new ssh key
ssh-keygen -t ed25519 -C "antoniopedroalvesdasilva.apads@gmail.com"
#2.copy the ssh key
xclip -sel clip < ~/.ssh/id_ed25519.pub


sudo apt update
sudo apt-get install xvkbd git xclip -y

git clone --depth=1 https://github.com/AdnanHodzic/auto-cpufreq.git
cd auto-cpufreq && sudo ./auto-cpufreq-installer
sudo auto-cpufreq --install
sudo auto-cpufreq --force=performance

sudo apt-get install curl -y
sudo apt-get install snapd -y
# instalação do tmux(não terminado)

# instalação do zsh

sudo apt-get install zsh -y

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions.git ~/.oh-my-zsh/plugins/zsh-autosuggestions

sudo apt-get install fonts-powerline -y
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/.oh-my-zsh/themes/powerlevel10k

git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
cd ~/.fzf/
./install

# instalaçao do i3

sudo apt-get install feh -y
sudo apt-get install xdotool -y
sudo snap install node --classic
sudo apt-get install flameshot -y
sudo apt-get install i3 -y
sudo apt-get install i3status -y
sudo apt-get install blueman -y
sudo apt-get install tilix -y
sudo apt-get install brightnessctl
sudo apt-get install i3blocks -y

# other packages 

sudo apt-get install gparted -y
sudo apt-get install ffmpeg -y
sudo apt-get install pavucontrol -y
sudo apt-get install pulseaudio -y
sudo apt-get install nautilus -y
sudo snap install code --classic
sudo npm install -g nodemon

	# installing mysql
# download mysql-apt-config and run dpkg
sudo apt-get update

sudo apt-get install mysql-server -y
sudo sudo mysql_secure_installation

sudo apt-get update
sudo apt-get install mysql-workbench-community -y


