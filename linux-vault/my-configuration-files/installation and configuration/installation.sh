

sudo apt update
sudo apt install xvkbd git xclip npm -y

#1.generate new ssh key
ssh-keygen -t ed25519 -C "antoniopedroalvesdasilva.apads@gmail.com"
#2.copy the ssh key
xclip -sel clip < ~/.ssh/id_ed25519.pub


git clone --depth=1 https://github.com/AdnanHodzic/auto-cpufreq.git
cd auto-cpufreq && sudo ./auto-cpufreq-installer
sudo auto-cpufreq --install
sudo auto-cpufreq --force=performance

sudo apt install curl -y
sudo apt install snapd -y
# instalação do tmux(não terminado)

# instalação do zsh

sudo apt install zsh -y

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions.git ~/.oh-my-zsh/plugins/zsh-autosuggestions

sudo apt install fonts-powerline -y
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/.oh-my-zsh/themes/powerlevel10k

git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
cd ~/.fzf/
./install

# instalaçao do i3

sudo apt install feh -y
sudo apt install xdotool -y
sudo apt install flameshot -y
sudo apt install i3 -y
sudo apt install i3status -y
sudo apt install blueman -y
sudo apt install tilix -y
sudo apt install brightnessctl-y
sudo apt install i3blocks -y
sudo apt install pavucontrol -y
sudo apt install pulseaudio -y
sudo apt install at -y
sudo snap install --beta nvim --classic
sudo snap install micro --classic

# other packages 

sudo apt install gparted -y
sudo apt install ffmpeg -y
sudo apt install nautilus -y
sudo apt preload -y
sudo npm install -g nodemon
sudo snap install node --classic

	# installing mysql
# download mysql-apt-config and run dpkg
sudo apt update

sudo apt install mysql-server -y
sudo sudo mysql_secure_installation

sudo apt update
sudo apt install mysql-workbench-community -y


