import { dataStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { DataReader } from "./CsvReader";
import { MatchData } from "./MatchData";



//不同于inheritance，这是conposition
// MatchReader has a DataReader
export class MatchReader {
  reader: DataReader;
  matches:MatchData[]=[];

  constructor(reader:DataReader){
    this.reader=reader;
  }

  load():void{
    this.reader.read();
    this.matches=this.reader.data.map(
      (row:string[]):MatchData =>{
        return [
          dataStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,  //type assertion
          row[6]
        ];
      }
    );
  }
}