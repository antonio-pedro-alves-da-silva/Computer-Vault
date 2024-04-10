const inputFile = "arrested-development_s1e1.mkv";
const srtFile = "subtitles.srt";
const seriesAndInfo = inputFile.split(".")[0];
const seriesName = inputFile.split("_")[0];
const season = inputFile.match(/(?<=_s)\d+(?=e\d+.)/)[0];
const episode = inputFile.match(/(?<=_s\de)\d+(?=[.])/)[0];


const log = require("console");
const exec = require("child_process");
const fs = require("fs/promises")


async function generateSrtArray(File) {
    let srtArray = [];
    try {
        const data = await fs.readFile(File, "utf8");

        let numberArray = data.match(/^\d+$/gm);
        let timeSrt = data.match(/\d\d:\d\d:\d\d,\d\d\d --> \d\d:\d\d:\d\d,\d\d\d/gm);
        let text = data.split(/\d\d:\d\d:\d\d,\d\d\d --> \d\d:\d\d:\d\d,\d\d\d/gm);
    
        for (let i = 0; i < text.length - 1; i++) {
            srtArray.push([numberArray[i], timeSrt[i], text[i]]);
        };
        return srtArray;
        
    } catch (err) {
        console.error(`Error reading file: ${err}`);
        throw err; // Propagate the error
    }
    

}

generateSrtArray(srtFile).then((result) => {
    gen
}).catch((error) => {
    console.error("Promise rejected with error:", error);
})

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