
function remainingTimeUntilDate(dateInMilliseconds,dateProperties){
  let reDate = dateInMilliseconds - Date.now();

  /*
    years 1000 * 60 * 60 * 24 * (amount of days of the year)
    days 1000 * 60 * 60 * 24
    hours 1000 * 60 * 60
    minutes 1000 * 60
    seconds 1000
    milliseconds 
  */

  const amount = (new Date().getFullYear() % 4) == 0 ? 366 : 355
  let objDivide = {
    totalMilliSeconds:1,
    years:1000 * 60 * 60 * 24 * amount,
    days:1000 * 60 * 60 * 24,
    hours:1000 * 60 * 60,
    minutes:1000 * 60,
    seconds:1000,
    milliseconds:1,
  };
  
  let objDate = {
    totalMilliSeconds: '',
    years: '',
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
    milliseconds: '',
  };
  
  for(x of dateProperties){
    objDate[x] = Math.floor(reDate / objDivide[x]);
    let remainder = reDate % objDivide[x];
    reDate = (remainder == 0) ? reDate : remainder;
  }

  return objDate;
};

const date = new Date(2025,0,27,11,15).getTime();
const objDate = remainingTimeUntilDate(date,
  ['totalMilliSeconds','years','days','hours','minutes','seconds','milliseconds']);


console.log(`${objDate.days}days ${objDate.hours}hours ${objDate.minutes}minutes`);

