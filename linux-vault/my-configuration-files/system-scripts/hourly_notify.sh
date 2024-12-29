#!/bin/bash
while true; do
    current_minute=$(date +%M)
    if [ "$current_minute" -eq "00" ]; then
        current_time=$(date +"%d/%m/%Y %H:%M")
        notify-send -t $((1000 * 60 * 60)) -u critical "Time Notification" "It's $current_time now!"
        sleep 60  # Wait 1 minute to avoid multiple notifications for the same hour
    fi
    sleep 10  # Check every 10 seconds
done
