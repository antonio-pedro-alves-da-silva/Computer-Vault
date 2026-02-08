

sed -i 's/plugins=(git)/plugins=(git zsh-syntax-highlighting zsh-autosuggestions sudo copypath dirhistory)/' ~/.zshrc
source ~/.zshrc

mkdir -p ~/.config/sway
mkdir -p ~/.config/preload
mkdir -p ~/.config/alacritty
mkdir -p ~/.config/alacritty/themes

sudo cp ~/Computer-Vault/linux-vault/linux-configuration-files/installation-package-configuration/sway/config ~/.config/sway/config
sudo cp ~/Computer-Vault/linux-vault/linux-configuration-files/installation-package-configuration/preload/preload.conf /etc/preload.conf
sudo cp ~/Computer-Vault/linux-vault/linux-configuration-files/installation-package-configuration/alacritty/ ~/.config/alacritty/alacritty.toml