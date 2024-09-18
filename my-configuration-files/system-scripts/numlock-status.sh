
#!/bin/bash

# Initialize previous state variable
prev_state=""

while true; do
    # Get the current state of Num Lock (on/off)
    current_state=$(xset q | grep -o "Num Lock:\s*\(off\|on\)")

    # Check if the state has changed
    if [ "$current_state" != "$prev_state" ]; then
        # Update the previous state
        prev_state="$current_state"
        
        # Display the state in the i3block (output to stdout)
        echo "$current_state"

        # Send a notification when the state changes
        notify-send "Num Lock Status" "$current_state"
    fi

    # Sleep for 1 second
    sleep 1
done
