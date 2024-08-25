



const { exec } = require("child_process");

// Pause Others Programs

let gwi = `
current_workspace=$(wmctrl -d | grep '*' | awk '{print $1}')
all_windows_id="$(wmctrl -l | awk '{ if($2 != '$current_workspace') print $1;}' | tr '\n' ' ')"
echo $all_windows_id
`

exec(gwi,(error,stdout,stderr)=>{
	if(error){
		console.log(error)
	}
	// instructions to get all window pid
	let gwp = "";
	let wid = `${stdout}`.replaceAll('\n','').split(" ");
	wid.forEach((id,i,arr)=>{
		 gwp += `xprop -id ${id} _NET_WM_PID\n`
	})

	exec(gwp,(error,stdout,stdeer)=>{
		if(error){
			console.log(error)
		}
		// Pause Others Programs
		let pop = ""; 
		pids_array = stdout.match(/\d+/gm);
		// pause others programs
		pids_array.forEach((v)=>{
			pop =+ `kill -SIGKILL ${v}\n`;
		})

	})
}) 



