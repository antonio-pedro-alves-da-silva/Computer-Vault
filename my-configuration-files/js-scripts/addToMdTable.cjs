const inputFile = "development_s1e9.mkv";
const subtitleFile = "subtitles.srt";
const translatedFile = "translated.srt";
const seriesAndInfo = inputFile.split(".")[0];
const seriesName = inputFile.split("_")[0];
const season = inputFile.match(/(?<=_s)\d+(?=e\d+.)/)[0];
const episode = inputFile.match(/(?<=_s\de)\d+(?=[.])/)[0];

const log = require("console");
const exec = require("child_process");
const fs = require("fs/promises");


async function generateMdTable(subtitleFile,translatedFile,FirstRow) {
    let ArrayList = [];
    try {
        const subtitleData = await fs.readFile(subtitleFile, "utf8");
        const translatedData = await fs.readFile(translatedFile, "utf8");

        let translatedTextArr = translatedData.split(/\d\d:\d\d:\d\d,\d\d\d --> \d\d:\d\d:\d\d,\d\d\d/gm);
        let subtitleTextArr = subtitleData.split(/\d\d:\d\d:\d\d,\d\d\d --> \d\d:\d\d:\d\d,\d\d\d/gm);
        let n_with_equalArr = subtitleData.match(/\d+(?=[=])/gm);
        // creating an array to create the table
        n_with_equalArr.map((v,i,a)=>{
            let subtitleText = removeNumberAtTheEnd(removeScape(subtitleTextArr[v]));
            let translatedText = removeNumberAtTheEnd(removeScape(translatedTextArr[v]));

            ArrayList.push([(i+1),subtitleText,translatedText]);
        })
       // creating the table
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


    } catch (err) {
        console.error(`Error reading file: ${err}`);
        throw err; // Propagate the error
    }

}

generateMdTable(subtitleFile,translatedFile,"|n|English|Portuguese|")

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
   return string.replace(/(\d+\s+$)/,' ');
}
