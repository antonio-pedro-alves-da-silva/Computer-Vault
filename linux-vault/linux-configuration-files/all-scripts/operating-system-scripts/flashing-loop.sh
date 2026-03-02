while true; do

BRIGHTNESS_DEVICE=$(brightnessctl info | grep 'Device' | awk '{print $2}' | sed 's/\x27//g' | head -n 1)
BATTERY_PERCENTAGE=$(upower -i $(upower -e | grep 'battery') | grep 'percentage:' | awk '{print $2}' | sed 's/%//')
BATTERY_STATE=$(upower -i /org/freedesktop/UPower/devices/battery_BAT1 | grep "state" | awk '{print $2}')

    if [ $BATTERY_STATE = "discharging" ] && [ $BATTERY_PERCENTAGE -le 30 ];then
        # Set brightness to 100%
        echo "$BATTERY_STATE";
        brightnessctl --device "$BRIGHTNESS_DEVICE" set 100%
        sleep 0.1 # Keep it bright for 0.1 seconds

        # Set brightness to 1%
        brightnessctl --device "$BRIGHTNESS_DEVICE" set 1%
        sleep 0.1 # Keep it dim for 0.1 seconds
    fi
done
