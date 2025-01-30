
sudo apt update
sudo apt install xvkbd git xclip npm -y

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
sudo apt install brightnessctl -y
sudo apt install i3blocks -y
sudo apt install pavucontrol -y
sudo apt install pulseaudio -y
sudo apt install at -y
sudo apt install micro -y
sudo apt install gparted -y
sudo apt install ffmpeg -y
sudo apt install preload -y




