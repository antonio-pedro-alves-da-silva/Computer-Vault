

const { exec } = require("child_process");

// get window id = gwi

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
		let wid = `${stdout}`.replaceAll('\n','').split(" ");
		let gwp = "";
		if(!wid){
			console.log("there's no windown to get the pid")
		} else {
			
			wid.forEach((id,i,arr)=>{
					gwp += `xprop -id ${id} _NET_WM_PID\n`;
			})
		
			exec(gwp,(error,stdout,stdeer)=>{
				if(error){
					console.log(error)
				} 
				console.log(gwp)
				pids_array = stdout.match(/\d+/gm);
				
		
				// pause others programs
				pop = pids_array.map((v)=>{
					return `pkill -STOP -P ${v}`;
				}).join("\n")
		
				exec(pop,(error,stdout)=>{
					if(error){
						console.log(error)
					}
		
					console.log(pop)
				})
				// resume others programs
		
			})
		}
}) 


