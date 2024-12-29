echo $(cpupower frequency-info | grep "The governor \".*\"" | grep -oP "(powersave|performance)");
