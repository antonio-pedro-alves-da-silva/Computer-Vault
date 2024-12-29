pkill dunst;notify-send -t "$((2500))" "Numlock-Status:" "$(echo $(xset q | grep -o 'Num Lock:\s*\(off\|on\)'))"
