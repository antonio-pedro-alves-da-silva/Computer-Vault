

git clone --depth=1 https://github.com/AdnanHodzic/auto-cpufreq.git
cd auto-cpufreq && sudo ./auto-cpufreq-installer
sudo auto-cpufreq --install
sudo auto-cpufreq --force=performance

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

# essential packages
sudo pacman -S xorg-xinit --noconfirm
sudo pacman -S feh --noconfirm
sudo pacman -S xdotool --noconfirm
sudo pacman -S flameshot --noconfirm
sudo pacman -S tilix --noconfirm
sudo pacman -S brightnessctl --noconfirm
sudo pacman -S pavucontrol --noconfirm
sudo pacman -S pulseaudio --noconfirm
sudo pacman -S micro --noconfirm
sudo pacman -S nautilus --noconfirm
sudo pacman -S node --noconfirm


sudo pacman -S preload --noconfirm
sudo pacman -S nodemon --noconfirm
sudo pacman -S i3 i3blocks --noconfirm
