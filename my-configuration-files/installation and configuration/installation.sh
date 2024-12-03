


#1.generate new ssh key
ssh-keygen -t ed25519 -C "antoniopedroalvesdasilva.apads@gmail.com"
#2.copy the ssh key
xclip -sel clip < ~/.ssh/id_ed25519.pub


sudo apt update
sudo add-apt-repository ppa:apt-fast/stable
sudo apt install apt-fast -y
sudo apt-fast install xvkbd -y

git clone --depth=1 https://github.com/AdnanHodzic/auto-cpufreq.git
cd auto-cpufreq && sudo ./auto-cpufreq-installer
sudo auto-cpufreq --install
sudo auto-cpufreq --force=performance

sudo apt-fast install curl -y
sudo apt-fast install snapd -y
# instalação do tmux(não terminado)

# instalação do zsh

sudo apt-fast install zsh -y

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions.git ~/.oh-my-zsh/plugins/zsh-autosuggestions

sudo apt-fast install fonts-powerline -y
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/.oh-my-zsh/themes/powerlevel10k

git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
cd ~/.fzf/
./install

# instalaçao do i3

sudo apt-fast install feh -y
sudo apt-fast install xdotool -y
sudo snap install node --classic
sudo apt-fast install flameshot -y
sudo apt-fast install i3 -y
sudo apt-fast install i3status -y
sudo apt-fast install blueman -y
sudo apt-fast install tilix -y
sudo apt-fast install brightnessctl
sudo apt-fast install i3blocks -y

# other packages 

sudo apt-fast install gparted -y
sudo apt-fast install ffmpeg -y
sudo apt-fast install pavucontrol -y
sudo apt-fast install pulseaudio -y
sudo apt-fast install nautilus -y
sudo snap install code --classic
sudo npm install -g nodemon

	# installing mysql
# download mysql-apt-config and run dpkg
sudo apt-get update

sudo apt-fast install mysql-server -y
sudo sudo mysql_secure_installation

sudo apt-get update
sudo apt-fast install mysql-workbench-community -y


