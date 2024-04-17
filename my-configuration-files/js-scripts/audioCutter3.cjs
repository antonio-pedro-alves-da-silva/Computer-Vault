//  Audio Cutter1 7 minutes  with 20
//  Audio Cutter1

const {log} = require("console");
const {exec} = require("child_process");

let n = 0;

const inputFile = "development_s1e1.mkv";
const srtFile = "subtitles.srt";
const seriesAndInfo = inputFile.split(".")[0];
const seriesName = inputFile.split("_")[0];
const season = inputFile.match(/(?<=_s)\d+(?=e\d+.)/)[0];
const episode = inputFile.match(/(?<=_s\de)\d+(?=[.])/)[0];
let list_of_files = ""; 

function audioCutter() {
  const fs = require("fs");
  
  fs.readFile(srtFile, "utf8", (err, data) => {
    if (err) {
      console.error("Erro ao ler o arquivo:", err);
      return;
    }

    let regex = new RegExp(
      /\d\d:\d\d:\d\d,\d\d\d --> \d\d:\d\d:\d\d,\d\d\d/,
      "gm"
      );
      let texts = data.split(regex);
      let timings = data.match(regex);
      // removendo o ultimo numero
      texts = texts.map(function (text) {
        return reverseString(reverseString(text).replace(/\d+/, ""));
      });
      
      // cortando de n em n

      let time = timings[n].split("-->");
      let startTime = time[0].trim().replace(",", ".");
      let endTime = time[1].trim().replace(",", ".");
      
      // to copy only the audio
      let command = `ffmpeg -i ${inputFile} -vn -ss ${startTime} -to ${endTime} -q:a 0 ${seriesAndInfo}_${(n + 1)}.mp3`;
      
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error("Erro ao cortar o áudio:", error);
        } else {
          
        list_of_files += `${seriesAndInfo}_${(n + 1)}.mp3 `;
        console.log(`corte concluido :${n+1}`);
        
        n += 1;
        if ((n + 1) == timings.length) {
          console.log(`todos os audio foram concluidos`);
          console.log('começando a concatenar');
          // concatenate all files
          let cmdConcat = `ffmpeg -i "concat:${list_of_files.trim().split(" ").join("|")}" -acodec copy output.mp3`;
          exec(cmdConcat,(error,stdout,stderr)=>{
              if(error){
                console.log(error)
              }
              else if(stderr){
                console.log(stderr)
              }
              else {
                console.log("all mp3 file was concatenate")
              }
          })

        } else {
          audioCutter();
        }
      }
    });
  });
}

audioCutter();

// função que reverte uma string
function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

// função que convert srt file time into milliseconds

function SrtTimingToMiliseconds(timing) {
  let regex = new RegExp(/[:,]/gm);
  let ArrTiming = timing.split(regex);
  return ArrTiming[0] * 60 * 60 * 100 + ArrTiming[1] * 60 * 100 + ArrTiming[2] * 100 + ArrTiming[3];
}

// function that converts milliseconds to srt timing

function MillisecondsToSrtTiming(){

}

