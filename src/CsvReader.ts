import  fs  from "fs";
import { MatchResult } from "./MatchResult";
import { dataStringToDate } from "./utils";

//define a tuple that represents a row
export type MatchData = [Date,string,string,number,number,MatchResult,string];

//泛型的使用
export abstract class CsvReader<T>{
  data:T[] = [];

  constructor(public fileName:string){}

  abstract mapRow(row:string[]):T;

  read():void{
    this.data = fs
    .readFileSync(this.fileName,{
      encoding:'utf-8'
    })
    .split('\n')
    .map(
      (row:string):string[] => {
        return row.split(',');
      }
    )
    .map(this.mapRow);  //传入方法的reference，不用执行！！
  }
}