const { exec } = require("child_process");

const command = "pactl list sinks";

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.log(`erro ao executar o comando =>> ${err}`);
  } else {
    let arrSinks = stdout.match(/(?<=Sink #)\d+/gm);
    // increasing the audio
    let increase = `pactl set-sink-volume ${arrSinks[arrSinks.length - 1]} +10%`;
    exec(increase, (error, stdout, stderr) => {
      if (error) {
        console.log(error);
      }
    });
  }
});
