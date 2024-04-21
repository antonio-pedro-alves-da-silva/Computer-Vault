
const inputFile = "development_s1e1.mkv";
const subtitleFile = "subtitles.srt";
const translatedFile = "translated.srt";
const seriesAndInfo = inputFile.split(".")[0];
const seriesName = inputFile.split("_")[0];
const season = inputFile.match(/(?<=_s)\d+(?=e\d+.)/)[0];
const episode = inputFile.match(/(?<=_s\de)\d+(?=[.])/)[0];


const log = require("console");
const { exec } = require("child_process");
const fs = require("fs/promises");


let i = 0;
async function audioCutter(subtitleFile) {

  try {
    const subtitleData = await fs.readFile(subtitleFile, "utf8");
    let timingArr = subtitleData.match(/\d\d:\d\d:\d\d,\d\d\d --> \d\d:\d\d:\d\d,\d\d\d/gm);
    let n_with_equalArr = subtitleData.match(/\d+(?=[=])/gm);

    let c_cut = "";
    let list_of_files = "";

    await n_with_equalArr.map(async function (v, i, a) {


      let time = timingArr[v].split("-->");
      let startTime = time[0].trim().replace(",", ".");
      let endTime = time[1].trim().replace(",", ".");

      let c_cut = `ffmpeg -i ${inputFile} -vn -ss ${startTime} -to ${endTime} -q:a 0 ${seriesAndInfo}_${v}.mp3;`;

      exec(c_cut, function (error, stderr, stdout) {
        if (error) {
          console.log(error)
        } else {
          console.log(`audio cortado ${i}`)
        }
      })

      //list to concate all files
      list_of_files += `${seriesAndInfo}_${(v)}.mp3 `;

    });

    let cmdConcat = `ffmpeg -i "concat:${list_of_files.trim().split(" ").join("|")}" -acodec copy output.mp3`;
    exec(cmdConcat, (error, stdout, stderr) => {
      if (error) {
        console.log(error)
      }
      else if (stderr) {
        console.log(stderr)
      }
      else {
        console.log("all mp3 file was concatenate")
      }
    })


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
