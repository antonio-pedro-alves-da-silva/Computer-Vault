#1.generate new ssh key
ssh-keygen -t ed25519 -C "antoniopedroalvesdasilva.apads@gmail.com"
#2.copy the ssh key
xclip -sel clip < ~/.ssh/id_ed25519.pub
