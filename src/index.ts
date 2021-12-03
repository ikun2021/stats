// 需要使用node standard library时
//在命令行输入 npm install @types/node
import fs from 'fs';    //fs-filesystem
import { CsvReader } from './CsvReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('football.csv');
reader.read();
const matches =reader.data;
console.log(matches[0]);


let manUnitedWins = 0;

for(let match of matches){
  if(match[1]==='Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  }else if(match[2]==='Man United' && match[5] ===MatchResult.AwayWin){
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);