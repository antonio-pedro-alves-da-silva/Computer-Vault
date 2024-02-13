# size and output name of the new display
output_name=$(xrandr | grep " connected primary" | awk '{print $1}')
width=$(xrandr | grep current | grep -oP '(?<=current).[^,]*' | awk '{print $1}')
height=$(xrandr | grep current | grep -oP '(?<=current).[^,]*' | awk '{print $3}')

# increasing the current resolution 
i_width=$(expr $width / 10 + $width)
i_height=$(expr $height / 10 + $height)
gtf=$(gtf $(expr $i_width) $(expr $i_height) 60 | grep -oP '(?<=Modeline ).*')
new_display=$(echo $gtf | awk '{print $1}')

xrandr --newmode $gtf
xrandr --addmode $output_name $new_display
xrandr -s $(echo $new_display | bc)

feh --bg-scale ~/my-configuration-files/wallpaper/fundo-de-galaxia-em-aquarela.jpg
