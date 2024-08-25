



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
		 gwp += `xprop -id ${id} _NET_WM_PID\n`;
	})

	exec(gwp,(error,stdout,stdeer)=>{
		if(error){
			console.log(error)
		}
			
		pids_array = stdout.match(/\d+/gm);
		// pause others programs
		pop = pids_array.map((v)=>{
			return `pkill -KILL -P ${v}`;
		}).join("\n")

		exec(pop,(error,stdout)=>{
			if(error){
				console.log(error)
			}
		})
		// resume others programs

	})
}) 



