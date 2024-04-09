const inputFile = "arrested-development_s1e1.mkv";
const srtFile = "subtitles.srt";
const seriesAndInfo = inputFile.split(".")[0];
const seriesName = inputFile.split("_")[0];
const season = inputFile.match(/(?<=_s)\d+(?=e\d+.)/)[0];
const episode = inputFile.match(/(?<=_s\de)\d+(?=[.])/)[0];


const { exec } = require("child_process");
const fs = require("fs").promises; // Import fs promises for async/await
const { log } = require("console");
import {markdownTable} from 'markdown-table';

async function generateSrtArray(File) {
    let srtArray = [];
    try {
        const data = await fs.readFile(File, "utf8");

        let numberArray = data.match(/^\d+$/gm);
        let timeSrt = data.match(/\d\d:\d\d:\d\d,\d\d\d --> \d\d:\d\d:\d\d,\d\d\d/gm);
        let text = data.split(/\d\d:\d\d:\d\d,\d\d\d --> \d\d:\d\d:\d\d,\d\d\d/gm);
    
        for (let i = 0; i < text.length - 1; i++) {
            srtArray.push([numberArray[i], timeSrt[i], text[i]]);
        }
        
    } catch (err) {
        console.error(`Error reading file: ${err}`);
        throw err; // Propagate the error
    }
    return srtArray;

}


console.log