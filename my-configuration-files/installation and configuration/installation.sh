apt update
add-apt-repository ppa:apt-fast/stable
apt install apt-fast -y

git clone --depth=1 https://github.com/AdnanHodzic/auto-cpufreq.git
cd auto-cpufreq && sudo ./auto-cpufreq-installer
auto-cpufreq --install
auto-cpufreq --force=performance

apt-fast install curl -y
apt-fast install snapd -y
# configuração do tmux(não terminado)

apt-fast install tilix
# configuração do zsh

apt-fast install zsh -y

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions.git ~/.oh-my-zsh/plugins/zsh-autosuggestions

apt-fast install fonts-powerline -y
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/.oh-my-zsh/themes/powerlevel10k

# instalaçao do i3

apt-fast install feh -y
apt-fast install xdotool -y
apt-fast install nodejs -y
apt-fast install flameshot -y
apt-fast install i3 -y
apt-fast install i3status -y


# other packages 
apt-fast install gparted -y
apt-fast install ffmpeg -y
apt-fast install pavucontrol -y
apt-fast install thunar -y
apt-fast install blueman -y

download vscode 
download apache
