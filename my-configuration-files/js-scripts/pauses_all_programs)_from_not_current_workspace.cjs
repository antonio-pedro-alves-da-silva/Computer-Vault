



const { exec } = require("child_process");

// Pause Others Programs

let pop = `
current_workspace=$(wmctrl -d | grep '*' | awk '{print $1}')
all_windows_id="$(wmctrl -l | awk '{ if($2 != '$current_workspace') print $1;}' | tr '\n' ' ')"
echo $all_windows_id
`


exec(gwi,(error,stdout,stderr)=>{
	if(error){
		console.log(error)
	}
	// get window pid
	let gwp;
	let wid = `${stdout}`.split(' ');

	wid.forEach((id)=>{
		gwp = `xprop -id ${id} _NET_WM_PID`;

		exec(gwp,(err,stdout,stderr)=>{
			if(err){
				console.log(err)
			};
			console.log(stdout)
		})
	})

}) 

// for x in $all_windows_id;
// do
// 	pid=$(xprop -id $x _NET_WM_PID | grep -oP '\d+')
// 	echo $pid
//  	kill -STOP $pid
// done

// for x in ${all_windows_id};do
// 	echo $x
// done



// step 1 
// 	get current_workspace
// 	get all pids from not current workspace
// step 2


