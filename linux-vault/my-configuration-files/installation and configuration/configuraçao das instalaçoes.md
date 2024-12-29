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

```bash
' configuração do i3 '
git clone --depth=1 https://github.com/antonio-pedro-alves-da-silva/Computer-Vault
sudo cp ~/Computer-Vault/linux-vault/my-configuration-files/i3/config ~/.config/i3/
sudo cp ~/Computer-Vault/linux-vault/my-configuration-files/i3/i3blocks.conf /etc/
sudo cp ~/Computer-Vault/linux-vault/my-configuration-files/preload/preload.conf /etc/preload.conf
sudo cp ~/Computer-Vault/linux-vault/my-configuration-files/i3blocks/scripts/* /usr/share/i3blocks

```


