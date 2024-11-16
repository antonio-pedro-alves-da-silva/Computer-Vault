output=$(xset q | grep -o "Num Lock:\s*\(off\|on\)")
if [[ "$output" == "Num Lock:    off" ]]; then
  echo -e "\x1b[31m$output\x1b[0m"  # Red if Num Lock is off
else
  echo -e "\x1b[32m$output\x1b[0m"  # Green if Num Lock is on
fi

