#!/bin/bash

# Get the state (replace this with your actual command)
STATE=$(find /sys/class/leds/ -name "*::numlock" -exec cat {}/brightness \; | head -n 1)

if [ "$STATE" -eq 1 ]; then
    echo "on"
else
    echo "off"
fi
