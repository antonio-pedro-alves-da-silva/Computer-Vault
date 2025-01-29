git clone --depth=1 https://github.com/antonio-pedro-alves-da-silva/Computer-Vault
sed -i 's/plugins=(git)/plugins=(git zsh-syntax-highlighting zsh-autosuggestions sudo copypath dirhistory)/' ~/.zshrc
source ~/.zshrc

sudo cp ~/Computer-Vault/linux-vault/my-configuration-files/i3/config ~/.config/i3/
sudo cp ~/Computer-Vault/linux-vault/my-configuration-files/i3/i3blocks.conf /etc/
sudo cp ~/Computer-Vault/linux-vault/my-configuration-files/preload/preload.conf /etc/preload.conf
sudo cp ~/Computer-Vault/linux-vault/my-configuration-files/i3blocks/scripts/* /usr/share/i3blocks

