

current_workspace=$(wmctrl -d | grep '*' | awk '{print $1}'
)

all_windows_id="$(wmctrl -l | awk '{ if($2 != '$current_workspace') print $1;}' | tr '\n ' ' ')"


for x in $all_windows_id;
do
	pid=$(xprop -id $x _NET_WM_PID | grep -oP '\d+')
	echo $pid
 	kill -STOP $pid
done

for x in ${all_windows_id};do
	echo $x
done



step 1 
	get current_workspace
	get all pids from not current workspace
step 2


