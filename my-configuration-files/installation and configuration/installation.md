# Installing chrome
download chrome

# essential packages for the installation

sudo apt-get install curl -y
sudo apt-get install snapd -y
# configuração do tmux(não terminado)

sudo apt-get install tilix
# configuração do zsh

sudo apt-get install zsh -y

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions.git ~/.oh-my-zsh/plugins/zsh-autosuggestions

sudo apt-get install fonts-powerline -y
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/.oh-my-zsh/themes/powerlevel10k

```text
Devo adicionar está parte manualmente ao 
~/.zshrc

#ZSH_THEME="powerlevel10k/powerlevel10k"
 
   Plugins
plugins=(git 
zsh-syntax-highlighting
zsh-autosuggestions
sudo
copypath
dirhistory
)

zsh-syntax-highlighting - ajuda a identificar erros de digitação
zsh-autosuggestions - ele sugere comandos com base no historico de comandos e mostra sugestoes se você digitar tab
sudo - redigitaria o comando com sudo ao usar escape
copypath - copiaria o diretorio atual ao usar copypath
dirhistory  - add shorthands to move through directories like alt+Left arrow

```


# configuração do i3

git clone --depth=1 https://github.com/AdnanHodzic/auto-cpufreq.git
cd auto-cpufreq && sudo ./auto-cpufreq-installer
sudo auto-cpufreq --install

sudo apt-get install feh -y
sudo apt-get install xdotool -y
sudo apt-get install nodejs -y
sudo apt-get install flameshot -y
sudo apt-get install i3 -y
sudo apt-get install i3status

```bash
' configuração do i3 '
git clone --depth=1 https://github.com/antonio-pedro-alves-da-silva/my-configuration-files
cp ~/Computer-Vault/my-configuration-files/i3/config ~/.config/i3/
sudo cp ~/Computer-Vault/my-configuration-files/i3/i3status.conf /etc/i3status.conf

```

# other packages 

sudo apt-get install ffmpeg -y
sudo apt-get install pavucontrol -y
sudo apt-get install thunar -y
sudo apt-get install blueman -y

download vscode 
download apache
