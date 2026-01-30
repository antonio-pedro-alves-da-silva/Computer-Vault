

sudo dnf update
sudo dnf install xvkbd git xclip npm curl micro -y

# instalação do zsh

sudo dnf install zsh -y

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions.git ~/.oh-my-zsh/plugins/zsh-autosuggestions

sudo dnf install fonts-powerline -y
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/.oh-my-zsh/themes/powerlevel10k
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf

cd ~/.fzf/
./install

# instalaçao do i3

sudo dnf install feh xset -y
sudo dnf install xdotool -y
sudo dnf install flameshot -y
sudo dnf install blueman -y
sudo dnf install tilix -y
sudo dnf install brightnessctl -y
sudo dnf install pavucontrol -y
sudo dnf install pulseaudio -y
sudo dnf install at -y
sudo dnf install gparted -y
sudo dnf install ffmpeg -y
sudo dnf install preload -y




