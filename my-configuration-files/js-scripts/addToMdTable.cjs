const inputFile = "arrested-development_s1e1.mkv";
const subtitleFile = "subtitles.srt";
const translatedFile = "translated.srt";
const seriesAndInfo = inputFile.split(".")[0];
const seriesName = inputFile.split("_")[0];
const season = inputFile.match(/(?<=_s)\d+(?=e\d+.)/)[0];
const episode = inputFile.match(/(?<=_s\de)\d+(?=[.])/)[0];


const log = require("console");
const exec = require("child_process");
const fs = require("fs/promises");


async function generateSrtArray(subtitleFile,translatedFile) {
    let srtArray = [];
    try {
        const subtitleData = await fs.readFile(subtitleFile, "utf8");
        const translatedData = await fs.readFile(translatedFile, "utf8");

        let translatedText = translatedData.split(/\d\d:\d\d:\d\d,\d\d\d --> \d\d:\d\d:\d\d,\d\d\d/gm);
        let subtitleText = subtitleData.split(/\d\d:\d\d:\d\d,\d\d\d --> \d\d:\d\d:\d\d,\d\d\d/gm);
    
        for (let i = 0; i < text.length - 1; i++) {
            console.log();
            srtArray.push([removeNumberAtTheEnd(removeScape(translatedText[i])),removeNumberAtTheEnd(removeScape(subtitleText[i])),`[[]]`]);

        };
        return srtArray;
        
    } catch (err) {
        console.error(`Error reading file: ${err}`);
        throw err; // Propagate the error
    }
    

}
generateSrtArray(subtitleFile,translatedFile)
// generateSrtArray(srtFile).then((result)=>{
//     arrayToMdTable(result,"|line1|line2|line3|")
// }).catch((err)=>{
//     console.log('Problem solving promise : ',err)
// })

// function that generate a table with an collection of an Array |english|portuguese|audio|

function arrayToMdTable(ArrayList,FirstRow){

    let SecondRow = '|';
    FirstRow.match(/[|]/gm).forEach((v,i,a)=>{
        if (i > 0) SecondRow += '--|'
    });

    let restOfTheLines = '';
    ArrayList.map((v,i,a)=>{
        v.map((v2,i2,a2)=>{
            restOfTheLines += `|${v2}`
        })
        restOfTheLines += '|\n'
    })

    let table = `${FirstRow}\n${SecondRow}\n${restOfTheLines}`;
    console.log(table)

}

function reverseString(string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
      reversedString += string[i];
    }
    return reversedString;
  }

function removeScape(string){
    return string.replace(/(\n)|(\r)|(\r\n)/gm,' ');
    
}


function removeNumberAtTheEnd(string){
   string.replace(/(\d+)$/,' ');
}
