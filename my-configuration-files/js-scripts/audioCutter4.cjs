
const log = require("console");
const { exec } = require("child_process");
const fs = require("fs/promises");
const { stdout, stderr } = require("process");


const inputFile = "development_s1e4.mkv";
const subtitleFile = "subtitles.srt";
const translatedFile = "translated.srt";
const seriesAndInfo = inputFile.split(".")[0];
const seriesName = inputFile.split("_")[0];
const season = inputFile.match(/(?<=_s)\d+(?=e\d+.)/)[0];
const episode = inputFile.match(/(?<=_s\de)\d+(?=[.])/)[0];







let i = 0;
async function audioCutter(subtitleFile) {

  try {
    const subtitleData = await fs.readFile(subtitleFile, "utf8");
    let timingArr = subtitleData.match(/\d\d:\d\d:\d\d,\d\d\d --> \d\d:\d\d:\d\d,\d\d\d/gm);
    let n_with_equalArr = subtitleData.match(/\d+(?=[=])/gm);

    let c_cut_concat = "";
    let list_of_files = "";

    //  creating the command 

    n_with_equalArr.map((v, i, a) => {

      let time = timingArr[v].split("-->");
      let startTime = time[0].trim().replace(",", ".");
      let endTime = time[1].trim().replace(",", ".");

      c_cut_concat += `ffmpeg -i ${inputFile} -vn -ss ${startTime} -to ${endTime} -q:a 0 ${seriesAndInfo}_${v}.mp3;`;
      list_of_files += `${seriesAndInfo}_${v}.mp3 `

      if (i == a.length - 1) {
        c_cut_concat += `ffmpeg -i "concat:${list_of_files.trim().split(" ").join("|")}" -acodec copy output.mp3`;
        exec(c_cut_concat, (error) => {
          if (error) {
            console.log(error)
          } else {
            console.log('all audio was cut and concatenate')
          }
        })
      }
    });


  } catch (err) {
    console.error(`Error reading file: ${err}`);
    throw err; // Propagate the error
  }
}


audioCutter(subtitleFile);

function removeScape(string) {
  return string.replace(/(\n)|(\r)|(\r\n)/gm, ' ');

}


function removeNumberAtTheEnd(string) {
  return string.replace(/(\d+\s+$)/, ' ');
}
