const { exec } = require("child_process");

// get window id

let gwi = `
current_workspace=$(wmctrl -d | grep '*' | awk '{print $1}')
all_windows_id="$(wmctrl -l | awk '{ if($2 == '$current_workspace') print $1;}' | tr '\n' ' ')"
echo $all_windows_id
`;

exec(gwi, (error, stdout, stderr) => {
  if (error) {
    console.log(error);
  }
  // instructions to get all window pid
  let gwp = "";
  let wid = `${stdout}`.replaceAll("\n", "").split(" ");
  if (!wid) {
    console.log("There's no window id to get to get the pid");
  } else {
    wid.forEach((id, i, arr) => {
      gwp += `xprop -id ${id} _NET_WM_PID\n`;
    });

    exec(gwp, (error, stdout, stdeer) => {
      if (error) {
        console.log(error);
      }
      console.log(gwp);
      pids_array = stdout.match(/\d+/gm);
      // resume others programs
      rop = pids_array
        .map((v) => {
          return `pkill -SIGKILL -P ${v}`;
        })
        .join("\n");

      exec(rop, (error, stdout) => {
        if (error) {
          console.log(error);
        }
        console.log(rop);
      });
    });
  }
});
