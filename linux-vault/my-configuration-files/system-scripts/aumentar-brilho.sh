#!/bin/bash
current_brightness=$(xrandr --verbose | grep -m 1 -i brightness | awk '{print $2}')
new_brightness=$(echo "$current_brightness + 0.1" | bc)
output_name=$(xrandr | grep " connected primary" | awk '{print $1}')
xrandr --output $output_name --brightness $new_brightness
