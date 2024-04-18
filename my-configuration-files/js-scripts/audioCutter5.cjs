
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

    n_with_equalArr.map(async function (v, i, a) {


      let time = timingArr[v].split("-->");
      let startTime = time[0].trim().replace(",", ".");
      let endTime = time[1].trim().replace(",", ".");

      c_cut += `ffmpeg -i ${inputFile} -vn -ss ${startTime} -to ${endTime} -q:a 0 ${seriesAndInfo}_${v}.mp3;`;
      list_of_files += `${seriesAndInfo}_${(v)}.mp3 `;

    });

    console.log(c_cut,list_of_files)

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
