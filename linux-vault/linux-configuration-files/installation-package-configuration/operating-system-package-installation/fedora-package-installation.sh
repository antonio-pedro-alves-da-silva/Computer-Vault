

sudo dnf update

# command-line utility
sudo dnf install feh -y
sudo dnf install at -y
sudo dnf install ffmpeg -y
sudo dnf install preload -y
sudo dnf install xdotool -y
sudo dnf install brightnessctl -y
sudo dnf install pulseaudio -y
sudo dnf install xclip -y
sudo dnf install curl -y
sudo dnf install git -y
sudo dnf install npm -y
sudo dnf install flatpak -y
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo


# zsh installation
sudo dnf install zsh -y
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions.git ~/.oh-my-zsh/plugins/zsh-autosuggestions
sudo dnf install fonts-powerline -y
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/.oh-my-zsh/themes/powerlevel10k
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
cd ~/.fzf/
./install

# software development tools
sudo dnf install node -y

# graphical utility

sudo dnf install gparted -y
sudo dnf install blueman -y
sudo dnf install pavucontrol -y
sudo dnf install xvkbd -y
sudo dnf install micro -y
sudo dnf install libreoffice -y
sudo dnf copr enable atim/alacritty
sudo dnf install alacritty -y
flatpak install flathub md.obsidian.Obsidian -y
flatpak install flathub org.flameshot.Flameshot -y
sudo dnf install nautilus -y


